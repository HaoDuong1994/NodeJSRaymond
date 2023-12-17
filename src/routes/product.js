const express = require("express");
const productRouter = express.Router();
const {
  getProductPage,
  getAbcPage,
} = require("../controllers/getProductController");
productRouter.get("/", getProductPage);

productRouter.get("/abc", getAbcPage);

module.exports = productRouter;
