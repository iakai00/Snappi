"use strict";

import multer from "multer";
import * as model from "../models/imageModel";

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

  res.json(image);
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
