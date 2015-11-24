'use strict';

var express = require('express');
var path = require('path');

module.exports = statusBoardModuleBoot;
module.exports['@singleton'] = true;
module.exports['@require'] = [
    'express/middlewares/middlewares',
    'express/routerFactory'
];

function statusBoardModuleBoot(middlewares, routerFactory) {
    return {
        boot: function () {
            var app = routerFactory.create();

            app.use('/', function(req, res, next) {
                res.render('index');
            });

            middlewares.use(app);
        }
    };
}
