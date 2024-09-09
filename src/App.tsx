
import './App.css'
import SpeechBox from './components/SpeechBox'
import GameContainer from './components/GameContainer'
import CardList from './components/CardList'
import Score from './components/Score'
import { useState } from 'react'

function App() {
  const [score, setScore] = useState(0);
  //TODO: Implement  game end logic

  function reset() {
    setScore(0);
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
        <SpeechBox></SpeechBox>
        <Score maxScore={maxScore} currentScore={score}></Score>
        <CardList listLength={listLength} resetScore = {reset} increaseScore = {increaseScore}/>
      </GameContainer>
    </>
  )
}

export default App
