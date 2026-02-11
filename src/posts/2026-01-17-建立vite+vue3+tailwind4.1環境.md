---
title: 建立vite+vue3+tailwind4.1環境
date: 2026-01-17
tags: ["Vue3"]
---
## 建立vite專案
1. 建立資料夾
### (補充)確認npm版本：
```
$ npm -v
```
`查看npm目前使用版本`
```
$ nvm ls
```
`查看已安裝的npm版本清單`
```
$ nvm use 22
```
`使用npm版本22`
```
$ nvm alias default 22
```
`將npm版本22作為預設`

3. 安裝vite專案(最新版)
```
$ npm create vite@latest
```
4. 安裝node_modules
```
$ npm i
```
-----------------------------------------------
## 安裝tailwindcss
1. 在vite安裝tailwindcss
```
$ npm i tailwindcss @tailwindcss/vite
```
2. 引入tailwindcss到vite，在專案根目錄建立vite.config.js
```js
//vite.config.js

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss()
  ],
})
```
3. 在style.css寫上tailwindcss語法
```css
/* style.css */

@import "tailwindcss";
```
4. 在main.js進入點引入css檔
```js
// main.js

import './style.css'

import App from './App.vue'
const app = createApp(App)
app.mount('#app')
```
-----------------------------------------------
## 執行專案
要運行專案的指令，存放在package.json
```json
// package.json

"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
},
```
### 執行專案：
```
$ npm run dev
```
### 建立編譯檔：
```
$ npm run build
```
### 觀看專案：
```
$ npm run preview
```
-----------------------------------------------
## 關於setup
### vue2：
元件建立得時候在setup()宣告的資料，必須要return，才能讓template使用
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
### vue3：
`<script setup>`是setup()的簡化寫法，他會自動把setup()內的資料，return出來
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
## 透過setup傳接props
### 傳統setup()：
```js
setup(props, context) {
  console.log(props.count);
}
```
`props：父元件傳來的資料`
`context：emit、attrs、slots`
### 新setup()：
在子元件接收：
```js
<script setup>
import { defineProps } from 'vue';

defineProps({
  count: {
    type: Number
  }
});
</script>

<template>
  {{ count }}
</template>
```