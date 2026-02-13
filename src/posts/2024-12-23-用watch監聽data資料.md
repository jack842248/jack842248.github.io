---
title: 用watch監聽data資料
date: 2024-12-23
tags: ["Vue3"]
---
## watch新舊值介紹
```html
<div id="app">
  <input type="text" v-model="tempName">
  <p>{{ tempName }}</p>
</div>
```
```js
Vue.createApp({
  data(){
    return{
      tempName: "",
    }
  },
  watch:{
    //new = 新輸入的值
    //old = 上一次輸入的值
    tempName(new,old){
      console.log(new,old)
    }
  }
}).mount("#app");
```
`當輸入第一次值的時候，watch`

-----------------------------------------------
## watch監看，textarea字數
```html
<div id="app">
  <textarea v-model="tempName" cols="30" rows="5"></textarea>
  <p>您已經輸入了{{ textLength }}個字元</p>
</div>
```
```js
Vue.createApp({
  data(){
    return{
      tempName: "",
      textLength: 0,
    }
  },
  watch:{
    tempName(new,old){
      this.textLength = `${new.length}`
    }
  }
}).mount("#app");
```

-----------------------------------------------
## computed監看data值有無更動
```html
<div id="app">
  <label>商品名稱</label>
  <input type="text" v-model="productName">
  <br>
  <label>缺貨</label>
  <input type="checkbox" v-model="productStock">
  <p>{{ resultText }}</p>
</div>
```
```js
Vue.createApp({
  data(){
    return{
      productName: "",
      productStock: false
    }
  },
  computed:{
    resultText(){
      return `${this.productName}目前${this.productStock?"沒":""}有庫存`
    }
  }
}).mount("#app");
```

-----------------------------------------------
## watch監看data值有無更動
```html
<div id="app">
  <label>商品名稱</label>
  <input type="text" v-model="productName">
  <br>
  <label>缺貨</label>
  <input type="checkbox" v-model="productStock">
  <p>{{ resultText }}</p>
</div>
```
```js
Vue.createApp({
  data(){
    return{
      productName: "",
      productStock: false,
      resultText: ""
    }
  },
  watch:{
    productName(){
      this.resultText = `${this.productName}目前${this.productStock?"沒":""}有庫存`
    },
    productStock(){
      this.resultText = `${this.productName}目前${this.productStock?"沒":""}有庫存`
    }
  }
}).mount("#app");
```

-----------------------------------------------
## watch監看data物件有無更動(深層監聽)
```html
<div id="app">
  <label>商品名稱</label>
  <input type="text" v-model="product.name">
  <br>
  <label>缺貨</label>
  <input type="checkbox" v-model="product.stock">
  <p>{{ resultText }}</p>
</div>
```
```js
Vue.createApp({
  data(){
    return{
      product:{
        name: "",
        stock: false
      },
      resultText: ""
    }
  },
  watch:{
    product:{
      handler(new,old){
        this.resultText = `${this.product.name}目前${this.product.stock?"沒":""}有庫存`
      },
      deep: true
    }
  }
}).mount("#app");
```
`handler(n,o){},deep: true是固定寫法`