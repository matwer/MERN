// import express
const express = require("express");
const app = express();

// initialize the connection
require("./server/config/mongoose.config");

// save the files in JSON format
app.use(express.json(), express.urlencoded({ extended: true}));

// import the routes
const MyRoutes = require("./server/routes/jokes.routes");
MyRoutes(app);

// set up the listener on port 8000
app.listen(5050, () => console.log(">>> the server is up and running on port 5050 <<<"));
