var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var streamqueue = require('streamqueue');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var filter = require('gulp-filter');


gulp.task('bower:js', function () {
    streamqueue({objectMode: true},
        gulp.src('./bower_components/jquery/dist/jquery.js'),
        gulp.src(mainBowerFiles({
            paths: {
                bowerDirectory: './bower_components',
                bowerrc: './.bowerrc',
                bowerJson: './bower.json'
            }
        }))
    ).pipe(filter('*.js'))
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('./public/scripts/'));
});

gulp.task('bower:css', function () {
    gulp.src(mainBowerFiles())
        .pipe(filter('*.css'))
        .pipe(concat('vendor.css'))
        //.pipe(minify())
        .pipe(gulp.dest('./public/styles/'));
});
