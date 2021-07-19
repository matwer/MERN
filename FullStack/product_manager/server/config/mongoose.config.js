// import mongoose from node_modulrs
const mongoose = require(`mongoose`);

// create a variable with the database name
const DB = "productsDB";

// connect to the database
mongoose
  .connect("mongodb://localhost/" + DB, {
    // these are required to get rid of deprecation methods in the terminal
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`*** Established a connection to the database ***`))
  .catch((err) =>
    console.log(`??? Failed to connect to the database ???`, err)
  );
