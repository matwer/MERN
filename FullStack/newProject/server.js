// import express, initialize express() and assign a port
const express = require("express");
// we need to initialize cors so we cna make cross-origin requests
const cors = require("cors");

const app = express();
const PORT = 8000;

// import the mongoose config
require("./server/config/mongoose.config");

// use cors
app.use(cors());
// use express, save new entries in JSON format, ???
app.use(express.json(), express.urlencoded({ extended: true }));

// import the route(s)
const MyRoutes = require("./server/routes/user.routes");
MyRoutes(app);

// set up express to listen on the PORT
app.listen(PORT, () => console.log(`>>> Listening on port ${PORT} <<<`));

// // from the platform
// const express = require("express");
// const cors = require("cors"); // This is new
// const app = express();

// app.use(cors()); // This is new
// require("./server/routes/person.routes")(app);

// app.listen(8000, () => {
//   console.log("Listening at Port 8000");
// });
