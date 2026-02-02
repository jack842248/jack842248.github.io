---
title: 判斷式if、else、switch
date: 2021-02-02
tags: ["javaScript"]
---
### 運算子
|運算子|口語化說明|
|---|---|
|=|賦予|
|==|等於|
|===|等於(嚴謹模式)|
|!=|不等於|
|!==|不等於(嚴謹模式)|
|true|是;成立|
|false|不是;不成立|
|>|大於|
|<|小於|
|>=|大於等於|
|<=|小於等於|
|&&|以及(and)|
|｜｜|或是(or)|
|!|反轉true或false(not)|
```js
console.log(1 === "1"); //false
console.log(1 === 1); //true
console.log(1 != "1"); //false
console.log(1 !== 1); //true
console.log(true == "1"); //true
console.log(true === "1"); //false
```
`在javascript裡：1是true、0是false`

-----------------------------------------------
### if、else、else if
* 適合判斷式數值，限制範圍。
* 一律使用 **if** 開頭，若不成立，則往下執行。
* 可以使用多個 **else if** ，若不成立，則往下執行。
* 若以上都不成立則執行 **else** 。
```js
//飢餓程度：1~10
let hungry = 8;

function eat(item){
    console.log("我要吃"+item);
}
//7以上
if(hungry >= 7){
    eat("披薩");
//3~6
}else if(hungry <= 6 && hungry > 2){
    eat("沙拉");
//0~2
}else{
    console.log("我不想吃");
}
```
`當以上都不成立時就執行else`

-----------------------------------------------
### switch
* 效能比 **if...else** 好，適合判斷已知的結果。
*  **switch** 一定要帶參數才能判斷。
*  **break** 可阻止往下執行。
* 若都不成立則執行 **default** 。
```js
//飢餓程度：好餓、還好、不餓
let hungry = "好餓";

function eat(item){
    console.log("我要吃"+item);
}

switch (hungry){
    case "好餓":
        eat("披薩")
        break;
    case "還好":
        eat("沙拉")
        break;
    case "不餓":
        console.log("我不想吃");
        break;
    default:
        console.log("隨便");
        break;
}
```
`當以上值都沒有就跑default`