package com.example.backend.backend.Models.SupportingModels;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NamedResources {

    @JsonProperty("name")
    public String name;

    @JsonProperty("url")
    public String url;
}
