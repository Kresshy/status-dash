var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var filter = require('gulp-filter');

gulp.task('bower:js', function () {
    gulp.src(mainBowerFiles({
        paths: {
            bowerDirectory: './public/components',
            bowerrc: './.bowerrc',
            bowerJson: './bower.json'
        }
    })).pipe(filter('*.js'))
        .pipe(concat('vendor.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('./public/scripts/'));
});

gulp.task('bower:css', function () {
    gulp.src(mainBowerFiles())
        .pipe(filter('*.css'))
        .pipe(concat('vendor.css'))
        //.pipe(minify())
        .pipe(gulp.dest('./public/styles/'));
});
