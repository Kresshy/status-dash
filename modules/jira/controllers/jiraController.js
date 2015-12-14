module.exports = jiraController;
module.exports['@singleton'] = true;
module.exports['@require'] = [
    'jira/services/jiraService'
];

function jiraController(jiraService) {

    jiraService.init();

    return {
        getAllInformation: getAllInformation,
        getAvatars: getAvatars,
        getProjects: getProjects,
        getProjectInformation: getProjectInformation

    };

    function getAllInformation(req, res, next) {
        jiraService.requestAllEndpoints()
            .then(function (response) {
                res.send(response);
            });
    }

    function getAvatars(req, res, next) {
        res.send(jiraService.getAvatars());
    }

    function getProjects(req, res, next) {
        res.send(jiraService.getProjects());
    }

    function getProjectInformation(req, res, next) {
        jiraService.requestProjectInformation(req.params.id)
            .then(function (response) {
                res.send(response);
            });
    }
}
