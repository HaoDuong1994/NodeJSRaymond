const express = require("express");
const app = express();

//Config path

const path = require("path");
//Config Env

require("dotenv").config();
const port = process.env.PORT;
//Config Engine
app.set("views", "./src/views");
// các view engine set ở thư mục nào
app.set("view engine", "ejs"); // định nghĩa loại engine
//Route
app.get("/", (req, res) => {
  res.render("exp.ejs"); // truyền vào tham số tên file ejs
});

console.log("duong dan hien tai", __dirname);
console.log("bien moi truong", process.env);
//App listen
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
