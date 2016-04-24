'use strict';
const gulp = require('gulp');
const uglify = require('gulp-uglify');

gulp.task('minify', function() {
  return gulp.src('src/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});
