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
//Config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Config Engine
setViewEngine(app);
//Config static file
setStaticFile(app, __dirname);
//config file upload
app.use(fileUpLoad());
//Test connect

(async () => {
  try {
    await connection();
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

//App listen
// app.listen(port, () => {
//   console.log(`Example app listening on port http://localhost:${port}`);
// });
