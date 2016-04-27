'use strict';

const gulp = require('gulp');
const gulpUtil = require('gulp-util');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const rename = require('gulp-rename');
const fs = require('fs');

function getPackageJsonVersion () {
  // We parse the json file instead of using require because require caches
  // multiple calls so the version number won't be updated
  return JSON.parse(fs.readFileSync('./package.json', 'utf8')).version;
}

module.exports = ()=>{
  let ver = getPackageJsonVersion();
  return gulp.task('minify', ['browserify'], ()=>{
    gulp.src(`dist/rainbow-${ver}.js`)
    .pipe(babel({presets:['es2015']}))
    .pipe(uglify().on('error', gulpUtil.log))
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('dist'));
  });
};
