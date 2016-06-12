// set up a require
var gulp = require('gulp');

gulp.task('watch', function() {
  gulp.watch('app.js', function(){
    console.log('The file changed.');
  });

});

// create new task. first param = name
gulp.task('default', function() {
  console.log('hello again');
});