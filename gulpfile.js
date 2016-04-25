'use strict';

const gulp = require('./gulp')([
    'browserify',
    'watch',
    'test',
    'minify'
]);

gulp.task('build', ['browserify', 'minify']);
gulp.task('develop', ['test', 'watch']);
gulp.task('default', ['test']);
