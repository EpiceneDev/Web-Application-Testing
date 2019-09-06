import React from 'react';


const Dashboard = (props) => {

    console.log('dashboard props: ', props)

        return (
            <div className="dashboard">
                <div className="buttons">
                    <button onClick={props.strike}>STRIKE</button>
                    <button onClick= {props.ball}>BALL</button>
                    <button onClick={props.foul}>FOUL</button>
                    <button onClick={props.hit}>HIT</button>
                </div>
            </div>
        )
}

export default Dashboard;