angular.module('statusdash.dashboard.widgets.text.directives', [])
    .directive('textWidget', function ($window) {
        return {
            restrict: 'E',
            scope: {data: '='},
            template: '<div class="text-widget" ng-class="{\'has-error\': data.status===\'FAILURE\'}">' +
            '<span><h3>{{data.id}}</h3></span>' +
            '<uib-progressbar value="progress" type="success" animate="true"></uib-progressbar>' +
            '</div>',
            link: function ($scope, element, attr) {
                $scope.progress = 0;
                var start = 0;

                function step(timestamp) {
                    console.log(timestamp);
                    if (!start) start = timestamp;
                    var progress = timestamp - start;
                    $scope.progress += progress / 200;
                    if ($scope.progress < 100) {
                        window.requestAnimationFrame(step);
                    }
                }

                $window.requestAnimationFrame(step);
            }
        }
    });
