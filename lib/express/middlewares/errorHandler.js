'use strict';

module.exports = errorHandlerFactory;
module.exports['@require'] = [
    'config/config'
];

function errorHandlerFactory(config) {
    return function errorHandler(err, req, res, next) {
        var errorMessage = err.message || '';

        var errorResponse = {
            message: errorMessage
        };

        res.status(err.status || 500);
        res.json(errorResponse);
    };
}


