/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Css/Menu.css';
import { Link } from 'react-router-dom';

const Menu = ({showMenu, roles}) => {
  const items = [
    {
      key: 'landing',
      to: 'landing',
      label: 'Inicio',
      roles: ['admin', 'user', ''],
    },

    {
      key: 'user-list',
      to: 'user-list',
      label: 'Usuarios',
      roles: ['admin'],
    },

    {
      key: 'inmuebles',
      to: 'inmuebles',
      label: 'Inmuebles',
      roles: ['admin', 'user'],
    },

    {
      key: 'vehiculos',
      to: 'vehiculos',
      label: 'Vehiculos',
      roles: ['admin', 'user'],
    },

    {
      key: 'favoritos',
      to: 'favoritos',
      label: 'Favoritos',
      roles: ['admin', 'user'],
    },

    {
      key: 'mi_cuenta',
      to: 'mi_cuenta',
      label: 'Mi Cuenta',
      roles: ['admin', 'user'],
    }

  ];

  let filteredItems
  if (!roles.length) {
    filteredItems = items.filter(item => !item.roles.length);
  } else {
    filteredItems = items.filter(item => item.roles.filter(role=> roles.includes(role)).length)
  }

  const lista = filteredItems.map(item => <li key={ item.key }><Link to={ item.to }>{ item.label }</Link></li>)

  return (
    <div className="mainMenu" style={{display: (showMenu) ? "" : 'none'}}>
      <div id="menuOpts">
        <ul>
          { lista }
        </ul>
      </div>
    </div>
  )
}


export default Menu
