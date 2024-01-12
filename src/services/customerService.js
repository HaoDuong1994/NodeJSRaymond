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
const getAllCustomerService = async () => {
  const data = await khanhHang.find({});
  return data;
};
const updateCustomerService = async (id, objectCustomer) => {
  const data = await khanhHang.updateOne(
    { _id: id },
    {
      name: objectCustomer.name,
      address: objectCustomer.address,
      phone: objectCustomer.phone,
      email: objectCustomer.email,
      image: objectCustomer.image,
      description: objectCustomer.description,
    }
  );
  return data;
};
const deleteCustomerService = async (idCustomer) => {
  const result = await khanhHang.deleteOne({ _id: idCustomer });
  console.log("check result >>>>>", result);
  return result;
};
module.exports = {
  createCustomerService,
  createManyCustomerService,
  getAllCustomerService,
  updateCustomerService,
  deleteCustomerService,
};
