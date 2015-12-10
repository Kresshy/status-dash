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
            app.get('/dashboard/data', dashboardController.getDashboardData);

            middlewares.use(app);
        }
    };
}
