const { uploadSingleFile } = require("../services/uploadFile");
const Joi = require("joi");

const {
  createCustomerService,
  createManyCustomerService,
  getAllCustomerService,
  updateCustomerService,
  deleteCustomerService,
  deleteManyCustomerService,
  restoreCustomerService,
} = require("../services/customerService");
const aqp = require("api-query-params");
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
  console.log("req.body >>>>>>>>>", req.body);
  const schema = Joi.object({
    name: Joi.string(),

    address: Joi.string(),

    phone: Joi.string().pattern(new RegExp("^[0-9]{10,12}$")),

    email: Joi.string().email(),

    description: Joi.string(),
  });
  const { value, error } = schema.validate(req.body, { abortEarly: false });
  console.log("eroor ", error);
  console.log("valueeeeeeeeeeeee", value);
  if (error) {
    return res.json({
      error: error,
    });
  } else {
    ///
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
  }
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
  console.log("req.query>>>>>>>", req.query);

  let { limit, page } = req.query;
  if ((limit, page)) {
    const data = await getAllCustomerService(page, limit, req.query);
    return res.status(200).json({
      EC: 0,
      data,
    });
  } else {
    console.log("limit and page", limit, page);
    const data = await getAllCustomerService();
    res.status(200).json({
      EC: 0,
      data: data,
    });
  }
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
const deleteManyCustomer = async (req, res) => {
  console.log("res.body customer", req.body.customerID);
  let arrayID = req.body.customerID;
  const result = await deleteManyCustomerService(arrayID);
  res.status(200).json({
    EC: 0,
    result: result,
  });
};
const restoreCustomer = async (req, res) => {
  const arrayID = req.body.idCustomer;
  const result = await restoreCustomerService(arrayID);

  res.status(200).json({
    EC: 0,
    result: result,
  });
};
module.exports = {
  createCustomer,
  createManyCustomer,
  getAllCustomers,
  updateCustomer,
  deleteCustomer,
  deleteManyCustomer,
  restoreCustomer,
};
