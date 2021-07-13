import './App.css';
import React, { useState } from 'react';

import NewBox from './components/NewBox';
import ShowBoxes from './components/ShowBoxes';

function App() {
  
  // create a set of default boxes
  const [boxes, setBoxes] = useState ([
    {color: "red", size: "50px"},
    {color: "blue", size: "50px"},
    {color: "purple", size: "50px"}
  ])

  // add a new box to the array
  const createBox = (newBox) => {
    // spread the current array of boxes and append the new box to the array
    setBoxes([...boxes, newBox])
  }
  
  return (

    <div className="App">
      <fieldset>
          <legend>Box Generator</legend>
          {/* add a new box */}
          <NewBox createBox={createBox}/>
          {
              // iterate through all the boxes in the array
              boxes.map((box, idx) => {
                return <ShowBoxes
                          key={idx}
                          box={box}
                          index={idx}/>
            })
          }
      </fieldset>
    </div>
  );

}

export default App;
