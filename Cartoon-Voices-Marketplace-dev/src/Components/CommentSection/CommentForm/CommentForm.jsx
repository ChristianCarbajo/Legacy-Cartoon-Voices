import React from 'react'
import { useEffect, useState } from 'react';
import CallAxios from '../../../Services/CallAxios';
import { Link } from 'react-router-dom';
function CommentForm() {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');



 
    const handleSubmit = (event) => {
        const data = {
            userName: userName,
            comment: comment,
            email: email,
            
        };

        CallAxios().createComment(data)
        .then( ()=> window.location.reload() )
    }



    return (
        <>
        <form action="POST"  >
           <p>Username</p> <input name='userName' type="text"  onChange={(e) => setUserName(e.target.value)}/>
           <p>Email</p> <input name='email' type="email"  onChange={(e) => setEmail(e.target.value)}/>

           <p>Comentario</p>
           <textarea type='text' name='comment'rows="5" cols="60"  onChange={(e) => setComment(e.target.value)}></textarea>

           <button onClick={() => handleSubmit()}>Enviar</button>
           
        </form>
    
        </>
    )
}


export default CommentForm