'use strict';

const gulp = require('./gulp')([
    'browserify',
    'watch',
    'test',
    'minify',
    'bower'
]);

gulp.task('build', ['browserify', 'minify', 'bower']);
gulp.task('develop', ['test', 'watch']);
gulp.task('default', ['test']);
