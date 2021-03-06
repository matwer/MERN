// import cors and express
const cors = require(`cors`);
const express = require(`express`);

// initialize express and set the default port
const app = express();
const PORT = 8001;

// tell express to use cors and save entries as JSON
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

// import the mongoose config and the routes
require(`./config/mongoose.config`);
require(`./routes/Authors.routes`)(app);

// set up a listener on the specified port
app.listen(PORT, () => console.log(`>>> Listening on port ${PORT} <<<`));
