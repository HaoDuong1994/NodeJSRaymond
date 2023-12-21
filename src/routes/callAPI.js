const express = require("express");
const testApiRoute = express.Router();
const callApiUsers = require("../controllers/callApiUser.js");
testApiRoute.get("/", callApiUsers);

module.exports = testApiRoute;
