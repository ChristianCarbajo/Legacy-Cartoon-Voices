package com.example.Api.Rest.services;

import com.example.Api.Rest.interfaces.IComments;
import com.example.Api.Rest.model.CComments;
import com.example.Api.Rest.model.CVoice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class CCommentsService {

    @Autowired
    IComments iComments;

    public ArrayList<CComments> getComment() {
        return (ArrayList<CComments>) iComments.findAll();
    }

    public CComments saveComment(CComments userModel) {
        return iComments.save(userModel);
    }

    public Optional<CComments> getCommentById(Long id) {
        return iComments.findById(id);
    }

    public String deleteCommentsById(Long id) {
        try {
            iComments.deleteById(id);
            return "Borrado con éxito" + id;
        } catch (Exception error) {
            return "No se ha podido borrar" + error;
        }
    }

}
