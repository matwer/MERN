// pull in the queries from the controller
const {
  create,
  findOne,
  findAll,
  findOneAndUpdate,
  deleteOne,
} = require("../controllers/Products.controller");

// export the routes to server.js
module.exports = (app) => {
  app.post("/api/products/new", create);
  app.get("/api/products/:id", findOne);
  app.get("/api/products", findAll);
  app.put("/api/products/:id", findOneAndUpdate);
  app.delete("/api/products/:id", deleteOne);
};
