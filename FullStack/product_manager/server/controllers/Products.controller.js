// import the model
const Product = require(`../models/Products.model`);

// create & export the CRUD operations as an object
module.exports = {
  // create
  createNewProduct: (req, res) => {
    Product.create(req.body)
      .then((newProduct) => {
        console.log(newProduct);
        res.json(newProduct);
      })
      .catch((err) =>
        res.json({
          message: `Something went wrong when creating a Product`,
          error: err,
        })
      );
  },

  // findAll
  findAllProducts: (req, res) => {
    Product.find()
      .then((allProducts) => {
        console.log(allProducts);
        res.json(allProducts);
      })
      .catch((err) =>
        res.json({
          message: `Something went wrong finding all products`,
          error: err,
        })
      );
  },

  // find One
  findOneProduct: (req, res) => {
    Product.findOne({ _id: req.params.id })
      .then((oneProduct) => {
        console.log(oneProduct);
        res.json(oneProduct);
      })
      .catch((err) =>
        res.json({
          message: `Something went wrong finding the product`,
          error: err,
        })
      );
  },

  // udpate
  updateProduct: (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then((updatedProduct) => {
        console.log(updatedProduct);
        res.json(updatedProduct);
      })
      .catch((err) =>
        res.json({
          message: `Something went wrong updating the product`,
          error: err,
        })
      );
  },

  // delete
  deleteProduct: (req, res) => {
    Product.deleteOne({ _id: req.params.id })
      .then((result) => {
        console.log(result);
        res.json(result);
      })
      .catch((err) =>
        res.json({
          message: `Something went wrong deleting the product`,
          error: err,
        })
      );
  },
};
