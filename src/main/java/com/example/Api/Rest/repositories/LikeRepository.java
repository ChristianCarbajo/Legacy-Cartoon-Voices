package com.example.Api.Rest.repositories;

import com.example.Api.Rest.model.Like;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LikeRepository extends JpaRepository<Like, Long> {
    Long countByPostId(Long postId);

    Optional<Like> findByPostIdAndUserId(Long postId);
}