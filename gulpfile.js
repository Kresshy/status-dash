var gulp = require('gulp');
var fs = require('fs');
var path = require('path');

gulp.getFolders = getFolders;

process.env.ENVIRONMENT = process.env.ENVIRONMENT || 'local';

require('require-dir')('./gulp');

function getFolders(dir) {
    return fs.readdirSync(dir)
        .filter(function (file) {
            return fs.statSync(path.join(dir, file)).isDirectory();
        });
}
