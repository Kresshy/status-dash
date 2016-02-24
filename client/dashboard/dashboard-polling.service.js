angular.module('statusdash.dashboard.service.polling', [])
    .factory('dashboardPollingService', ['$http', '$timeout', '$rootScope', function ($http, $timeout, $rootScope) {

        return {
            poll: poll,
            getAvatars: getAvatars,
            getBuilds: getBuilds
        };

        function getBuilds() {
            return $http.get('/teamcity/builds')
                .then(function(response){
                    $rootScope.$broadcast('buildsPolled', response.data);
                    return response;
                });
        }

        function getAvatars() {
            return $http.get('/jira/avatars')
                .then(function(response){
                    $rootScope.$broadcast('avatarsPolled', response.data);
                    return response;
                });
        }

        function poll() {
            $timeout(function timeoutPoll() {
                $http.get('/teamcity/builds')
                    .then(function(response){
                        $rootScope.$broadcast('buildsPolled', response.data);
                    });
                poll();
            }, 2000);
        }
    }]);
