package com.example.Api.Rest.model;

import jakarta.persistence.*;
import org.jetbrains.annotations.NotNull;

import java.time.LocalDateTime;

@Entity
@Table(name = "likes")
public class Like {
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getPostId() {
        return postId;
    }

    public void setPostId(Long postId) {
        this.postId = postId;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private Long postId;


    @NotNull
    private LocalDateTime timestamp;


}