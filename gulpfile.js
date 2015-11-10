'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass');
let sourcemaps = require('gulp-sourcemaps');
let webpack = require('webpack-stream');

let publicPath = './public';
let buildPath = publicPath + '/build';

gulp.task('sass:dev', function () {
  let sassOptions = {
    outputStyle: 'expanded',
    sourceComments: true
  };

  gulp.src(publicPath + '/styles/sass/**/*.scss')
    .pipe(sass(sassOptions))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(buildPath + '/styles'));
});

gulp.task('sass:prod', function () {

  let sassOptions = {
    outputStyle: 'compressed'
  };

  gulp.src(publicPath + '/styles/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions))
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(buildPath + '/styles'));
});

gulp.task('webpack:dev', function() {

  return gulp.src(publicPath + '/javascripts/routes.js')
    .pipe(webpack( require('./webpack.dev.js') ))
    .pipe(gulp.dest(buildPath + '/js'));
});

gulp.task('webpack:prod', function() {

  return gulp.src(publicPath + '/javascripts/routes.js')
    .pipe(webpack( require('./webpack.prod.js') ))
    .pipe(gulp.dest(buildPath + '/js'));
});

gulp.task('build', ['sass:prod', 'webpack:prod']);

gulp.task('watch', ['sass:dev', 'webpack:dev'], function() {
  gulp.watch(publicPath + '/styles/sass/**/*.scss', ['sass:dev']);
  gulp.watch(publicPath + '/javascripts/**/*.js', ['webpack:dev']);
});
