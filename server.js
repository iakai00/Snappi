"use strict";

import "dotenv/config.js";
import express from "express";
import http from "http";
import cors from "cors";
import helmet from "helmet";
import imageRoutes from "./routes/imageRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import likeRoutes from "./routes/likeRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const httpServer = http.createServer(app);

// Before routes; otherwise middleware didn't get called
if (process.env.NODE_ENV === "production") {
  app.enable("trust proxy");
  app.use((req, res, next) => {
    if (req.secure) {
      // request was via https, so do no special handling
      next();
    } else {
      // request was via http, so redirect to https
      // if express app run under proxy with sub path URL
      const proxypath = process.env.PROXY_PASS || "";

      res.redirect(`https://${req.headers.host}${proxypath}${req.url}`);
    }
  });

  app.listen(process.env.APP_PORT);
} else {
  httpServer.listen(process.env.APP_PORT, () => {
    console.log(`app listening on port ${process.env.APP_PORT}`);
  });
}

app.use(cors()); // To allow resources from different sources/outside domains
app.use(helmet()); // Protect your HTTP headers
app.use(express.static("public"));
app.use("/modules", express.static("node_modules"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/image", imageRoutes);
app.use("/auth", authRoutes);
app.use("/comment", commentRoutes);
app.use("/like", likeRoutes);
app.use("/user", userRoutes);
