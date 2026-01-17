---
title: 【Vue3】setup與defineProps傳值
date: 2026-01-18
tags: ["Vue3"]
---
### 關於setup
#### vue2：
元件建立得時候在`setup()`宣告的資料，必須要return，才能讓`template`使用
```js
<script>
const { ref } = Vue;

Vue.createApp({
  setup(){
    const count = ref(1);
    function addCount(){
      count.value++
    }
    return{
      count,
      addCount
    }
  }
}).mount('#app');
</script>
```
#### vue3：
`<script setup>`是簡化寫法，他會自動把`setup()`內的資料，return出來
```js
<script setup>
import { ref } from 'vue';

const count = ref(1);
const addCount = () => {
  count.value++;
};
</script>
```
-----------------------------------------------
### defineProps傳接資料
1. `defineProps()`只在`<script setup>`能用
2. props是唯讀的(read-only)只能用，不能改
#### 在父層：
```js
<script setup>
import AddTodo from 'components/AddTodo.vue';
import { ref } from 'vue';
const count = ref(0);
const addCount = () =>{
    count.value += 1;
}
</script>

<template>
    <button type="button" @click="addCount()">按鈕</button>
    <addTodo :count="count"></addTodo>
</template>
```
`:count`表示動態綁定
#### 在子層(AddTodo)：
`defineProps()`會自動宣告props的型別，`template`實際上是使用props.count
但`<script setup>`會自動省略`props.`
```js
<template>
  {{ count }} 
</template>
<script setup>
import { defineProps } from 'vue';
defineProps({
  count:{
    type: Number
  }
})
</script>
```