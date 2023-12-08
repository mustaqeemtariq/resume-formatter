import mammoth from "mammoth";
import fs from "fs"
import PdfParse from "pdf-parse";
import Constants from "../constants/index.js";

export default class TextService {

    static getCombinedText = async (files) => {

        const pdfFiles = files.filter(file => file.mimetype === Constants.TYPE_PDF);
        const pdfTextPromises = pdfFiles.map(file => extractTextFromPDF(file.path));
        const pdfTexts = await Promise.all(pdfTextPromises);

        const docFiles = files.filter(file => file.mimetype === Constants.TYPE_DOC);
        const docTextPromises = docFiles.map(file => extractTextFromDocx(file.path));
        const docTexts = await Promise.all(docTextPromises);
        
        return pdfTexts.concat(docTexts);
    }
}
const extractTextFromDocx = async (filePath) => {
    try {
        const docHtml = await mammoth.extractRawText({ path: filePath })
        const htmlText = await docHtml.value;
        return htmlText;
    } catch (error) {
        console.error('Error extracting text from PDF:', error);
        throw error;
    }
};

const extractTextFromPDF = async (filePath) => {
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const pdfData = await PdfParse(dataBuffer);
        return pdfData.text;
    } catch (error) {
        console.error('Error extracting text from PDF:', error);
        throw error;
    }
};