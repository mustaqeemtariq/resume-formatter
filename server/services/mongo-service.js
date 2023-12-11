import db from "../models/index.js";
const Resume = db.resume;

export default class MongoService {

    static SaveData = async (data) => {
        const resume = new Resume({ resume: data });
        try {
            const savedData = await resume.save(resume);
            return savedData._id
        } catch (error) {
            return error
        }
    }

    static GetData = async (id) => {
        try {
            const data = await Resume.findById(id);
            return data;
        } catch (error) {
            return error
        }
    }
}