---
title: jQuery實作滾動頁面頁籤變換
date: 2024-02-08
tags: ["jQuery"]
---
## 實作滾動頁面頁籤變換
```html
<ul class="nav">
  <li class="nav-item">
    <!--用a連結href-->
    <a class="nav-link" href="#about">關於我們</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#works">作品介紹</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#contact">聯絡我們</a>
  </li>
</ul>

<!--在區段設id-->
<section id="about">
...
</section>
<section id="works">
...
</section>
<section id="contact">
...
</section>
```
```js
$(".nav-link").click(function(event){

  //阻止默認的錨點跳轉行為
  event.preventDefault();

  //抓取點擊連結的href
  let target = $(this).attr("href");

  $("html,body").animate({
    scrollTop: $(target).offset().top
  },600);

});
```