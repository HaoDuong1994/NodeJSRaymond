const path = require("path");
const express = require("express");
const setStaticFile = (app, dirname) => {
  console.log("statixcfileeeeeeeeeeeeeeeeeeeeeeeeee");
  //Config static file
  app.use(express.static(path.join(dirname, "./src/public"))); // express sẽ lấy tất cả các file tĩnh trong thư mục public
};

module.exports = setStaticFile;
