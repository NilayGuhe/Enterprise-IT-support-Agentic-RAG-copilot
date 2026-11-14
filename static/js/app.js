const chat = document.getElementById("chat");
const form = document.getElementById("chatForm");
const question = document.getElementById("question");
const trace = document.getElementById("trace");
const sourceUsed = document.getElementById("sourceUsed");

const modal = document.getElementById("uploadModal");
const uploadButton = document.getElementById("uploadBtn");
const fileInput = document.getElementById("fileInput");
const adminKey = document.getElementById("adminKey");
const uploadStatus = document.getElementById("uploadStatus");

const openObservability = document.getElementById("openObservability");
const backToChat = document.getElementById("backToChat");

/* -----------------------------
   Navigation
----------------------------- */

function showChat() {
    document.body.classList.remove("observability-active");
    document.getElementById("observabilityScreen")?.setAttribute("aria-hidden", "true");
}

function showObservability() {
    document.body.classList.add("observability-active");
    document.getElementById("observabilityScreen")?.setAttribute("aria-hidden", "false");
}

openObservability?.addEventListener("click", showObservability);
backToChat?.addEventListener("click", showChat);

/* -----------------------------
   Security and formatting
----------------------------- */

function escapeHtml(value = "") {
    return String(value).replace(/[&<>\'"]/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;"
    })[char]);
}

function extractText(value) {
    if (value == null) return "";
    if (typeof value === "string") return value;

    if (Array.isArray(value)) {
        return value.map(item => {
            if (typeof item === "string") return item;
            if (item && typeof item === "object") {
                if (typeof item.text === "string") return item.text;
                if (typeof item.content === "string") return item.content;
            }
            return "";
        }).filter(Boolean).join("");
    }

    if (typeof value === "object") {
        if (typeof value.text === "string") return value.text;
        if (typeof value.answer === "string") return value.answer;
        if (typeof value.content === "string") return value.content;
        if (typeof value.output === "string") return value.output;
    }

    return String(value);
}

function formatText(value = "") {
    return escapeHtml(extractText(value)).replace(/\n/g, "<br>");
}

function safeHttpUrl(value) {
    try {
        const url = new URL(String(value));
        return ["https:", "http:"].includes(url.protocol) ? url.href : null;
    } catch {
        return null;
    }
}

/* -----------------------------
   Chat messages
----------------------------- */

