import db from "../models/index.js";
const Resume = db.resume;

export default class MongoService {

    static SaveData = async (data) => {
        const resume = new Resume({ resume: data });
        try {
            const savedData = await resume.save(resume);
            return savedData._id
        } catch (error) {
            throw new error(error)
        }
    }
}