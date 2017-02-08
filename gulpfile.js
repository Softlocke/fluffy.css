"use strict";

var gulp         = require("gulp"),
    sass         = require("gulp-sass"),
    postCSS      = require("gulp-postcss"),
    cleanCSS     = require("gulp-clean-css"),
    sourceMaps   = require("gulp-sourcemaps"),
    rename       = require("gulp-rename"),
    autoPrefixer = require("autoprefixer");

gulp.task("sass", function () {
    return gulp.src("sass/**/*.scss")
        .pipe(sourceMaps.init())
        .pipe(sass().on("error", sass.logError))
        .pipe(postCSS([
            autoPrefixer()
        ]))
        .pipe(cleanCSS())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(sourceMaps.write("."))
        .pipe(gulp.dest("./css"))
});

gulp.task("default", ["sass"]);