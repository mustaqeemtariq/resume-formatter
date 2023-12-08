import ChatGPTService from "../services/gpt-service.js";
import TextService from "../utils/extract-text.js";

export default class FileController {


    static getChatGptResponse = async (req, res) => {

        const combineText = await TextService.getCombinedText(req.files)

        try {
            const response = await ChatGPTService.processMultipleTexts(combineText)
            return res.status(200).send(response);
        } catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    }
}