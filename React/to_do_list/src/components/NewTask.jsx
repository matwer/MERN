import React, {useState} from 'react';

// deconstruct addTask so you can use it in the submitTask fcn
// (which is a pointer to the fcn in App.js)
const NewTask = ({addTask}) => {

	// we'll be adding a new task so we need to set up a variable to store it
	const [newTask, setNewTask] = useState("");

	const submitTask = (e) => {
		// verify the function is getting called on submit
		// console.log("Submitted");
		e.preventDefault();
		
		// we're 'lifting state' becuase we're calling a fcn from the parent
		addTask({name: newTask, status: false});
	}

	return (
		<div>
			{/* check the input to make sure you're getting what you think you're getting
			{JSON.stringify(newTask)} <br/> */}
			<form onSubmit={submitTask}>
				<p>
					<label htmlFor="task">Add a task:</label>
					<input name="task" type="text" 
						onChange = { (e) => setNewTask (e.target.value) }
						value={newTask} />
					<input type="submit" value="Add"/>
				</p>
				<br/>
			</form>
		</div>
	)
}

export default NewTask;