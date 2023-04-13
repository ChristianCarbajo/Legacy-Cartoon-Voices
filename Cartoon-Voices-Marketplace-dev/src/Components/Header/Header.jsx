import Seeker from "../Seeker/Seeker";
import "./Header.css"
import logo from "../../assets/img/Img1.png"

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img className="navbar-brand" src={logo} style={{height:"7vh", borderRadius:"0" }}/>
          <a className="navbar-brand" href="/">Cartoon Voices</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 pe-5">
              <li className="nav-item text-dark">
                <a className="nav-link active" aria-current="page" href="/">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="/create">Publica tu anuncio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="/cards">Anuncios</a>
              </li>
              
            </ul>
            <Seeker/>
          </div>
        </div>
      </nav>
      <div className="navbar-bottom-line"></div>
    </div>
  );
}

export default Header;