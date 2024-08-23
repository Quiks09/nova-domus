/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Api } from "../lib/api";
import './Css/User_list.css';
import { Link } from "react-router-dom";
import ModalYesNo from "./ModalYesNo";
import EditIcon from '@mui/icons-material/Edit';
import ModalMessage from "./ModalMessage";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

const UserList = () => {
    let [filas, setFilas] = useState([]);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [deleteUuid, setDeleteUuid] = useState('');

    useEffect(() => {
        Api.get('user')
            .then(res => res.json())
            .then(userList => {
                if (userList.error) { return };
                const filas = userList?.map(user => (
                    <tr key={user.uuid} className="table-row">
                        <td className="user-info">
                            <img src={user.avatar} alt={`${user.displayName} avatar`} />
                            <div className="user-details">
                                <div className="user-name">{user.displayName}</div>
                                <div className="user-email">{user.username}</div>
                            </div>
                        </td>
                        <td>{user.roles}</td>
                        <td>
                            <span className={`status ${user.isEnabled ? 'active' : 'inactive'}`}>
                                {user.isEnabled ? 'Activo' : 'Inactivo'}
                            </span>
                        </td>
                        <td className="actions">
                            <Link to={'/user-form/' + user.uuid}>
                                <EditIcon id='edit' />
                            </Link>
                            <a href="#" onClick={e => deleteUser(e, user.uuid)}>
                                <PersonRemoveIcon id='delete'/>
                            </a>
                        </td>
                    </tr>
                ))
                setFilas(filas);
            })
            .catch(e => { });
    }, []);

    function deleteUser(e, uuid) {
        e.preventDefault();
        setDeleteUuid(uuid);
        setShowDeleteConfirmation(true);
    }
    
    function deleteCurrentUser() {

        Api.delete('user', { search: {uuid: deleteUuid}})
            .then(() => {
                alert('Usuario Eliminado!');
            })
            .catch(e => {})
    }


    return (
        <div className="hero">
             <ModalYesNo message='Seguro desea eliminar el Usuario?'
                 show={showDeleteConfirmation} 
                 onYes={deleteCurrentUser} 
                 onNo={() => setShowDeleteConfirmation(false)} />
            <div className="table-container">
                <div className="header">
                    <h2>Lista de Usuarios</h2>
                    <Link to="/user-form">
                        <PersonAddAlt1Icon/>
                    </Link>
                </div>
                <table className="user-table">
                    <thead>
                        <tr>
                            <th>Usuario</th>
                            <th>Roles</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filas}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UserList;
