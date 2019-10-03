import React from 'react';

const Display = (props) => {
    console.log('display props', props)
        return (
            <div className="display">
                <h2>Batter Up</h2>
                <hr/>
                <h2>Balls: {props.balls}</h2>
                <h2>Strikes: {props.strikes}</h2>
            </div>
        )
}

export default Display;