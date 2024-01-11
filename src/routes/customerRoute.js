const express = require("express");
const customerRoute = express.Router();
const {
  createCustomer,
  createManyCustomer,
} = require("../controllers/customerController");
//CRUD customer
customerRoute.post("/create-customer", createCustomer);
//CRUD many customer
customerRoute.post("/create-many-customer", createManyCustomer);
module.exports = customerRoute;
