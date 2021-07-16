import './searchcss.css';

import React from 'react';
// you need this for the submitHandler to work
import {navigate} from'@reach/router';

import {useState} from 'react';

const Search = (props) => {

	// set up an array will all available types (removed vehicles becuase it isn't working - even on SWAPI)
	const availTypes = ["people", "films", "starships", "species", "planets"];

	// create a local instance of the variables that we need to keep track of (type & id)
	const [selectedType, setSelectedType] = useState(availTypes[0]);
	const [selectedID, setSelectedID] = useState(1);

	// create a function to redirect users to the appropriate path
	const submitHandler = (e) => {
		// stop the page from refreshing
		e.preventDefault();
		//verify you're getting the expected values
		// console.log(selectedType, selectedID);
		//this path needs to be defined (it's in App.js as part of the Display component)
		navigate(`/${selectedType}/${selectedID}`);
	}

	// display the search form with dropdowns for the types and ID's
	return (	
		<div className="wrapper">
			<form onSubmit={submitHandler}>
				Search for: 
				<select 
					value={selectedType} 
					onChange={
						(e) => setSelectedType(e.target.value)}>
        				{availTypes.map((availType, index) => 
						(<option key={index} value={availType}>{availType}</option>)
					)}
            	</select>
				ID: <input value={selectedID} type="number" min="1" max="100"
					onChange={(e) => setSelectedID(e.target.value)} />
				<input type="submit" value="Search" />
			</form>
			<hr/>
		</div>
	)
}

export default Search;



