package com.example.Api.Rest.view;

import com.example.Api.Rest.model.CComments;

public class CCommentView {
    private String comment;
    private String userName;
    private String email;

    public CCommentView(String comment, String userName, String email) {
        this.comment = comment;
        this.userName = userName;
        this.email = email;
    }



    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
