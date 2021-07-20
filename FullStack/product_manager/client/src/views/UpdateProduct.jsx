// import CSS
import "./showOneCSS.css";

// import React and axios
import React, { useState, useEffect } from "react";
import axios from "axios";

export default (props) => {
  console.log("props in update " + props);
  const { id } = props;
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");

  // pre-populate the form with the existing product data
  useEffect(() => {
    axios.get("http://localhost:8000/api/products/" + id).then((res) => {
      setProductName(res.data.productName);
      setProductPrice(res.data.productPrice);
      setProductDescription(res.data.productDescription);
    });
  }, []);

  // on submit, update the entry in the database
  const updateProduct = (e) => {
    // stop the default behavior
    e.preventDefault();
    axios
      .put("http://localhost:8000/api/products/edit/" + id, {
        productName,
        productPrice,
        productDescription,
      })
      .then((res) => console.log(res));
  };

  return (
    <div className="main">
      <h3>Edit product</h3>
      <form onSubmit={updateProduct}>
        <p>
          <label htmlFor="productName">Product: </label>
          <input
            type="text"
            name="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="productPrice">Proce: $ </label>
          <input
            type="text"
            name="productPrice"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="productDescription">Description: </label>
          <input
            type="text"
            name="productDescription"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
        </p>
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};
