---
title: keyframes關鍵影格
date: 2022-04-05
tags: ["css"]
---
## 影格動畫(animation)
### 第一種寫法
```css
@keyframes changeColor{
    from{
        background-color: red;
    }
    to{
        background-color: blue;
    }
}
```
### 第二種寫法
```css
@keyframes changeColor{
    0%{
        background-color: red;
    }
    25%{
        background-color: yellow;
    }
    50%{
        background-color: green;
    }
    100%{
        background-color: blue;
    }
}
```
### 參數設定
```css
.box{
    animation-name: changeColor; /*動畫名稱*/

    animation-duration: 5s; /*持續5秒*/

    animation-timing-function: ease; /*慢快慢*/
    animation-timing-function: linear; /*速度保持一致*/
    animation-timing-function: ease-in; /*起始慢*/
    animation-timing-function: ease-out; /*結束慢*/
    animation-timing-function: ease-in-out; /*起始和結束慢*/
    animation-timing-function: steps(3); /*逐格(預設值)動畫(3格)*/

    animation-delay: 0; /*無延遲(預設值)*/
    animation-delay: 2s; /*延遲2秒運行*/
    animation-delay: -3s; /*載入頁面時已經運行3秒*/

    animation-iteration-count: 1; /*播放1次(預設值)*/
    animation-iteration-count: 7; /*播放7次*/
    animation-iteration-count: infinite; /*無限重複*/

    animation-direction: normal; /*0％到100%(預設值)*/
    animation-direction: reverse; /*100%到0%*/
    animation-direction: alternate; /*0％到100%到0％到100%*/
    animation-direction: alternate-reverse; /*100%到0%到100%到0%*/

    animation-play-state: running; /*讓動畫播放持續(預設值)*/
    animation-play-state: paused; /*讓動畫播放暫停，使用在:hover或:active*/

    animation-fill-mode: none; /*結束時停留在0%*/
    animation-fill-mode: both; /*結束時停留在100%*/

    animation: changeColor 5s linear 2s 2s reverse; /*動畫名稱 持續時間 播放速度 延遲時間 播放次數 播放方向*/
}
```

-----------------------------------------------
## 動畫轉換(transition)
```css
.box{
    transition-property: all; /*無指定(預設值)*/
    transition-property: width; /*指定寬度作用效果*/
    transition-property: height; /*指定高度作用效果*/
    transition-property: font-size; /*指定字體大小作用效果*/
    transition-property: left; /*指定左方作用效果*/

    transition-duration: 2s; /*持續2秒*/
    transition-duration: infinite; /*無限重複*/

    transition-timing-function: ease; /*慢快慢(預設值)*/
    transition-timing-function: linear; /*保持一致*/
    transition-timing-function: ease-in; /*起始慢*/
    transition-timing-function: ease-out; /*結束慢*/
    transition-timing-function: ease-in-out; /*起始和結束慢*/
    transition-timing-function: steps(3); /*逐格動畫(3格)*/

    transition-delay: 0; /*無延遲(預設值)*/
    transition-delay: 1s; /*延遲1秒*/

    transition: width 2s linear 1s; /*指定屬性/持續時間/進行速度/延遲時間*/
}
```