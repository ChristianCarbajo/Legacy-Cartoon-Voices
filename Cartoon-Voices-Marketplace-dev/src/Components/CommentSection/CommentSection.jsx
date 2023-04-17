import React from 'react'
import Comment from './Comment/Comment'
import CommentForm from './CommentForm/CommentForm'

function CommentSection() {
    let data = [{
        name: "Salah",
        email: "salah@salah.com",
        comment: "Some quick example text to build on the card title and make up the bulk of the card's content."
    }]
    return (
            <div className="container">
                <div className="row text-center">
                    <div className="col-12">
                        <h1 className="display-3 fw-bold">Comentarios</h1>
                        <hr className="bg-white mb-4 mt-0 d-inline-block mx-auto" style={{ width: "100px", height: "3px" }} />
                        <p className="p-text">¿Qué opinan nuestros clientes?</p>
                    </div>
                </div>
                {data.map((item) => 
                    <Comment item={item}/>
                )}
                <CommentForm />
            </div>
    )
}

export default CommentSection