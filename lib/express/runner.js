'use strict';

module.exports = applicationRunner;
module.exports['@singleton'] = true;
module.exports['@require'] = [
    'config/config',
    'http/server',
    'express/app',
    'express/middlewares/middlewares'
];

function applicationRunner(config, http, app, middlewares) {
    var express = require('express');
    var expressHbs = require('express-handlebars');
    var path = require('path');

    return {
        run: function () {
            var middlewareArray = middlewares.mergeMiddlewares();

            app.use(express.static(path.join(__dirname, '../../public')));
            app.engine('.hbs', expressHbs({
                defaultLayout: 'main',
                extname: '.hbs'
            }));

            app.set('views', path.join(__dirname, '../../views'));
            app.set('view engine', '.hbs');

            middlewareArray.forEach(function (middleware) {
                app.use(middleware);
            });

            var server = http.createServer(app);

            server.listen(config.port, function () {
                console.log('Server is running on http://localhost:' + config.port);
            });
        }
    };
}

