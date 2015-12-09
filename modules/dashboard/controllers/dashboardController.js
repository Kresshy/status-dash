module.exports = dashboardController;
module.exports['@singleton'] = true;
module.exports['@require'] = [
    'dashboard/services/dashboardService'
];

function dashboardController(dashboardService) {

    return {
        renderDashboard: renderDashboard,
        getDashboardData: getDashboardData
    };

    function renderDashboard(req, res, next) {
        res.render('index');
    }

    function getDashboardData(req, res, next) {
        res.send(dashboardService.getDashboardData());
    }
}
