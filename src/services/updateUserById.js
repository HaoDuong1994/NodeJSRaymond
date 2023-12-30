const connection = require("../config/database");
const updateUserById = async (myname, city, email, id) => {
  const [result, fields] = await connection.query(
    `UPDATE Users
        SET name = ?, city= ?, email =?
        WHERE id = ?`,
    [myname, city, email, id]
  );
};
console.log(1);
module.exports = updateUserById;
