import React, { Component } from 'react';

class Card extends Component {
	constructor(props) {
		super(props);

		// set state for any values that will be manipulated on the DOM
		this.state = {
			fname: this.props.firstName,
			lname: this.props.lastName,
			age: this.props.age,
			hcolor: this.props.hairColor
		}
	}

	// create a function to add 1 to the displayed age 
	plusOne = () => {
		this.setState({age: this.state.age + 1});
	}

	// render the page with the a first name, last name, age and hair color
	// add a button displaying the person's first name & last which adds 1 to their age when clicked
	// the onClick event calls the plusOne function which increases the age displayed by 1
	// (it doesn't actually change the age - just updates the value on the screen)
	render() {
		return (
			<>
				<h2>{this.state.lname}, {this.state.fname}  </h2>
				<p>Age: {this.state.age}</p>
				<p>Hair color: {this.state.hcolor}</p>
				<button className="btn" onClick={this.plusOne}>{this.state.fname} {this.state.lname}'s birthday!</button>
			</>
		);
	}
}

export default Card;