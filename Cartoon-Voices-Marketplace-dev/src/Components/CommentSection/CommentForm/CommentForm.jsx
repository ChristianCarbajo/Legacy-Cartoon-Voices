import React from 'react'
import { useEffect, useState } from 'react';
import CallAxios from '../../../Services/CallAxios';

function CommentForm() {


    const [userName, setUserName] = useState('');  
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');



    const handleSubmit = () => {
        const data = {
            name:userName,
            email: email,
           comment: comment
        };

        CallAxios().createComment(data)



    return (
        <>
        <form action="POST" onSubmit={handleSubmit}>
           <p>Username</p> <input name='userName' type="text" onChange={(e) => setUserName(e.target.value)}/>
           <p>Email</p><input name='email' type="email" onChange={(e) => setEmail(e.target.value)}/>
           <p>Comentario</p>
           <textarea type='text' name='comment'rows="5" cols="60" onChange={(e) => setComment(e.target.value)}></textarea>
           <button>Enviar</button>
        </form>

        {/* <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
        
            </div>

            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form> */}
        </>
    )
}
}

export default CommentForm