import React from 'react'


const Login = () => {
  return (
    <div>
        <ul>
            <li>
                <label>Username</label>
                <input name="username " />
            </li>
            <li>
                <label>Password</label>
                <input name="password " />
            </li>
            <button>Login</button>
        </ul>
    </div>
  )
}

export default Login
