import ChatGPTService from "../services/gpt-service.js";
import TextService from "../utils/extract-text.js";
import MongoService from "../services/mongo-service.js";
import DocumentCreator from "../constants/docxHtml.js";
import { Packer } from "docx";
import HTMLtoDOCX from 'html-to-docx';
import CreateDocument from "../constants/htmlString.js";
import JSZip from 'jszip';

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
        .create([resume.personalInformation, resume.workExperience, resume.education, resume.skillsAndTools, resume.projects, resume["Career Summary"]]);
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
      const creater = new CreateDocument();
      //============================================
      // const htmlString = creater.create([resume?.personalInformation, resume?.careerSummary?.summary, resume?.skillsAndTools, resume?.workExperience, resume.projects, resume?.education]);
      // const fileBuffer = await HTMLtoDOCX(htmlString, null, {
      //   table: { row: { cantSplit: true } },
      //   footer: true,
      //   pageNumber: true,
      // });

      // const base64String = fileBuffer.toString('base64');
      // res.setHeader("Content-Disposition", 
      // `attachment; filename=${resume.personalInformation.fullName}.docx`);

      // res.send(Buffer.from(await base64String, "base64"));
      //=======================================================

      const promises = resumes.map(async (resume) => {
        const htmlString = creater.create([
          resume?.personalInformation,
          resume?.careerSummary?.summary,
          resume?.skillsAndTools,
          resume?.workExperience,
          resume?.projects,
          resume?.education,
        ]);

        const fileBuffer = await HTMLtoDOCX(htmlString, null, {
          table: { row: { cantSplit: true } },
          footer: true,
          pageNumber: true,
        });

        const base64String = fileBuffer.toString('base64');

        return {
          base64: base64String,
          fullName: resume.personalInformation.fullName,
        };
      });

      const processedResumes = await Promise.all(promises);

      const zip = new JSZip();
      processedResumes.forEach((processedResume) => {
        zip.file(
          `${processedResume.fullName}.docx`,
          Buffer.from(processedResume.base64, 'base64')
        );
      });

      const zipBuffer = await zip.generateAsync({ type: 'nodebuffer' });

      res.setHeader('Content-Disposition', 'attachment; filename=resumes.zip');
      res.send(zipBuffer);

    } catch (error) {
      console.log('Docx file creation failed in html to doc controller', error);
    }
  }
}
