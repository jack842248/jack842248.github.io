---
title: Gulp最終gulp完整final版
date: 2023-08-21
tags: ["Gulp"]
---
## gulp-nunjucks-render
```js
const gulp                 = require('gulp');
const sass                 = require('gulp-sass')(require('sass'));
const babel                = require('gulp-babel');
const plumber              = require('gulp-plumber');
const postcss              = require('gulp-postcss');
const autoprefixer         = require('autoprefixer');
const cssnano              = require('cssnano');
const postcssPresetEnv     = require('postcss-preset-env');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const sourcemaps           = require('gulp-sourcemaps');
const concat               = require('gulp-concat');
const browserSync          = require('browser-sync').create();
const del                  = require('del');
const imagemin             = require('gulp-imagemin');
const newer                = require('gulp-newer');
const nunjucksRender       = require('gulp-nunjucks-render');

function clean(){
    return del(['dist/**/*','!dist/img'],{
        gitignore: true,
        force: true
    })
        .src('src/*.html') 
        .pipe(gulp.dest('dist')) 
}

function layout(){
    return gulp
        .src('src/**/*.html')
        .pipe(nunjucksRender({
            path: ['src/templates']
        })) 
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream())
}

function sass(){
    return gulp
        .src('src/scss/*.*')
        .pipe(
            sass(
                outputStyle: 'compressed' //nested | expanded | compact | compressed
            ).on('error',sass.logError)
        )
        .pipe(
            postcss([
                postcssFlexbugsFixes(),
                postcssPresetEnv(),
                autoprefixer(),
                cssnano({
                    preset: "advanced"
                })
            ])
        )
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest(dist/css))
        .pipe(browserSync.stream())
}

function concat(){
    return gulp
        .src([
            'node_modules/jquery/dist/jquery.slim.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
            'src/js/*.js'
        ])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist/css'))
}

function babel(){
    return gulp
        .src('src/js/*.js')
        .pipe(plumber())
        .pipe(
            babel({
                presets: ['@babel/env'],
                minified: true
            })
        )
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream())
}

function imagemin(){
    return gulp
        .src('src/img/*')
        .src(newer('dist/img'))
        .pipe(
          imagemin([
            imagemin.mozjpeg({
              quality: 80,
            }),
            imagemin.optipng({
              optimizationLevel: 1
            }),
            imagemin.gifsicle({
              interlaced : true
            }),
            imagemin.gifsicle()
          ])
        )
        .pipe(gulp.dest('dist/img'))
}

function watch(){
    browserSync.init({
        server: { 
          baseDir: 'dist',
        },
        port: 3000,
        reloadDelay: 0,
        browser: 'google chrome',
        open: true
    });
    gulp.watch('src/**/*.html', gulp.series('copyHTML'));
    gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
}


exports.default = series('clean', 'copyHTML', 'sass', 'babel', 'imagemin', 'watch');
```