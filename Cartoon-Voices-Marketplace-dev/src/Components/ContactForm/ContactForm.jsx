
export default function ContactForm() {
    return (
        <form className="mi-formGen" id="mi-form" action="https://formspree.io/f/mrgvlkdq" method="POST" style={{ marginTop: "8vh", marginLeft: "6vw", marginRight: "6vw" }}>
            <div className="container-fluid text-white py-5" style={{ borderRadius: "50px", background: "rgba(219, 171, 236, 1)" }}>
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <h4 className="text-center text-warning mb-5 text-black" style={{ fontSize: "3rem" }}>Contacto</h4>
                        <div className="mb-4">
                            <label for="email" className="form-label fs-5 mx-1 text-black">Email:</label>
                            <input type="email" name="email" className="form-control form-control-lg" placeholder="Escribe tu email aquí" />
                        </div>
                        <div className="mb-4">
                            <label for="message" className="form-label fs-5 mx-1 text-black">Mensaje:</label>
                            <textarea className="form-control" id="message" name="message" rows="5" placeholder="Escribe tu mensaje aquí" style={{ borderRadius: "10px" }}></textarea>
                        </div>
                        <button className="btn btn-dark btn-mg rounded-pill text-white">Enviar</button>
                    </div>
                </div>
            </div>
        </form>
    )
}