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
      <form onSubmit={ login }>
        <ul>
            <li>
                <label>Username</label>
                <input name="username" />
            </li>
            <li>
                <label>Password</label>
                <input name="password" />
            </li>
            <button>Login</button>
        </ul>
      </form>
    </div>
  )
}

export default Login
