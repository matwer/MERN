// import cors and express
const cors = require(`cors`);
const express = require(`express`);

// initialize express and set the default port
const app = express();
const PORT = 8000;

// import the mongoose config
require(`./config/mongoose.config`);

// tell express to use cors and save entries as JSON
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

// import our routes
require(`./routes/Authors.routes`)(app);

// set up a listener on the specified port
app.listen(PORT, () => console.log(`>>> Listening on port ${PORT} <<<`));
