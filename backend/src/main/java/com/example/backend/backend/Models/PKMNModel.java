package com.example.backend.backend.Models;

import com.example.backend.backend.Models.SupportingModels.Name;
import com.example.backend.backend.Models.SupportingModels.NamedResources;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class PKMNModel {

    @JsonProperty("abilities")
    public List<NamedResources> abilitiesList;

    @JsonProperty("id")
    public int id;

    @JsonProperty("main_region")
    public NamedResources mainRegion;

    @JsonProperty("moves")
    public List<NamedResources> movesList;

    @JsonProperty("name")
    public String generationName;

    @JsonProperty("names")
    public List<Name> namesList;

    @JsonProperty("pokemon_species")
    public List<NamedResources> pokemonSpeciesList;

    @JsonProperty("types")
    public List<NamedResources> typesList;

    @JsonProperty("version_groups")
    public List<NamedResources> versionGroupsList;
}
