// import express from node_modules
const express = require("express");
const app = express();
// we're using all capital to let folks know this is a GLOBAL variable
const PORT = 8000;

// import mongoose -> server/config -> mongoose.config
// connect mongoose to the mongodb
// create a mongoose schema -> server/models/user.model
// Use mongoose model to make CRUD functions -> server/controllers/user.controller
// create routes to execute the functions -> server/controllers/user.routes

// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

// tells the system to save the objects to the database in JSON format ** REQUIRED **
app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the routes from our user.routes.js file
const AllMyUserRoutes = require("./server/routes/user.routes");
AllMyUserRoutes(app);

// tells the system to listen on the specified port and sends a message to the terminal
app.listen(PORT, () => console.log(`>>> The server is up and running on port ${PORT} <<<`));

// you can test in Postman - just make sure to wrap the keys in ""