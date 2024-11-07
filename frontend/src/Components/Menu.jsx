import React from 'react';
import './Css/Menu.css';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ApartmentIcon from '@mui/icons-material/Apartment';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; 

const Menu = ({ showMenu, roles }) => {
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
      roles: ['admin', 'user', ''],
    },
    {
      key: 'vehiculos',
      to: 'vehiculos',
      label: 'Vehiculos',
      roles: ['admin', 'user', ''],
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
      label: 'Cuenta',
      roles: ['admin', 'user'],
    }
  ];

  let filteredItems;
  if (!roles.length) {
    filteredItems = items.filter(item => !item.roles.length);
  } else {
    filteredItems = items.filter(item => item.roles.filter(role => roles.includes(role)).length);
  }

  const lista = filteredItems.map(item => (
    <li key={item.key}>
      <Link to={item.to}>
        {item.key === 'landing' && <HomeIcon style={{ marginRight: '5px' }} />}
        {item.key === 'user-list' && <PeopleAltIcon style={{ marginRight: '5px' }} />}
        {item.key === 'inmuebles' && <ApartmentIcon style={{ marginRight: '5px' }} />}
        {item.key === 'vehiculos' && <DirectionsCarIcon style={{ marginRight: '5px' }} />}
        {item.key === 'favoritos' && <FavoriteIcon style={{ marginRight: '5px' }} />}
        {item.key === 'mi_cuenta' && <AccountCircleIcon style={{ marginRight: '5px' }} />}
        <span className="menu-item-text">{item.label}</span>
      </Link>
    </li>
  ));

  return (
    <div className="mainMenu" style={{ display: showMenu ? '' : 'none' }}>
      <div id="menuOpts">
        <ul>
          {lista}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
