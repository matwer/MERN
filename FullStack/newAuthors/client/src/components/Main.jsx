// import React, axios, Link & myCSS
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import "./myCSS.css";

const Main = (props) => {
  console.log(props);
  // set up local variables for authors name and errors
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getDataFromDB();
  }, []);

  const getDataFromDB = () => {
    axios
      .get("http://localhost:8000/api/authors")
      .then((res) => {
        console.log(res.data);
        setAuthors(res.data);
      })
      .catch((err) => console.log(err));
  };

  const deleteAuthor = (deleteId) => {
    axios
      .delete("http://localhost:8000/api/authors/" + deleteId)
      .then((res) => {
        console.log(res.data);
        setAuthors(authors.filter((author) => author._id !== deleteId));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="main">
      {/* <h3>Hello World! from Main.jsx!</h3> */}
      <p>We have quotes by:</p>
      <table>
        <thead>
          <tr>
            <th>Author</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author, idx) => {
            return (
              <tr key={idx}>
                <td>{author.authorsName}</td>
                <td>
                  <p>
                    <Link to={"/authors/" + author._id}>Edit</Link> |
                    <button onClick={() => deleteAuthor(author._id)}>
                      Delete
                    </button>
                  </p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Main;
