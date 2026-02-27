---
title: 將資料暫存在瀏覽器的localStorage裡
date: 2021-02-07
tags: ["JavaScript"]
---
## 將input值存入localStorage，再取出
|Key|Value|
|---|---|
|myName|text.value(輸入框裡的值)|
```html
<input class="text" type="text">
<button class="save" type="button">儲存資料</button>
<button class="call" type="button">呼叫資料</button>
```
```js
let text = document.querySelector(".text");
let save = document.querySelector(".save");
let call = document.querySelector(".call");

//點擊「儲存資料」按鈕
save.addEventListener("click",function(){

    //儲存資料，(要存入的值是什麼標題，存入什麼值)
    localStorage.setItem("myName",text.value);
})

//點擊「呼叫資料」按鈕
call.addEventListener("click",function(){

    //設定變數=localStorage的myName的值
    let str = localStorage.getItem("myName");

    //彈跳出資料
    alert(str);
})
```

-----------------------------------------------
## 將JSON資料存入localStorage，再取出
|Key|Value|
|---|---|
|fruitName|{name: "蘋果",price: 15}|
```js
let fruitsData = [
    {
        name: "蘋果",
        price: 15
    }
]

//存入"字串"資料
let fruitStr = JSON.stringify(fruitsData);
console.log(fruitStr); //"[{'name':'蘋果','price':15}]"
localStorage.setItem("fruitName",fruitStr);

//取出"字串"資料，並轉成JSON格式
let getData = localStorage.getItem("fruitName");
let fruitArr = JSON.parse(getData);
console.log(fruitArr[0].name); //"蘋果"
```
`從localStorage取出來的資料壹定都是字串`

-----------------------------------------------
## 實作todolist
|Key|Value|
|---|---|
|todoItem|text.value(輸入框裡的值)|
```html
<input class="text" type="text">
<button class="btn">按鈕</button>
<ul class="list"></ul>
```
```js
let todoData = [];
let text = document.querySelector(".text");
let btn = document.querySelector(".btn");
let list = document.querySelector(".list");

//初始化資料
function initData(){
    //取得localStorage上的"todoItem"資料
    let getData = localStorage.getItem("todoItem");
    //如果有取得資料，就將"字串"資料轉為JSON格式
    if(getData){
      todoData = JSON.parse(getData);
    }else{
      todoData = [];
    }
}
initData();

//更新資料
function updateList(){
    //建立空字串
    let str = "";
    //將所有資料跑一遍
    for(let i=0 ; i<todoData.length ; i++){
        //並組成<li>並且在<a>連結裡面帶入data-num編號
        str += "<li><a href='#' data-num='"+i+"'>刪除</a>"+todoData[i]+"</li>";
    }
    //組裝完成後，渲染到頁面上
    list.innerHTML = str;
}
updateList();

//點擊"按鈕"時新增資料
btn.addEventListener("click",function(){
    //如果input裡有值才執行
    if(text.value.trim() !== ""){
        //將input裡的值新增到資料
        todoData.push(text.value);
        //將整個資料轉成"字串"
        let setData = JSON.stringify(todoData);
        //儲存到localStorage上
        localStorage.setItem("todoItem",setData);
        //重新渲染頁面的資料
        updateList();
        //清空input裡的值
        text.value = "";
    }
},false)

//點擊"刪除"時刪除資料
list.addEventListener("click",function(event){
    //當我點擊的是ul裡的a才執行
    if(event.target.nodeName == "A"){
        //取得我點擊目標的data-num編號
        let targetNum = e.target.dataset.num;
        //並從資料中刪除該項
        todoData.splice(targetNum,1);
        //將整個資料轉成"字串"
        let setData = JSON.stringify(todoData);
        //儲存到localStorage上
        localStorage.setItem("todoItem",setData);
        //重新渲染頁面的資料
        updateList();
    }
})
```