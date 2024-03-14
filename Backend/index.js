import { members, imagesWithInfo,carouselData } from "./Data/Homedata.js";
import express from "express";
import cors from "cors";

const app = express();
const port = 8000;

app.use(cors());

app.get("/api/home/churchpeople", (req, res) => {
  res.status(200).json(members);
});

app.get("/api/home/church", (req, res) => {
  res.status(200).json(imagesWithInfo);
});

app.get("/api/home/meditation",(req,res)=>{
  res.status(200).json(carouselData);
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});