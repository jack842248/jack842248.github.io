---
title: 【Vue】vue-todolist(Bootstrap版)
date: 2021-06-03
tags: ["vue"]
---
### 建立完成的Bootstrap4初始版型
```css
#app.container.my-3
  .input-group.mb-3
    .input-group-prepend
      span.input-group-text 待辦事項
    input.form-control(type='text' placeholder='準備要做的任務')
    .input-group-append
      button.btn.btn-primary(type='button') 新增
  .card.text-center
    .card-header
      ul.nav.nav-tabs.card-header-tabs
        li.nav-item
          a.nav-link.active(href='#') 全部
        li.nav-item
          a.nav-link(href='#') 進行中
        li.nav-item
          a.nav-link(href='#') 已完成
    ul.list-group.list-group-flush.text-left
      li.list-group-item(v-for="item in filterTodo")
        .d-flex
          .form-check
            input.form-check-input(type='checkbox' id="a1")
            label.form-check-label(:for='item.id') 待辦事項一
          button.close.ml-auto(type='button')
            span &times;
        input.form-control(type='text')
    .card-footer.d-flex.justify-content-between
      span 還有X筆任務未完成
      a(href='#') 清除所有任務
```

-----------------------------------------------
### 撰寫Vue.js後的HTML程式碼
```js
#app.container.my-3
  .input-group.mb-3
    .input-group-prepend
      span.input-group-text 待辦事項
    input.form-control(type='text' placeholder='準備要做的任務' v-model="newTodo")
    .input-group-append
      button.btn.btn-primary(type='button' @click="addTodo") 新增
  .card.text-center
    .card-header
      ul.nav.nav-tabs.card-header-tabs
        li.nav-item
          a.nav-link(href='#' :class="{'active':visibility == 'all'}" @click="visibility='all'") 全部
        li.nav-item
          a.nav-link(href='#' :class="{'active':visibility == 'active'}" @click="visibility='active'") 進行中
        li.nav-item
          a.nav-link(href='#' :class="{'active':visibility == 'completed'}" @click="visibility='completed'") 已完成
    ul.list-group.list-group-flush.text-left
      li.list-group-item(v-for="item in filterTodo" @dblclick="editTodo(item)")
        .d-flex(v-if="item.id !== cacheTodo.id")
          .form-check
            input.form-check-input(type='checkbox' :id="item.id" v-model="item.completed" @ketup.enter="addTodo")
            label.form-check-label(:for='item.id' :class="{'completed':item.completed}") {{ item.title }}
          button.close.ml-auto(type='button' @click="removeTodo(item)")
            span &times;
        input.form-control(type='text' v-if="item.id === cacheTodo.id" v-model="cacheTitle" @keyup.esc="cancelEdit" @keyup.enter="doneEdit(item)")
    .card-footer.d-flex.justify-content-between
      span 還有{{doneNum.length}}筆任務未完成
      a(href='#' @click="clearTodo") 清除所有任務
```
#### 撰寫Vue.js後的JS程式碼：
```js
let app = new Vue({
  el:"#app",
  data:{
    newTodo:"",
    todos:[
      {
        id: "123",
        title: "任務一",
        completed: false
      }
    ],
    visibility: "all",
    cacheTodo: {},
    cacheTitle: ""
  },
  methods:{
    addTodo: function(){
      let value = this.newTodo.trim();
      let timestamp = Math.floor(Date.now());
      if(!value){
        return;
      }else{
        this.todos.push(
          {
            id: timestamp,
            title: value,
            completed: false
          }
        );
        this.newTodo = "";
      }
    },
    removeTodo: function(todo){
      let newIndex = "";
      let vm = this;
      vm.todos.forEach(function(item,key){
        if(todo.id === item.id){
          newIndex = key;
        }
      })
      this.todos.splice(newIndex,1);
    },
    editTodo: function(item){
      this.cacheTodo = item;
      this.cacheTitle = item.title;
    },
    cancelEdit: function(){
      this.cacheTodo = {};
    },
    doneEdit: function(item){
      item.title = this.cacheTitle;
      this.cacheTitle = "";
      this.cacheTodo = {};
    },
    clearTodo: function(item){
      if(confirm("確認清除所有項目嗎?")){
        this.todos = [];
      }else{
        return;
      }
    }
  },
  computed:{
    filterTodo: function(){
      if(this.visibility == "all"){
        return this.todos;
      }else if(this.visibility == "active"){
        let newTodos = [];
        this.todos.forEach(function(item){
          if(!item.completed){
            newTodos.push(item);
          }
        });
        return newTodos;
      }else if(this.visibility == "completed"){
        let newTodos = [];
        this.todos.forEach(function(item){
          if(item.completed){
            newTodos.push(item);
          }
        });
        return newTodos;
      }
    },
    doneNum: function(item){
      return this.todos.filter(item => item.completed == false);
    }
  }
});
```

-----------------------------------------------
### 補充說明
[CodePen範例連結](https://codepen.io/jack842248/pen/mdOJNBB)