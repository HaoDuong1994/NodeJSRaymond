const express = require("express");
const customerRoute = express.Router();
const {
  createCustomer,
  createManyCustomer,
  getAllCustomers,
  updateCustomer,
  deleteCustomer,
  deleteManyCustomer,
  restoreCustomer,
} = require("../controllers/customerController");
//Get All customer
customerRoute.get("/", getAllCustomers);
//CRUD customer
customerRoute.post("/create-customer", createCustomer);
//Update a customer
customerRoute.put("/update-customer", updateCustomer);
//CRUD many customer
customerRoute.post("/create-many-customer", createManyCustomer);
// Delete customer
customerRoute.delete("/delete-customer", deleteCustomer);
// Delete many customer
customerRoute.delete("/delete-many-customer", deleteManyCustomer);
// restore deleted customer
customerRoute.put("/restore-deleted", restoreCustomer);
//test params
customerRoute.get("/infor", (req, res) => {
  console.log("paramsssssss", req.query);
  res.status(200).json({
    data: req.query,
  });
}); // Re.query ta chuyền biến và giá trị còn Req.params ta chỉ chuyền giá trị
customerRoute.get("/infor/:name/:country", (req, res) => {
  res.status(200).json({
    data: req.params,
  });
});
module.exports = customerRoute;
