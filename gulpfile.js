// set up a require
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function (){
  gulp
    .src('scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});

gulp.task('watch', ['default'], function() {
  gulp.watch('app.js', function(){
    console.log('The file changed.');
  });
  gulp.watch('scss/**/*', ['styles']);
});

// create new task. first param = name
gulp.task('default', ['styles']);