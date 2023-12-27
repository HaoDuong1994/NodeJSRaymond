const connection = require("../config/database");

const getUserByID = async (userID) => {
  const [results, fields] = await connection.query(
    `SELECT * FROM Users Where id = ?`,
    [userID]
  );
  console.log("result of user by ID >>>>>>>", results);
  return results;
};

module.exports = getUserByID;
