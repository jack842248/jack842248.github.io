---
title: 【JS】BOM瀏覽器物件
date: 2021-02-08
tags: ["javaScript"]
---
#
## BOM(Browser Object Model)
#
<!--more-->
#
* 瀏覽器(window)提供的物件原型。
#
|名稱|中文|
|---|---|
|history|瀏覽歷史紀錄|
|frames|框架|
|location|路徑位置|
|document|DOM元素|
|screen|使用裝置資訊|
|navigator|版本資訊|
#
-----------------------------------------------
#
## 回到上一頁、下一頁
#
```html
<button class="back" type="button">回上一頁</button>
<button class="next" type="button">往下一頁</button>
```
#
```js
let back = document.querySelector(".back");
let next = document.querySelector(".next");

//點擊"回上一頁"按鈕時
back.addEventListener("click",function(){
  window.history.back();
})

//點擊"往下一頁"按鈕時
next.addEventListener("click",function(){
  window.history.forward();
})
```
#
-----------------------------------------------
#
## 列印
#
```html
<button class="print" type="button">列印</button>
```
#
```js
let print = document.querySelector(".print");

print.addEventListener("click",function(){
  window.print();
})
```
#
`跟對網頁按右鍵"列印"一樣`
#
-----------------------------------------------
#
## 前往網址
#
```html
<button class="website1" type="button">網址1</button>
<button class="website2" type="button">網址2</button>
```
#
```js
let website1 = document.querySelector(".website1");
let website2 = document.querySelector(".website2");

//點擊"網址1"按鈕時
website1.addEventListener("click",function(){
  window.open("https://www.google.com.tw/");
})

//點擊"網址2"按鈕時
website2.addEventListener("click",function(){
  location.href = "https://www.google.com.tw/";
})
```
#
-----------------------------------------------
#
## 取得瀏覽器高度
#
#
* window.innerHeight，可以取得瀏覽器可視高度。
#
* window.outerHeight，可以取得整個瀏覽器高度。
#
* window.onresize，當拖動瀏覽器時觸發。
#
```html
<div class="banner"></div>
<section>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum quos facilis praesentium, dolore impedit ea est reprehenderit sapiente aliquam aspernatur odio expedita voluptates repellendus nobis modi, eveniet itaque tempore aliquid distinctio, quia rem sit! Itaque, voluptas praesentium sint facere nulla est saepe tenetur inventore ipsum consequatur tempore soluta aspernatur, non modi neque aperiam quibusdam, similique quaerat dolore cumque ducimus. Sint obcaecati, natus ipsum consequuntur facere numquam quibusdam, praesentium autem omnis deleniti porro, quae nesciunt perspiciatis qui repellat. Rem labore culpa tempora est blanditiis facere vel, error debitis ea atque quod dolor amet tenetur asperiores incidunt ipsum itaque, nemo doloribus ab!</p>
</section>
```
#
```css
.banner{
  width: 100%;
  height: auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("https://images.unsplash.com/photo-1731466450638-959a6f0d1514?q=80&w=2675&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
}
```
#
```js
let banner = document.querySelector(".banner");

banner.style.height = window.innerHeight+"px";

window.onresize = function(){
  banner.style.height = window.innerHeight+"px";
}
```
#