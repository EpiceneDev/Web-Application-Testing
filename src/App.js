import React, { useState } from 'react';
import './App.css';
import Display from './components/Display.js';
import Dashboard from './components/Dashboard.js';


function App() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);
  // const [fouls, setFouls] = useState(0);

  const handleStrike = () => {
    if(strikes < 2) {
      setStrikes(strikes +1)
    }else if (strikes >= 3) {
      setStrikes(0)
    }
  };

  const ball = () => {
    if(ball === 3) {
      setBalls(0);
    }else{
    setBalls(balls + 1)
    } 
  }

  

  return (
    <div className="App">
      <Display  strikes={strikes} balls={balls} />
      <Dashboard 
          handlestrike={handleStrike}
          ball={ball} />
    </div>
  );
}

export default App;