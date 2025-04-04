package com.example.backend.backend.Controller;


import com.example.backend.backend.Models.RandomPkmn;
import com.example.backend.backend.Services.PKMNCalls;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class WTPNController {
    private final PKMNCalls pkmnCalls;

    public WTPNController(PKMNCalls pkmnCalls) {
        this.pkmnCalls = pkmnCalls;
    }

    @GetMapping("/pokemon-of-the-day")
    public List<RandomPkmn> index() {
        return pkmnCalls.getPokemonGeneration();
    }
}
