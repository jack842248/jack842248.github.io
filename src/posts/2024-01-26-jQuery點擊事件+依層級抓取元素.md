---
title: jQuery點擊事件+依層級抓取元素
date: 2024-01-26
tags: ["jQuery"]
---
## 找父層元素(parent、parents)
|語法|說明|
|---|---|
|.parent()|抓取父層|
|.parents()|抓取父層以外的全部|
|.parentUntil()|抓取父層以外的元素(但不包含括弧內的)|
```html
<nav>
  <ul>
    <li class="nav-item">
      <a class="nav-link" href="#">蘋果</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">香蕉</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">鳳梨</a>
    </li>
  </ul>
</nav>
```
```js
//點擊<a>連結，對外層<li>作用
$(".nav-link").click(function(){
  $(this).parent().css("background-color","red");
});

//點擊<a>連結，對外層<li>、<ul>、<nav>、<body>、<html>作用
$(".nav-link").click(function(){
  $(this).parents().css("background-color","red");
});

//點擊<a>連結，對外層<li><ul>都作用
$(".nav-link").click(function(){
  $(this).parentsUntil("nav").css("background-color","red");
});
```
`.parents()會包括body、html`

-----------------------------------------------
## 找子層元素(children、find)
```html
<nav>
  <ul>
    <li class="nav-item">
      <a class="nav-link" href="#">蘋果</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">香蕉</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">鳳梨</a>
    </li>
  </ul>
</nav>
```
```js
//點擊<a>對<ul>底下的所有<li>作用
$(".nav-link").click(function(){
  $("ul").children().css("background-color","red");
});

//點擊<a>對<ul>底下的所有<a>作用
$(".nav-link").click(function(){
  $("ul").find(".nav-link").css("background-color","red");
});
```
`.find()可以找到孫層，但.children()只能找到子層`

-----------------------------------------------
## 找同層元素(siblings)
```html
<nav>
  <ul>
    <li class="nav-item">
      <a class="nav-link" href="#">蘋果</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">香蕉</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">鳳梨</a>
    </li>
  </ul>
</nav>
```
```js
//抓取<li>同層的其他<li>
$(".nav-link").click(function(){
  $(".nav-item").siblings().css("background-color","red");
});
```

-----------------------------------------------
## 只有被點擊的那一項有效果，再點其他的效果取消
```html
<nav>
  <ul>
    <li class="nav-item">
      <a class="nav-link" href="#">蘋果</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">香蕉</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">鳳梨</a>
    </li>
  </ul>
</nav>
```
```js
$(".nav-link").click(function(){
  $(this).css("background-color","red")
        .parent() //找到<li>
        .siblings() //找到自己以外的<li>
        .children() //底下的<a>
        .css("background-color","transparent");
});
```