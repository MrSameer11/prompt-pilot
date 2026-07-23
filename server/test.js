require('dotenv').config();

async function checkModels() {
    const apiKey = process.env.GEMINI_API_KEY;
    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

    try {
        console.log("🔍 Google API se active models ki list maang raha hoon...\n");
        const response = await fetch(url);
        const data = await response.json();

        if (data.models) {
            console.log("🔥 Available Models (Jo tera account support karta hai):");
            data.models.forEach(model => {
                // Sirf wo models dikhao jo text generate kar sakte hain
                if (model.supportedGenerationMethods.includes("generateContent")) {
                    console.log("✅", model.name);
                }
            });
        } else {
            console.log("🚨 API Error:", data);
        }
    } catch (error) {
        console.log("🚨 Catch Error:", error.message);
    }
}

checkModels();