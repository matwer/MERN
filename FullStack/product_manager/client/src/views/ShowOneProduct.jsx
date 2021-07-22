import "./showOneCSS.css";

import React, { useEffect, useState } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";

export default (props) => {
  // set up a local variable to store the product
  const [product, setProduct] = useState({});

  // when the page loads, load the product from the id sent in from props
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products/" + props.id)
      .then((res) => setProduct(res.data));
  }, []);

  const deleteProduct = (productId) => {
    axios
      .delete("http://localhost:8000/api/products/" + props.id)
      .then((res) => {
        navigate("/products");
      });
  };

  return (
    <div className="main">
      <h3>{product.productName}</h3>
      <p>Price: $ {product.productPrice}</p>
      <p>Description: {product.productDescription}</p>
      <button>
        <Link to={"/products/" + product._id + "/edit"}>Edit</Link>
      </button>
      |
      <button
        onClick={(e) => {
          deleteProduct(product._id);
        }}
      >
        Delete
      </button>
      |
      <button>
        <Link to={"/products"} className="btn">
          Cancel
        </Link>
      </button>
    </div>
  );
};
