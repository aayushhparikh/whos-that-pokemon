import { createContext, useContext, useState, ReactNode } from "react";

interface GameContextType {
  userGuess: string;
  setUserGuess: (guess: string) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [userGuess, setUserGuess] = useState("");

  return (
    <GameContext.Provider
      value={{ userGuess, setUserGuess}}
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