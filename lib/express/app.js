'use strict';

module.exports = createApplicaton;
module.exports['@singleton'] = true;
module.exports['@require'] = ['config/config'];

function createApplicaton(config) {
    var express = require('express');

    var app = express();
    var port = config.port;
    var host = config.host;

    app.disable('x-powered-by');

    app.set('port', port);
    app.set('host', host);

    return app;
}