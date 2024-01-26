const Project = require("../modules/project");
const aqp = require("api-query-params");
const createProjectService = async (data) => {
  if (data.type == "EMPTY-PROJECT") {
    console.log("data>>>>>>>>>>", data);
    const result = await Project.create(data);
    return result;
  }
  if (data.type == "ADD-USER") {
    console.log("data>>>>>>>>>>>>>>", data);
    const currentProject = await Project.findById(data.projectID).exec();
    console.log("current project>>>>>>", currentProject);
    data.userArrayID.forEach((element) => {
      currentProject.usersInfor.push(element);
    });
    await currentProject.save();
    return currentProject;
  }
  if (data.type == "ADD-TASK") {
    ///////////
    console.log("data add task", data);
    const currentProject = await Project.findById(data.projectID).exec();
    data.taskArrayID.forEach((id) => {
      currentProject.tasks.push(id);
    });
    currentProject.save();
    return currentProject;
  }
};
const getProjectService = async (data) => {
  const page = data.page;
  const query = aqp(data);
  const { filter, limit, population } = query;
  console.log("population >>>>>>>>>>>>>", population);
  delete filter.page;
  let offSet = (page - 1) * limit;
  const result = await Project.find(filter)
    .skip(offSet)
    .limit(limit)
    .populate(population)
    .exec();
  return result;
};
const updateProjectService = async (data) => {
  console.log("data >>>>>>>>>>>>>>>>", data);
  const id = data.id;
  delete data.id;
  console.log("data afer deleta", data);
  const result = await Project.updateOne({ _id: id }, data);
  return result;
};
const deleteProjectService = async (data) => {
  const id = data.id;
  const result = Project.deleteOne({ _id: id });
  return result;
};
const deleteUserProjectService = async (data) => {
  console.log("dataaaaa", data);
  const idProject = data.id;
  const idUser = data.idUser;
  console.log("idUserrrrrrr", idUser);
  console.log("id project", idProject);
  const project = await Project.findById(idProject).exec();
  console.log("project current >>>>>>>>>>>>>>>>", project);
  console.log("project.ìnorrrrrrrrrrrrrrrrrr", project.usersInfor);
  await project.usersInfor.pull(data.idUser[0]);
  await project.save();
  return project;
};
module.exports = {
  createProjectService,
  getProjectService,
  updateProjectService,
  deleteProjectService,
  deleteUserProjectService,
};
