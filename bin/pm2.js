'use strict';

var pm2 = require('pm2');

pm2.connect(function () {
    /* eslint-disable camelcase */
    pm2.start({
            script: './bin/www.js',
            exec_mode: 'cluster',
            instances: 'max',
            max_memory_restart: '256M',
            name: 'status-dash',
            merge_logs: true
        },  /* eslint-enable camelcase */
        function (/*err, apps*/) {
            pm2.disconnect();
        });
});
