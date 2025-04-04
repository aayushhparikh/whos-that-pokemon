import React from 'react';
import { useGameContext } from '../Hooks/gameContext';

const HandleGuess: React.FC = () => {
  const { correctPokemon, setUserGuess, gameOver, setGameOver } = useGameContext();
  const [guessAttempts, setGuessAttempts] = React.useState(0);
  const [guess, setGuess] = React.useState("");

  const handleGuess = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (gameOver) {
      alert("Game Over! Please come back tomorrow for a new Pokémon.");
      return;
    }
    
    if (guessAttempts >= 6) {
      alert("Game Over! You've used all your attempts. The correct answer was " + correctPokemon);
      setGameOver(true);
      return;
    }
    
    setGuessAttempts(guessAttempts + 1);
    const trimmedGuess = guess.trim().toLowerCase();
    setUserGuess(trimmedGuess);

    if (trimmedGuess === correctPokemon) {
      alert("Correct! You guessed the Pokémon!");
      setGameOver(true);
    } else if (guessAttempts < 5) {
      alert(`Incorrect! You have ${5 - guessAttempts} attempts left.`);
    } else {
      alert("Incorrect! You've used all your attempts. Game Over! The correct Pokémon was " + correctPokemon);
      setGameOver(true);
    }
    
    setGuess(""); // Clear the input field after submission
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
        Who's That Pokémon?
      </h1>
      <div className="flex flex-col items-center">
        {gameOver ? (
          <div className="text-2xl font-semibold text-gray-900 text-center">
            {correctPokemon ? correctPokemon.charAt(0).toUpperCase() + correctPokemon.slice(1) + "!" : "Unknown"}
            <h2 className="text-xl text-gray-700 mt-2">Come back tomorrow!</h2>
          </div>
        ) : (
          <form
            className="flex items-center space-x-4 w-full max-w-md"
            onSubmit={handleGuess}
          >
            <input 
              aria-label="guess" 
              type="text" 
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              placeholder="Enter your guess" 
              className="flex-grow border-2 border-gray-700 bg-gray-800 text-white rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
            />
            <button 
              type="submit" 
              className="bg-gray-700 text-white rounded-lg px-6 py-3 hover:bg-gray-600 transition duration-300 ease-in-out"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default HandleGuess;