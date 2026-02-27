---
title: Vue3 + Font Awesome 7 使用方法
date: 2026-02-05
tags: ["Web"]
---

#### 1.新增Vue組件
```bash
npm install @fortawesome/vue-fontawesome@latest-3
```

#### 2.加入SVG核心
```bash
npm install @fortawesome/fontawesome-svg-core
```

#### 3.使用SVG圖示包(免費)
```bash
npm install @fortawesome/free-solid-svg-icons
npm install @fortawesome/free-regular-svg-icons
npm install @fortawesome/free-brands-svg-icons
```

#### 4.在main.js使用SVG圖標包新增圖標
```js
import { createApp } from 'vue'
import App from './App.vue'

/* 全域引用Font Awesome核心 */
import { library } from '@fortawesome/fontawesome-svg-core'

/* 全域引用Font Awesome元件 */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* 自訂需要引入的icon(編輯) */
/* 範例：fa-pencil，要寫成faPencil後面要引入的是solid還是... */
import { faPencil } from '@fortawesome/free-solid-svg-icons';

/* 加入到資料庫裡(不建議...all會很大) */
library.add(faPencil);

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
```

#### 5.開始使用元件
```vue
<template>
  <font-awesome-icon icon="fa-solid fa-pencil" />
</template>
```

#### 6.調整大小
```vue
<template>
  <font-awesome-icon icon="fa-solid fa-pencil" size="xs" />

  /* 尺寸2xs~2xl */
  /* 尺寸1x~10x */
  /* 自動寬度widthAuto */
</template>
```

#### 7.旋轉或翻轉
```vue
<template>
  <font-awesome-icon icon="fa-solid fa-coffee" rotation="90" />
  <font-awesome-icon icon="fa-solid fa-coffee" flip="horizontal" />
  <font-awesome-icon icon="fa-solid fa-coffee" flip="vertical" />
  <font-awesome-icon icon="fa-solid fa-coffee" flip="both" />
</template>
```

#### 8.自訂旋轉
```vue
<template>
  <font-awesome-icon
    icon="fa-solid fa-coffee"
    rotateBy
    style="--fa-rotate-angle: 329deg"
  />
</template>
```

#### 9.動畫
```vue
<template>
  <font-awesome-icon icon="fa-solid fa-heart" beat />
  <font-awesome-icon icon="fa-solid fa-circle-info" beat-fade />
  <font-awesome-icon icon="fa-solid fa-basketball" bounce />
  <font-awesome-icon icon="fa-solid fa-exclamation-triangle" fade />
  <font-awesome-icon icon="fa-solid fa-compact-disc" flip />
  <font-awesome-icon icon="fa-solid fa-bell" shake />
  <font-awesome-icon icon="fa-solid fa-cog" spin />
  <font-awesome-icon icon="fa-solid fa-compass" spin spin-reverse />
  <font-awesome-icon icon="fa-solid fa-spinner" spin-pulse />
</template>
```

資料來源：https://docs.fontawesome.com/web/use-with/vue/style