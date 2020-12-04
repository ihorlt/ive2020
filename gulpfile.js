const { src, dest, watch, series } = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const ejs = require('gulp-ejs');
const rename = require('gulp-rename');
const connect = require('gulp-connect');


function generateHTML(cb) {
    src('./views/index.ejs')
        .pipe(ejs({
            title: 'Hello Semaphore CI!',
        }))
        .pipe(rename({
            extname: '.html'
        }))
        .pipe(dest('./'));
    cb();
}

function javascript(cb) {
    src(['./src/models/*.js', './src/components/*.js', './src/main.js'])
        .pipe(babel())
        .pipe(concat('app.js'))
        .pipe(dest('./js/'));
        cb();
}

function connectFn() {
    connect.server({
      livereload: true
    });
  }

function defaultTask(cb) {
    connectFn();
    watch('./views/**.ejs', generateHTML);
    watch('./src/**/*.js', series(javascript));
    cb();
}

exports.default = defaultTask
