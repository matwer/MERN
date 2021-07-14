import './App.css';

import React, { useState, useEffect } from 'react';
// import Pokemon from './components/Pokemon';

function App() {

  const [pokemon, setPokemon] = useState([]);

  const onClickHandler = () => { 
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(response => {
          return response.json();
      }).then(response => {
          // console.log(response.results);
          setPokemon(response.results)
      }).catch(err=>{
          console.log(err);
      });
  }


return (
  <div className="App">
      <fieldset>
        <legend>Pokemon</legend>
        <button onClick={() => onClickHandler()} >Click Me!</button>
        {
          pokemon.map((poke, idx) => {
            return <p key={idx}>{ poke.name }</p>
          })
        }
      </fieldset>
    </div>
  );
}

export default App;
