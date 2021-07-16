import './App.css';
import { Router } from '@reach/router';

import Search from './components/Search';
import Display from './components/Display';
import Failure from './components/Failure';

function App() {
  return (
    <div className="App">
      <h2>APIwalker</h2>
      {/* <h1>Hello! Coming to you Live (ish) from App.js!</h1> */}
      <Search />
      {/* anything inside Router needs a path */}
      <Router>
        {/* this will only show when you go to this route */}
        <Display path="/:type/:id/" />
        <Failure path="/404"/>
      </Router>
    </div>
  );
}

export default App;
