require('dotenv').config();

const improvePromptWithAI = async (userPrompt, category) => {
    try {
        const apiKey = process.env.GEMINI_API_KEY; 
        
        // 🚀 Google Gemini 1.5 Flash -
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`;
            const systemPrompt = `
        You are an Expert Prompt Engineer. Your job is to improve the user's prompt for AI tools.
        The user is focusing on this category: ${category}.
        
        Strict Rules:
        1. Keep the original intention of the user.
        2. Make the prompt clear, detailed, and highly effective.
        3. Explain EXACTLY WHY you made these improvements.
        4. Provide THREE versions of the improved prompt:
           - Simple Version
           - Detailed Version
           - Expert Version
        `;

        const finalMessage = `${systemPrompt}\n\nHere is the User's Prompt to improve:\n"${userPrompt}"`;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: finalMessage }]
                }]
            })
        });

        const data = await response.json();

        if (!response.ok) {
            console.error("🚨 Gemini API Error:", data.error.message);
            throw new Error(data.error.message);
        }

        // Gemini API 
        return data.candidates[0].content.parts[0].text;

    } catch (error) {
        console.error("Backend Catch Error:", error.message);
        throw new Error("There was a problem connecting to the AI .");
    }
};

module.exports = { improvePromptWithAI };