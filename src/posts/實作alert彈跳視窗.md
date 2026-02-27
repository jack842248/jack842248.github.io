---
title: 實作Alert彈跳視窗
date: 2024-12-28
tags: ["Vue3"]
---
## 彈跳視窗
```html
<div id="app">
  <button type="button" @click="openAlert">顯示跳窗</button>
  <alert-component v-if="showAlert" @emit-alert="closeAlert" :title="alertText"></alert-component>
</div>
```
```js
const app = Vue.createApp({
  data(){
    return{
      showAlert: false,
      alertText: "父元件的標題名稱"
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
  props:["title"],
  methods:{
    emitAlert(){
      this.$emit("emit-alert")
    }
  },
  template:`
  <div class="alert alert-primary">{{ title }}
    <button type="button" class="close" @click="emitAlert">&times;</button>
  </div>
  `
})

app.mount("#app");
```