var gulp = require('gulp');//gulp was a saved as a dependency
//Import gulp-sass
var sass = require('gulp-sass');

//Anything related to files will happen with this
gulp.task('styles', function() {
  //Take my source files, and output them into my css folder
  gulp
    .src('scss/styles.scss')
    //Running through sass compiler
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
    console.log('Styles have changed');
});
/*
⇒  gulp
hi
[13:52:32] Using gulpfile ~/Desktop/DevLeague/rebirth-of-reddit/gulpfile.js
[13:52:32] Task 'default' is not in your gulpfile
[13:52:32] Please check the documentation for proper gulpfile formatting
*/
gulp.task('default', function (){
  console.log("HIIII");
});

/*
⇒  gulp
[13:54:06] Using gulpfile ~/Desktop/DevLeague/rebirth-of-reddit/gulpfile.js
[13:54:06] Starting 'default'...
HIIII
[13:54:06] Finished 'default' after 154 μs
*/

//gitgutter

//Before you run, run the watch and styles
gulp.task('watch', ['styles'], function () {
  gulp.watch('js/*',  function () {
    console.log('Folder has updates');
  });
  //When files have changed in these,
  //we are going to run styles
  gulp.watch('scss/**/*', ['styles']);
});

gulp.task('default', ['styles']);