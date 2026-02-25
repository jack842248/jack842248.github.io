---
title: Swiper輪播效果
date: 2023-04-23
tags: ["JavaScript"]
---
## swiper使用前準備
1. 先到[swiper](https://swiperjs.com/swiper-api)找到CDN
![圖片](./images/Swiper輪播效果/Swiper輪播效果-1.png)

-----------------------------------------------
2. 將.css和.js引入
  * 在`<head>`加入`<link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css"/>`
  * 在`<body>`加入`<script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>`
![圖片](./images/Swiper輪播效果/Swiper輪播效果-2.png)

-----------------------------------------------
3. 在`<body>`放入主容器
![圖片](./images/Swiper輪播效果/Swiper輪播效果-3.png)

-----------------------------------------------
4. 先到在`<style>`寫主容器的寬度和高度
![圖片](./images/Swiper輪播效果/Swiper輪播效果-4.png)

-----------------------------------------------
5. 到`<script>`後面寫上程式碼
![圖片](./images/Swiper輪播效果/Swiper輪播效果-5.png)

-----------------------------------------------
6. 在`swiper-slide`裡面放圖片
![圖片](./images/Swiper輪播效果/Swiper輪播效果-6.png)

-----------------------------------------------
## 輪播容器
```html
<div class="swiper"><!--主容器-->  
  <div class="swiper-wrapper">
    <div class="swiper-slide"></div><!--輪播圖1-->
    <div class="swiper-slide"></div><!--輪播圖2-->
    <div class="swiper-slide"></div><!--輪播圖3-->
  </div>
  <div class="swiper-pagination"></div><!--分頁-->
  <div class="swiper-button-prev"></div><!--左箭頭-->
  <div class="swiper-button-next"></div><!--右箭頭-->
  <div class="swiper-scrollbar"></div><!--滾動條-->
</div>
```

-----------------------------------------------
## 輪播容器樣式
```css
.swiper {
  width: 600px; 
  height: 300px;
}
```

-----------------------------------------------
## 輪播方式設定
```js
const swiper = new Swiper('.swiper', {
  direction: 'vertical',//垂直方向播放
  direction: 'horizontal',//水平方向播放
  loop: true,//循環播放
  loop: false,//不循環播放
  autoplay: {//自動輪播
    delay: 3000,//幻燈片停留時間(毫秒)
  },
  speed: "500",//幻燈片速度
  effect: "cards",//卡片式效果
  effect: "fade",//淡出效果
  effect: "coverflow",//幻燈片效果
  effect: "cube",//立體方塊效果
  effect: "coverflow",//立體相片效果
  effect: "flip",//翻轉效果

  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
```