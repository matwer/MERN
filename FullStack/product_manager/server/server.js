// import express and set the port
const express = require(`express`);
// initialize cors for cross-domain requests
const cors = require(`cors`);

// initialize an instance of express() and set the port
const app = express();
const PORT = 8000;

// import the mongoose config
require(`./config/mongoose.config`);

// tell express to use cors
app.use(cors());

// tell express to save the records in JSON - NEEDS TO BE BEFORE THE ROUTES
app.use(express.json(), express.urlencoded({ extended: true }));

// import our routes
const MyRoutes = require(`./routes/Products.routes`);
MyRoutes(app);

// set up a listener on the specified port and set up an anonymous function to
// let the user know the app is listening
app.listen(PORT, () => console.log(`>>> Listening on port ${PORT} <<<`));
