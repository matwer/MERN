// import the CSS
import "./App.css";

// import React
import React from "react";
import { Router } from "@reach/router";

// import your components
import Main from "./views/Main";
import ShowOneProduct from "./views/ShowOneProduct";
import UpdateProduct from "./views/UpdateProduct";

function App() {
  return (
    <div className="App">
      {/* load the Main component */}
      <Router>
        <UpdateProduct path="/products/:id/edit" />
        <ShowOneProduct path="/products/:id" />
        <Main path="/products" />
      </Router>
    </div>
  );
}

export default App;
