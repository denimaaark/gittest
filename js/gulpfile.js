var gulp = require('gulp');
var webserver = require('gulp-webserver');
var browserSync = require('browser-sync').create();
 
// ovo radi ali sporo, osvježava se svakih 5 sekundi 
gulp.task('webserver', function() {
  gulp.src("./", { interval: 500 })
    .pipe(webserver({
      port: 8888,
      livereload: true,
      directoryListing: false,
      open: true,
      fallback: "index.html"
    }));
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
  gulp.watch(["objekti/*", "js/*","./*.html"]).on('change', browserSync.reload);    
});

gulp.task('default', ['browser-sync']);