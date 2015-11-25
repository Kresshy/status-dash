var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function () {
    runSequence(
        'clean',
        ['dist-main', 'sass-framework', 'dist-widgets', 'sass-widgets'],
        'start-server',
        'watch');
});
