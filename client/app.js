angular.module('statusdash', [
    'gridster',
    'statusdash.dashboard.controller',
    'statusdash.dashboard.directives'
]).run(['gridsterConfig', function (gridsterConfig) {

    gridsterConfig.columns = 10;
    gridsterConfig.colWidth = 150;
    gridsterConfig.rowHeight = 150;
    gridsterConfig.margins = [10, 10];

    gridsterConfig.draggable = {
        enabled: true, // whether dragging items is supported
        handle: '.drag'
    };

    gridsterConfig.resizable = {
        enabled: true,
        handles: ['se']
    };

}]);

