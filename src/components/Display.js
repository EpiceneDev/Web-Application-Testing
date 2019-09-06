import React from 'react';

const Display = (props) => {
    console.log('display props', props)
        return (
            <div className="display">
                <h2>At Bat:</h2>
                <hr></hr>
                <h2>Balls: {props.balls}</h2>
                <h2>Strikes: {props.strikes}</h2>
            </div>
        )
}

export default Display;