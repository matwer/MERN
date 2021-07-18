// import mongoose from node_modules
const mongoose = require("mongoose");

// create a variable for the database
const DB = "badjokes";

// connect to the database
mongoose.connect("mongodb://localhost/" + DB, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then( () => console.log("Established a connection to the database"))
	.catch( () => console.log("Unable to connect to the dtabase", err))
