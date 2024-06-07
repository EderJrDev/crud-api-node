const mongoose = require("mongoose");
const dbProduct = process.env.DB_PRODUCT
const dbPassword = process.env.DB_PASS
const dbUrl = process.env.DB_URL
const conn = async () => {
  try {

    const dbConn = await mongoose.connect(dbUrl)

    console.log("Conectou ao banco!")
    return dbConn;
  } catch (error) {
    console.log(error)
  }
}

conn()
//conection

module.exports = conn

console.log(conn)