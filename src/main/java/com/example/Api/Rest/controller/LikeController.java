package com.example.Api.Rest.controller;

import com.example.Api.Rest.model.Like;
import com.example.Api.Rest.services.LikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/likes")
public class LikeController {
    @Autowired
    private LikeService likeService;

    @PostMapping("/like")
    public ResponseEntity<?> like(@RequestBody Like like) {
        likeService.like(like);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/{postId}")
    public ResponseEntity<Long> countLikes(@PathVariable Long postId) {
        Long countLikes = likeService.countLikes(postId);
        return ResponseEntity.ok(countLikes);
    }
}
