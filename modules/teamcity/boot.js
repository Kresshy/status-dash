var express = require('express');
var path = require('path');

module.exports = statusBoardModuleBoot;
module.exports['@singleton'] = true;
module.exports['@require'] = [
    'express/middlewares/middlewares',
    'express/routerFactory',
    'teamcity/controllers/teamcityController'
];

function statusBoardModuleBoot(middlewares, routerFactory, teamcityController) {
    'use strict';

    return {
        boot: function () {
            var app = routerFactory.create();

            app.get('/teamcity/projects', teamcityController.getProjects);
            app.get('/teamcity/projects/:id', teamcityController.getProjectInformation);
            app.get('/teamcity/builds', teamcityController.getBuilds);
            app.get('/teamcity/builds/:id', teamcityController.getBuildInformation);

            middlewares.use(app);
        }
    };
}
