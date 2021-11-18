import dotenv from "dotenv";
dotenv.config();
import express from "express";
import imageRoutes from "./routes/imageRoutes.js";
import pool from "./db/database.js";

const app = express();


app.use(express.json());

app.use("/image", imageRoutes);

app.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}`);
});
