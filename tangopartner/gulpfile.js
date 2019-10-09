
//dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css'); 
//var uglify = require('gulp-uglify'); 
var rename = require('gulp-rename'); 
var changed = require('gulp-changed'); 

// Sass Origin and Destination
var SCSS_SRC = './src/Assets/scss/**/*.scss';
var SCSS_DEST = './src/Assets/css';

//compiler
gulp.task('compile_scss', function(){

  gulp.src(SCSS_SRC)
  .pipe(sass().on('error', sass.logError))
  .pipe(minifyCSS())
  .pipe(rename({suffix: '.min'}))
  .pipe(changed(SCSS_DEST))
  .pipe(gulp.dest(SCSS_DEST));
});

gulp.task('watch_css', function(){
  gulp.watch(SCSS_SRC, ['compile_scss'])
});

gulp.task('default', ['watch_scss']);

/*
function defaultTask(cb) {
  // place code for your default task here
  cb();
}

exports.default = defaultTask

*/