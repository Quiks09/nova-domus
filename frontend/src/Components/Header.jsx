/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { FaUser } from "react-icons/fa";
import { IoMenu  } from "react-icons/io5";
import { Link } from 'react-router-dom';

const header = ({showMenu, setShowMenu}) => {
  return (
    <div id="header">
      {showMenu}
      <div className="btnMenu" onClick={() => setShowMenu(!showMenu)}><IoMenu/></div>
      <div className="headerT">Tu Lugar SJ</div>
      <div className="loginHeader">
        <Link to= "login"><FaUser/> Inicia Sesion</Link>
      </div>
    </div>
  )
}

export default header
