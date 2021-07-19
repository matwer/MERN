// import mongoose from node_modules
// this is the equivalents of creating a schema in MySQL
const mongoose = require("mongoose");

// creates the schema for the database which determines how items are added to the database
const JokeSchema = new mongoose.Schema(
  {
    setup: {
      type: String,
      required: [true, "setup is required"],
      minLength: [3, "setup must contain at least 3 characters"],
    },
    punchline: {
      type: String,
      required: [true, "punchline is required"],
      minLength: [3, "punchline must contain at least 3 characters"],
    },
  },
  {
    // optional: that tells Mongoose to automatically manage
    // createdAt and updatedAt properties for your documents
    timestamps: true,
  }
);

// creates the MongoDB collection using the schema defined above
// this is teh equivalent of creating a table in MySQL
const Joke = mongoose.model("Joke", JokeSchema);

// export the model so it can be referenced for CRUD operations
// we're just exporting the User
module.exports = Joke;
