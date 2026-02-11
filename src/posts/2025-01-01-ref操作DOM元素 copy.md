---
title: ref操作DOM元素
date: 2025-01-01
tags: ["Vue3"]
---
## 抓取DOM元素
```html
<div id="app">
  <input type="text" ref="textInput">
  <button type="button" @click="getInputValue">按鈕</button>
</div>
```
```js
const app = Vue.createApp({
  methods:{
    getInputValue(){
      console.log(this.$refs.textInput);
    }
  }
})

app.mount("#app");
```
-----------------------------------------------
## 抓取DOM＋父元件操控資料
```
<div id="app">
  <card-component ref="card"></card-component>
  <button type="button" @click="changeCardValue">按鈕</button>
</div>
```
```
const app = Vue.createApp({
  methods:{
    changeCardValue(){
      this.$refs.card.title = "新的卡片標題";
      this.$refs.card.content = "新的卡片內容文字";
      this.$refs.card.footer = "新的卡片底部文字"
    }
  }
})

app.component('card-component',{
  data(){
    return{
      title: "卡片標題",
      content: "卡片內容",
      footer: "卡片底部"
    }
  },
  template:`
    <div class="card">
      <div class="card-header">
        {{ title }}
      </div>
      <div class="card-body">
        {{ content }}
      </div>
      <div class="card-header">
        {{ footer }}
      </div>
    </div>
  `
})
app.mount("#app");
```
-----------------------------------------------
## 實作用ref抓取Bootstrap5的Modal元件
```html
<div id="app">
  <div class="modal" tabindex="-1" ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  <button type="button" @click="openModal">按鈕</button>
</div>
```
```js
const app = Vue.createApp({
  data(){
    return{
      bsModal: ""
    }
  },
  methods:{
    openModal(){
      this.bsModal.show()
    }
  },
  mounted(){
    this.bsModal = new bootstrap.Modal(this.$refs.modal);
  }
})

app.mount("#app");
```
-----------------------------------------------
## 實作用ref抓取Bootstrap5的Modal元件(進階版)
```html
<div id="app">
  <modal-component ref="modalDom"></modal-component>
  <button type="button" @click="openModal">按鈕</button>
</div>
```
```js
const app = Vue.createApp({ 
  methods:{
    openModal(){
      this.$refs.modalDom.bsModal.show()
    }
  }
})

app.component('modal-component',{
  data(){
    return{
      bsModal: ""
    }
  },
  mounted(){
    this.bsModal = new bootstrap.Modal(this.$refs.modalDom);
  },
  template:`
  <div class="modal" tabindex="-1" ref="modalDom">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  `
})

app.mount("#app");
```