import React, {useState} from 'react'
import {Button} from 'antd';
import Game from './components/Game';
import './App.css';

const App = () => {
  const [gameStarted, setGameStarted] = useState(true);
  return (
    <div className="container">
      <p className="heading">Star Match Game</p>
      {gameStarted ? 
      <Game startGame={setGameStarted}/> : 
      <Button shape="round" size="large"><span className="btntxt" style={{fontSize: "20px"}}>Start Game</span></Button>}
    </div>
  )
}

export default App
