import React from 'react'
import { useEffect, useState } from 'react';
import CallAxios from '../../../Services/CallAxios';

function CommentForm() {

    let [item, setItem] = useState([{}])

    function handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let temp_item = item
        temp_item[name] = value
        setItem(temp_item)
        console.log(item)
    }

    

    function handleSumbit(event) {
        event.preventDefault();
        CallAxios().createComment(item)
    }


    return (
        <>
            <form onSubmit={handleSumbit} action='POST'>
                <div class="form-group">
                    <label for="exampleInputName1">Nombre:</label>
                    <input onChange={handleChange} type="userName" class="form-control" id="exampleInputName1" placeholder="Enter name" required />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email:</label>
                    <input onChange={handleChange} type="email" class="form-control" id="exampleInputPassword1" aria-describedby="emailHelp" placeholder="Email" required />
                    <small id="emailHelp" class="form-text text-muted">No compartimos el email con ninguna entidad <span className='text-decoration-line-through'>que no pague</span>.</small>

                </div>
                <div class="form-group mb-2">
                    <label for="exampleInputComment1">Comentario:</label>
                    <textarea onChange={handleChange} type="comment" class="form-control" id="exampleInputPassword1" placeholder="Comment" required />
                </div>

                <button type="submit" class="btn btn-primary mb-4">Submit</button>
            </form>
        </>
    )
}

export default CommentForm