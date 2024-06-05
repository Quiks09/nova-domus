import express from 'express';

export function configureMiddlewares(app) {
    app.use('/', express.json());

    const router = express.Router();
    app.use('/api', router);

    app.use(errorHandler);

    return router;
}

function errorHandler(err, req, res, next,) {
    switch(err.constructor?.name) {
        case 'MissingParameterError':
            res.status(400).send(`Falta el parametro: ${err.paramName}`);
        return;

        case 'ConflictError':
            res.status(409).send(err.message);
        return;

        case 'Error':
            res.status(500).send(err.message);
        return;
    }
    res.status(400).send('Oh no! Hay un error!');
}