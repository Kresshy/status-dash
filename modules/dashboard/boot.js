module.exports = dashboardModuleBoot;
module.exports['@singleton'] = true;
module.exports['@require'] = [
    'express/middlewares/middlewares',
    'express/routerFactory',
    'dashboard/controllers/dashboardController'
];

function dashboardModuleBoot(middlewares, routerFactory, dashboardController) {
    'use strict';

    return {
        boot: function () {
            var app = routerFactory.create();

            app.get('/', dashboardController.renderDashboard);

            app.post('/dashboard/add', dashboardController.addApiEndpoint);
            app.get('/dashboard/get', dashboardController.getApiEndpoints);
            app.get('/dashboard/poll', dashboardController.requestApiEndpoints);

            middlewares.use(app);
        }
    };
}
