// api.js
import dotenv from "dotenv";
import OpenAI from "openai";
dotenv.config();

const openaiApiKey = process.env.OPENAI_API;

if (!openaiApiKey) {
    console.error("OPENAI_API key is not set in the environment variables.");
    process.exit(1);
}

const openAI = new OpenAI({
    baseURL: 'https://models.inference.ai.azure.com',
    apiKey: openaiApiKey
});

export default openAI;


