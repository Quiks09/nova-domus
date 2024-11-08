import React from 'react';
import Modal from '@mui/material/Modal';
import './Css/InquilinosModal.css';

const TenantModal = ({ open, handleClose, tenant }) => (
    <Modal open={open} onClose={handleClose}>
        <div className="modal-content">
            <h2>Detalles del Inquilino</h2>
            <p><strong>Nombre:</strong> {tenant.name}</p>
            <p><strong>Precio:</strong> ${tenant.precio?.toFixed(2) || 'N/A'}</p>
            <p><strong>Inicio de Contrato:</strong> {tenant.inicioContrato ? new Date(tenant.inicioContrato).toLocaleDateString() : 'N/A'}</p>
            <p><strong>Fin de Contrato:</strong> {tenant.finContrato ? new Date(tenant.finContrato).toLocaleDateString() : 'N/A'}</p>
            {tenant.contacto && <p><strong>Contacto:</strong> {tenant.contacto}</p>}
            <button className="close-btn" onClick={handleClose}>Cerrar</button>
        </div>
    </Modal>
);

export default TenantModal;
