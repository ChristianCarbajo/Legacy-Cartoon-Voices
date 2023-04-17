import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import CallAxios from "../../Services/CallAxios";
import "./CardsGroup.css"

function CardsGroup() {

    const [data, setData] = useState([]);
    useEffect(() => {
        CallAxios().getVoices().then((data) => {
            setData(data);
        });
    }, []);


    return (
        <div className='container'>
                    <div className="card-group w-100">
                        {data.map((actor) =>
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
                        )}
                    </div>
                </div>
 )}

export default CardsGroup
