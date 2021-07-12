import React, { useState } from 'react';
    
    
const Counter = props => {
    const [state, setState] = useState({
        clickCount: 0
    });

    const handleClick = () => {
        setState({
            clickCount: state.clickCount + 1
        });
    }

    return (
        <div>
            <p>{ state.clickCount }</p>
            <button onClick={ handleClick }>Click Me</button>
        </div>
    );
}
    
export default Counter;







