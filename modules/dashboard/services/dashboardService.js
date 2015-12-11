module.exports = dashboardService;
module.exports['@singleton'] = true;
module.exports['@require'] = [
    'teamcity/services/teamcityService',
    'request/requestPromise'
];

var Promise = require('bluebird');

function dashboardService(teamcityService, requestPromise) {

    var apiEndpoints = [];

    return {
        addApiEndpoint: addApiEndpoint,
        getApiEndpoints: getApiEndpoints,
        requestApiEndpoints: requestApiEndpoints
    };

    function addApiEndpoint(endpoint) {
        apiEndpoints.push(endpoint);
    }

    function getApiEndpoints() {
        return apiEndpoints;
    }

    function requestApiEndpoints() {
        var promises = [];

        var requestOptions = {
            headers: {
                'Accept': 'application/json'
            },
            json: true // Automatically parses the JSON string in the response
        };

        for (var i = 0; i < apiEndpoints.length; i++) {
            requestOptions.uri = apiEndpoints[i];
            promises.push(requestPromise(requestOptions));
        }

        return Promise.all(promises)
            .then(function (responses) {
                return responses;
            });
    }
}
