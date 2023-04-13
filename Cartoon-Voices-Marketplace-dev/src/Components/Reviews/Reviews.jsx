import "./Reviews.css"

export default function Reviews() {

    return (
        <section className="client pt-3 pb-5">
            <div className="container">
                <div className="row text-center">
                    <div className="col-12">
                        <h1 className="display-3 fw-bold text-white">Valoraciones</h1>
                        <hr className="bg-white mb-4 mt-0 d-inline-block mx-auto" style={{ width: "100px", height: "3px" }} />
                        <p className="p-text text-white">¿Qué opinan nuestros clientes?</p>
                    </div>
                </div>
                <div className="row align-items-md-center text-white">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row p-4">
                                        <div className="t-card">
                                            <i className="fa fa-quote-left" aria-hidden="true"></i>
                                            <p className="lh-lg">Contraté la voz de Pluto para mi hija y ha quedado bastante defraudada. El actor tiene una voz distorsionada. Yo creo que ha sido realizada mediante una IA.</p>
                                            <i className="fa fa-quote-right" aria-hidden="true"></i><br></br>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-2 pt-3">
                                                <img src="https://avatars.githubusercontent.com/u/110385073?v=4" className="rounded-circle img-responsive img-fluid" />
                                            </div>
                                            <div className="col-sm-10">
                                                <div className="arrow-down d-none d-lg-block"></div>
                                                <h4><strong>Carlos Sánchez Yarga</strong></h4>
                                                <p className="testimonial_subtitle"><span>Web Developer</span><br></br>
                                                    <span>Factoría F5</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row p-4">
                                        <div className="t-card">
                                            <i className="fa fa-quote-left" aria-hidden="true"></i>
                                            <p className="lh-lg">He contratado los servicios de Minnie Mouse y he quedado encantada. Tiene una voz prácticamente idéntica y el precio ha sido bastante bajo. No obstante, ha tardado
                                                más de lo debido en enviarme el audio.</p>
                                            <i className="fa fa-quote-right" aria-hidden="true"></i><br></br>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-2 pt-4">
                                                <img src="https://avatars.githubusercontent.com/u/119872787?v=4" className="rounded-circle img-responsive img-fluid" />
                                            </div>
                                            <div className="col-sm-10">
                                                <div className="arrow-down d-none d-lg-block"></div>
                                                <h4><strong>Lucía Tirado</strong></h4>
                                                <p className="testimonial_subtitle"><span>
                                                    Web Developer</span><br></br>
                                                    <span>Factoría F5</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row p-4">
                                        <div className="t-card">
                                            <i className="fa fa-quote-left" aria-hidden="true"></i>
                                            <p className="lh-lg">He pagado al actor de voz de Shinchan y, sinceramente, a mí me sale mejor. También he de decir que únicamente le he pagado 10 euros por un vídeo de 2 minutos. No puedo quejarme.</p>
                                            <i className="fa fa-quote-right" aria-hidden="true"></i><br></br>
                                        </div>
                                        <div className="row text-lg-start">
                                            <div className="col-sm-2 pt-4 align-items-center">
                                                <img src="https://media.licdn.com/dms/image/D4E03AQFutZNir6jQZg/profile-displayphoto-shrink_800_800/0/1674639557932?e=1684972800&v=beta&t=G1jfvtgR04ebwhMRC8qvruLGckfyCM_VkL4U5VdsbsY" className="rounded-circle img-responsive img-fluid" />
                                            </div>
                                            <div className="col-sm-10">
                                                <div className="arrow-down d-none d-md-block"></div>
                                                <h4><strong>Pablo Pérez</strong></h4>
                                                <p className="testimonial_subtitle"><span>Percusionista</span><br></br>
                                                    <span>Factoría F5</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="controls push-right">
                            <a className="left fa fa-chevron-left text-white btn btn btn-outline-light" href="#carouselExampleCaptions"
                                data-bs-slide="prev"></a>
                            <a className="right fa fa-chevron-right text-white btn btn btn-outline-light" href="#carouselExampleCaptions"
                                data-bs-slide="next"></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

