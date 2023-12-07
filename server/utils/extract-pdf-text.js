import fs from "fs"
import PdfParse from "pdf-parse";

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

  export default extractTextFromPDF;