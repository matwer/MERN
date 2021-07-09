import React, { useState } from  'react';

import './App.css';

import UserForm from './components/UserForm';
import ShowResults from './components/ShowResults';

function App() {
  // by setting this at the App level, the data can be used in both forms (like a global variable)
  const [state, setState] = useState ({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  // display the input form and the Results page
  return (    
    <div>
      <UserForm inputs = {state} setInputs = {setState}/>
      <ShowResults liveStream = {state} />
    </div>
  );
}

export default App;
