import OpenAI from "openai";
import dotenv from 'dotenv';
import Constants from "../constants/index.js";
dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export default class ChatGPTService {

    static getJson = async (pdf) => {

        try {
            const prompt = [{ role: "system", content: `${Constants.message} : ${pdf}` }];
            const response = await openai.chat.completions.create({
                messages: prompt,
                model: "gpt-3.5-turbo-1106",
                max_tokens: 4096,
            });
            return JSON.parse(response.choices[0].message.content);
        } catch (error) {
            throw new Error(error);
        }
    }

    static async processMultipleTexts(pdfTexts) {
        
        try {
            const promises = pdfTexts.map(pdf => ChatGPTService.getJson(pdf));
            const responses = await Promise.all(promises);
            return responses;
        } catch (error) {
            throw new Error(error);
        }
    }
}
