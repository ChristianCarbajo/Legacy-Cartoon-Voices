import React from 'react'
import Card from '../../Components/Card/Card'
import CommentSection from '../../Components/CommentSection/CommentSection'
import {Navigate, useNavigate} from 'react'
import Header from '../../Components/Header/Header'
import { useEffect, useState } from 'react'
import CallAxios from '../../Services/CallAxios'
import { useLocation } from 'react-router-dom'
import './ArticlePage.css'

function ArticlePage() {
  const [data, setData] = useState([{}]);
  let idState = useLocation().state.id;

  useEffect(() => {
    CallAxios().getVoicesById(idState).then((data) => {
        setData(data);
    });
}, []);
console.info(data)
  return (
    <div>
      <Header />
      <div className='article-div'>
      <div className='img-div'>
          <img src={data.urlImg} alt="img" width="200vh" height="200vh"/>

     
          </div>
          
        <div className='data-div'>
        <ul className="card-body-ul">
          <h5 className="article-title">{data.name}</h5>
          <hr></hr>
          <li className="article-item" id='category'>Categoria: {data.category}</li>
          <li className="article-item" id='price'>{data.price}€</li>
          <li className="article-item" id='email'>Email: {data.email}</li>
          </ul>
        </div>
        </div>
          

        

        <CommentSection />
    </div>
  )
}

export default ArticlePage