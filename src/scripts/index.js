import dotenv from "dotenv";
import express from "express";
import imageRoutes from "express";
import pool from "../../db/database";

const app = express();

dotenv.config();

app.use('/image', imageRoutes);

app.listen(process.env.APP_PORT, () => {
  console.log(`App running on port ${process.env.APP_PORT}`);
});
