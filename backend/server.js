import express from 'express';
import { configureRoutes } from './routes.js';
import { configureSwagger } from './swagger.js';
import { configureDependencies } from './dependencies.js';
export * from './dependencies.js';

const
  app = express(),
  port = 4000;

app.use('/', express.json());

const router = express.Router();
app.use('/api', router);

configureDependencies();
configureRoutes(router);
configureSwagger(router);

router.get('/', (req, res) => {
  res.send("Hola 'Mundo!'");
});

app.listen(
  port,
  /* eslint no-console: "off" */
  () => console.log(
    `El servidor está aceptando conexiones en el puerto ${port}`
  )
);