'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function(){
  return gulp.src('scss/**/*.*')
    .pipe(sass())
    .pipe(autoprefixer({
			browsers: ['last 5 versions'],
			cascade: false
		}))
    .pipe(gulp.dest('css'));
});
