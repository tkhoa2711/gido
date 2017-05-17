'use strict';

var gulp = require('gulp'),
  jshint = require('gulp-jshint'),
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

gulp.task('lint', function () {
  return gulp.src(['*.js', 'config/**/*.js', 'modules/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('default', ['lint', 'dev', 'nodemon']);
