import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import "./Footer.css"


export default function Footer() {
    return (
        <footer className="footer">
            <div>
                <hr className="footer-line"></hr>
            </div>
            <div className="footer-icon-container">
                <AiFillTwitterCircle className="icon" />
                <AiFillInstagram className="icon" />
                <AiFillFacebook className="icon" />
            </div>
        </footer>
    )
}