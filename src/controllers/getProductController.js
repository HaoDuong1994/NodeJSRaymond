const getProductPage = (req, res) => {
  res.render("productRout.ejs");
};

const getAbcPage = (req, res) => {
  res.send("hello from abc");
};

const getHomePage = (req, res) => {
  res.render("homepage.ejs");
};
module.exports = {
  getProductPage,
  getAbcPage,
  getHomePage,
};
