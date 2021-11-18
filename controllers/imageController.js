"use strict";

import multer from "multer";
import * as model from "../models/imageModel.js";

const storage = multer.diskStorage({
  destination: (req, res, cd) => {
    cb(null, "/.uploads/");
  },
  filename: (req, file, cb) => {
    const ext = file.originalname.split(".").slice(-1);
    cb(null, `${file.filename} - ${Date.now()}.${ext}`);
  },
});

const uploadDest = multer({ storage: storage });

const getImageList = async (req, res) => {
  const posts = await model.getAllImages();
  console.log(
    "whole details ",
    process.env.DB_HOST,
    process.env.DB_USER,
    process.env.DB_NAME,
    process.env.DB_PASS
  );
  console.log("this is post", posts);
  res.json(posts);
};

const uploadImage = async (req, res) => {
  const data = [req.file.filename, req.body.userId];
  const upload = await model.postImage(data);
  return res.send(upload);
};

const getImageWithID = async (req, res) => {
  const id = req.params.id;
  const image = await model.getImageById(id);
  res.json(image);
};

export { getImageList, getImageWithID, uploadDest, uploadImage };
