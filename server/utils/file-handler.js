import CreateDocument from "../constants/htmlString.js";
import HTMLtoDOCX from 'html-to-docx';
import JSZip from 'jszip';
import fs from 'fs';
import Docxtemplater from 'docxtemplater';
import PizZip from "PizZip"

export default class FileHandler {
  static createFromHtmlDoc = async (resumes) => {
    const creater = new CreateDocument();

    if (resumes.length > 1) {
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

      return zipBuffer

    } else {

      const htmlString = creater.create([resumes[0]?.personalInformation, resumes[0]?.careerSummary?.summary, resumes[0]?.skillsAndTools, resumes[0]?.workExperience, resumes[0].projects, resumes[0]?.education]);
      const fileBuffer = await HTMLtoDOCX(htmlString, null, {
        table: { row: { cantSplit: true } },
        footer: true,
        pageNumber: true,
      });

      const base64String = fileBuffer.toString('base64');

      return base64String
    }
  }

  static createFromTemplate = async (resumes) => {
    const zip = new JSZip();
    const templateContent = fs.readFileSync('./template/template.docx', 'binary');
    const zipTemplate = new PizZip(templateContent);
    if (resumes.length > 1) {
      const documentPromises = resumes.map(async (resume, index) => {
        const doc = new Docxtemplater(zipTemplate, {
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
          projectTitle: project.title,
        }));

        const education = resume.education.map((education) => ({
          degreeName: education.degree,
          university: education.institution,
          graduationDate: education.graduationDate,
        }));

        await doc.renderAsync({
          userName: resume.personalInformation.fullName || `Candidate_${index + 1}`,
          jobTitle: resume.personalInformation.title,
          careerSummary: resume.personalInformation.summary,
          skillsAndTools: resume.skillsAndTools,
          workExperiences: workExperiences,
          projects: projects,
          education: education,
        });

        const generatedDoc = doc.getZip().generate({
          type: 'nodebuffer',
          mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          compression: 'DEFLATE',
        });

        const candidateName = resume.personalInformation.fullName || `Candidate_${index + 1}`;
        zip.file(`${candidateName}.docx`, generatedDoc, { binary: true });
      });

      await Promise.all(documentPromises);

      const zipBuffer = await zip.generateAsync({ type: 'nodebuffer' });
      return zipBuffer;
    }
    else {
      const doc = new Docxtemplater(zipTemplate, {
        paragraphLoop: true,
        linebreaks: true,
      });
      const workExperiences = resumes[0].workExperience.map((experience) => ({
        companyName: experience.company,
        startDate: experience.startDate,
        endDate: experience.endDate,
        workTitle: experience.position,
        responsibilities: experience.responsibilities,
      }));

      const projects = resumes[0].projects.map((project) => ({
        projectTitle: project.title
      }));

      const education = resumes[0].education.map((education) => ({
        degreeName: education.degree,
        university: education.institution,
        graduationDate: education.graduationDate

      }));

      doc.render({
        userName: resumes[0].personalInformation.fullName,
        jobTitle: resumes[0].personalInformation.title,
        careerSummary: resumes[0].personalInformation.summary,
        skillsAndTools: resumes[0].skillsAndTools,
        workExperiences: workExperiences,
        projects: projects,
        education: education
      });

      const buffer = doc.getZip().generate({
        type: "nodebuffer",
        compression: "DEFLATE",
      });

      return buffer;
    }
  }

}
