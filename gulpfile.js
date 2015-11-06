var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var webpack = require('gulp-webpack');

var publicPath = './public';
var buildPath = publicPath + '/build';

gulp.task('sass:dev', function () {
  var sassOptions = {
    outputStyle: 'expanded',
    sourceComments: true
  };

  gulp.src(publicPath + '/styles/sass/**/*.scss')
    .pipe(sass(sassOptions))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(buildPath + '/styles'));
});

gulp.task('sass:prod', function () {

  var sassOptions = {
    outputStyle: 'compressed'
  };

  gulp.src(publicPath + '/styles/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions))
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(buildPath + '/styles'));
});

gulp.task('build:webpack', function() {
  return gulp.src(publicPath + '/javascripts/components/main.jsx')
    .pipe(webpack( require('./webpack.gulp.js') ))
    .pipe(gulp.dest(buildPath + '/js'));
});

gulp.task('watch', function() {
  gulp.watch(publicPath + '/styles/sass/**/*.scss', ['sass:dev']);
  gulp.watch(publicPath + '/javascripts/components/**/*.jsx', ['build:webpack']);
});
