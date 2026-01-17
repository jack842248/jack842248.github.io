---
title: 【JS】ES6
date: 2021-03-07
tags: ["javaScript"]
---
#
## var、let、const
#
<!--more-->
#
* 皆為宣告變數用。
#
|名稱|var|let|const|
|---|---|---|---|
|作用域|在window、函式|在block{}裡|在block{}裡|
|宣告的變數|可以賦予新的值|可以賦予新的值|不能賦予新的值|
|重複宣告變數時|不會出錯|會出錯|會出錯|
|從創造到執行階段會|提升(Hoisting)|暫時性死區(TDZ)|會出現錯誤|
#
```js
/** 變數賦予新的值 **/
var a = 1;
a = 2;
console.log(a);  //2

let b = 1;
b = 2;
console.log(b);  //2

const c = 1;
c = 2;
console.log(c);  //出錯

/** 重複宣告變數 **/
var a = 1;
var a = 2;
console.log(a);  //2

let b = 1;
let b = 2;
console.log(b);  //出錯

const c = 1;
const c = 2;
console.log(c);  //出錯

/** 創造到執行階段 **/
var a;
console.log(a);  //undefined

let b;
console.log(b);  //undefined

const c;
console.log(c);  //出錯
```
#
-----------------------------------------------
#
* 宣告變數命名的規則。

    * 大小寫有區分。(範例一)

    * 開頭不能是數字。(範例二)

    * 不能使用 **-** 跟 **.** 。(範例二)

    * 以下 **保留字** 不能使用。(範例四)
#
|arguments|await|break|case|
|---|---|---|---|
|catch|class|const|continue|
|debugger|default|delete|do|
|else|enum|eval|export|
|extends|false|finally|for|
|function|if|implements|import|
|in|instanceof|interface|let|
|new|null|package|private|
|protected|public|return|static|
|super|switch|this|throw|
|true|try|typeof|var|
|void|while|with|yield|
#
```js
/** 範例一 **/
let A = 1;
console.log(a);  //a is not defined

/** 範例二 **/
let 3a = 1;  //出錯

/** 範例三 **/
let apple-name = 1;  //出錯
//建議使用小駝峰方式命名
//let appleName = 1

/** 範例四 **/
let default = 1;  //出錯
//因為"default"為保留字，不能拿來宣告變數
```
#
-----------------------------------------------
#
* 當使用 **for迴圈** + 非同步事件時:
#
```js
/** for迴圈(var) **/
for(var i=0 ; i<3 ; i++){
  setTimeout(function(){
    console.log(i);  //3  //3  //3
  },1000);
}
console.log(i);  //3

/** for迴圈(let)) **/
for(let i=0 ; i<3 ; i++){
  setTimeout(function(){
    console.log(i);  //0  //1  //2
  },1000);
}
console.log(i);  //錯誤(is not defined)
```
-----------------------------------------------
#
## 箭頭函式
#
* 讓函式更精簡。
#
```js
/** 函式表達式 **/
const fn1 = function(par1){
  return "蘋果" + par1;
}
fn1();

/** 簡化(使用箭頭函式) **/
const fn1 = (par1) => {"蘋果" + par1;}
fn1();

/** 再簡化(如果只有return) **/
const fn1 = par1 => "蘋果" + par1;
fn1();

/** 再簡化(如果沒有帶參數) **/
const fn1 = () => "蘋果";
fn1();
```
#
-----------------------------------------------
#
*  **arguments** 須改用 **其餘參數** 。
#
```js
/** argument **/
const fn1 = function(){
  console.log(arguments);  //[1,2,3]
}
fn1(1,2,3);

/** 其餘參數 **/
const fn1 = (...arg) => {
  console.log(arg);  //[1,2,3]
}
fn1(1,2,3);
```
#
-----------------------------------------------
#
* 沒有自己的 **this** ，會指向外層。

    *  **addEventListener** ，無法找到 **this** 。

    * **call()**、**apply()**、**bind()**，傳入的都是 **window** 。

    * 不能拿來 **建構函式** 。
