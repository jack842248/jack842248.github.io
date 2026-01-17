---
title: 【Vue3】promise非同步觀念
date: 2024-12-05
tags: ["Vue3"]
---
#
## 非同步觀念
#
<!--more-->
#
```js
const component = {
  init(){
    console.log(1);
    getData();
    console.log(2);
  }
}

function getData(){
  setTimeout(()=>{
    console.log("已取得遠端資料");
  })
}

component.init();
//1
//2
//"已取得遠端資料"
```
#
`重點結論：非同步事件一定是在事件都執行完之後才執行`
#
-----------------------------------------------
#
## promise基本用法
#
* 成功：透過resolve回傳結果，使用.then做接收
#
* 失敗：透過resolve回傳結果，使用.then和.catch接收
#
```js
const promiseSetTimeout = (status) => {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(status){
        resolve("promiseSetTimeout 成功");
      }else{
        reject("promiseSetTimeout 失敗");
      }
    },0)
  })
}
```
#
#### 基礎應用
#
```js
promiseSetTimeout(true)
  .then(res => {
    console.log(res); //promiseSetTimeout 成功
  })
```
#
#### 串接
#
```js
promiseSetTimeout(true)
  .then(res => {
    console.log(1,res); //1,,promiseSetTimeout 成功
    return promiseSetTimeout(true)
  })
  .then(res => {
    console.log(2,res); //2,promiseSetTimeout 成功
  })
```
#
`連續接收第二、第三個資料時，可以使用return一個非同步事件，就可以繼續接.then`
#
#### 失敗捕捉
#
```js
promiseSetTimeout(false)
  .then(res => {
    console.log(res); 
  })
  .catch(err => {
    console.log(err); //promiseSetTimeout 失敗
  })
```
#
`捕捉失敗.then會直接被忽略`
#
``
#
#### 元件運用
#
```js
const component = {
  data:{

  },
  init(){
    promiseSetTimeout(true){
      .then(res => {
        this.data.res = res;
        console.log(this.res); // {res:"promiseSetTimeout 成功"}
      })
    }
  }
}
component.init();
```
#
`使用元件的初始化事件，將api資料載入到data`
#
