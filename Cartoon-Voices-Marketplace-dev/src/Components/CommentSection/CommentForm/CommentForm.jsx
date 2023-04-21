import React from 'react'
import { useEffect, useState } from 'react';
import CallAxios from '../../../Services/CallAxios';
import { Link } from 'react-router-dom';
function CommentForm({voiceId}) {

    let [item, setItem] = useState({})

    function handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let temp_item = item
        temp_item[name] = value
        setItem(temp_item)
    }

    

    function handleSumbit(event) {
        event.preventDefault();
        const comment = {
            userName: item.userName,
            email: item.email,
            comment: item.comment
        }
        CallAxios().createComment(comment, voiceId)
        .then( ()=> window.location.reload() )

    }


    return (
        <>
            <form onSubmit={handleSumbit} method='post'>
                <div className="form-group">
                    <label for="exampleInputName1">Nombre:</label>
                    <input onChange={handleChange} type="name" name='userName' className="form-control" id="exampleInputName1" placeholder="Enter name" required />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email:</label>
                    <input onChange={handleChange} type="email" name='email' className="form-control" id="exampleInputPassword1" aria-describedby="emailHelp" placeholder="Email" required />
                    <small id="emailHelp" class="form-text text-muted">No compartimos el email con ninguna entidad <span className='text-decoration-line-through'>que no pague</span>.</small>
                </div>
                <div className="form-group mb-2">
                    <label for="exampleInputComment1">Comentario:</label>
                    <textarea onChange={handleChange} type="comment" name='comment' className="form-control" id="exampleInputPassword1" placeholder="Comment" required />
                </div>
                <button type="submit" className="btn btn-primary mb-4">Submit</button>
            </form>
        </>
    )
}


export default CommentForm