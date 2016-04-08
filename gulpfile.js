const gulp = require('gulp');
const jasmine = require('gulp-jasmine');

gulp.task('test', () => { 'use strict';
gulp.src('test/index.js')
.pipe(jasmine());
});
gulp.task('build', ()=>{'use strict';

});
gulp.task('develop', ()=>{ 'use strict';
gulp.watch(['src/**/*.js', 'test/**/*.js'], ['test']);
});

gulp.task('default', ['test']);
