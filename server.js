const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
//Config Env
require("dotenv").config();
const setViewEngine = require("./src/config/viewEngine");
const setStaticFile = require("./src/config/setStaticFile");
const router = require("./src/routes/web");
const port = process.env.PORT;
const connection = require("./src/config/database");
const { default: test } = require("node:test");
//get Route
const apiRoutes = require("./src/routes/apiUser");
const fileUpLoad = require("express-fileupload");
const customerRoute = require("./src/routes/customerRoute");
const projectRoute = require("./src/routes/projectRoute");
const taskRoute = require("./src/routes/taskRoute");
//Config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Config Engine
setViewEngine(app);
//Config static file
setStaticFile(app, __dirname);
//Mongo Driver
const { MongoClient } = require("mongodb");

//config file upload
app.use(fileUpLoad());
//Test connect

(async () => {
  try {
    await connection();
    //Using Mongo drive to connect
    // const url = process.env.DB_HOST;
    // const client = new MongoClient(url);
    // const dbName = "hoidanit";
    // await client.connect();
    // console.log("Connected successfully to server");
    // const db = client.db(dbName);
    // const collection = db.collection("khachhangs");
    // await collection.insertOne({ name: "NguoiMinhHuong" });
    //App listen
    app.listen(port, () => {
      console.log(`Example app listening on port http://localhost:${port}`);
    });
  } catch (error) {
    console.log("loi ket noi >>>", error);
  }
})();
//Route
app.use("/", router);
app.use("/routes/api", apiRoutes);
app.use("/customer", customerRoute);
app.use("/project", projectRoute);
app.use("/task", taskRoute);
//App listen
// app.listen(port, () => {
//   console.log(`Example app listening on port http://localhost:${port}`);
// });
