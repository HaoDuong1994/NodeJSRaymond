const mongoose = require("mongoose");
const { Schema } = mongoose;
const customerSchema = new Schema(
  {
    name: { type: String },
    address: String,
    phone: String,
    email: String,
    image: String,
    description: String,
  },
  { timestamps: true }
);
const customer = mongoose.model("Customer", customerSchema);
module.exports = customer;
