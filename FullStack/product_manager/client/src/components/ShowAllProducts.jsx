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
      .delete("http://localhost:8000/api/products/" + productId)
      .then((res) => {
        removeFromDom(productId);
      });
  };

  return (
    <>
      <div className="main">
        <h3>Products</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => {
              return (
                <tr>
                  <>
                    <td className="left">{product.productName}</td>
                    <td>{product.productPrice}</td>
                    <td>
                      <p key={i}>
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
                    </td>
                  </>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
