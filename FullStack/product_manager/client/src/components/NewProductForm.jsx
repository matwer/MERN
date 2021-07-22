// make it look pretty(ish)
import "./productsCSS.css";

// import useState (for storing local variables) and axios (for routing) and axios
import React, { useState } from "react";
import axios from "axios";

// set up an anonymous function to display the form
export default () => {
  // set uyp local variables to store the fields in the database model
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");

  // set up a local variable for errors
  const [errors, setErrors] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/products/new", {
        productName,
        productPrice,
        productDescription,
      })
      .then((res) => {
        setProductName(""); // works with value={} in the form to reset on success
        setProductPrice(""); // works with value={} in the form to reset on success
        setProductDescription(""); // works with value={} in the form to reset on success
        console.log(res);
      })
      .catch((err) => {
        // get the errors from err.response.data
        const errorResponse = err.response.data.errors;
        // define an error array to push the messages in
        const errorArr = [];
        // Loop through the error to get teh message
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message);
        }
        // set the errors
        setErrors(errorArr);
      });
  };

  // display the form
  return (
    <>
      {/* <h4>Hello from ProductForm.jsx!</h4> */}
      <div className="main">
        <h3>New Product</h3>
        <form onSubmit={submitHandler}>
          {errors.map((err, index) => (
            <p className="errorMsg" key={index}>
              *** {err} ***
            </p>
          ))}
          <p className="myPTags">
            <label htmlFor="productName">Product: </label>
            <input
              type="text"
              name="productName"
              value={productName} //dbl binding
              placeholder="Enter product name (min 3 characters)"
              onChange={(e) => setProductName(e.target.value)}
            />
          </p>
          <p className="myPTags">
            <label htmlFor="productPrice">Price: $ </label>
            <input
              type="text"
              name="productPrice"
              value={productPrice} //dbl binding
              placeholder="Enter product price (min $.01)"
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </p>
          <p className="myPTags">
            <label htmlFor="productDescription">Description: </label>
            <input
              type="text"
              name="productDescription"
              value={productDescription} //dbl binding
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
