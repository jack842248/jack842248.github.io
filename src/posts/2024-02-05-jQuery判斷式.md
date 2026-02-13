---
title: jQuery判斷式
date: 2024-02-05
tags: ["jQuery"]
---
## 多種判斷式
```html
<ul class="menu">
  <li>蘋果</li>
  <li>香蕉</li>
  <li>鳳梨</li>
  <li>芭樂</li>
</ul>
<p>價錢：<span class="item-price"></span></p>
```
```js
$("li").click(function(){

  //抓取元素的文字
  let targetName = $(this).text();

  //判斷文字是否為“蘋果”
  if( targetName == "蘋果" ){

    $(".item-price").text("$20");

  //判斷文字是否為“香蕉”
  }else if( targetName == "香蕉" ){

    $(".item-price").text("$18");

  //判斷文字是否為“鳳梨”
  }else if( targetName == "鳳梨" ){

    $(".item-price").text("$23");

  //若以上都不是就...
  }else{

    $(".item-price").text("賣完囉");

  }
});
```