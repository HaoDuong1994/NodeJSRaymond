const path = require("path");
const uploadSingleFile = async (objectFile) => {
  //uploadpath
  const uploadPath = path.resolve(__dirname, "../public/img/upload");
  //get extention name
  let extname = path.extname(objectFile.name);
  //get basename
  let basename = path.basename(objectFile.name, extname);
  let fileName = `${basename}-${Date.now()}${extname}`;
  //get final path
  const filnamePath = `${uploadPath}/${fileName}`;
  try {
    await objectFile.mv(filnamePath);
    return {
      status: "success",
      path: fileName,
      error: null,
    };
  } catch (error) {
    console.log(" err exist >>>>>>>>>>>", __dirname);
    return {
      status: "fail",
      error: JSON.stringify(error),
    };
  }
};
const uploadMultipleFile = async (arrayFile) => {
  try {
    let arrayImg = [];
    let countSucess = 0;
    for (let i = 0; i < arrayFile.length; i++) {
      const extName = path.extname(arrayFile[i].name);
      console.log("arrayFile tai i", arrayFile[i]);
      const uploadPath = path.resolve(__dirname, "../public/img/upload");
      const baseName = path.basename(arrayFile[i].name);
      const finalName = `${baseName}-${Date.now()}${extName}`;
      const finalPath = `${uploadPath}/${finalName}`;
      try {
        await arrayFile[i].mv(finalPath);
        arrayImg.push({
          status: "sucess",
          path: finalName,
          fileName: arrayFile[i].name,
        });
      } catch (error) {
        console.log("error>>>>>>>>>>>>>>.", error);
      }
    }
    return {
      data: arrayImg,
    };
  } catch (error) {
    console.log("show error", error);
  }
};
module.exports = {
  uploadSingleFile,
  uploadMultipleFile,
};
