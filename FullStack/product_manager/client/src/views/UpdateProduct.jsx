// import CSS
import "./showOneCSS.css";

// import React and axios
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

const UpdateProduct = (props) => {
  console.log("props in update " + props);
  const { id } = props;
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");

  // set up variables for frontend and backend errors
  const [productNameError, setProductNameError] = useState("");
  const [productPriceError, setProductPriceError] = useState("");
  const [productDescriptionError, setProductDescriptionError] = useState("");
  const [errors, setErrors] = useState([]);

  // pre-populate the form with the existing product data
  useEffect(() => {
    axios.get("http://localhost:8000/api/products/" + id).then((res) => {
      setProductName(res.data.productName);
      setProductPrice(res.data.productPrice);
      setProductDescription(res.data.productDescription);
    });
  }, [id]);

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

  // on submit, update the entry in the database
  const updateProduct = (e) => {
    // stop the default behavior
    e.preventDefault();
    axios
      .put("http://localhost:8000/api/products/" + id, {
        productName,
        productPrice,
        productDescription,
      })
      .then((res) => {
        setProductName(""); // works with value={xxx} in the form to reset on success
        setProductPrice(""); // works with value={xxx} in the form to reset on success
        setProductDescription(""); // works with value={xxx} in the form to reset on success
        navigate("/products");
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

  return (
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

      {/* show backend validation errors */}
      {errors.map((err, index) => (
        <p className="errorMsg" key={index}>
          *** {err} ***
        </p>
      ))}

      <h3>Edit product</h3>
      <form onSubmit={updateProduct}>
        <p>
          <label htmlFor="productName">Product: </label>
          <input
            type="text"
            name="productName"
            value={productName} //dbl binding
            onChange={handleProductName}
          />
        </p>
        <p>
          <label htmlFor="productPrice">Price: $ </label>
          <input
            type="text"
            name="productPrice"
            value={productPrice} //dbl binding
            onChange={handleProductPrice}
          />
        </p>
        <p>
          <label htmlFor="productDescription">Description: </label>
          <input
            type="text"
            name="productDescription"
            value={productDescription} //dbl binding
            onChange={handleProductDescription}
          />
        </p>
        <p>
          <input type="submit" value="Update" /> |
          <button>
            <Link to={"/products"} className="btn">
              Cancel
            </Link>
          </button>
        </p>
      </form>
    </div>
  );
};

export default UpdateProduct;
