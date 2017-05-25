'use strict';

var gulp = require('gulp'),
  jasmine = require('gulp-jasmine'),
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

gulp.task('jasmine', function () {
  gulp.src('modules/**/test/*.js')
    .pipe(jasmine({
      config: {
        spec_dir: '**/test',
        spec_files: [
          '*.test.js'
        ],
        stopSpecOnExpectationFailure: false,
        random: false
      }
    })).on('error', function (err) {
      console.log('Test(s) failed');
    });
});

gulp.task('test', ['lint', 'jasmine']);

gulp.task('default', ['lint', 'dev', 'nodemon']);
