/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './Css/Footer.css';
import logo from './assets/logo.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    return (
        <div id="footer">
            <div id="logo"><img src={logo} alt="" /></div>
            <div id="texto">
                <div id="info">
                    <a href="#">Sobre Nosotros</a>
                </div>
                <div id="cont">
                    <a href="#">Contacto</a>
                </div>
                <div id="legal">
                    <a href="#">Terminos Legales</a>
                </div>
                <div id="redes">
                    <a href="#">Redes Sociales</a>
                    <div id="iconos">
                        <a href="#"><InstagramIcon/></a>
                        <a href="#"><XIcon/></a>
                        <a href="#"><FacebookIcon/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer