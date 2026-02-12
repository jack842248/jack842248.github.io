---
title: jQuery點擊事件+顯示或隱藏
date: 2024-01-21
tags: ["jQuery"]
---
## 動態切換樣式語法表
|動畫方式|顯示|隱藏|自動切換|
|---|---|---|---|
|一般|.show()|.hide()|.toggle()|
|淡入淡出|.fadeIn()|.fadeOut|.fadeToggle()|
|滑入滑出|.slideUp()|.slideDown()|.slideToggle()|
|自訂樣式|.addClass()|.removeClass()|.toggleClass()|

`.show(3000)，裡面可加入秒數(毫秒)`

-----------------------------------------------
## 切換顯示或隱藏
```html
<button type="button">按鈕</button>
<p>這段文字會隱藏</p>
```
```js
//隱藏元素
$("button").click(function(){
  $("p").hide();
});

//顯示元素
$("button").click(function(){
  $("p").show(3000); //作用3秒
});

//自動顯示隱藏元素
$("button").click(function(){
  $("p").toggle();
});
```
`原理：判斷元素上是否有style="display:block"`

-----------------------------------------------
## 滑入滑出效果(slide)
```html
<button type="button">按鈕</button>
<p>這段文字會切換顯示或隱藏</p>
```
```js
//滑出元素
$("button").click(function(){
  $("p").slideUp();
});

//滑入元素
$("button").click(function(){
  $("p").slideDown(3000); //作用3秒
});

//自動滑入滑出元素
$("button").click(function(){
  $("p").slideToggle();
});
```

-----------------------------------------------
## 切換淡入淡出效果(fade)
```html
<button type="button">按鈕</button>
<p>這段文字會切換顯示或隱藏</p>
```
```js
//淡出元素
$("button").click(function(){
  $("p").fadeOut();
});

//淡入元素
$("button").click(function(){
  $("p").fadeIn(3000,0.5); //作用3秒，透明度0.5
});

//自動淡出淡入元素
$("button").click(function(){
  $("p").fadeToggle();
});
```

-----------------------------------------------
## 漸變淡出效果(fadeTo)
### $(selector).fadeTo(speed, opacity, [easing], [callback]);
* speed(必選) 速度
* opacity(必選) 透明度
* easing(可選) 動畫加速方式
* callback(可選) function(){}
```html
<button type="button">按鈕</button>
<p>這段文字會隱藏</p>
```
```js
//基本用法
$("button").click(function(){
  $("p").fadeTo(3000,0.5); //三秒之內，透明度將至0.5
});

//hover用法
$("p").hover(
  function() {
    $(this).fadeTo(200, 1);  // 滑入時淡入
  },
  function() {
    $(this).fadeTo(200, 0.5);  // 滑出時淡出
  }
);

//接續其他動作用法
$("button").click(function(){
  $("p").fadeTo(3000,0.5,function(){
    console.log("動畫完成後執行此操作")
  });
});
```

-----------------------------------------------
## 切換顯示或隱藏(class)
### html:
```html
<button type="button">按鈕</button>
<p>這段文字會切換紅底背景</p>
```
```css
.bg-red{
  background-color: red;
}
```
```js
//新增class樣式
$("button").click(function(){
  $("p").addClass("bg-red");
});

//移除class樣式
$("button").click(function(){
  $("p").removeClass("bg-red");
});

//切換class樣式
$("button").click(function(){
  $("p").toggleClass("bg-red");
});
```