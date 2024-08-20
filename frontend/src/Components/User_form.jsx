import { json, Link } from 'react-router-dom';
import IconUser from '@mui/icons-material/Person';
import IconCancel from '@mui/icons-material/Cancel';
import IconSubmit from '@mui/icons-material/Send';
import { useState } from 'react';
import { Api } from '../lib/api';


const UserForm = () => {
    const [username, setUsername] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [password, setPassword] = useState('');
    const [isEnabled, setIsEnabled] = useState(true);
    const [roles, setRoles] = useState([]);

    function updateRoles(e) {
        const options = [...e.target.selectedOptions];
        const values = options.map(option => option.value);
    }

    function submit(e) {
        e.preventDefault();

        const body = {
                username,
                displayName,
                password,
                isEnabled,
                roles,
            };
    
    

        Api.post('user', { body,  })
            .then(() => {
                alert('Usuario Creado!');
            })
            .catch(e => {})
        }
    
        return (
        <div id="user" className="form">
            <h2>
            <IconUser className="icon" />
            Usuario
            </h2>
            <form onSubmit={submit}>
            <ul className="fields">
                    <li className="field">
                        <label htmlFor="username">Nombre de usuario</label>
                        <input id="username" name="username" value={username} onChange={e => setUsername(e.target.value)}/>
                    </li>
                    <li className="field">
                        <label htmlFor="displayName">Nombre completo</label>
                        <input id="displayName" name="displayName" value={displayName} onChange={e => setDisplayName(e.target.value)}/>
                    </li>
                    <li className="field">
                        <label htmlFor="password">Contraseña</label>
                        <input id="password" name="password" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    </li>
                    <li className="field">
                        <label htmlFor="isEnabled">Habilitado</label>
                        <input id="isEnabled" name="isEnabled" type="checkbox" checked={isEnabled} onChange={e => setIsEnabled(e.target.checked)}/>
                    </li>
                    <li className="field">
                    <label htmlFor="roles">Roles</label>
                    <select id="roles" name="roles" multiple="multiple" defaultValue={roles} onChange={(updateRoles)}>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                    </select>
                     </li>
                    <li className="field center">
                        <button type="submit"><IconSubmit className="icon submit" />Enviar</button>
                        <Link to={-1}><button ><IconCancel className="icon cancel" />Cancelar</button></Link>
                    </li>
            </ul>
        </form>
        </div>
    )
}

export default UserForm