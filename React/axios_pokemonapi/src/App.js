import './App.css';

import React, {useState} from 'react';
import axios from 'axios';

function App() {

  const [pokemon, setPokemon] = useState([]);

  const onClickHandler = () => { 
    axios.get("https://pokeapi.co/api/v2/pokemon")
      .then(response => {
          // console.log(response.data.results);
          setPokemon(response.data.results);
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
