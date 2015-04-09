var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');
var rename = require("gulp-rename");
var less = require('gulp-less');
var plumber = require('gulp-plumber');

gulp.task('default',function(){
    console.log('task...');
});

gulp.task('clean', function () {
    return gulp.src('./static/dist/', {read: false})
        .pipe(clean());
});

gulp.task('minify-css', function() {
  gulp.src('./static/css/**/*.css')
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest('./static/dist/css/'))
});

gulp.task('compressjs', function() {
  gulp.src('./static/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./static/dist/js'))
});


gulp.task('less', function () {
    gulp.src('./static/less/**/*.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(gulp.dest('./static/css/'));
});

gulp.task('watch_less', function () {
    gulp.watch(['./static/less/**/*.less'], ['less']);
});

gulp.task('watch', ['watch_less']);

gulp.task('dist', ['minify-css', 'compressjs']);