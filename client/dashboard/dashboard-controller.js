angular.module('statusdash.dashboard.controller', [])
    .controller('dashboardController', ['$scope', function ($scope) {
        $scope.items = [
            {name: 'a'},
            {name: 'b'},
            {name: 'c'},
            {name: 'd'},
            {name: 'e'}
        ];
    }]);
