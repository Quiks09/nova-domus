import React, { useEffect, useState } from 'react';
import { Api } from "../lib/api";
import InmuebleCard from './InmuebleCards';
import './Css/Inmuebles.css';

const Landing = () => {
    const [inmuebles, setInmuebles] = useState([]);
    const [expandedId, setExpandedId] = useState(null);

    useEffect(() => {
        Api.get('inmuebles')
            .then(res => res.json())
            .then(data => setInmuebles(data))
            .catch(err => console.error('Error fetching inmuebles:', err));
    }, []);

    

    const handleExpandClick = (id) => {
        setExpandedId((prevId) => (prevId === id ? null : id));
    };

    return (
        <div className="hero">
            <div id="bgCards" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {inmuebles.map((inmueble) => (
                    <div key={inmueble._id} className="card">
                        <InmuebleCard
                            inmueble={inmueble}
                            expanded={expandedId === inmueble._id}
                            onExpandClick={() => handleExpandClick(inmueble._id)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Landing;
