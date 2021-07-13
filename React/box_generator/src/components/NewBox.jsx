import React, {useState} from 'react';

import inputcss from './NewBoxCSS.module.css';

// pass in the createBox fuction from App.js
const NewBox = ({createBox}) => {
	
	// set up a local variable for anything that will be changing in the form
	const [myColor, setMyColor] = useState("");
	const [mySize, setMySize] = useState("");
	
	// create a fucntion to handle the for submission
	const submitHandler = (e) => {
        e.preventDefault();
		// console.log(myColor);
		createBox({color: myColor, size: mySize + "px"})
		setMyColor("");
	}

	return (
		<div className = { inputcss.wrapper }>
			<fieldset>
				<legend>Create a new box</legend>
				{/* onSubmit, pass the color to the Display component (value should be set to whatever is in state) */}
				<form onSubmit = { submitHandler }>
					<p>
						<label htmlFor="color">Color</label>
						<input type="text" name="color" 
							onChange = { (e) => setMyColor(e.target.value) }
							value={ myColor } />
						<label htmlFor="size">Size</label>
						<input type="text" name="size" 
							onChange = { (e) => setMySize(e.target.value) }
							value={ mySize } />
						<button>Add</button>
					</p>
					{/* <p>
						<button>Add</button>
					</p> */}
				</form>
			</fieldset>
		</div>
	);
};

export default NewBox;