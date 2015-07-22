var gulp = require('gulp');
var ts = require('gulp-typescript');
var rimraf = require('gulp-rimraf');
 
gulp.task('cleanBuiltDir', function(){
  return gulp.src('built').pipe(rimraf());
}); 
 
gulp.task('buildBackEnd', ['cleanBuiltDir'],  function () {
  var tsResult = gulp.src('src/**/*.ts')
    .pipe(ts({
        module: 'CommonJS'
      }));
  return tsResult.js.pipe(gulp.dest('built/'));
});

gulp.task('buildFrontEnd', ['cleanBuiltDir'],  function () {
  var tsResult = gulp.src('src/**/*.ts')
    .pipe(ts({
        module: 'CommonJS'
      }));
  return tsResult.js.pipe(gulp.dest('built/'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.ts', ['typescript']);
});

gulp.task('default', ['buildBackEnd', 'buildFrontEnd']);