var gulp = require('gulp');
var appFwJs = ['app.js',
    'framework_components/**/*.js',
    'framework_components/**/*.html',
    'framework_components/**/**/*.js',
    'framework_components/**/**/*.html',

    '!framework_components/**/*-spec.js',
    '!framework_components/**/**/*-spec.js'
];
var servicesJs = [
    'services/**/*.js',
    'services/**/**/*.js',

    '!services/**/*-spec.js',
    '!services/**/**/*-spec.js'
];
var widgetsJs = [
    'widgets/**/*.js',
    'widgets/**/*.html',
    'widgets/**/**/*.js',
    'widgets/**/**/*.html',

    '!widgets/**/*-spec.js',
    '!widgets/**/**/*-spec.js'
];
var scssFramework = ['main.scss', 'styles/**/*.scss', 'framework_components/**/*.scss'];
var scssWidgets = ['widgets/**/*.scss'];
var distFiles = ['dist/**/*.css', 'dist/**/*.js', 'index.html'];
var livereload = require('gulp-livereload');

function reload() {
    livereload.reload();
}

gulp.task('live-reload', function () {
    reload();
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(appFwJs, ['dist-framework']);
    gulp.watch(servicesJs, ['dist-services']);
    gulp.watch(widgetsJs, ['dist-widgets']);
    gulp.watch(scssFramework, ['sass-framework']);
    gulp.watch(scssWidgets, ['sass-widgets']);
    gulp.watch(distFiles, ['live-reload']);
});


module.exports = {
    appFwJs: appFwJs,
    servicesJs: servicesJs,
    widgetsJs: widgetsJs,
    distFiles: distFiles
};
