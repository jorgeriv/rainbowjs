'use strict';

const gulp = require('gulp');
const rename = require('gulp-rename');
const fs = require('fs');

function getPackageJsonVersion () {
  // We parse the json file instead of using require because require caches
  // multiple calls so the version number won't be updated
  return JSON.parse(fs.readFileSync('./package.json', 'utf8')).version;
}

module.exports = ()=>{
  let ver = getPackageJsonVersion();
  return gulp.task('bower', ['browserify'], ()=>{
    gulp.src(`dist/rainbow-${ver}.js`)
    .pipe(rename({basename:'rainbow', extname:'.js'}))
    .pipe(gulp.dest('dist'));
  });
};
