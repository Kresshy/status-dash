module.exports = teamcityController;
module.exports['@signleton'] = true;
module.exports['@require'] = [
    'statusDash/services/teamcityService'
];

function teamcityController(teamcityService) {

    teamcityService.init();

    return {
        getProjects: getProjects,
        getBuilds: getBuilds
    };

    function getProjects(req, res, next) {
        res.send(teamcityService.getProjects());
    }

    function getBuilds(req, res, next) {
        res.send(teamcityService.getBuilds());
    }
}
