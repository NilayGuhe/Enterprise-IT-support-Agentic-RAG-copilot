import json
import logging
import time
import uuid
from pathlib import Path

from fastapi import APIRouter, UploadFile, File, HTTPException, Header
from fastapi.responses import StreamingResponse
from pydantic import BaseModel, Field

from app.core.config import get_settings
from app.rag.workflow import agent_graph, ask_async, initial_state
from app.rag.vectorstore import add_documents
from app.services.ingestion import load_file, chunk_documents, SUPPORTED
from app.services.audit import write_audit


router = APIRouter(prefix="/api")
settings = get_settings()
logger = logging.getLogger(__name__)


class ChatRequest(BaseModel):
    question: str = Field(min_length=2, max_length=3000)


def sse_event(event: str, data: dict) -> str:
    return f"event: {event}\ndata: {json.dumps(data, default=str)}\n\n"


@router.get("/health")
def health():
    return {"status": "ok", "service": settings.app_name}


@router.post("/chat")
async def chat(payload: ChatRequest):
    """Non-streaming compatibility endpoint, using async graph execution."""
    try:
        result = await ask_async(payload.question)

        try:
            write_audit(
                payload.question,
                result.get("source_used", "unknown"),
                result.get("trace", []),
            )
        except Exception:
            logger.exception("Audit logging failed")

        return {
            "answer": result.get("answer", ""),
            "source_used": result.get("source_used", ""),
            "trace": result.get("trace", []),
            "citations": result.get("citations", []),
            "rewritten_query": result.get("current_query", payload.question),
        }

    except Exception:
        logger.exception("Chat request failed")
        raise HTTPException(
            status_code=500,
            detail="Unable to process your request. Please try again.",
        )


@router.post("/chat/stream")
async def chat_stream(payload: ChatRequest):
    request_id = str(uuid.uuid4())
    started_at = time.perf_counter()

    async def event_generator():
        state = initial_state(payload.question)

        try:
            # First event is yielded immediately so the browser knows the stream opened.
            yield sse_event("start", {
                "request_id": request_id,
                "message": "Agent workflow started",
            })

            async for part in agent_graph.astream(
                state,
                stream_mode=["updates", "custom"],
                version="v2",
            ):
                if part["type"] == "custom":
                    custom_data = part["data"]
                    if isinstance(custom_data, dict) and custom_data.get("type") == "token":
                        yield sse_event("token", {
                            "content": custom_data.get("content", ""),
                        })

                elif part["type"] == "updates":
                    for node_name, node_update in part["data"].items():
                        state.update(node_update)

                        yield sse_event("trace", {
                            "node": node_name,
                            "trace": node_update.get("trace", state.get("trace", [])),
                        })

            try:
                write_audit(
                    payload.question,
                    state.get("source_used", "unknown"),
                    state.get("trace", []),
                )
            except Exception:
                logger.exception("Audit logging failed for request %s", request_id)

            yield sse_event("complete", {
                "request_id": request_id,
                "answer": state.get("answer", ""),
                "source_used": state.get("source_used", ""),
                "citations": state.get("citations", []),
                "trace": state.get("trace", []),
                "rewritten_query": state.get("current_query", payload.question),
                "total_time_seconds": round(time.perf_counter() - started_at, 3),
            })

        except Exception:
            logger.exception("Streaming request %s failed", request_id)
            yield sse_event("error", {
                "request_id": request_id,
                "message": "The agent could not complete this request. Please try again.",
            })

    return StreamingResponse(
        event_generator(),
        media_type="text/event-stream",
        headers={
            "Cache-Control": "no-cache, no-transform",
            "Connection": "keep-alive",
            "X-Accel-Buffering": "no",
        },
    )


@router.post("/ingest")
async def ingest(file: UploadFile = File(...), x_admin_key: str = Header(default="")):
    if x_admin_key != settings.admin_api_key:
        raise HTTPException(status_code=401, detail="Invalid admin key")

    suffix = Path(file.filename or "").suffix.lower()
    if suffix not in SUPPORTED:
        raise HTTPException(
            status_code=400,
            detail=f"Supported: {', '.join(sorted(SUPPORTED))}",
        )

    upload_dir = Path(settings.upload_dir)
    upload_dir.mkdir(parents=True, exist_ok=True)
    dest = upload_dir / Path(file.filename).name

    try:
        dest.write_bytes(await file.read())
        docs = load_file(dest)
        chunks = chunk_documents(docs)
        ids = add_documents(chunks)
        return {
            "message": "Document indexed",
            "file": dest.name,
            "chunks": len(chunks),
            "ids_created": len(ids),
        }
    except HTTPException:
        raise
    except Exception:
        logger.exception("Document ingestion failed")
        raise HTTPException(
            status_code=500,
            detail="Document ingestion failed. Check the server logs.",
        )
    finally:
        await file.close()