
import './App.css'
import SpeechBox from './components/SpeechBox'
import GameContainer from './components/GameContainer'
import CardList from './components/CardList'
import Score from './components/Score'
import { useState } from 'react'
import { startDialogue } from './Dialogue'
import WinScreen from './components/WinScreen'

function App() {
  const [score, setScore] = useState(0);
  const [gameWon, setgameWon] = useState(false);

  function reset() {
    setScore(0);
  }

  function endGame() {
    setgameWon(true);
  }

  function increaseScore() {
    setScore(score + 1);
  }

  const maxScore = 10;
  const listLength = 10;

  return (
    <>
      <h1>Rick's Brain Busters</h1>
      <GameContainer>
        <SpeechBox dialogue={startDialogue}></SpeechBox>
        <Score maxScore={maxScore} currentScore={score}></Score>
        <CardList listLength={listLength} resetScore = {reset} endGame = {endGame} increaseScore = {increaseScore}/>
        {gameWon && <WinScreen></WinScreen>} 
      </GameContainer>
    </>
  )
}

export default App
