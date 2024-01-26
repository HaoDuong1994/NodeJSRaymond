const {
  createTaskService,
  getAllTaskService,
  updateTaskService,
} = require("../services/taskService");
const aqp = require("api-query-params");
const createTask = async (req, res) => {
  try {
    if (req.body.type === "EMPTY-TASK") {
      const result = await createTaskService(req.body);
      res.status(200).json({
        EC: 0,
        data: result,
      });
    }
  } catch (error) {
    console.log("error Task Controller from createTask", error);
  }
};

const getAllTask = async (req, res) => {
  const result = await getAllTaskService(req.query);
  res.status(200).json({
    EC: 0,
    data: result,
  });
};
const updateTask = async (req, res) => {
  const result = await updateTaskService(req.body);
  res.status(200).json({
    EC: 0,
    result: result,
  });
};
module.exports = {
  createTask,
  getAllTask,
  updateTask,
};
