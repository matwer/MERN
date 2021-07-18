// import the model from server/models/user.model
const User = require("../models/user.model");

// // findAll
// module.exports.findAllUsers = (req, res) => {
//   User.find()
//     .then(allDaUsers => res.json({ users: allDaUsers }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// // find One
// module.exports.findOneSingleUser = (req, res) => {
// 	User.findOne({ _id: req.params.id })
// 		.then(oneSingleUser => res.json({ user: oneSingleUser }))
// 		.catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// // create
// module.exports.createNewUser = (req, res) => {
//   User.create(req.body)
//     .then(newlyCreatedUser => res.json({ user: newlyCreatedUser }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// // udpate
// module.exports.updateExistingUser = (req, res) => {
//   User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
//     .then(updatedUser => res.json({ user: updatedUser }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// // delete
// module.exports.deleteAnExistingUser = (req, res) => {
//   User.deleteOne({ _id: req.params.id })
//     .then(result => res.json({ result: result }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// another option
// wrap the CRUD operrations on an object with the fcn names as keys
module.exports = {

  // findAll
  findAllUsers: (req, res) => {
    User.find()
      .then(allUsers => {
        console.log(allUsers);
        res.json(allUsers);
      })
      .catch(err => res.json({ message: "Something went wrong in findAllUsers", error: err }));
  },

  // find One
  findOneUser: (req, res) => {
    User.findOne({ _id: req.params.id })
      .then(oneUser => {
        console.log(oneUser);
        res.json(oneUser);
      })
      .catch(err => res.json({ message: "Something went wrong in findOneUser", error: err }));
  },
    
  // create
  createNewUser: (req, res) => {
    User.create(req.body)
      .then(newUser => {
        console.log(newUser);
        res.json(newUser);
      })
      .catch(err => res.json({ message: "Something went wrong in createNewUser", error: err }));
  },
    
  // udpate
  updateUser: (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(updatedUser => {
        console.log(updatedUser);
        res.json(updatedUser);
      })
      .catch(err => res.json({ message: "Something went wrong in updateUser", error: err }));
  },
    
  // delete
  deleteUser: (req, res) => {
    User.deleteOne({ _id: req.params.id })
      .then(result => {
        console.log(result);
        res.json(result);
      })
      .catch(err => res.json({ message: "Something went wrong in deleteUser", error: err }));
  }

}




