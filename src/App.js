import React, { useState } from 'react';
import './App.css';
import Display from './components/Display.js';
import Dashboard from './components/Dashboard.js';


function App() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);
  const [fouls, setFouls] = useState(0);

  const strike = () => {
    if(strikes == 2) {
      setStrikes(0);
    }else{
    setStrikes(strikes + 1);
    }

  };

  const ball = () => {
    if(ball == 3) {
      setBalls(0);
    }
    setBalls(balls + 1)
  }

  

  return (
    <div className="App">
      <Display  strikes={strikes} balls={balls} />
      <Dashboard 
          setStrikes={setStrikes}
          strike={strike}
          setBalls={setBalls}
          Ball={ball} />
    </div>
  );
}

export default App;