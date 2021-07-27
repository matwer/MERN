// import the CSS
import "./App.css";

// import React
import React from "react";
import { Link, Router, Redirect } from "@reach/router";

// import your components
import Main from "./views/Main";
import NewProductForm from "./components/NewProductForm";
import ShowOneProduct from "./views/ShowOneProduct";
import UpdateProduct from "./views/UpdateProduct";

function App() {
  return (
    <div className="App">
      {/* load the Main component */}
      <h2>Product Manager</h2>
      <Link to="/products">Home</Link> |{" "}
      <Link to="/products/new">Add a product</Link>
      <Router>
        <Redirect from="/" to="/products" noThrow="true" />
        <UpdateProduct path="/products/:id/edit" />
        <ShowOneProduct path="/products/:id" />
        <NewProductForm path="/products/new" />
        <Main path="/products" />
      </Router>
    </div>
  );
}

export default App;
