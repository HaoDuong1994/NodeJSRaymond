const { uploadSingleFile } = require("../services/uploadFile");
const {
  createCustomerService,
  createManyCustomerService,
  getAllCustomerService,
  updateCustomerService,
  deleteCustomerService,
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
  res.status(200).json({
    customer: resultData,
  });
};
const createManyCustomer = async (req, res) => {
  try {
    let arrayCustomer = req.body.customers;
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
const getAllCustomers = async (req, res) => {
  const data = await getAllCustomerService();
  console.log("data of all customer", data);
  res.status(200).json({
    EC: 0,
    Customers: data,
  });
};
const updateCustomer = async (req, res) => {
  try {
    const idCustomer = req.body.id;
    const objectCustomer = req.body;
    const data = await updateCustomerService(idCustomer, objectCustomer);
    console.log("data customer update >>>>>>>>>", data);
    res.status(200).json({
      EC: 0,
      sucess: data,
    });
  } catch (error) {
    console.log("error update customer", error);
    res.send(JSON.stringify(error));
  }
};
const deleteCustomer = async (req, res) => {
  try {
    const idCustomer = req.body.id;
    const result = await deleteCustomerService(idCustomer);
    res.status(200).json({
      EC: 0,
      result: result,
    });
  } catch (error) {
    console.log("error of deleteCustomer >>>>>", error);
  }
};
module.exports = {
  createCustomer,
  createManyCustomer,
  getAllCustomers,
  updateCustomer,
  deleteCustomer,
};
