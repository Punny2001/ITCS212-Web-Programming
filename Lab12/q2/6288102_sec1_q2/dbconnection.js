const mysql = require("promise-mysql");

var dbConfig = {
  host: "localhost",
  user: "root",
  password: "Takaza00956",
  database: "q2"
};
module.exports = async () => {
  try {
    let pool = await mysql.createPool(dbConfig);
    let connection = pool.getConnection();
    return connection;
  } catch (error) {
    throw error;
  }
};
