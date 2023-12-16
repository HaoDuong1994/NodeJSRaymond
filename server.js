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

//Config static file
app.use(express.static(path.join(__dirname, "./src/public"))); // express sẽ lấy tất cả các file tĩnh trong thư mục public
//Route
app.get("/", (req, res) => {
  res.render("exp.ejs");
});

app.get("/product", (req, res) => {
  res.render("product.ejs");
});
//App listen
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
