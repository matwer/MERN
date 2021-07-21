// pull in the queries from the controller
const {
  create,
  findOne,
  findAll,
  findOneAndUpdate,
  deleteOne,
} = require(`../controllers/Authors.controllers`);

// export the routes to server.js
module.exports = (app) => {
  app.post("/api/authors/new", create);
  app.get("/api/authors/:id", findOne);
  app.get("/api/authors", findAll);
  app.put("/api/authors/:id", findOneAndUpdate);
  app.delete("/api/authors/:id", deleteOne);
};
