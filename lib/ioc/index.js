'use strict';
var IoC = require('electrolyte');
var glob = require('glob');
var path = require('path');
var assert = require('assert');

function createContainer(params) {

    assert.ok(params);
    assert.ok(params || params.modulesPath);

    var modulesPath = params && params.modulesPath;

    var modules = [];

    if (modulesPath) {
        modules = glob.sync(modulesPath + '/*').map(function (modulePath) {
            return setupModule(modulePath);
        });
    }

    setupModule(path.join(__dirname, '../express'));
    setupModule(path.join(__dirname, '../../config'));
    setupModule(path.join(__dirname, '../http'));
    IoC.use(IoC.node(modulesPath));
    IoC.use(IoC.node_modules());

    IoC.addModule = function (modulePath) {
        modules.push(setupModule(modulePath));
    };

    IoC.bootModules = function () {
        modules.forEach(function (module) {
            var bootable = IoC.create(module + '/boot');
            bootable.boot();
        });
    };

    function setupModule(modulePath) {
        var separatorRegex = /(\\|\/)/;
        var moduleName = modulePath.split(separatorRegex).pop();

        try {
            if (modulePath.indexOf('node_modules') !== -1) {
                IoC.use(moduleName, IoC.node_modules(modulePath));
            }

            IoC.use(moduleName, IoC.node(modulePath));
        } catch (e) {
            if (e.code !== 'MODULE_NOT_FOUND') {
                throw e;
            }
        }

        return moduleName;
    }

    return IoC;
}

module.exports = {
    createContainer: createContainer
};
