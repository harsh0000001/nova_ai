# 🤖 Nova AI

Nova AI is a full-stack AI chatbot that provides intelligent and interactive conversations through a modern web interface.

It uses a **HTML, CSS, and JavaScript frontend**, a **Python Flask backend**, and the **Groq API** to communicate with an AI model and generate fast responses.

## ✨ Features

- 💬 Real-time AI conversations
- ⚡ Fast responses powered by Groq
- 🎨 Modern and responsive user interface
- 🔗 Frontend–backend API integration
- 🧠 AI-powered conversational responses
- 🌐 REST API using Flask
- 🔒 Environment-based API key configuration
- 📱 Responsive web interface

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Python
- Flask
- Flask-CORS

### AI
- Groq API
- `openai/gpt-oss-120b`

### Other
- python-dotenv
- Git & GitHub

## 📁 Project Structure


nova_ai/
│
├── backend/
│   └── app.py
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── .env
├── .gitignore
├── requirements.txt
├── test_api.py
└── README.md
🔄 How It Works
User
  ↓
Nova AI Web Interface
  ↓
JavaScript Fetch API
  ↓
Flask Backend
  ↓
Groq API
  ↓
AI Model
  ↓
Flask Response
  ↓
JavaScript
  ↓
Nova AI Chat Interface
🚀 Getting Started
1. Clone the repository
git clone https://github.com/harsh0000001/nova_ai.git
cd nova_ai
2. Create a virtual environment
python -m venv venv

Activate it on Windows:

venv\Scripts\activate
3. Install dependencies
pip install -r requirements.txt
4. Configure the API key

Create a .env file in the project root:

GROQ_API_KEY=your_groq_api_key

Never upload your .env file or expose your API key publicly.

5. Start the Flask backend
python backend/app.py

The backend will run at:

http://127.0.0.1:5000
6. Start the frontend

Open:

frontend/index.html

using VS Code Live Server.

The frontend will communicate with the Flask backend through the /api/chat endpoint.

🧪 Testing the Backend

You can test the API using:

python test_api.py

Health check:

GET /api/health

Chat endpoint:

POST /api/chat

Example request:

{
  "message": "Hello Nova!"
}

Example response:

{
  "reply": "Hello! How can I help you?"
}
🔐 Security

The Groq API key is stored in an environment variable using .env.

Make sure .env is included in .gitignore:

.env
__pycache__/
*.pyc
venv/
.venv/
📌 Future Improvements
 Conversation history
 Multiple AI personalities
 Dark/light theme customization
 Markdown response rendering
 Code syntax highlighting
 Voice input and output
 User authentication
 Persistent chat history
 Deployment to a cloud platform
👨‍💻 Author

Harsh Chaudhary

BTech Computer Science & Engineering

GitHub: @harsh0000001

⭐ If you like Nova AI, consider giving the repository a star!
