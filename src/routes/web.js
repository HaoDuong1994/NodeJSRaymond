const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return res.render("homepage.ejs");
});
router.get("/product", (req, res) => {
  res.render("product.ejs");
});

module.exports = router;
