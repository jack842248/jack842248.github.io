---
title: 【JS】event使用者事件
date: 2021-02-06
tags: ["javaScript"]
---
#
## 監聽點擊事件(事件氣泡)
#
<!--more-->
#
* addEventListener(事件,一組動作,false) 若同時有多個監聽事件，先執行點擊目標在執行外層
#
```html
<button class="btn" type="button">按鈕</button>
```
#
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
#
`結果："你點到按鈕"，"你點到body"`
#
-----------------------------------------------
#
## 監聽點擊事件(事件捕捉)
#
* addEventListener(事件,一組動作,true) 若同時有多個監聽事件，先執行外層在執行點擊目標
#
```html
<button class="btn" type="button">按鈕</button>
```
#
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
#
`結果："你點到body"，"你點到按鈕"`
#
-----------------------------------------------
#
## 監聽點擊事件 + 阻止事件冒泡
#
1. addEventListener第三個參數預設是false，表示“事件從元素內開始往外發生”
#
2. 當我點擊「按鈕」時會出現“蘋果”，後面body也會執行並出現“香蕉”
#
3. 但如果加上stopPropagation之後，可以成功阻止事件冒泡，body不會執行
#
```html
<button class="btn" type="button">按鈕</button>
```
#
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
#
-----------------------------------------------
#
## 監聽點擊事件 + 取消a連結跳至錨點
#
```html
<a class="link" href="#">連結</a>
```
#
```js
let link = document.querySelector(".link");

link.addEventListener("click",function(event){
    //取消a連結尋找錨點
    event.preventDefault();
    console.log("蘋果");
});
```
#
-----------------------------------------------
#
## 監聽點擊事件 + 取消button寄送，先進行驗證
#
```html
<form class="form">
    <!-- required為必填，不能送出空值 -->
    <input type="text" id="name" required>
    <button class="btn" type="submit">提交</button>
</form>
```
#
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
#
-----------------------------------------------
#
## 監聽點擊事件 + 取得滑鼠點擊的目標
#
```html
<button class="btn" type="button">按鈕</button>
```
#
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
#
-----------------------------------------------
#
## 監聽鍵盤事件 + 取得按下的鍵盤值
#
```js
//按鍵盤"A"鍵
document.addEventListener("keydown",function(event){
    console.log(event.keyCode); //65
});
```
#
-----------------------------------------------
#
## 監聽滑鼠移動事件
#
```html
<button id="btn" type="button">按鈕</button>
```
#
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
#
-----------------------------------------------
#
## 監聽選單切換事件 + 比對資料顯示值
#
```html
<select class="select">
  <option value="蘋果">蘋果</option>
  <option value="香蕉">香蕉</option>
  <option value="鳳梨">鳳梨</option>
</select>
<p class="text"></p>
```
#
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
#
-----------------------------------------------
#
## 點擊父層元素回傳正確值
#
```html
<ul class="list">
  <li>蘋果</li>
  <li>香蕉</li>
  <li>鳳梨</li>
</ul>
```
#
```js
let list = document.querySelector(".list");
list.addEventListener("click",function(e){
    //確認點擊的是li而不是ul
    if(e.target.nodeName !== "LI"){
        return
    }
    console.log(e.target.textContent);
})
```
#
-----------------------------------------------
#
## 將input裡的值轉換成數字處理(parseInt)
#
```html
<label>蘋果數量：</label>
<input class="apple" type="text" value="2">
<br>
<label>香蕉數量：</label>
<input class="banana" type="text" value="2">
<br>
<button class="btn" type="button">按鈕</button>
```
#
```js
let btn = document.querySelector(".btn");
let apple = document.querySelector(".apple");
let banana = document.querySelector(".banana");

//第一種寫法
btn.onclick = function(){
  let applePrice = 20; //蘋果一顆20元
  let bananaPrice = 15; //香蕉一根15元
  let appleNum = parseInt(apple.value); //蘋果數量
  let bananaNum = parseInt(banana.value); //香蕉數量
  console.log(applePrice * appleNum + bananaPrice * bananaNum); //20 * 2 + 15 * 2 = 70
}

//第二種寫法return寫法
function count(applePrice,bananaPrice){ 
  let appleNum = parseInt(apple.value);
  let bananaNum = parseInt(banana.value);
  let total = applePrice * appleNum + bananaPrice * bananaNum;
  return total
}
btn.onclick = function(){
  console.log(count(20,15)); //將價錢以參數方式帶入
}
```
#
`★★★從input裡取出來的值是"字串"，利用.parseInt()將字串轉為數字`
#
```js
console.log(parseInt("box")); //NaN
console.log(parseInt("50")); //50
console.log(parseInt("48.9")); //48 
console.log(parseInt("50 60 70")); //50
console.log(parseInt("50 days")); //50
```