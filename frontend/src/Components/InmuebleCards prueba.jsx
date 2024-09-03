import React, { useState } from 'react';
import { CardContent, CardActions, Typography, Button } from '@mui/material';
import Slider from 'react-slick';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PrevArrow = ({ onClick }) => (
  <ArrowBackIosNewIcon
    onClick={onClick}
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
      padding: '150px 50px 150px 0',
    }}
  />
);

const NextArrow = ({ onClick }) => (
  <ArrowForwardIosIcon
    onClick={onClick}
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
      padding: '150px 0px 150px 50px',
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
      style={{
        width: '375px',
        margin: 'auto',
        position: 'relative',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.3s',
        borderRadius: '0 0 10px 10px',
        overflow: 'hidden',
        backgroundColor: 'white',
        transform: hover ? 'scale(1.08)' : 'scale(1)', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{
        backgroundColor: '#127281',
        color: 'white',
        padding: '5px 10px',
        position: 'absolute',
        top: '-2px',
        left: '10px',
        zIndex: 20,
        borderRadius: '0 0 5px 5px',
        boxShadow: '0 4px 2px rgba(0, 0, 0, 0.4)',
      }}>
        {inmueble.estate_type}
      </div>

      <Slider {...settings}>
        {inmueble.photos.map((photo, index) => (
          <div key={index}>
            <img
              src={photo.image_url}
              alt={`Inmueble ${index + 1}`}
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}/>
          </div>
        ))}
      </Slider>

      <CardContent style={{ padding: '16px', backgroundColor: 'white', flex: '1 0 auto' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '10px',
        }}>
          <Typography variant="h6" style={{ fontFamily: 'Poppins', fontWeight: 'bold', color: '#333' }}>
            {inmueble.city}
          </Typography>
          <span style={{
            fontFamily: 'Poppins',
            backgroundColor: 'green',
            color: 'white',
            marginTop: '10px',
            padding: '5px 20px',
            borderRadius: '5px 0 0 5px',
            transform: 'translateX(13%)',
          }}>
            {inmueble.price} {inmueble.currency}
          </span>
        </div>
        <Typography variant="body2" style={{ fontFamily: 'Poppins', color: 'black' }}>
          {inmueble.description}
        </Typography>
      </CardContent>

      <CardActions style={{ justifyContent: 'center', padding: '16px' }}>
        <Button
          onClick={onExpandClick}
          fullWidth
          variant="contained"
          style={{ fontFamily: 'Poppins', backgroundColor: 'black', color: 'white', width: '90%', marginBottom: '10px', textTransform: 'capitalize' }}
        >
          Más Detalles
        </Button>
      </CardActions>
    </div>
  );
}