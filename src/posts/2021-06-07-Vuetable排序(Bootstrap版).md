---
title: 【Vue】vue-table排序(Bootstrap版)
date: 2021-06-07
tags: ["vue"]
---
### methods版
1. 在\<tr>使用 **v-for** 將[a]資料列印出來。
2. 在\<th>"價格"上增加 **@click** 事件[sortPrice]，並在 **methods** 新增[sortPrice]方法。
3. \[sortPrice]:判斷現在[b]的值是(true/false)，決定要排序大到小，還是小到大。
4. 並且在排序完之後，改變[b]的值。
5. 在\<th>"到期日"上增加 **@click** 事件[sortDate]，並在 **methods** 新增[sortDate]方法。
6. \[sortDate]:判斷現在[c]的值是(true/false)，決定要排序大到小，還是小到大。
7. 並且在排序完之後，改變[c]的值。
8. 在\<th>"價格"裡的\<span>上綁定 **:class** 判斷式，判斷[b]的值是(true/false)決定是否套用[rotate]樣式。
9. 在\<th>"到期日"裡的\<span>上綁定 **:class** 判斷式，判斷[c]的值(true/false)決定是否套用[rotate]樣式。
```js
// <-----html----->
#app
  table.table
    thead
      tr
        th 品名
        th.click(@click="sortPrice") 價格  //2.
          span(:class="{'rotate':b}")  //8.
            i.fas.fa-angle-up.text-success
        th.click(@click="sortDate") 到期日  //5.
          span(:class="{'rotate':c}")  //9.
            i.fas.fa-angle-up.text-success
      tr(v-for="item in a")  //1.
        td {{ item.name }}
        td {{ item.price }}
        td {{ item.expiryDate }}

// <-----css----->
.click
  cursor: pointer
  
span
  display: inline-block
  
.rotate
  transform: rotate(180deg)

// <-----js----->
let app = new Vue({
  el: '#app',
  data:{
    a: [
      {
        name: '巧呼呼蘇打水',
        price: 30,
        expiryDate: 90
      },
      {
        name: '心驚膽跳羊肉飯',
        price: 65,
        expiryDate: 2
      },
      {
        name: '郭師傅武功麵包',
        price: 32,
        expiryDate: 1
      },
      {
        name: '不太會過期的新鮮牛奶',
        price: 75,
        expiryDate: 600
      },
      {
        name: '金殺 巧粒粒',
        price: 120,
        expiryDate: 200
      }
    ],
    b: true,
    c: true
  },
  methods:{
    sortPrice: function(){  //2.
      if(this.b == true){  //3.
        this.a.sort((x,y)=> x.price - y.price);
        this.b = false;  //4.
      }else if(this.b == false){
        this.a.sort((x,y)=> y.price - x.price);
        this.b = true;
      }
    },
    sortDate: function(){  //5.
      if(this.c == true){  //6.
        this.a.sort((x,y)=> x.expiryDate - y.expiryDate);
        this.c = false;  //7.
      }else if(this.c == false){
        this.a.sort((x,y)=> y.expiryDate - x.expiryDate);
        this.c = true;
      }
    },
  }
});
```

-----------------------------------------------
### computed版
1. 在\<tr>使用 **v-for** 將[a]資料列印出來。
2. 在 **computed** 新增[sortArray]來監控[a]資料。
3. \[sortArray]:先判斷[b]的值是(true/false)，來判斷點擊的是"日期"還是"到期日"。
4. 再用判斷式判斷[c]的值是(true/false)，來決定要排序大到小，還是小到大。
5. 最後將各種不同的結果回傳到[sortArray]。
6. 在<th>"價格"新增 **@click** 事件，並直接賦予[b]值，同時改變[c]的值。
7. 在<th>"到期日"新增 **@click** 事件，並直接賦予[b]值，同時改變[c]的值。
8. 在<th>"價格"裡的<span>綁定 **:class** 判斷式，判斷[b]的值是(true/false)，再判斷[b]的值是(true/false)決定是否套用[rotate]樣式。
```js
// <-----html----->
#app
  table.table
    thead
      tr
        th 品名
        th.click(@click=" b = true ; c = !c ") 價格  //6.
          span(:class="{ 'rotate': b && c }")  //8.
            i.fas.fa-angle-up.text-success
        th.click(@click=" b = false ; c = !c ") 到期日  //7.
          span(:class="{ 'rotate': !b && c }")  //8.
            i.fas.fa-angle-up.text-success
      tr(v-for="item in sortArray")  //1.
        td {{ item.name }}
        td {{ item.price }}
        td {{ item.expiryDate }}

// <-----css----->
.click
  cursor: pointer
  
span
  display: inline-block
  
.rotate
  transform: rotate(180deg)

// <-----js----->
let app = new Vue({
  el: '#app',
  data:{
    a: [
      {
        name: '巧呼呼蘇打水',
        price: 30,
        expiryDate: 90
      },
      {
        name: '心驚膽跳羊肉飯',
        price: 65,
        expiryDate: 2
      },
      {
        name: '郭師傅武功麵包',
        price: 32,
        expiryDate: 1
      },
      {
        name: '不太會過期的新鮮牛奶',
        price: 75,
        expiryDate: 600
      },
      {
        name: '金殺 巧粒粒',
        price: 120,
        expiryDate: 200
      }
    ],
    b: true,
    c: true
  },
  computed:{
    sortArray: function(){  //2.
      if(this.b == true){  //3.
        return this.a.sort((x,y)=>{  //5.
          if(this.c == true){  //4.
            return x.price - y.price;  //5.
          }else if(this.c == false){  //4.
            return y.price - x.price;  //5.
          }
        });
      }else if(this.b == false){  //3.
        return this.a.sort((x,y)=>{  //5.
          if(this.c == true){  //4.
            return x.expiryDate - y.expiryDate;  //5.
          }else if(this.c == false){  //4.
            return y.expiryDate - x.expiryDate;  //5.
          }
        })
      }
    }
  }
});
```