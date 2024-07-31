const express = require("express");
const app = express();
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

app.get("/", (req, res) => {
  pool.query("select * from categories", (err, categories) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(categories);
    }
  });
});

const server = app.listen(PORT, () => {
  console.log("App is running in the port - 5001");
});
