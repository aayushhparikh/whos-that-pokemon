package com.example.backend.backend.Models.SupportingModels;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Name {

    @JsonProperty("name")
    public String name;

    @JsonProperty("language")
    public Language language;
}
