import React from 'react';

const Colors = ({word, color1, color2}) => {
	return (
		<div style = {{ color: color1,
			backgroundColor: color2, }} > 
			<h1> The word is {word} </h1>
		</div>
	)
}

export default Colors;