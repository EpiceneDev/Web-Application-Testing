import React, { useState } from 'react';
import './App.css';
import Display from './components/Display.js';
import Dashboard from './components/Dashboard.js';


function App() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);
  // const [fouls, setFouls] = useState(0);

  const handleStrike = () => {
    if(strikes === 3) {
      setStrikes(0)
    }else if (strikes < 3) {
      setStrikes(strikes + 1)
    }
  };

  const handleBall = () => {
    if(balls === 4) {
      setBalls(0);
    }else if (balls < 4){
    setBalls(balls + 1)
    } 
  }

  

  return (
    <div className="App">
      <Display  strikes={strikes} balls={balls} />
      <Dashboard 
          strike={handleStrike}
          ball={handleBall} />
    </div>
  );
}

export default App;