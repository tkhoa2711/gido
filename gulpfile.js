'use strict';

var gulp = require('gulp'),
  nodemon = require('gulp-nodemon');

gulp.task('dev', function () {
  process.env.NODE_ENV = 'development';
});

gulp.task('nodemon', function () {
  nodemon({
    script: 'server.js',
    nodeArgs: ['--debug']
  });
});

gulp.task('default', ['dev', 'nodemon']);
