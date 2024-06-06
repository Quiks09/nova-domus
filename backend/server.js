import express from 'express';
import { configureRoutes } from './routes.js';
import { configureSwagger } from './swagger.js';
import { configureDependencies } from './dependencies.js';
import { configureMiddlewares } from './middlewares.js';
export * from './dependencies.js';
import * as jwt from 'jsonwebtoken';

const
  app = express(),
  port = 4000;

  

  
configureDependencies();
const router = configureMiddlewares(app);

configureRoutes(router);
configureSwagger(router);

router.get('/', (req, res) => {
  res.send("Hola 'Mundo!'");
  }
);

app.listen(
  port,
  /* eslint no-console: "off" */
  () => console.log(
    `El servidor está aceptando conexiones en el puerto ${port}`
  )
);