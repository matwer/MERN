// import useState (for storing local variables) and axios (for routing)
import React, { useState } from "react";

// import axios to post the data from the form to the server route
import axios from "axios";

// make it look pretty(ish)
import "./productsCSS.css";

// set up an anonymous function to display the form
export default () => {
  // set uyp local variables to store the fields in the database model
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/products/new", {
        productName,
        productPrice,
        productDescription,
      })
      .then((res) => {
        window.location.reload(true); // what are the supported options
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  // display the form
  return (
    <>
      {/* <h4>Hello from ProductForm.jsx!</h4> */}
      <div className="main">
        <h3>New Product</h3>
        <form onSubmit={submitHandler}>
          <p>
            <label htmlFor="productName">Product: </label>
            <input
              type="text"
              name="productName"
              placeholder="Enter product name (min 3 characters)"
              onChange={(e) => setProductName(e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="productPrice">Price: $ </label>
            <input
              type="text"
              name="productPrice"
              placeholder="Enter product price (min $.01)"
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="productDescription">Description: </label>
            <input
              type="text"
              name="productDescription"
              placeholder="Enter product description (min 3 characters)"
              onChange={(e) => setProductDescription(e.target.value)}
            />
          </p>
          <input type="submit" value="Create" />
        </form>
      </div>
    </>
  );
};
