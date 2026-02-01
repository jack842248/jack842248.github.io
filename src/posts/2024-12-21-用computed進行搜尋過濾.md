---
title: 【Vue3】用computed進行搜尋過濾
date: 2024-12-21
tags: ["Vue3"]
---
#### methods方法
```html
<div id="app">
  <input type="search" v-model="search">
  <h6>搜尋結果：</h6>
  <ul>
    <li v-for="product in filterProducts">
      {{ product.name }} / {{ product.price }}
    </li>
  </ul>
</div>
```
```js
Vue.createApp({
  data(){
    return{
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
      search: ""
    }
  },
  computed:{
    filterProducts(){
      return this.products.filter((item)=>{
        return item.name.match(this.search);
      })
    }
  }
}).mount("#app");
```