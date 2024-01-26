const express = require("express");
const projectRoute = express.Router();
const {
  createProject,
  getProject,
  updateProject,
  deleteProject,
  deleteUserProject,
} = require("../controllers/projectController");
//Create project
projectRoute.post("/create-empty-project", createProject);
//Get project
projectRoute.get("/", getProject);
//Update project
projectRoute.put("/update-project", updateProject);
//Delete project
projectRoute.delete("/delete-project", deleteProject);
//Delete user from project
projectRoute.delete("/delete-user-project", deleteUserProject);
module.exports = projectRoute;
