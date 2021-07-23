// make it look pretty(ish)
import "./productsCSS.css";

// import React, Link and axios
import React from "react";
import { Link } from "@reach/router";
import axios from "axios";

export default ({ products, removeFromDom }) => {
  // const { removeFromDom } = props;

  const deleteProduct = (productId) => {
    axios
      .delete("http://localhost:8000/api/products/" + productId)
      .then((res) => {
        removeFromDom(productId);
      });
  };

  // pulled from w3schools: https://www.w3schools.com/howto/howto_js_sort_table.asp
  const sortTable = (e) => {
    let table,
      rows,
      switching,
      i,
      x,
      y,
      shouldSwitch,
      dir,
      switchcount = 0;
    table = document.getElementById("products");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < rows.length - 1; i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("TD")[e];
        y = rows[i + 1].getElementsByTagName("TD")[e];
        /* Check if the two rows should switch place,
        based on the direction, asc or desc: */
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        // Each time a switch is done, increase this count by 1:
        switchcount++;
      } else {
        /* If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again. */
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  };

  return (
    <>
      <div className="main">
        <h3>All Products</h3>
        <table id="products">
          <thead>
            <tr>
              <th>
                Name
                <button
                  onClick={(e) => {
                    sortTable(0);
                  }}
                  className="sortBtn"
                >
                  Sort
                </button>
              </th>
              <th>
                Price
                <button
                  onClick={(e) => {
                    sortTable(1);
                  }}
                  className="sortBtn"
                >
                  Sort
                </button>
              </th>
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
                        <button className="btn">
                          <Link to={"/products/" + product._id}>View</Link>
                        </button>
                        |
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
