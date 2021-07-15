import React from 'react';

const Words = ({input}) => {

	return (
		<div>
			{
				isNaN(input) ?
				<h2> The word is {input} </h2> :
				<h2> The number is {input} </h2>
			}
		</div>
	)
}

export default Words;