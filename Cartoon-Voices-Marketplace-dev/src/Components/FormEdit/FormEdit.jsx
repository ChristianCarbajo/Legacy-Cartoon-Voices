import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CallAxios from "../../Services/CallAxios";
import { Link } from "react-router-dom";
import InputPhoto from "../../Components/InputPhoto/InputPhoto";


export default function FormEdit() {

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [email, setEmail] = useState("");
    const [price, setPrice] = useState("");
    const [voice, setVoice] = useState("");
    const [urlImg, setUrlImg] = useState("");
    const { id } = useParams();

    const handleUpdate = (id) => {
        CallAxios().getVoicesById(id)
            .then(response => {
                setVoice(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }
    useState(() => {
        handleUpdate();
    })

    const handleDelete = (id) => {
        CallAxios().deleteVoice(id)
        alert("la publicación ha sido eliminada")
        
    }

    useEffect(() => {
        handleUpdate(id)

    });
    const handleSubmit = (event) => {
        const data = {
            name: name || voice.name,
            category: category || voice.category,
            email: email || voice.email,
            price: price || voice.price,
            urlImg: urlImg || voice.urlImg,
            id: id
        }

        CallAxios().updateVoice(data)

    }
    return (
        <div style={{ background: "rgba(219, 171, 236, 1)", padding: "5%", borderRadius: "10px" }} className="container d-flex justify-content-center mt-5">
            <div>
                <form name="datos" className="form-container">
                    <h1 className="d-flex justify-content-center">Modifica tu anuncio</h1>
                    <div className="mb-3">
                        <input required type="text" className="form-control" id="name"
                            placeholder="Nombre y Apellidos" onChange={(e) => setName(e.target.value)} defaultValue={voice.name}></input>
                    </div>
                    <div className="mb-3">
                        <select required className="form-control" id="category" onChange={(e) => setCategory(e.target.value)} defaultValue={voice.category}>
                            <option value="" disabled="disabled">Categoría</option>
                            <option value="Animación">Animación</option>
                            <option value="Cine">Cine</option>
                            <option value="Famosos">Famosos</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <input required type="text" className="form-control"
                            placeholder="Escribe aquí tu mail"
                            id="email" onChange={(e) => setEmail(e.target.value)} defaultValue={voice.email}></input>
                    </div>
                    <div className="mb-3">
                        <input required className="form-control" placeholder="Introduce un importe en euros"
                            id="price" onChange={(e) => setPrice(e.target.value)} defaultValue={voice.price}></input>
                    </div>
                    <InputPhoto setUrlImg={setUrlImg} />
                    <Link to="/cards">
                        <button onClick={() => handleSubmit()} type="button" className="btn btn-dark ms-2 mt-3">Actualizar</button>
                    </Link>
                    <Link to="/cards">
                        <button type="button" onClick={() => handleDelete(id)} className="btn btn-dark ms-2 mt-3">Eliminar</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}


