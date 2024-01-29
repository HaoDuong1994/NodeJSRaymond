const Joi = require("joi");
const {
  createProjectService,
  getProjectService,
  updateProjectService,
  deleteProjectService,
  deleteUserProjectService,
} = require("../services/projectService");
const createProject = async (req, res) => {
  try {
    const { name, leader, task, startDate, endDate } = req.body;
    const schema = Joi.object({
      name: Joi.string(),
      startDate: Joi.string(),
      endDate: Joi.string(),
      description: Joi.string(),
      customerInfor: {
        name: Joi.string(),
        phone: Joi.string(),
        email: Joi.string(),
      },
      leader: {
        name: Joi.string(),
        email: Joi.string(),
      },
    });
    const { value, error } = schema.validate(req.body, { abortEarly: false });
    console.log("errorrrrrrrrrr", error);
    console.log("value >>>>>>>>", value);
    if (error) {
      return res.status(200).json({
        mesg: error,
      });
    } else {
      const result = await createProjectService(req.body);
      console.log("result >>>>>>>>>>>>>", result);
      res.status(200).json({
        EC: 0,
        data: result,
      });
    }
  } catch (error) {
    console.log("erroooooooooooooor", error);
    res.status(200).json({
      error: JSON.stringify(error),
    });
  }
};
const getProject = async (req, res) => {
  const result = await getProjectService(req.query);
  res.status(200).json({
    EC: 0,
    data: result,
  });
};
const updateProject = async (req, res) => {
  const result = await updateProjectService(req.body);
  res.status(200).json({
    EC: 0,
    result: result,
  });
};
const deleteProject = async (req, res) => {
  const result = await deleteProjectService(req.body);
  res.send("hello delete project");
};
const deleteUserProject = async (req, res) => {
  if (req.body) {
    console.log("1111111111111111");
    const result = await deleteUserProjectService(req.body);
    res.status(200).json({
      EC: 0,
      result: result,
    });
  }
};
module.exports = {
  createProject,
  getProject,
  updateProject,
  deleteProject,
  deleteUserProject,
};
