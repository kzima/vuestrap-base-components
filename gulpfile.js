var gulp = require('gulp');
var data = require('gulp-data');
var path = require('path');
var rename = require('gulp-rename');
var ejs = require("gulp-ejs");
var highlight = require('gulp-snippet-highlight');

gulp.task('generate-components', function () {
  return gulp.src(["./src/docs/components/**/*.ejs"])
    .pipe(ejs())
    .pipe(rename(function (path) {
      path.basename = 'index'
      path.extname = '.html'
     }))
    .pipe(gulp.dest("./docs"));
});

gulp.task('generate-index', function () {
  return gulp.src("./src/docs/templates/index.ejs")
    .pipe(ejs())
    .pipe(rename("index.html"))
    .pipe(gulp.dest("./"));
});

gulp.task('highlight-snippet', function () {
  return gulp.src("./src/docs/components/**/snippet.html")
    .pipe(highlight({
      language: "html",
    }))
    .pipe(rename(function (path) {
      path.basename = 'snippet'
      path.extname = '.html'
    }))
    .pipe(gulp.dest("./docs"));
});

gulp.task('default', ['generate-components', 'generate-index', 'highlight-snippet']);

// Rerun the task when a file changes
gulp.task('watch', ['default'], function() {
  gulp.watch(['src/**/*.html', 'src/**/*.ejs'], ['default']);
});