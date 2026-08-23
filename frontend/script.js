const API_URL = "http://127.0.0.1:5000/api/chat";

const chatInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendBtn");
const chatMessages = document.getElementById("messages");

async function sendMessage() {

    const message = chatInput.value.trim();

    if (!message) {
        return;
    }

    // Show user message
    addMessage(message, "user");

    // Clear input
    chatInput.value = "";

    // Show loading
    const loadingMessage = addMessage("Nova is thinking...", "ai");

    try {

        const response = await fetch(API_URL, {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                message: message
            })
        });

        const data = await response.json();

        // Remove loading message
        loadingMessage.remove();

        if (!response.ok) {
            throw new Error(data.error || "Something went wrong");
        }

        addMessage(data.reply, "ai");

    } catch (error) {

        console.error("Error:", error);

        loadingMessage.remove();

        addMessage(
            "Sorry, I couldn't connect to Nova AI. Make sure the Flask server is running.",
            "ai"
        );
    }
}


function addMessage(text, sender) {

    const messageDiv = document.createElement("div");

    messageDiv.classList.add("message", sender);

    messageDiv.textContent = text;

    chatMessages.style.display = "block";

    chatMessages.appendChild(messageDiv);

    chatMessages.scrollTop = chatMessages.scrollHeight;

    return messageDiv;
}


// Send button
sendButton.addEventListener("click", sendMessage);


// Enter key
chatInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        event.preventDefault();
        sendMessage();
    }

});