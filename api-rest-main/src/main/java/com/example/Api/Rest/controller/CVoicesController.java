package com.example.Api.Rest.controller;

import com.example.Api.Rest.model.CComments;
import com.example.Api.Rest.model.CVoice;
import com.example.Api.Rest.services.CCommentsService;
import com.example.Api.Rest.services.CVoiceService;
import com.example.Api.Rest.view.CCommentView;
import com.example.Api.Rest.view.CVoicesView;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/voices")
@CrossOrigin("*")
public class CVoicesController {
    @Autowired
    CVoiceService cVoiceService;

    @GetMapping()
    public ArrayList<CVoicesView> getVoices() {
        ArrayList<CVoice> voices = cVoiceService.getVoices();
        ArrayList<CVoicesView> voicesView = new ArrayList<CVoicesView>();
        for(int i = 0; i < voices.size(); i++){
            CVoice voice = voices.get(i);
            CVoicesView newView = new CVoicesView(voice.getId(), voice.getName(), voice.getEmail(), voice.getPrice(), voice.getCategory(), voice.getUrlImg());
            voicesView.add(newView);
        }
        return voicesView;
    }

    @PostMapping()
    public CVoice saveVoice(@RequestBody CVoice voiceModel) {
        return cVoiceService.saveVoice(voiceModel);
    }

    @GetMapping(path = "/{id}")
    public CVoicesView getVoiceBy(@PathVariable Long id) {
        CVoice voice = cVoiceService.getVoiceById(id).orElse(null);
        CVoicesView newView = new CVoicesView(voice.getId(), voice.getName(), voice.getEmail(), voice.getPrice(), voice.getCategory(), voice.getUrlImg());
        return newView;
    }

    @DeleteMapping(path = "/{id}")
    public String deleteVoice(@PathVariable Long id) { return cVoiceService.deleteUserById(id);
    }

    @PutMapping()
    public CVoice updateVoice(@RequestBody CVoice cvoice) {
       return cVoiceService.updateVoice(cvoice);
    }
    
}
