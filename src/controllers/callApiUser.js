const connection = require("../config/database");

const callApiUsers = async (req, res) => {
  console.log(11111111111111111111111111);
  let user = [];
  connection.query("SELECT * FROM Users", function (err, results, fields) {
    user = results; // results contains rows returned by server
    console.log("data o day la", user);
    res.json(user);
  });
  // results contains rows returned by server
};
module.exports = callApiUsers;
