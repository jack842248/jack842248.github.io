---
title: media screen
date: 2022-04-08
tags: ["CSS"]
---
## 好的響應式體驗
* 從PC版轉到手機版時，標題長度以及部份不必要內容可以適度隱藏
* PC版圖片高度可固定px，手機版height:auto
* jpg、png放大會模糊，svg向量圖放大不會失真
* 在safari瀏覽器上`height:100%`會跑版
* logo通上在左上角、中間
* 留意文章閱讀換行的頻率，中文單行30～40個字，英文單行32～80個字元
* 手機沒有hover效果
* 禁止X軸產生(除非特定區域或效果)
* 重要訊息要出現在一開始的畫面
* 一個網站不超過兩種字型
* 降低干擾，建立清楚的層次感
* 元素間距、留白、對齊、對比、色調一致性
* 明顯標示可點擊區域
* 內容行距1.4%~1.6%，標題行距1.25$%
* 無障礙網頁
    * 不能自動輪播
    * 字體大中小切換
    * 圖片alt要描述
    * 文字和背景對比度要高
    * aria-label=""

|裝置|最小可觸碰元件|最小非觸碰元件|最小字體|狀態欄|導航欄|
|---|---|---|---|---|---|
|ios|48*48px|40*40px|11px|24px|56px|
|android|44*44px|30*30px|13px|20px|44px|
`好的網頁設計?別低估習慣用法的價值，要為了掃描閱讀而設計`

-----------------------------------------------
## CSS Reset徹底清除標籤樣式
* [CSS Reset](https://meyerweb.com/eric/tools/css/reset/)清除標籤樣式
* [CSS Normalize](https://necolas.github.io/normalize.css/)是另一種保留部分樣式
* [Pure.css](https://purecss.io/)是Yahoo開發的兼容性樣式
```css
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
*,*:before,*:after{
    box-sizing: border-box;
}
img{
    max-width: 100%;
    height: auto;
}
```

-----------------------------------------------
## @media斷點設置
```css
/*設定當螢幕寬度在400px以上時*/
@media screen and(min-width:400px){
    body{
        background-color: red;
    }
}
/*設定當螢幕寬度在0px~600px時*/
@media screen and(max-width:600px){
    body{
        background-color: red;
    }
}
/*設定當螢幕寬度在600px以上，1000px以下時*/
@media screen and (min-width:600px) and (max-width:1000px){
    body{
        background-color: green;
    }
}
/*設定當螢幕寬度在1000px以上，1920px以下時*/
@media screen and (min-width:1000px) and (max-width:1920px){
    body{
        background-color: blue;
    }
}
```
`and前後一定要空格`

-----------------------------------------------
## 計算寬度
```css
.box{
    width: calc(100% - 40px); /*佔100%再減少40px*/
    width: calc(50%); /*佔50%*/
    width: calc(20% + 30%); /*佔50%*/
    width: calc(100% / 2); /*佔50%*/
}
```
### 固定左右邊距不受視窗拉動影響
```css
.box{
    position: relative/absolute;
    left: 50px;
    width: calc(100% - 100px) /*left50px，right50px*/
}
```

-----------------------------------------------
## 流體式佈局
1. 一欄100%
2. 二欄50%
3. 三欄33.33333%
```html
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
```
```css
.box {
  float: left;
  width: 30.33333%; /*佔3分之1*/
  height: 50px;
  margin: 1.5%; /*左右共佔3%*/
  background-color: red;
}
```