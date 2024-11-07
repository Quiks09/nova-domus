import { Link, useParams } from 'react-router-dom';
import './Css/PublicarInmueble.css';
import IconHome from '@mui/icons-material/Home';
import IconCancel from '@mui/icons-material/Cancel';
import IconSubmit from '@mui/icons-material/Send';
import { useEffect, useState } from 'react';
import { Api } from '../lib/api';

// Genera un ID temporal para cada imagen
const generateImageId = () => Math.random().toString(36).substring(2, 15);

const PublicarInmueble = () => {
    const { id } = useParams();
    const [estateType, setEstateType] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [price, setPrice] = useState('');
    const [currency, setCurrency] = useState('USD');
    const [area, setArea] = useState('');
    const [rooms, setRooms] = useState('');
    const [bathrooms, setBathrooms] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('active');
    const [photos, setPhotos] = useState([]);
    const [photoUrl, setPhotoUrl] = useState(''); // Para almacenar temporalmente el URL de cada foto

    // Función para agregar una URL de foto a la lista como un objeto con image_id e image_url
    const addPhotoUrl = () => {
        if (photoUrl && !photos.some(photo => photo.image_url === photoUrl)) { // Evitar duplicados
            const newPhoto = {
                image_id: generateImageId(),
                image_url: photoUrl
            };
            setPhotos([...photos, newPhoto]);
            setPhotoUrl(''); // Limpiar el campo después de agregar
        }
    };
    

    const submit = (e) => {
        e.preventDefault();

        const body = {
            estate_type: estateType,
            address,
            city,
            price,
            currency,
            area,
            rooms,
            bathrooms,
            description,
            status,
            photos // Fotos ahora están en el formato correcto
        };

        let method = id ? 'PATCH' : 'POST';
        if (id) {
            body.id = id;
        }

        Api.fetch('inmuebles', { 
            method, 
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify(body) 
        })
            .then((response) => {
                if (response.ok) {
                    alert('Inmueble Publicado!');
                } else {
                    return response.json().then(error => {
                        throw new Error(error.message || 'Error al publicar el inmueble');
                    });
                }
            })
            .catch(error => {
                console.error('Error al publicar el inmueble:', error);
                alert('Error al publicar el inmueble');
            });
    };

    useEffect(() => {
        if (!id) return;

        Api.get('inmuebles', { search: { id } })
            .then(res => res.json())
            .then(estateList => {
                if (!estateList.length) return;

                const estate = estateList[0];
                setEstateType(estate.estate_type ?? '');
                setAddress(estate.address ?? '');
                setCity(estate.city ?? '');
                setPrice(estate.price ?? '');
                setCurrency(estate.currency ?? 'USD');
                setArea(estate.area ?? '');
                setRooms(estate.rooms ?? '');
                setBathrooms(estate.bathrooms ?? '');
                setDescription(estate.description ?? '');
                setStatus(estate.status ?? 'active');
                setPhotos(estate.photos ?? []);
            })
            .catch(error => {
                console.error('Error al cargar el inmueble:', error);
            });
    }, [id]);

    return (
        <div className="hero">
            <div id="estate" className="form">
                <h2>
                    <IconHome className="icon" />
                    Publicar Inmueble
                </h2>
                <form onSubmit={submit}>
                    <ul className="fields">
                        <li className="field">
                            <label htmlFor="estateType">Tipo de Inmueble</label>
                            <input id="estateType" name="estateType" value={estateType} onChange={e => setEstateType(e.target.value)} required />
                        </li>
                        <li className="field">
                            <label htmlFor="address">Dirección</label>
                            <input id="address" name="address" value={address} onChange={e => setAddress(e.target.value)} required />
                        </li>
                        <li className="field">
                            <label htmlFor="city">Ciudad</label>
                            <input id="city" name="city" value={city} onChange={e => setCity(e.target.value)} required />
                        </li>
                        <li className="field">
                            <label htmlFor="price">Precio</label>
                            <input id="price" name="price" type="number" value={price} onChange={e => setPrice(e.target.value)} required />
                        </li>
                        <li className="field">
                            <label htmlFor="currency">Moneda</label>
                            <select id="currency" name="currency" value={currency} onChange={e => setCurrency(e.target.value)}>
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                            </select>
                        </li>
                        <li className="field">
                            <label htmlFor="area">Área (m²)</label>
                            <input id="area" name="area" type="number" value={area} onChange={e => setArea(e.target.value)} required />
                        </li>
                        <li className="field">
                            <label htmlFor="rooms">Habitaciones</label>
                            <input id="rooms" name="rooms" type="number" value={rooms} onChange={e => setRooms(e.target.value)} required />
                        </li>
                        <li className="field">
                            <label htmlFor="bathrooms">Baños</label>
                            <input id="bathrooms" name="bathrooms" type="number" value={bathrooms} onChange={e => setBathrooms(e.target.value)} required />
                        </li>
                        <li className="field">
                            <label htmlFor="description">Descripción</label>
                            <textarea id="description" name="description" value={description} onChange={e => setDescription(e.target.value)} required />
                        </li>
                        <li className="field">
                            <label htmlFor="photoUrl">Agregar Foto (URL)</label>
                            <input 
                                id="photoUrl" 
                                name="photoUrl" 
                                type="text" 
                                value={photoUrl} 
                                onChange={(e) => setPhotoUrl(e.target.value)} 
                                placeholder="Ingresa URL de la foto" 
                            />
                            <button type="button" onClick={addPhotoUrl}>Agregar Foto</button>
                        </li>
                        <li className="field">
                            <label>Vista Previa de Fotos:</label>
                            <div className="photo-preview">
                                {photos.map((photo, index) => (
                                    <img key={index} src={photo.image_url} alt={`Foto ${index + 1}`} className="preview-image" />
                                ))}
                            </div>
                        </li>
                        <li className="field center">
                            <button type="submit" className='confirm'><IconSubmit className="icon submit" />Confirmar</button>
                            <Link to={-1} className="cancel"><button className="cancel"><IconCancel className="icon cancel" />Cancelar</button></Link>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    );
};

export default PublicarInmueble;
