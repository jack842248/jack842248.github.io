---
title: emit資料由內傳外
date: 2024-12-27
tags: ["Vue3"]
---
## 點擊子元件，改變父元件資料
1. 先在父元件上建立好`data`和`methods`方法
2. 在子元件上綁定寫`methods($emit)`並綁定在按鈕上
3. 在`template`標籤上使用`v-on:emit`方法="要觸發的父層方法"
```html
<div id="app">
  <p>{{ num }}</p>
  <add-btn @add-num="addNum"></add-btn>
</div>
```
```js
const app = Vue.createApp({
  data(){
    return{
      num: 0
    }
  },
  methods:{
    addNum(){
      this.num += 1;
    }
  }
})

app.component('add-btn',{
  methods:{
    emitAddNum(){
      this.$emit('add-num')     
    }
  },
  template:`<button type="button" @click="emitAddNum">增加</button>`
})

app.mount("#app");
```
### 簡化寫法：
```js
const app = Vue.createApp({
  data(){
    return{
      num: 0
    }
  },
  methods:{
    addNum(){
      this.num += 1;
    }
  }
})

app.component('add-btn',{
  template:`<button type="button" @click="$emit('add-num')">增加</button>`
})

app.mount("#app");
```
-----------------------------------------------
## 點擊子元件，改變父元件資料(帶參數)
```html
<div id="app">
  <p>接收資料：{{ text }}</p>
  <send-btn @emit-text="showData"></send-btn>
</div>
```
```js
const app = Vue.createApp({
  data(){
    return{
      text: ""
    }
  },
  methods:{
    showData(item){
      this.text = item;
    }
  }
})

app.component('send-btn',{
  methods:{
    emitSendData(){
      this.$emit('emit-text','這是子元件傳給父元件的文字')     
    }
  },
  template:`<button type="button" @click="emitSendData">傳送資料</button>`
})

app.mount("#app");
```
### 簡化寫法：
```js
const app = Vue.createApp({
  data(){
    return{
      text: ""
    }
  },
  methods:{
    showData(item){
      this.text = item;
    }
  }
})

app.component('send-btn',{
  template:`<button type="button" @click="$emit('emit-text','這是子元件傳給父元件的文字') ">傳送資料</button>`
})

app.mount("#app");
```
-----------------------------------------------
## 點擊子元件，改變父元件資料(將子元件的資料作為參數)
```html
<div id="app">
  <p>目前數量：{{ num }}</p>
  <add-btn @add-num="addNum"></add-btn>
</div>
```
```js
const app = Vue.createApp({
  data(){
    return{
      num: 0
    }
  },
  methods:{
    addNum(count){
      this.num += count;
    }
  }
})

app.component('add-btn',{
  data(){
    return{
      count: 2
    }
  },
  template:`<button type="button" @click="$emit('add-num',count)">增加{{ count }}</button>`
})

app.mount("#app");
```
-----------------------------------------------
## emit型別驗證(出現錯誤)
```html
<div id="app">
  <p>目前數量：{{ num }}</p>
  <add-btn @add-num="addNum"></add-btn>
</div>
```
```js
const app = Vue.createApp({
  data(){
    return{
      num: 0
    }
  },
  methods:{
    addNum(count){
      this.num += count;
    }
  }
})

app.component('add-btn',{
  data(){
    return{
      count: 2
    }
  },
  template:`
  <button type="button" @click="$emit('add-num',count)">增加{{ count }}</button>
  <button type="button" @click="count++">增加按鈕的數字</button>
  `
})

app.mount("#app");
```
### 修正寫法：
```js
const app = Vue.createApp({
  data(){
    return{
      num: 0
    }
  },
  methods:{
    addNum(count){
      this.num += count;
    }
  }
})

app.component('add-btn',{
  data(){
    return{
      count: 2
    }
  },
  emits:['add-num'],
  template:`
  <button type="button" @click="$emit('add-num',count)">增加{{ count }}</button>
  <button type="button" @click="count++">增加按鈕的數字</button>
  `
})

app.mount("#app");
```
-----------------------------------------------
## 實作彈跳視窗(emit)
```html
<div id="app">
  <button type="button" @click="openAlert">顯示跳窗</button>
  <alert-component v-if="showAlert" @emit-alert="closeAlert"></alert-component>
</div>
```
```js
const app = Vue.createApp({
  data(){
    return{
      showAlert: false
    }
  },
  methods:{
    openAlert(){
      this.showAlert = true;
    },
    closeAlert(){
      this.showAlert = false;
    }
  }
})

app.component('alert-component',{
  methods:{
    emitAlert(){
      this.$emit("emit-alert")
    }
  },
  template:`
  <div class="alert alert-primary">這是子元件的跳窗
    <button type="button" class="close" @click="emitAlert">&times;</button>
  </div>
  `
})

app.mount("#app");
```