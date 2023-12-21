require("dotenv").config();
const mysql = require("mysql2");
// const connection = mysql.createConnection({
//   host: process.env.HOST_NAME,
//   port: process.env.DB_PORT,
//   password: process.env.DB_PASSWORD,
//   user: process.env.DB_USERS,
//   database: process.env.DB_NAME,
// });

//Sử dụng connection pool để hạn chế overload database

const connection = mysql.createPool({
  host: process.env.HOST_NAME,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  user: process.env.DB_USERS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  idleTimeout: 60000,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

module.exports = connection;
