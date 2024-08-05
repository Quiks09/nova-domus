/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Menu = ({showMenu}) => {
  return (
    <div className="mainMenu" style={{display: (showMenu) ? "" : 'none'}}>
      <div id="menuOpts">
        <ul>
          <li><a href="landing">Inicio</a></li>
          <li><a href="inmuebles">Inmuebles</a></li>
          <li><a href="vehiculos">Vehiculos</a></li>
          <li><a href="favoritos">Favoritos</a></li>
          <li><a href="cuenta">Mi Cuenta</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Menu
