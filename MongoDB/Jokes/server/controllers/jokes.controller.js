// import the model from server/models/jokes.model
const Joke = require("../models/jokes.model");

module.exports = {
	
	// find All
	findAllJokes: (req, res) => {
		Joke.find()
			.then(allJokes => {
				console.log(allJokes);
				res.json(allJokes);
			})
			.catch(err => res.json({ message: "Something went wrong when trying to find all the jokes", error: err }));
	},
	
	// find One
	findOneJoke: (req, res) => {
		console.log('find joke (id) ->', req.params.id);
		Joke.findOne({ _id: req.params.id })
			.then(oneJoke => {
				console.log(oneJoke);
				res.json(oneJoke);
			})
			.catch(err => res.json({ message: "Something went wrong trying to find one joke", error: err }));
	},
		
	// create
	createNewJoke: (req, res) => {
		console.log('create joke (req.body) ->', req.body);
		Joke.create(req.body)
			.then(newJoke => {
				console.log(newJoke);
				res.json(newJoke);
			})
			.catch(err => res.json({ message: "Something went wrong when adding a new joke", error: err }));
	},
		
	// udpate
	updateJoke: (req, res) => {
		console.log('update joke (id) ->', req.params.id);
		console.log('update joke (req.body) ->', req.body);
		Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
			.then(updatedJoke => {
				console.log(updatedJoke);
				res.json(updatedJoke);
			})
			.catch(err => res.json({ message: "Something went wrong when updating the joke", error: err }));
	},
		
	// delete
	deleteJoke: (req, res) => {
		console.log('delete joke (id) ->', req.params.id);
		Joke.deleteOne({ _id: req.params.id })
			.then(result => {
				console.log(result);
				res.json(result);
			})
			.catch(err => res.json({ message: "Something went wrong when deleting the joke", error: err }));
	}

}
