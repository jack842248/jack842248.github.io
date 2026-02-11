---
title: Fontawesome
date: 2022-04-09
tags: ["css"]
---
## Font Awesome 5
1. 將`<head>`加入`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">`
2. 使用[font awesome 5](https://fontawesome.com/v5/icons/)搜尋icon
```html
<i class="fas fa-camera"></i>
<i class="fas fa-camera fa-xs"></i><!--小型-->
<i class="fas fa-camera fa-sm"></i><!--中型-->
<i class="fas fa-camera fa-lg"></i><!--大型-->
```

-----------------------------------------------
## Font Awesome 6
1. 將`<head>`加入`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">`
2. 使用[font awesome 6](https://fontawesome.com/icons)搜尋icon
```html
<i class="fa-solid fa-camera"></i>
<i class="fa-solid fa-camera fa-2xs"></i><!--超小型-->
<i class="fa-solid fa-camera fa-sm"></i><!--小型-->
<i class="fa-solid fa-camera fa-lg"></i><!--中型-->
<i class="fa-solid fa-camera fa-xl"></i><!--大型-->
<i class="fa-solid fa-camera fa-2xl"></i><!--超大型-->
```

-----------------------------------------------
## 加入在偽元素中
```css
.box::before{
    content: "\f0e0"; /*圖樣編號*/
    font-family: "Font Awesome 5 Free";
    font-size: 24px; /*調整大小*/
    font-weight: 900; /*調整實心或空心*/
}
```
* 調整為元素位置
```css
 .box{
    position: relative;
}
.box::before{
    position: absolute;
}
```
* 讓content內的文字換行
```css
.box::before{
    display: inline/inline-block;
    content: "第一行文字\A第二行文字";
    white-space: pre-wrap;
}
```

-----------------------------------------------
## 動態加入fontawesome
```html
<a href="image/pic.jpg">圖片檔</a>
<a href="image/file.doc">文件檔</a>
```
```js
$("a[href$='.jpg']").addClass("fa fa-file-photo-o");//在a標籤的href裡如果找到.jpg關鍵字就執行
$("a[href$='.doc']").addClass("fa fa-file-word-o");//在a標籤的href裡如果找到.doc關鍵字就執行
```
`先到html引入fontawesome cdn`