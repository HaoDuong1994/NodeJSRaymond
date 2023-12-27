const connection = require("../config/database");
const getAllUser = require("../services/getAllUser");
const getUserByID = require("../services/getUserById");
const updateUserById = require("../services/updateUserById");
const handleDeleteUserById = require("../services/handleDeleteUser");
const getProductPage = (req, res) => {
  res.render("productRout.ejs");
};

const getAbcPage = (req, res) => {
  res.send("hello from abc");
};

const getHomePage = async (req, res) => {
  // const [results, fields] = await connection.execute("SELECT * FROM Users");
  const result = await getAllUser();
  console.log("ket qua result gethome page", result);
  return res.render("homepage.ejs", { listUser: result });
};

const postCreateUser = async (req, res) => {
  let { email, myname, city } = req.body;
  const [result, fields] = await connection.query(
    `INSERT INTO
     Users (email, name, city)
     VALUES(?, ?, ?)`,
    [email, myname, city]
  );
  res.send("create data success");
};
const editUser = async (req, res) => {
  const { idUser } = req.params;
  let results = await getUserByID(idUser);
  return res.render("updateUser.ejs", { user: results[0] });
};
const postEditUser = async (req, res) => {
  let { email, myname, city, id } = req.body;
  await updateUserById(myname, city, email, id);
  res.redirect("/");
};
const deleteUserPage = async (req, res) => {
  const { id } = req.params;
  const results = await getUserByID(id);
  res.render("deleteUserPage.ejs", { user: results[0] });
};
const handleDeleteUser = async (req, res) => {
  let { id } = req.body;
  await handleDeleteUserById(id);
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
