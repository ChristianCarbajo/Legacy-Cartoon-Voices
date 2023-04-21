package com.example.Api.Rest.controller;
import com.example.Api.Rest.model.CComments;
import com.example.Api.Rest.model.CVoice;
import com.example.Api.Rest.services.CCommentsService;
import com.example.Api.Rest.services.CVoiceService;
import com.example.Api.Rest.view.CCommentView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/comment")
@CrossOrigin(origins = "*")
public class CCommentsController {

    @Autowired
    CCommentsService cCommentsService;
    @Autowired
    CVoiceService cVoiceService;

    @GetMapping()
    public ArrayList<CCommentView> getComment() {
        ArrayList<CComments> comments = cCommentsService.getComment();
        ArrayList<CCommentView> commentView = new ArrayList<CCommentView>();
        for(int i = 0; i < comments.size(); i++){
            CComments comment = comments.get(i);
            CCommentView newView = new CCommentView(comment.getComment(), comment.getUserName(), comment.getEmail());
            commentView.add(newView);
        }
        return commentView;
    }

    @PostMapping(path = "/{id}")
    public CCommentView saveComment(@RequestBody CComments commentsModel, @PathVariable Long id ) {
        CVoice existingVoice = cVoiceService.getVoiceById(id).orElse(null);
        System.out.println(existingVoice);
        commentsModel.setVoice(existingVoice);
        cCommentsService.saveComment(commentsModel);
        CCommentView newView = new CCommentView(commentsModel.getComment(), commentsModel.getUserName(), commentsModel.getEmail());
        return newView;
    }

    @GetMapping(path = "/{id}")
    public ArrayList<CCommentView> getCommentBy(@PathVariable Long id) {
        CVoice existingVoice = cVoiceService.getVoiceById(id).orElse(null);
        List<CComments> allComments = existingVoice.getComments();
        ArrayList<CCommentView> commentView = new ArrayList<CCommentView>();
        for(int i = 0; i < allComments.size(); i++){
            CComments comment = allComments.get(i);
            CCommentView newView = new CCommentView(comment.getComment(), comment.getUserName(), comment.getEmail());
            commentView.add(newView);
        }
        return commentView;
    }

    @DeleteMapping(path = "/{id}")
    public String deleteComment(@PathVariable Long id) { return cCommentsService.deleteCommentsById(id);
    }
}
