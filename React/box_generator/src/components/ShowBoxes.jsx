import React, { useState } from 'react';

// get the color input from App.js
const ShowBoxes = ({box, index}) => {

// display the box with the given color and size
	return (
		<div style = {{
				borderStyle: "solid",
				borderWidth: "1px",
				borderRadius: "10px",
				backgroundColor: box.color,
				height: box.size,
				width: box.size,
				display: "inline-flex",
				flexWrap: "wrap",
				verticalAlign: "top",
				margin: "3px"
			}}>
		</div>
	);
}

export default ShowBoxes;