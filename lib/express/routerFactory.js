module.exports = function () {
    'use strict';

    return {
        create: function createRouter() {
            return require('express').Router();
        }
    };
};

module.exports['@singleton'] = true;

