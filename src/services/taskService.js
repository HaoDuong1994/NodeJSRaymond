const Task = require("../modules/task");
const aqp = require("api-query-params");
const createTaskService = async (data) => {
  try {
    const result = await Task.create(data);
    return result;
  } catch (error) {
    console.log("erroor create task service", error);
  }
};
const getAllTaskService = async (data) => {
  let page = data.page;
  console.log("apq >>>>>>>>>>>>>>>", aqp(data));
  const { filter, skip, limit, population } = aqp(data);
  let offSet = (page - 1) * limit;
  delete filter.page;
  const result = Task.find(filter)
    .skip(offSet)
    .populate(population)
    .limit(limit);
  return result;
};
const updateTaskService = async (data) => {
  const id = data.id;
  delete data.id;
  const result = await Task.updateOne({ _id: id }, data);
  return result;
};
module.exports = {
  createTaskService,
  getAllTaskService,
  updateTaskService,
};
