import React, { useEffect, useState } from 'react';
import { Api } from "../lib/api";
import InmuebleCard from './InmuebleCards';
import './Css/Landing.css';

const Landing = () => {
    const [inmuebles, setInmuebles] = useState([]);

    useEffect(() => {
        Api.get('inmuebles')
            .then(res => res.json())
            .then(data => setInmuebles(data))
            .catch(err => console.error('Error fetching inmuebles:', err));
    }, []);

    return (
        <div className="hero">
            <div id="bgCards">
                {inmuebles.map((inmueble) => (
                    <div key={inmueble._id} className="card">
                        <InmuebleCard inmueble={inmueble} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Landing;
