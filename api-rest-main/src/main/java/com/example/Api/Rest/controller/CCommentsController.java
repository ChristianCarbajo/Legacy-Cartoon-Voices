package com.example.Api.Rest.controller;


import com.example.Api.Rest.model.CComments;
import com.example.Api.Rest.model.CVoice;
import com.example.Api.Rest.services.CCommentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/voices/comment")
@CrossOrigin("*")
public class CCommentsController {

    @Autowired
    CCommentsService cCommentsService;

    @GetMapping()
    public ArrayList<CComments> getComment() {
        return cCommentsService.getComment();
    }

    @PostMapping()
    public CComments saveVoice(@RequestBody CComments commentsModel) {
        return cCommentsService.saveComment(commentsModel);
    }

    @GetMapping(path = "/{id}")
    public Optional<CComments> getCommentBy(@PathVariable Long id) {
        return cCommentsService.getCommentById(id);
    }

    @DeleteMapping(path = "/{id}")
    public String deleteComment(@PathVariable Long id) { return cCommentsService.deleteCommentsById(id);
    }





}
