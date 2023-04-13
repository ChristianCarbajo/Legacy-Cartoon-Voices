package com.example.Api.Rest.services;

import com.example.Api.Rest.interfaces.IVoices;
import com.example.Api.Rest.model.CVoice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;


@Service
public class CVoiceService {
    @Autowired
    IVoices iVoices;


    public ArrayList<CVoice> getVoices() {
        return (ArrayList<CVoice>) iVoices.findAll();
    }

    public CVoice saveVoice(CVoice userModel) {
        return iVoices.save(userModel);
    }

    public Optional<CVoice> getVoiceById(Long id) {
        return iVoices.findById(id);
    }

    public String deleteUserById(Long id) {
        try {
            iVoices.deleteById(id);
            return "Borrado con éxito" + id;
        } catch (Exception error) {
            return "No se ha podido borrar" + error;
        }
    }

    public CVoice updateVoice(CVoice userModel) {
        return iVoices.save(userModel);
    }

}
