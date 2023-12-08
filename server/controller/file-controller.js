import ChatGPTService from "../services/gpt-service.js";
import MongoService from "../services/mongo-service.js";
import TextService from "../utils/extract-text.js";
import generateGUID from "../utils/getGuid.js";

export default class FileController {

    static getChatGptResponse = async (req, res) => {

        const id = generateGUID();
        const combineText = await TextService.getCombinedText(req.files)
        try {
            const response = await ChatGPTService.processMultipleTexts(combineText)
            await MongoService.saveResponseToDatabase(id, response);
            return res.status(200).send(id);
        } catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    }

    static getDocumentFiles = async (req, res) => {

    }
}