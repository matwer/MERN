import './navbar.css';

import { useState, useEffect } from 'react';
import { Router, Link, navigate } from '@reach/router';


const DashboardComponent = (props) => {
	return (
    	<div className="navbar">
			<h5>Welcome to Dashboard!</h5>
			<Link to = "/login">Login</Link>
    	</div>
	);
}

export default DashboardComponent;