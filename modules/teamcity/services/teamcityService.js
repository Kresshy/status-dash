module.exports = teamcityService;
module.exports['@signleton'] = true;
module.exports['@require'] = [
    'request/requestPromise'
];

var Promise = require('bluebird');

function teamcityService(requestPromise) {
    var teamcityUrl = "https://teamcity.jetbrains.com/guestAuth/";
    var projectsEndpoint = "app/rest/projects";
    var buildsEndpoint = "app/rest/builds";
    var agentsEndpoint = "app/rest/agents";
    var buildQueuesEndpoint = "app/rest/buildQueue";

    var _projects = [];
    var _builds = [];
    var _agents = [];
    var _buildQueues = [];

    var requestOptions = {
        headers: {
            'Accept': 'application/json'
        },
        json: true // Automatically parses the JSON string in the response
    };

    // exported functions
    return {
        init: init,
        getProjects: getProjects,
        requestProjectInformation: requestProjectInformation,
        getBuilds: getBuilds,
        requestBuildInformation: requestBuildInformation,
        getAgents: getAgents,
        getBuildQueues: getBuildQueues
    };

    function init() {
        requestAllEndpoints();
        pollApiEndpoints();
    }

    function pollApiEndpoints() {
        setTimeout(function () {
            requestAllEndpoints().
                then(pollApiEndpoints);
        }, 1000 * 60)
    }

    function requestAllEndpoints() {
        return requestProjects().then(function (response) {
            _projects = response.project;
        }).then(requestBuilds).then(function (response) {
            _builds = response.build;
        }).then(requestAgents).then(function (response) {
            _agents = response.agent;
        }).then(requestBuildQueues).then(function (response) {
            _buildQueues = response.build;
        });
    }

    function requestProjects() {
        requestOptions.uri = teamcityUrl + projectsEndpoint;
        return requestPromise(requestOptions);
    }

    function requestProjectInformation(id) {
        requestOptions.uri = teamcityUrl + projectsEndpoint + "/id:" + id;
        return requestPromise(requestOptions);
    }

    function requestBuilds() {
        requestOptions.uri = teamcityUrl + buildsEndpoint;
        return requestPromise(requestOptions);
    }

    function requestBuildInformation(id) {
        requestOptions.uri = teamcityUrl + buildsEndpoint + "/id:" + id;
        return requestPromise(requestOptions);
    }

    function requestAgents() {
        requestOptions.uri = teamcityUrl + agentsEndpoint;
        return requestPromise(requestOptions);
    }

    function requestBuildQueues() {
        requestOptions.uri = teamcityUrl + buildQueuesEndpoint;
        return requestPromise(requestOptions);
    }

    function getProjects() {
        return _projects;
    }

    function getBuilds() {
        return _builds;
    }

    function getAgents() {
        return _agents;
    }

    function getBuildQueues() {
        return _buildQueues;
    }
}
