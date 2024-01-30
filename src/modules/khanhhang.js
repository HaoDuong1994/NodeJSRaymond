const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");
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
  { timestamps: true } // create Time create, update
);
khanhHangSchema.plugin(mongoose_delete, { overrideMethods: "all" });
khanhHangSchema.pre("save", function (next) {
  console.log("before saveeeeeeee middle ware");
  next();
});
const khachHang = mongoose.model("KhachHang", khanhHangSchema);

module.exports = khachHang;
