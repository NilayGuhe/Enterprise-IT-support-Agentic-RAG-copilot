# Enterprise IT Support Agentic RAG Copilot — Implementation Steps

1. **`requirements.txt`** — Add the required libraries for LangGraph, LangChain, Gemini, Hugging Face, Pinecone, Tavily, FastAPI, and document loading.

2. **`.env`** — Add Google, Tavily, and Pinecone API keys, Gemini model name, Hugging Face embedding model, Pinecone index/namespace, and retrieval settings.

3. **`app/core/config.py`** — Read all `.env` values through one centralized settings class.

4. **`data/sample_kb/`** — Add the two synthetic knowledge-base files: the 50-record IT Support Handbook and the 25-record IT Service Desk Runbook.

5. **`app/services/ingestion.py`** — Load PDF, TXT, Markdown, and DOCX files, extract text, preserve metadata, and split documents into chunks.

6. **`app/rag/vectorstore.py`** — Configure Hugging Face MiniLM embeddings, connect to Pinecone, store document vectors, and create the retriever.

7. **`scripts/ingest_sample_kb.py`** — Load the sample IT documents, chunk them, generate embeddings, and upload them to the Pinecone index.

8. **`app/rag/state.py`** — Define the LangGraph state for the question, intent, retrieved documents, evidence grades, web results, answer, source, retry count, citations, and execution trace.

9. **`app/rag/nodes.py` and `app/rag/prompts.py`** — Implement the routing, retrieval, evidence grading, Tavily search, query rewriting, answer generation, and insufficient-evidence nodes and prompts.

10. **`app/rag/workflow.py`** — Build the LangGraph workflow: Route → Retrieve → Grade → Web Search (when needed) → Rewrite/Retry (within the retry limit) → Generate Answer.

11. **`app/services/audit.py`** — Record questions, source used, retrieved document references, workflow trace, retry count, and errors without logging passwords, MFA codes, or API keys.

12. **`app/api/routes.py`** — Create FastAPI endpoints for chat, health checks, authorized document uploads, and audit information.

13. **`app/main.py`** — Create the FastAPI application and connect the API routes, templates, and static files.

14. **`templates/index.html` and `static/css/style.css`** — Build the chat interface with a clean enterprise layout, answer area, source panel, workflow trace, and document-upload section.

15. **`static/js/app.js`** — Connect the frontend to FastAPI and display answers, citations, source routes, execution traces, and upload results.

16. **`run.py`** — Create the entry point to start the FastAPI application with Uvicorn.

---

**Project stack:** Gemini 3.5 Flash-Lite · Hugging Face `sentence-transformers/all-MiniLM-L6-v2` (384 dimensions) · Pinecone · Tavily · LangChain · LangGraph · FastAPI.

**Development order:** Set up environment → Add knowledge-base files → Build ingestion → Configure Pinecone retrieval → Build and test LangGraph → Add audit logging → Create FastAPI endpoints → Build frontend → Run and test the application.

**Note:** The two knowledge-base files are synthetic demo data. Validate their policies before using them as real organizational guidance. The FastAPI, audit, upload, and frontend components are implementation tasks until completed and tested.
