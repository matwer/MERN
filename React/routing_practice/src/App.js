import "./App.css";

import React from "react";
import { Link, Router, Redirect } from "@reach/router";

import Home from "./components/Home";
import Words from "./components/Words";
import Colors from "./components/Colors";

function App() {
  return (
    <div className="App">
      <button>
        <Link Link to="/home">
          Home
        </Link>
      </button>
      <button>
        <Link Link to="/words/:input">
          Words
        </Link>
      </button>
      <Router>
        <Home path="/home" />
        <Redirect from="/" to="/home" noThrow="true" />
        <Words path="words/:input" />
        <Colors path="home/:word/:color1/:color2" />
      </Router>
    </div>
  );
}

export default App;
