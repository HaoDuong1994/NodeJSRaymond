const express = require("express");
const productRouter = express.Router();
const {
  getProductPage,
  getAbcPage,
} = require("../controllers/getProductController");
productRouter.get("/", getProductPage); // đường dẫn, controller

productRouter.get("/abc", getAbcPage); // đường dẫn, controller

module.exports = productRouter;
