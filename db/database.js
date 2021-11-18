"use strict";

import mysql from "mysql2";

// Create the connection pool

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
//   password: process.env.DB_PASS,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

console.log('whole details ', process.env.DB_HOST, process.env.DB_USER, process.env.DB_NAME, process.env.DB_PASS);

export default pool;
