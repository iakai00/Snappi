"use strict";

import pool from "../db/database";

// Get a promise wrapped instance of that pool

const promisePool = pool.promise();

const getAllImages = async () => {
  try {
    // Query database using promise
    const [rows] = await promisePool.query("SELECT * FROM `image`");
    return rows;
  } catch (e) {
    console.log("Error getAllPosts: ", e);
  }
};

const getImageById = async (id) => {
  try {
    const [rows] = await promisePool.query(
      "SELECT * FROM `image` WHERE `image_id` = ?",
      id
    );
    return rows;
  } catch (e) {
    console.log("Error getImageById: ", e);
  }
};
export { getAllImages, getImageById };
