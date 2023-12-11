import ChatGPTService from "../services/gpt-service.js";
import TextService from "../utils/extract-text.js";
import generateGUID from "../utils/getGuid.js";
import db from "../models/index.js";

const Resume = db.resume;

export default class FileController {
  static getChatGptResponse = async (req, res) => {
    const combineText = await TextService.getCombinedText(req.files);
    try {
      const response = await ChatGPTService.processMultipleTexts(combineText);
      const resume = new Resume({resume: response});
      console.log("RES", resume)
      resume.save(resume)
        .then((data) => {
        console.log("DATA", data)
          res.status(200).send(data._id);
        })
        .catch((err) => {
          res
            .status(500)
            .send({ message: err.message || "Some unknown error has occured" });
        });
    } catch (error) {
      return res.status(500).json({
        message: error,
      });
    }
  };

  static getDocumentFiles = async (req, res) => {};
}
