'use strict';

module.exports = applicationServer;
module.exports['@require'] = ['config/config'];
module.exports['@singleton'] = true;

function applicationServer(config){
    var http = require('http');

    function createServer(app){
        return http.createServer(app);
    }

    return {
        createServer: createServer
    };
}


