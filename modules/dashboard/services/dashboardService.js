module.exports = dashboardService;
module.exports['@singleton'] = true;
module.exports['@require'] = [
    'teamcity/services/teamcityService'
];

function dashboardService(teamcityService) {

    var selectedTeamcityBuilds = [];
    var selectedTeamcityProjects = [];

    return {
        addTeamcityProject: addTeamcityProject,
        addTeamcityBuild: addTeamcityBuild,
        getDashboardData: getDashboardData
    };

    function mergeSelectedDataSources() {
        var mergedDataSources = {};

        mergedDataSources.teamcity = {
            builds: selectedTeamcityBuilds,
            projects: selectedTeamcityProjects
        };

        return mergedDataSources;
    }

    function addTeamcityProject(id) {
        selectedTeamcityProjects.push(id);
    }

    function addTeamcityBuild(id) {
        selectedTeamcityBuilds.push(id);
    }

    function getDashboardData() {
        var mergedDataSources = mergeSelectedDataSources();

        var requestedData = {
            teamcity: {
                builds: [],
                projects: []
            }
        };

        mergedDataSources.teamcity.projects.forEach(function (item, index) {
            teamcityService.requestProjectInformation(item)
                .then(function (response) {
                    requestedData.teamcity.projects.push(response);
                });
        });

        mergedDataSources.teamcity.builds.forEach(function (item, index) {
            teamcityService.requestBuildsInformation(item)
                .then(function (response) {
                    requestedData.teamcity.builds.push(response);
                })
        });

    }
}
