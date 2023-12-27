const connection = require("../config/database");
const getAllUser = async () => {
  const [results, fields] = await connection.execute("SELECT * FROM Users");
  return results;
};

module.exports = getAllUser;
