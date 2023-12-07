import message from "../constants/index.js";
import OpenAI from "openai";
import dotenv from 'dotenv';
dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export default class ChatGPTService {

    static getJson = async (pdfText) => {
        const prompt = [{ role: "system", content: `${message} : ${pdfText}` }]
        try {
            const response = await openai.chat.completions.create({
                messages: prompt,
                model: "gpt-3.5-turbo-1106" , //"gpt-3.5-turbo-1106", gpt-4
                max_tokens: 4096,
            });
            return response.choices[0].message.content;
        } catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    }
}
