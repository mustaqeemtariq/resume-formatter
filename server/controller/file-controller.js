import ChatGPTService from "../services/gpt-service.js";
import TextService from "../utils/extract-text.js";
import MongoService from "../services/mongo-service.js";
import DocumentCreator from "../constants/docxHtml.js";
import { Packer } from "docx";
import FileHandler from "../utils/file-handler.js";
import fs from 'fs';
import Docxtemplater from 'docxtemplater';
import PizZip from "PizZip"

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

  static docxTemplator = async (req, res) => {
    const jsonData = {
      "Name": "Arbaz"
    }
    try {
      const templateContent = fs.readFileSync('C:/Users/ArbazChaudhary/Desktop/Name.docx', 'binary');
      const zip = new PizZip(templateContent);
      const doc = new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
      });
      doc.render({
        first_name: "John",
        last_name: "Doe",
        fontSize: 22,
      });
      const buf = doc.getZip().generate({
        type: "nodebuffer",
        // compression: DEFLATE adds a compression step.
        // For a 50MB output document, expect 500ms additional CPU time
        compression: "DEFLATE",
      });
      fs.writeFileSync('output.docx', buf);
      console.log('Document generated successfully.');

      res.status(200)
    } catch (error) {
      console.error('Error generating document:', error);
    }
  }
}
