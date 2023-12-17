const getProductPage = (req, res) => {
  res.render("productRout.ejs");
};

const getAbcPage = (req, res) => {
  res.send("hello from abc");
};
module.exports = {
  getProductPage,
  getAbcPage,
};
