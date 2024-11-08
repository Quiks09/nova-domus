/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useParams } from 'react-router-dom';
import './Css/User_form.css'; // Reutilizamos el CSS de UserForm
import IconUser from '@mui/icons-material/Person';
import IconCancel from '@mui/icons-material/Cancel';
import IconSubmit from '@mui/icons-material/Send';
import { useEffect, useState } from 'react';
import { Api } from '../lib/api';

const TenantFormEdit = () => {
    const { uuid } = useParams();
    const [name, setName] = useState('');
    const [contacto, setContacto] = useState('');
    const [inicioContrato, setInicioContrato] = useState('');
    const [finContrato, setFinContrato] = useState('');
    const [precio, setPrecio] = useState('');
    const [isEnabled, setIsEnabled] = useState(true);

    function submit(e) {
        e.preventDefault();

        const body = {
            name,
            contacto,
            inicioContrato,
            finContrato,
            precio: parseFloat(precio),
            isEnabled,
        };

        let method = uuid ? 'PATCH' : 'POST';

        if (uuid) {
            body.uuid = uuid;
        }

        Api.fetch('tenants', { method, body })
            .then(() => {
                alert('Inquilino Modificado!');
            })
            .catch(e => { console.error(e); });
    }

    useEffect(() => {
        if (!uuid) {
            return;
        }

        Api.get('tenants', { search: { uuid } })
            .then(res => res.json())
            .then(tenantList => {
                if (!tenantList.length) {
                    return;
                }

                const tenant = tenantList[0];

                setName(tenant.name ?? '');
                setContacto(tenant.contacto ?? '');
                setInicioContrato(tenant.inicioContrato ? tenant.inicioContrato.slice(0, 10) : '');
                setFinContrato(tenant.finContrato ? tenant.finContrato.slice(0, 10) : '');
                setPrecio(tenant.precio ?? '');
                setIsEnabled(tenant.isEnabled ?? false);
            })
            .catch(e => { console.error(e); });
    }, []);

    return (
        <div className="hero">
            <div id="tenant" className="form">
                <h2>
                    <IconUser className="icon" />
                    Modificar Inquilino
                </h2>
                <form onSubmit={submit}>
                    <ul className="fields">
                        <li className="field">
                            <label htmlFor="name">Nombre</label>
                            <input id="name" name="name" value={name} onChange={e => setName(e.target.value)} required />
                        </li>
                        <li className="field">
                            <label htmlFor="contacto">Contacto</label>
                            <input id="contacto" name="contacto" value={contacto} onChange={e => setContacto(e.target.value)} required />
                        </li>
                        <li className="field">
                            <label htmlFor="inicioContrato">Inicio del Contrato</label>
                            <input id="inicioContrato" name="inicioContrato" type="date" value={inicioContrato} onChange={e => setInicioContrato(e.target.value)} required />
                        </li>
                        <li className="field">
                            <label htmlFor="finContrato">Fin del Contrato</label>
                            <input id="finContrato" name="finContrato" type="date" value={finContrato} onChange={e => setFinContrato(e.target.value)} required />
                        </li>
                        <li className="field">
                            <label htmlFor="precio">Precio</label>
                            <input id="precio" name="precio" type="number" value={precio} onChange={e => setPrecio(e.target.value)} required />
                        </li>
                        <li className="field">
                            <label htmlFor="isEnabled">Habilitado</label>
                            <input id="isEnabled" name="isEnabled" type="checkbox" checked={isEnabled} onChange={e => setIsEnabled(e.target.checked)} />
                        </li>
                        <li className="field center">
                            <button type="submit" className='confirm'><IconSubmit className="icon submit" />Confirmar</button>
                            <Link to={-1}><button className="cancel"><IconCancel className="icon cancel" />Cancelar</button></Link>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    );
}

export default TenantFormEdit;
