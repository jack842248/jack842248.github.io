---
title: this的指向
date: 2024-12-02
tags: ["Vue3"]
---
## 傳統函式this
```js
let name = "全域蘋果";
function sayApple(){
  console.log(this.name);
}
const obj = {
  name: "蘋果",
  sayApple
}
obj.sayApple(); //蘋果
```
`看函式前面是在哪邊調用，而決定this的指向`

-----------------------------------------------
## 傳統函式this 2
```js
let name = "全域蘋果";
const obj = {
  name: "蘋果",
  sayApple(){
    console.log(this.name);
  }
}
obj.sayApple(); //蘋果
```

-----------------------------------------------
## 物件內的物件函式
```js
let name = "全域蘋果";
function sayApple(){
  console.log(this.name);
}
const obj = {
  name: "蘋果",
  sayApple,
  obj2: {
    name: "內層蘋果",
    sayApple
  }
}
obj.obj2.sayApple(); //內層蘋果
```

-----------------------------------------------
## 物件內的函式裡的函式
```js
let name = "全域蘋果";
function sayApple() {
  console.log(this.name);
}
const obj = {
  name: "蘋果",
  fn() {
    sayApple();
  }
}
obj.fn(); //全域蘋果
```

-----------------------------------------------
## 非同步函式
```js
let name = "全域蘋果";
function sayApple() {
  console.log(this.name);
}
const obj = {
  name: "蘋果",
  fn(){
    setTimeout(function(){
      conosole.log(this.name);
    })
  }
}
obj.fn(); //全域蘋果
```

-----------------------------------------------
## 箭頭函式的this指向
```js
let name = "全域蘋果";
const obj = {
  name: '蘋果',
  sayApple: () => { 
    console.log(this.name); 
  },
}
obj.sayApple(); //'全域蘋果'
```
`箭頭函式沒有自己的this，會優先指向外層的this`

-----------------------------------------------
## 箭頭函式的this指向
```js
let name = '全域蘋果'
const obj = {
  name: '蘋果',
  sayApple() {
    const sayApple2 = () => { 
      console.log(this.name);
    };
    sayApple2();
  }
}
obj.sayApple(); //蘋果
```