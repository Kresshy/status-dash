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
        getBuilds: getBuilds,
        getAgents: getAgents,
        getBuildQueues: getBuildQueues
    };

    function init() {
        console.log('initialize teamcity service');
        pollApiEndpoints();
    }

    function pollApiEndpoints() {
        setTimeout(function () {
            pollProjects().then(function (response) {
                _projects = response.project;
                console.log(_projects);
            }).then(pollBuilds).then(function (response) {
                _builds = response.build;
                console.log(_builds);
            }).then(pollAgents).then(function (response) {
                _agents = response.agent;
                console.log(_agents);
            }).then(pollBuildQueues).then(function (response) {
                _buildQueues = response.build;
                console.log(_buildQueues);
            }).then(function () {
                pollApiEndpoints();
            });
        }, 1000 * 60);
    }

    function pollProjects() {
        console.log('pollProjects');
        requestOptions.uri = teamcityUrl + projectsEndpoint;
        return requestPromise(requestOptions);
    }

    function pollBuilds() {
        console.log('pollBuilds');
        requestOptions.uri = teamcityUrl + buildsEndpoint;
        return requestPromise(requestOptions);
    }

    function pollAgents() {
        console.log('pollAgents');
        requestOptions.uri = teamcityUrl + agentsEndpoint;
        return requestPromise(requestOptions);
    }

    function pollBuildQueues() {
        console.log('pollBuildQueues');
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