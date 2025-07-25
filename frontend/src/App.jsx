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
import Favoritos from './Components/Favoritos';
import MiCuenta from './Components/Mi_cuenta';
import Footer from './Components/Footer';
import ModalMessage from './Components/ModalMessage';
import { Api } from './lib/api';
import UserForm from './Components/User_form';
import UserFormEdit from './Components/User_form_edit';
import PublicarInmueble from './Components/PublicarInmueble';
import Inquilinos from './Components/Inquilinos';
import InquilinoForm from './Components/Inquilinos_form';
import InquilinoFormEdit from './Components/Inquilinos_form_edit';

const Body = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [roles, setRoles] = useState(['']);
  const [message, setMessage] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado de autenticación

  useEffect(() => {
    const auth = sessionStorage.getItem('Authorization');
    if (auth) {
      Api.defaultHeaders.Authorization = auth;
      const roles = JSON.parse(sessionStorage.getItem('roles') ?? '[]');
      setRoles(roles);
      setIsAuthenticated(true); 
    } else {
      setIsAuthenticated(false); 
    }
    Api.setMessageForAutoCheck = setMessage;
  }, []);

  return (
    <div>
      <ModalMessage message={message} onClose={() => setMessage('')} />
      <Header 
        setShowMenu={setShowMenu} 
        showMenu={showMenu} 
        isAuthenticated={isAuthenticated} 
      />
      <div id="body">
        <Menu showMenu={showMenu} roles={roles} />
        <Routes>
          <Route path="/login" element={<Login setRoles={setRoles} setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Landing />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/user-list" element={<UserList />} />
          <Route path="/user-form" element={<UserForm />} />
          <Route path="/user-form/:uuid" element={<UserFormEdit />} />
          <Route path="/inquilinos" element={<Inquilinos />} />
          <Route path="/tenant-form" element={<InquilinoForm />} />
          <Route path="/tenant-form/:uuid" element={<InquilinoFormEdit />} />
          <Route path="/inmuebles" element={<Inmuebles />} />
          <Route path="/publicar-inmueble" element={<PublicarInmueble />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/mi_cuenta" element={<MiCuenta />} />
        </Routes>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Body />
      <Footer />
    </div>
  );
}

export default App;
