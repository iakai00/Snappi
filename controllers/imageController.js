"use strict";

import * as model from "../models/imageModel";

const getImageList = async (req, res) => {
  const posts = await model.getAllImages();

  res.json(posts);
};

const getImageWithID = async (req, res) => {
  const id = req.params.id;
  const image = await model.getImageById(id);
  res.json(image);
};

export { getImageList, getImageWithID };
