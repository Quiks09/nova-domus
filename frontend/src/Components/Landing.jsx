import * as React from 'react';
import './Css/Landing.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';
import buscar from './assets/buscar.png'

const Landing = () => {
  return (
    <div className="hero">
      <div id="bgLanding">
        <Typography style={{ fontFamily: 'Poppins', color: 'black', fontWeight:'bold' }} variant="h4" component="h1" className="landing-title">
          ¿Qué vas a hacer hoy?
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Card sx={{ width: 300 }} className="custom-card-buscar">
              <CardActionArea>
                <img src={buscar} alt="" id='buscarLogo'/>
                <CardContent className="card-content-landing">
                  <Typography style={{ fontFamily: 'Poppins', color: 'black', fontWeight:'bold', width: '90%', marginBottom: '10px', textTransform: 'capitalize' }} variant="h5" component="div" className="card-title">
                    Ver Inmuebles
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item>
            <Card sx={{ width: 300 }} className="custom-card-publicar">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="ruta/a/tu/imagen2.jpg"
                  alt="Publicar un Inmueble"
                />
                <CardContent className="card-content-landing">
                  <Typography style={{ fontFamily: 'Poppins', color: 'black', fontWeight:'bold', width: '90%', marginBottom: '10px', textTransform: 'capitalize' }} variant="h5" component="div" className="card-title">
                    Publicar un Inmueble
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Landing;
