import React, { useEffect, useState } from "react";
import { Api } from "../lib/api";
import './Css/User_list.css';
import { Link } from "react-router-dom";

const UserList = () => {
    let [filas, setFilas] = useState([]);

useEffect(() =>    {    Api.get('user',)
        .then(res => res.json())
        .then (userList => {
            if (userList.error) {return};
            const filas = userList?.map(user => (
                <tr>
                    <td>{user.username}</td>
                    <td>{user.displayName}</td>
                    <td>{user.isEnabled ? "Si": "No"}</td>
                    <td>{user.roles}</td>
                    <td><a href='#'>Modificar</a></td>
                </tr>
            ))
            setFilas(filas)
        })}, [])

return (
    <div className="bgtabla">
        <table>
            <thead>
                <tr>
                    <th>Usuario</th>
                    <th>Nombre</th>
                    <th>Habilitado</th>
                    <th>Roles</th>
                </tr>
            </thead>
            <tbody>
                {filas}
            </tbody>
        </table>

        <div id="tbFooter">
            <Link to="/userForm"> Agregar </Link>
            <Link to="/userForm"> Modificar </Link>
            <Link to="/userForm"> Eliminar </Link>
        </div>
    </div>

)

}
export default UserList;