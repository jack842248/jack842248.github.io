---
title: 用computed進行計算處理
date: 2024-12-22
tags: ["Vue3"]
---
## getter、setter
```html
<div id="app">
  <ul>
    <li v-for="product in products">
      {{ product.name }} / {{ product.price }}
      <button type="button" @click="addToCart(product)">加入購物車</button>
    </li>
  </ul>
  <h6>購買清單：</h6>
  <ul>
    <li v-for="cart in carts">
      {{cart.name}}
    </li>
  </ul>
  <p>老闆直接給優惠價：</p>
  <input type="text" v-model="num">
  <button type="button" @click="total = num">更新</button>
  <p>總計：{{ `NT$ ${total}` }}</p>
</div>
```
```js
Vue.createApp({
  data(){
    return{
      num: "",
      products:[
        {
          name: '蛋餅',
          price: 30,
          vegan: false
        },
        {
          name: '飯糰',
          price: 35,
          vegan: false
        },
        {
          name: '小籠包',
          price: 60,
          vegan: false
        },
        {
          name: '蘿蔔糕',
          price: 30,
          vegan: true
        },
      ],
      carts:[],
      sum: ""
    }
  },
  methods:{
    addToCart(product){
      this.carts.push(product);
    }
  },
  computed:{
    total:{
      get(){
        let total = 0;
        this.carts.forEach((item)=>{
          total += item.price;
        })
        return this.sum || total
      },
      set(val){
        this.sum = val;
      }
    }
  }
}).mount("#app");
```
`get會自動接收傳入的值進行計算，set會將值更新到data`