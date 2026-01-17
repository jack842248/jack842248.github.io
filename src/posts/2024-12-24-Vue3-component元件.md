---
title: 【Vue3】component元件
date: 2024-12-24
tags: ["Vue3"]
---
### 全域註冊元件(第一種寫法)
```html
<div id="app">
  <alert></alert>
</div>
```
```js
const app = Vue.createApp({
  data(){
    return{
      text: "app的文字"
    }
  }
}).component('alert',{
  data(){
    return{
      text: "元件的文字"
    }
  },
  template: `<div class="alert alert-primary">{{ text }}</div>`
})

app.mount("#app");
```
`接在createApp方法後面的component是全域註冊`

-----------------------------------------------
### 全域註冊元件(第二種寫法)
```html
<div id="app">
  <alert></alert>
</div>
```
```js
const app = Vue.createApp({
  data(){
    return{
      text: "app的文字"
    }
  }
})

app.component('alert',{
  data(){
    return{
      text: "元件的文字"
    }
  },
  template: `<div class="alert alert-primary">{{ text }}</div>`
})

app.mount("#app");
```

-----------------------------------------------
### 區域註冊元件(第一種寫法)
```html
<div id="app">
  <alert></alert>
</div>
```
```js
const alert = {
  data(){
    return{
      text: "元件的文字"
    }
  },
  template: `<div class="alert alert-primary">{{ text }}</div>`
}

const app = Vue.createApp({
  data(){
    return{
      text: "app的文字"
    }
  },
  components:{
    alert
  }
})
app.mount("#app");
```
`若區域元件註冊在某個元件下，那就只能在該元件的template下呼叫`

-----------------------------------------------
### 區域註冊元件(第二種寫法，模組化)
```js
//component-alert.js
export default{
  data(){
    return{
      text: "元件的文字"
    }
  },
  template: `<div class="alert alert-primary">{{ text }}</div>`
}
```
```html
<div id="app">
  <alert></alert>
</div>
```
```js
import alert from './component-alert.js';

const app = Vue.createApp({
  data(){
    return{
      text: "app的文字"
    }
  },
  components:{
    alert
  }
})
app.mount("#app");
```