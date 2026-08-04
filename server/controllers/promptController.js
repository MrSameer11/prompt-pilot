const { improvePromptWithAI } = require('../services/geminiService');

const improvePrompt = async (req, res) => {
    try {
        // 1. Frontend prompt choice
        const { prompt, category } = req.body;

        // 2. Validation Check 
        if (!prompt || !category) {
            return res.status(400).json({ error: "It is important to provide both a prompt and a category!" });
        }

        // 3. AI Service call 
        const aiResponse = await improvePromptWithAI(prompt, category);


        res.status(200).json({
            success: true,
            originalPrompt: prompt,
            category: category,
            improvedPrompt: aiResponse
        });

    } catch (error) {
        console.error("Controller Error:", error);
        res.status(500).json({ error: "Something went wrong with the server." });
    }
};

module.exports = { improvePrompt };