'use strict';
const gulp = require('gulp');

gulp.task('develop', ()=>{
gulp.watch(['src/**/*.js', 'test/**/*.js'], ['test']);
});
