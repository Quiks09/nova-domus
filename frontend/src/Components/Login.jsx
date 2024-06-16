/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { FaUser, FaLock } from "react-icons/fa";
const urlBase = 'http://localhost:4000/api'


function login(evt) {
  evt.preventDefault();

  const data = {
    username: evt.target.username.value,
    password: evt.target.password.value,
  };
  
  console.log(data)


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
    .then(json => console.log(json.authorizationToken))
    .catch(err => alert(err))
}

const Login = () => {
  return (
    <div id="login">
      <h1>Inicia Sesion</h1>
      <form onSubmit={ login }>
        <div id="inputBox">
          <input type="text"placeholder='Usuario' name="username" required />
          <FaUser className='icon' />
        </div>
        <div id="inputBox">
          <input type='password' placeholder='Contraseña' name="password" required />
          <FaLock className='icon' />
        </div>

        <div id="remember-forgot">
          <label><input type="checkbox" />Recordarme</label>
          <a href="#">Olvidaste tu contraseña?</a>
        </div>

        <button type="submit" id="btnlogin">Iniciar Sesion</button>

        <div id="register">
          <p>Usuario nuevo? <a href="#">Registrarse</a></p>
        </div>
      </form>
    </div>
  )
}

export default Login
