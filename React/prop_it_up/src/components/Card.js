import React, { Component } from 'react';

class Card extends Component {
	constructor(props) {
		super(props);

		this.state = {
			fName: this.props.firstName,
			lName: this.props.lastName,
			cAge: this.props.age,
			hColor: this.props.hairColor
		}
	}

	render() {
		return (
			<>
				{this.state.lName} 
				{this.state.fName}
				{this.state.cAge}
				{this.state.hColor}
			</>
		);
	}
}

export default Card;