#
```js
/** 一般函式 **/
var name = "蘋果";
var obj1 ={
  name: "香蕉",
  amount: function(){
    setTimeout(function(){
      console.log(this.name);  //蘋果
    },1000); 
  }
}
obj1.amount();

/** 箭頭函式 **/
var name = "蘋果";
var obj1 ={
  name: "香蕉",
  amount: function(){
    setTimeout(()=>{
      console.log(this.name);  //香蕉
    },1000); 
  }
}
obj1.amount();
```
#
-----------------------------------------------
#
* 若回傳的是 **物件實字** ，需要再加 **()** 。
#
```js
/** 回傳純值 **/
const fn1 = () => 1;
console.log(a());  //1

/** 回傳物件 **/
const fn1 = () => ( {a:1} );
console.log(a());  //{a:1}
```
#
-----------------------------------------------
#
* 若使用再 **判斷式** 時，需要再加 **()** 。
#
```js
/** 錯誤 **/
let a = 0;
const b = a || function(){return 1};

/** 正確 **/
let a = 0;
const b = a || ( () => 1 );
```
#
-----------------------------------------------
#
### 箭頭函式+map()、reduce()、$.ajax()
#
```js
/** 範例一 **/
const a = [1,2,3];
const b = a.map(function(par1){
  return par1 * 2;
})
console.log(b);  //[2,4,6]

/** 範例一(ES6) **/
const a = [1,2,3];
const b = a.map(par1 => par1 * 2);
console.log(b);  //[2,4,6]

/** 範例二 **/
const a = function(){
  const nums = Array.from(arguments);
  //Array.from()能將[類陣列]轉為[陣列]
  const total = nums.reduce(function(par1,par2){
  //第一個參數會帶0，第二個參數會帶入當前的值
    return par1+par2;
  },0);
  console.log(total);  //15
  return total / nums.length;
}
console.log(a(1,2,3,4,5));  //3

/** 範例二(ES6) **/
const a = (...arg) => arg.reduce((par1,par2) => par1+par2 / arg.length,0);
console.log(a(1,2,3,4,5));  //3

/** 範例三 **/
const a = {
  data:{},
  getData: function(){
    const vm = this;
    $.ajax({
      url: "https://randomuser.me/api/",
      dataType: "json",
      success: function(data){
        vm.data = data.results[0];
        console.log("a.data",a.data);
      }
    });
  }
}
a.getData();

/** 範例三(ES6) **/
const a = {
  data:{},
  getData: function(){
    $.ajax({
      url: "https://randomuser.me/api/",
      dataType: "json",
      success: (data) => {
        this.data = data.results[0];
        console.log("a.data",a.data);
      }
    });
  }
}
a.getData();
```
#
-----------------------------------------------
#
### 樣板字面值(Template Literals)
#
```js
/** 範例一 **/
const a = 25;
const b = "蘋果售價:"+a+"元";
console.log(b);  //蘋果售價:25元

/** 範例一(ES6) **/
const a = 25;
const b = `蘋果售價:${a}元`;
console.log(b);  //蘋果售價:25元

/** 進階範例一(ES6) **/
const a = "";
const b = `蘋果售價:${a||25}元`;
console.log(b);  //蘋果售價:25元
//如果a沒有值的話，就會顯示預設25

/** 範例二 **/
// <-----html----->
ul

// <-----js----->
const a = [
  {name: "蘋果",amount: 100},
  {name: "香蕉",amount: 300},
  {name: "鳳梨",amount: 500}
]
var ul = document.querySelector("ul");
ul.innerHTML= 
`
<li>${a[0].name}總共有${a[0].amount}個</li>
<li>${a[1].name}總共有${a[1].amount}個</li>
<li>${a[2].name}總共有${a[2].amount}個</li>
`

/** 範例二(ES6) **/
// <-----html----->
ul

// <-----js----->
const a = [
  {name: "蘋果",amount: 100},
  {name: "香蕉",amount: 300},
  {name: "鳳梨",amount: 500}
]
var ul = document.querySelector("ul");
ul.innerHTML= 
`
${ a.map( par1 => `<li>${ par1.name }總共有${ par1.amount }個</li>` ).join("") }
`
```
#
-----------------------------------------------
#
## 標籤樣板字面值
#
```js
/** 範例一(ES6) **/
function fn1(str,par1,par2){
  console.log(str,par1,par2);
  //["總共有", "個蘋果"] 1 undefined
}
const a = 1;
fn1`總共有${a}個蘋果`;

/** 範例一(ES6) **/
function fn1(str,...arg){
  console.log(str,arg);
  //["總共有", "個蘋果"] [1]
}
const a = 1;
fn1`總共有${a}個蘋果`;
```
#
> 使用...arg可以讓所有參數以陣列方式帶入