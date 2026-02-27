---
title: Vue進階應用方法
date: 2021-06-04
tags: ["Vue"]
---
## v-text模板語法
* 可以插入 **運算子** 來呈現結果。(範例一)
* 使用 **v-once** 可以只綁定一次，之後在修改不會變更。(範例二)
* 可以直接撰寫 **javascript** 。(範例三)
```js
// <-----html----->
#app
  //** 範例一 **//
  p {{ a + b }}  //100300
  p {{ a * b }}  //30000
  p {{ a == b }}  //false

  //** 範例二 **//
  p(v-text="b" v-once)  //300

  //** 範例三 **//
  p {{ b.split() }}  //["300"] 

// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a: 100,
    b: "300"
  }
});
```

-----------------------------------------------
## :class動態切換樣式
* 使用 **判斷式** 來決定是否套用樣式。(範例一)
* 以{物件}方式套用樣式。(範例二)
* 以[陣列]方式套用樣式。(範例三)
* 將切換綁定在 **button** 上。(範例四)
* 將切換綁定在 **checkbox** 上。(範例五)
* 直接寫入行內 **style** 樣式。(範例六)
`屬性名稱不能有『-』，如果有的話，第二個單字的第一個字母改大寫，例如:backgroundColor`
```js
// <-----html----->
#app
  //** 範例一 **//
  .box(:class="{'rotate':a}")

  //** 範例二 **//
  .box(:class="{ 'rotate':a , 'red':a }")
  .box(:class="b")

  //** 範例三 **//
  .box(:class="[ 'rotate' , 'red' ]")
  .box(:class="c")

  //** 範例四 **//
  .box(:class="d")
  button(@click="d.red = !d.red")

  //** 範例五 **//
  .box(:class="e")
  input(type="checkbox" v-model="e" value="red")

  //** 範例六 **//
  .box(:style="[{backgroundColor: 'red'},{transform: 'rotate(45deg)'}]")

// <-----css----->
.box
  width: 30px
  height: 30px
  border: solid 1px

.rotate
  transform: rotate(45deg)

.red
  background-color: red

// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a: true,
    b: { rotate: true , red: true },
    c: [ 'rotate' , 'red' ],
    d: { red: false },
    e: []
  }
});
```

-----------------------------------------------
## v-for陣列與物件迴圈
* \<template>標籤本身不會被v-for列印。(範例一)
* 可單純列印數字。(範例二)
* 陣列的[key]是 **位置** ，物件的[key]是 **名稱** 。(範例三)
* 使用 **v-if** 可以篩選 **v-for** 的結果。
```js
// <-----html----->
#app
  p(v-for="item in a") {{item.name}}  //蘋果  //香蕉  //鳳梨
  
  //** 範例一 **//
  template(v-for="item in a") {{item.name}}  //蘋果香蕉鳳梨
  
  //** 範例二 **//
  p(v-for="item in 5") {{item}}  //1  //2  //3  //4  //5
  
  //** 範例三 **//
  p(v-for="(item,key) in a") {{key}}  //0  //1  //2  
  p(v-for="(item,key) in b") {{key}}  //apple  //banana  //pineapple

  //** 範例四 **//
  p(v-for="item in a" v-if="item.amount > 200") {{item.name}}  //蘋果  //香蕉

// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a:[
      {name: "蘋果" ,amount: 100},
      {name: "香蕉" ,amount: 300},
      {name: "鳳梨" ,amount: 500}
    ],
    b:{
      apple:{
        name: "蘋果",
        amount: 100
      },
      banana:{
        name: "香蕉",
        amount: 300
      },
      pineapple:{
        name: "鳳梨",
        amount: 500
      }
    }
  }
});
```
* 使用 **Vue.set** 可以傳入 **v-for** 資料。
```js
// <-----html----->
#app
  p(v-for="item in a") {{item.name}}
  button(@click="change") 按鈕
  
// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a:[
      {name: "蘋果" ,amount: 100},
      {name: "香蕉" ,amount: 300},
      {name: "鳳梨" ,amount: 500}
    ]
  },
  methods:{
    change: function(){
      Vue.set( this.a , 0 , {name: "芭樂"} );
      //Vue.set( 傳入的目標 , key , 傳入的東西 );
    }
  }
});
```
* 點擊按鈕篩選輸入框裡的值。
```js
// <-----html----->
#app
  input(type="text" v-model="c")
  button(@click="filter") 按鈕
  p(v-for="item in b") {{item.amount}}
  
// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a:[
      {name: "蘋果" ,amount: 100},
      {name: "香蕉" ,amount: 300},
      {name: "鳳梨" ,amount: 500}
    ],
    b: [],
    c: ""
  },
  methods:{
    filter: function(){
      if(this.c == ""){
        return;
      }else{
        this.b = this.a.filter(item => item.name.match(this.c));
      }
    }
  }
});
```

-----------------------------------------------
## methods
* 點擊按鈕，讓數值增加或減少。
```js
// <-----html----->
#app
  button(@click="add") 增加
  span {{a}}
  button(@click="reduce") 減少

// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a: 50
  },
  methods:{
    add: function(){
      this.a -= 1 ;
    },
    reduce: function(){
      this.a += 1 ;
    }
  }
});
```
* 點擊按鈕，讓數值增加或減少結合 **v-for** 。
```js
// <-----html----->
ul#app
  li(v-for="item in a")
    button(@click="add(item)") 增加
    span {{item.amount}}
    button(@click="reduce(item)") 減少

// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a:[
      {name: "蘋果" ,amount: 100},
      {name: "香蕉" ,amount: 300},
      {name: "鳳梨" ,amount: 500}
    ]
  },
  methods:{
    add: function(item){
      item.amount += 1;
    },
    reduce: function(item){
      item.amount -= 1;
    }
  }
});
```

-----------------------------------------------
## computed計算屬性
* 有緩存資料的能力，效能比methods好。
* 自動篩選輸入框裡的值。
```js
// <-----html----->
#app
  input(v-model="b")
  p(v-for="item in filter") {{item.amount}}

// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a:[
      {name:"蘋果",amount:100},
      {name:"香蕉",amount:300},
      {name:"鳳梨",amount:500},
    ],
    b: "",
  },
  computed:{
    filter: function(){
      if(this.b == ""){
        return;
      }else{
        return this.a.filter(item => item.name.match(this.b));
      }
    }  
  }
});
```
* 自動調整顯示正確的時間格式。
```js
// <-----html----->
#app
  p {{nowDate}}

// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a : 0
  },
  computed:{
    nowDate: function(){
      let date = new Date(this.a * 1000);
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate() + 1;
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      return `${year}年${month}月${day}日${hours}時${minutes}分${seconds}秒`;
    }
  },
  mounted: function(){
    this.a = Math.floor(Date.now() / 1000);
  }
});
```

-----------------------------------------------
## watch
* 監控資料有無更動，再執行其他方法。
```js
// <-----html----->
#app
  button(@click=" a = '已經送出' ") {{a}}
  //點擊送出→已經送出→再次送出→已經送出→再次送出...

// <-----js----->
var app = new Vue({
  el: "#app",
  data:{
    a: "點擊送出",
  },
  watch:{
    a: function(){
      setTimeout(() => {
        this.a = "再次送出";   
      },3000);
    }
  }
});
```