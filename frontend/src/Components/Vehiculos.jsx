import React, { useEffect, useState } from 'react';
import { Api } from "../lib/api";
import InmuebleCard from './InmuebleCards';
import InmuebleModal from './InmuebleModal';
import './Css/Inmuebles.css';

const Vehiculos = () => {
    const [inmuebles, setInmuebles] = useState([]);
    const [selectedInmueble, setSelectedInmueble] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        Api.get('inmuebles')
            .then(res => res.json())
            .then(data => setInmuebles(data))
            .catch(err => console.error('Error fetching inmuebles:', err));
    }, []);

    const handleExpandClick = (inmueble) => {
        setSelectedInmueble(inmueble);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedInmueble(null);
    };

    return (
        <div className="hero">
            <div id="bgCards">
                {inmuebles.map((inmueble) => (
                    <div key={inmueble._id} className="card">
                        <InmuebleCard 
                            key={inmueble.id}
                            inmueble={inmueble} 
                            onExpandClick={() => handleExpandClick(inmueble)} 
                        />
                    </div>
                ))}
                {selectedInmueble && (
                    <InmuebleModal 
                        open={modalOpen} 
                        handleClose={handleCloseModal} 
                        inmueble={selectedInmueble} 
                    />
                )}
            </div>
        </div>
    );
};

export default Vehiculos;
