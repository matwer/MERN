import React, { Component } from 'react';

class Card extends Component {
	render() {
		return (
			<>
				{this.props.lastName} {this.props.firstName}
				{this.props.age}
				{this.props.hairColor}
			</>
		);
	}
}

export default Card;