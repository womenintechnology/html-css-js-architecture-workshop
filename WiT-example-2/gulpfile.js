'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

// SASS task to compile SCSS
gulp.task('sass', function () {
  gulp.src('./assets/scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
});

// SASS watch task
gulp.task('sass:watch', function () {
  gulp.watch('./assets/scss/**/*.scss', ['sass']);
});

gulp.task('default', function() {
  // place code for your default task here
});
