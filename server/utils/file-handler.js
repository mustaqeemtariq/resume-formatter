import CreateDocument from "../constants/htmlString.js";
import HTMLtoDOCX from 'html-to-docx';
import JSZip from 'jszip';

const Filehandler = async (resumes) => {
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

export default Filehandler