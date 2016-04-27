'use strict';

const gulp = require('gulp');
const rename = require('gulp-rename');
const fs = require('fs');

  // We parse the json file instead of using require because require caches
  // multiple calls so the version number won't be updated
let pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
let bowerjson = JSON.stringify({
  'name': pkg.name,
  'description': pkg.description,
  'main': 'rainbow.js',
  'authors': [
    'Jorge Rivera <jorgeriv@gmail.com>'
  ],
  'license': pkg.license,
  'keywords': pkg.keywords,
  'homepage': pkg.homepage,
  'moduleType': [
    'globals',
    'node'
  ],
  'ignore': []
}, null, 2);

module.exports = ()=>{
  return gulp.task('bower', ['browserify'], ()=>{
    gulp.src(`dist/rainbow-${pkg.version}.js`)
    .pipe(rename({basename:'rainbow', extname:'.js'}))
    .pipe(gulp.dest('bower-rainbow'));

    // Create bower.json
    fs.writeFile('./bower-rainbow/bower.json', bowerjson, 'utf-8');
  });
};
