---
title: CSS元件樣式
date: 2022-04-04
tags: ["CSS"]
---
## 連結(a)
```css
a:link{
    /*設定尚未點擊的連結*/
}
a:visited{
    /*設定已經點擊過後的連結*/
}
a:hover{
    /*設定游標移入時的連結*/
}
a:active{
    /*設定游標點擊時的連結*/
}
```
### logo連結(隱藏h1)
```html
<h1>
    <a href="#">公司名稱</a>
</h1>
```
```css
h1{
    float: left;
}
h1 a{
    display: block; /*a預設是inline*/
    width: 圖片寬度;
    height: 圖片高度;
    background-image: url("連結網址"); 
    text-indent: 101%; /*讓文字超出範圍*/
    overflow: hidden; /*超出範圍隱藏*/
    white-space: nowrap; /*強制讓文字不換行*/
    background: contain; /*若是svg圖則加*/
}
```

-----------------------------------------------
## 圖片(img)
1. 在`<img>`上設定`float`，文字會圍繞在旁邊
2. 浮動的`<img>`可用`padding/margin`調整
3. 若要取消浮動`clear:both`
```css
img{
    width: auto; /*(預設值)*/
    width: 50px; /*設定寬度*/
    width: 100%; /*占滿父層元素*/

    height: auto; /*(預設值)*/
    height: 30px; /*設定高度*/
    height: 100vh; /*裝置螢幕高度滿版*/

    max-width: 200px; /*設定最大寬度*/
    max-height: 100px; /*設定最大高度*/

    min-width: 50px; /*設定最小寬度*/
    min-height: 30px; /*設定最小高度*/

    float: none; /*不浮動(預設值)*/
    float: left; /*向左上浮動位置*/
    float: right; /*向右上浮動位置*/

    clear: none; /*不清除浮動(預設值)*/
    clear: left; /*左浮動取消*/
    clear: right; /*右浮動取消*/
    clear: both; /*左右都取消*/

    object-fit: contain; /*保持原本寬高比在容器內*/
    object-fit: cover; /*保持寬高比填滿容器*/
    object-fit: fill; /*變形填滿容器*/
    object-fit: none; /*保持原本寬高不被縮放*/
}
```
### 自適應圖片
```css
img{
    max-width: 100%;
    height: auto;
}
```
### <img>填滿上層容器
```css
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```
### background-image填滿上層容器
```css
.box{
  height: 100vh;
  overflow: hidden;
  background-image: url("https://i.imgur.com/1ZEML4s.png");
  background-size: cover;
  background-position: center center;
}
```
### 固定比例<img>
```css
.img-rwd{
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    overflow: hidden;
    img{
        max-width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
}
```

-----------------------------------------------
## 清單(list)
```css
li{
    list-style-type: disc; /*黑圓點(預設值)*/
    list-style-type: circle; /*黑圓圈*/
    list-style-type: square; /*黑方塊*/
    list-style-type: decimal; /*數列+點*/
    list-style-type: decimal-leading-zero; /*0+數列+點*/
    list-style-type: lower-roman; /*小寫羅馬文*/
    list-style-type: upper-roman; /*大寫羅馬文*/
    list-style-type: lower-greek; /*大寫希臘文*/
    list-style-type: lower-latin; /*小寫拉丁文*/
    list-style-type: upper-latin; /*大寫拉丁文*/
    list-style-type: armenian; /*亞美尼亞語*/
    list-style-type: "\1F44D"; /*符號*/
    list-style-type: none; /*不顯示*/

    list-style-image: none; /*(預設值)*/
    list-style-image: url("連結網址"); /*崁入清單樣式*/

    list-style-position: outside; /*圖樣在border外(預設值)*/
    list-style-position: inside; /*圖樣在border內*/

    list-style: list-style-type|list-style-image|list-style-position|;
}
```
### 使用UTF-8字符取代清單樣式
```scss
li{
    list-style: none;
    &::before{
        display: inline-block;
        content: "⇦";
    }
}
```
`::before在元素之前、::after在元素之後`

-----------------------------------------------
## 表格(table)
```css
table{
    border-collapse: separate; /*分開(雙線條)(預設值)*/
    border-collapse: collapse; /*合併(單線條)*/

    border-spacing: 20px; /*調整separate雙線條的間距*/

    empty-cells: show; /*表格空欄位顯示(預設值)*/
    empty-cells: hide; /*表格空欄位隱藏*/

    table-layout: auto; /*表格固定隨內容改變(預設值)*/
    table-layout: fixed; /*表格寬度固定，隨width而改變*/
}
caption{
    caption-side: top; /*表格描述位置在表格上(預設值)*/
    caption-side: bottom; /*表格描述位置在表格下*/
}
td{
    visibility: collapse;
}
```

