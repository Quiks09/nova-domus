import React, { useState } from "react";
import { Api } from "../lib/api";
import { Link } from "react-router-dom";

const UserList = () => {
    let [filas, setFilas] = useState([]);

    Api.get('user',)
    .then(res => res.json())
    .then (UserList => {
        filas = UserList.map(user => (
            <tr>
                <td>{user.username}</td>
                <td>{user.displayName}</td>
                <td>{user.isEnabled ? "Si": "No"}</td>
                <td>{user.roles}</td>
                <td><a href='#'>Modificar</a></td>
            </tr>
        ))
        setFilas(filas)
    })

    //"Si": "No"} puede generar error en consola

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

//buscar tablas?

}
export default UserList;