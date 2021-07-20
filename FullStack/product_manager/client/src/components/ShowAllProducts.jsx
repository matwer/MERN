// make it look pretty(ish)
import "./productsCSS.css";

// import React, Link and axios
import React from "react";
import { Link } from "@reach/router";
import axios from "axios";

export default ({ products, removeFromDom }) => {
  // const { removeFromDom } = props;

  const deleteProduct = (productId) => {
    axios
      .delete("http://localhost:8000/api/products/delete/" + productId)
      .then((res) => {
        removeFromDom(productId);
      });
  };

  return (
    <>
      <div className="main">
        <h3>Products</h3>
        {products.map((product, i) => {
          return (
            <p key={i}>
              {product.productName}|
              <button>
                <Link to={"/products/" + product._id}>Edit</Link>
              </button>
              |
              <button
                onClick={(e) => {
                  deleteProduct(product._id);
                }}
              >
                Delete
              </button>
            </p>
          );
        })}
      </div>
    </>
  );
};
