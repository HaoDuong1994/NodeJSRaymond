const express = require("express");
const router = express.Router();
const { postCreateUser } = require("../controllers/getProductController");
router.get("/", (req, res) => {
  return res.render("homepage.ejs");
});
router.get("/product", (req, res) => {
  res.render("product.ejs");
});
router.post("/create-user", postCreateUser);
module.exports = router;
