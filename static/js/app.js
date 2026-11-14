
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


/* -----------------------------
   Security and formatting
----------------------------- */

function escapeHtml(value = "") {
    return String(value).replace(/[&<>'"]/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;"
    })[char]);
}


function extractText(value) {
    if (value == null) return "";

    // Gemini/LangChain content blocks
    if (Array.isArray(value)) {
        return value
            .map(item => {
                if (typeof item === "string") return item;

                if (item && typeof item === "object") {
                    if (item.type === "text" && typeof item.text === "string") {
                        return item.text;
                    }

                    if (typeof item.text === "string") {
                        return item.text;
                    }

                    if (typeof item.content === "string") {
                        return item.content;
                    }
                }

                return "";
            })
            .filter(Boolean)
            .join("\n");
    }

    // Objects containing an answer
    if (typeof value === "object") {
        if (typeof value.text === "string") return value.text;
        if (typeof value.answer === "string") return value.answer;
        if (typeof value.content === "string") return value.content;
        if (typeof value.output === "string") return value.output;

        return "";
    }

    return String(value);
}

function formatText(value = "") {
    return escapeHtml(extractText(value))
        .replace(/\n/g, "<br>");
}


function safeHttpUrl(value) {
    try {
        const url = new URL(String(value));
        if (url.protocol === "https:" || url.protocol === "http:") {
            return url.href;
        }
    } catch {
        // Invalid URL. It will be displayed as plain text.
    }

    return null;
}


/* -----------------------------
   Chat messages
----------------------------- */

function addMessage(role, text, source = "", citations = []) {
    const wrap = document.createElement("div");
    wrap.className = `message ${role}`;

    const sourceHtml = source
        ? `<div class="answer-source">Source: ${escapeHtml(source)}</div>`
        : "";

    const citationItems = Array.isArray(citations) ? citations : [];

    const citationsHtml = citationItems.length
        ? `
            <div class="citations">
                <strong>Sources</strong>
                ${citationItems.map(item => {
                    if (typeof item === "string") {
                        return `<div>${escapeHtml(item)}</div>`;
                    }

                    const title = item?.title || item?.url || "Source";
                    const safeUrl = safeHttpUrl(item?.url);

                    if (safeUrl) {
                        return `
                            <div>
                                <a href="${escapeHtml(safeUrl)}"
                                   target="_blank"
                                   rel="noopener noreferrer">
                                    ${escapeHtml(title)}
                                </a>
                            </div>
                        `;
                    }

                    return `<div>${escapeHtml(title)}</div>`;
                }).join("")}
            </div>
        `
        : "";

    const avatarHtml = role === "assistant"
        ? `<div class="avatar">AI</div>`
        : "";

    wrap.innerHTML = `
        ${avatarHtml}
        <div class="bubble">
            ${formatText(text)}
            ${sourceHtml}
            ${citationsHtml}
        </div>
    `;

    chat.appendChild(wrap);
    chat.scrollTop = chat.scrollHeight;
}


/* -----------------------------
   Animated agent loading
----------------------------- */

function addTypingIndicator() {
    const wrap = document.createElement("div");

    wrap.className = "message assistant typing-message";

    wrap.innerHTML = `
        <div class="avatar">AI</div>

        <div class="bubble typing-bubble">
            <span>Agent is working</span>

            <span class="typing-dots">
                <span></span>
                <span></span>
                <span></span>
            </span>
        </div>
    `;

    chat.appendChild(wrap);
    chat.scrollTop = chat.scrollHeight;

    return wrap;
}


/* -----------------------------
   Agent trace
----------------------------- */

function renderTrace(items = []) {
    const safeItems = Array.isArray(items) ? items : [];

    if (!safeItems.length) {
        trace.innerHTML = `<div class="empty">No trace available.</div>`;
        return;
    }

    trace.innerHTML = safeItems.map(item => `
        <div class="trace-item">
            ${escapeHtml(item)}
        </div>
    `).join("");
}


/* -----------------------------
   Ask the LangGraph agent
----------------------------- */

async function askAgent(inputQuestion) {
    const q = String(inputQuestion || "").trim();

    if (!q) return;

    addMessage("user", q);

    question.value = "";

    renderTrace(["Running LangGraph workflow..."]);
    sourceUsed.textContent = "Running";

    const submitButton = form.querySelector('button[type="submit"]');
    const typingIndicator = addTypingIndicator();

    if (submitButton) submitButton.disabled = true;
    question.disabled = true;
    form.setAttribute("aria-busy", "true");

    try {
        const response = await fetch("/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                question: q
            })
        });

        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
            throw new Error(data.detail || "Something went wrong. Please try again.");
        }

        addMessage(
            "assistant",
            data.answer || "The agent returned an empty response.",
            data.source_used || "",
            data.citations || []
        );

        renderTrace(data.trace || []);

        sourceUsed.textContent = data.source_used || "Unknown";

    } catch (error) {
        addMessage(
            "assistant",
            `Unable to process your request: ${error.message}`
        );

        renderTrace(["Request failed. Check the API server and logs."]);
        sourceUsed.textContent = "Error";

    } finally {
        typingIndicator.remove();

        if (submitButton) submitButton.disabled = false;

        question.disabled = false;
        form.removeAttribute("aria-busy");

        question.focus();
    }
}


/* -----------------------------
   Chat form events
----------------------------- */

form.addEventListener("submit", event => {
    event.preventDefault();

    const q = question.value.trim();

    if (q) {
        askAgent(q);
    }
});


/* Suggested question buttons */

document.querySelectorAll(".example").forEach(button => {
    button.addEventListener("click", () => {
        const q = button.textContent.trim();

        if (q) {
            askAgent(q);
        }
    });
});


/* -----------------------------
   Upload modal
----------------------------- */

function openModal() {
    if (!modal) return;

    modal.classList.remove("hidden");

    if (adminKey) {
        adminKey.focus();
    }
}

function closeModal() {
    if (!modal) return;

    modal.classList.add("hidden");
}

document.getElementById("openUpload")?.addEventListener("click", openModal);

document.getElementById("closeUpload")?.addEventListener("click", closeModal);
document.getElementById("modalOverlay")?.addEventListener("click", closeModal);

/* Close when clicking outside the modal card */

modal?.addEventListener("click", event => {
    if (event.target === modal) {
        closeModal();
    }
});


/* Close with Escape key */

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

    uploadStatus.textContent =
        "Uploading document and indexing it into Pinecone...";

    try {
        const response = await fetch("/api/ingest", {
            method: "POST",
            headers: {
                "X-Admin-Key": key
            },
            body: formData
        });

        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
            throw new Error(data.detail || "Document upload failed.");
        }

        uploadStatus.textContent =
            `Successfully indexed ${data.file}: ${data.chunks} chunks created.`;

        fileInput.value = "";

    } catch (error) {
        uploadStatus.textContent = `Error: ${error.message}`;

    } finally {
        uploadButton.disabled = false;
        uploadButton.textContent = "Index Document";
    }
});
