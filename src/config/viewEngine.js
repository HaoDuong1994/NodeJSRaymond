const setViewEngine = (app) => {
  //Config Engine
  app.set("views", "./src/views");
  // các view engine set ở thư mục nào
  app.set("view engine", "ejs"); // định nghĩa loại engine
};

module.exports = setViewEngine;
