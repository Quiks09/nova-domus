import './App.css';
import Header from './Components/Header';
import Menu from './Components/Menu';
import { useState } from 'react';
import Login from './Components/Login';
import { Routes, Route } from 'react-router-dom';
import Landing from './Components/Landing';
import UserList from './Components/User_list';
import Inmuebles from './Components/Inmuebles';
import Vehiculos from './Components/Vehiculos';
import Favoritos from './Components/Favoritos';
import MiCuenta from './Components/Mi_cuenta';

const Body = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [roles, setRoles]= useState(['admin'])
  return(
    <div>
    <Header setShowMenu={setShowMenu} showMenu = {showMenu}/>
      <div id="body">
        <Menu showMenu = {showMenu} roles = { roles }/>
          <Routes>
            <Route path="/login" element={<Login setRoles={ setRoles }/>} />

            <Route path="/landing" element={<Landing/>} />
            <Route path="/user-list" element={<UserList/>} />
            <Route path="/inmuebles" element={<Inmuebles/>} />
            <Route path="/vehiculos" element={<Vehiculos/>} />
            <Route path="/favoritos" element={<Favoritos/>} />
            <Route path="/mi_cuenta" element={<MiCuenta/>} />
          </Routes>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Body>

      </Body>
    </div>
  );
}

export default App;
