---
title: Vue3v-if選擇性顯示
date: 2024-12-12
tags: ["Vue3"]
---
## v-if
```html
<div id="app">
  <p v-if="apple">蘋果</p>
</div>
```
```js
Vue.createApp({
  data(){
    return{
        apple: false //true顯示，false不顯示
    }
  }
}).mount("#app");
```
`v-if不顯示時，是連同整個DOM的節點都看不見`

-----------------------------------------------
## v-show
```html
<div id="app">
  <p v-show="apple">蘋果</p>
  <button type="button" @click="toggleApple">按鈕</button>
</div>
```
```js
Vue.createApp({
  data(){
    return{
        apple: true
    }
  },
  methods:{
    toggleApple(){
      this.apple = !this.apple; 
    }
  }
}).mount("#app");
```
`v-show是使用display:block和display:none來切換`

-----------------------------------------------
## v-if + 按鈕切換
```html
<div id="app">
  <p v-if="apple">蘋果</p>
  <button type="button" @click="toggleApple">按鈕</button>
</div>
```
```js
Vue.createApp({
  data(){
    return{
        apple: true
    }
  },
  methods:{
    toggleApple(){
      this.apple = !this.apple; 
    }
  }
}).mount("#app");
```

-----------------------------------------------
## v-if + v-else + 按鈕切換
```html
<div id="app">
  <p v-if="apple">蘋果</p>
  <p v-else>香蕉</p>
  <button type="button" @click="toggleApple">按鈕</button>
</div>
```
```js
Vue.createApp({
  data(){
    return{
        apple: true
    }
  },
  methods:{
    toggleApple(){
      this.apple = !this.apple; 
    }
  }
}).mount("#app");
```

-----------------------------------------------
## v-if + v-else-if + 按鈕切換
```html
<div id="app">
  <p>{{ fruits }}</p>
  <p v-if="fruits == '蘋果'">一個15元</p>
  <p v-else-if="fruits == '香蕉'">一個20元</p>
  <p v-else-if="fruits == '鳳梨'">一個35元</p>
  <button type="button" @click="changeFruits('蘋果')">蘋果</button>
  <button type="button" @click="changeFruits('香蕉')">香蕉</button>
  <button type="button" @click="changeFruits('鳳梨')">鳳梨</button>
</div>
```
```js
Vue.createApp({
  data(){
    return{
        fruits: "蘋果"
    }
  },
  methods:{
    changeFruits(item){
      this.fruits = item;
    }
  }
}).mount("#app");
```

-----------------------------------------------
## v-if + v-for
```html
<div id="app">
  <ul>
    <template v-for="item in fruits">
      <li v-if="item.price < 30">{{ item.name }}</li>
    </template>
  </ul>
</div>
```
```js
const fruits = [
  {
    name: "蘋果",
    price: 15,
    import: true
  },
  {
    name: "香蕉",
    price: 20,
    import: true
  },
  {
    name: "鳳梨",
    price: 35,
    import: false
  }
]

Vue.createApp({
  data(){
    return{
        fruits: fruits
    }
  }
}).mount("#app");
```
`v-for和v-if官方不建議使用在同一個標籤上，因此可以使用template來拆開`