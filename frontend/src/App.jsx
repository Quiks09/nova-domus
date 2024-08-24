import './App.css';
import Header from './Components/Header';
import Menu from './Components/Menu';
import { useEffect, useState } from 'react';
import Login from './Components/Login';
import Register from './Components/Register';
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
import UserForm from './Components/User_form';
import UserFormEdit from './Components/User_form_edit';

const Body = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [roles, setRoles]= useState(['admin'])
  const [message, setMessage] = useState('')
  
  useEffect(()=> {
    const auth = sessionStorage.getItem('Authorization');
    if (auth) {
      Api.defaultHeaders.Authorization = auth
      const roles = JSON.parse(sessionStorage.getItem('roles') ?? '[]');
      setRoles(roles)
    }
    Api.setMessageForAutoCheck = setMessage;
  }, []);


  return(
    <div>
      <ModalMessage message={ message } onClose={() => setMessage('')}>
        
      </ModalMessage>
    <Header setShowMenu={setShowMenu} showMenu = {showMenu}/>
      <div id="body">
        <Menu showMenu = {showMenu} roles = { roles }/>
          <Routes>
            <Route path="/login" element={<Login setRoles={ setRoles }/>} />
            <Route path="/register" element={<Register/>} />

            <Route path="" element={<Login setRoles={ setRoles }/>} />
            <Route path="/landing" element={<Landing/>} />
            <Route path="/user-list" element={<UserList/>} />
            <Route path="/user-form" element={<UserForm/>} />
            <Route path="/user-form/:uuid" element={<UserFormEdit/>} />
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
