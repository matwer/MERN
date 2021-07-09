import React, { useState } from 'react';
import '../App.css';


const PersonCard = props => {
    const [ age, setAge ] = useState(props.age);
    
    const handleClick = () => {
        setAge(age + 1)
    }
    
    return(
        <div className="card">
            <h1>{ props.lastName }, { props.firstName }</h1>
            <p>Age: { age }</p>
            <p>Hair Color: { props.hairColor }</p>
            <button className = "btn-grad" onClick = { handleClick }>Happy Birthday { props.firstName }!</button>
        </div>
    );
}

export default PersonCard;
