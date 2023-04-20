package com.example.Api.Rest.model;

import jakarta.persistence.*;

@Entity
@Table (name="voices_comments")
public class CTable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name="voice_id")
    private CVoice cVoice;

    @Column(name = "comment_id")
    private Long commentId;

}
