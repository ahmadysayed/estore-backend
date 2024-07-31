const express = require("express");
const app = express();
const PORT = 5001;

app.get("/", (req, res) => {
  let proData = {
    pName: "Jakets",
    price: 45,
    img: "sho-1.jpg",
  };
  res.status(200).send(proData);
});

const server = app.listen(PORT, () => {
  console.log("App is running in the port - 5001");
});
