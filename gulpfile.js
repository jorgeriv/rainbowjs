'use strict';

const gulp = require('./gulp')([
    'browserify',
    'watch',
    'test'
]);

gulp.task('build', ['browserify']);
gulp.task('develop', ['test', 'watch']);
gulp.task('default', ['test']);
