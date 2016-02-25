angular.module('statusdash.dashboard.controller', ['ui.bootstrap'])
    .controller('dashboardController', ['$scope', 'dashboardPollingService', function ($scope, dashboardPollingService) {


        $scope.items = [];
        $scope.max = 200;

        $scope.$on('buildsPolled', function (event, data) {

            if ($scope.items.length == 0) {
                $scope.items = data;
            }

            for (var i = 0; i < $scope.items.length; i++) {

                //if (i < 8) {
                //    $scope.items[i].col = 1;
                //}

                for (var j = 0; j < data.length; j++) {
                    if ($scope.items[i].id == data[j].id) {
                        $scope.items[i].id = data[j].id;
                        $scope.items[i].status = data[j].status;
                    }
                }
            }
        });

        dashboardPollingService.poll();
    }]);
