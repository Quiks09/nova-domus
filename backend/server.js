import express from 'express';
import { installRoutes } from './routes.js';

const
  app = express(),
  port = 4000;

installRoutes(app);

app.get('/', (req, res) => {
  res.send("Hola 'Mundo!'");
});

app.listen(
  port,
  /* eslint no-console: "off" */
  () => console.log(
    `El servidor está aceptando conexiones en el puerto ${port}`
  )
);