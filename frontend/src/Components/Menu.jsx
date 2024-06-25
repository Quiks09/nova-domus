/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Menu = ({showMenu}) => {
  return (
    <div className="mainMenu" style={{display: (showMenu) ? "" : 'none'}}>
      <div id="menuOpts">
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Juegos</a></li>
          <li><a href="#">Opcion3</a></li>
          <li><a href="#">Opcion4</a></li>
          <li><a href="#">Opcion5</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Menu
