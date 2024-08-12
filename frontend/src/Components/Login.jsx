/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { FaUser, FaEye, FaEyeSlash   } from "react-icons/fa";
import { useState } from 'react';
import { Api } from '../lib/api';
import NoEmptyError from './NoEmptyError';

const Login = ({ setRoles }) => {
  function login(evt) {
    evt.preventDefault();
    setError('');

    const data = {
      username: evt.target.username.value,
      password: evt.target.password.value,
    };
    
  
    Api.post(
      `login`, 
      {
      body: JSON.stringify(data)
      }
    ).then(res => res.json())
      .then(json => console.log(json.authorizationToken||json.message))
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
        <div id="alert"><NoEmptyError msg={ error } /></div>
        <h1>Inicia Sesion</h1>
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
        
        </form>
      </div>
    </div>
  )
}

export default Login
