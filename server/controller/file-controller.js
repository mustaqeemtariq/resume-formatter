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
    const { id } = req.params;
    try {
      const data = await MongoService.GetData(id);
      const resume = data.resume[0]
      const templateContent = fs.readFileSync('./templates/template.docx', 'binary');
      const zip = new PizZip(templateContent);
      const doc = new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
      });

      const workExperiences = resume.workExperience.map((experience) => ({
        companyName: experience.company,
        startDate: experience.startDate,
        endDate: experience.endDate,
        workTitle: experience.position,
        responsibilities: experience.responsibilities,
      }));

      const projects = resume.projects.map((project) => ({
        projectTitle: project.title
      }));

      const education = resume.education.map((education) => ({
        degreeName: education.degree,
        university: education.institution,
        graduationDate: education.graduationDate

      }));

      doc.render({
        userName: resume.personalInformation.fullName,
        jobTitle: resume.personalInformation.title,
        careerSummary: resume.personalInformation.summary,
        skillsAndTools: resume.skillsAndTools,
        workExperiences: workExperiences,
        projects: projects,
        education: education

      });

      //const base64String = doc.toString('base64');

      const buf = doc.getZip().generate({
        type: "nodebuffer",
        compression: "DEFLATE",
      });

      res.setHeader("Content-Disposition",
        `attachment; filename = MyDocument.docx`);
      res.send(buf);
    } catch (error) {
      console.error('Error generating document:', error);
    }
  }
}
