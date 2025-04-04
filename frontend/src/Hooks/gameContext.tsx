import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface GameContextType {
  userGuess: string;
  correctPokemon: string | null;
  pokemonImg: string | null;
  setCorrectPokemon: (pokemon: string | null) => void;
  setPokemonImg: (img: string | null) => void;
  setUserGuess: (guess: string) => void;
  gameOver: boolean;
  setGameOver: (gameOver: boolean) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [userGuess, setUserGuess] = useState("");
  const [correctPokemon, setCorrectPokemon] = useState<string | null>(null);
  const [pokemonImg, setPokemonImg] = useState<string | null>(null);
  const [gameOver, setGameOverState] = useState(false);

  // Function to update gameOver state and persist it in localStorage
  const setGameOver = (status: boolean) => {
    setGameOverState(status);
    if (status) {
      // Store that the user has finished playing for today
      localStorage.setItem("gameOver", "true");
      localStorage.setItem("lastPlayDate", new Date().toLocaleDateString());
    } else {
      localStorage.removeItem("gameOver");
    }
  };

  // On mount, check if the user has already played today
  useEffect(() => {
    const lastPlayDate = localStorage.getItem("lastPlayDate");
    const today = new Date().toLocaleDateString();
    if (lastPlayDate === today && localStorage.getItem("gameOver") === "true") {
      setGameOverState(true);
    }
  }, []);

  return (
    <GameContext.Provider
      value={{
        userGuess,
        setUserGuess,
        correctPokemon,
        setCorrectPokemon,
        pokemonImg,
        setPokemonImg,
        gameOver,
        setGameOver,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error("useGameContext must be used within a GameProvider");
  }
  return context;
};