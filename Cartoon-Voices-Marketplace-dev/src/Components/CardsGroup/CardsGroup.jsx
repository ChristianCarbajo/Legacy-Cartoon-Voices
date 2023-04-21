import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import CallAxios from "../../Services/CallAxios";
import "./CardsGroup.css"
import { useLocation } from 'react-router-dom';

function CardsGroup({filteredData}) {

    const [data, setData] = useState([]);
    
    useEffect(() => {
        CallAxios().getVoices().then((data) => {
            setData(data);
        });
    }, []);

let itemsToRender = filteredData.length > 0 ? filteredData : data;
    
    return (
        <div className='container'>
                <div className="row mb-3 ">
                    <div className="card-group w-100 d-flex align-items-center flex-column my-4">

                        {itemsToRender.length > 0 ?
                        itemsToRender.map((actor) =>(
                            <Card
                                actor={actor}
                                id={actor.id}
                                img={actor.urlImg}
                                video={actor.urlVideo}
                                name={actor.name}
                                category={actor.category}
                                price={actor.price}
                                email={actor.email}
                                key={actor.id}
                                className="mr-3 mb-3"
                            />
                        )): <h3>No hay voces</h3>
                    }
                    </div>
                </div>
        </div>
    )
}

export default CardsGroup
