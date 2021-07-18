// import mongoose from node_modules
const mongoose = require("mongoose");

// create a variable for the database
const DB = "playing_with_mongoose";

// conenct to the database
mongoose.connect("mongodb://localhost/" + DB, {
	// these are required to get rid of deprecation methods in the terminal
	useNewUrlParser: true,
	useUnifiedTopology: true,
})   
	.then(() => console.log("Established a connection to the database"))
	.catch(err => console.log("Something went wrong when connecting to the database", err));