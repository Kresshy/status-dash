var ioc = require('../lib/ioc');
var path = require('path');

process.env.ENVIRONMENT = process.env.ENVIRONMENT || 'local';

var DiC = ioc.createContainer({modulesPath: path.join(__dirname, '../modules')});

DiC.bootModules();

var runner = DiC.create('express/runner');
runner.run();
