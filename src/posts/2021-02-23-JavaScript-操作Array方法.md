---
title: 【JS】操作Array方法
date: 2021-02-23
tags: ["javaScript"]
---
#
## 新增陣列
#
<!--more-->
#
*  **.push** (要新增的東西)，新增到陣列最後方。
#
```js
let a = ["蘋果","香蕉","鳳梨"];
a.push("芭樂");
console.log(a);  //["蘋果","香蕉","鳳梨","芭樂"]
```
#
*  **.unshift** (要新增的東西)，新增到陣列最前方。
#
```js
let a = ["蘋果","香蕉","鳳梨"];
a.unshift("芭樂");
console.log(a);  //["芭樂","蘋果","香蕉","鳳梨"]
```
#
*  **.concat** (要新增的東西)，新增到陣列最後方。
#
```js
let a = ["蘋果","香蕉","鳳梨"];
let b = a.concat("芭樂");
console.log(b);  //["蘋果","香蕉","鳳梨","芭樂"]
```
#
-----------------------------------------------
#
## 刪除陣列
#
*  **.pop()** ，刪除陣列最後一項。
#
```js
let a = ["蘋果","香蕉","鳳梨"];
a.pop();
console.log(a);  //["蘋果","香蕉"]
```
#
*  **.shift()** ，刪除陣列第一項。
#
```js
let a = ["蘋果","香蕉","鳳梨"];
a.shift();
console.log(a);  //["香蕉","鳳梨"]
```
#
*  **.splice** (從第幾項開始刪除,刪到第幾項)。
#
```js
let a = ["蘋果","香蕉","鳳梨"];
a.splice(1,2);
console.log(a);  //["蘋果"]
```
#
-----------------------------------------------
#
## 抓出陣列
#
*  **.pop()** ，抓出陣列最後一項。
#
```js
let a = ["蘋果","香蕉","鳳梨"];
let b = a.pop();
console.log(a);  //鳳梨
```
#
*  **.shift()** ，抓出陣列第一項。
#
```js
let a = ["蘋果","香蕉","鳳梨"];
let b = a.shift();
console.log(a);  //蘋果
```
#
*  **.slice** (從第幾項開始抓,抓到第幾項)。
#
```js
let a = ["蘋果","香蕉","鳳梨"];
let b = a.slice(1,2);
console.log(b);  //香蕉
```
#
-----------------------------------------------
#
## 複製陣列
#
*  **.copyWithin** (從第幾項後開始重複)。
#
```js
let a = ["蘋果","香蕉","鳳梨"];
a.copyWithin(1);
console.log(a);  //["蘋果", "蘋果", "香蕉"]
```
#
*  **.copyWithin** (複製貼上在第幾項,從第幾項開始複製,複製到第幾項結束)。
#
```js
let a = ["蘋果","香蕉","鳳梨"];
a.copyWithin(0,2,3);
console.log(a);  //["鳳梨","香蕉","鳳梨"]
```
#
-----------------------------------------------
#
## 替換陣列
#
*  **.fill** (要替換陣列的東西)。
#
```js
let a = ["蘋果","香蕉","鳳梨"];
a.fill("芭樂");
console.log(a);  //["鳳梨","香蕉","鳳梨"]
```
#
*  **.fill** (要替換陣列的東西,從第幾項開始替換,替換到第幾項結束)。
#
```js
let a = ["蘋果","香蕉","鳳梨"];
a.fill("芭樂",2,3);
console.log(a);  //["蘋果","香蕉","芭樂"]
```
#
-----------------------------------------------
#
## 合併陣列
#
*  **.concat()** ，將兩個陣列合併。
#
```js
let a = ["蘋果","香蕉","鳳梨"];
let b = ["芭樂","蓮霧"];
let c = a.concat(b);
console.log(c);  //["蘋果","香蕉","鳳梨","芭樂","蓮霧"]
```
#
-----------------------------------------------
#
## 將陣列轉為字串
#
*  **.join()** ，將陣列轉為字串。
#
```js
let a = ["蘋果","香蕉","鳳梨"];
let b = a.join();
console.log(b);  //"蘋果,香蕉,鳳梨"
```
#
*  **.join** (放入要插入的值)，可插入空白。
#
```js
let a = ["蘋果","香蕉","鳳梨"];
let b = a.join("&");
console.log(b);  //"蘋果&香蕉&鳳梨"
```
#
*  **.toString()** ，將陣列轉為字串。
#
```js
let a = ["蘋果","香蕉","鳳梨"];
let b = a.toString();
console.log(b);  //"蘋果,香蕉,鳳梨"
```
#
-----------------------------------------------
#
## 將字串轉為陣列
#
*  **Array.of** (要轉成陣列的東西)。
#
```js
let a = "蘋果";
let b = Array.of(a);
console.log(b);  //["蘋果"]
```
#
*  **Array.from** (要轉成陣列的東西)。
#
```js
let a = "蘋果";
let b = Array.from(a);
console.log(b);  //["蘋","果"]
```
#
-----------------------------------------------
#
## 尋找陣列裡的值
#
*  **.indexOf** (要尋找的東西)，若找到會回傳[位置]。
#
```js
let a = ["蘋果","香蕉","鳳梨"];
let b = a.indexOf("香蕉");
console.log(b);  //1
```
#
*  **.indexOf()** ，若找不到，會回傳[-1]。
#
```js
let a = ["蘋果","香蕉","鳳梨"];
let b = a.indexOf("芭樂");
console.log(b);  //-1
```
#
*  **.includes** (要尋找的東西)，若找到會回傳[true]。
#
```js
let a = ["蘋果","香蕉","鳳梨"];
let b = a.includes("蘋果");
console.log(b);  //true
```
#
*  **.includes()** ，若找不到，會回傳[false]。
#
```js
let a = ["蘋果","香蕉","鳳梨"];
let b = a.includes("芭樂");
console.log(b);  //false
```
#
*  **.lastIndexOf** (要尋找的東西)，若找到會回傳[位置]。
#
```js
let a = ["蘋果","香蕉","鳳梨"];
let b = a.lastIndexOf("鳳梨");
console.log(b);  //2
```
#
-----------------------------------------------
#
## 判斷是否為陣列
#
*  **Array.isArray()** ，可以判斷是否為陣列，如果不是就回傳[false]。
#
```js
let a = "蘋果";
let b = Array.isArray(a);
console.log(b);  //false
```
#
*  **Array.isArray()** ，可以判斷是否為陣列，如果是就回傳[true]。
#
```js
let a = [2,8,6,0,4];
let b = Array.isArray(a);
console.log(b);
```
#
-----------------------------------------------
#
## 改變陣列的排序
#
*  **.reverse()** ，反轉整個陣列。
#
```js
let a = [2,8,6,0,4];
a.reverse();
console.log(a);  //[4,0,6,8,2]
```
#
*  **.sort()** ，將陣列數值由小排到大。
#
```js
let a = [2,8,6,0,4];
a.sort((x,y) => x - y);
console.log(a);  //[0,2,4,6,8]
```
#
*  **.sort()** ，將陣列數值由大排到小。
#
```js
let a = [2,8,6,0,4];
a.sort((x,y) => y - x);
console.log(a);  //[8,6,4,2,0]
```
#
-----------------------------------------------
#
## 找出陣列裡符合條件的值
#
*  **.find()** ，找出陣列裡第一個符合條件的值，若找到會回傳[值]。
#
```js 
let a = [2,8,6,0,4];
let b = a.find(item => item > 5);
console.log(b);  //8
```
#
*  **.find()** ，若找不到符合的值，會回傳[undefined]。
#
```js 
let a = [2,8,6,0,4];
let b = a.find(item => item > 10);
console.log(b);  //undefined
```
#
*  **.findIndex()** ，找出陣列裡第一個符合條件的值，若找到會回傳[位置]。
#
```js
let a = [2,8,6,0,4];
let b = a.findIndex(item => item > 5);
console.log(b);  //1
```
#
*  **.findIndex()** ，若找不到符合的值，會回傳[-1]。
#
```js
let a = [2,8,6,0,4];
let b = a.findIndex(item => item > 10);
console.log(b);  //-1
```
#
*  **.every()** ，判斷陣列裡每一個值，如果全部符合條件就回傳[true]。
#
```js
let a = [2,8,6,0,4];
let b = a.every(item => item < 10);
console.log(b);  //true
```
#
*  **.every()** ，判斷陣列裡每一個值，如果有一項不符合條件就回傳[false]。
#
```js
let a = [2,8,6,0,4];
let b = a.every(item => item > 2);
console.log(b);  //false
```
#
*  **.some()** ，判斷陣列裡每一個值，只要有其中一項符合條件就回傳[true]。
#
```js
let a = [2,8,6,0,4];
let b = a.some(item => item > 7);
console.log(b);  //true
```
#
*  **.some()** ，判斷陣列裡每一個值，全都不符合條件才會回傳[false]。
#
```js
let a = [2,8,6,0,4];
let b = a.some(item => item > 10);
console.log(b);  //false
```
#
-----------------------------------------------
#
## 過濾陣列裡不符合條件的值
#
*  **.filter()** ，過濾掉陣列裡不符合條件的數值，回傳[陣列]。
#
```js
let a = [2,8,6,0,4];
let b = a.filter((item) => item > 5);
console.log(b);  //[8,6]
```
#
*  **.filter()** ，過濾掉陣列裡不符合條件的字串，回傳[陣列]。
#
```js
let a = [2,8,6,0,4];
let b = a.filter((item) => item < 6);
console.log(b);  //[2,0,4]
```
#
-----------------------------------------------
#
## 對陣列裡的每一項進行運算
#
*  **.map()** ，判斷陣列裡的每一個值，回傳[陣列]。
#
```js
let a = [2,8,6,0,4];
let b = a.map(item => item > 5);
console.log(b);  //[false,true,true,false,false]
```
#
*  **.map()** ，運算陣列裡每一個值，回傳[陣列]。
#
```js
let a = [2,8,6,0,4];
let b = a.map(item => item + 1);
console.log(b);  //[3,9,7,1,5]
```
#
-----------------------------------------------
#
## 加總陣列
#
*  **.reduce()** ，將陣列裡的值全部加總，回傳[值]。
#
```js
let a = [2,8,6,0,4];
let b = a.reduce((x,y) => x+y);
console.log(b);  //20
```
#
*  **.reduce()** ，將陣列裡的值全部相減，回傳[值]。
#
```js
let a = [2,8,6,0,4];
let b = a.reduce((x,y) => x-y);
console.log(b);  //-16
```
#
*  **.reduceRight()** ，將陣列裡的值全部相減(反向)，回傳[值]。
#
```js
let a = [2,8,6,0,4];
let b = a.reduceRight((x,y) => x-y);
console.log(b);  //-12
```
#
-----------------------------------------------
#
## 展開陣列
#
*  **.flat** (要展開幾層陣列)。
#
```js
let a = [2,8,6,0,4,[1,[3],5]];
let b = a.flat();
console.log(b);  //[2,8,6,0,4,1,[3],5]
```
#
*  **.flat(Infinity)** ，可以展開多層陣列。
#
```js
let a = [2,8,6,0,4,[1,[3],5]];
let b = a.flat(Infinity);
console.log(b);  //[2,8,6,0,4,1,3,5]
```
#
*  **.flatMap()** ，.flat()+.map()，將展開的陣列進行操作。
#
```js
let a = [2,8,6,0,4,[1,[3],5]];
let b = a.flatMap(item => item + 3);
console.log(b);  //[5,11,9,3,7,"1,3,53"]
```
#
-----------------------------------------------
#
## 取得列印陣列每一項
#
*  **key...of** ，列印陣列每一項位置為[數值]。
#
```js
let a = [2,8,6,0,4];
for(let key of a.keys()){
  console.log(key);  //0  //1  //2  //3  //4
}
```
#
*  **key...in** ，列印陣列每一項位置為[字串]。
#
```js
let a = [2,8,6,0,4];
for(let key in a){
  console.log(key);  //"0"  //"1"  //"2"  //"3"  //"4"
}
```
#
* .forEach()，列印出陣列每一項以及每一項位置。
#
```js
let a = [2,8,6,0,4];
a.forEach(function(item,i){
  console.log(i);  //0  //1  //2  //3  //4
})
```
#
* for迴圈。
#
```js
let a = [2,8,6,0,4];
for(let i=0 ; i<a.length ; i++){
  console.log(a[i]);  //0  //1  //2  //3  //4
}
```