module.exports = dashboardService;
module.exports['@singleton'] = true;
module.exports['@require'] = [
    'teamcity/services/teamcityService'
];

function dashboardService(teamcityService) {

    var selectedTeamcityBuilds = [];
    var selectedTeamcityProjects = [];

    function mergeSelectedData() {
        var response = {};

        response.teamcity = {
            builds: selectedTeamcityBuilds,
            projects: selectedTeamcityProjects
        };

        return response;
    }

    function addTeamcityProject(id) {
        selectedTeamcityProjects.push(id);
    }

    function addTeamcityBuild(id) {
        selectedTeamcityBuilds.push(id);
    }

    function getDashboardData() {

    }
}
