import express from 'express';
import { configureRoutes } from './routes.js';
import { configureSwagger } from './swagger.js';
import { configureDependencies } from './dependencies.js';
import { configureMiddlewares } from './middlewares.js';
import { Dependency } from './libs/dependency.js';
import mongoose from 'mongoose';

configureDependencies();

const conf = Dependency.get('conf');

mongoose.connect(conf.db)//'mongodb://localhost:127.0.0.1:27017/myapp')
  .then(() => console.log('BD conectada correctamente !!'))
  .catch(err => console.log(`Error conectando a la base de datosss${err}`));

const app = express();
const router = configureMiddlewares(app);
configureRoutes(router);
configureSwagger(router);

app.get('*', (req, res) => {
  res.sendFile(req.path, {root: './dist'});
}
);

app.all('*', (req, res) => {
  res.status(405).send('Metodo no Permitido!');
}
);

app.listen(
  conf.port,
  /* eslint no-console: "off" */
  () => console.log(
    `El servidor está aceptando conexiones en el puerto ${conf.port}`

  )
);