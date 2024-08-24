/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./Css/Login.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEye, FaEyeSlash   } from "react-icons/fa";
import { useState } from 'react';
import { Api } from '../lib/api';
import NoEmptyError from './NoEmptyError';

const Login = ({ setRoles }) => {
  const navigate = useNavigate();

  function login(evt) {
    evt.preventDefault();
    setError('');

    const body = {
      username: evt.target.username.value,
      password: evt.target.password.value,
    };
    
  
    Api.post(
      `login`, 
      {
      body,
      autoCheck: false
      }
    ).then(res => res.json())
      .then(json => {
        if (json.error) {
          setError(json.message || "Error desconocido") 
        } else if (json.authorizationToken) {
          const auth = 'Bearer ' + json.authorizationToken
          const roles = json.roles || []
          Api.defaultHeaders.Authorization = auth
          
          sessionStorage.setItem('Authorization', auth);
          sessionStorage.setItem('roles', JSON.stringify(roles));

          console.log(json.authorizationToken)
          setRoles(roles)
          navigate('/landing')
        }  else {setError(json.message || "Error desconocido")}   
      })
      .catch(error => { 
        if (error.message) {
          setError(String(error))
        }
        })
  }
  const [error, setError] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  return (
    <div id="loginBg">
      <div id="login">
        <div id="loginHead">
          <div id="alert"><NoEmptyError msg={ error } /></div>
          <h1>Inicia Sesion</h1>
        </div>
        <form onSubmit={ login }>
          <div id="inputBox">
            <label for="user" class="label" id="user">Usuario</label>
            <input type="text" placeholder='Ingrese su usuario' name="username" required />
            <div className="icon"><FaUser/></div>
          </div>
          <div id="inputBox">
            <label for="pass" class="label">Contraseña</label>
            <input type={showPwd ? 'text' : 'password'} placeholder='Ingrese su contraseña' name="password" required />
            <div className="icon" onClick={() => setShowPwd(!showPwd)}>{showPwd ? <FaEye className='iconPwd'/> : <FaEyeSlash className='iconPwd'/>}</div>
          </div>

          <div id="remember-forgot">
            <label><input type="checkbox" />Recordarme</label>
          </div>

          <button type="submit" id="btnlogin">Iniciar Sesion</button>

          <div id="new-account">
            <label>Nuevo Usuario?</label>
          </div>

          <Link to='/register'><button type="submit" id="btnlogin">Registrarme</button></Link>
        
        </form>
      </div>
    </div>
  )
}

export default Login
