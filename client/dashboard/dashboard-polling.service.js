angular.module('statusdash.dashboard.service.polling', [])
    .factory('dashboardPollingService', ['$http', '$timeout', function ($http, $timeout) {

        return {
            poll: poll
        };

        function poll() {
            $timeout(function timeoutPoll() {
                poll();
            }, 2000);
        }
    }]);
