"use strict";

import express from "express";
import * as controller from "../controllers/imageController";

const router = express.Router();

// Get all images
router.get("/", controller.getImagesList);

// Get an image with ID
router.get("/:id", controller.getImageWithID);

// Create a post

router.post("/", controller.uploadDest.single("image"), controller.uploadImage);

export default router;
