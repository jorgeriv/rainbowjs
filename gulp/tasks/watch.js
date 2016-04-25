'use strict';
const gulp = require('gulp');
module.exports = ()=>{
  return gulp.task('watch',['test'], ()=>{
    gulp.watch(['src/**/*.js', 'test/**/*.js'], ['test']);
  });
};
