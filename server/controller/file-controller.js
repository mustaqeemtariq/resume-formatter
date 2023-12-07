import Constants from "../constants/index.js";
import ChatGPTService from "../services/gpt-service.js";
import extractTextFromDocx from "../utils/extract-doc-text.js";
import extractTextFromPDF from "../utils/extract-pdf-text.js";

export default class FileController {


    static getChatGptResponse = async (req, res) => {

        const pdfFiles = req.files.filter(file => file.mimetype === Constants.TYPE_PDF);
        // const docFiles = req.files.filter(file => file.mimetype === Constants.TYPE_DOC);
        const pdfTextPromises = pdfFiles.map(file => extractTextFromPDF(file.path));
        const pdfTexts = await Promise.all(pdfTextPromises);
        // const docTextPromises = docFiles.map(file => extractTextFromDocx(file.path));
        // const docTexts = await Promise.all(docTextPromises);
        try {
            const response = await ChatGPTService.processMultipleTexts(pdfTexts)
            return res.status(200).send(response);
        } catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    }
}