import React from "react";
import '../css/footer.css'
import { Link as LinkRouter } from "react-router-dom"
import logo from '../images/logolotus.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { blue, pink, green } from "@mui/material/colors";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


function Footer() {

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <footer>

            <LinkRouter className="divlogof" to="/home" onClick={scrollUp}>
                <img src={logo} alt="imagen logo" className='imgfooter' />
                <h2>Aesthethic</h2>
            </LinkRouter>

            <div className="navFooter col-4">
                <ul className="ul-footer">
                    <LinkRouter to="/home" onClick={scrollUp}>
                        <li>
                            inicio
                        </li>
                    </LinkRouter>
                    <LinkRouter to="/products" onClick={scrollUp}>
                        <li>
                            Productos
                        </li>
                    </LinkRouter>
                    <LinkRouter to="/treatments" onClick={scrollUp}>
                        <li>
                            Tratamientos
                        </li>
                    </LinkRouter>
                    <LinkRouter to="/contact" onClick={scrollUp}>
                        <li>
                            Contacto
                        </li>
                    </LinkRouter>
                    <LinkRouter to="/news" onClick={scrollUp}>
                        <li>
                            Novedades
                        </li>
                    </LinkRouter>
                    <LinkRouter to="/about" onClick={scrollUp}>
                        <li>
                            Nosotros
                        </li>
                    </LinkRouter>
                </ul>
            </div>

            <div className="redesfooter">
                <h5>Seguinos</h5>
                <div className="footer-icon-div">
                    <a href="https://facebook.com"><FacebookIcon sx={{ fontSize: 40, color: blue[600] }} /></a>
                    <a href="https://instagram.com"><InstagramIcon className="instagramIcon" sx={{ fontSize: 40, color: pink[700] }} /></a>
                    <a href="https://whatsapp.com"><WhatsAppIcon sx={{ fontSize: 40, color: green[400] }} /></a>
                </div>
            </div>

        </footer>
    )
}

export default Footer

