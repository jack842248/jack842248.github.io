---
title: Gulp開啟本地端伺服器瀏覽網站
date: 2023-08-17
tags: ["Gulp"]
---
## browser-sync
1. 在專案中打開終端機安裝`browser-sync`、`gulp-sass`、`sass`套件(版本@1.62.0)
#
```bash
$ npm install browser-sync gulp-sass sass@1.62.0
```

-----------------------------------------------
2. 在gulpfile.js新增程式碼
```js
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

gulp.task('copyHTML', function(){ 
  return gulp
    .src('src/**/*.html') 
    .pipe(gulp.dest('dist')) 
    .pipe(browserSync.stream()); //更新到瀏覽器
});

gulp.task('sass', function(){
  return gulp
    .src('src/scss/*.*')
    .pipe(sass()
    .on('error',sass.logError))
    .pipe(gulp.dest('dist/css'));
    .pipe(browserSync.stream()); //更新到瀏覽器
});

gulp.task('watch', function(){
  browserSync.init({
    server: { 
      baseDir: 'dist', //指定伺服器的基本目錄
    },
  });
  gulp.watch('src/**/*.html', gulp.series('copyHTML'));
  gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
});
```

-----------------------------------------------
3. 在終端機執行指令
```bash
$ gulp watch
```

-----------------------------------------------
4. 執行結果會在dist複製出一個`index.html`，dist/css會生成`all.css`檔
```markdown
you project
├─── node_modules/        
├─── dist/
│     ├─── css/
│     │     │
│     │     └─── all.css
│     │
│     └─── index.html    
│ 
├─── src/
│     ├─── scss/
│     │     │
│     │     └─── all.scss
│     │
│     └─── index.html    
│
├─── gulpfile.js          
├─── package-lock.json    
└─── package.json   
```

-----------------------------------------------
5. 回到gulpfile.js設定其他屬性
    * `port`: 數字，指定代理伺服器的埠號
    * `reloadDelay`: 數字，重新加載延遲時間
    * `browser`: 字串，指定在哪個瀏覽器中打開網站
    * `open`: 布林值，指定是否自動打開瀏覽器
```js
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

gulp.task('copyHTML', function(){ 
  return gulp
    .src('src/*.html') 
    .pipe(gulp.dest('dist')) 
    .pipe(browserSync.stream()); 
});

gulp.task('sass', function(){
  return gulp
    .src('src/scss/**/*.*')
    .pipe(
      sass().on('error',sass.logError)
    )
    .pipe(gulp.dest('dist/css'));
    .pipe(browserSync.stream()); 
});

gulp.task('watch', function(){
  browserSync.init({
    server: {
      baseDir: 'dist',
    },
    port: 3000,
    reloadDelay: 0,
    browser: 'google chrome',
    open: true
  });
  gulp.watch('src/*.html', gulp.series('copyHTML'));
  gulp.watch('src/scss/**/*.*', gulp.series('sass'));
});

gulp.task('default', gulp.series('copyHTML','sass','watch'));
```

-----------------------------------------------
6. 最後，在終端機執行`gulp`即可完成任務
```bash
$ gulp
```