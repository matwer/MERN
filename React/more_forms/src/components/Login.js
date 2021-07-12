import React, { useState } from  'react';

import mycss from './FormCSS.module.css';

const Login = (props) => {

	// set up the "getters" and "setters" for each field in the form and set their default value
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
	

	// set a boolean to determine if the form has been submitted and set it's defualt value 
	const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

	// set up the "getters" and "setters" for each validation and set their default value: fn, ln > 2 email ? 5 pw& cfw match
	const [firstNameError, setFirstNameError] = useState(true);
	const handleFirstName = (e) => {
        setFirstName(e.target.value);

        if (e.target.value.length < 2) {
            setFirstNameError("First name must be at least 2 characters");
    	} else {
			setFirstNameError(false);
		}
	};

		// set up the "getters" and "setters" for validating the last name
		const [lastNameError, setLastNameError] = useState(true);
		const handleLastName = (e) => {
			setLastName(e.target.value);

			if (e.target.value.length < 2) {
				setLastNameError("Last name must be at least 2 characters");
			} else {
				setLastNameError(false);
			}
		};

		// set up the "getters" and "setters" for validating the email address
		const [emailError, setEmailError] = useState(true);
		const handleEmail = (e) => {
			setEmail(e.target.value);

			if (e.target.value.length < 5) {
				setEmailError("Email must be at least 5 characters");
			} else {
				setEmailError(false);
			}
		};

		// set up the "getters" and "setters" for validating the password
		const [pwError, setPWError] = useState(true);
		const handlePW = (e) => {
			setPassword(e.target.value);

			if (e.target.value.length < 8) {
				setPWError("Password must be at least 8 characters");
			} else {
				setPWError(false);
			}
		};

		// set up the "getters" and "setters" for validating the password
		const [confirmPWError, setConfirmPWError] = useState(true);
		const handleConfirmPW = (e) => {			
			setConfirmPassword(e.target.value);
			
			if (e.target.value !== password) {
				setConfirmPWError("Passwords must match");
			} else {
				setConfirmPWError(false);
			}
		};


    // sets up an arrow function that grabs the data as it's submitted and clears the form fields after submission
    const createUser = (e) => {
		e.preventDefault();
		const newUser = { firstName, lastName, email, password, confirmPassword };
		console.log("Welcome", newUser.firstName);
		setFirstName("");
		setLastName("");
		setEmail("");
		setPassword("");
		setConfirmPassword("");
		setHasBeenSubmitted(true);
    };


	// sets up an arrow function that displays a message based on the value of hasBeenSubmitted
	const formMessage = () => {
        if( hasBeenSubmitted ) {
			return "Thank you for submitting the form!";
		} else {
			return "Welcome, please submit the form";
		}
	};
    

    return (
		<>
			<div className = { mycss.wrapper }>
				<form onSubmit={ createUser }>
				<h3 className= { mycss.centered }> { formMessage() } </h3>
					<div className= { mycss.formGroup }>
						<label htmlFor="firstName">First name:</label>
						<input type="text" onChange={ handleFirstName } placeholder="Must be at least 2 characters" />
						{
							firstNameError ?
							<p style={{color:'red'}}>{ firstNameError }</p> :
							''
						}
					</div>

					<div className= { mycss.formGroup }>
						<label htmlFor="lastName">First name:</label>
						<input type="text" onChange={ handleLastName } placeholder = "Must be at least 2 characters" />
						{
							lastNameError ?
							<p style={{color:'red'}}>{ lastNameError }</p> :
							''
						}
					</div>

					<div className= { mycss.formGroup }>
						<label htmlFor="email">Email:</label>
						<input type="email" onChange={ handleEmail } placeholder="Must be at least 5 characters"/>
						{
							emailError ?
							<p style={{color:'red'}}>{ emailError }</p> :
							''
						}
					</div>

					<div className= { mycss.formGroup }>
						<label htmlFor="password">Password:</label>
						<input type="password" onChange={ handlePW } placeholder="Must be at least 8 characters"/>
						{
							pwError ?
							<p style={{color:'red'}}>{ pwError }</p> :
							''
						}
					</div>

					<div className= { mycss.formGroup }>
						<label htmlFor="confirmPassword">Confirm password:</label>
						<input type="password" onChange={ handleConfirmPW } placeholder="Confirm the password"/>
						{
							confirmPWError ?
							<p style={{color:'red'}}>{ confirmPWError }</p> :
							''
						}
					</div>
					<p className= { mycss.centered }>
					<input type="submit" value="Create User"/>
					</p>
				</form>
			</div>
			<form className= { mycss.centered }>
				<h2>Your form data</h2>
				<p>First name: { firstName }</p>
				<p>Last name: { lastName }</p>
				<p>Email: { email }</p>
				<p>Password: { password }</p>
				<p>Confirm Password: { confirmPassword }</p>
			</form>
	</>
	);
};
    

export default Login;



