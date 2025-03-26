package com.example.backend.backend.Models;

import java.io.Serializable;

public class RandomPkmn implements Serializable {
    private String name;
    private String imgUrl;

    public RandomPkmn(String name, String imgUrl) {
        this.imgUrl = imgUrl;
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }
}
