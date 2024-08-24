/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./Css/Header.css";
import { FaUser } from "react-icons/fa";
import { IoMenu  } from "react-icons/io5";
import { Link } from 'react-router-dom';
import logoNDsolo from './assets/logoNDsolo.png'

const header = ({showMenu, setShowMenu}) => {
  return (
    <div id="header">
      {showMenu}
      <div className="btnMenu" onClick={() => setShowMenu(!showMenu)}><IoMenu/></div>
      <div id="headerT">
        <img src={logoNDsolo} alt="logo" />
        <div className="headerText">
          Nova-Domus
        </div>
      </div>
      <div className="loginHeader">
        <Link to= "/login"><FaUser/> Inicia Sesion</Link>
      </div>
    </div>
  )
}

export default header
