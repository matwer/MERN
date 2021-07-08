import React from 'react';
import './App.css';
import MyNewComponent from './components/MyNewComponent';
import LightSwitch from './components/LightSwitch';
    
function App() {
  return (
    <div className="App">
        <MyNewComponent header={ "Header Prop" }>
            <p>This is a child</p>
            <p>This is another child</p>
            <p>This is even another child</p>
        </MyNewComponent>
        <button onClick={ ()=> alert("This button has been clicked!") }>Click Me</button> 
        <LightSwitch />
    </div>
  );
}
    
export default App;


