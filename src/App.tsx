
import './App.css'
import SpeechBox from './components/SpeechBox'
import GameContainer from './components/GameContainer'
import CardList from './components/CardList'

function App() {

  return (
    <>
      <h1>Rick's Brain Busters</h1>
      <GameContainer>
        <CardList listLength={10}/>
        <SpeechBox></SpeechBox>
      </GameContainer>
    </>
  )
}

export default App
