const mysql = require('mysql');
const dotenv = require("dotenv").config()

exports.connection = mysql.createPool({
    host: "localhost",
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: "dbfastfood"
});