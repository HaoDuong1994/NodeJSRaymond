const connection = require("../config/database");

const handleDeleteUserById = async (id) => {
  await connection.query(`DELETE FROM Users WHERE id=?`, [id]);
};

module.exports = handleDeleteUserById;
