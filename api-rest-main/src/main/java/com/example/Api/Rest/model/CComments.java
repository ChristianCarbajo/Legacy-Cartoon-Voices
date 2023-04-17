package com.example.Api.Rest.model;


import jakarta.persistence.*;

@Entity
@Table(name = "comments")
public class CComments {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String comment;
    private String userName;
    public CComments(){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getComment() {
        return comment;
    }
    @Column(columnDefinition = "LONGTEXT")
    public void setComment(String comment) {
        this.comment = comment;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
public CComments(Long id, String userName, String comment){
        this.comment = comment;
        this.id= id;
        this.userName = userName;
}


}
