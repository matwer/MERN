import React, {useState} from 'react';

import './taskCSS.css';

// destructure the data & function(s) coming from App.js
const Tasks = ({task, idx, updateTask, deleteTask}) => {

	// verify what we're getting from App.js
	console.log(task);

	return (
		<div style= {{
			backgroundColor: 'lightgrey',
			height: '10%',
			width: '40%',
			margin: '10px 10px 10px 30%',
			padding: '5px',
			borderRadius: '10px',
			textDecoration: task.status ? 'line-through' : ''}}>
				{task.name}
			<input type="checkbox" 
				checked={task.status} 
				onChange={ (e) => updateTask(idx)}/>
			<button onClick={ (e) => deleteTask(idx)}>Delete</button>
		</div>
	)
}

export default Tasks;