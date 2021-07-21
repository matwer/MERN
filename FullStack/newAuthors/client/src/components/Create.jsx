// import React, axios, Link & myCSS
import React, { useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import "./myCSS.css";

const Create = (props) => {
  // declare local variables to store the DB entries and the errors
  const [authorsName, setAuthorsName] = useState("");
  const [dbErrors, setDBErrors] = useState([]);

  // on submit, do the things
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/authors/new", {
        authorsName,
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        // get the errors from err.response.data & store them in an array
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        // Loop through the error to get teh message
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message);
        }
        // set the errors
        setDBErrors(errorArr);
      });
  };

  return (
    <div className="main">
      {/* <h5>Hello World! from NewAuthor.jsx!</h5> */}
      <h3>Add an author</h3>
      {/* post any errors here */}
      {dbErrors.map((err, i) => (
        <p className="errorMsg" key={i}>
          *** {err} ***
        </p>
      ))}
      <form onSubmit={submitHandler}>
        <p>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="authorsName"
            id="authorsName"
            placeholder="Authors name (at least 3 characters)"
            onChange={(e) => setAuthorsName(e.target.value)}
          />
        </p>
        <input type="submit" value="Submit" />
        <button>
          <Link to={"/"}>Cancel</Link>
        </button>
      </form>
    </div>
  );
};

export default Create;
