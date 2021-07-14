import './App.css';

import { useState, useEffect } from 'react';
import { Router, Link, navigate } from '@reach/router';
import LoginComponent from './components/LoginComponent';
import DashboardComponent from './components/DasboardComponent';


function App() {
  return (
    <div className="App">

      {/* create a navbar */}
      <div className="navbar">
        <Router>
          <LoginComponent path="/login"/>
          <DashboardComponent path="/dashboard"/>
        </Router>
        <input type="text" placeholder="Search" />
      </div>
      
      {/* main content */}
      <div className="main">
        <fieldset>
          <div className='row'>

            {/* left column */}
            <div className='column'>
              <div className='left-column'>
                <p>Left column</p>
              </div>
            </div>

            {/* right column */}
            <div className='column'>
              <div className='right-column'>
                <p>Right column</p>
              </div>
            </div>
          </div>
        </fieldset>
      </div>

    </div>
  );
}

export default App;
