import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Slider from 'react-slick';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Estilo personalizado para el botón de expandir
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

// Flechas personalizadas
const PrevArrow = ({ onClick }) => (
  <ArrowBackIosNewIcon 
    onClick={onClick} 
    style={{
      color: 'rgba(248, 239, 234, 0.808)',
      fontSize: '2.5em',
      position: 'absolute',
      top: '50%',
      left: '10px',
      transform: 'translateY(-50%)',
      zIndex: 1,
      cursor: 'pointer'
    }} 
  />
);

const NextArrow = ({ onClick }) => (
  <ArrowForwardIosIcon 
    onClick={onClick} 
    style={{
      color: 'rgba(248, 239, 234, 0.808)',
      fontSize: '2.5em',
      position: 'absolute',
      top: '50%',
      right: '10px',
      transform: 'translateY(-50%)',
      zIndex: 1,
      cursor: 'pointer',
    }} 
  />
);

export default function InmuebleCard({ inmueble }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

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
    <Card
      sx={{
        width: 350, // Aumenta el tamaño de la tarjeta
        borderRadius: 5, // Redondea los bordes
        boxShadow: 12, // Añade sombra para el efecto de relieve
        backgroundColor: 'rgba(255, 255, 255, 0.7)', // Fondo semitransparente
        transition: 'transform 0.2s', // Transición para el efecto hover
        '&:hover': {
          transform: 'scale(1.08)', // Efecto de zoom al pasar el ratón
        },
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
            src={inmueble.user_id?.avatar}
          >
            {!inmueble.user_id?.avatar && inmueble.city.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={inmueble.estate_type}
        subheader={new Date(inmueble.publication_date).toLocaleDateString()}
      />
      <Slider {...settings}>
        {inmueble.photos.map((photo, index) => (
          <div key={index}>
            <img 
              src={photo.image_url} 
              alt={`Inmueble ${index + 1}`} 
              style={{
                width: '100%',
                height: '300px', // Ajusta la altura de la imagen
                objectFit: 'cover',
                transition: 'transform 0.2s', 
                '&:hover': {
                  transform: 'scale(1.08)', // Efecto de zoom al pasar el ratón
                },
              }}
            />
          </div>
        ))}
      </Slider>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {inmueble.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Detalles:</Typography>
          <Typography paragraph>
            Precio: {inmueble.price} {inmueble.currency}
          </Typography>
          <Typography paragraph>
            Dirección: {inmueble.address}, {inmueble.city}
          </Typography>
          <Typography paragraph>
            Área: {inmueble.area} m²
          </Typography>
          <Typography paragraph>
            Habitaciones: {inmueble.rooms} 
          </Typography>
          <Typography paragraph>
            Baños: {inmueble.bathrooms}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
