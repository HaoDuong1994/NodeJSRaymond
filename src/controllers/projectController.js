const {
  createProjectService,
  getProjectService,
  updateProjectService,
  deleteProjectService,
  deleteUserProjectService,
} = require("../services/projectService");
const createProject = async (req, res) => {
  try {
    const result = await createProjectService(req.body);
    console.log("result >>>>>>>>>>>>>", result);
    res.status(200).json({
      EC: 0,
      data: result,
    });
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
