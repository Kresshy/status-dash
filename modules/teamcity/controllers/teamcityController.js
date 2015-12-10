module.exports = teamcityController;
module.exports['@signleton'] = true;
module.exports['@require'] = [
    'teamcity/services/teamcityService'
];

function teamcityController(teamcityService) {

    teamcityService.init();

    return {
        getAllInformation: getAllInformation,
        getProjects: getProjects,
        getProjectInformation: getProjectInformation,
        getBuilds: getBuilds,
        getBuildInformation: getBuildInformation,
        getAgents: getAgents,
        getAgentInformation: getAgentInformation
    };

    function getAllInformation(req, res, next) {
        teamcityService.requestAllEndpoints()
            .then(function (response) {
                res.send(response);
            })
    }

    function getProjects(req, res, next) {
        res.send(teamcityService.getProjects());
    }

    function getProjectInformation(req, res, next) {
        teamcityService.requestProjectInformation(req.params.id)
            .then(function (response) {
                res.send(response);
            });
    }

    function getBuilds(req, res, next) {
        res.send(teamcityService.getBuilds());
    }

    function getBuildInformation(req, res, next) {
        teamcityService.requestBuildInformation(req.params.id)
            .then(function (response) {
                res.send(response);
            })
    }

    function getAgents(req, res, next) {
        res.send(teamcityService.getAgents());
    }

    function getAgentInformation(req, res, next) {
        teamcityService.requestAgentInformation(req.params.id)
            .then(function (response) {
                res.send(response);
            })
    }
}
