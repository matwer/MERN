// make it look pretty(ish)
import "./productsCSS.css";

// import React, Link and axios
import React from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";

const ShowAllProducts = ({ products }) => {
  // const { removeFromDom } = props;

  const deleteProduct = (productId) => {
    axios
      .delete("http://localhost:8000/api/products/" + productId)
      .then((res) => {
        navigate("/products");
      });
  };

  return (
    <>
      <div className="main">
        <h3>All Products</h3>
        <table id="products">
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
                          <Link to={"/products/" + product._id} className="btn">
                            View
                          </Link>
                        </button>
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

export default ShowAllProducts;
