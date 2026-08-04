
#  Prompt-Pilot

> **Elevate your AI interactions. Transform simple ideas into masterfully engineered prompts.**


### 🌐 Live Demo
**[Experience PromptPilot Here](https://prompt-pilot-orcin.vercel.app/)**


## 📑 Table of Contents

- [About the Project](#-about-the-project)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Usage](#-usage)


---

## 📖 About the Project

Generative AI models are incredibly powerful, but their output is only as good as the input they receive. **PromptPilot** bridges the gap between casual users and expert AI interactions. 

By acting as a middleware prompt engineering assistant, PromptPilot takes your basic, conversational requests (e.g., "write an email") and leverages the **Google Gemini API** to restructure them into highly detailed, context-rich, and professionally formatted initialization prompts. This ensures you extract the maximum potential, accuracy, and creativity from any AI you use subsequently.

---

## ✨ Key Features

- **Automated Prompt Optimization:** Instantly converts vague instructions into robust, multi-stage AI directives.
- **Rich Markdown Rendering:** Seamlessly parses and displays complex AI outputs (including bolding, lists, and code blocks) using `react-markdown`.
- **Modern Glassmorphism UI:** A highly responsive, visually striking interface built with Tailwind CSS.
- **Secure Architecture:** Backend configured with strict CORS policies, keeping your API keys safe from client-side exposure.
- **Stateless & Fast:** Optimized API routing ensures rapid response times with zero unnecessary database overhead.

---

## 💻 Tech Stack

**Frontend:**
- React.js (Vite)
- Tailwind CSS
- React Markdown
- Lucide React (Icons)

**Backend:**
- Node.js
- Express.js
- Google GenAI SDK (`@google/genai`)
- Axios & CORS

**Deployment:**
- **Client:** Vercel
- **Server:** Render

---

## 🚀 Getting Started

Follow these instructions to set up PromptPilot on your local machine for development and testing.

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18.0.0 or higher)
- [Git](https://git-scm.com/)
- A Google Gemini API Key from [Google AI Studio](https://aistudio.google.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/MrSameer11/prompt-pilot.git .git](https://github.com/MrSameer11/prompt-pilot.git )
   cd prompt-pilot


2. Backend Setup  
Bash
cd server
npm install
Create a .env file in the server directory and add your Gemini API Key:

Code snippet
PORT=5000
GEMINI_API_KEY=your_actual_api_key_here
Start the backend server:

Bash
npm run dev
3. Frontend Setup
Open a new terminal window and navigate to the frontend directory:

Bash
cd client
npm install
Start the frontend development server:

Bash
npm run dev
The application will now be running at http://localhost:5173.


🧠 How It Works
The user inputs a basic idea or prompt (e.g., "write an email to my boss").

The React frontend sends this text to the Express backend via a POST request.

The Node.js server acts as a middleware, appending strict system instructions and securely querying the Google Gemini API.

The AI restructures the input into an optimized format.

The backend returns the enhanced prompt to the client.

The frontend renders the Markdown response beautifully for the user to copy and use.



    ---
## 👨‍💻 Author
    Sameer Teli 
- GitHub: [MrSameer11]( https://github.com/MrSameer11)