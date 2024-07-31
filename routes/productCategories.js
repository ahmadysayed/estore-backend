const express = require("express");
const productCategories = express();
const mysql = require("mysql2");
const PORT = 5001;

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "power",
  database: "estore",
  port: 3306,
  multipleStatements: true,
});

productCategories.get("/", (req, res) => {
  pool.query("select * from categories", (err, categories) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(categories);
    }
  });
});

module.exports = productCategories;
