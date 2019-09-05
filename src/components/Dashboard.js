import React from 'react';


const Dashboard = (props) => {


    console.log('dashboard props: ', props)
        return (
            <div className="dashboard">
                <div className="buttons">
                    <button onClick={() => props.setStrikes(props.strikes)}>STRIKE</button>
                    <button onClick={() => props.setBalls(props.ball)}>BALL</button>
                    <button>FOUL</button>
                    <button>HIT</button>
                </div>
            </div>
        )
}

export default Dashboard;