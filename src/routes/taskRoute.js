const express = require("express");
const taskRoute = express.Router();
const {
  createTask,
  getAllTask,
  updateTask,
} = require("../controllers/taskController");
//Create task
taskRoute.post("/create-task", createTask);
//Create all task
taskRoute.get("/", getAllTask);
//Update task
taskRoute.put("/update-task", updateTask);
module.exports = taskRoute;
