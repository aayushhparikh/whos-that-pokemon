import { useState, useEffect } from "react";
import { getPokemonOfTheDay } from "../Services/getPokemon";
import { useGameContext } from "./gameContext";
    
const useGameLogic = () => {
  const { setCorrectPokemon, setPokemonImg } = useGameContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const fetchPokemon = async () => {
          const pokemon = await getPokemonOfTheDay();
          if (pokemon) {
              setCorrectPokemon(pokemon[0].name);
              setPokemonImg(pokemon[0].imgUrl);
          }
          setLoading(false);
      };

      fetchPokemon();
  }, []);

  return { loading };
};

export default useGameLogic;