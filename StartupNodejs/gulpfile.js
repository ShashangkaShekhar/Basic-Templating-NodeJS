"use strict";
var gulp = require("gulp");

var paths = {
    webroot: "./public/"
};
gulp.task('copy-css', function () {
    gulp.src('./bower_components/bootstrap/dist/css/bootstrap.min.css')
        .pipe(gulp.dest(paths.webroot + '/stylesheets/'));
});
gulp.task('copy-js', function () {
    gulp.src('./bower_components/jquery/dist/jquery.min.js')
        .pipe(gulp.dest(paths.webroot + '/javascripts/'));
    gulp.src('./bower_components/angularjs/angular.min.js')
        .pipe(gulp.dest(paths.webroot + '/javascripts/'));
    gulp.src('./bower_components/angular-ui-router/release/angular-ui-router.min.js')
        .pipe(gulp.dest(paths.webroot + '/javascripts/'));
});
gulp.task('build', function() {

});