import './navbar.css';

import { useState, useEffect } from 'react';
import { Router, Link, navigate } from '@reach/router';


const LoginComponent = (props) => {
	return (
    	<div className="navbar">
			<h5>Welcome to Login!</h5>
			<Link to = "/dashboard">Dashboard</Link>
    	</div>
	);
}

export default LoginComponent;