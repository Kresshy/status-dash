var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function () {
    runSequence(
        'jshint',
        ['bower:js', 'bower:css', 'sass', 'dist-client'],
        'watch'
    );
});
