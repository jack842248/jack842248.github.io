---
title: Javascript監聽事件總整理
date: 2021-02-06
tags: ["JavaScript"]
---
## 監聽點擊事件(事件氣泡)
`addEventListener(事件,一組動作,false)` 若同時有多個監聽事件，先執行點擊目標在執行外層
```html
<button class="btn" type="button">按鈕</button>
```
```js
let btn = document.querySelector(".btn");
let body = document.body;

btn.addEventListener("click",function(){
    console.log("你點到按鈕");
},false);

body.addEventListener("click",function(){
    console.log("你點到body");
},false);
```
`結果："你點到按鈕"，"你點到body"`

-----------------------------------------------
## 監聽點擊事件(事件捕捉)
`addEventListener(事件,一組動作,true)` 若同時有多個監聽事件，先執行外層在執行點擊目標
```html
<button class="btn" type="button">按鈕</button>
```
```js
let btn = document.querySelector(".btn");
let body = document.body;

btn.addEventListener("click",function(){
    console.log("你點到按鈕");
},true);

body.addEventListener("click",function(){
    console.log("你點到body");
},true);
```
`結果："你點到body"，"你點到按鈕"`

-----------------------------------------------
## 監聽點擊事件＋阻止事件冒泡
1. `addEventListener`第三個參數預設是`false`，表示“事件從元素內開始往外發生”
2. 當我點擊「按鈕」時會出現“蘋果”，後面body也會執行並出現“香蕉”
3. 但如果加上`stopPropagation`之後，可以成功阻止事件冒泡，`body`不會執行
```html
<button class="btn" type="button">按鈕</button>
```
```js
let btn = document.querySelector(".btn");
let body = document.body;

btn.addEventListener("click",function(event){
    console.log("你點到按鈕");
    //成功阻止事件往外發生，如果刪除這行，會console.log("香蕉");
    event.stopPropagation();
});

body.addEventListener("click",function(){
    console.log("你點到body");
});
```

-----------------------------------------------
## 監聽點擊事件＋取消a連結跳至錨點
```html
<a class="link" href="#">連結</a>
```
```js
let link = document.querySelector(".link");

link.addEventListener("click",function(event){
    //取消a連結尋找#錨點
    event.preventDefault();
    console.log("蘋果");
});
```

-----------------------------------------------
## 監聽點擊事件＋取消button預設寄送，先進行驗證
```html
<form class="form">
    <!-- required為必填，不能送出空值 -->
    <input type="text" id="name" required>
    <button class="btn" type="submit">提交</button>
</form>
```
```js
let form = document.querySelector(".form");
let btn = document.querySelector(".btn");

btn.addEventListener("click",function(event){

    // 阻止表單的默認提交行為
    event.preventDefault();

    // 這裡可以進行表單驗證
    if(form.checkValidity()){
        console.log("表單通過驗證");
        form.submit(); //提交表單
    }else{
        console.log("表單驗證失敗");
    }
});
```

-----------------------------------------------
## 監聽點擊事件(取得滑鼠點擊的目標)
```html
<button class="btn" type="button">按鈕</button>
```
```js
//滑鼠點擊<button>
document.addEventListener("click",function(event){
    console.log(event.target); //<button class="btn" type="button">按鈕</button>
    console.log(event.target.id); //"test"
    console.log(event.target.value); //""
    console.log(event.target.nodeName); //"BUTTON"
    console.log(event.target.tagName); //"BUTTON"
    console.log(event.target.localName); //"button"
    console.log(event.target.dataset.num); //"23"
    console.log(event.target.className); //"btn"
    console.log(event.target.type); //"button"
});
```

-----------------------------------------------
## 監聽鍵盤事件(取得按下的鍵盤值)
```js
//按鍵盤"A"鍵
document.addEventListener("keydown",function(event){
    console.log(event.keyCode); //65
});
```

-----------------------------------------------
## 監聽滑鼠事件
```html
<button id="btn" type="button">按鈕</button>
```
```js
let btn = document.getElementById("btn");

//當滑鼠移入按鈕時
btn.addEventListener("mouseenter",function(event){
    console.log("滑鼠觸碰到按鈕了");
});

//當滑鼠移出按鈕時
btn.addEventListener("mouseleave",function(event){
    console.log("滑鼠離開到按鈕了");
});
```

-----------------------------------------------
## 監聽切換事件＋比對資料顯示值
```html
<select class="select">
  <option value="蘋果">蘋果</option>
  <option value="香蕉">香蕉</option>
  <option value="鳳梨">鳳梨</option>
</select>
<p class="text"></p>
```
```js
let fruitsData = [
    {
        name: "蘋果",
        price: 15
    },
    {
        name: "香蕉",
        price: 25
    },
    {
        name: "鳳梨",
        price: 35    
    }
]

let select = document.querySelector(".select");
let text = document.querySelector(".text");

function showDataName(event){

  for(let i=0 ; i<fruitsData.length ; i++){
    //比對下拉選單的"名稱"，如果跟資料的"名稱"一樣
    if(event.target.value == fruitsData[i].name){
        //就讓text就顯示該值的"價錢"
        text.textContent = fruitsData[i].price;
    }
  }
}
select.addEventListener("change",showDataName);
```