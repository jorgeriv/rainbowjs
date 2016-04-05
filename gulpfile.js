const gulp = require('gulp');
const jasmine = require('gulp-jasmine');

gulp.task('test', () => { 'use strict';
  gulp.src('test/index.js')
  .pipe(jasmine());
});

gulp.task('default', ['test']);
