var gulp = require ('gulp');

gulp.task ('upkeep', function () {
  gulp.watch('js/app.js', function () {
    console.log('The file changed');
    })
  })

  gulp.task ('default', function () {
    console.log('lol');
  })