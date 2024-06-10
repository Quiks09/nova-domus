import express from 'express';
import { MissingParameterError } from './libs/missing_parameter_error.js';
import { ConflictError } from './libs/conflict_error.js';

export function configureMiddlewares(app) {
    app.use('/', express.json());

    const router = express.Router();
    app.use('/api', router);

    app.use(errorHandler);

    return router;
}

function errorHandler(err, req, res, next,) {
    if(!(err instanceof Error)){
        res.status(500).send(err);
        next();
        return;
    } 
    
    const statusCodes = {
        MissingParameterError: 400,
        ConflictError: 409,
    };

    const name = err.constructor.name;
    const status = statusCodes[name] ?? 500 ?? 300;

    res.status(status).send({
        error: name,
        message: err.message,
    })
}