-----------------------------------------------
## 按鈕(button)
```css
button{
    cursor: default; /*預設游標(預設值)*/
    cursor: crosshair; /*十字*/
    cursor: context-menu; /*預設游標+menu*/
    cursor: text; /*文字輸入*/
    cursor: vertical-text; /*(垂直)文字輸入*/
    cursor: wait; /*等待*/
    cursor: pointer; /*點擊手指*/
    cursor: progress; /*預設游標+等待*/
    cursor: cell; /*新增(+)*/
    cursor: help; /*幫助(?)*/
    cursor: move; /*方向*/
    cursor: grab; /*手掌*/
    cursor: grabbing; /*抓住手掌*/
    cursor: no-drop; /*禁止手指*/
    cursor: not-allowed; /*禁止點擊*/
    cursor: all-scroll; /*全部滾動*/
    cursor: col-resize; /*左右拖拉縮放*/
    cursor: all-scroll; /*上下拖拉縮放*/
    cursor: zoom-in; /*放大鏡(+)*/
    cursor: zoom-out; /*放大鏡(-)*/
    cursor: n-resize; /*指北箭頭*/
    cursor: nw-resize; /*指西北箭頭*/
    cursor: w-resize; /*指西箭頭*/
    cursor: sw-resize; /*指西南箭頭*/
    cursor: s-resize; /*指南箭頭*/
    cursor: se-resize; /*指東南箭頭*/
    cursor: e-resize; /*指東箭頭*/
    cursor: ne-resize; /*指東北箭頭*/
    cursor: ew-resize; /*指東西箭頭*/
    cursor: ns-resize; /*指南北箭頭*/
    cursor: nesw-resize; /*指東北和西南箭頭*/
    cursor: nwse-resize; /*指西北和東南箭頭*/
    cursor: none; /*不顯示*/

    pointer-events: none; /*避免空選*/
}
```
`搭配::hover來增加效果`

-----------------------------------------------
## 輸入框(input)
```css
input{
    outline-style: solid; /*實線*/
    outline-style: dashed; /*長虛線*/
    outline-style: dotted; /*短虛線*/
    outline-style: double; /*雙實線*/
    outline-style: inset; /*3D凹*/
    outline-style: outset; /*3D凸*/

    outline-width: 5px; /*線條寬度*/
    outline-width: thin; /*薄*/
    outline-width: medium; /*中*/
    outline-width: thick; /*厚*/

    outline-color: red; /*顏色名稱*/
    outline-color: #333333; /*色票*/
    outline-color: rgba(3,3,3,0); /*最後的值調整透明度*/

    outline: solid 1px red; /*四邊框線樣式/框線寬度/框線顏色*/

    outline-offset: 5px; /*偏移border距離*/
}
```
`搭配::focus來增加效果`

-----------------------------------------------
## 複選框(checkbox)
```css
    accent-color: red;
```

-----------------------------------------------
## 區塊(block)
```css
.box{

    user-select: auto; /*可以框選*/
    user-select: none; /*不可框選*/

    overflow: visible; /*讓內容超出範圍(預設值)*/
    overflow: hidden; /*讓內容超出範圍就隱藏*/
    overflow: scroll; /*在超出的內容加上捲軸*/
    overflow: auto; /*在超出的內容的軸向加上捲軸*/
    
    overflow-x: hidden; /*X軸向捲軸隱藏*/
    overflow-x: scroll; /*X軸向出現捲軸*/

    overflow-y: hidden; /*Y軸向捲軸隱藏*/
    overflow-y: scroll; /*Y軸向出現捲軸*/

    resize: none; /*不增加窗角*/
    resize: both; /*可任意拉動*/
    resize: horizontal; /*可水平拉動*/
    resize: vertical; /*水垂直拉動*/

    visibility: visible; /*正常顯示*/
    visibility: hidden; /*隱藏(區塊保留)*/
    visibility: collapse; /*不顯示*/
}
```

