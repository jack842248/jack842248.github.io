---
title: 【Vue3】JavaScript縮寫
date: 2024-12-01
tags: ["Vue3"]
---
#
## 物件字面值(Object literals)
#
<!--more-->
#
```js
const obj = {
  name: '蘋果',
  fn: function() { 
    return this.name;
  }
}

console.log(obj.fn()); //蘋果
```
#
#### 縮寫後：
#
```js
const obj = {
  name: '蘋果',
  fn() { 
    return this.name;
  }
}

console.log(obj.fn()); //蘋果
```
#
-----------------------------------------------
#
## 物件內的變數
#
```js
const person = {
  name: '小明'
};

const people = {
    person: person;
}

console.log(people); //person:{ name: '小明' }
```
#
#### 縮寫後：
#
```js
const person = {
  name: '小明'
};

const people = {
    person
}

console.log(people); //person:{ name: '小明' }
```
#
-----------------------------------------------
#
## 合併兩個陣列
#
```js
const groupA = ['蘋果', '香蕉', '鳳梨'];
const groupB = ['蓮霧', '芭樂'];
const groupAll = groupA.concat(groupB);

console.log(groupAll); //['蘋果', '香蕉', '鳳梨' , '蓮霧', '芭樂']
```
#
#### 縮寫後：
#
```js
const groupA = ['蘋果', '香蕉', '鳳梨'];
const groupB = ['蓮霧', '芭樂'];
const groupAll = [...groupA , ...groupB];

console.log(groupAll); //['蘋果', '香蕉', '鳳梨' , '蓮霧', '芭樂']
```
#
-----------------------------------------------
#
## 合併兩個物件
#
```js
const methods = {
  fn1() {
    console.log(1);
  },
  fn2() {
    console.log(1);
  }
}

const newMethods = {
  fn() {
    console.log(1);
  },
  ...methods
}

console.log(newMethods); //{fn: ƒ, fn1: ƒ, fn2: ƒ}
```
#
-----------------------------------------------
#
## 將dom元素陣列轉為純陣列
#
```html
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>
```
```js
const doms = document.querySelectorAll('li');
console.log(doms); //NodeList(3) [li, li, li]

const newDoms = [...doms];
console.log(newDoms); // [li, li, li]
```
#
`純陣列比NodeList可使用的方法還多，例如：filter、map等`
#
-----------------------------------------------
#
## 參數預設值
#
```js
function sum(a, b) { 
    if(!b){
        b = 3
    }
    return a + b;
}
console.log(sum(1)); //4
```
#
#### 縮寫後：
#
```js
//設定b預設3，所以如果沒帶參數的話b自動會是3
function sum(a, b = 3) { 
    return a + b;
}
console.log(sum(1)); //4

//設定b預設3，但如果有真正的參數會以參數為主
function sum(a, b = 3) { 
    return a + b;
}
console.log(sum(1,5)); //6
```