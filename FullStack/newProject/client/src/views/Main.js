// import useEffect & useState from the React library
import React, { useEffect, useState } from "react";

// import axios (controls routing on the client side)
import axios from "axios";
import PersonForm from "../components/PersonForm";

// set up the default route on the client side
export default () => {
  // we'll be modifying the message so we need to store it in state
  const [message, setMessage] = useState("Loading...");

  // when the page loads, go t0 localhost:8000/api
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api`)
      .then((res) => setMessage(res.data.message));
  }, []); // the [] tells the system to only load the useEffect once

  return (
    <div>
      {/* <p> Message from the backend: {message} </p> */}
      <h2>Registration</h2>
      <div>
        <PersonForm />
      </div>
    </div>
  );
};
