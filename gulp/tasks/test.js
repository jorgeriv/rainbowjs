'use strict';

const gulp = require('gulp');
const jasmine = require('gulp-jasmine');
module.exports = ()=>{
  return gulp.task('test', () => {
    gulp.src('test/index.js')
    .pipe(jasmine());
  });
};
