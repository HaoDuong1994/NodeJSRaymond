const { uploadSingleFile } = require("../services/uploadFile");
const {
  createCustomerService,
  createManyCustomerService,
} = require("../services/customerService");
const createCustomer = async (req, res) => {
  // {
  //     name: { type: String },
  //     address: String,
  //     phone: String,
  //     email: String,
  //     image: String,
  //     description: String,
  //   },
  //   { timestamps: true }
  let { name, address, phone, email, description } = req.body;
  let imgURL = "";
  if (!req.files || Object.keys(req.files).length === 0) {
  } else {
    let result = await uploadSingleFile(req.files.image);

    console.log("ket qua cua result", result);
    imgURL = result.path;
  }
  const dataCustomer = {
    name,
    address,
    phone,
    email,
    description,
    image: imgURL,
  };
  const resultData = await createCustomerService(dataCustomer);
  console.log("resultData>>>>>>>>>>>>>>>>>>>>", resultData);
  res.status(200).json({
    customer: resultData,
  });
};
const createManyCustomer = async (req, res) => {
  try {
    let arrayCustomer = req.body.customers;
    console.log("arrayCustomer", arrayCustomer);
    const data = await createManyCustomerService(arrayCustomer);
    console.log("data array customer", data);
    res.status(200).json({
      EC: 1,
      data: data,
    });
  } catch (error) {
    console.log("errroor create many customer", error);
  }
};
module.exports = {
  createCustomer,
  createManyCustomer,
};
