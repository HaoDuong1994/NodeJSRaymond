const connection = require("../config/database");
const getProductPage = (req, res) => {
  res.render("productRout.ejs");
};

const getAbcPage = (req, res) => {
  res.send("hello from abc");
};

const getHomePage = (req, res) => {
  res.render("homepage.ejs");
};

const postCreateUser = (req, res) => {
  let { email, myname, city } = req.body;
  connection.query(
    `INSERT INTO 
    Users (email, name, city)
    VALUES(?, ?, ?)`,
    [email, myname, city],
    function (err, results) {
      if (err) console.log("err data>>>>>>>>", err);
      console.log("data>>>>>>>>>>>>", results);
      res.send("create data success");
    }
  );
};
module.exports = {
  getProductPage,
  getAbcPage,
  getHomePage,
  postCreateUser,
};
