/* eslint-disable import/no-extraneous-dependencies */

const gulp = require('gulp');

// development
gulp.task('default', ['build'], () => {
  gulp.start('lint', 'watch', 'serve');
});

gulp.task('build', ['clean'], () => {
  gulp.start('styles', 'scripts', 'moveTemplates');
});
