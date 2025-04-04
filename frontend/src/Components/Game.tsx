import React from 'react'
import useGameLogic from '../Hooks/gameLogic'


function Game() {

  const {correctPokemon, pokemonImg} = useGameLogic();

  console.log(correctPokemon, pokemonImg);
  return (
      <>
        <div>
          <img 
          src={String(pokemonImg)} 
          alt="Who's That Pokémon?" 
          className="filter brightness-0"
        />
        </div>
      </>
  )
}

export default Game