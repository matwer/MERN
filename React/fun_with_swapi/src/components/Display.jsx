import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

// deconstruct the properties coming from App.js 
const Display = ({type, id}) => {

	// verify type and id hold what you expect
	console.log("type " + type + ", id " + id);

	// the data that comes back is JSON, the state variable should start as an object {}
	const [results, setResults] = useState({});

	// useEffect triggers every time the page loads
	useEffect ( () => {
		// make the API call to the SWAPI API
		axios.get('https://swapi.dev/api/' + type + "/" + id)
			.then (res => {
				// verify there's a response and see what it holds
				// the response is dynamic so we need to use useState to store the results
				setResults(res.data);

			})
			.catch (err => {
				console.log(err);
				navigate(`/404`); 
			})
	}, [type, id]); // track the variables being passed in 

	// displ;ay the appropriate results based on the type selected 
	// (starships & vehicles share the same output and are handled by the last else)
	// look into changing this to a switch statement...
	if (type === "people") {
		return (
			<div>
				<h3>{results.name}</h3>
				<p>Hair color: {results.hair_color}</p>
				<p>Skin color: {results.skin_color}</p>
				<p>Eye color: {results.eye_color}</p>
				<p>Birth year: {results.birth_year}</p>
			</div>
		)
	} else if (type === "films") {
		return (
			<div>
				<h3>{results.title}</h3>
				<p>Producer: {results.producer}</p>
				<p>Director: {results.director}</p>
				<p>Release date: {results.release_date}</p>
				<p>Epsiode: {results.episode_id}</p>
			</div>
		)
	} else if (type === "species") {
		return (
			<div>
				<h3>{results.name}</h3>
				<p>Classification: {results.classification}</p>
				<p>Designation: {results.designation}</p>
				<p>Skin colors: {results.skin_colors}</p>
				<p>Hair colors: {results.hair_colors}</p>
				<p>Eye colors: {results.eye_colors}</p>
			</div>
		)
	} else if (type === "planets") {
		return (
			<div>
				<h3>{results.name}</h3>
				<p>Diameter: {results.diameter}</p>
				<p>Climate: {results.climate}</p>
				<p>Terrain: {results.terrain}</p>
				<p>Population: {results.population}</p>
			</div>
		)
	} else {
		return (
			<div>
				<h3>{results.name}</h3>
				<p>Model: {results.model}</p>
				<p>Manufacturer: {results.manufacturer}</p>
				<p>Crew: {results.crew}</p>
				<p>Passengers: {results.passengers}</p>
			</div>
		)
	}
}

export default Display;