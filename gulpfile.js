'use strict';

const gulp = require('./gulp')([
    'browserify',
    'watch',
    'test',
    'minify',
    'bower',
    'clean'
]);

gulp.task('build', ['clean', 'browserify', 'minify', 'bower']);
gulp.task('develop', ['test', 'watch']);
gulp.task('default', ['test']);
