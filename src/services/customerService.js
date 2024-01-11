const khanhHang = require("../modules/khanhhang");
const createCustomerService = async (dataCustomer) => {
  const data = await khanhHang.create({
    name: dataCustomer.name,
    address: dataCustomer.address,
    phone: dataCustomer.phone,
    email: dataCustomer.email,
    description: dataCustomer.description,
    image: dataCustomer.image,
  });
  return data;
};
const createManyCustomerService = async (arrayCustomer) => {
  try {
    let data = await khanhHang.insertMany(arrayCustomer);
    return data;
  } catch (error) {
    console.log("error in createmany  customer service", error);
    return null;
  }
};
module.exports = { createCustomerService, createManyCustomerService };
