var gulp = require('gulp');
var browserSync = require('browser-sync').create();
 
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
  gulp.watch(["objekti/*", "js/*","./*.html"]).on('change', browserSync.reload);    
});

gulp.task('default', ['browser-sync']);