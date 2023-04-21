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
    private String email;



    @ManyToOne
    @JoinColumn(name = "voice_id")
    private CVoice voice;


    public CComments(Long id, String userName, String comment, String email) {
        this.comment = comment;
        this.id = id;
        this.userName = userName;
        this.email=email;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public CVoice getVoice() {
        return voice;
    }

    public void setVoice(CVoice voice) {
        this.voice = voice;
    }


}


