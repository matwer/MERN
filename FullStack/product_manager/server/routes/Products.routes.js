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
  app.get("/api/products", findAllProducts);
  app.get("/api/products/:id", findOneProduct);
  app.put("/api/products/edit/:id", updateProduct);
  app.delete("/api/products/delete/:id", deleteProduct);
};
