// import mongoose from node_modules
// this is the equivalents of creating a schema in MySQL
const mongoose = require("mongoose");

// creates the schema for the database which determines how items are added to the database
const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      minLength: [3, "First name must contain at least 3 characters"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      minLength: [3, "Last name must contain at least 3 characters"],
    },
    // age: {
    // 	type: Number,
    // 	min: [1, "You must be at least 1 year old to register"],
    // 	max: [150, "Your age cannot exceed 149 yeras"]
    // },
    email: {
      type: String,
      required: [true, "A valid email address is required to register"],
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
const User = mongoose.model("User", UserSchema);

// export the model so it can be referenced for CRUD operations
// we're just exporting the User
module.exports = User;
