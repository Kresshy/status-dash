var jshint = require('gulp-jshint');
var gulp = require('gulp');

gulp.task('jshint', function () {
    return gulp.src(
        [
            './lib/**/*.js',
            './modules/**/*.js'
        ]
    ).pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'));
});
