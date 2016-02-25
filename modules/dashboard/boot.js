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

            app.post('/dashboard/store', dashboardController.storeDashboard);
            app.post('/dashboard/update', dashboardController.updateDashboard);
            app.get('/dashboard/load/:id', dashboardController.loadDashboard);

            middlewares.use(app);
        }
    };
}
