// import mongoose from node_modules
const mongoose = require(`mongoose`);

// create the db (like creating a schema in MySQL)
const AuthorSchema = new mongoose.Schema(
  {
    authorsName: {
      type: String,
      required: [true, `Authors name is required`],
      minLength: [3, `Authors name must contain at least 3 characters`],
      // validate: {
      //   validator: function (v, callback) {
      //     Author.find({ author: v }, function (err, docs) {
      //       callback(docs.length == 0);
      //     });
      //   },
      //   message: "Author already exists!",
      // },
    },
  },
  { timestamps: true } // tracks createdAt, updatedAt
);

// create the mongoDB collection (like creating a table in MySQL)
const Author = mongoose.model(`Author`, AuthorSchema);

// export the model so it can be referenced for CRUD operations in the controller
module.exports = Author;
