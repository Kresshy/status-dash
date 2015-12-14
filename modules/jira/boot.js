module.exports = jiraModuleBoot;
module.exports['@singleton'] = true;
module.exports['@require'] = [
    'express/middlewares/middlewares',
    'express/routerFactory',
    'jira/controllers/jiraController'
];

function jiraModuleBoot(middlewares, routerFactory, jiraController) {
    'use strict';

    return {
        boot: function () {
            var app = routerFactory.create();

            app.get('/jira/all', jiraController.getAllInformation);

            app.get('/jira/avatars', jiraController.getAvatars);

            app.get('/jira/projects', jiraController.getProjects);

            app.get('/jira/projects/:id', jiraController.getProjectInformation);

            middlewares.use(app);
        }
    };
}
