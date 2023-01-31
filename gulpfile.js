/*
*Created by Sofia Widholm. 
*Webbutveckling III, Webbutveckling, Mittuniversitetet.
*Last update 2022-06-02
*/


/* Declarations of variables with import of packages */
const { src, dest, watch, series, parallel } = require("gulp");
const concat = require("gulp-concat");
const terser = require('gulp-terser');
const babel = require("gulp-babel");
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
/* Declaration of variable, import of package and creation of new instance */
const browserSync = require("browser-sync").create();



/* Save paths for different files */
const files = {
    /* Save path for html files */
    pathHTML: "src/**/*.html",
    /* Save path for scss files */
    pathSCSS: "src/scss/*.scss",
    /* Save path for js  files */
    pathJS: "src/js/*.js",
    /* Save path for image files */
    pathImg: "src/images/*"
}

/* HTML - task */
function HTMLtask() {
    /* Get HTML files from src folder */
    return src(files.pathHTML)
    /* Place the HTML files in pub folder */
    .pipe(dest("pub"))
    /* Inject changes in browser without reloading */
    .pipe(browserSync.stream());
}

/* SCSS - task */
function SCSStask() {
    /* Get SCSS files from src folder */
    return src(files.pathSCSS)
    /* Initialization of sourcemap to track code from different files */
    .pipe(sourcemaps.init())
    /* Compile scss files (main and partials) to a single css file, minify the css file and display errors if there are any */
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    /* Sourcemaps write a file that is used to show in which file a line of code is located */    
    .pipe(sourcemaps.write('./maps'))
    /* Place the css file in the CSS folder in pub folder */
    .pipe(dest('pub/css'))
    /* Inject changes in browser without reloading */
    .pipe(browserSync.stream());
}

/* JS - task */
function JStask() {
    /* Get JS files from src folder */
    return src(files.pathJS)
    /* Initialization of sourcemap to track code from different files */
    .pipe(sourcemaps.init())
    /* Transpiles the written JS code to JS code based on older ECMAscript */
    .pipe(babel({
        presets: ['@babel/env']
    }))
    /* Put all code from JS files into one JS file */
    .pipe(concat('main.js'))
    /* Minify JS code */ 
    .pipe(terser())
    /* Sourcemaps write a file that is used to show in which file a line of code is located */  
    .pipe(sourcemaps.write('./maps'))
    /* Place the only JS file in the JS folder in pub folder */
    .pipe(dest("pub/js"))
    /* Inject changes in browser without reloading */
    .pipe(browserSync.stream());
}

/* Img - task */
function Imgtask() {
    /* Get images files from src folder */
    return src(files.pathImg)
    /* Minify image files */
    .pipe(imagemin())
    /* Place image files in the image folder in pub folder */
    .pipe(dest("pub/images"))
    /* Inject changes in browser without reloading */
    .pipe(browserSync.stream());
}

/* Watch tasks*/
function watchTasks() {
    /* Launch a server */
    browserSync.init({
        server: {
            /* Serve files from the pub directory */
            baseDir: "./pub"
        }
    })
    /* Files to watch, tasks to run if files are changed and reloading of browser if files are changed */
    watch([files.pathHTML, files.pathSCSS, files.pathJS, files.pathImg], parallel(HTMLtask, SCSStask, JStask, Imgtask)).on("change", browserSync.reload);
}

/* Export tasks in a series, make them public */
exports.default = series(
    /* Export all tasks for files at the same time */
    parallel(HTMLtask, SCSStask, JStask, Imgtask),
    /* Export task that watch the files in src folder */
    watchTasks
);