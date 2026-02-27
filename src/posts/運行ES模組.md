---
title: 運行ES模組
date: 2024-12-07
tags: ["Vue3"]
---
## 匯入與匯出
### 預設匯入和匯出：
```js
import 自訂名稱 from ...

export default = 
```
### 具名匯入和匯出：
```js
import { 具名名稱 } from ...

export const xxx = ...
```

-----------------------------------------------
## 匯入元件
常見的匯出方式，通常用於匯出物件，在 Vue 開發中可用來匯出元件
1. 先建立一個export1.js檔(component)
```js
export default {
  data:[ "蘋果","香蕉","鳳梨" ],
  showData(){
    let list = document.querySelector(".list");
    let str = "";
    this.data.forEach((item,id) => {
      str += `<li>${item}
        <button type="button" class="btn" data-num="${id}">刪除</button>
      </li>`
    })
    list.innerHTML = str;
    let btns = document.querySelectorAll(".btn");
    btns.forEach((item)=>{
      //使用箭頭函數可以，讓this指向外層
      item.addEventListener("click",(event)=>{
        this.removeData(event.target.dataset.num);
      })
    })
  },
  removeData(id){
    this.data.splice(id, 1);
    this.showData();
  },
  initData(){
    this.showData();
  }
}
```
2. 在html或js檔進行匯入
```html
<script type="module">

//newComponent是自訂的名稱
import newComponent from "./export1.js";

//使用裡面的方法
newComponent.initData();

</script>  
```
`注意：一定要在<script>上加上type="module"才能使用`
```html
<script type="module">
  var apple = "蘋果";
</script>

<script type="module">
  console.log(apple); // not defined
</script>
```
`每個type="module"作用域都是獨立的`

-----------------------------------------------
## 匯入方法
可用於匯出已定義的變數、物件、函式，專案開發中通常用於 “方法匯出”，第三方的框架、函式、套件很常使用具名定義 “方法”
1. 先建立一個export2.js檔
```js
export const a = 1;

export function b(){
  console.log(1);
}

export function c(a,b){
  return a + b;
}
```
2. 在html或js檔進行匯入
```html
<script type="module">
//單一匯入（建議寫法）
import { a , b } from "./export2.js";

console.log(a); //1

b(); //1
</script>

<script type="module">
//全部匯入（不建議，錯誤較難發現）
import * as all from "./export2.js";

all.b(); //1

console.log(all.c(a,b)); //3
</script>
```

-----------------------------------------------
## sideEffect
1. 先建立一個sideEffect.js檔
```js
//立即函式
(function (global) {
  global.$ = '我是 jQuery';
})(window);
```
2. 匯入檔案
```html
<script type="module">
import "./sideEffect.js";
console.log($); //我是 jQuery
</script>
```

-----------------------------------------------
## 使用ESM方式匯入vue
```html
<div id="app">{{ apple }}</div>
```
```html
<script type="module">
import { createApp } from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.5.13/vue.esm-browser.min.js";

const apple = {
  data(){
    return {
      apple: "蘋果"
    }
  }
}

createApp(apple).mount('#app');
</script>
```