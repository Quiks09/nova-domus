import React, { useState } from 'react';
import { CardContent, CardActions, Typography, Button } from '@mui/material';
import Slider from 'react-slick';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Css/InmuebleCards.css'; 

const PrevArrow = ({ onClick }) => (
  <ArrowBackIosNewIcon className="custom-arrow prev-arrow" onClick={onClick} 
  style={{
    color: 'white',
    fontSize: '2.5em',
    position: 'absolute',
    top: '50%',
    left: '0px',
    transform: 'translateY(-50%)',
    zIndex: 1,
    cursor: 'pointer',
    background: 'linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0))',
  }}
  />
);

const NextArrow = ({ onClick }) => (
  <ArrowForwardIosIcon className="custom-arrow next-arrow" onClick={onClick} 
  style={{
    color: 'white',
    fontSize: '2.5em',
    position: 'absolute',
    top: '50%',
    right: '0px',
    transform: 'translateY(-50%)',
    zIndex: 1,
    cursor: 'pointer',
    background: 'linear-gradient(to left, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0))',
  }}
  />
);

export default function InmuebleCard({ inmueble, onExpandClick }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div
      className={`card-container ${hover ? 'hover' : ''}`}
      
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-type">{inmueble.estate_type}</div>

      <Slider {...settings}>
        {inmueble.photos.map((photo, index) => (
          <div key={index}>
            <img
              src={photo.image_url}
              alt={`Inmueble ${index + 1}`}
              className="card-image"
            />
          </div>
        ))}
      </Slider>

      <CardContent className="card-content">
        <div className="card-header">
          <Typography variant="h6" className="card-city" style={{ fontFamily: 'Poppins', fontWeight: 'bold', color: '#333' }}>
            {inmueble.city}
          </Typography>
          <span className="card-price" style={{
            fontFamily: 'Poppins'}}>
            {inmueble.price} {inmueble.currency}
          </span>
        </div>
        <Typography variant="body2" className="card-description" style={{
            fontFamily: 'Poppins', color:'black'}}>
          {inmueble.description}
        </Typography>
      </CardContent>

      <CardActions className="card-actions">
        <Button
          onClick={onExpandClick}
          fullWidth
          variant="contained"
          className="card-button"
          style={{ fontFamily: 'Poppins', backgroundColor: 'black', color: 'white', width: '90%', marginBottom: '10px', textTransform: 'capitalize' }}
        >
          Más Detalles
        </Button>
      </CardActions>
    </div>
  );
}
