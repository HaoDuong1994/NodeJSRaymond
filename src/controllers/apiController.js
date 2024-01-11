const User = require("../modules/user");
const {
  uploadSingleFile,
  uploadMultipleFile,
} = require("../services/uploadFile");
const getAllUsers = async (req, res) => {
  const result = await User.find({});
  console.log("ket qa cua result ka", result);
  return res.status(200).json({
    error: 0,
    data: result,
  });
};
const createUser = async (req, res) => {
  let { email, myname, city } = req.body;
  let user = await User.create({
    email: email,
    name: myname,
    city: city,
  });
  return res.status(200).json({
    error: 0,
    data: user,
  });
};
const updateUser = async (req, res) => {
  let { id, email, myname, city } = req.body;
  let user = await User.updateOne(
    { _id: id },
    { email: email, name: myname, city: city }
  );
  console.log("ket qua update user>>>>>>>", user);
  return res.status(200).json({
    error: 0,
    data: user,
  });
};
const deleteUser = async (req, res) => {
  let { id } = req.body;
  let user = await User.deleteOne({ _id: id });
  return res.status(200).json({
    error: 0,
    data: user,
  });
};
const postUpLoadFile = async (req, res) => {
  // let sampleFile;
  // let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }
  console.log("req.file o day la>>>>", req.files);
  let result = await uploadSingleFile(req.files.image);
  console.log(" resiult of upload file", result);
  res.send({
    data: [result],
  });
};
const postUploadMultipleFile = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }
  if (Array.isArray(req.files.image)) {
    console.log("req.files.image>>>>>>>>>>>>", req.files.image);
    let result = await uploadMultipleFile(req.files.image);
    console.log("check result", result);
    res.status(200).json({
      data: result,
    });
  }
};
module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  postUpLoadFile,
  postUploadMultipleFile,
};
