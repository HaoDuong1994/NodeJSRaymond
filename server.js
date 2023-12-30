const express = require("express");
const mongoose = require("mongoose");
const app = express();
//Config Env
require("dotenv").config();
const setViewEngine = require("./src/config/viewEngine");
const setStaticFile = require("./src/config/setStaticFile");
const router = require("./src/routes/web");
const port = process.env.PORT;
const productRouter = require("./src/routes/product");
const mysql = require("mysql2");
const connection = require("./src/config/database");
const testApiRoute = require("./src/routes/callAPI");
const { default: test } = require("node:test");
//Config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Config Engine
setViewEngine(app);
//Config static file
setStaticFile(app, __dirname);
//Test connect
const kittySchema = new mongoose.Schema({
  name: String,
});
const Kitten = mongoose.model("Kitten", kittySchema);
const cat = new Kitten({ name: "meow meow Hao" });
cat.save();
//Connection
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
//App listen
// app.listen(port, () => {
//   console.log(`Example app listening on port http://localhost:${port}`);
// });
