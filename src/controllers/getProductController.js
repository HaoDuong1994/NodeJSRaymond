const connection = require("../config/database");
const getAllUser = require("../services/getAllUser");
const getUserByID = require("../services/getUserById");
const updateUserById = require("../services/updateUserById");
const handleDeleteUserById = require("../services/handleDeleteUser");
const User = require("../modules/user");
const getProductPage = (req, res) => {
  res.render("productRout.ejs");
};

const getAbcPage = (req, res) => {
  res.send("hello from abc");
};

const getHomePage = async (req, res) => {
  // const [results, fields] = await connection.execute("SELECT * FROM Users");
  const result = await User.find({});
  console.log("ket qua result gethome page", result);
  return res.render("homepage.ejs", { listUser: result });
};

const postCreateUser = async (req, res) => {
  let { email, myname, city } = req.body;
  await User.create({
    email: email,
    name: myname,
    city: city,
  });

  res.send("create data success");
};
const editUser = async (req, res) => {
  const { idUser } = req.params;
  let results = await User.findById(idUser).exec();
  console.log("result of user", results);
  return res.render("updateUser.ejs", { user: results });
};
const postEditUser = async (req, res) => {
  let { email, myname, city, id } = req.body;
  await User.updateOne({ _id: id }, { email: email, name: myname, city: city });
  res.redirect("/");
};
const deleteUserPage = async (req, res) => {
  const { id } = req.params;
  const results = await User.findById(id).exec();
  res.render("deleteUserPage.ejs", { user: results });
};
const handleDeleteUser = async (req, res) => {
  let { id } = req.body;
  await User.deleteOne({ _id: id });
  res.redirect("/");
};
module.exports = {
  getProductPage,
  getAbcPage,
  getHomePage,

  postCreateUser,
  editUser,
  postEditUser,
  deleteUserPage,
  handleDeleteUser,
};
