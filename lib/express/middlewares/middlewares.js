module.exports = expressMiddlewares;
module.exports['@singleton'] = true;
module.exports['@require'] = [
    'express/middlewares/404',
    'express/middlewares/errorHandler'
];

function expressMiddlewares(code404Handler, errorHandler) {
    'use strict';

    var bodyParser = require('body-parser');
    var cookieParser = require('cookie-parser');

    var headMiddlewares = new Set();
    var middlewares = new Set();
    var tailMiddlewares = new Set();

    function addHeadMiddleware(middleware) {
        headMiddlewares.add(middleware);
    }

    function addMiddleware(middleware) {
        middlewares.add(middleware);
    }

    function addTailmiddleware(middleware) {
        tailMiddlewares.add(middleware);
    }

    function mergeMiddlewares() {
        var mergeResult = [];

        function push(val) {
            mergeResult.push(val);
        }

        headMiddlewares.forEach(push);
        middlewares.forEach(push);
        tailMiddlewares.forEach(push);
        return mergeResult;
    }

    // default head
    addHeadMiddleware(bodyParser.json());
    addHeadMiddleware(bodyParser.urlencoded({extended: false}));
    addHeadMiddleware(cookieParser());

    // default tail
    addTailmiddleware(code404Handler);
    addTailmiddleware(errorHandler);

    return {
        addHeadMiddleware: addHeadMiddleware,
        addMiddleware: addMiddleware,
        addTailmiddleware: addTailmiddleware,
        mergeMiddlewares: mergeMiddlewares,
        use: addMiddleware
    };
}