-----------------------------------------------
## 對齊(align)
1. 限用同行的`display:inline/inline-block`元素`<div><span><img>`
2. 同行的元素都要加上`vertical-align`才會對齊
3. 不適用`position:relative/absolute`元素
```css
.box{
    vertical-align: baseline; /*預設值*/
    vertical-align: top; /*切齊上方*/
    vertical-align: middle; /*切齊中線*/
    vertical-align: bottom; /*切齊下方*/
    vertical-align: text-top; /*偏移中線上方*/
    vertical-align: text-bottom; /*偏移中線下方*/
    vertical-align: 30px; /*偏移中線30px*/
    vertical-align: sub; /*偏移向下*/
    vertical-align: super; /*偏移向上*/
}
```
### div內的文字置中
```css
.box{
    text-align: center;
    line-height: 設跟height值一樣;
}
```
### 元素水平置中
```css
.box{
    margin: 0 auto;
}
```
### 元素垂直水平置中
```css
ul{
    position: relative;
}
ul li{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: ranslate(-50%,-50%);
}
```
### 文字或元素垂直水平置中
```css
ul{
    display: flex;
}
ul li{
    justify-content: center;
    align-items: center;
}
```

-----------------------------------------------
## 濾鏡(filter)
```css
.box{
    filter: grayscale(0~100%); /*灰階*/
    filter: sepia(0~100%); /*棕褐色*/
    filter: saturate(0~100%); /*飽和*/
    filter: hue-rotate(0deg~360deg); /*色相環*/
    filter: invert(0/1); /*負片效果*/
    filter: opacity(0.0/1.0); /*透明度*/
    filter: brightness(100%); /*亮度，小於100%減少亮度，大於100%曝光*/
    filter: contrast(0%); /*對比，小於100%明暗越小，大於100%明暗越大*/
    filter: blur(0px); /*模糊，值越大模糊越大*/
    filter: drop-shadow(0px 0px 0px #333333); /*下拉陰影*/
}
```

-----------------------------------------------
## 背景濾鏡(backdrop-filter)
```css
.box{
    backdrop-filter: grayscale(0~100%); /*灰階*/
    backdrop-filter: sepia(0~100%); /*棕褐色*/
    backdrop-filter: saturate(0~100%); /*飽和*/
    backdrop-filter: hue-rotate(0deg~360deg); /*色相環*/
    backdrop-filter: invert(0/1); /*負片效果*/
    backdrop-filter: opacity(0.0/1.0); /*透明度*/
    backdrop-filter: brightness(100%); /*亮度，小於100%減少亮度，大於100%曝光*/
    backdrop-filter: contrast(0%); /*對比，小於100%明暗越小，大於100%明暗越大*/
    backdrop-filter: blur(0px); /*模糊，值越大模糊越大*/
    backdrop-filter: drop-shadow(0px 0px 0px #333333); /*下拉陰影*/
}
```

-----------------------------------------------
## 圖層混合(mix-blend-mode)
```css
.box{
    mix-blend-mode: normal; /*預設值*/
    mix-blend-mode: hue; /*色相*/
    mix-blend-mode: saturation; /*飽和度*/
    mix-blend-mode: color; /*顏色*/
    mix-blend-mode: luminosity; /*明度*/
    mix-blend-mode: multiply; /*色彩增值*/
    mix-blend-mode: screen; /*濾色*/
    mix-blend-mode: overlay; /*覆蓋*/
    mix-blend-mode: darken; /*變暗*/
    mix-blend-mode: lighten; /*變亮*/
    mix-blend-mode: color-dodge; /*加亮顏色*/
    mix-blend-mode: color-burn; /*加深顏色*/
    mix-blend-mode: hard-light; /*實光*/
    mix-blend-mode: soft-light; /*柔光*/
    mix-blend-mode: difference; /*差異化*/
    mix-blend-mode: exclusion; /*排除*/
}
```

-----------------------------------------------
## 捲軸(scrollbar)
```html
<div class="box">lorem ipsum, dolor sit amet consectetur adipisicing elit. Est soluta ipsam quaerat consectetur, aut autem architecto dignissimos nesciunt eius minus odit et tenetur dolorum magnam pariatur atque voluptatem, vel vitae?</div>
```
```css
.box{
    width: 300px;
    height: 300px;
    border: solid 1px #cccccc;
    overflow-x: hidden;
    overflow-y: auto;
    /*整體的樣式*/
    &::-webkit-scrollbar{
        width: 10px;
        background-color: red;
    }
    /*拉桿的樣式*/
    &::-webkit-scrollbar-thumb{
        background-color: black;
        border-radius: 30px;
        width: 40px;
    }
    /*軌道的樣式*/
    &::-webkit-scrollbar-track{
        background-color: gray;
    }
}
```