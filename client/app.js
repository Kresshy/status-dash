angular.module('statusdash', [
    'gridster',
    'angularUUID2',
    'statusdash.dashboard.controller',
    'statusdash.dashboard.service.data',
    'statusdash.dashboard.service.polling',
    'statusdash.dashboard.widgets.text.directives'
]).run(['gridsterConfig', function (gridsterConfig) {

    gridsterConfig.columns = 9;
    gridsterConfig.colWidth = 150;
    gridsterConfig.rowHeight = 150;
    gridsterConfig.margins = [15, 15];

    gridsterConfig.draggable = {
        enabled: true, // whether dragging items is supported
        handle: '.drag'
    };

    gridsterConfig.resizable = {
        enabled: true,
        handles: ['se']
    };

}]);

