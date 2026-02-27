---
title: vue-todolist(精簡版)
date: 2021-06-02
tags: ["Vue"]
---
## 取得輸入框裡的值，點擊按鈕，新增到清單上。
1. 在 **data** 新增[newTodo]="空字串"，用 **v-model** 與 ***輸入框*** 綁定。
2. 在 ***新增按鈕*** 上綁定 **@click** 事件[addTodo]，在 **methods** 新增[addTodo]方法。
3. 在 **data** 新增[todos]=[空陣列]。
4. 使用 **Date.now()** 取得現在時間作為編號 **(id)** ，並賦予到[id]變數上。
5. 將[newTodo]，賦予到[title]變數上。
6. 將[id]、[title]和[checkbox]:false組成{物件}，使用 **push()** 將組成的{物件}傳入[todos]。
7. 在 ***\<li>*** 使用 **v-for** 列印出[todos]的所有{物件}，並且將{物件}命名為 **(item)** (item in todos)。
8. 將 **(item)** 的[id]用 **:for**綁定在 ***\<label>*** 上。
9. 將 **(item)** 的[id]用 **:id**綁定在 ***checkbox*** 上。
10. 將 **(item)** 的[title]用 **{{}}** 顯示在 ***\<label>文字上*** 。
11. 將 **(item)** 的[checkbox]用 **v-model** 綁定在 ***checkbox*** 上。
```js
// <-----html----->
#app
  //1.
  input(type="text" v-model="newTodo")
  //2.
  button(type="button" @click="addTodo") 新增
  hr
  button 全部
  button 未完成
  button 已完成
  hr
  ul
    //7.
    li(v-for="item in todos") 
      .div
        //9.11.
        input(type="checkbox" :id="item.id" v-model="item.checkbox")
        //8.10.
        label(:for="item.id") {{item.title}}
        button &times
      input(type="text")
  hr
  span 還有 X 筆任務未完成
  button 清除所有任務

// <-----js----->
let app = new Vue({
  el: "#app",
  data: {
    //1.
    newTodo: "",
    //3.
    todos: [],
  },
  methods: {
    //2.
    addTodo: function(){
      //4.
      let id = Date.now();  
      //5.
      let title = this.newTodo; 
      //6.
      this.todos.push(
        {
          id: id,
          title: title,
          checkbox: false
        }
      )
    }
  }
});
```

-----------------------------------------------
## 讓輸入框空值時不執行，且執行完<input>變空值。點擊清單上按鈕該項會被刪除。
1. 在 **methods** 裡的[addTodo]，新增 **if** 判斷式，如果 ***輸入框*** 裡沒有值就不執行。
2. 在 **else** 判斷式最後方，清空 ***輸入框*** 裡的值。 
3. 在 ***刪除按鈕*** 綁定 **@click** 事件[removeTodo]，並且將 **(item)** 帶入。
4. 在 **methods** 新增[removeTodo]方法，並將 **(item)** 帶入參數。
5. 定義一個變數[key]為引索位置。
6. 使用 **forEach()** 將[todos]的每一項(a)和每一項的位置(b)都拿出來比對，如果傳進來 **(item)** 的[id]等於每一項的[id]，就讓每一項的位置賦予到引索位置。
7. 最後在使用**splice()** 刪除[todos]裡的項目，(刪除第[key]項，刪除1個)。
```js
// <-----html----->
#app
  input(type="text" v-model="newTodo")
  button(type="button" @click="addTodo") 新增
  hr
  button 全部
  button 未完成
  button 已完成
  hr
  ul
    li(v-for="item in todos") 
      .div
        input(type="checkbox" :id="item.id" v-model="item.checkbox")
        label(:for="item.id") {{item.title}}
        //3.
        button(@click="removeTodo(item)") &times
      input(type="text")
  hr
  span 還有 X 筆任務未完成
  button 清除所有任務

// <-----js----->
let app = new Vue({
  el: "#app",
  data: {
    newTodo: "",
    todos: [],
  },
  methods: {
    addTodo: function(){
      //1.
      if(!this.newTodo){
        return;
      }else{
        let id = Date.now();
        let title = this.newTodo;
        this.todos.push(
          {
            id: id,
            title: title,
            checkbox: false
          }
        );
        //2.
        this.newTodo = "";
      }
    },
    //4.
    removeTodo: function(item){
      //5.
      let key;
      //6.
      this.todos.forEach(function(a,b){
        if(item.id == a.id){
          key = b;
        }
      });
      //7.
      this.todos.splice(key,1);
    }
  }
});
```

