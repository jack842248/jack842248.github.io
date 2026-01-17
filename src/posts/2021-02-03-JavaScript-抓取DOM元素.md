---
title: 【JS】抓取DOM元素
date: 2021-02-03
tags: ["javaScript"]
---
#
## 取得DOM元素方法
#
<!--more-->
#
|方法|取得目標|回傳結果|
|---|---|---|
|.getElementById()|id|第一個符合的標籤|
|.getElementsByName()|name|物件|
|.getElementsByTagName()|<標籤>|物件|
|.querySelector()|id、class、<標籤>|第一個符合的標籤|
|.querySelectorAll()|id、class|物件|
#
-----------------------------------------------
#
## 抓取id元素
#
```html
<div id="apple"></div>
```
#
```js
let apple = document.getElementById("apple");

console.log(apple); //<div id="apple"></div>

apple.textContent = "蘋果";
```
#
-----------------------------------------------
#
## 抓取name元素
#
```html
<div name="apple"></div>
```
#
```js
let apple = document.getElementsByName("apple");

console.log(typeof(apple)); //object

apple[0].textContent = "蘋果";
```
#
-----------------------------------------------
#
## 抓取tag標籤
#
```html
<button type="button">按鈕</button>
```
#
```js
let btn = document.getElementsByTagName("button");

console.log(typeof(btn)); //object

btn[0].textContent = "蘋果";
```
#
-----------------------------------------------
#
## 抓取class元素
#
```html
<ul class="list">
  <li><a href="#" class="nav-link">蘋果</a></li>
  <li><a href="#" class="nav-link">香蕉</a></li>
  <li><a href="#" class="nav-link">鳳梨</a></li>
</ul>
```
#
```js
// 第一種寫法
document.querySelector(".nav-link").textContent = "蓮霧";

// 第二種寫法
let list = document.querySelector(".list");
list.querySelectorAll(".nav-link")[0].textContent = "蓮霧";
```
#
#### 輸出結果：
#
```html
<ul>
  <li><a href="#" class="nav-link">蓮霧</a></li>
  <li><a href="#" class="nav-link">香蕉</a></li>
  <li><a href="#" class="nav-link">鳳梨</a></li>
</ul>
```
#
`querySelector若有多個，只會抓取第一個元素`
#
-----------------------------------------------
#
## 抓取input值
#
```html
<input class="text" type="text" value="蘋果">
```
#
```js
let text = document.querySelector(".text");

// 第一種寫法
text.value = "香蕉";

// 第二種寫法
text.setAttribute("value","香蕉");

//取得類型
console.log(typeof(text.value)); //string
```
#
#### 輸出結果：
#
```html
<input class="text" type="text" value="香蕉">
```
#