import React from 'react'
import { useEffect, useState } from 'react';
import CallAxios from '../../../Services/CallAxios';

function CommentForm() {

    const [data, setData] = useState([{}]);

    let [item, setItem] = useState([{userName: "", comment:"", email:""}]);
    useEffect(() => {
        CallAxios().getVoices().then((data) => {
            setData(data);
        });
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        CallAxios().createComment(item)
        };


        function handleChange(event) {
            const target = event.target;
            const value = target.value;
            console.info(target.value)
            const name = target.name;
            
             let temp_item = item;
            
             temp_item[name]=value;

            setItem(temp_item);
         
        }

        console.info(item)



    return (
        <>
        <form action="POST" onSubmit={handleSubmit} >
           <p>Username</p> <input name='userName' type="text" onChange={handleChange}/>
           <p>Email</p> <input name='email' type="email" onChange={handleChange}/>

           <p>Comentario</p>
           <textarea type='text' name='comment'rows="5" cols="60" onChange={handleChange}></textarea>
           <button >Enviar</button>
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

export default CommentForm