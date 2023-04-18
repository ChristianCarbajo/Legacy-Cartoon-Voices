import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import './Card.css'
import { useNavigate } from 'react-router-dom';

function Card(props) {
    
    const id = props.id;
    const editUrl = `/edit/${id}`;
    let navigate = useNavigate();

    return (
        <div className="card " style={{ width: "18rem", height:"50vh" }} onClick = { ()=> {navigate('/article',{state:{id}})}} >
            <div className="card-img ">
                <img src={props.img} alt={props.name} width="200vh" height="200vh" />
            </div>
            <ul className="card-body-ul">
                <h5 className="card-title">{props.name}</h5>
                <li className="list-group-item">Categoria: {props.category}</li>
                <li className="list-group-item">{props.price}€</li>
                <li className="list-group-item">email: {props.email}</li>
            </ul>
            <div className="card-body-button">
                <Link to="/contact">
                    <button type="button" className="btn btn-secondary btn-sm m-1">Contratar</button>
                </Link>
                <Link to={editUrl}>
                    <button type="button" className="btn btn-secondary btn-sm m-1">Editar</button>
                </Link>
            </div>
        </div>
    )
}

export default Card
