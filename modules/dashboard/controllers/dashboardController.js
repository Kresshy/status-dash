module.exports = dashboardController;
module.exports['@singleton'] = true;
module.exports['@require'] = [
    'dashboard/services/dashboardService'
];

function dashboardController(dashboardService) {

    return {
        renderDashboard: renderDashboard,
        addApiEndpoint: addApiEndpoint,
        getApiEndpoints: getApiEndpoints,
        requestApiEndpoints: requestApiEndpoints
    };

    function renderDashboard(req, res, next) {
        res.render('index');
    }

    function addApiEndpoint(req, res, next) {
        dashboardService.addApiEndpoint(req.body.endpoint);
        res.send('OK');
    }

    function getApiEndpoints(req, res, next) {
        res.send(dashboardService.getApiEndpoints());
    }

    function requestApiEndpoints(req, res, next) {
        dashboardService.requestApiEndpoints()
            .then(function (response) {
                res.send(response);
            })
    }
}
