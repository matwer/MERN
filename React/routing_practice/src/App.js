import './App.css';

import React from 'react';
import {Router, Redirect} from '@reach/router';

import Home from './components/Home';
import Words from './components/Words';
import Colors from './components/Colors';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"/>
        <Redirect from="/" to="/home"  noThrow="true"/>
        <Words path="home/:input"/>
        <Colors path="home/:word/:color1/:color2"/>
      </Router>
    </div>
  );
}

export default App;
