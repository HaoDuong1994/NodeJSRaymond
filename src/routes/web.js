const express = require("express");
const router = express.Router();
const connection = require("../config/database");
const getUserByID = require("../services/getUserById");
const {
  postCreateUser,
  getHomePage,
  editUser,
  postEditUser,
  deleteUserPage,
  handleDeleteUser,
} = require("../controllers/getProductController");
router.get("/", getHomePage);
router.get("/product", (req, res) => {
  res.render("product.ejs");
});
router.get("/create", (req, res) => {
  res.render("createUser.ejs");
});
router.post("/create-user", postCreateUser);
//Edit user page
router.get("/editUser/:idUser", editUser);
//Edit user data
router.post("/edit-user", postEditUser);
//Delete user page
router.post("/delete-user/:id", deleteUserPage);
//Delete user confirm
router.post("/delete-user", handleDeleteUser);
module.exports = router;
