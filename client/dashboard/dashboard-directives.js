angular.module('statusdash.dashboard.directives', [])
    .directive('widget', function () {
        return {
            restrict: 'E',
            scope: false,
            template: '<span>{{item.name}}</span>',
            link: function ($scope, element, attr) {

            }
        }
    });
