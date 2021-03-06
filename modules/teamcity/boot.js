module.exports = teamcityModuleBoot;
module.exports['@singleton'] = true;
module.exports['@require'] = [
    'express/middlewares/middlewares',
    'express/routerFactory',
    'teamcity/controllers/teamcityController'
];

function teamcityModuleBoot(middlewares, routerFactory, teamcityController) {
    'use strict';

    return {
        boot: function () {
            var app = routerFactory.create();

            app.get('/teamcity/all', teamcityController.getAllInformation);

            app.get('/teamcity/projects', teamcityController.getProjects);
            app.get('/teamcity/projects/:id', teamcityController.getProjectInformation);

            app.get('/teamcity/builds', teamcityController.getBuilds);
            app.get('/teamcity/builds/:id', teamcityController.getBuildInformation);

            app.get('/teamcity/agents', teamcityController.getAgents);
            app.get('/teamcity/agents/:id', teamcityController.getAgentInformation);

            middlewares.use(app);
        }
    };
}
