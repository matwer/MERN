import "./App.css";
import { Link, Router } from "@reach/router";

import Main from "./components/Main";
import Create from "./components/Create";
import Update from "./components/Update";

function App() {
  return (
    <div className="App">
      {/* <h1>Hello World! from App.js</h1> */}
      <h3>Favorite authors</h3>
      <Link to="/">Home</Link> | <Link to="/authors">Add an author</Link>
      <Router>
        <Update path="/authors/:id" />
        <Create path="/authors" />
        <Main path="/" />
      </Router>
    </div>
  );
}

export default App;
