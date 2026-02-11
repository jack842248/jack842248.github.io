---
title: Gulp將javascript整合成穩定版本
date: 2023-08-13
tags: ["gulp"]
---
## gulp-babel
1. 在專案中打開終端機安裝`gulp-babel`、`@babel/core`、`@babel/preset-env`套件
```html
$ npm install gulp-babel @babel/core @babel/preset-env
```
`@開頭的套件，表示這是一個由特定組織或作者維護的套件`

-----------------------------------------------
2. 在gulpfile.js新增程式碼
```js
const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('babel', function(){
  return gulp
    .src('src/js/*.js') //引用js檔案來源
    .pipe(
      babel({  //使用babel套件
        presets:['@babel/env'] //設定使用'@babel/env'套件進行編譯
      })
    )  
    .pipe(gulp.dest('dist/js')) //js編譯完成路徑
});
```

-----------------------------------------------
3. 在終端機執行指令
```html
$ gulp babel
```

-----------------------------------------------
4. 執行結果會將src裡的所有js檔(ES5、ES6、ES7)編譯，生成到dist裡變成穩定的all.js
```
you project
├─── node_modules/        
├─── dist/
│     │
│     └─── js/
│           │
│           └─── all.js   #編譯完成的js檔
│   
├─── src/
│     └─── js/
│           │
│           └─── all.js   #開發時編輯用的js檔
│     
├─── gulpfile.js          
├─── package-lock.json    
└─── package.json  
```

-----------------------------------------------
5. 回到index.html引入js
```html
<body>
    <script src="js/all.js"></script>
</body>
```

-----------------------------------------------
6. 回到gulpfile.js設置屬性
    * `minified`: 布林值，是否要壓縮代碼
```js
const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('babel', function(){
  return gulp
    .src('src/js/*.js') 
    .pipe(
      babel({
        presets:['@babel/env'],
        minified: true //壓縮代碼
      })
    )  
    .pipe(gulp.dest('dist/js')) 
});

gulp.task('default', gulp.series('babel'));
```

-----------------------------------------------
7. 【補充】安裝`gulp-plumber`編譯發生錯誤時，將訊息傳到控制台
```html
$ npm install gulp-plumber
```
```js
const gulp = require('gulp');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');

gulp.task('babel', function(){
  return gulp
    .src('src/js/*.js') 
    .pipe(plumber())
    .pipe(
      babel({
        presets:['@babel/env'],
        minified: true //壓縮代碼
      })
    )  
    .pipe(gulp.dest('dist/js')) 
});

gulp.task('default', gulp.series('babel'));
```
-----------------------------------------------
8. 最後，在終端機執行`gulp`即可完成任務
```html
$ gulp
```