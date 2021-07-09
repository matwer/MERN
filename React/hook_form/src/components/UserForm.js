import React from "react";

import mycss from './UserForm.module.css';

const UserForm = props => {
	// grab the dtate from App.js
	const { inputs, setInputs } = props;

	// grab the data from the inputs as the user is typing it in
	const onChange = (e) => {
		setInputs({
			//spread the inputs and grab only the data you need
			...inputs,
			[e.target.name]: e.target.value
		});
	};

	// display the for. it's super important that the labels and inputs are named and
	// the name matches with the name set in App.js. if they don't match, 
	// it can't pass the data
	return (
		<div className = { mycss.wrapper }>
			<h1>User Form</h1>
			<form>
				<fieldset>
					<div class="form-group">
						<label htmlFor="firstName">First name:</label>
						<input onChange={(e) => onChange(e)} type="text" name="firstName" />
					</div>

					<div class="form-group">
						<label htmlFor="lastName">Last name:</label>
						<input onChange={(e) => onChange(e)} type="text" name="lastName" />
					</div>

					<div class="form-group">
						<label htmlFor="email">Email:</label>
						<input onChange={(e) => onChange(e)} type="email" name="email" />
					</div>

					<div class="form-group">
						<label htmlFor="password">Password:</label>
						<input onChange={(e) => onChange(e)} type="password" name="password" />
					</div>

					<div class="form-group">
						<label htmlFor="confirmPassword">Confirm password:</label>
						<input onChange={(e) => onChange(e)} type="password" name="confirmPassword" />
					</div>
				</fieldset>
			</form>
		</div>

	);
}

export default UserForm;


