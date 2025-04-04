import openAI from "./api.js"; // Importing the configured OpenAI client

const generate = async (queryDescription) => {
    try {
        const prompt = `Convert the following natural language description into an SQL query:\n${queryDescription}`;

        const response = await openAI.chat.completions.create({
            messages: [
                { role: "system", content: "You are an SQL expert." },
                { role: "user", content: prompt }
            ],
            model: "gpt-4o",
            temperature: 1,
            max_tokens: 4096,
            top_p: 1
        });

        return response.choices[0].message.content.trim();
    } catch (error) {
        console.error("Error generating SQL:", error.response?.data || error.message);
        return "Error in generating SQL.";
    }
};

export default generate;