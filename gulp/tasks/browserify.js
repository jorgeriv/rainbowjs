'use strict';

const gulp = require('gulp');
const source = require('vinyl-source-stream');
const browserify = require('browserify');
const fs = require('fs');

function getPackageJsonVersion () {
  // We parse the json file instead of using require because require caches
  // multiple calls so the version number won't be updated
  return JSON.parse(fs.readFileSync('./package.json', 'utf8')).version;
}

module.exports = ()=>{
  return gulp.task('browserify', ['clean'], ()=>{
    let ver = getPackageJsonVersion();
    return browserify('./src/browser-rainbow.js')
    .bundle()
    //Pass desired output filename to vinyl-source-stream
    .pipe(source(`rainbow-${ver}.js`))
    // Start piping stream to tasks!
    .pipe(gulp.dest('./dist/'));
  });
};
