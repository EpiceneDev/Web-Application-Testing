import React from 'react';

class Display extends React.Component {
    render() {
        return (
            <>
                <h1>At Bat:</h1>
                <hr></hr>
                <h3>Balls: {}</h3>
                <h3>Strikes: {}</h3>
            </>
        )
    }
}

export default Display;