const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("exp.ejs");
});
router.get("/product", (req, res) => {
  res.render("product.ejs");
});

module.exports = router;
