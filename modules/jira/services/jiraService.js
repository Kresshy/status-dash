module.exports = jiraService;
module.exports['@signleton'] = true;
module.exports['@require'] = [
    'request/requestPromise'
];

function jiraService(requestPromise) {
    var jiraUrl = "https://jira.atlassian.com/";
    var avatarsEndpoint = "rest/api/2/avatar/user/system";
    var projectsEndpoint = "/rest/api/2/project";

    var _avatars = [];
    var _projects = [];

    var requestOptions = {
        headers: {
            'Accept': 'application/json'
        },
        json: true // Automatically parses the JSON string in the response
    };

    // exported functions
    return {
        init: init,
        requestAllEndpoints: requestAllEndpoints,
        getAvatars: getAvatars,
        getProjects: getProjects,
        requestProjectInformation: requestProjectInformation
    };

    function init() {
        requestAllEndpoints();
        pollApiEndpoints();
    }

    function pollApiEndpoints() {
        setTimeout(function () {
            requestAllEndpoints()
                .then(pollApiEndpoints);
        }, 1000 * 60);
    }

    function requestAllEndpoints() {
        return requestAvatars().then(function (response) {
            _avatars = response.system;
        }).then(requestProjects).then(function (response) {
            _projects = response;
        })
            .then(function () {
            return {
                avatars: _avatars,
                projects: _projects
            };
        });
    }

    function requestAvatars() {
        requestOptions.uri = jiraUrl + avatarsEndpoint;
        return requestPromise(requestOptions);
    }

    function requestProjects() {
        requestOptions.uri = jiraUrl + projectsEndpoint;
        return requestPromise(requestOptions);
    }

    function requestProjectInformation(id) {
        requestOptions.uri = jiraUrl + projectsEndpoint + "/" + id;
        return requestPromise(requestOptions);
    }

    function getAvatars() {
        return _avatars;
    }

    function getProjects() {
        return _projects;
    }
}
