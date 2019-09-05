import React from 'react';


const Dashboard = (props) => {

    console.log('dashboard props: ', props)

        return (
            <div className="dashboard">
                <div className="buttons">
                    <button onClick={props.handlestrike}>STRIKE</button>
                    <button onClick={() => props.ball}>BALL</button>
                    <button>FOUL</button>
                    <button>HIT</button>
                </div>
            </div>
        )
}

export default Dashboard;