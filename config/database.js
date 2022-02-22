require("dotenv").config();

module.exports = {
  username : process.env.DATABASE_USERNAME,
  password : process.env.DATABASE_PASSWORD,
  database : process.env.DATABASE_DB,
  host : process.env.DATABASE_HOST, 
  dialect : process.env.DATABASE_DIALECT,
  define : {
    timestamp : false,
    underscored: true
  }
}