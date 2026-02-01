---
title: 【Gulp】nunjucks網頁模版
date: 2023-08-20
tags: ["gulp"]
---
### gulp-nunjucks-render
1. 在專案中打開終端機安裝`gulp-nunjucks-render`套件
```html
$ npm install gulp-nunjucks-render
```

-----------------------------------------------
2. 在gulpfile.js新增程式碼
```js
const gulp = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');

gulp.task('layout',function(){
  return gulp
    .src('src/**/*.html')
    .pipe(nunjucksRender({
      path: ['src/templates']
    })) 
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
});
```

-----------------------------------------------
3. 在終端機執行指令
```html
$ gulp layout
```

-----------------------------------------------
4. 執行後會自動壓縮img裡的圖片，到dist裡的img資料夾裡
```html
you project
├─── node_modules/    
├─── dist/
│     └─── index.html        # 模板＋內容
│ 
├─── src/
│     ├─── templates/
│     │     │
│     │     └─── layout.njk  # 模板<head>、<body>
│     │
│     └─── index.html        # 內容<main>、<main>
│
├─── gulpfile.js
├─── package-lock.json
└─── package.json
```

-----------------------------------------------
### nunjucks模板基礎用法1
#### 將重複標籤寫成模板
* layout.njk(父層)：
```html
<!DOCTYPE html>
<html lang="zh-tw">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>網頁標題名稱</title>
  <link rel="stylesheet" href="css/all.css">
</head>
<body cz-shortcut-listen="true">
  <main>
    {% block content %}{% endblock %}
  </main>
  <script src="js/all.js"></script>
</body>
</html>
```
* index.html(子層)：
```html
{% extends "layout.njk" %}

{% block content %}
<div class="container">
  <p>每一頁不同的內容寫在這</p>
</div>
{% endblock %}
```
* 渲染出的結果：
```html
<!DOCTYPE html>
<html lang="zh-tw">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>網頁標題名稱</title>
  <link rel="stylesheet" href="css/all.css">
</head>
<body cz-shortcut-listen="true">
  <main>
    <div class="container">
      <p>每一頁不同的內容寫在這</p>
    </div>
  </main>
  <script src="js/all.js"></script>
</body>
</html>
```

-----------------------------------------------
### 從模板寫回父層
* index.html(子層)
```html
{% extends "layout.njk" %}

{% block content %}
<div class="container">
  每一頁不同的內容寫在這
</div>

{{ super() }}
寫回layout.njk(父層)的內容

{% endblock %}
```

-----------------------------------------------
### 判斷式顯示
* layout.njk(父層)：
```html
  {% if variable %}
  <p>如果是true就換出現這段</p>
  {% endif %}
```
* index.html(子層)：
```html
  {% set variable = true %}
```
* 渲染出的結果：
```html
  <p>如果是true就換出現這段</p>
```

-----------------------------------------------
* extends用於模板繼承
```html
<!-- layout.njk -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{% block title %}Default Title{% endblock %}</title>
</head>
<body>
    <div id="content">
        {% block content %}{% endblock %}
    </div>
</body>
</html>
```
```html
<!-- index.html -->
{% extends "layout.njk" %}

{% block content %}
撰寫的內容
{% endblock %}
```