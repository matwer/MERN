// import express and cors from node_modules
const express = require(`express`);
const cors = require(`cors`);

// initialize an instance of express() and set the port
const app = express();
const PORT = 8000;

// tell express to use cors, save the records to JSON and lets the
// system know we're passing data over the URL
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

// import the mongoose config and our routes
require(`./config/mongoose.config`);
const MyRoutes = require(`./routes/Products.routes`);
MyRoutes(app);

// set up a listener on the specified port and set up an anonymous function to
// let the user know the app is listening
app.listen(PORT, () => console.log(`>>> Listening on port ${PORT} <<<`));
