import React, { useState } from "react";
import axios from "axios";

export default () => {
  // create variables for firstName, lastName, email
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const submitHandler = (e) => {
    //make a promise for a POST request to the new Person route
    e.preventDefault();
    axios
      .post(`http://localhost:8000/api/users/new`, {
        firstName,
        lastName,
        email,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  // set up the form
  return (
    <>
      {/* <p>Hello from personForm.js!</p> */}
      <form onSubmit={submitHandler}>
        <p>
          <label htmlFor="firstName">First name:</label>
          <br />
          <input
            name="firstName"
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="lastName">Last name: </label>
          <br />
          <input
            name="lastName"
            type="text"
            onChange={(e) => setLastName(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="email">Email:</label>
          <br />
          <input
            name="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
