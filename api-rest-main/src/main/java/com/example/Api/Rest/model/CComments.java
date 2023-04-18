package com.example.Api.Rest.model;


import jakarta.persistence.*;

@Entity
@Table(name = "comments")
public class CComments {

    public CComments() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(columnDefinition = "LONGTEXT")
    private String comment;
    private String userName;


    public CComments(Long id, String userName, String comment) {
        this.comment = comment;
        this.id = id;
        this.userName = userName;
    }

    public String getuserName() {
        return userName;
    }

    public void setuserName(String userName) {
        this.userName = userName;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public String getComment() {
        return comment;
    }
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}