-----------------------------------------------
## 勾選checkbox會套用文字刪除線，並且點擊可以切換，[全部]、[未完成]、[已完成]。
1. 在css新增[deleteLine]樣式。
2. 在 ***\<label>*** 綁定 **:class** 判斷式，判斷[todos]的[checkbox]是否有勾選。
3. 在 **data** 新增[tag]來切換頁籤用，預設是"全部"。
4. 在三個頁籤上分別綁定 **@click** 點擊事件，並且直接改變[tag]的值:"all"、"undone"、"completed"。
5. 在 **computed** 新增[filterTodo]計算屬性。
6. 使用 **switch** 參數帶[tag]，判斷三種結果:"all"、"undone"、"completed"。
7. 如果[tag]是"all"的話，就全部回傳[todos]。
8. 如果[tag]是"undone"的話，就只回傳[completed]值是false的 **(item)** 。
9. 如果[tag]是"completed"的話，就只回傳[completed]值是true的 **(item)**。
10. 在 ***\<li>*** 的 **v-for** 中將[todos]改為計算過後的[filterTodo](item in filterTodo)。
```js
// <-----html----->
#app
  input(type="text" v-model="newTodo")
  button(type="button" @click="addTodo") 新增
  hr
  //4.
  button(@click=" tag = 'all' ") 全部
  //4.
  button(@click=" tag = 'undone' ") 未完成
  //4.
  button(@click=" tag = 'completed' ") 已完成
  hr
  ul
    //10.
    li(v-for="item in filterTodo") 
      .div
        input(type="checkbox" :id="item.id" v-model="item.checkbox")
        //2.
        label(:for="item.id" :class="{ 'deleteLine' : item.checkbox }") {{item.title}}
        button(@click="removeTodo(item)") &times
      input(type="text")
  hr
  span 還有 X 筆任務未完成
  button 清除所有任務

// <-----css----->
//1.
.deleteLine  
  text-decoration: line-through

// <-----js----->
let app = new Vue({
  el: "#app",
  data: {
    newTodo: "",
    todos: [],
    //3.
    tag: "all"
  },
  methods: {
    addTodo: function(){
      if(!this.newTodo){
        return;
      }else{
        let id = Date.now();
        let title = this.newTodo;
        this.todos.push(
          {
            id: id,
            title: title,
            chcekbox: false
          }
        );
        this.newTodo = "";
      }
    },
    removeTodo: function(item){
      let key;
      this.todos.forEach(function(a,b){
        if(item.id == a.id){
          key = b;
        }
      });
      this.todos.splice(key,1);
    }
  },
  //5.
  computed:{
    //6.
    filterTodo: function(){
      switch(this.tag){
        //7.
        case "all":
          return this.todos;
          break;
        //8.
        case "undone":
          return this.todos.filter(item => item.checkbox == false);
          break;
        //9.
        case "completed":
          return this.todos.filter(item => item.checkbox == true);
          break;
      }
    }
  }
});
```

-----------------------------------------------
## 滑鼠雙擊，可編輯清單，並且按下鍵盤[enter]鍵，可完成編輯。
1. 在 ***\<li>*** 綁定 **@dblclick** 雙擊事件[editTodo]，並將(item)帶入，然後在 **methods** 新增[editTodo]。
2. 在 **data** 新增[cacheTodo]為{空物件}，作為預存資料的地方，用來判定[id]是否傳入。
3. 在 **data** 新增[cacheTitle]為"空字串"，作為預存標題的地方。
4. 將 **修改輸入框** 用 **v-model** 綁定[cacheTitle]。
5. 在[editTodo]方法中，將 **(item)** 傳入[cacheTodo]的{物件}。
6. 將 **(item)** 的[title]傳入[cacheTitle]的"字串"。
7. 使用 **v-if** 判斷在 ***\<li>*** 底下的 ***\<div>*** 是否顯示，如果還沒雙擊(item.id != cacheTodo.id)，就顯示。
8. 使用 **v-if** 綁定 ***修改輸入框*** 是否顯示，如果已經雙擊(item.id == cacheTodo.id)，就顯示。
9. 在 ***修改輸入框*** 新增 **@keyup.enter** 鍵盤事件[editDone]，並將 **(item)** 帶入，然後在 **methods** 中新增[editDone]方法。
10. 將預存在輸入框裡的文字(cacheTitle)回傳到原本的物件文字(item.title)。
11. 顯示原本畫面，讓修改輸入框消失(this.cacheTodo={})，這樣[cacheTodo]的[id]就會不等於 **(item)** 的[id] 。
```js
// <-----html----->
#app
  input(type="text" v-model="newTodo")
  button(type="button" @click="addTodo") 新增
  hr
  button(@click=" tag = 'all' ") 全部
  button(@click=" tag = 'undone' ") 未完成
  button(@click=" tag = 'completed' ") 已完成
  hr
  ul
    //1.
    li(v-for="item in filterTodo" @dblclick="editTodo(item)")
      //7.
      .div(v-if="item.id != cacheTodo.id")
        input(type="checkbox" :id="item.id" v-model="item.checkbox")
        label(:for="item.id" :class="{ 'deleteLine' : item.checkbox }") {{item.title}}
        button(@click="removeTodo(item)") &times
      //4.8.9.
      input(type="text" v-if="item.id == cacheTodo.id" v-model="cacheTitle" @keyup.enter="editDone(item)")
  hr
  span 還有 X 筆任務未完成
  button 清除所有任務

// <-----css----->
.deleteLine  
  text-decoration: line-through
      
// <-----js----->
let app = new Vue({
  el: "#app",
  data: {
    newTodo: "",
    todos: [],
    tag: "all",
    //2.
    cacheTodo: {},
    cacheTitle: ""
  },
  methods: {
    addTodo: function(){
      if(!this.newTodo){
        return;
      }else{
        let id = Date.now();
        let title = this.newTodo;
        this.todos.push(
          {
            id: id,
            title: title,
            checkbox: false
          }
        );
        this.newTodo = "";
      }
    },
    removeTodo: function(item){
      let key;
      this.todos.forEach(function(a,b){
        if(item.id == a.id){
          key = b;
        }
      });
      this.todos.splice(key,1);
    },
    //1.
    editTodo: function(item){
      //5.
      this.cacheTodo = item;
      //6.
      this.cacheTitle = item.title;
    },
    //8.
    editDone: function(item){
      //10.
      item.title = this.cacheTitle;
      //11.
      this.cacheTodo = {};
    }
  },
  computed:{
    filterTodo: function(){
      switch(this.tag){
        case "all":
          return this.todos;
          break;
        case "undone":
          return this.todos.filter(item => item.checkbox == false);
          break;
        case "completed":
          return this.todos.filter(item => item.checkbox == true);
          break;
      }
    }
  }
});
```

