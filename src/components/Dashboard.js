import React from 'react';

class Dashboard extends React.Component {
    render() {
        return (
            <div className="dashboard">
                <div className="buttons">
                    <button>STRIKE</button>
                    <button>BALL</button>
                    <button>FOUL</button>
                    <button>HIT</button>
                </div>
            </div>
        )
    }
}

export default Dashboard;