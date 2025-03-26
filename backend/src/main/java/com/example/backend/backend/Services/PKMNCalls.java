package com.example.backend.backend.Services;

import com.example.backend.backend.Models.RandomPkmn;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;


@Service
public class PKMNCalls {
    private final RestTemplate restTemplate;
    private final ObjectMapper objectMapper;

    @Autowired
    public PKMNCalls(RestTemplate restTemplate, ObjectMapper objectMapper) {
        this.restTemplate = restTemplate;
        this.objectMapper = objectMapper;
    }


    // Scheduled task to clear cache and fetch new random Pokémon every night at midnight
    @Scheduled(cron = "0 0 0 * * *")  // This runs at midnight every day (m h d m w y)
    @CacheEvict(value = "pokemon", allEntries = true)  // Evicts all entries in the "pokemon" cache
    public void updatePokemonCache() {
        int randomNum = (int) (Math.random() * 152);  // Generate a random Pokémon ID
        List<RandomPkmn> newPokemon = getPokemonGeneration();
        // Logic for replacing the old Pokémon in the cache with the new one is handled by @Cacheable
    }

    @Cacheable(value = "pokemon")
    public List<RandomPkmn> getPokemonGeneration() {
        int randomNum = (int)(Math.random() * 152);
        String hi = "error";
        String baseURL = "https://pokeapi.co/api/v2/pokemon/" + randomNum;
        String pngURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + randomNum + ".png";

        List<RandomPkmn> randomPkmnList = new ArrayList<>();

        String response = restTemplate.getForObject(baseURL, String.class);

        try {
            JsonNode rootNode = objectMapper.readTree(response);
            JsonNode nameNode = rootNode.get("name");

            if (nameNode != null){
                String name = nameNode.asText();

                RandomPkmn randomPkmn = new RandomPkmn(name, pngURL);
                randomPkmnList.add(randomPkmn);
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        return randomPkmnList;
    }
}
