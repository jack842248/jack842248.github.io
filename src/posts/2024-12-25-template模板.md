---
title: 【Vue3】template模板
date: 2024-12-25
tags: ["Vue3"]
---
### 元件模板建立
```html
<div id="app">
  <alert></alert>
</div>
```
```js
const app = Vue.createApp({})

app.component('alert',{
  template:`<div class="alert alert-primary">元件模板</div>`
})

app.mount("#app");
```
-----------------------------------------------
### 元件模板＋v-for
```html
<div id="app">
  <alert v-for="item in ArrayData"></alert>
</div>
```
```js
const app = Vue.createApp({
  data(){
    return{
      ArrayData:[1,2,3]
    }
  }
})

app.component('alert',{
  template:`<div class="alert alert-primary">元件模板</div>`
})

app.mount("#app");
```
`因為沒有任何傳值動作，此v-for僅會複製三次`

-----------------------------------------------
### x-template 以腳本方式引入模板
```html
<script type="text/x-template" id="alert-template">
  <div class="alert alert-primary">x-template所建立的模板</div>
</script>

<div id="app">
  <alert></alert>
</div>
```
```js
const app = Vue.createApp({})

app.component('alert',{
  template: "#alert-template"
})

app.mount("#app");
```
-----------------------------------------------
### v-is載入模板
```html
<div id="app">
  <div v-is="'alert1'"></div>
</div>
```
```js
const app = Vue.createApp({})

app.component('alert1',{
  template:`<div class="alert alert-primary">元件模板1</div>`
})

app.component('alert2',{
  template:`<div class="alert alert-warning">元件模板2</div>`
})

app.mount("#app");
```
-----------------------------------------------
### v-is載入模板＋動態切換
```html
<div id="app">
  <input type="text" v-model="componentName">
  <div v-is="componentName"></div>
</div>
```
```js
const app = Vue.createApp({
  data(){
    return{
      componentName: "alert1"
    }
  }
})

app.component('alert1',{
  template:`<div class="alert alert-primary">元件模板1</div>`
})

app.component('alert2',{
  template:`<div class="alert alert-warning">元件模板2</div>`
})

app.mount("#app");
```
`v-is裡面讀的是字串`

-----------------------------------------------
### v-is＋table
#### 使用情境：在html結構下<tbody>裡只接受<tr>，因此<table-row>會跑版
```html
<div id="app">
  <table>
    <thead>
      <tr>
        <td>標題</td>
        <td>內容</td>
      </tr>
    </thead>
    <tbody>
      <table-row></table-row>
    </tbody>
  </table>
</div>
```
#### 解決辦法：
```html
<div id="app">
  <table>
    <thead>
      <tr>
        <td>標題</td>
        <td>內容</td>
      </tr>
    </thead>
    <tbody>
      <tr v-is="'table-row'"></tr>
    </tbody>
  </table>
</div>
```
```js
const app = Vue.createApp({})

app.component('table-row',{
  template: `
    <tr>
      <td>$</td>
      <td>這是一段文字</td>
    </tr>
  `
})

app.mount("#app");
```