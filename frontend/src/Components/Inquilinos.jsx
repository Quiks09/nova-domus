/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Api } from "../lib/api";
import './Css/Inquilinos.css'; 
import { Link } from "react-router-dom";
import ModalYesNo from "./ModalYesNo";
import EditIcon from '@mui/icons-material/Edit';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TenantModal from './InquilinosModal';

const Inquilinos = () => {
    const [rows, setRows] = useState([]);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [deleteUuid, setDeleteUuid] = useState('');
    const [selectedTenant, setSelectedTenant] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        Api.get('tenants')
            .then(res => res.json())
            .then(tenantList => setRows(tenantList))
            .catch(e => console.error('Error fetching tenants:', e));
    }, []);

    const handleViewDetails = (tenant) => {
        setSelectedTenant(tenant);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedTenant(null);
    };

    const deleteTenant = (e, uuid) => {
        e.preventDefault();
        setDeleteUuid(uuid);
        setShowDeleteConfirmation(true);
    };

    const deleteCurrentTenant = () => {
        Api.delete('tenants', { search: { uuid: deleteUuid } })
            .then(() => {
                alert('Inquilino Eliminado!');
                setRows(rows.filter(row => row.uuid !== deleteUuid));
                setShowDeleteConfirmation(false);
            })
            .catch(e => console.error(e));
    };

    return (
        <div className="hero">
            <ModalYesNo 
                message='Seguro desea eliminar al Inquilino?'
                show={showDeleteConfirmation} 
                onYes={deleteCurrentTenant} 
                onNo={() => setShowDeleteConfirmation(false)} 
            />
            {selectedTenant && (
                <TenantModal 
                    open={modalOpen} 
                    handleClose={handleCloseModal} 
                    tenant={selectedTenant} 
                />
            )}
            <div className="table-container">
                <div className="header">
                    <h2>Lista de Inquilinos</h2>
                    <Link to="/tenant-form">
                        <PersonAddAlt1Icon />
                    </Link>
                </div>
                <table className="tenant-table">
                    <thead>
                        <tr>
                            <th>Inquilino</th>
                            <th>Precio</th>
                            <th>Detalles</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(tenant => (
                            <tr key={tenant.uuid} className="table-row">
                                <td className="tenant-info">
                                    <div className="tenant-details">
                                        <div className="tenant-name">{tenant.name}</div>
                                    </div>
                                </td>
                                <td className="tenant-price">
                                    ${tenant.precio ? tenant.precio.toFixed(2) : 'N/A'}
                                </td>
                                <td className="actions">
                                    <button onClick={() => handleViewDetails(tenant)} className="details-btn">
                                        <VisibilityIcon /> Ver Detalles
                                    </button>
                                </td>
                                <td className="actions">
                                    <Link to={`/tenant-form/${tenant.uuid}`}>
                                        <EditIcon id='edit' />
                                    </Link>
                                    <a href="#" onClick={e => deleteTenant(e, tenant.uuid)}>
                                        <PersonRemoveIcon id='delete'/>
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Inquilinos;
