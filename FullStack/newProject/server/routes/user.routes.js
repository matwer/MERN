// imports the UserController (the CRUD operations) from /server/controllers/user.controller
// const UserController = require("../controllers/user.controller");

// module.exports = (app) => {
//    calls the appropriate CRUD functions from the UserController object
//   app.get("/api/users/", UserController.findAllUsers);
//   app.get("/api/users/:id", UserController.findOneSingleUser);
//   app.put("/api/users/update/:id", UserController.updateExistingUser);
//   app.post("/api/users/new", UserController.createNewUser);
//   app.delete("/api/users/delete/:id", UserController.deleteAnExistingUser);
// };

// another option, since we set up all the CRUD operations as an object
// we can destructure them and call them directly without prepending UserConroller
const {
  findAllUsers,
  findOneUser,
  updateUser,
  createNewUser,
  deleteUser,
} = require("../controllers/user.controller");

// app is in refernce to express from server.js
module.exports = (app) => {
  app.post("/api/users/new", createNewUser);
  app.get("/api/users/:id", findOneUser);
  app.get("/api/users/", findAllUsers);
  app.put("/api/users/update/:id", updateUser);
  app.delete("/api/users/delete/:id", deleteUser);
};
