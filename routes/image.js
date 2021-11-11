"use strict";

import express from "express";
import * as controller from "../controllers/imageController";

const router = express.Router();

// Get all images
router.get("/", controller.getImagesList);

router.get("/:id", controller.getImageWithID);

// Create a post

router.post("/upload", (req, res) => {
  res.send("You can POST images here.");
});

export default router;
