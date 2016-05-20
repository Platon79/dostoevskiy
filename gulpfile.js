'use strict';

const gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function(){
  return gulp.src('scss/**/*.*')
    .pipe(sass())
    .pipe(gulp.dest('css'));
});
