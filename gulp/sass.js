var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var merge = require('merge-stream');

gulp.task('sass', function () {
    gulp.src('./client/**/*.scss')
        .pipe(sass())
        .pipe(concat('index.css'))
        .pipe(minify())
        .pipe(gulp.dest('./public/styles/'));
});
