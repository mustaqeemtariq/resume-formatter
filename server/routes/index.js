require("dotenv").config();
const express = require('express');
const multer = require('multer');
//const axios = require('axios');
const fs = require('fs');
const PDFParser = require('pdf-parse');
const  OpenAI  = require('openai');
const { message } = require("../constants");
const upload = multer({ dest: 'uploads/' });
var router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post('/upload', upload.single('resume'), async (req, res) => {

  const pdfText = await extractTextFromPDF(req.file.path);
  const prompt=[{ role: "system", content: `${message} \n ${pdfText}` }]
  try {
    const response = await openai.chat.completions.create({
      messages: prompt,
      model: "gpt-3.5-turbo-1106",
      max_tokens:1024,
      //response_format: { type: "json_object" },
    });
    const completion = response.choices[0].message.content;

    return res.status(200).json(completion);

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
});

const extractTextFromPDF = async (filePath) => {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const pdfData = await PDFParser(dataBuffer);
    return pdfData.text;
  } catch (error) {
    console.error('Error extracting text from PDF:', error);
    throw error;
  }
};


module.exports = router;