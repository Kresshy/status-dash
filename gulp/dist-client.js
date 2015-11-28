var gulp = require('gulp');
var concat = require('gulp-concat');
var filter = require('gulp-filter');

var jsFiles = [
    '!./client/components/**/*.js',
    './client/**/*.js',
    './client/*.js'
];

gulp.task('dist-client', function () {
    gulp.src(jsFiles)
        .pipe(concat('index.js'))
        .pipe(gulp.dest('./public/scripts/'));
});
