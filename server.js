import dotenv from "dotenv/config.js";
// dotenv.config();

import express from "express";
import imageRoutes from "./routes/imageRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import pool from "./db/database.js";

const app = express();

app.set("views", "./public/views");
app.set("view engine", "pug");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/image", imageRoutes);
app.use("/auth", authRoutes);

app.get("/", (req, res) => res.render("upload"));

app.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}`);
});
