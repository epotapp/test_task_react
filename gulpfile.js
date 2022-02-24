const sourcemaps = require('gulp-sourcemaps');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

sass.compiler = require('node-sass');

const bundleSass = () => {
  return gulp.src('./src/styles/style.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./src/styles/'))
};


exports.bundleSass = bundleSass;
exports.watch = () => {
  gulp.watch('./static/sass/**/*.scss', bundleSass)
}; 