const express = require("express");
const productCategories = require("./routes/productCategories");
const products = require("./routes/products");
const cors = require("cors");
const users = require("./routes/users");
const app = express();
const PORT = 5001;

// Use CORS middleware
app.use(cors());

// Use express.json() and express.urlencoded() instead of body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define routes
app.use("/productCategories", productCategories);
app.use("/products", products);
app.use("/users", users);

// Start the server
const server = app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
