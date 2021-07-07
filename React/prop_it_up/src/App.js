import './App.css';

import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <div class="card">
        <h2><Card lastName={"Doe" } />, <Card firstName={"Jane" } /></h2>
        <p>Age: <Card age={ "45" } /></p>
        <p>Hair color: <Card hairColor={ "Blonde" } /></p>
      </div>
      <div class="card">
        <h2><Card lastName={"Smith" } />, <Card firstName={"John" } /></h2>
        <p>Age: <Card age={ "88" } /></p>
        <p>Hair color: <Card hairColor={ "White" } /></p>
      </div>
      <div class="card">
        <h2><Card lastName={"Fillmore" } />,<Card firstName={"Millard" } /></h2>
        <p>Age: <Card age={ "50" } /></p>
        <p>Hair Color: <Card hairColor={ "Brown" } /></p>
      </div>
      <div class="card">
        <h2><Card lastName={"Smith" } />,<Card firstName={"Maria" } /></h2>
        <p>Age: <Card age={ "62" } /></p>
        <p>Hair color: <Card hairColor={ "Silver" } /></p>
      </div>
    </div>
  );
}

export default App;
