import express from "express";
import dotenv from 'dotenv';
import cors from "cors"
import routes from "./routes/index.js";
dotenv.config();
const app = express();
app.use(cors());
const PORT = process.env.HOST_PORT || 5000;
app.use(express.json());
app.use(cors());

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send(`<h1 style='text-align: center'>Resume Formatter</h1>`);
});

app.listen(PORT, () => {
  console.log("Server is Listening at Port: ", PORT);
});