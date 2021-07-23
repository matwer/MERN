// import React, axios, Link & myCSS
import React, { useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import "./myCSS.css";

const Create = (props) => {
  // declare local variables to store the DB entries and the errors
  const [authorsName, setAuthorsName] = useState("");

  // set up variables for front end and backend validations
  const [authorsNameError, setAuthorsNameError] = useState("");
  const [dbErrors, setDBErrors] = useState([]);

  // frontend validation for the authors name
  const handleAuthorsName = (e) => {
    // console.log(e.target.value);
    setAuthorsName(e.target.value);

    if (e.target.value.length < 3) {
      setAuthorsNameError("Authors name must be at least 3 characters");
    } else {
      setAuthorsNameError("");
    }
  };

  // on submit, do the things
  const addAuthor = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/authors/new", {
        authorsName,
      })
      .then((res) => {
        console.log(res);
        setAuthorsName(""); // works with value={} in form to reset on success
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
      {/* show frontend validation errors here */}
      {authorsNameError ? (
        <p style={{ color: "red" }}>{authorsNameError}</p>
      ) : (
        <p></p>
      )}

      {/* show backend validation errors here */}
      {dbErrors.map((err, i) => (
        <p className="errorMsg" key={i}>
          *** {err} ***
        </p>
      ))}
      <form onSubmit={addAuthor}>
        <p>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="authorsName"
            id="authorsName"
            value={authorsName} // needed for dbl binding
            placeholder="Authors name (at least 3 characters)"
            onChange={handleAuthorsName} // calls the fcn for frontend validations
          />
        </p>
        <input type="submit" value="Submit" />
        <button>
          <Link to={"/"} className="btn">
            Cancel
          </Link>
        </button>
      </form>
    </div>
  );
};

export default Create;
