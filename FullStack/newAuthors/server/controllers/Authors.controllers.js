// import the model
const Author = require(`../models/Authors.model`);

// create & export the CRUD operations as an object
module.exports = {
  // create
  create: (req, res) => {
    const { authorsName } = req.body;
    Author.create({
      authorsName,
    }) // runValidators runs automatically
      .then((newAuthor) => {
        console.log(newAuthor);
        res.json(newAuthor);
      })
      .catch((err) => res.status(400).json(err));
  },

  // findAll
  findAll: (req, res) => {
    Author.find()
      .then((allAuthors) => {
        console.log(allAuthors);
        res.json(allAuthors);
      })
      .catch((err) => res.status(400).json(err));
  },

  // find One
  findOne: (req, res) => {
    Author.findOne({ _id: req.params.id })
      .then((oneAuthor) => {
        console.log(oneAuthor);
        res.json(oneAuthor);
      })
      .catch((err) => res.status(400).json(err));
  },

  // update
  findOneAndUpdate: (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true, // on update, run the validator
    })
      .then((updatedAuthor) => {
        console.log(updatedAuthor);
        res.json(updatedAuthor);
      })
      .catch((err) => res.status(400).json(err));
  },

  // delete
  deleteOne: (req, res) => {
    Author.deleteOne({ _id: req.params.id })
      .then((result) => {
        console.log(result);
        res.json(result);
      })
      .catch((err) => res.status(400).json(err));
  },
};
