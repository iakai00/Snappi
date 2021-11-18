"use strict";

import pool from "../db/database.js";

// Get a promise wrapped instance of that pool

const promisePool = pool.promise();

const getAllImages = async () => {
  try {
    // Query database using promise
    const [rows] = await promisePool.execute("SELECT * FROM `image`");
    return rows;
  } catch (e) {
    console.log("Error getAllPosts: ", e);
  }
};

const getImageById = async (id) => {
  try {
    const [rows] = await promisePool.execute(
      "SELECT * FROM `image` WHERE `image_id` = ?",
      [id]
    );
    return rows;
  } catch (e) {
    console.log("Error getImageById: ", e);
  }
};

const postImage = async (data) => {
  try {
    const [rows] = await promisePool.query(
      "INSERT INTO `image` (`imagename`, `user_id`) VALUES (?,?)",
      data
    );
    return rows;
  } catch (e) {
    console.log("Error postImage: ", postImage);
  }
};
export { getAllImages, getImageById, postImage };
