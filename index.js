const express = require("express");
const productCategories = require("./routes/productCategories");
const products = require("./routes/products");
const cors = require("cors");
const users = require("./routes/users");
const app = express();
const PORT = 5001;
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser);
app.use("/productCategories", productCategories);
app.use("/products", products);
app.use("/users", users);

const server = app.listen(PORT, () => {
  console.log("App is running in the port - 5001");
});