-----------------------------------------------
## 顯示還有幾筆未完成。點擊按鈕清除所有項目。
1. 在 **computed** 新增[undoneNum]計算屬性。
2. 將[todos]過濾[completed]是false的{物件}，並將{物件}回傳到[todos]裡。
3. 將經過運算的[undoneNum]，使用 **{{}}** 顯示在 ***\<span>文字*** 上，並加上 **.length** 來顯示(幾)筆。
4. 在清除按鈕上新增 **@click** 點擊事件[clearTodo]，然後在**methods**中新增[clearTodo]方法。
5. 使用if判斷式，判斷彈跳確認框 **confirm()** 的結果是否刪除[todos]。
```js
// <-----html----->
#app
  input(type="text" v-model="newTodo")
  button(type="button" @click="addTodo") 新增
  hr
  button(@click=" tag = 'all' ") 全部
  button(@click=" tag = 'undone' ") 未完成
  button(@click=" tag = 'completed' ") 已完成
  hr
  ul
    li(v-for="item in filterTodo" @dblclick="editTodo(item)")
      .div(v-if="item.id != cacheTodo.id")
        input(type="checkbox" :id="item.id" v-model="item.checkbox")
        label(:for="item.id" :class="{ 'deleteLine' : item.checkbox }") {{item.title}}
        button(@click="removeTodo(item)") &times
      input(type="text" v-if="item.id == cacheTodo.id" v-model="cacheTitle" @keyup.enter="editDone(item)")
  hr
  //3.
  span 還有{{undoneNum.length}}筆任務未完成
  //4.
  button(@click="clearTodo") 清除所有任務

// <-----css----->
.deleteLine  
  text-decoration: line-through
      
// <-----js----->
let app = new Vue({
  el: "#app",
  data: {
    newTodo: "",
    todos: [],
    tag: "all",
    cacheTodo: {},
    cacheTitle: ""
  },
  methods: {
    addTodo: function(){
      if(!this.newTodo){
        return;
      }else{
        let id = Date.now();
        let title = this.newTodo;
        this.todos.push(
          {
            id: id,
            title: title,
            checkbox: false
          }
        );
        this.newTodo = "";
      }
    },
    removeTodo: function(item){
      let key;
      this.todos.forEach(function(a,b){
        if(item.id == a.id){
          key = b;
        }
      });
      this.todos.splice(key,1);
    },
    editTodo: function(item){
      this.cacheTodo = item;
      this.cacheTitle = item.title;
    },
    editDone: function(item){
      item.title = this.cacheTitle;
      this.cacheTodo = {};
    },
    //5.
    clearTodo: function(){
      if( confirm("確認清除所有項目嗎?") ){
        this.todos = [];
      }else{
        return;
      }
    }
  },
  computed:{
    filterTodo: function(){
      switch(this.tag){
        case "all":
          return this.todos;
          break;
        case "undone":
          return this.todos.filter(item => item.checkbox == false);
          break;
        case "completed":
          return this.todos.filter(item => item.checkbox == true);
          break;
      }
    },
    //1.
    undoneNum: function(){
      //2.
      return this.todos.filter(item => item.checkbox == false);
    }
  }
});
```

-----------------------------------------------
## 補充說明
[CodePen範例連結](https://codepen.io/jack842248/pen/MWbYyKp)