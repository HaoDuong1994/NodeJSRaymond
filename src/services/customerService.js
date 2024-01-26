const khanhHang = require("../modules/khanhhang");
const aqp = require("api-query-params");
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
const getAllCustomerService = async (page, limit, reqQuery) => {
  if ((page, limit)) {
    //offset = (page - 1) * itemsPerPage + 1.
    const { filter } = aqp(reqQuery);
    delete filter.page;
    console.log("filter >>>>>>>>>", filter);
    let offSet = (page - 1) * limit;
    const data = await khanhHang.find(filter).limit(limit).skip(offSet).exec();
    return data;
  } else {
    const data = await khanhHang.find({});
    return data;
  }
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
      age: objectCustomer.age,
      hobbit: objectCustomer.hobbit,
    }
  );
  return data;
};
const deleteCustomerService = async (idCustomer) => {
  const result = await khanhHang.deleteById({ _id: idCustomer });
  console.log("check result >>>>>", result);
  return result;
};
const deleteManyCustomerService = async (arrayID) => {
  try {
    const result = await khanhHang.delete({ _id: { $in: arrayID } });
    return result;
  } catch (error) {
    console.log(error);
  }
};
const restoreCustomerService = async (arrayID) => {
  const result = await khanhHang.restore({ _id: { $in: arrayID } });
  return result;
};
const deleteUserProjectService = async (data) => {
  console.log("dataaaaa", data);
  const idProject = data.id;
};
module.exports = {
  createCustomerService,
  createManyCustomerService,
  getAllCustomerService,
  updateCustomerService,
  deleteCustomerService,
  deleteManyCustomerService,
  restoreCustomerService,
};
