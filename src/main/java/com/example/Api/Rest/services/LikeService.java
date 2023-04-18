package com.example.Api.Rest.services;

import com.example.Api.Rest.model.Like;
import com.example.Api.Rest.repositories.LikeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
@Transactional
public class LikeService {
    @Autowired
    private LikeRepository likeRepository;

    public Long countLikes(Long postId) {
        return likeRepository.countByPostId(postId);
    }

    public void like(Like like) {
        Optional<Like> existingLike = likeRepository.findByPostIdAndUserId(like.getPostId());

        if (existingLike.isPresent()) {
            throw new IllegalStateException();
        }

        like.setTimestamp(LocalDateTime.now());

        likeRepository.save(like);
    }
}
