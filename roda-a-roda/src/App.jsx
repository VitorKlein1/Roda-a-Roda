//CSS
import './App.css'

//COMPONENTS
import StartScreen from './components/StartScreen'
import GameScreen from './components/GameScreen'
import EndScreen from './components/EndScreen'

//DATA
import {wordsList} from "./data/words"

//REACT
import {useCallback, useEffect, useState} from "react"


const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"}
]


function App() {

  const [gameStage, setGameStage] = useState(stages[1].name)
  const [words] = useState(wordsList)
  console.log(words)
  
  return(
    <div className='App'>
      {gameStage === "start" && <StartScreen />}
      {gameStage === "game" && <GameScreen />}
      {gameStage === "end" && <EndScreen />}


    </div>
  )
}

export default App
