// import all the CRUD operations from the controller
const { findAllJokes, findOneJoke, createNewJoke, updateJoke, deleteJoke } = require("../controllers/jokes.controller");

// create the routes
module.exports = (app) => {
	app.post("/api/jokes/new", createNewJoke);
	app.get("/api/jokes/:id", findOneJoke);
	app.get("/api/jokes", findAllJokes);
	app.put("/api/jokes/update/:id", updateJoke);
	app.delete("/api/jokes/delete/:id", deleteJoke);
}
