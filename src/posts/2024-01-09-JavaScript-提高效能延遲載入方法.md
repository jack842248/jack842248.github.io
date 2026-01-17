---
title: 【JS】提高效能延遲載入方法
date: 2024-01-09
tags: ["javaScript"]
---
#
## 使用lozad.js套件
#
<!--more-->
#
1. 在`<head>`引入cdn
#
```html
<head>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/lozad/dist/lozad.min.js"></script>
</head>
```
#
2. 在標籤樣式`class`加上`lozad`，將`src`改成`data-src`
#
```html
<img class="lozad" data-src="image.png" />
```
#
3. 在js檔中：
#
```js
const observer = lozad();
observer.observe();
```
#
-----------------------------------------------
#
## script腳本載入async、defer
#
#### async
#
* 當瀏覽器遇到帶有async的`<script>`腳本會立即下載，並且在完成後立刻執行，同時不會中斷html渲染
* 若有多個async的`<script>`腳本，順序不會由上往下依序執行，是依檔案大小、下載速度決定
* 適合需要盡快執行，但不會影響渲染的腳本，同時下載可提高效能
* 例如：Google Analytics、Twitter、Facebook(分析、廣告、第三方追蹤)
#
```html
<!--Google Analytics-->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'GA_TRACKING_ID');
</script>

<!--Twitter、Facebook-->
<script async defer src="https://platform.twitter.com/widgets.js"></script>

<!--廣告-->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
```
#
#### defer
#
* 當瀏覽器遇到帶有defer的`<script>`會優先進行html渲染，同時異步下載，等待html渲染完成後才執行
* 若有多個defer的`<script>`腳本，會由上往下依序執行
* 適合需要解析後、不用立即執行的腳本
* 例如：初始化腳本、監聽事件、修改頁面上的內容、Bootstrap.js
#
```html
<!--頁面初始化腳本-->
<script defer src="js/init.js"></script>

<!--事件綁定腳本-->
<script defer src="js/dom.js"></script>

<!--Bootstrap.js-->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous" defer></script>
```