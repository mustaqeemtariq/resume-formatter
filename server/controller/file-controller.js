import ChatGPTService from "../services/gpt-service.js";
import TextService from "../utils/extract-text.js";
import MongoService from "../services/mongo-service.js";
import DocumentCreator from "../constants/docxHtml.js";
import { Packer } from "docx";
import HTMLtoDOCX from 'html-to-docx';
import CreateDocument from "../constants/htmlString.js";
import JSZip from 'jszip';
import FileHandler from "../utils/file-handler.js";

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
      const data = await MongoService.GetData(id);
      const resume = data.resume[0]
      const documentCreator = new DocumentCreator();
      const document = documentCreator
        .create(resume);
      const b64string = Packer.toBase64String(document);
      res.setHeader("Content-Disposition",
        `attachment; filename=${resume.personalInformation.fullName}.docx`);
      res.send(Buffer.from(await b64string, "base64"));

    } catch (error) {
      console.log("File Controller error: ", error)
      return res.status(500).json({
        message: error,
      });
    }
  };

  static htmlToDocLib = async (req, res) => {
    const { id } = req.params;
    try {
      const data = await MongoService.GetData(id);
      const resumes = data.resume
      const response = await FileHandler(resumes);
      
      if (resumes.length > 1) {

        res.setHeader('Content-Disposition', 'attachment; filename=resumes.zip');
        res.send(response);

      } else {

        res.setHeader("Content-Disposition",
          `attachment; filename=${resumes[0].personalInformation.fullName}.docx`);
        res.send(Buffer.from(await response, "base64"));
        
      }

    } catch (error) {
      console.log('Docx file creation failed in html to doc controller', error);
    }
  }
}
