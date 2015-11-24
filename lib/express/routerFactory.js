'use strict';

module.exports = function () {
    return {
        create: function createRouter() {
            return require('express').Router();
        }
    };
};

module.exports['@singleton'] = true;

