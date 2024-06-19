/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { FaUser, FaEye, FaEyeSlash   } from "react-icons/fa";
const urlBase = 'http://localhost:4000/api'


function login(evt) {
  evt.preventDefault();

  const data = {
    username: evt.target.username.value,
    password: evt.target.password.value,
  };
  


  fetch(
    `${urlBase}/login`, 
    {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    }
  ).then(res => res.json())
    .then(json => console.log(json.authorizationToken||json.message))
    .catch(err => alert(err))
}

const Login = () => {
  return (
    <div id="login">
      <h1>Inicia Sesion</h1>
      <form onSubmit={ login }>
        <div id="inputBox">
          <label for="user" class="label" id="user">Usuario</label>
          <input type="text" placeholder='Ingrese su usuario' name="username" required />
          <FaUser className='icon' />
        </div>
        <div id="inputBox">
          <label for="pass" class="label">Contraseña</label>
          <input type='password' placeholder='Ingrese su contraseña' name="password" required />
          <FaEye  className='icon' />
        </div>

        <div id="remember-forgot">
          <label><input type="checkbox" />Recordarme</label>
        </div>

        <button type="submit" id="btnlogin">Iniciar Sesion</button>

      </form>
    </div>
  )
}

export default Login
