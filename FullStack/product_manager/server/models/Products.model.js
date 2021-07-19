// import mongoose from node_modules
const mongoose = require(`mongoose`);

// create the db (like creating a schema in MySQL)
const ProductSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: [true, `Product name is required`],
      minLength: [3, `Product name must contain at least 3 characters`],
    },
    productPrice: {
      type: String,
      required: [true, `Product price is required`],
      minLength: [2, `Price must be greater than $.01`],
    },
    productDescription: {
      type: String,
      required: [true, `Product description is required`],
      minLength: [3, `Product description must contain at least 3 characters`],
    },
  },
  {
    // optional: tells Mongoose to track createdAt/updatedAt
    timestamps: true,
  }
);

// create the mongoDB collection (like creating a table in MySQL)
const Product = mongoose.model(`Product`, ProductSchema);

// export the model so it can be referenced for CRUD operations in the controller
module.exports = Product;
