const express = require("express");
const customerRoute = express.Router();
const {
  createCustomer,
  createManyCustomer,
  getAllCustomers,
  updateCustomer,
  deleteCustomer,
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
module.exports = customerRoute;
