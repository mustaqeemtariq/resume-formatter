import express from "express";
import multer from "multer"
import FileController from "../controller/file-controller.js";
const upload = multer({ dest: 'uploads/' });

var router = express.Router();

router.post('/upload', upload.array('resume',10), FileController.getChatGptResponse);

export default router;