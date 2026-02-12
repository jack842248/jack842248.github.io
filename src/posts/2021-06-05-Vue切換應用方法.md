---
title: Vue切換應用方法
date: 2021-06-05
tags: ["Vue"]
---
## radio(三項切換)
*  **v-on** + **v-if** 方法。
```js
// <-----html----->
#app
  input(type="radio" name="a" @click="a='A'")
  input(type="radio" name="a" @click="a='B'")
  input(type="radio" name="a" @click="a='C'")
  p(v-if=" a=='A' ") 蘋果
  p(v-else-if=" a=='B' ") 香蕉
  p(v-else-if=" a=='C' ") 鳳梨

// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a: "A"
  }
});
```
* **v-on** + **{{}}** 方法。
```js
// <-----html----->
#app
  input(type="radio" name="a" @click="a='蘋果'")
  input(type="radio" name="a" @click="a='香蕉'")
  input(type="radio" name="a" @click="a='鳳梨'")
  p {{a}}

// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a: "蘋果"
  }
});
```
* **v-for** + **v-on** + **{{}}** 方法。
```js
// <-----html----->
#app
  input(v-for="item in b" type="radio" name="a" @click="change(item)")
  p {{a}}

// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a: "",
    b:[
      {name: "蘋果", amount: 100},
      {name: "香蕉", amount: 300},
      {name: "鳳梨", amount: 500}
    ],
  },
  methods:{
    change: function(item){
      switch(item.name){
        case "蘋果":
          this.a = 100;
          break;
        case "香蕉":
          this.a = 300;
          break;
        case "鳳梨":
          this.a = 500;
          break;
      }
    }
  }
});
```

-----------------------------------------------
## checkbox(兩項切換)
* **v-model** + **v-if** 方法。
```js
// <-----html----->
#app
  input(type="checkbox" v-model="a")

  //** 範例一 **//
  p(v-if="a==true") 蘋果
  p(v-if="a==false") 香蕉

  //** 範例二 **//
  p(v-if="a") 蘋果
  p(v-if="!a") 香蕉

  //** 範例三 **//
  p(v-if="a") 蘋果
  p(v-else) 香蕉

// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a: true
  }
});
```
* **v-on** + **v-if** 方法。
```js
// <-----html----->
#app
  input(type="checkbox" @click="change")
  p(v-if="a") 蘋果
  p(v-if="!a") 香蕉

// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a: true
  },
  methods:{
    change: function(){
      this.a = !this.a;
    }
  }
});
```
* 複選框(會先呈現預設值)。
```js
// <-----html----->
#app
  input(type="checkbox" v-model="a" true-value="蘋果" false-value="香蕉")
  p {{a}}

// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a: "蘋果"
  }
});
```
* 切換輸入框，需加入 **:key** 才能同時把值也切換。
```js
// <-----html----->
#app
  input(v-if="a" type="text" placeholder="蘋果" :key="a")
  input(v-if="!a" type="text" placeholder="香蕉" :key="b")
  input(type="checkbox" v-model="a")

// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a: true
  }
});
```
-----------------------------------------------
## select(多選)
* **v-model** + **{{}}** 方法。
```js
// <-----html----->
#app
  select(v-model="a")
    option(value="" hidden) 請選擇
    option(value="100") 蘋果
    option(value="300") 香蕉
    option(value="500") 鳳梨
  p {{a}}

// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a: "",
  }
});
```
* **v-model** + **v-for** + **{{}}** 方法。
```js
// <-----html----->
#app
  select(v-model="a")
    option(value="" hidden) 請選擇
    option(v-for="item in b" :value="item.amount") {{item.name}}
  p {{a}}個
  
// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a:"",
    b:[
      {name:"蘋果" , amount: 100},
      {name:"香蕉" , amount: 300},
      {name:"鳳梨" , amount: 500}
    ]
  }
});
```
* 複選選單
```js
// <-----html----->
#app
  select(v-model="a" multiple)
    option(v-for="item in b") {{item.name}}
  p {{a.toString()}}

// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a:"",
    b:[
      {name:"蘋果" , amount: 100},
      {name:"香蕉" , amount: 300},
      {name:"鳳梨" , amount: 500}
    ]
  }
});
```