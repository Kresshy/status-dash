angular.module('statusdash.dashboard.controller', [])
    .controller('dashboardController', ['$scope', function ($scope) {
        $scope.defaultItems = [
            {name: 'a'},
            {name: 'b'},
            {name: 'c'},
            {name: 'd'},
            {name: 'e'}
        ];
    }]);
