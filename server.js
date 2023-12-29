const express = require("express");
const app = express();
//Config Env
require("dotenv").config();
const setViewEngine = require("./src/config/viewEngine");
const setStaticFile = require("./src/config/setStaticFile");
const router = require("./src/routes/web");
const port = process.env.PORT;
const productRouter = require("./src/routes/product");
const mysql = require("mysql2");
const testApiRoute = require("./src/routes/callAPI");
const { default: test } = require("node:test");
//Config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Config Engine
setViewEngine(app);
//Config static file
setStaticFile(app, __dirname);
//Route
app.use("/", router);
//Test connection

//App listen
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
