// import useState (to store values in state) & useEffect (to control what loads at startup)
import React, { useState, useEffect } from "react";

// import axios
import axios from "axios";

// import the form
import NewProductForm from "../components/NewProductForm";
import ShowAllProducts from "../components/ShowAllProducts";

// set up the client side route
const Main = () => {
  // set up a local variable (an empty array) for products
  const [products, setProducts] = useState([]);

  // set up a local variable which indicates whether the list of products is loaded
  const [loaded, setLoaded] = useState(false);

  // grab the list of products from api/products and set loaded to true
  useEffect(() => {
    axios.get("http://localhost:8000/api/products").then((res) => {
      setProducts(res.data);
      setLoaded(true);
    });
  }, []);

  // set up a fcn to upload the DOM on delete and send the fcn to ShowAllProducts
  // const removeFromDom = (productId) => {
  //   setProducts(products.filter((product) => product._id !== productId));
  // };

  return (
    <>
      {/* <h3>Hello! from Main js!</h3> */}
      {/* pass the loaded boolean, display the ShowProducts form and pass in the array of products */}
      {loaded && <ShowAllProducts products={products} />}
    </>
  );
};

export default Main;
