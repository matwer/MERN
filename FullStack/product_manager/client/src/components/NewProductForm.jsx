// make it look pretty(ish)
import "./productsCSS.css";

// import useState (for storing local variables) and axios (for routing) and axios
import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

// set up an anonymous function to display the form
const NewProductForm = () => {
  // set uyp local variables to store the fields in the database model
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");

  // set up variables for frontend and backend errors
  const [productNameError, setProductNameError] = useState("");
  const [productPriceError, setProductPriceError] = useState("");
  const [productDescriptionError, setProductDescriptionError] = useState("");
  const [dbErrors, setDBErrors] = useState([]);

  // set up frontend validations
  const handleProductName = (e) => {
    setProductName(e.target.value);

    if (e.target.value.length < 3) {
      setProductNameError("Product name must be at least 3 characters");
    } else {
      setProductNameError("");
    }
  };

  // set up frontend validations
  const handleProductPrice = (e) => {
    setProductPrice(e.target.value);

    if (e.target.value.length < ".01") {
      setProductPriceError("Product price must be at least .01");
    } else {
      setProductPriceError("");
    }
  };

  // set up frontend validations
  const handleProductDescription = (e) => {
    setProductDescription(e.target.value);

    if (e.target.value.length < 3) {
      setProductDescriptionError(
        "Product description must be at least 3 characters"
      );
    } else {
      setProductDescriptionError("");
    }
  };

  const addProduct = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/products", {
        productName,
        productPrice,
        productDescription,
      })
      .then((res) => {
        console.log(res);
        navigate("/products");
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
        setDBErrors(errorArr);
      });
  };

  // display the form
  return (
    <>
      {/* <h4>Hello from ProductForm.jsx!</h4> */}
      <div className="main">
        <h3>New Product</h3>
        {/* show frontend validation errors here */}
        {productNameError ? (
          <p style={{ color: "red" }}>{productNameError}</p>
        ) : (
          <p></p>
        )}
        {productPriceError ? (
          <p style={{ color: "red" }}>{productPriceError}</p>
        ) : (
          <p></p>
        )}
        {productDescriptionError ? (
          <p style={{ color: "red" }}>{productDescriptionError}</p>
        ) : (
          <p></p>
        )}

        {/* show backend validation errors here */}
        {dbErrors.map((err, index) => (
          <p className="errorMsg" key={index}>
            *** {err} ***
          </p>
        ))}

        <form onSubmit={addProduct}>
          <p className="myPTags">
            <label htmlFor="productName">Product: </label>
            <input
              type="text"
              name="productName"
              value={productName} //dbl binding
              placeholder="Enter product name (min 3 characters)"
              onChange={handleProductName}
            />
          </p>
          <p className="myPTags">
            <label htmlFor="productPrice">Price:</label>${" "}
            <input
              type="text"
              name="productPrice"
              value={productPrice} //dbl binding
              placeholder="Enter product price (min $.01)"
              onChange={handleProductPrice}
            />
          </p>
          <p className="myPTags">
            <label htmlFor="productDescription">Description: </label>
            <input
              type="text"
              name="productDescription"
              value={productDescription} //dbl binding
              placeholder="Enter product description (min 3 characters)"
              onChange={handleProductDescription}
            />
          </p>
          <input type="submit" value="Create" />
        </form>
      </div>
    </>
  );
};

export default NewProductForm;
