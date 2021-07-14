import React, {useState, useEffect} from 'react';

const Pokemon = (props) => {
	const [pokemon, setPokemon] = useState([]);

	useEffect( () =>{ 
		fetch("https://pokeapi.co/api/v2//pokemon", { mode: 'no-cors'})
        	.then(response => {
            	return response.json();
        	}).then(response => {
            	console.log(response.results);
            	// setPokemon(response.results)
        	}).catch(err=>{
            	console.log(err);
        	});
		}, []);
	

	return (
		<div>
			{
				pokemon.map((poke, idx) => {
					return <p key={idx}>{ poke.name }</p>
				})
			}
		</div>
	);
}

export default Pokemon;