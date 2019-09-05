import React from 'react';

const Display = (props) => {
    console.log('display props', props)
        return (
            <div className="display">
                <h1>At Bat:</h1>
                <hr></hr>
                <h3>Balls: {props.balls}</h3>
                <h3>Strikes: {props.strikes}</h3>
            </div>
        )
}

export default Display;