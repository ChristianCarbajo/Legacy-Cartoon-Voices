package com.example.Api.Rest.model;
import jakarta.persistence.*;

@Entity
@Table(name = "voices")
public class CVoice {
    public CVoice(){}
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private int price;
    private String category;
    @Column(columnDefinition = "LONGTEXT")
    private String urlImg;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getUrlImg() {
        return urlImg;
    }

    public void setUrlImg(String urlImg) {
        this.urlImg = urlImg;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public CVoice(Long id, String name, String email, int price, String category, String urlImg) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.price = price;
        this.category = category;
        this.urlImg = urlImg;
    }
}
