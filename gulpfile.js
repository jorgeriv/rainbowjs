const gulp = require('gulp');
const jasmine = require('gulp-jasmine');
const requirejs = require('requirejs');

gulp.task('test', () => { 'use strict';
gulp.src('test/index.js')
.pipe(jasmine());
});
gulp.task('build', ()=>{'use strict';
let config = {
  baseUrl: './src',
  name: 'rainbow',
  out: './build/rainbow-1.0.0.min.js'
};
requirejs.optimize(config);
});
gulp.task('develop', ()=>{ 'use strict';
gulp.watch(['src/**/*.js', 'test/**/*.js'], ['test']);
});

gulp.task('default', ['test']);
