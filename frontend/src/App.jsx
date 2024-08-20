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
import Footer from './Components/Footer';
import ModalMessage from './Components/ModalMessage';
import { Api } from './lib/api';

const Body = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [roles, setRoles]= useState(['admin'])
  const [message, setMessage] = useState('')

  Api.setMessageForAutoCheck = setMessage;

  return(
    <div>
      <ModalMessage message={ message } onClose={() => setMessage('')}>
        
      </ModalMessage>
    <Header setShowMenu={setShowMenu} showMenu = {showMenu}/>
      <div id="body">
        <Menu showMenu = {showMenu} roles = { roles }/>
          <Routes>
            <Route path="/login" element={<Login setRoles={ setRoles }/>} />

            <Route path="" element={<Landing/>} />
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

      <Footer>
        
      </Footer>
    </div>
  );
}

export default App;
