import React, { useEffect, useState } from 'react'
import CallAxios from "../../Services/CallAxios";
import "./CarouselCards.css"

function CarouselCards() {
    let [cards, setCards] = useState([])

    useEffect(() => {
        CallAxios().getVoices().then((data) => {
            setCards(data);
        });
    }, []);

    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner" >
                {cards.map((card, index) =>
                    <div
                        className={index === 0 ? "carousel-item active" : "carousel-item"}
                        key={card.id}
                    >
                        <img className="d-block" src={card.urlImg} alt={card.name} style={{ width: "60vh", height: "40vh", margin: "auto" }} />
                        <div style={{ background: "white", opacity: 0.5 }} className="carousel-caption d-none d-md-block">
                            <h2 style={{ color: "black", fontWeight: "700" }}>{card.name}</h2>
                            <h4 style={{ color: "black" }}>{card.email}</h4>
                        </div>
                    </div>
                )}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" ></span>
                <span className="visually-hidden" >Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default CarouselCards