// import React, axios, Link & myCSS
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import "./myCSS.css";

const Update = (props) => {
  console.log("props in Update: " + props);
  const { id } = props;
  // set up variables for storing and updating the db
  const [authorsName, setAuthorsName] = useState("");
  const [dbErrors, setDBErrors] = useState([]);

  // Grab the author information when the page loads
  useEffect(() => {
    axios.get("http://localhost:8000/api/authors/" + id).then((res) => {
      console.log(res.data);
      setAuthorsName(res.data.authorsName);
    });
  }, [id]);

  // on submit, do the things
  const updateAuthor = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/api/authors/" + id, {
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
      <h3>Edit author</h3>
      {/* <h5>Hello World! from Update.jsx!</h5> */}
      <form onSubmit={updateAuthor}>
        {/* post any errors here */}
        {dbErrors.map((err, i) => (
          <p className="errorMsg" key={i}>
            *** {err} ***
          </p>
        ))}
        <p>
          <label htmlFor="authorsName">Name:</label>
          <input
            type="text"
            name="authorsName"
            id="authorsName"
            value={authorsName}
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

export default Update;
