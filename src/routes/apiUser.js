const express = require("express");
const apiRoutes = express.Router();
const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  postUpLoadFile,
  postUploadMultipleFile,
} = require("../controllers/apiController");
apiRoutes.get("/", getAllUsers);
apiRoutes.post("/", createUser);
apiRoutes.put("/", updateUser);
apiRoutes.delete("/", deleteUser);
apiRoutes.post("/file", postUpLoadFile);
apiRoutes.post("/files", postUploadMultipleFile);
module.exports = apiRoutes;
