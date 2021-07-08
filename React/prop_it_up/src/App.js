import './App.css';

import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <div className="card">
        <Card lastName={"Doe"} firstName={"Jane"} age={45} hairColor={"Blonde"} />
      </div>
      <div className="card">
        <Card lastName={"Smith"} firstName={"John"} age = {88} hairColor={"White"} />
      </div>
      <div className="card">
        <Card lastName={"Fillmore"} firstName={"Millard"} age={50} hairColor={"Brown"} />
      </div>
      <div className="card">
        <Card lastName={"Smith"} firstName={"Maria" } age={62} hairColor={"Silver"} />
      </div>
    </div>
  );
}

export default App;
