'use strict'

var gulp = require('gulp'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat'),	
		sass = require('gulp-sass'),
		maps = require('gulp-sourcemaps'),
		babel = require("gulp-babel"),		
		autoprefixer = require('gulp-autoprefixer'); 


gulp.task("compileSass", function(){
	return gulp.src("development/sass/styles.scss")
	.pipe(maps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
      cascade: true
    }))
	.pipe(maps.write('./'))
	.pipe(gulp.dest('src/public/css'));
});

gulp.task("concatScripts", function(){
		return gulp.src([
			'development/javascript/mapStyles.js',
			'development/javascript/main.js'])
		.pipe(maps.init())
		.pipe(concat('main.js'))
		.pipe(maps.write('./'))		
		.pipe(gulp.dest('src/public/js'));
});

gulp.task("transpile", ["concatScripts"], function () {
	  return gulp.src("src/public/js/main.js")
	    .pipe(babel())
	    .pipe(gulp.dest("src/public/js/"));
});

gulp.task('watchFiles', function() {
	gulp.watch('development/sass/**/*.scss', ['compileSass']);
	gulp.watch('development/javascript/main.js', ['concatScripts'])
});