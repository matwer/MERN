// import the model
const Product = require(`../models/Products.model`);

// create & export the CRUD operations as an object
module.exports = {
  // create
  create: (req, res) => {
    const { productName, productPrice, productDescription } = req.body;
    Product.create({
      productName,
      productPrice,
      productDescription,
    }) // runValidators runs automatically
      .then((newProduct) => {
        console.log(newProduct);
        res.json(newProduct);
      })
      .catch((err) => res.status(400).json(err));
  },

  // findAll
  findAll: (req, res) => {
    Product.find()
      .then((allProducts) => {
        console.log(allProducts);
        res.json(allProducts);
      })
      .catch((err) => res.status(400).json(err));
  },

  // find One
  findOne: (req, res) => {
    Product.findOne({ _id: req.params.id })
      .then((oneProduct) => {
        console.log(oneProduct);
        res.json(oneProduct);
      })
      .catch((err) =>
        res.json({
          message: `Something went wrong with find`,
          error: err,
        })
      );
  },

  // update
  findOneAndUpdate: (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updatedProduct) => {
        console.log(updatedProduct);
        res.json(updatedProduct);
      })
      .catch((err) => res.status(400).json(err));
  },

  // delete
  deleteOne: (req, res) => {
    Product.deleteOne({ _id: req.params.id })
      .then((result) => {
        console.log(result);
        res.json(result);
      })
      .catch((err) => res.status(400).json(err));
  },
};
