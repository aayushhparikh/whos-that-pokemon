import React, { useState } from "react";
import { useGameContext } from "../Hooks/gameContext";
import useGameLogic from "../Hooks/gameLogic";

const GamePlay: React.FC = () => {
  const { pokemonImg } = useGameContext();
  const { gameOver } = useGameContext();
  const { loading } = useGameLogic();

  return (
        <div>
            {loading ? (
              <div className="flex justify-center items-center h-screen">
                <p className="text-xl font-semibold">Loading...</p>
              </div>
        ) : <img
            src={String(pokemonImg)}
            alt="Who's That Pokémon?"
            className={
              gameOver
                ? "w-159 h-159 mx-auto"
                : "w-159 h-159 mx-auto filter brightness-0"
            }
          />}
        </div>
  );
};

export default GamePlay;