import ChatGPTService from "../services/gpt-service.js";
import TextService from "../utils/extract-text.js";
import MongoService from "../services/mongo-service.js";
import DocumentCreator from "../utils/document-maker.js";
import { Packer } from "docx";


export default class FileController {

  static getChatGptResponse = async (req, res) => {
    const combineText = await TextService.getCombinedText(req.files);
    try {
      const response = await ChatGPTService.processMultipleTexts(combineText);
      const id = await MongoService.SaveData(response);
      return res.status(200).send(id);
    } catch (error) {
      return res.status(500).json({
        message: error,
      });
    }
  };

  static getDocumentFiles = async (req, res) => {
    const { id } = req.params;
    try {
      //const data = await MongoService.GetData(id);
      const document = DocumentCreator.create();
      const b64string = await Packer.toBase64String(document);
      const buffer = Buffer.from(b64string, 'base64');
      res.setHeader('Content-Disposition', 'attachment; filename=MyDocument.docx');
      res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
      res.status(200).send(buffer);
      
    } catch (error) {
      return res.status(500).json({
        message: error,
      });
    }
  };

}
