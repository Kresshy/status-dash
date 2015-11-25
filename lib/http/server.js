module.exports = applicationServer;
module.exports['@require'] = ['config/config'];
module.exports['@singleton'] = true;

function applicationServer(config) {
    'use strict';
    
    var http = require('http');

    function createServer(app) {
        return http.createServer(app);
    }

    return {
        createServer: createServer
    };
}


