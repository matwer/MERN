import './App.css';

import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h2 className="card"><Card lastName={"Doe" } />, <Card firstName={"Jane" } /></h2>
      <h3><Card age={ "45" } /></h3>
      <h3><Card age={ "Blonde" } /></h3>
      <h2 className="card"><Card lastName={"Smith" } />, <Card firstName={"John" } /></h2>
      <h3><Card age={ "88" } /></h3>
      <h3><Card age={ "White" } /></h3>
      <h2 className="card"><Card lastName={"Fillmore" } />,<Card firstName={"Millard" } /></h2>
      <h3><Card age={ "50" } /></h3>
      <h3><Card age={ "Brown" } /></h3>
      <h2 className="card"><Card lastName={"Smith" } />,<Card firstName={"Maria" } /></h2>
      <h3><Card age={ "62" } /></h3>
      <h3><Card age={ "Silver" } /></h3>
    </div>
  );
}

export default App;
