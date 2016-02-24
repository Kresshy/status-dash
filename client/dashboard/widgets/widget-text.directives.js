angular.module('statusdash.dashboard.widgets.text.directives', [])
    .directive('textWidget', function () {
        return {
            restrict: 'E',
            scope: false,
            template: '<span>{{item.id}}</span>',
            link: function ($scope, element, attr) {

            }
        }
    });
