import React from 'react'

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
        <div id="titleLog"><h1>Log Into Your Account</h1></div>
      <form onSubmit={ login }>
        <ul>
            <li>
                <input placeholder='Username' name="username" />
            </li>
            <li>
                <input type='password' placeholder='Password' name="password" />
            </li>
            <button id="btnlogin">Login</button>
        </ul>
      </form>
    </div>
  )
}

export default Login
