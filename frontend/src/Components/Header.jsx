/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./Css/Header.css";
import { IoMenu } from "react-icons/io5";
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom';
import logoNDsolo from './assets/logoNDsolo.png'
import Logo from './assets/logo.png'

const Header = ({ showMenu, setShowMenu, isAuthenticated }) => {
  return (
    <div id="header">
      {showMenu}
      <div className="btnMenu" onClick={() => setShowMenu(!showMenu)}><IoMenu /></div>
      <div id="headerT">
        <img src={logoNDsolo} alt="logo" id='logo' />
        <img src={Logo} alt="logo" id='logoM' />
        <div className="headerText">
          Nova-Domus
        </div>
      </div>

      {/* Renderizado condicional: solo muestra el enlace de login si no está autenticado */}
      {!isAuthenticated && (
        <Link to='/login' id='loginHeader'>
          <div className="loginHeader">
            <LoginIcon /> Inicia Sesión
          </div>
        </Link>
      )}
    </div>
  );
};

export default Header;
