---
title: 用原生Javascript改變DOM樣式和內容
date: 2021-02-04
tags: ["javaScript"]
---
## 替換標籤樣板
```html
<button class="btn" type="button">按鈕</button>
<ul class="list">
  <li>蘋果</li>
</ul>
```
```js
let btn = document.querySelector(".btn");
let list = document.querySelector(".list");

btn.onclick = function(){
  list.innerHTML = "<li>香蕉</li>";
}
```
-----------------------------------------------
## 加入標籤樣板
```html
<button class="btn" type="button">按鈕</button>
<ul class="list">
  <li>蘋果</li>
</ul>
```
```js
let btn = document.querySelector(".btn");
let list = document.querySelector(".list");

//加在"<li>蘋果</li>"前面
btn.onclick = function(){
  let bananaList = document.createElement("li");
  bananaList.textContent = "香蕉";
  list.prepend(bananaList);
}

//加在"<li>蘋果</li>"後面
btn.onclick = function(){
  let bananaList = document.createElement("li");
  bananaList.textContent = "香蕉";
  list.append(bananaList);
}
```

-----------------------------------------------
## 改變文字內容
```html
<button class="btn" type="button">按鈕</button>
<p class="apple">蘋果</p>
```
```js
let btn = document.querySelector(".btn");
let apple = document.querySelector(".apple");

btn.onclick = function(){
  apple.textContent = "香蕉";
}
```

-----------------------------------------------
## 改變標籤屬性
```html
<button class="btn" type="button">按鈕</button>
<a class="link" href="#">連結</a>
```
```js
let btn = document.querySelector(".btn");
let link = document.querySelector(".link");

btn.onclick = function(){
  link.setAttribute("href","https://www.google.com.tw/");
  let href = link.getAttribute("href");
  console.log(href); //"https://www.google.com.tw/"
}
```

-----------------------------------------------
## 改變元素樣式
```html
<button class="btn" type="button">按鈕</button>
<a class="link" href="#">連結</a>
```
```js
let btn = document.querySelector(".btn");
let link = document.querySelector(".link");

//將連結背景變紅色
btn.onclick = function(){
  
  //第一種寫法
  link.style.backgroundColor = "red";

  //第二種寫法，多樣式寫法["",""]
  link.style["background-color"] = "red";

  //第三種寫法，多樣式寫法"";""
  link.style.cssText = "background-color: red";
}
```

-----------------------------------------------
## 取得input裡的值
```html
<button class="btn" type="button">按鈕</button>
<input class="text" type="text">
```
```js
let btn = document.querySelector(".btn");
let text = document.querySelector(".text");

btn.onclick = function(){
  console.log(text.value); //[顯示輸入框裡的文字]
}
```

-----------------------------------------------
## 取得input的類型
```html
<button class="btn" type="button">按鈕</button>
<input class="password" type="password">
```
```js
let btn = document.querySelector(".btn");
let password = document.querySelector(".password");

btn.onclick = function(){
  console.log(password.type); //password
}
```

-----------------------------------------------
## XSS(Cross Site Scripting)
* 跨網站指令碼攻擊。
* 在 **input** 裡直接撰寫 **\<script>** 腳本來進行攻擊。
* 盡量避免使用 **.onclick** + **.innerHTML** 方法。

|名稱|innerHTML|createElement|
|---|---|---|
|使用方法|組完字串再帶入|以DOM節點來處理|
|效能|比較好|比較差|
|安全性|比較差|比較好|