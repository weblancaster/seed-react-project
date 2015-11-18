'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass'); // compile sass to css
let sourcemaps = require('gulp-sourcemaps'); // generate sourcemaps from raw files
let webpack = require('webpack-stream'); // Run webpack through a stream interface aka make compatible with gulp
let concat = require('gulp-concat'); // combine multiple files in one
let uglify = require('gulp-uglify'); // parse js files and apply any compression options changing the output code
let minifyCss = require('gulp-minify-css'); // remove css spacing "compress"

const publicPath = './public';
const buildPath = publicPath + '/build';

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

gulp.task('webpack:dev', function () {

  return gulp.src(publicPath + '/javascripts/routes.jsx')
    .pipe(webpack(require('./webpack.dev.js')))
    .pipe(gulp.dest(buildPath + '/javascripts'));
});

gulp.task('webpack:prod', function () {

  return gulp.src(publicPath + '/javascripts/routes.jsx')
    .pipe(webpack(require('./webpack.prod.js')))
    .pipe(gulp.dest(buildPath + '/javascripts'));
});

gulp.task('css:vendor', function (callback) {
  return gulp.src([
    './node_modules/normalize.css/normalize.css',
    './node_modules/github-markdown-css/github-markdown.css'
  ])
    .pipe(sourcemaps.init())
    .pipe(concat('vendors.min.css'))
    .pipe(minifyCss())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(buildPath + '/vendors'))
    .on('error', function(err) {
      throw new Error(err, 'Can\' concat and/or minify css:vendor')
    });
});

gulp.task('build', ['sass:prod', 'webpack:prod', 'css:vendor']);

gulp.task('watch', ['sass:dev', 'webpack:dev'], function () {
  gulp.watch(publicPath + '/styles/sass/**/*.scss', ['sass:dev']);
  gulp.watch([publicPath + '/javascripts/**/*.js', publicPath + '/javascripts/**/*.jsx'], ['webpack:dev']);
});
