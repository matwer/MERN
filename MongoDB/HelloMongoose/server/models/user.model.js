// import mongoose from node_modules
// this is the equivalents of creating a schema in MySQL
const mongoose = require("mongoose");

// creates the schema for the database which determines how items are added to the database
const UserSchema = new mongoose.Schema({
	name: String,
	age: Number
}, {
	// optional: that tells Mongoose to automatically manage 
	// createdAt and updatedAt properties for your documents
	timestaps: true
});

// creates the MongoDB collection using the schema defined above
// this is teh equivalent of creating a table in MySQL
const User = mongoose.model("User", UserSchema);

// export the model so it can be referenced for CRUD operations
// we're just exporting the User
module.exports = User;