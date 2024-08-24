/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./Css/Login.css";
import { Link, useParams } from 'react-router-dom';
import { FaUser, FaEye, FaEyeSlash   } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { Api } from '../lib/api';

const Register = () => {
  const {uuid} = useParams();
  const [username, setUsername] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [password, setPassword] = useState('');
  const [isEnabled, setIsEnabled] = useState(true);
  const [roles, setRoles] = useState('user');

  function updateRoles(e) {
      const options = [...e.target.selectedOptions];
      const values = options.map(option => option.value);
      setRoles(values)
  }

  function submit(e) {
      e.preventDefault();

      const body = {
          username,
          displayName,
          password,
          isEnabled,
          roles: 'user',
      };
      
      let method = uuid ? 'PATCH' : 'POST';

      if (uuid) {
          body.uuid = uuid;
      }

      Api.fetch('user', { method, body })
          .then(() => {
              alert('Cuenta Creada!');
          })
          .catch(e => {})
  }

  useEffect(() => {
      if (!uuid) {
          return;
      }

      Api.get('user', { search: {uuid} })
          .then(res => res.json())
          .then(UserList => {
              if (!UserList.length) {
                  return;
              }

              const user = UserList[0];

              setUsername(user.username);
              setDisplayName(user.displayName);
              setIsEnabled(user.isEnabled);
              setRoles(user.roles.split(',').map(i => i.trim()).filter(i => i));
          })
          .catch(e => {})
  }, []);

  const [showPwd, setShowPwd] = useState(false);
  return (
    <div id="loginBg">
      <div id="login">
        <div id="loginHead">
          <h1>Crear Cuenta</h1>
        </div>
        <form onSubmit={ submit }>
          <div id="inputBox">
            <label for="user" class="label" id="user">Usuario</label>
            <input type="text" placeholder='Ingrese su usuario' name="username" required value={username} onChange={e => setUsername(e.target.value)} />
            <div className="icon"><FaUser/></div>
          </div>
          <div id="inputBox">
            <label for="user" class="label" id="user">Nombre</label>
            <input type="text" placeholder='Ingrese su Nombre Completo' name="displayName" required value={displayName} onChange={e => setDisplayName(e.target.value)} />
          </div>
          <div id="inputBox">
            <label for="pass" class="label">Contraseña</label>
            <input type={showPwd ? 'text' : 'password'} placeholder='Ingrese su contraseña' name="password" required value={password} onChange={e => setPassword(e.target.value)}/>
            <div className="icon" onClick={() => setShowPwd(!showPwd)}>{showPwd ? <FaEye className='iconPwd'/> : <FaEyeSlash className='iconPwd'/>}</div>
          </div>
          <div id="inputBox">
            <label for="pass" class="label">Contraseña</label>
            <input type={showPwd ? 'text' : 'password'} placeholder='Repita su contraseña' name="password" required value={password} onChange={e => setPassword(e.target.value)} />
            <div className="icon" onClick={() => setShowPwd(!showPwd)}>{showPwd ? <FaEye className='iconPwd'/> : <FaEyeSlash className='iconPwd'/>}</div>
          </div>
          <li className="field" style={{display:'none'}}>
                            <label htmlFor="isEnabled">Habilitado</label>
                            <input id="isEnabled" name="isEnabled" type="checkbox" checked={isEnabled} onChange={e => setIsEnabled(e.target.checked)} />
                        </li>
                        <li className="field" style={{display:'none'}}>
                            <label htmlFor="roles">Roles</label>
                            <select id="roles" name="roles" multiple="multiple" value={roles} onChange={(updateRoles)}>
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                            </select>
                        </li>

          <button type="submit" id="btnlogin">Confirmar</button>

          <Link to={-1}><button type="submit" id="btnlogin">Atras</button></Link>
        
        </form>
      </div>
    </div>
  )
}

export default Register
