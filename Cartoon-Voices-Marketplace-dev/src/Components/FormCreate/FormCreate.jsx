import CallAxios from "../../Services/CallAxios";
import { useState } from "react";
import { Link } from "react-router-dom";
import InputPhoto from "../../Components/InputPhoto/InputPhoto";


export default function FormCreate() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [email, setEmail] = useState('');
    const [price, setPrice] = useState('');
    const [urlImg, setUrlImg] = useState("");


    const handleSubmit = (event) => {
        const data = {
            name: name,
            category: category,
            email: email,
            price: price,
            urlImg: urlImg
        };

        CallAxios().createVoice(data)

    }
    return (

        <div style={{ background: "rgba(219, 171, 236, 1)", padding: "5%", borderRadius: "10px" }} className="container d-flex justify-content-center mt-5">
            <div>
                <form className="form-container">
                    <h1 className="d-flex justify-content-center">Publica tu anuncio</h1>
                    <div className="mb-3">
                        <input required type="text" className="form-control" id="name"
                            placeholder="Nombre y Apellidos" onChange={(e) => setName(e.target.value)}></input>
                    </div>
                    <div class="mb-3">
                        <select required className="form-control" id="category" onChange={(e) => setCategory(e.target.value)}>
                            <option value="selected">Categoría</option>
                            <option value="Animación">Animación</option>
                            <option value="Cine">Cine</option>
                            <option value="Famosos">Famosos</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <input required type="text" className="form-control"
                            placeholder="Escribe aquí tu mail"
                            id="email" onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <div className="mb-3">
                        <input required className="form-control" placeholder="Introduce un importe en euros"
                            id="price" onChange={(e) => setPrice(e.target.value)}></input>
                    </div>
                    <InputPhoto setUrlImg={setUrlImg} />
                    <Link to="/cards">
                        <button onClick={() => handleSubmit()} type="submit" className="btn btn-dark mt-3">Enviar</button>
                    </Link>
                    <button type="button" className="btn btn-dark ms-2 mt-3">Borrar</button>
                </form>

            </div>
        </div>
    );
}
