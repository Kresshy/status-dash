module.exports = dashboardService;
module.exports['@singleton'] = true;
module.exports['@require'] = [
    'teamcity/services/teamcityService',
    'request/requestPromise'
];

var Promise = require('bluebird');

function dashboardService(teamcityService, requestPromise) {

    var dashboards = {};

    return {
        storeDashboard: storeDashboard,
        updateDashboard: updateDashboard,
        loadDashboard: loadDashboard
    };

    function storeDashboard(dashboard) {
        if (!dashboards[dashboard.id]) {
            return Promise.resolve(dashboards[dashboard.id] = dashboard);
        } else {
            return Promise.reject({
                message: 'Dashboard already exists'
            });
        }
    }

    function updateDashboard(dashboard) {
        return Promise.resolve(dashboards[dashboard.id] = dashboard);
    }

    function loadDashboard(id) {
        return Promise.resolve(dashboards[id]);
    }
}
