import GamePlay from "./gamePlay"
import useGameLogic from "../Hooks/gameLogic"
import HandleGuess from "./handleGuess";


function Game() {
  useGameLogic();

  return (
    <>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4" style={{ backgroundImage: "url('/pokemonbg.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <GamePlay />
      <HandleGuess />
    </div>
    </>

  )
}

export default Game