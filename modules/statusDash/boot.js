var express = require('express');
var path = require('path');

module.exports = statusBoardModuleBoot;
module.exports['@singleton'] = true;
module.exports['@require'] = [
    'express/middlewares/middlewares',
    'express/routerFactory',
    'statusDash/controllers/teamcityController'
];

function statusBoardModuleBoot(middlewares, routerFactory, teamcityController) {
    'use strict';

    return {
        boot: function () {
            var app = routerFactory.create();

            app.get('/teamcity/projects', teamcityController.getProjects);
            app.get('/teamcity/builds', teamcityController.getBuilds);

            middlewares.use(app);
        }
    };
}
