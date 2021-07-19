// import useState (to store values in state) & useEffect (to control what loads at startup)
import React, { useState, useEffect } from "react";

// import axios
import axios from "axios";

// import the form
import NewProductForm from "../components/NewProductForm";

// set up the client side route
export default () => {
  // set a default message while the page loads
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api")
      .then((res) => setMessage(res.data.message));
  }, []);

  return (
    <div>
      {/* <h3>Hello! from Main js!</h3> */}
      <NewProductForm />
    </div>
  );
};
