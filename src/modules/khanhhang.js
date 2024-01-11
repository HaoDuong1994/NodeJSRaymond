const mongoose = require("mongoose");
const { Schema } = mongoose;
const khanhHangSchema = new Schema(
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
const khachHang = mongoose.model("KhachHang", khanhHangSchema);
module.exports = khachHang;
