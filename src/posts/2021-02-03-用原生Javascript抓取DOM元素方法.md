---
title: 用原生Javascript抓取DOM元素方法
date: 2021-02-03
tags: ["javaScript"]
---
### 取得DOM元素方法
|方法|取得目標|回傳結果|
|---|---|---|
|.getElementById()|id|第一個符合的標籤|
|.getElementsByName()|name|物件|
|.getElementsByTagName()|<標籤>|物件|
|.querySelector()|id、class、<標籤>|第一個符合的標籤|
|.querySelectorAll()|id、class|物件|

-----------------------------------------------
### 抓取id元素
```html
<div id="apple">蘋果</div>
```
```js
//範例一
let apple1 = document.getElementById("apple");
console.log(apple1); //<div id="apple">蘋果</div>

//範例二
let apple2 = document.querySelector('#apple');
console.log(apple2); //<div id="apple">蘋果</div>
```

-----------------------------------------------
### 抓取name元素
```html
<div name="apple">蘋果</div>
```
```js
//範例一
let apple1 = document.getElementsByName("apple");
console.log(typeof(apple1)); //NodeList(類陣列物件)

//範例二
let apple2 = document.querySelector('[name="apple"]');
console.log(apple2[0]); //<div id="apple">蘋果</div>
```

-----------------------------------------------
### 抓取tag標籤
```html
<button type="button">按鈕</button>
```
```js
//範例一
let btn1 = document.getElementsByTagName("button");
console.log(typeof(btn1)); //HTMLCollection(即時更新的類陣列)

//範例二
let btn2 = document.querySelectorAll('button');
btn2[0].textContent = "蘋果"; //<button type="button">蘋果</button>
```

-----------------------------------------------
### 抓取class元素
```html
<ul class="list">
  <li><a href="#" class="nav-link">蘋果</a></li>
  <li><a href="#" class="nav-link">香蕉</a></li>
  <li><a href="#" class="nav-link">鳳梨</a></li>
</ul>
```
```js
//範例一
document.querySelector(".nav-link").textContent = "蓮霧";

//範例二
let list = document.querySelector(".list");
list.querySelectorAll(".nav-link")[0].textContent = "蓮霧";
```
#### 輸出結果：
```html
<ul>
  <li><a href="#" class="nav-link">蓮霧</a></li>
  <li><a href="#" class="nav-link">香蕉</a></li>
  <li><a href="#" class="nav-link">鳳梨</a></li>
</ul>
```
`querySelector若有多個，只會抓取第一個符合的元素`

-----------------------------------------------
### 抓取input值
```html
<input class="apple" type="text" value="蘋果">
```
```js
//範例一
let apple1 = document.querySelector(".apple");
apple1.value = "香蕉";

//範例二
let apple2 = document.querySelector(".apple");
apple2.setAttribute("value","香蕉");
console.log(typeof(apple.value)); //string
```
#### 輸出結果：
```html
<input class="apple" type="text" value="香蕉">
```