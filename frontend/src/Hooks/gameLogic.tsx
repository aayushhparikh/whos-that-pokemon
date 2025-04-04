import { useState, useEffect } from "react";
import { getPokemonOfTheDay } from "../Services/getPokemon";
import { useGameContext } from "./gameContext";
    
const useGameLogic = () => {
    const [correctPokemon, setCorrectPokemon] = useState<string | null>(null);
    const { userGuess } = useGameContext();
    const [pokemonImg, setPokemonImg] = useState<string | null>(null);
    const [gameOver, setGameOver] = useState<boolean>(false);
    const [guessCount, setGuessCount] = useState<number>(0);

    useEffect(() => {
        const fetchPokemon = async () => {
            const pokemon = await getPokemonOfTheDay();
            if (pokemon) {
                setCorrectPokemon(pokemon[0].name);
                setPokemonImg(pokemon[0].imgUrl);
            }
        };

        fetchPokemon();
    }, []);

    // Use the userGuess for the validation
    const handleGuess = () => {
        if (gameOver || guessCount >= 6) return; // Prevent guessing after game over or after 6 attempts

        if (userGuess.toLowerCase() === correctPokemon?.toLowerCase()) {
            setGameOver(true);
            return 'Correct!';
        } else {
            setGuessCount(guessCount + 1);
            return 'Incorrect! Please try again!';
        }
    };
    
    return { correctPokemon, pokemonImg, handleGuess }
};

export default useGameLogic;