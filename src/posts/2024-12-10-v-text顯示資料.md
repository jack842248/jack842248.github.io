---
title: Vue3v-text顯示資料
date: 2024-12-10
tags: ["Vue3"]
---
## v-text
```html
<div id="app">
  <p v-text="apple"></p>
</div>
```
```js
Vue.createApp({
  data(){
    return{
      apple: "蘋果",
    }
  }
}).mount("#app");
```

-----------------------------------------------
## {{}}(Mustache)
```html
<div id="app">
  <p>{{ apple }}</p>
  <p>{{ 1 + 1 }}</p>
</div>
```
```js
Vue.createApp({
  data(){
    return{
      apple: "蘋果",
    }
  }
}).mount("#app");
```
### 顯示結果：
```html
<div id="app">
  <p>蘋果</p>
  <p>2</p>
</div>
```

-----------------------------------------------
## {{}} 進階用法
```html
<div id="app">
  <p>{{ `${apple}比${banana}還好吃` }}</p>
</div>
```
```js
Vue.createApp({
  data(){
    return{
      apple: "蘋果",
      banana: "香蕉"
    }
  }
}).mount("#app");
```

-----------------------------------------------
## {{}} + methods方法
```html
<div id="app">
  <p>{{ sayName("香蕉") }}</p>
</div>
```
```js
Vue.createApp({
  data(){
    return{
      apple: "蘋果",
    }
  },
  methods:{
    sayName(name){
      return `${this.apple}比${name}還好吃`
    }
  }
}).mount("#app");
```

-----------------------------------------------
## v-html
```html
<div id="app">
  <div v-html="apple"></div>
</div>
```
```js
Vue.createApp({
  data(){
    return{
      apple: "<p>蘋果</p>",
    }
  }
}).mount("#app");
```
`跟v-text和{{}}結果相同，但會多帶一個div標籤`

-----------------------------------------------
## v-once + v-model 資料只渲染一次，但後續不被更動
```html
<div id="app">
  <input type="text" v-model="apple">
  <p v-once>{{ apple }}</p>
</div>
```
```js
Vue.createApp({
  data(){
    return{
      apple: "蘋果",
    }
  }
}).mount("#app");
```
`會呈現"蘋果"，但是不會被v-model改動`

-----------------------------------------------
## v-pre + {{}} 括弧內的文字不會被編譯，直接呈現
```html
<div id="app">
  <p v-pre>{{ apple }}</p>
</div>
```
```js
Vue.createApp({
  data(){
    return{
      apple: "蘋果",
    }
  }
}).mount("#app");
```