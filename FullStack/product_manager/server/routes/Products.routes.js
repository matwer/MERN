// pull in the queries from the controller
const {
  createNewProduct,
  findOneProduct,
  findAllProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/Products.controller");

// export the routes to server.js
module.exports = (app) => {
  app.post("/api/products/new", createNewProduct);
};
