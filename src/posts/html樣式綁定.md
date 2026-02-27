---
title: html樣式綁定
date: 2024-12-14
tags: ["Vue3"]
---
## 將樣式寫在style (行內寫法)
```html
<div id="app">
  <p :style="{backgroundColor:'red'}">蘋果</p>
</div>
```
### 多值寫法：
```html
<div id="app">
  <p :style="{backgroundColor:'red',color:'white'}">蘋果</p>
</div>
```

-----------------------------------------------
## 將樣式寫在style (物件寫法)
```html
<div id="app">
  <p :style="bgRed">蘋果</p>
</div>
```
```js
Vue.createApp({
  data(){
    return{
        bgRed: {
          backgroundColor:'red'
        }
    }
  }
}).mount("#app");
```
### 多值寫法：
```html
<div id="app">
  <p :style="bgRed">蘋果</p>
</div>
```
```js
Vue.createApp({
  data(){
    return{
        bgRed: {
          backgroundColor:'red',
          color: 'white'
        }
    }
  }
}).mount("#app");
```

-----------------------------------------------
## 將樣式寫在style (陣列寫法)
```html
<div id="app">
  <p :style="[bgRed,textWhite]">蘋果</p>
</div>
```
```js
Vue.createApp({
  data(){
    return{
        bgRed: {
          backgroundColor:'red',
        },
        textWhite :{
          color: 'white'
        }
    }
  }
}).mount("#app");
```

-----------------------------------------------
## 將樣式寫在class (行內寫法)
```html
<div id="app">
  <p :class="{'bgRed': true}">蘋果</p>
</div>
```
```css
.bgRed{
  background-color: red;
}
```
### 多值寫法：
```html
<div id="app">
  <p :class="{'bgRed': true,'textWhite': true}">蘋果</p>
</div>
```
```css
.bgRed{
  background-color: red;
}
.textWhite{
  color: white;
}
```

-----------------------------------------------
## 將樣式寫在class (判斷值)
```html
<div id="app">
  <p :class="{'bgRed': bgRedClass,'textWhite': textWhiteClass}">蘋果</p>
</div>
```
```css
.bgRed{
  background-color: red;
}
.textWhite{
  color: white;
}
```
```js
Vue.createApp({
  data(){
    return{
        bgRedClass: true,
        textWhiteClass: false
    }
  }
}).mount("#app");
```

-----------------------------------------------
## 將樣式寫在class (物件寫法)
```html
<div id="app">
  <p :class="objClass">蘋果</p>
</div>
```
```css
.bgRed{
  background-color: red;
}
.textWhite{
  color: white;
}
```
```js
Vue.createApp({
  data(){
    return{
      objClass:{
        bgRed: true,
        textWhite: false
      }
    }
  }
}).mount("#app");
```

-----------------------------------------------
## 將樣式寫在class (陣列寫法)
```html
<div id="app">
  <p :class="ArrClass">蘋果</p>
</div>
```
```css
.bgRed{
  background-color: red;
}
.textWhite{
  color: white;
}
```
```js
Vue.createApp({
  data(){
    return{
      ArrClass:[
        'bgRed','textWhite'
      ]
    }
  }
}).mount("#app");
```