var gulp = require('gulp');

gulp.task('watch', function () {
    gulp.watch([
        'client/**/*.js',
        'client/*.js'
    ], ['jshint', 'dist-client']);

    gulp.watch([
        'client/**/*.scss',
        'client/*.scss'
    ], ['sass']);
});
