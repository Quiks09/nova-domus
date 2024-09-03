import React, { useState } from 'react';
import { Modal, Button, Typography, Box, Grid } from '@mui/material';
import Slider from 'react-slick';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Css/InmuebleModal.css'; // Importa el CSS para el modal

const PrevArrow = ({ onClick }) => (
  <ArrowBackIosNewIcon
    onClick={onClick}
    style={{
      color: 'white',
      fontSize: '2.5em',
      position: 'absolute',
      top: '50%',
      left: '10px',
      transform: 'translateY(-50%)',
      zIndex: 1,
      cursor: 'pointer',
      background: 'linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0))',
      padding: '0 15px',
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
      right: '10px',
      transform: 'translateY(-50%)',
      zIndex: 1,
      cursor: 'pointer',
      background: 'linear-gradient(to left, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0))',
      padding: '0 15px',
    }}
  />
);

const Carousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="carousel-image-container">
          <img
            src={image.image_url}
            alt={`Inmueble ${index + 1}`}
            className="carousel-image"
          />
        </div>
      ))}
    </Slider>
  );
};

const InmuebleModal = ({ open, handleClose, inmueble }) => {
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setCarouselOpen(true);
  };

  const handleCarouselClose = () => {
    setCarouselOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        className="modal-container"
      >
        <Box className="modal-content">
          <Box className="modal-header">
            <Typography variant="h5" gutterBottom>
              {inmueble.city}
            </Typography>
            <Typography variant="h6">
              {inmueble.price} {inmueble.currency}
            </Typography>
            <Button onClick={handleClose} variant="outlined">Cerrar</Button>
          </Box>
          <Box className="modal-body">
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box className="image-list">
                  {inmueble.photos.map((photo, index) => (
                    <img
                      key={index}
                      src={photo.image_url}
                      alt={`Inmueble ${index + 1}`}
                      className="thumbnail"
                      onClick={() => handleImageClick(photo)}
                    />
                  ))}
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box className="modal-details">
                  <Typography variant="body1">
                    {inmueble.description}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Dirección:</strong> {inmueble.address}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Área:</strong> {inmueble.area} m²
                  </Typography>
                  <Typography variant="body1">
                    <strong>Habitaciones:</strong> {inmueble.rooms}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Baños:</strong> {inmueble.bathrooms}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Modal
            open={carouselOpen}
            onClose={handleCarouselClose}
            className="carousel-modal"
          >
            <Box className="carousel-content">
              {selectedImage && <Carousel images={inmueble.photos} />}
              <Button onClick={handleCarouselClose} variant="outlined">Cerrar</Button>
            </Box>
          </Modal>
        </Box>
      </Modal>
    </>
  );
};

export default InmuebleModal;
