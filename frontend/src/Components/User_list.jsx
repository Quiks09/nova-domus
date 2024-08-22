import React, { useEffect, useState } from "react";
import { Api } from "../lib/api";
import './Css/User_list.css';
import { Link } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import ModalYesNo from "./ModalYesNo";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const UserList = () => {
    let [filas, setFilas] = useState([]);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [deleteUuid, setDeleteUuid] = useState('');

useEffect(() =>    {    Api.get('user',)
        .then(res => res.json())
        .then (userList => {
            if (userList.error) {return};
            const filas = userList?.map(user => (
                <tr>
                    <td id="tdUser">{user.username}</td>
                    <td>{user.displayName}</td>
                    <td id="tdIsEnabled">{user.isEnabled ? <CheckCircleIcon id= "check"></CheckCircleIcon>: <CancelIcon id= "notCheck"></CancelIcon>}</td>
                    <td id="tdRol">{user.roles}</td>
                    <td id="tdEdit"><Link to={'/user-form/' + user.uuid}> <EditIcon></EditIcon> </Link></td>
                    <td id="tdRem"> <a href="#" onClick={e => deleteUser(e, user.uuid)}><PersonRemoveIcon></PersonRemoveIcon></a></td>
                </tr>
            ))
            setFilas(filas)
            
        })
        .catch(e =>{});
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
    <div className="bgtabla">
        <ModalYesNo message='Seguro desea eliminar el Usuario?'
        show={showDeleteConfirmation} 
        onYes={deleteCurrentUser} 
        onNo={() => setShowDeleteConfirmation(false)} />
        <table>
            <thead>
                <tr>
                    <th id="thUser">Usuario</th>
                    <th id="thNombre">Nombre</th>
                    <th id="thIsEnabled">Habilitado</th>
                    <th id="thRol">Roles</th>
                    <div id="tbAddUser">
                        <Link to="/user-form"> <PersonAddAlt1Icon></PersonAddAlt1Icon> </Link>
                    </div>
                </tr>
            </thead>
            <tbody>
                <div className="filas">{filas}</div>
            </tbody>
        </table>

    </div>

)

}
export default UserList;