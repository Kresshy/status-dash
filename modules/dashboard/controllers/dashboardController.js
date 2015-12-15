module.exports = dashboardController;
module.exports['@singleton'] = true;
module.exports['@require'] = [
    'dashboard/services/dashboardService'
];

function dashboardController(dashboardService) {

    return {
        renderDashboard: renderDashboard,
        storeDashboard: storeDashboard,
        updateDashboard: updateDashboard,
        loadDashboard: loadDashboard
    };

    function renderDashboard(req, res, next) {
        res.render('index');
    }

    function storeDashboard(req, res, next) {
        dashboardService.storeDashboard(req.body.dashboard)
            .then(function (dashboard) {
                res.send(dashboard);
            }).catch(function (error) {
                res.status(409);
                res.send(error);
            });
    }

    function updateDashboard(req, res, next) {
        dashboardService.updateDashboard(req.body.dashboard)
            .then(function (dashboard) {
                res.send(dashboard);
            });
    }

    function loadDashboard(req, res, next) {
        dashboardService.loadDashboard(req.params.id)
            .then(function (dashboard) {
                res.send(dashboard);
            });
    }
}
