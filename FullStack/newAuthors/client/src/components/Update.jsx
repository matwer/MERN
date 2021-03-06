// import React, axios, Link & myCSS
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import "./myCSS.css";

const Update = (props) => {
  // console.log("props in Update: " + props);
  // deconstruct the id from props
  const { id } = props;

  // set up variables for storing and updating the db
  const [authorsName, setAuthorsName] = useState("");

  // set up variables for front end and backend validations
  const [authorsNameError, setAuthorsNameError] = useState("");
  const [dbErrors, setDBErrors] = useState([]);

  // Grab the author information when the page loads
  useEffect(() => {
    axios.get("http://localhost:8000/api/authors/" + id).then((res) => {
      console.log(res.data);
      setAuthorsName(res.data.authorsName);
    });
  }, [id]); // tracking any changes to the id here

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
  const updateAuthor = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/api/authors/" + id, {
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
      <h3>Edit author</h3>
      {/* <h5>Hello World! from Update.jsx!</h5> */}
      <form onSubmit={updateAuthor}>
        {/* show frontend validation errors here */}
        {authorsNameError ? (
          <p style={{ color: "red" }}>{authorsNameError}</p>
        ) : (
          <p></p>
        )}

        {/* post backend validation errors here */}
        {dbErrors.map((err, i) => (
          <p className="errorMsg" key={i}>
            {err}
          </p>
        ))}
        <p>
          <label htmlFor="authorsName">Name:</label>
          <input
            type="text"
            name="authorsName"
            id="authorsName"
            value={authorsName}
            onChange={handleAuthorsName}
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

export default Update;
