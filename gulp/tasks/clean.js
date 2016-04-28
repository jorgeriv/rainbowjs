'use strict';

const gulp = require('gulp');
const del  = require('del');

module.exports = ()=>{
  return gulp.task('clean', ()=> {
    return del('dist/*');
  });
};
