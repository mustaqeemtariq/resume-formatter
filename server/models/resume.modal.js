import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
  resume: Array
});

const Resume = mongoose.model("resume", resumeSchema);
export default Resume;