function addMessage(role, text, source = "", citations = []) {
    const wrap = document.createElement("div");
    wrap.className = `message ${role}`;

    const avatarHtml = role === "assistant" ? '<div class="avatar assistant-avatar">✦</div>' : "";
    const sourceHtml = source ? `<div class="answer-source">Source: ${escapeHtml(source)}</div>` : "";
    const citationItems = Array.isArray(citations) ? citations : [];

    const citationsHtml = citationItems.length ? `
        <div class="citations"><strong>Sources</strong>
            ${citationItems.map(item => {
                if (typeof item === "string") return `<div>${escapeHtml(item)}</div>`;
                const title = item?.title || item?.url || "Source";
                const safeUrl = safeHttpUrl(item?.url);
                return safeUrl
                    ? `<div><a href="${escapeHtml(safeUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(title)}</a></div>`
                    : `<div>${escapeHtml(title)}</div>`;
            }).join("")}
        </div>` : "";

    wrap.innerHTML = `${avatarHtml}<div class="bubble">${formatText(text)}${sourceHtml}${citationsHtml}</div>`;
    chat.appendChild(wrap);
    chat.scrollTop = chat.scrollHeight;
}

function createStreamingMessage() {
    const wrap = document.createElement("div");
    wrap.className = "message assistant";

    const avatar = document.createElement("div");
    avatar.className = "avatar assistant-avatar";
    avatar.textContent = "✦";

    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.textContent = "Preparing answer...";

    wrap.append(avatar, bubble);
    chat.appendChild(wrap);
    chat.scrollTop = chat.scrollHeight;

    return { wrap, bubble };
}

function renderStreamedAnswer(bubble, answer, source, citations = []) {
    const sourceHtml = source ? `<div class="answer-source">Source: ${escapeHtml(source)}</div>` : "";
    const citationItems = Array.isArray(citations) ? citations : [];
    const citationsHtml = citationItems.length ? `
        <div class="citations"><strong>Sources</strong>
            ${citationItems.map(item => {
                if (typeof item === "string") return `<div>${escapeHtml(item)}</div>`;
                const title = item?.title || item?.url || "Source";
                const safeUrl = safeHttpUrl(item?.url);
                return safeUrl
                    ? `<div><a href="${escapeHtml(safeUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(title)}</a></div>`
                    : `<div>${escapeHtml(title)}</div>`;
            }).join("")}
        </div>` : "";

    bubble.innerHTML = `${formatText(answer)}${sourceHtml}${citationsHtml}`;
}

function addTypingIndicator() {
    const wrap = document.createElement("div");
    wrap.className = "message assistant typing-message";
    wrap.innerHTML = `
        <div class="avatar assistant-avatar">✦</div>
        <div class="bubble typing-bubble">
            <span>Agent is processing your request</span>
            <span class="typing-dots"><span></span><span></span><span></span></span>
        </div>`;
    chat.appendChild(wrap);
    chat.scrollTop = chat.scrollHeight;
    return wrap;
}

/* -----------------------------
   Observability rendering
----------------------------- */

function renderTrace(items = []) {
    const safeItems = Array.isArray(items) ? items : [];
    const counter = document.querySelector(".trace-counter");

    if (counter) counter.textContent = `${safeItems.length} STEPS`;

    if (!safeItems.length) {
        trace.innerHTML = `<div class="empty"><strong>Waiting for request</strong><p>Your LangGraph execution trace will appear here.</p></div>`;
        return;
    }

    trace.innerHTML = safeItems.map(item => `<div class="trace-item">${escapeHtml(item)}</div>`).join("");
    trace.scrollTop = trace.scrollHeight;
}

function resetWorkflowIndicators() {
    document.querySelectorAll(".workflow-step").forEach(step => {
        step.classList.remove("is-active", "is-complete", "is-skipped");
    });
}

function markWorkflowNode(nodeName) {
    if (!nodeName) return;
    const nodeNames = nodeName.split(",");
    document.querySelectorAll(".workflow-step").forEach(step => {
        const mapped = (step.dataset.node || "").split(",");
        if (nodeNames.some(name => mapped.includes(name))) {
            step.classList.add("is-complete");
            step.classList.remove("is-active");
        }
    });
}

/* -----------------------------
   Server-Sent Events parser
----------------------------- */

function parseSSEFrame(frame) {
    const lines = frame.replace(/\r/g, "").split("\n");
    let event = "message";
    const data = [];

    for (const line of lines) {
        if (line.startsWith(":")) continue; // SSE comment / heartbeat
        if (line.startsWith("event:")) event = line.slice(6).trim();
        else if (line.startsWith("data:")) data.push(line.slice(5).trimStart());
    }

    if (!data.length) return null;
    return { event, data: JSON.parse(data.join("\n")) };
}

async function readSSE(response, onEvent) {
    if (!response.body) throw new Error("The server did not provide a streaming response.");

    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let buffer = "";

    while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        let boundary;

        while ((boundary = buffer.search(/\r?\n\r?\n/)) !== -1) {
            const frame = buffer.slice(0, boundary);
            const delimiter = buffer.slice(boundary).match(/^\r?\n\r?\n/)[0];
            buffer = buffer.slice(boundary + delimiter.length);

            const parsed = parseSSEFrame(frame);
            if (parsed) await onEvent(parsed.event, parsed.data);
        }
    }

    buffer += decoder.decode();
    if (buffer.trim()) {
        const parsed = parseSSEFrame(buffer);
        if (parsed) await onEvent(parsed.event, parsed.data);
    }
}

/* -----------------------------
   Ask the LangGraph agent
----------------------------- */

async function askAgent(inputQuestion) {
    const q = String(inputQuestion || "").trim();
    if (!q) return;

    addMessage("user", q);
    question.value = "";

    renderTrace([]);
    resetWorkflowIndicators();
    sourceUsed.textContent = "Running";

    const submitButton = form.querySelector('button[type="submit"]');
    const typingIndicator = addTypingIndicator();

    if (submitButton) submitButton.disabled = true;
    question.disabled = true;
    form.setAttribute("aria-busy", "true");

    let streamMessage = null;
    let answer = "";
    let completed = false;

    try {
        const response = await fetch("/api/chat/stream", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "text/event-stream"
            },
            body: JSON.stringify({ question: q })
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.detail || `Streaming endpoint returned HTTP ${response.status}.`);
        }

        const contentType = response.headers.get("content-type") || "";
        if (!contentType.includes("text/event-stream")) {
            throw new Error(`Expected an event stream, received ${contentType || "unknown content type"}.`);
        }

        await readSSE(response, async (eventName, data) => {
            if (eventName === "start") {
                typingIndicator.remove();
                if (!streamMessage) streamMessage = createStreamingMessage();
                return;
            }

            if (eventName === "trace") {
                if (Array.isArray(data.trace)) renderTrace(data.trace);
                if (data.node) markWorkflowNode(data.node);
                if (data.message) {
                    const items = Array.from(trace.querySelectorAll(".trace-item"))
                        .map(item => item.textContent);
                    items.push(data.message);
                    renderTrace(items);
                }
                return;
            }

            if (eventName === "token") {
                typingIndicator.remove();
                if (!streamMessage) streamMessage = createStreamingMessage();
                const token = extractText(data.content);
                answer += token;
                streamMessage.bubble.textContent = answer;
                chat.scrollTop = chat.scrollHeight;
                return;
            }

            if (eventName === "complete") {
                completed = true;
                answer = extractText(data.answer) || answer;

                if (!streamMessage) {
                    typingIndicator.remove();
                    streamMessage = createStreamingMessage();
                }

                renderStreamedAnswer(
                    streamMessage.bubble,
                    answer || "The agent returned an empty response.",
                    data.source_used || "",
                    data.citations || []
                );

                renderTrace(data.trace || []);
                sourceUsed.textContent = data.source_used || "Unknown";
                return;
            }

            if (eventName === "error") {
                throw new Error(data.message || "The agent encountered an error.");
            }
        });

        if (!completed) {
            throw new Error("The connection closed before the agent sent its completion event.");
        }

    } catch (error) {
        typingIndicator.remove();

        const message = `Unable to process your request: ${error.message}`;
        if (streamMessage) {
            streamMessage.bubble.textContent = answer ? `${answer}\n\n${message}` : message;
        } else {
            addMessage("assistant", message);
        }

        sourceUsed.textContent = "Error";
        console.error("Chat streaming error:", error);

    } finally {
        typingIndicator.remove();
        if (submitButton) submitButton.disabled = false;
        question.disabled = false;
        form.removeAttribute("aria-busy");
        question.focus();
    }
}

/* -----------------------------
   Chat form and suggestions
----------------------------- */

form.addEventListener("submit", event => {
    event.preventDefault();
    const q = question.value.trim();
    if (q) askAgent(q);
});

document.querySelectorAll(".example").forEach(button => {
    button.addEventListener("click", () => {
        const q = button.querySelector("small")?.textContent.trim() || button.textContent.trim();
        if (q) askAgent(q);
    });
});

/* -----------------------------
   Upload modal
----------------------------- */

function openModal() {
    if (!modal) return;
    modal.classList.remove("hidden");
    adminKey?.focus();
}

function closeModal() {
    modal?.classList.add("hidden");
}

document.getElementById("openUpload")?.addEventListener("click", openModal);
document.getElementById("closeUpload")?.addEventListener("click", closeModal);
document.getElementById("modalOverlay")?.addEventListener("click", closeModal);

modal?.addEventListener("click", event => {
    if (event.target === modal) closeModal();
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && modal && !modal.classList.contains("hidden")) {
        closeModal();
    }
});

/* -----------------------------
   Document ingestion
----------------------------- */

uploadButton?.addEventListener("click", async () => {
    const file = fileInput?.files?.[0];
    const key = adminKey?.value || "";

    if (!file) {
        uploadStatus.textContent = "Please select a document first.";
        return;
    }

    const formData = new FormData();
    formData.append("file", file);

    uploadButton.disabled = true;
    uploadButton.textContent = "Indexing...";
    uploadStatus.textContent = "Uploading document and indexing it into Pinecone...";

    try {
        const response = await fetch("/api/ingest", {
            method: "POST",
            headers: { "X-Admin-Key": key },
            body: formData
        });

        const data = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(data.detail || "Document upload failed.");

        uploadStatus.textContent = `Successfully indexed ${data.file}: ${data.chunks} chunks created.`;
        fileInput.value = "";

    } catch (error) {
        uploadStatus.textContent = `Error: ${error.message}`;

    } finally {
        uploadButton.disabled = false;
        uploadButton.textContent = "Index Document";
    }
});