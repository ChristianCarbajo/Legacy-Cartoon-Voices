import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import CallAxios from "../../Services/CallAxios";
import "./CardsGroup.css"

function CardsGroup() {

    let [cards, setCards] = useState([])

    useEffect(() => {
        CallAxios().getVoices().then((data) => {
            setCards(data);
        });
    }, []);

    function chunk(array, size) {
        const result = [];

        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }

        return result;
    }

    return (
        <div className='container'>
            {chunk(cards, 4).map((cardGroup, index) =>
                <div className="row mb-3 " key={index}>
                    <div className="card-group w-100">
                        {cardGroup.map((actor) =>
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
        </div>
    )
}

export default CardsGroup
