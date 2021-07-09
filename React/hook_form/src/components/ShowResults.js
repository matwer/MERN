import React from  'react';

import mycss from './UserForm.module.css';

// destructure the data from App.js
const ShowResults = ({liveStream}) => {
	const { firstName, lastName, email, password, confirmPassword } = liveStream;

	// display the data in real time - it's super important that what's in the {}
	// matches with the name set in App.js. if they don't match, it can't pass the data
	return (
		<div className = { mycss.centered }>
			<form>
				<h2>Your form data</h2>
				<p>First name: { firstName }</p>
				<p>Last name: { lastName }</p>
				<p>Email: { email }</p>
				<p>Password: { password }</p>
				<p>Confirm Password: { confirmPassword }</p>
			</form>
		</div>
	);
};

export default ShowResults;
