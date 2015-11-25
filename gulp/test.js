var gulp = require('gulp');
var gulpUtil = require('gulp-util');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');
var runSequence = require('run-sequence').use(gulp);

var testConfig = require('../config/config')().test;

// test-server
gulp.task('test:unit', function(done) {
    runCoverageAndUnitTests(testConfig.reporters.development, null, done);
});

// backendTestRunner
var runCoverageAndUnitTests = function (reporter, globals, callback) {
    gulp.src([
        'modules/**/*.js',
        '!modules/**/config/**'
    ]).pipe(istanbul({
            includeUntested: true
        }
    )).pipe(istanbul.hookRequire()) // Force `require` to return covered files
        .on('finish', function () {
            runTests(reporter, globals, ['tests/unit/**/*.js'], callback);
        });
};

var runTests = function(reporters, globals, gulpSrc, callback) {
    gulp.src(gulpSrc)
        .pipe(mocha({
            reporter: reporters.mocha,
            globals: globals
        }))
        .pipe(createCoverageReportTask(reporters.istanbul)) // create the reports after tests run
        .on('error', function(err) {
            // Make sure failed tests cause gulp to exit non-zero
            throw err;
        })
        .on('end', callback);
};

var createCoverageReportTask = function(istanbulSettings) {
    if (istanbulSettings) {
        return istanbul.writeReports({
            reporters: istanbulSettings
        });
    } else {
        return gulpUtil.noop();
    }
};
