function getDefaultExportFromCjs(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function getAugmentedNamespace(r){if(Object.prototype.hasOwnProperty.call(r,"__esModule"))return r;var _=r.default;if(typeof _=="function"){var j=function l(){var p=!1;try{p=this instanceof l}catch{}return p?Reflect.construct(_,arguments,this.constructor):_.apply(this,arguments)};j.prototype=_.prototype}else j={};return Object.defineProperty(j,"__esModule",{value:!0}),Object.keys(r).forEach(function(l){var p=Object.getOwnPropertyDescriptor(r,l);Object.defineProperty(j,l,p.get?p:{enumerable:!0,get:function(){return r[l]}})}),j}const _20210122HugoHugo_Blog____=`---
title: 【Hugo】Hugo Blog建立成功
date: 2021-01-22
tags: ["hugo"]
---
#
> 前言
#
<!--more-->
#
我所使用的Hugo主題是[beautiful hugo](https://themes.gohugo.io/beautifulhugo/)。

當初在建立時，是觀看hahow好學校的[Github免費架站術!輕鬆打造個人品牌](https://hahow.in/courses/5de8fec16117240026540b9c/main)這堂課程來完成的，非常適合像我這樣的初心者，裏頭也包含了創建Github、Hugo主題設定、Markdown語法撰寫的介紹與使用，有興趣的人也可以點擊連結參考看看。

一開始在創建部落格時，我完全不知道該怎麼去調整\`config.toml\`設定檔，搜尋網路上有相關的文章也不多，所以我最後只好一項一項的去測試摸索。雖然每個Hugo主題的設定檔，都可能會有些微不同，但是其中還是會有些相同的設定值可做參考，所以我這邊就來分享關於我的主題設定檔，希望能給也想建立Hugo網站的人一點幫助，省下再去一項一項慢慢測試的時間。

以下是我的設定檔內容，若註解上有上有錯誤的地方，也可以告訴我來做修正。
#
-----------------------------------------------
#
> 分享設定
#
\`\`\`toml
#此網站的連結網址
baseurl = "https://jack842248.github.io"

#語言設定
DefaultContentLanguage = "zh-tw"

#頁籤標題
title = "Jack Huang Blog"

#Hugo主題名稱
theme = "beautifulhugo"

#Disqus評論功能的WebsiteName
disqusShortname = "XXXXXXXXXX"

#Google Analytics的追蹤ID
googleAnalytics = "UA-XXXXXXXXX-X"

#Chroma(新)語法突出顯示，不使用直接註解掉
pygmentsCodeFences = true
pygmentsUseClasses = true

#Pygments(舊)語法突出顯示，不使用直接註解掉
pygmentsStyle = "trac"
pygmentsUseClassic = true

#Syntax Highlighting語法突出顯示，不使用直接註解掉
pygmentOptions = "linenos=inline"
pygmentsCodefencesGuessSyntax = true

#這是我自己額外加的code碼顯示功能，使用樣式是monokai(底下[補充說明]有其他格式可選)
[markup]
  [markup.highlight]
    #讓code碼有編號
    lineNos = true
    #code碼的樣式名稱
    style = "monokai"

#(舊設定)讓code編碼有顏色
useHLJS = false

#設置Banner主標題
homeTitle = "JJ的秒懂筆記" 

#設置Banner副標題
subtitle = "複製貼上就能執行的code"

#網頁中間主要的圖片
logo = "img/avatar-icon.png"

#頁籤旁的小圖示
favicon = "img/favicon.ico"

#設定時間格式(底下[補充說明]有其他格式可選)
dateFormat = "2006-01-02"

#是否顯示閱讀時間
readingTime = true

#是否顯示文章字數
wordCount = true

#是否顯示文章底下分享icon
socialShare = true

#是否延遲顯示評論(要再點擊才會顯示評論)
delayDisqus = true

#是否顯示相關文章
showRelatedPosts = true

#是否隱藏文章作者
hideAuthor = true

#以下是我還不清楚的設定檔
rss = false
commit = true
comments = true
metaDataFormat = "yaml"
mainSections = ["post","posts"]
\`\`\`
#
-----------------------------------------------
#
> 補充說明:
#
* [dateFormat](https://gohugo.io/functions/format#readout)日期格式，可替換成以下幾種:
#
|輸入語法|輸出樣式|
|---|---|
|.Date|2017-03-03 14:15:59 -0600 CST|
|Monday, January 2, 2006|Friday, March 3, 2017|
|Mon Jan 2 2006|Fri Mar 3 2017|
|January 2006|March 2017|
|2006-01-02|2017-03-03|
|Monday|Friday|
|02 Jan 06 15:04 MST|03 Mar 17 14:15 CST|
|Mon, 02 Jan 2006 15:04:05 MST|Fri, 03 Mar 2017 14:15:59 CST|
|Mon, 02 Jan 2006 15:04:05 -0700|Fri, 03 Mar 2017 14:15:59 -0600|
#
* [markup.highlight](https://gohugo.io/getting-started/configuration-markup#readout)程式碼樣式，可替換成以下幾種:
#
|樣式名稱|
|---|
|abap、abap、algol、algol_nu、api、arduino、autumn、borland、bw、colorful、dracula、emacs、friendly、fruity、github、igor、lovelace、manni、monokai、monokailight、murphy、native、paraiso-dark、paraiso-light、pastie、perldoc、pygments、rainbow_dash、rrt、solarized-dark、solarized-dark256、solarized-light、swapoff、tango、trac、vim、vs、xcode|
#
* Google追蹤分析網址[https://analytics.google.com/](https://analytics.google.com/)。
#
* DISQUS評論功能網址[https://blog.disqus.com/](https://blog.disqus.com/)。`,__vite_glob_0_0=Object.freeze(Object.defineProperty({__proto__:null,default:_20210122HugoHugo_Blog____},Symbol.toStringTag,{value:"Module"})),_20210123MarkdownMarkdown____=`---
title: 【MD】Markdown語法撰寫
date: 2021-01-23
tags: ["markdown"]
---
#
# 一級標題
#
<!--more-->
#
\`\`\`
# 一級標題
\`\`\`
#
-----------------------------------------------
#
## 二級標題
#
\`\`\`
## 二級標題
\`\`\`
#
-----------------------------------------------
#
### 三級標題
#
\`\`\`
### 三級標題
\`\`\`
#
-----------------------------------------------
#
#### 四級標題
#
\`\`\`
#### 四級標題
\`\`\`
#
-----------------------------------------------
#
##### 五級標題
#
\`\`\`
##### 五級標題
\`\`\`
#
-----------------------------------------------
#
###### 六級標題
#
\`\`\`
###### 六級標題
\`\`\`
#
-----------------------------------------------
#
*斜體*
#
\`\`\`
*斜體*
\`\`\`
#
-----------------------------------------------
#
**粗體**
#
\`\`\`
**粗體**
\`\`\`
#
-----------------------------------------------
#
***粗斜體***
#
\`\`\`
***粗斜體***
\`\`\`
#
-----------------------------------------------
#
~~文字刪除線~~
#
\`\`\`
~~文字刪除線~~
\`\`\`
#
-----------------------------------------------
#
1. 有序序列
2. 有序序列
3. 有序序列
#
\`\`\`
1. 有序序列
2. 有序序列
3. 有序序列
\`\`\`
#
\`序列內縮要空四格\`
#
-----------------------------------------------
#
* 無序序列
    * 無序序列
        * 無序序列
* 無序序列
#
\`\`\`
* 無序序列
    * 無序序列
        * 無序序列
* 無序序列
\`\`\`
#
\`若要往內縮，前面四個空格鍵\`
#
-----------------------------------------------
#
> 第一層引言
>> 第二層引言
>>> 第三層引言
#
\`\`\`
> 第一層引言
>> 第二層引言
>>> 第三層引言
\`\`\`
#
\`引言內也可用序列\`
#
-----------------------------------------------
#
- [ ] 未勾選清單
- [x] 已勾選清單
#
\`\`\`
- [ ] 未勾選清單
- [x] 已勾選清單
\`\`\`
#
-----------------------------------------------
#
|表頭一|表頭二|表頭三| 
|:---|:---:|---:| 
|內容一|內容二|內容三|
|內容四|內容五|內容六|
#
\`\`\`
|表頭一|表頭二|表頭三| 
|:---|:---:|---:| 
|內容一|內容二|內容三|
|內容四|內容五|內容六|
\`\`\`
#
\`:--- 置左、:---: 置中、---: 置右\`
#
-----------------------------------------------
#
\`單行程式碼\`
#
\`\`\`
    \`單行程式碼\`
\`\`\`
#
-----------------------------------------------
#
\`\`\`
多行程式碼
\`\`\`
#
\`\`\`
    \`\`\`
    多行程式碼
    \`\`\`
\`\`\`
#
\`可以在\`\`\`←加上程式語言種類，例如js、python、PHP等\`
#
-----------------------------------------------
#
$$
數學公式
\\phi = \\frac{(1+\\sqrt{5})}{2} = 1.6180339887\\cdots
$$
#
\`\`\`
$$
數學公式
\\phi = \\frac{(1+\\sqrt{5})}{2} = 1.6180339887\\cdots
$$
\`\`\`
#
-----------------------------------------------
#
[Google連結](https://www.google.com.tw/)
#
\`\`\`
[Google連結](https://www.google.com.tw/)
\`\`\`
#
\`[]←呈現的文字，()←連結路徑\`
#
-----------------------------------------------
#
![圖片](/img/path.jpg) 
#
\`\`\`
![圖片](/img/path.jpg)
\`\`\`
#
\`[]←連結失敗時顯示的文字，()←圖片路徑\`
#
-----------------------------------------------
#
* 崁入youtube shortcode
#
{{< youtube w7Ft2ymGmfc >}}
#
![圖片](/img/Markdown語法撰寫/Markdown語法撰寫-1.png)
#
-----------------------------------------------
#
* 崁入twitter shortcode
#
{{< tweet user="SanDiegoZoo" id="1453110110599868418" >}}
#
![圖片](/img/Markdown語法撰寫/Markdown語法撰寫-2.png)
#
-----------------------------------------------
#
* 崁入vimeo shortcode
#
{{< vimeo 146022717 >}}
#
![圖片](/img/Markdown語法撰寫/Markdown語法撰寫-2.png)
#
-----------------------------------------------
#
* 補充(如果遇到要連續寫兩個短破折號\\--時)
#
\`\`\`
\\--
\`\`\`
#
\`可以在符號前加上\\反斜線，這樣才不會被轉義成-\`
#


`,__vite_glob_0_1=Object.freeze(Object.defineProperty({__proto__:null,default:_20210123MarkdownMarkdown____},Symbol.toStringTag,{value:"Module"})),_20210124JavaScriptChrome_Devtools=`---
title: 【JS】Chrome Devtools
date: 2021-01-24
tags: ["javaScript"]
---
#
* 對著圖片→"右鍵"→"複製圖片位置"。可複製該圖片的路徑，貼到src上。
#
<!--more-->
#
![圖片](/img/Chromedevtools除錯/Chromedevtools除錯-1.png)
#
-----------------------------------------------
#
* 對著連結→"右鍵"→"複製連結網址"。可複製該連結的路徑，貼到href上。
![圖片](/img/Chromedevtools除錯/Chromedevtools除錯-2.png)
#
-----------------------------------------------
#
* 開啟Chrome開發者工具:打開Chrome瀏覽器→"右鍵"→"檢查"。
![圖片](/img/Chromedevtools除錯/Chromedevtools除錯-3.png)
#
-----------------------------------------------
#
* Dock side : 可以設定開發者人員工具的方向、或獨立式窗。
![圖片](/img/Chromedevtools除錯/Chromedevtools除錯-4.png)
#
-----------------------------------------------
#
* Toggle Device Toolbar : 切換手機或平板螢幕大小來瀏覽網頁。
![圖片](/img/Chromedevtools除錯/Chromedevtools除錯-5.png)
#
-----------------------------------------------
#
* Select an element in the page to inspect it : 可以尋找網頁上的元素。
![圖片](/img/Chromedevtools除錯/Chromedevtools除錯-6.png)
#
-----------------------------------------------
#
* 在[Elements]使用ctrl+F可搜尋HTML標籤、class名稱，找到的會被highlight。
![圖片](/img/Chromedevtools除錯/Chromedevtools除錯-7.png)
#
-----------------------------------------------
#
* 在[Elements]使用styles的Fliter，可搜尋css屬性名稱。
![圖片](/img/Chromedevtools除錯/Chromedevtools除錯-8.png)
#
-----------------------------------------------
#
* 在[Elements]使用styles的:hov，可查看元素在:hover時的狀態。
![圖片](/img/Chromedevtools除錯/Chromedevtools除錯-9.png)
#
-----------------------------------------------
#
* 在[Elements]使用styles的視窗中，transform、animation可查看貝茲控制點的曲線。
![圖片](/img/Chromedevtools除錯/Chromedevtools除錯-10.png)
#
\`\`\`js
// <-----css----->
transition: 1s cubic-bezier(.17,.67,.83,.67)
\`\`\`
#
-----------------------------------------------
#
* 點擊"..."→"Show console drawer"→點擊裡面的"..."→"Animations"→點擊圖片:可以查看animation的時間軸，選擇10%可以觀看慢速。
![圖片](/img/Chromedevtools除錯/Chromedevtools除錯-11.png)
#
-----------------------------------------------
#
* 在[network]，重新整理頁面後，可在最底下查看狀態:

    * requests(請求): 請求回傳的檔案數量。

    * transferred(轉移): 壓縮過後的流量。

    * resources(資源): 未壓縮過的總資源。

    * Finish(結束): 整體包含ajax動態載入的時間。

    * Load(加載): 靜態檔案載入的時間。
    
![圖片](/img/Chromedevtools除錯/Chromedevtools除錯-12.png)
#
-----------------------------------------------
#
* 在[network]，可按"Throttling小箭頭"按鈕 : 可以模擬其他頻寬的速度。
![圖片](/img/Chromedevtools除錯/Chromedevtools除錯-13.png)
#
-----------------------------------------------
#
* 在[Console]，直接撰寫console.log() : 可以顯示結果。
![圖片](/img/Chromedevtools除錯/Chromedevtools除錯-14.png)
#
-----------------------------------------------
#
* 在[Console]，直接撰寫console.table() : 放入物件或陣列，可以表格方式查看。
![圖片](/img/Chromedevtools除錯/Chromedevtools除錯-15.png)
#
-----------------------------------------------
#
* 在[Console]，直接撰寫console.time()、console.timeEnd() : 可以計算時間。
![圖片](/img/Chromedevtools除錯/Chromedevtools除錯-16.png)
#
\`\`\`js
// <-----js----->
console.time();
setTimeout(function(){
    console.timeEnd("a");
},5000);

// <-----結果----->
//經過5秒後顯示:"a"
\`\`\`
#
-----------------------------------------------
#
* 在[Elements]對要查看的元素"右鍵"→"Break on"，可查看DOM元素的斷點。
    * [subtree moditications]:子節點有變更的時候。
    * [attribute moditications]:屬性有變更的時候。
    * [node removal]:節點被移除的時候。
![圖片](/img/Chromedevtools除錯/Chromedevtools除錯-17.png)
#
-----------------------------------------------
#
在[Sources]中間部分先在程式碼編號上點擊新增斷點。
![圖片](/img/Chromedevtools除錯/Chromedevtools除錯-18.png)
#
-----------------------------------------------
#
* 在[Sources]右邊部分[Watch]可以手動新增要查看的變數。
![圖片](/img/Chromedevtools除錯/Chromedevtools除錯-19.png)
#
-----------------------------------------------
#
* 在[Sources]右邊部分按鈕，可執行斷點，從左到右分別是:

    * 執行查看斷點。

    * 查看下一個斷點。

    * 進入斷點的function。

    * 離開斷點的function。

    * 將斷點都隱藏。

    * 若有錯誤則停止。

![圖片](/img/Chromedevtools除錯/Chromedevtools除錯-20.png)
#`,__vite_glob_0_2=Object.freeze(Object.defineProperty({__proto__:null,default:_20210124JavaScriptChrome_Devtools},Symbol.toStringTag,{value:"Module"})),_20210201JavaScript___=`---
title: 【JS】變數與函式
date: 2021-02-01
tags: ["javaScript"]
---
#
## 宣告變數
#
<!--more-->
#
|變數|說明|修改|
|---|---|---|
|var|在{}裡宣告變數，會影響全域變數(window)|可以被修改|
|let|在{}裡宣告變數，只存留在{}裡|可以被修改|
|const|在{}裡宣告變數，只存留在{}裡|不能被修改，但物件和陣列除外|
#
\`使用Object.freeze()，括弧裡面放const宣告的物件可以凍結\`
#
\`\`\`js
let apple = "蘋果";
//宣告變數 變數名稱 = 賦予的值;
\`\`\`
#
\`宣告的變數會儲存在window裡\`
#
-----------------------------------------------
#
## 區域變數(Area Variable)
#
\`\`\`js
function sayApple(){
    let apple = "蘋果";
    console.log(apple);  //蘋果
}
sayApple();
console.log(apple); //undefined
\`\`\`
#
\`function()執行完後，宣告也會跟著結束\`
#
-----------------------------------------------
#
## 全域變數(Global Variable)
#
\`\`\`js
let apple;
function sayApple(){
    apple = "蘋果";
}
sayApple();
console.log(apple);  //蘋果
\`\`\`
#
\`若要讓function()執行完後，取得變數，則在function外先做宣告\`
#
-----------------------------------------------
#
## 函式
#
\`\`\`js
function sayHi(){
    console.log("Hello World!!");
}
//宣告函式 函式名稱 (帶參數){
//  執行動作
//};

sayHi();
//執行函式
\`\`\`
#
#### 帶參數寫法：
#
\`\`\`js
function sayHi(item){
    console.log(item);
}
//宣告函式 函式名稱 (帶參數){
//  執行動作
//};

sayHi("Hello World!!");
//執行函式
\`\`\`
#
\`函式具有hoisting效果，不論執行先後，function都會先執行\`
#
-----------------------------------------------
#
## javascript的保留字
#
|關鍵字|關鍵字|關鍵字|關鍵字|
|---|---|---|---|
|arguments|await*|break|case|
|catch|class*|const*|continue|
|debugger|default|delete|do|
|else|enum*|eval|export*|
|extends*|false|finally|for|
|function|if|implements|import*|
|in|instanceof|interface|let*|
|new|null|package|private|
|protected|public|return|static|
|super*|switch|this|throw|
|try|typeof|var|void|
|while|with|yield||
#
\`宣告變數或函式時若使用保留字會出錯\`
#`,__vite_glob_0_3=Object.freeze(Object.defineProperty({__proto__:null,default:_20210201JavaScript___},Symbol.toStringTag,{value:"Module"})),_20210202JavaScript____=`---
title: 【JS】判斷式
date: 2021-02-02
tags: ["javaScript"]
---
#
## 運算子
#
<!--more-->
#
|運算子|口語化說明|
|---|---|
|=|賦予|
|==|等於|
|===|等於(嚴謹模式)|
|!=|不等於|
|!==|不等於(嚴謹模式)|
|true|是;成立|
|false|不是;不成立|
|>|大於|
|<|小於|
|>=|大於等於|
|<=|小於等於|
|&&|以及(and)|
|｜｜|或是(or)|
|!|反轉true或false(not)|
#
\`\`\`js
console.log(1 === "1"); //false
console.log(1 === 1); //true
console.log(1 != "1"); //false
console.log(1 !== 1); //true
console.log(true == "1"); //true
console.log(true === "1"); //false
\`\`\`
#
\`在javascript裡：1是true、0是false\`
#
-----------------------------------------------
#
## if、else、else if
#
* 適合判斷式數值，限制範圍。
#
* 一律使用 **if** 開頭，若不成立，則往下執行。
#
* 可以使用多個 **else if** ，若不成立，則往下執行。
#
* 若以上都不成立則執行 **else** 。
#
\`\`\`js
//飢餓程度：1~10
let hungry = 8;

function eat(item){
    console.log("我要吃"+item);
}
//7以上
if(hungry >= 7){
    eat("披薩");
//3~6
}else if(hungry <= 6 && hungry > 2){
    eat("沙拉");
//0~2
}else{
    console.log("我不想吃");
}
\`\`\`
#
\`當以上都不成立時就執行else\`
#
-----------------------------------------------
#
## switch
#
* 效能比 **if...else** 好，適合判斷已知的結果。
#
*  **switch** 一定要帶參數才能判斷。
#
*  **break** 可阻止往下執行。
#
* 若都不成立則執行 **default** 。
#
\`\`\`js
//飢餓程度：好餓、還好、不餓
let hungry = "好餓";

function eat(item){
    console.log("我要吃"+item);
}

switch (hungry){
    case "好餓":
        eat("披薩")
        break;
    case "還好":
        eat("沙拉")
        break;
    case "不餓":
        console.log("我不想吃");
        break;
    default:
        console.log("隨便");
        break;
}
\`\`\`
#
\`當以上值都沒有就跑default\`
#`,__vite_glob_0_4=Object.freeze(Object.defineProperty({__proto__:null,default:_20210202JavaScript____},Symbol.toStringTag,{value:"Module"})),_20210203JavaScript___DOM__=`---
title: 【JS】抓取DOM元素
date: 2021-02-03
tags: ["javaScript"]
---
#
## 取得DOM元素方法
#
<!--more-->
#
|方法|取得目標|回傳結果|
|---|---|---|
|.getElementById()|id|第一個符合的標籤|
|.getElementsByName()|name|物件|
|.getElementsByTagName()|<標籤>|物件|
|.querySelector()|id、class、<標籤>|第一個符合的標籤|
|.querySelectorAll()|id、class|物件|
#
-----------------------------------------------
#
## 抓取id元素
#
\`\`\`html
<div id="apple"></div>
\`\`\`
#
\`\`\`js
let apple = document.getElementById("apple");

console.log(apple); //<div id="apple"></div>

apple.textContent = "蘋果";
\`\`\`
#
-----------------------------------------------
#
## 抓取name元素
#
\`\`\`html
<div name="apple"></div>
\`\`\`
#
\`\`\`js
let apple = document.getElementsByName("apple");

console.log(typeof(apple)); //object

apple[0].textContent = "蘋果";
\`\`\`
#
-----------------------------------------------
#
## 抓取tag標籤
#
\`\`\`html
<button type="button">按鈕</button>
\`\`\`
#
\`\`\`js
let btn = document.getElementsByTagName("button");

console.log(typeof(btn)); //object

btn[0].textContent = "蘋果";
\`\`\`
#
-----------------------------------------------
#
## 抓取class元素
#
\`\`\`html
<ul class="list">
  <li><a href="#" class="nav-link">蘋果</a></li>
  <li><a href="#" class="nav-link">香蕉</a></li>
  <li><a href="#" class="nav-link">鳳梨</a></li>
</ul>
\`\`\`
#
\`\`\`js
// 第一種寫法
document.querySelector(".nav-link").textContent = "蓮霧";

// 第二種寫法
let list = document.querySelector(".list");
list.querySelectorAll(".nav-link")[0].textContent = "蓮霧";
\`\`\`
#
#### 輸出結果：
#
\`\`\`html
<ul>
  <li><a href="#" class="nav-link">蓮霧</a></li>
  <li><a href="#" class="nav-link">香蕉</a></li>
  <li><a href="#" class="nav-link">鳳梨</a></li>
</ul>
\`\`\`
#
\`querySelector若有多個，只會抓取第一個元素\`
#
-----------------------------------------------
#
## 抓取input值
#
\`\`\`html
<input class="text" type="text" value="蘋果">
\`\`\`
#
\`\`\`js
let text = document.querySelector(".text");

// 第一種寫法
text.value = "香蕉";

// 第二種寫法
text.setAttribute("value","香蕉");

//取得類型
console.log(typeof(text.value)); //string
\`\`\`
#
#### 輸出結果：
#
\`\`\`html
<input class="text" type="text" value="香蕉">
\`\`\`
#`,__vite_glob_0_5=Object.freeze(Object.defineProperty({__proto__:null,default:_20210203JavaScript___DOM__},Symbol.toStringTag,{value:"Module"})),_20210204JavaScript___DOM__=`---
title: 【JS】改變DOM元素
date: 2021-02-04
tags: ["javaScript"]
---
#
## 點擊按鈕 + 改變標籤結構(innerHTML、prepend、append)
#
<!--more-->
#
\`\`\`html
<button class="btn" type="button">按鈕</button>
<ul class="list">
  <li>蘋果</li>
</ul>
\`\`\`
#
\`\`\`js
let btn = document.querySelector(".btn");
let list = document.querySelector(".list");

//替換"蘋果"
btn.onclick = function(){
  list.innerHTML = "<li>香蕉</li>";
}

//加在"蘋果"前面
btn.onclick = function(){
  let banana = document.createElement("li");
  banana.textContent = "香蕉";
  list.prepend(banana);
}

//加在"蘋果"後面
btn.onclick = function(){
  let banana = document.createElement("li");
  banana.textContent = "香蕉";
  list.append(banana);
\`\`\`
#
-----------------------------------------------
#
## 點擊按鈕 + 改變文字(textContent)
#
\`\`\`html
<button class="btn" type="button">按鈕</button>
<p class="apple">蘋果</p>
\`\`\`
#
\`\`\`js
let btn = document.querySelector(".btn");
let apple = document.querySelector(".apple");
btn.onclick = function(){
  apple.textContent = "香蕉";
}
\`\`\`
#
-----------------------------------------------
#
## 點擊按鈕 + 改變標籤屬性(setAttribute、getAttribute)
#
\`\`\`html
<button class="btn" type="button">按鈕</button>
<a class="link" href="#">連結</a>
\`\`\`
#
\`\`\`js
let btn = document.querySelector(".btn");
let link = document.querySelector(".link");

btn.onclick = function(){
  link.setAttribute("href","https://www.google.com.tw/");
  let href = document.getElementsByTagName("a")[0].getAttribute("href");
  console.log(href); //"https://www.google.com.tw/"
}
\`\`\`
#
-----------------------------------------------
#
## 點擊按鈕 + 改變元素樣式(style)
#
\`\`\`html
<button class="btn" type="button">按鈕</button>
<a class="link" href="#">連結</a>
\`\`\`
#
\`\`\`js
let btn = document.querySelector(".btn");
let link = document.querySelector(".link");

//將連結背景變紅色
btn.onclick = function(){
  
  //第一種寫法
  link.style.backgroundColor = "red";

  //第二種寫法，多樣式寫法["",""]
  link.style["background-color"] = "red";

  //第三種寫法，多樣式寫法"";""
  link.style.cssText = "background-color: red";

}
\`\`\`
#
-----------------------------------------------
#
## 點擊按鈕 + 取得input裡的值(value)
#
\`\`\`html
<button class="btn" type="button">按鈕</button>
<input class="text" type="text">
\`\`\`
#
\`\`\`js
let btn = document.querySelector(".btn");
let text = document.querySelector(".text");

btn.onclick = function(){
  console.log(text.value); //[顯示輸入框裡的文字]
}
\`\`\`
#
-----------------------------------------------
#
## 點擊按鈕 + 取得input的類型(type)
#
\`\`\`html
<button class="btn" type="button">按鈕</button>
<input class="password" type="password">
\`\`\`
#
\`\`\`js
let btn = document.querySelector(".btn");
let password = document.querySelector(".password");

btn.onclick = function(){
  console.log(password.type); //password
}
\`\`\`
#
-----------------------------------------------
#
## XSS(Cross Site Scripting)
#
* 跨網站指令碼攻擊。
#
* 在 **input** 裡直接撰寫 **\\<script>** 腳本來進行攻擊。
#
* 盡量避免使用 **.onclick** + **.innerHTML** 方法。
#
|名稱|innerHTML|createElement|
|---|---|---|
|使用方法|組完字串再帶入|以DOM節點來處理|
|效能|比較好|比較差|
|安全性|比較差|比較好|
#`,__vite_glob_0_6=Object.freeze(Object.defineProperty({__proto__:null,default:_20210204JavaScript___DOM__},Symbol.toStringTag,{value:"Module"})),_20210205JavaScriptFor__=`---
title: 【JS】for迴圈
date: 2021-02-05
tags: ["javaScript"]
---
#
## for
#
<!--more-->
#
\`\`\`js
//初始狀態;條件;每次執行
for(let i=0 ; i<3 ; i++){
    console.log("我會被執行"+i+"次");
    //"我會被執行0次"
    //"我會被執行1次"
    //"我會被執行2次"
}

//99乘法表
for(let i=2 ; i<10 ; i++){
    console.log(i+'*'+i+'='+i*i);
}
//"2*2=4"
//"3*3=9"
//"4*4=16"
//"5*5=25"
//"6*6=36"
//"7*7=49"
//"8*8=64"
//"9*9=81"
\`\`\`
#
\`i=i+1等於i+=1等於i++\`
#
-----------------------------------------------
#
## for + json 
#
\`\`\`js
let fruitsData = [
    {
        name: "蘋果",
        price: 15
    },
    {
        name: "香蕉",
        price: 25
    },
    {
        name: "鳳梨",
        price: 35    
    }
]

//列印出每一項水果
for(let i=0 ; i<fruitsData.length ; i++){
  console.log(fruitsData[i].name);
}
//蘋果
//香蕉
//鳳梨
\`\`\`
#
-----------------------------------------------
#
## for + json + 用if過濾結果
#
\`\`\`js
let fruitsData = [
    {
        name: "蘋果",
        price: 15
    },
    {
        name: "香蕉",
        price: 25
    },
    {
        name: "鳳梨",
        price: 35    
    }
]

//判斷價錢超過20的水果
for(let i=0 ; i<fruitsData.length ; i++){
    if(fruitsData[i].price > 20){
        console.log(fruitsData[i].name);
    }
}
//香蕉
//鳳梨

//判斷價錢超過20的水果，滿足條件就不繼續
for(let i=0 ; i<fruitsData.length ; i++){
    if(fruitsData[i].price > 20){
        console.log(fruitsData[i].name);
        break;
    }
}
//香蕉
\`\`\`
#
\`若使用break，if只要買足一次條件就不在執行後續\`
#
-----------------------------------------------
#
## for + json + 將數字加總
#
\`\`\`js
let fruitsData = [
    {
        name: "蘋果",
        price: 15
    },
    {
        name: "香蕉",
        price: 25
    },
    {
        name: "鳳梨",
        price: 35    
    }
]

let priceTotal = 0;

for(let i=0 ; i<fruitsData.length ; i++){
    priceTotal += fruitsData[i].price;
}

console.log(priceTotal); //75
\`\`\`
#
-----------------------------------------------
#
## for + ul + 組字串 + innerHTML
#
\`\`\`html
<ul class="list"></ul>
\`\`\`
#
\`\`\`js
let fruitsData = [
    {
        name: "蘋果",
        price: 15
    },
    {
        name: "香蕉",
        price: 25
    },
    {
        name: "鳳梨",
        price: 35    
    }
]

//宣告一個空字串
let str = "";
let list = document.querySelector(".list");

for(let i=0 ; i<fruitsData.length ; i++){
    //累加<li>
    str+="<li>"+fruitsData[i].name+"</li>";
}

//用innerHTML將組好的<li>一次塞入<ul>裡
list.innerHTML = str;
\`\`\`
#
#### 輸出結果：
#
\`\`\`html
<ul class="list">
    <li>蘋果</li>
    <li>香蕉</li>
    <li>鳳梨</li>
</ul>
\`\`\`
#
\`innerHTML特性是會先清空元素再塞值\`
#
-----------------------------------------------
#
## for + ul + createElement + appendChild
#
\`\`\`html
<ul class="list"></ul>
\`\`\`
#
\`\`\`js
let fruitsData = [
    {
        name: "蘋果",
        price: 15
    },
    {
        name: "香蕉",
        price: 25
    },
    {
        name: "鳳梨",
        price: 35    
    }
]

let list = document.querySelector(".list");

for(let i=0 ; i<fruitsData.length ; i++){

    //創建li元素
    let liElement = document.createElement("li");

    //將li的內容文字都分別塞名稱
    liElement.textContent = fruitsData[i].name;

    list.appendChild(liElement);
}
\`\`\`
#
#### 輸出結果：
#
\`\`\`html
<ul class="list">
    <li>蘋果</li>
    <li>香蕉</li>
    <li>鳳梨</li>
</ul>
\`\`\`
#
\`appendChild不會清空內容\`
#
-----------------------------------------------
#
## for + ul + data-* + innerHTML
#
\`\`\`html
<ul class="list"></ul>
\`\`\`
#
\`\`\`js
let fruitsData = [
    {
        name: "蘋果",
        price: 15
    },
    {
        name: "香蕉",
        price: 25
    },
    {
        name: "鳳梨",
        price: 35    
    }
]

let list = document.querySelector(".list");
let str = "";

for(let i=0 ; i<fruitsData.length ; i++){
    //將資料組字串，並帶入data-num
    str += "<li data-num='"+ i +"'>"+ fruitsData[i].name +"</li>";
    list.innerHTML = str;
}

//監聽ul裡面的元素
list.addEventListener("click",function(e){
  if(e.target.nodeName !== "LI"){
    return
  }

  //點擊li時取得該元素的編號
  let targetNum = e.target.dataset.num;
  console.log("你點擊的是第"+targetNum+"資料");
})
\`\`\``,__vite_glob_0_7=Object.freeze(Object.defineProperty({__proto__:null,default:_20210205JavaScriptFor__},Symbol.toStringTag,{value:"Module"})),_20210206JavaScriptEvent_____=`---
title: 【JS】event使用者事件
date: 2021-02-06
tags: ["javaScript"]
---
#
## 監聽點擊事件(事件氣泡)
#
<!--more-->
#
* addEventListener(事件,一組動作,false) 若同時有多個監聽事件，先執行點擊目標在執行外層
#
\`\`\`html
<button class="btn" type="button">按鈕</button>
\`\`\`
#
\`\`\`js
let btn = document.querySelector(".btn");
let body = document.body;

btn.addEventListener("click",function(){
    console.log("你點到按鈕");
},false);

body.addEventListener("click",function(){
    console.log("你點到body");
},false);


\`\`\`
#
\`結果："你點到按鈕"，"你點到body"\`
#
-----------------------------------------------
#
## 監聽點擊事件(事件捕捉)
#
* addEventListener(事件,一組動作,true) 若同時有多個監聽事件，先執行外層在執行點擊目標
#
\`\`\`html
<button class="btn" type="button">按鈕</button>
\`\`\`
#
\`\`\`js
let btn = document.querySelector(".btn");
let body = document.body;

btn.addEventListener("click",function(){
    console.log("你點到按鈕");
},true);

body.addEventListener("click",function(){
    console.log("你點到body");
},true);
\`\`\`
#
\`結果："你點到body"，"你點到按鈕"\`
#
-----------------------------------------------
#
## 監聽點擊事件 + 阻止事件冒泡
#
1. addEventListener第三個參數預設是false，表示“事件從元素內開始往外發生”
#
2. 當我點擊「按鈕」時會出現“蘋果”，後面body也會執行並出現“香蕉”
#
3. 但如果加上stopPropagation之後，可以成功阻止事件冒泡，body不會執行
#
\`\`\`html
<button class="btn" type="button">按鈕</button>
\`\`\`
#
\`\`\`js
let btn = document.querySelector(".btn");
let body = document.body;

btn.addEventListener("click",function(event){
    console.log("你點到按鈕");
    //成功阻止事件往外發生，如果刪除這行，會console.log("香蕉");
    event.stopPropagation();
});

body.addEventListener("click",function(){
    console.log("你點到body");
});
\`\`\`
#
-----------------------------------------------
#
## 監聽點擊事件 + 取消a連結跳至錨點
#
\`\`\`html
<a class="link" href="#">連結</a>
\`\`\`
#
\`\`\`js
let link = document.querySelector(".link");

link.addEventListener("click",function(event){
    //取消a連結尋找錨點
    event.preventDefault();
    console.log("蘋果");
});
\`\`\`
#
-----------------------------------------------
#
## 監聽點擊事件 + 取消button寄送，先進行驗證
#
\`\`\`html
<form class="form">
    <!-- required為必填，不能送出空值 -->
    <input type="text" id="name" required>
    <button class="btn" type="submit">提交</button>
</form>
\`\`\`
#
\`\`\`js
let form = document.querySelector(".form");
let btn = document.querySelector(".btn");

btn.addEventListener("click",function(event){

    // 阻止表單的默認提交行為
    event.preventDefault();

    // 這裡可以進行表單驗證
    if(form.checkValidity()){
        console.log("表單通過驗證");
        form.submit(); //提交表單
    }else{
        console.log("表單驗證失敗");
    }

});
\`\`\`
#
-----------------------------------------------
#
## 監聽點擊事件 + 取得滑鼠點擊的目標
#
\`\`\`html
<button class="btn" type="button">按鈕</button>
\`\`\`
#
\`\`\`js
//滑鼠點擊<button>
document.addEventListener("click",function(event){
    console.log(event.target); //<button class="btn" type="button">按鈕</button>
    console.log(event.target.id); //"test"
    console.log(event.target.value); //""
    console.log(event.target.nodeName); //"BUTTON"
    console.log(event.target.tagName); //"BUTTON"
    console.log(event.target.localName); //"button"
    console.log(event.target.dataset.num); //"23"
    console.log(event.target.className); //"btn"
    console.log(event.target.type); //"button"
});
\`\`\`
#
-----------------------------------------------
#
## 監聽鍵盤事件 + 取得按下的鍵盤值
#
\`\`\`js
//按鍵盤"A"鍵
document.addEventListener("keydown",function(event){
    console.log(event.keyCode); //65
});
\`\`\`
#
-----------------------------------------------
#
## 監聽滑鼠移動事件
#
\`\`\`html
<button id="btn" type="button">按鈕</button>
\`\`\`
#
\`\`\`js
let btn = document.getElementById("btn");

//當滑鼠移入按鈕時
btn.addEventListener("mouseenter",function(event){
    console.log("滑鼠觸碰到按鈕了");
});

//當滑鼠移出按鈕時
btn.addEventListener("mouseleave",function(event){
    console.log("滑鼠離開到按鈕了");
});
\`\`\`
#
-----------------------------------------------
#
## 監聽選單切換事件 + 比對資料顯示值
#
\`\`\`html
<select class="select">
  <option value="蘋果">蘋果</option>
  <option value="香蕉">香蕉</option>
  <option value="鳳梨">鳳梨</option>
</select>
<p class="text"></p>
\`\`\`
#
\`\`\`js
let fruitsData = [
    {
        name: "蘋果",
        price: 15
    },
    {
        name: "香蕉",
        price: 25
    },
    {
        name: "鳳梨",
        price: 35    
    }
]

let select = document.querySelector(".select");
let text = document.querySelector(".text");

function showDataName(event){

  for(let i=0 ; i<fruitsData.length ; i++){
    //比對下拉選單的"名稱"，如果跟資料的"名稱"一樣
    if(event.target.value == fruitsData[i].name){
        //就讓text就顯示該值的"價錢"
        text.textContent = fruitsData[i].price;
    }
  }
}
select.addEventListener("change",showDataName);
\`\`\`
#
-----------------------------------------------
#
## 點擊父層元素回傳正確值
#
\`\`\`html
<ul class="list">
  <li>蘋果</li>
  <li>香蕉</li>
  <li>鳳梨</li>
</ul>
\`\`\`
#
\`\`\`js
let list = document.querySelector(".list");
list.addEventListener("click",function(e){
    //確認點擊的是li而不是ul
    if(e.target.nodeName !== "LI"){
        return
    }
    console.log(e.target.textContent);
})
\`\`\`
#
-----------------------------------------------
#
## 將input裡的值轉換成數字處理(parseInt)
#
\`\`\`html
<label>蘋果數量：</label>
<input class="apple" type="text" value="2">
<br>
<label>香蕉數量：</label>
<input class="banana" type="text" value="2">
<br>
<button class="btn" type="button">按鈕</button>
\`\`\`
#
\`\`\`js
let btn = document.querySelector(".btn");
let apple = document.querySelector(".apple");
let banana = document.querySelector(".banana");

//第一種寫法
btn.onclick = function(){
  let applePrice = 20; //蘋果一顆20元
  let bananaPrice = 15; //香蕉一根15元
  let appleNum = parseInt(apple.value); //蘋果數量
  let bananaNum = parseInt(banana.value); //香蕉數量
  console.log(applePrice * appleNum + bananaPrice * bananaNum); //20 * 2 + 15 * 2 = 70
}

//第二種寫法return寫法
function count(applePrice,bananaPrice){ 
  let appleNum = parseInt(apple.value);
  let bananaNum = parseInt(banana.value);
  let total = applePrice * appleNum + bananaPrice * bananaNum;
  return total
}
btn.onclick = function(){
  console.log(count(20,15)); //將價錢以參數方式帶入
}
\`\`\`
#
\`★★★從input裡取出來的值是"字串"，利用.parseInt()將字串轉為數字\`
#
\`\`\`js
console.log(parseInt("box")); //NaN
console.log(parseInt("50")); //50
console.log(parseInt("48.9")); //48 
console.log(parseInt("50 60 70")); //50
console.log(parseInt("50 days")); //50
\`\`\``,__vite_glob_0_8=Object.freeze(Object.defineProperty({__proto__:null,default:_20210206JavaScriptEvent_____},Symbol.toStringTag,{value:"Module"})),_20210207JavaScriptLocalStorage=`---
title: 【JS】localStorage
date: 2021-02-07
tags: ["javaScript"]
---
#
## 將input值存入localStorage，再取出
#
<!--more-->
#
|Key|Value|
|---|---|
|myName|text.value(輸入框裡的值)|
#
\`\`\`html
<input class="text" type="text">
<button class="save" type="button">儲存資料</button>
<button class="call" type="button">呼叫資料</button>
\`\`\`
#
\`\`\`js
let text = document.querySelector(".text");
let save = document.querySelector(".save");
let call = document.querySelector(".call");

//點擊「儲存資料」按鈕
save.addEventListener("click",function(){

    //儲存資料，(要存入的值是什麼標題，存入什麼值)
    localStorage.setItem("myName",text.value);
})

//點擊「呼叫資料」按鈕
call.addEventListener("click",function(){

    //設定變數=localStorage的myName的值
    let str = localStorage.getItem("myName");

    //彈跳出資料
    alert(str);
})
\`\`\`
#
-----------------------------------------------
#
## 將JSON資料存入localStorage，再取出
#
|Key|Value|
|---|---|
|fruitName|{name: "蘋果",price: 15}|
#
\`\`\`js
let fruitsData = [
    {
        name: "蘋果",
        price: 15
    }
]

//存入"字串"資料
let fruitStr = JSON.stringify(fruitsData);
console.log(fruitStr); //"[{'name':'蘋果','price':15}]"
localStorage.setItem("fruitName",fruitStr);

//取出"字串"資料，並轉成JSON格式
let getData = localStorage.getItem("fruitName");
let fruitArr = JSON.parse(getData);
console.log(fruitArr[0].name); //"蘋果"
\`\`\`
#
\`從localStorage取出來的資料壹定都是字串\`
#
-----------------------------------------------
#
## 實作todolist
#
|Key|Value|
|---|---|
|todoItem|text.value(輸入框裡的值)|
#
\`\`\`html
<input class="text" type="text">
<button class="btn">按鈕</button>
<ul class="list"></ul>
\`\`\`
#
\`\`\`js
let todoData = [];
let text = document.querySelector(".text");
let btn = document.querySelector(".btn");
let list = document.querySelector(".list");

//初始化資料
function initData(){
    //取得localStorage上的"todoItem"資料
    let getData = localStorage.getItem("todoItem");
    //如果有取得資料，就將"字串"資料轉為JSON格式
    if(getData){
      todoData = JSON.parse(getData);
    }else{
      todoData = [];
    }
}
initData();

//更新資料
function updateList(){
    //建立空字串
    let str = "";
    //將所有資料跑一遍
    for(let i=0 ; i<todoData.length ; i++){
        //並組成<li>並且在<a>連結裡面帶入data-num編號
        str += "<li><a href='#' data-num='"+i+"'>刪除</a>"+todoData[i]+"</li>";
    }
    //組裝完成後，渲染到頁面上
    list.innerHTML = str;
}
updateList();

//點擊"按鈕"時新增資料
btn.addEventListener("click",function(){
    //如果input裡有值才執行
    if(text.value.trim() !== ""){
        //將input裡的值新增到資料
        todoData.push(text.value);
        //將整個資料轉成"字串"
        let setData = JSON.stringify(todoData);
        //儲存到localStorage上
        localStorage.setItem("todoItem",setData);
        //重新渲染頁面的資料
        updateList();
        //清空input裡的值
        text.value = "";
    }
},false)

//點擊"刪除"時刪除資料
list.addEventListener("click",function(event){
    //當我點擊的是ul裡的a才執行
    if(event.target.nodeName == "A"){
        //取得我點擊目標的data-num編號
        let targetNum = e.target.dataset.num;
        //並從資料中刪除該項
        todoData.splice(targetNum,1);
        //將整個資料轉成"字串"
        let setData = JSON.stringify(todoData);
        //儲存到localStorage上
        localStorage.setItem("todoItem",setData);
        //重新渲染頁面的資料
        updateList();
    }
})
\`\`\``,__vite_glob_0_9=Object.freeze(Object.defineProperty({__proto__:null,default:_20210207JavaScriptLocalStorage},Symbol.toStringTag,{value:"Module"})),_20210208JavaScriptBOM_____=`---
title: 【JS】BOM瀏覽器物件
date: 2021-02-08
tags: ["javaScript"]
---
#
## BOM(Browser Object Model)
#
<!--more-->
#
* 瀏覽器(window)提供的物件原型。
#
|名稱|中文|
|---|---|
|history|瀏覽歷史紀錄|
|frames|框架|
|location|路徑位置|
|document|DOM元素|
|screen|使用裝置資訊|
|navigator|版本資訊|
#
-----------------------------------------------
#
## 回到上一頁、下一頁
#
\`\`\`html
<button class="back" type="button">回上一頁</button>
<button class="next" type="button">往下一頁</button>
\`\`\`
#
\`\`\`js
let back = document.querySelector(".back");
let next = document.querySelector(".next");

//點擊"回上一頁"按鈕時
back.addEventListener("click",function(){
  window.history.back();
})

//點擊"往下一頁"按鈕時
next.addEventListener("click",function(){
  window.history.forward();
})
\`\`\`
#
-----------------------------------------------
#
## 列印
#
\`\`\`html
<button class="print" type="button">列印</button>
\`\`\`
#
\`\`\`js
let print = document.querySelector(".print");

print.addEventListener("click",function(){
  window.print();
})
\`\`\`
#
\`跟對網頁按右鍵"列印"一樣\`
#
-----------------------------------------------
#
## 前往網址
#
\`\`\`html
<button class="website1" type="button">網址1</button>
<button class="website2" type="button">網址2</button>
\`\`\`
#
\`\`\`js
let website1 = document.querySelector(".website1");
let website2 = document.querySelector(".website2");

//點擊"網址1"按鈕時
website1.addEventListener("click",function(){
  window.open("https://www.google.com.tw/");
})

//點擊"網址2"按鈕時
website2.addEventListener("click",function(){
  location.href = "https://www.google.com.tw/";
})
\`\`\`
#
-----------------------------------------------
#
## 取得瀏覽器高度
#
#
* window.innerHeight，可以取得瀏覽器可視高度。
#
* window.outerHeight，可以取得整個瀏覽器高度。
#
* window.onresize，當拖動瀏覽器時觸發。
#
\`\`\`html
<div class="banner"></div>
<section>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum quos facilis praesentium, dolore impedit ea est reprehenderit sapiente aliquam aspernatur odio expedita voluptates repellendus nobis modi, eveniet itaque tempore aliquid distinctio, quia rem sit! Itaque, voluptas praesentium sint facere nulla est saepe tenetur inventore ipsum consequatur tempore soluta aspernatur, non modi neque aperiam quibusdam, similique quaerat dolore cumque ducimus. Sint obcaecati, natus ipsum consequuntur facere numquam quibusdam, praesentium autem omnis deleniti porro, quae nesciunt perspiciatis qui repellat. Rem labore culpa tempora est blanditiis facere vel, error debitis ea atque quod dolor amet tenetur asperiores incidunt ipsum itaque, nemo doloribus ab!</p>
</section>
\`\`\`
#
\`\`\`css
.banner{
  width: 100%;
  height: auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("https://images.unsplash.com/photo-1731466450638-959a6f0d1514?q=80&w=2675&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
}
\`\`\`
#
\`\`\`js
let banner = document.querySelector(".banner");

banner.style.height = window.innerHeight+"px";

window.onresize = function(){
  banner.style.height = window.innerHeight+"px";
}
\`\`\`
#`,__vite_glob_0_10=Object.freeze(Object.defineProperty({__proto__:null,default:_20210208JavaScriptBOM_____},Symbol.toStringTag,{value:"Module"})),_20210209JavaScript___AJAX__=`---
title: 【JS】發送AJAX請求
date: 2021-02-09
tags: ["javaScript"]
---
#
## 動態載入資料(AJAX)
#
<!--more-->
#
* 使用\`new XMLHttpRequest\`原型，來向伺服器發送請求。
#
* 不用重新整理網頁就能取得資料庫回傳的資料，例如 : 
    * 加入購物車，顯示商品數量。
    * 註冊帳號時，顯示該帳號是否已使用。
    * 搜尋時，顯示的關鍵提示字。
#
* 載入的資料必須支援跨網域(CORS)。
    * 若發送請求時出現\`Access-Control-Allow-Origin\`錯誤，代表不支援
#
\`\`\`js
let xhr = new XMLHttpRequest();
\`\`\`
#
-----------------------------------------------
#
### .open("方法" , "網址" , true/false)。
#
* 向伺服器發送請求.open(method, url, async, user, password)。
    * method：請求方法（如 "GET"、"POST"、"PUT"、"DELETE" 等）
    * url：請求的 URL 地址，可以是相對路徑或絕對路徑。
    * async(可選)：是否異步執行請求，預設為 true。如果設定為 false，請求會同步執行，頁面會被阻塞，直到請求完成。一般建議使用異步請求。
    * user(可選)：HTTP 請求的使用者名稱，用於需要身份驗證的請求。
    * password(可選)：HTTP 請求的密碼，用於需要身份驗證的請求。
#
|請求方法|說明|
|---|---|
|"GET"|用於請求數據。通常用於獲取資源。|
|"POST"|用於將數據發送到伺服器。例如，提交表單或上傳數據。|
|"PUT"|用於更新伺服器上的資源。|
|"DELETE"|用於刪除伺服器上的資源。|
|"PATCH"|用於更新部分資源，類似於 PUT，但只更新部分內容。|
|"HEAD"|與 GET 類似，但不返回回應體，僅返回回應頭部信息。|
|"OPTIONS"|用於查詢伺服器支持哪些請求方法和其他配置。|
|"TRACE"|用於追蹤請求和回應的路徑，通常很少使用。|
|"CONNECT"|用於建立到目標伺服器的隧道連接，常用於代理伺服器。|
#
\`\`\`js
let xhr = new XMLHttpRequest();

//true(預設)，不等資料載入完就會往下執行(非同步載入)
xhr.open("get","https://hexschool.github.io/ajaxHomework/data.json",true);

//false，等待資料載入完後才往下執行(同步載入)
xhr.open("get","https://hexschool.github.io/ajaxHomework/data.json",false);
\`\`\`
#
-----------------------------------------------
#
### .readyState
#
* 取得當前請求的處理狀態。
#
|處理狀態|說明|
|---|---|
|0|已成功建立new XMLHttpRequest()|
|1|使用了open()，但還沒有send()|
|2|偵測到使用send()|
|3|loading中|
|4|已成功撈到資料|
#
\`\`\`js
let xhr = new XMLHttpRequest();

console.log(xhr.readyState); //0
\`\`\`
#
-----------------------------------------------
#
### .setRequestHeader
#
* 決定傳送給伺服器的資料格式。
#
\`\`\`js
let xhr = new XMLHttpRequest();

xhr.open("get","https://hexschool.github.io/ajaxHomework/data.json",false);

//傳送表單格式
xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");

//傳送JSON格式
xhr.setRequestHeader("content-type","application/json");
\`\`\`
#
-----------------------------------------------
#
### .send
#
* 傳送給伺服器資料。
#
\`\`\`js
let xhr = new XMLHttpRequest();

xhr.open("get","https://hexschool.github.io/ajaxHomework/data.json",true);

//回傳"空"值
xhr.send(null);
\`\`\`
#
-----------------------------------------------
#
### .onload
#
* .responseText
    * 取得伺服器回傳的"字串"資料。
    * 使用\`JSON.parse()\`，來解析回傳的資料。
#
* .status
    * 可以取得HTTP狀態碼。
#
|HTTP狀態碼|說明|
|---|---|
|200|請求成功並返回了所需的結果。|
|201|請求已成功並且創建了一個新的資源。|
|204|請求成功，但沒有返回任何內容（例如刪除資源時常見）。|
|301|請求的資源已被永久移動到新的 URL，未來的請求應該使用新的 URL。|
|302|請求的資源臨時移動，將來可能會還原，通常是瀏覽器自動跳轉。|
|304|請求的資源未被修改過，瀏覽器可以使用快取中的版本。|
|400|請求格式錯誤，服務器無法理解。|
|401|請求缺少身份驗證或身份驗證無效，通常表示需要登入。|
|403|服務器理解請求，但拒絕執行它，通常是權限不足。|
|404|找不到請求的資源，這是最常見的錯誤之一。|
|405|請求使用的 HTTP 方法（例如 GET、POST）不被目標資源支持。|
|500|服務器遇到未預期的情況，無法處理請求。|
|502|服務器作為網關或代理時，從上游伺服器獲得無效響應。|
|503|服務器目前無法處理請求，通常是因為過載或正在維護。|
|504|服務器作為網關或代理時，未能從上游伺服器獲得及時響應。|
#
\`\`\`js
xhr.onload = function(){
    if(xhr.status == 200){
        //將得到的轉為JSON格式
        let str = JSON.parse(xhr.responseText);
        console.log(str);
    }else{
        console.log("取得失敗")
    }
}
\`\`\`
#
-----------------------------------------------
#
## XMLHttpRequest 取得訊息
#
\`\`\`html
<div class="message"></div>
\`\`\`
#
\`\`\`js
let message = document.querySelector(".message");

let xhr = new XMLHttpRequest();

console.log(xhr.readyState); //0：成功建立new XMLHttpRequest()

xhr.open("get","https://hexschool.github.io/ajaxHomework/data.json",true);

console.log(xhr.readyState); //1：使用了open()，但還沒有send()

xhr.send(null);

console.log(xhr.readyState); 

//2：偵測到使用send()
//3：loading中
//4：已成功撈到資料

xhr.onload = function(){
    if(xhr.status == 200){
        let str = JSON.parse(xhr.responseText);
        //在頁面上顯示值
        message.textContent = str.[0].name;
    }else{
        console.log("資料錯誤！！")
    }
}
\`\`\`
#
#### 輸出結果：
#
\`\`\`html
<div class="message">王小名</div>
\`\`\`
#
\`正常情況下都會使用true非同步載入資料，因為資料龐大頁面會載入很久\`
#`,__vite_glob_0_11=Object.freeze(Object.defineProperty({__proto__:null,default:_20210209JavaScript___AJAX__},Symbol.toStringTag,{value:"Module"})),_20210210JavaScript_____=`---
title: 【JS】驗證表單
date: 2021-02-10
tags: ["javaScript"]
---
#
## POST註冊表單(application/x-www-form-urlencoded)
#
<!--more-->
#
\`\`\`html
<label for="email">帳號：</label>
<input class="email" id="email" type="email" name="email">
<br>
<label for="password">密碼：</label>
<input class="password" id="password" type="password" name="password">
<br>
<button class="send" type="submit">送出</button>
<!-- 1.帳號輸入：jack@gmail.com -->
<!-- 2.密碼輸入：abc123456 -->
<!-- 3.點擊送出按鈕 -->
<!-- 4.瀏覽器網址列會出現：https://cdpn.io/pen/debug/index.html?account=jack&password=abc123456-->
\`\`\`
#
\`\`\`js
let send = document.querySelector(".send");
let email = document.querySelector(".email");
let password = document.querySelector(".password");

send.addEventListener("click",function(){

  let xhr = new XMLHttpRequest();
  xhr.open("POST","https://escape-room.hexschool.io/api/user/signup",true);

  //設置提交表單格式
  xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");

  let emailValue = email.value;
  let passwordValue = password.value;

  //組字串"email=jack@gmail.com&password=abc123456"
  let totalValue = "email="+emailValue+"&"+"password="+passwordValue;

  xhr.send(totalValue);
  xhr.onload = function(){
    let callBackData = JSON.parse(xhr.responseText);
    alert(callBackData.message);
  }
});
\`\`\`
#
-----------------------------------------------
#
## POST註冊表單(application/json)
#
\`\`\`html
<label for="email">帳號：</label>
<input class="email" id="email" type="email" name="email">
<br>
<label for="password">密碼：</label>
<input class="password" id="password" type="password" name="password">
<br>
<button class="send" type="submit">送出</button>
\`\`\`
#
\`\`\`js
let send = document.querySelector(".send");
let email = document.querySelector(".email");
let password = document.querySelector(".password");

send.addEventListener("click",function(){
  
  let emailVal = email.value;
  let passwordVal = password.value;

  //組成JSON格式，建議：去比對後端的資料格式
  let account = {};
  account.email = emailVal;
  account.password = passwordVal;
  
  let xhr = new XMLHttpRequest();
  xhr.open("POST","https://escape-room.hexschool.io/api/user/signup",true);

  //設置提交JSON字串符
  xhr.setRequestHeader("Content-type","application/json");

  //將JSON轉成字串
  let data = JSON.stringify(account);
  xhr.send(data);

  xhr.onload = function(){

    //將取得的字串轉成JSON
    let callBackData = JSON.parse(xhr.responseText);
    alert(callBackData.message);
  }
});
\`\`\`
#
\`登入api：https://escape-room.hexschool.io/api/user/signup\`
#
-----------------------------------------------
#
## Chrome開發人員工具檢視POST資料
#
* Chrome→"右鍵"→"檢查"→"Network"→"Header"
#
![圖片](/img/驗證表單/驗證表單-1.png)
#
* Chrome→"右鍵"→"檢查"→"Network"→"Payload"
#
![圖片](/img/驗證表單/驗證表單-2.png)
#
* Chrome→"右鍵"→"檢查"→"Network"→"Preview"
#
![圖片](/img/驗證表單/驗證表單-3.png)
#
* Chrome→"右鍵"→"檢查"→"Network"→"Response"
#
![圖片](/img/驗證表單/驗證表單-4.png)
#`,__vite_glob_0_12=Object.freeze(Object.defineProperty({__proto__:null,default:_20210210JavaScript_____},Symbol.toStringTag,{value:"Module"})),_20210221JavaScriptGoogle_Maps_API=`---
title: 【JS】Google Maps API
date: 2021-02-21
tags: ["javaScript"]
---
#
## 應用程式介面(Application Programming Interface)
#
<!--more-->
#
* 簡稱API。
#
* 應用程式提供的服務，用來接收或傳送資料給應用程式。例如 :

    * [Heroku](https://www.heroku.com/)，主機服務。

    * [GoogleMap](https://cloud.google.com/)，地圖導覽服務。

    * [Firebase](https://firebase.google.com/)，資料庫服務
#
-----------------------------------------------
#
## Google Map API
#
1. 在Google雲端平台創建一個帳戶(需綁定一張信用卡)。(不會自動收取費用，除非手動升級)
#
2. 在雲端平台上建立一個專案。
#
3. 點擊"地圖管理"→"CREATE NEW MAP ID"，新建一個ID。
#
4. 點擊"地圖樣式"→"CREATE NEW MAP STYLE"，新建一個地圖樣式。
#
5. 點擊"解決方案建構工具"→"將程式碼複製到剪貼簿"。
#
6. 貼到編輯器上，開始建置地圖。
#
-----------------------------------------------
#
### 初始化地圖
#
* 以夢時代為顯示中心。
#
\`\`\`js
// <-----html----->
div#map
  script(src="https://maps.googleapis.com/maps/api/js?key={{{API金鑰}}}&callback=initMap&libraries=&v=weekly" defer)

// <-----css----->
#map
  height: 100%

html,body
  height: 100%
  margin: 0
  padding: 0

// <-----js----->
function initMap(){
//初始化
   const map = new google.maps.Map(document.getElementById("map"), {
  //新增一張地圖
    zoom: 15,
    //縮放距離1~22
    center:{lat: 22.5948959,lng: 120.3048485},
    //起始中心點位置
  });
}
\`\`\`
#
-----------------------------------------------
#
### 建立一個Marker
#
* 建立夢時代marker。
#
\`\`\`js
// <-----js----->
function initMap(){
   const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center:{lat: 22.5948959,lng: 120.3048485},
  });
  const marker = new google.maps.Marker({
  //新增一個marker
    position: {lat: 22.5948959,lng: 120.3048485},
    //marker的座標位置
    map: map,
    //顯示在哪張地圖上
    title: "Dream Mall"
    //marker的位置名稱
  });
};
\`\`\`
#
-----------------------------------------------
#
### 利用for迴圈建立多個Marker
#
* 建立台鋁MLD以及夢時代marker。
#
\`\`\`js
// <-----js----->
function initMap(){
   const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center:{lat: 22.5948959,lng: 120.3048485},
  });
  let markers = [
    {
      position:{lat: 22.5948959,lng: 120.3048485},
      map: map,
      title: "Dream Mall"
    },
    {
      position:{lat: 22.6029083,lng: 120.301739},
      map: map,
      title: "MLD"
    },
  ]
  for(let i=0;i<markers.length;i++){
    let marker = new google.maps.Marker(markers[i]);
  }
};
\`\`\`
#
-----------------------------------------------
#
### 利用for迴圈建立多個Marker + ajax
#
* 建立高雄所有輕軌站marker。
#
\`\`\`js
// <-----js----->
function initMap(){
  const map = new google.maps.Map(
    document.getElementById("map"), 
    {
    zoom: 13,
    center: {lat: 22.5985275,lng: 120.3237249}
    }
  );
  let xhr = new XMLHttpRequest();
  xhr.open("GET","https://data.kcg.gov.tw/dataset/f4375239-af26-40f6-8394-d942f3ecf753/resource/ad36b1f2-8a2c-4491-a516-da607bd96c39/download/light-rail-station.json");
  xhr.send(null);
  xhr.onload = function(){
    let data = JSON.parse(xhr.responseText);
    for(let i=0 ; i<data.length ; i++){
      let lng = data[i].Longitude;
      let lat = data[i].Latitude;
      let title = data[i]["車站中文名稱"];
      let markers = new google.maps.Marker(
        {
          position: {lng: lng,lat: lat},
          map: map,
          title: title
        }
      )
    }
  }
};
\`\`\`
#
-----------------------------------------------
#
### 自訂marker樣式
#
\`\`\`js
// <-----js----->
function initMap(){
   const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: {lat: 22.5985275,lng: 120.3237249},
  });
  const marker = new google.maps.Marker({
    position: {lat: 22.5985275,lng: 120.3237249},
    map: map,
    title: "住家",
    //marker樣式
    icon: "https://i.imgur.com/7ZAeTg4.png"
  })
};
\`\`\`
#
-----------------------------------------------
#
### 套用styles樣式
#
* [SNAZZY MAPS](https://snazzymaps.com/)網站，有提供許多Google Maps的樣式，可以拿來套用。
#
\`\`\`js
// <-----js----->
function initMap(){
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center:{lat: 22.5948959,lng: 120.3048485},
    //設定樣式
    styles:[
      {
        "elementType": "labels",
        "stylers": [{"visibility": "off"},{"color": "#f49f53"}]
      },
      {
        "featureType": "landscape",
        "stylers": [{"color": "#f9ddc5"},{"lightness": -7}]
      },
      {
        "featureType": "road",
        "stylers": [{"color": "#813033"},{"lightness": 43}]
      },
      {
        "featureType": "poi.business",
        "stylers": [{"color": "#645c20"},{"lightness": 38}]
      },
      {
        "featureType": "water",
        "stylers": [{"color": "#1994bf"},{"saturation": -69},{"gamma": 0.99},{"lightness": 43}]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [{"color": "#f19f53"},{"weight": 1.3},{"visibility": "on"},{"lightness": 16}]
      },
      {
        "featureType": "poi.business"
      },
      {
        "featureType": "poi.park",
        "stylers": [{"color": "#645c20"},{"lightness": 39}]
      },
      {
        "featureType": "poi.school",
        "stylers": [{"color": "#a95521"},{"lightness": 35}]
      },
      {
        "featureType": "poi.medical",
        "elementType": "geometry.fill",
        "stylers": [{"color": "#813033"},{"lightness": 38},{"visibility": "off"}]
      },
      {
        "elementType": "labels"
      },
      {
        "featureType": "poi.sports_complex",
        "stylers": [{"color": "#9e5916"},{"lightness": 32}]
      },
      {
        "featureType": "poi.government",
        "stylers": [{"color": "#9e5916"},{"lightness": 46}]
      },
      {
        "featureType": "transit.station",
        "stylers": [{"visibility": "off"}]
      },
      {
        "featureType": "transit.line",
        "stylers": [{"color": "#813033"},{"lightness": 22}]
      },
      {
        "featureType": "transit",
        "stylers": [{"lightness": 38}]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [{"color": "#f19f53"},{"lightness": -10}]
      },
    ]
  });
};
\`\`\``,__vite_glob_0_13=Object.freeze(Object.defineProperty({__proto__:null,default:_20210221JavaScriptGoogle_Maps_API},Symbol.toStringTag,{value:"Module"})),_20210223JavaScript___Array__=`---
title: 【JS】操作Array方法
date: 2021-02-23
tags: ["javaScript"]
---
#
## 新增陣列
#
<!--more-->
#
*  **.push** (要新增的東西)，新增到陣列最後方。
#
\`\`\`js
let a = ["蘋果","香蕉","鳳梨"];
a.push("芭樂");
console.log(a);  //["蘋果","香蕉","鳳梨","芭樂"]
\`\`\`
#
*  **.unshift** (要新增的東西)，新增到陣列最前方。
#
\`\`\`js
let a = ["蘋果","香蕉","鳳梨"];
a.unshift("芭樂");
console.log(a);  //["芭樂","蘋果","香蕉","鳳梨"]
\`\`\`
#
*  **.concat** (要新增的東西)，新增到陣列最後方。
#
\`\`\`js
let a = ["蘋果","香蕉","鳳梨"];
let b = a.concat("芭樂");
console.log(b);  //["蘋果","香蕉","鳳梨","芭樂"]
\`\`\`
#
-----------------------------------------------
#
## 刪除陣列
#
*  **.pop()** ，刪除陣列最後一項。
#
\`\`\`js
let a = ["蘋果","香蕉","鳳梨"];
a.pop();
console.log(a);  //["蘋果","香蕉"]
\`\`\`
#
*  **.shift()** ，刪除陣列第一項。
#
\`\`\`js
let a = ["蘋果","香蕉","鳳梨"];
a.shift();
console.log(a);  //["香蕉","鳳梨"]
\`\`\`
#
*  **.splice** (從第幾項開始刪除,刪到第幾項)。
#
\`\`\`js
let a = ["蘋果","香蕉","鳳梨"];
a.splice(1,2);
console.log(a);  //["蘋果"]
\`\`\`
#
-----------------------------------------------
#
## 抓出陣列
#
*  **.pop()** ，抓出陣列最後一項。
#
\`\`\`js
let a = ["蘋果","香蕉","鳳梨"];
let b = a.pop();
console.log(a);  //鳳梨
\`\`\`
#
*  **.shift()** ，抓出陣列第一項。
#
\`\`\`js
let a = ["蘋果","香蕉","鳳梨"];
let b = a.shift();
console.log(a);  //蘋果
\`\`\`
#
*  **.slice** (從第幾項開始抓,抓到第幾項)。
#
\`\`\`js
let a = ["蘋果","香蕉","鳳梨"];
let b = a.slice(1,2);
console.log(b);  //香蕉
\`\`\`
#
-----------------------------------------------
#
## 複製陣列
#
*  **.copyWithin** (從第幾項後開始重複)。
#
\`\`\`js
let a = ["蘋果","香蕉","鳳梨"];
a.copyWithin(1);
console.log(a);  //["蘋果", "蘋果", "香蕉"]
\`\`\`
#
*  **.copyWithin** (複製貼上在第幾項,從第幾項開始複製,複製到第幾項結束)。
#
\`\`\`js
let a = ["蘋果","香蕉","鳳梨"];
a.copyWithin(0,2,3);
console.log(a);  //["鳳梨","香蕉","鳳梨"]
\`\`\`
#
-----------------------------------------------
#
## 替換陣列
#
*  **.fill** (要替換陣列的東西)。
#
\`\`\`js
let a = ["蘋果","香蕉","鳳梨"];
a.fill("芭樂");
console.log(a);  //["鳳梨","香蕉","鳳梨"]
\`\`\`
#
*  **.fill** (要替換陣列的東西,從第幾項開始替換,替換到第幾項結束)。
#
\`\`\`js
let a = ["蘋果","香蕉","鳳梨"];
a.fill("芭樂",2,3);
console.log(a);  //["蘋果","香蕉","芭樂"]
\`\`\`
#
-----------------------------------------------
#
## 合併陣列
#
*  **.concat()** ，將兩個陣列合併。
#
\`\`\`js
let a = ["蘋果","香蕉","鳳梨"];
let b = ["芭樂","蓮霧"];
let c = a.concat(b);
console.log(c);  //["蘋果","香蕉","鳳梨","芭樂","蓮霧"]
\`\`\`
#
-----------------------------------------------
#
## 將陣列轉為字串
#
*  **.join()** ，將陣列轉為字串。
#
\`\`\`js
let a = ["蘋果","香蕉","鳳梨"];
let b = a.join();
console.log(b);  //"蘋果,香蕉,鳳梨"
\`\`\`
#
*  **.join** (放入要插入的值)，可插入空白。
#
\`\`\`js
let a = ["蘋果","香蕉","鳳梨"];
let b = a.join("&");
console.log(b);  //"蘋果&香蕉&鳳梨"
\`\`\`
#
*  **.toString()** ，將陣列轉為字串。
#
\`\`\`js
let a = ["蘋果","香蕉","鳳梨"];
let b = a.toString();
console.log(b);  //"蘋果,香蕉,鳳梨"
\`\`\`
#
-----------------------------------------------
#
## 將字串轉為陣列
#
*  **Array.of** (要轉成陣列的東西)。
#
\`\`\`js
let a = "蘋果";
let b = Array.of(a);
console.log(b);  //["蘋果"]
\`\`\`
#
*  **Array.from** (要轉成陣列的東西)。
#
\`\`\`js
let a = "蘋果";
let b = Array.from(a);
console.log(b);  //["蘋","果"]
\`\`\`
#
-----------------------------------------------
#
## 尋找陣列裡的值
#
*  **.indexOf** (要尋找的東西)，若找到會回傳[位置]。
#
\`\`\`js
let a = ["蘋果","香蕉","鳳梨"];
let b = a.indexOf("香蕉");
console.log(b);  //1
\`\`\`
#
*  **.indexOf()** ，若找不到，會回傳[-1]。
#
\`\`\`js
let a = ["蘋果","香蕉","鳳梨"];
let b = a.indexOf("芭樂");
console.log(b);  //-1
\`\`\`
#
*  **.includes** (要尋找的東西)，若找到會回傳[true]。
#
\`\`\`js
let a = ["蘋果","香蕉","鳳梨"];
let b = a.includes("蘋果");
console.log(b);  //true
\`\`\`
#
*  **.includes()** ，若找不到，會回傳[false]。
#
\`\`\`js
let a = ["蘋果","香蕉","鳳梨"];
let b = a.includes("芭樂");
console.log(b);  //false
\`\`\`
#
*  **.lastIndexOf** (要尋找的東西)，若找到會回傳[位置]。
#
\`\`\`js
let a = ["蘋果","香蕉","鳳梨"];
let b = a.lastIndexOf("鳳梨");
console.log(b);  //2
\`\`\`
#
-----------------------------------------------
#
## 判斷是否為陣列
#
*  **Array.isArray()** ，可以判斷是否為陣列，如果不是就回傳[false]。
#
\`\`\`js
let a = "蘋果";
let b = Array.isArray(a);
console.log(b);  //false
\`\`\`
#
*  **Array.isArray()** ，可以判斷是否為陣列，如果是就回傳[true]。
#
\`\`\`js
let a = [2,8,6,0,4];
let b = Array.isArray(a);
console.log(b);
\`\`\`
#
-----------------------------------------------
#
## 改變陣列的排序
#
*  **.reverse()** ，反轉整個陣列。
#
\`\`\`js
let a = [2,8,6,0,4];
a.reverse();
console.log(a);  //[4,0,6,8,2]
\`\`\`
#
*  **.sort()** ，將陣列數值由小排到大。
#
\`\`\`js
let a = [2,8,6,0,4];
a.sort((x,y) => x - y);
console.log(a);  //[0,2,4,6,8]
\`\`\`
#
*  **.sort()** ，將陣列數值由大排到小。
#
\`\`\`js
let a = [2,8,6,0,4];
a.sort((x,y) => y - x);
console.log(a);  //[8,6,4,2,0]
\`\`\`
#
-----------------------------------------------
#
## 找出陣列裡符合條件的值
#
*  **.find()** ，找出陣列裡第一個符合條件的值，若找到會回傳[值]。
#
\`\`\`js 
let a = [2,8,6,0,4];
let b = a.find(item => item > 5);
console.log(b);  //8
\`\`\`
#
*  **.find()** ，若找不到符合的值，會回傳[undefined]。
#
\`\`\`js 
let a = [2,8,6,0,4];
let b = a.find(item => item > 10);
console.log(b);  //undefined
\`\`\`
#
*  **.findIndex()** ，找出陣列裡第一個符合條件的值，若找到會回傳[位置]。
#
\`\`\`js
let a = [2,8,6,0,4];
let b = a.findIndex(item => item > 5);
console.log(b);  //1
\`\`\`
#
*  **.findIndex()** ，若找不到符合的值，會回傳[-1]。
#
\`\`\`js
let a = [2,8,6,0,4];
let b = a.findIndex(item => item > 10);
console.log(b);  //-1
\`\`\`
#
*  **.every()** ，判斷陣列裡每一個值，如果全部符合條件就回傳[true]。
#
\`\`\`js
let a = [2,8,6,0,4];
let b = a.every(item => item < 10);
console.log(b);  //true
\`\`\`
#
*  **.every()** ，判斷陣列裡每一個值，如果有一項不符合條件就回傳[false]。
#
\`\`\`js
let a = [2,8,6,0,4];
let b = a.every(item => item > 2);
console.log(b);  //false
\`\`\`
#
*  **.some()** ，判斷陣列裡每一個值，只要有其中一項符合條件就回傳[true]。
#
\`\`\`js
let a = [2,8,6,0,4];
let b = a.some(item => item > 7);
console.log(b);  //true
\`\`\`
#
*  **.some()** ，判斷陣列裡每一個值，全都不符合條件才會回傳[false]。
#
\`\`\`js
let a = [2,8,6,0,4];
let b = a.some(item => item > 10);
console.log(b);  //false
\`\`\`
#
-----------------------------------------------
#
## 過濾陣列裡不符合條件的值
#
*  **.filter()** ，過濾掉陣列裡不符合條件的數值，回傳[陣列]。
#
\`\`\`js
let a = [2,8,6,0,4];
let b = a.filter((item) => item > 5);
console.log(b);  //[8,6]
\`\`\`
#
*  **.filter()** ，過濾掉陣列裡不符合條件的字串，回傳[陣列]。
#
\`\`\`js
let a = [2,8,6,0,4];
let b = a.filter((item) => item < 6);
console.log(b);  //[2,0,4]
\`\`\`
#
-----------------------------------------------
#
## 對陣列裡的每一項進行運算
#
*  **.map()** ，判斷陣列裡的每一個值，回傳[陣列]。
#
\`\`\`js
let a = [2,8,6,0,4];
let b = a.map(item => item > 5);
console.log(b);  //[false,true,true,false,false]
\`\`\`
#
*  **.map()** ，運算陣列裡每一個值，回傳[陣列]。
#
\`\`\`js
let a = [2,8,6,0,4];
let b = a.map(item => item + 1);
console.log(b);  //[3,9,7,1,5]
\`\`\`
#
-----------------------------------------------
#
## 加總陣列
#
*  **.reduce()** ，將陣列裡的值全部加總，回傳[值]。
#
\`\`\`js
let a = [2,8,6,0,4];
let b = a.reduce((x,y) => x+y);
console.log(b);  //20
\`\`\`
#
*  **.reduce()** ，將陣列裡的值全部相減，回傳[值]。
#
\`\`\`js
let a = [2,8,6,0,4];
let b = a.reduce((x,y) => x-y);
console.log(b);  //-16
\`\`\`
#
*  **.reduceRight()** ，將陣列裡的值全部相減(反向)，回傳[值]。
#
\`\`\`js
let a = [2,8,6,0,4];
let b = a.reduceRight((x,y) => x-y);
console.log(b);  //-12
\`\`\`
#
-----------------------------------------------
#
## 展開陣列
#
*  **.flat** (要展開幾層陣列)。
#
\`\`\`js
let a = [2,8,6,0,4,[1,[3],5]];
let b = a.flat();
console.log(b);  //[2,8,6,0,4,1,[3],5]
\`\`\`
#
*  **.flat(Infinity)** ，可以展開多層陣列。
#
\`\`\`js
let a = [2,8,6,0,4,[1,[3],5]];
let b = a.flat(Infinity);
console.log(b);  //[2,8,6,0,4,1,3,5]
\`\`\`
#
*  **.flatMap()** ，.flat()+.map()，將展開的陣列進行操作。
#
\`\`\`js
let a = [2,8,6,0,4,[1,[3],5]];
let b = a.flatMap(item => item + 3);
console.log(b);  //[5,11,9,3,7,"1,3,53"]
\`\`\`
#
-----------------------------------------------
#
## 取得列印陣列每一項
#
*  **key...of** ，列印陣列每一項位置為[數值]。
#
\`\`\`js
let a = [2,8,6,0,4];
for(let key of a.keys()){
  console.log(key);  //0  //1  //2  //3  //4
}
\`\`\`
#
*  **key...in** ，列印陣列每一項位置為[字串]。
#
\`\`\`js
let a = [2,8,6,0,4];
for(let key in a){
  console.log(key);  //"0"  //"1"  //"2"  //"3"  //"4"
}
\`\`\`
#
* .forEach()，列印出陣列每一項以及每一項位置。
#
\`\`\`js
let a = [2,8,6,0,4];
a.forEach(function(item,i){
  console.log(i);  //0  //1  //2  //3  //4
})
\`\`\`
#
* for迴圈。
#
\`\`\`js
let a = [2,8,6,0,4];
for(let i=0 ; i<a.length ; i++){
  console.log(a[i]);  //0  //1  //2  //3  //4
}
\`\`\``,__vite_glob_0_14=Object.freeze(Object.defineProperty({__proto__:null,default:_20210223JavaScript___Array__},Symbol.toStringTag,{value:"Module"})),_20210224JavaScript___AJAX__=`---
title: 【JS】封裝AJAX請求
date: 2021-02-24
tags: ["javaScript"]
---
#
## 建立Promise 
#
<!--more-->
#
1.  **Promise** 是一個函式物件，需要用函式來建構。

    *  **PromiseState**  : 狀態。

    *  **PromiseValue**  : 回傳的值。

2. 需要帶入兩個參數 **resolve**  : 成功， **reject**  : 失敗。

3. 在 **非同步事件* 之後才會執行結果。

4. 需要用 **.then()**  : 顯示成功的結果， **catch()**  : 顯示失敗的結果。
#
\`\`\`js
function promiseFn(item){  //1.
  return new Promise((resolve,reject)=>{  //2.
    setTimeout(()=>{  //3.
      if(item){
        resolve("成功");  
      }else{
        reject("失敗");
      }
    },1000)
  })
}
promiseFn(1)
  .then((res)=>{  //4.
    console.log(res);
  })
  .catch((rej)=>{  //4.
    console.log(rej);
  })
\`\`\`
#
* 用.then(第一個參數接收resolve,第二的參數接收reject)。
#
\`\`\`js
function promiseFn(item){
  return new Promise((resolve,reject)=>{ 
    setTimeout(()=>{  
      if(item){
        resolve("成功");  
      }else{
        reject("失敗");
      }
    },1000)
  })
}
promiseFn(1)
  .then((res)=>{ 
    console.log(res);
  },(rej)=>{ 
    console.log(rej);
  })
\`\`\`
#
-----------------------------------------------
#
## Promise chain
#
* 串聯多個 **promise** ，若有其中 **.then()** 不成立，則直接跳至 **.catch()** 。
#
\`\`\`js
function promiseFn(item){  
  return new Promise((resolve,reject)=>{  
    setTimeout(()=>{  
      if(item){
        resolve("成功");  
      }else{
        reject("失敗");
      }
    },1000)
  })
}
promiseFn(1)
  .then((res)=>{  
    console.log("一號成功");  //一號成功
    return promiseFn(2)
  })
  .then((res)=>{
    console.log("二號成功");  //二號成功
    return promiseFn(3)
  })
  .then((res)=>{
    console.log("三號成功");  //三號成功
    return promiseFn(0);
  })
  .then((res)=>{
    console.log("四號成功");
  })
  .catch((rej)=>{  
    console.log("失敗");  //一號成功
  })
\`\`\`
#
* 使用 **.then()** 來顯示，失敗或是成功的結果。
#
\`\`\`js
function promiseFn(item){  
  return new Promise((resolve,reject)=>{  
    setTimeout(()=>{  
      if(item){
        resolve("成功");  
      }else{
        reject("失敗");
      }
    },1000)
  })
}
promiseFn(1)
  .then((res)=>{  
    console.log("一號成功");  //一號成功
    return promiseFn(2)
  },(rej)=>{  
    console.log("一號失敗");
    return promiseFn(2)
  })

  .then((res)=>{  
    console.log("二號成功");  //二號成功
    return promiseFn(3)
  },(rej)=>{  
    console.log("二號失敗");
    return promiseFn(3)
  })

  .then((res)=>{  
    console.log("三號成功");  //三號成功
    return promiseFn(0)
  },(rej)=>{  
    console.log("三號失敗");
    return promiseFn(0)
  })

  .then((res)=>{  
    console.log("四號成功");  
  },(rej)=>{  
    console.log("四號失敗");  //四號失敗
  })
\`\`\`
#
-----------------------------------------------
#
## Promise.all
#
* 將全部使用陣列方式帶入參數，如果全部都成功執行後，才會執行接下來要執行的的結果，
#
\`\`\`js
function promiseFn(item){  
  return new Promise((resolve,reject)=>{  
    setTimeout(()=>{  
      if(item){
        resolve("成功");  
      }else{
        reject("失敗");
      }
    },1000)
  })
}

Promise.all([
  promiseFn(1),
  promiseFn(2),
  promiseFn(3)
])
.then((res)=>{
  console.log(res);  //["成功","成功","成功"]
})
\`\`\`
#
* 若其中有失敗的結果，則直接跳至.catch()。
#
\`\`\`js
function promiseFn(item){  
  return new Promise((resolve,reject)=>{  
    setTimeout(()=>{  
      if(item){
        resolve("成功");  
      }else{
        reject("失敗");
      }
    },1000)
  })
}

Promise.all([
  promiseFn(1),
  promiseFn(2),
  promiseFn(0)
])
.then((res)=>{
  console.log(res);
})
.catch((rej)=>{
  console.log(rej);  //失敗
})
\`\`\`
#
-----------------------------------------------
#
## Promise.race
#
* 將全部都成功執行後，才執行接下來要執行的的動作，但只執行最快完的成功。
#
\`\`\`js
function promiseFn(item){  
  return new Promise((resolve,reject)=>{  
    setTimeout(()=>{  
      if(item){
        resolve("成功");  
      }else{
        reject("失敗");
      }
    },1000)
  })
}

Promise.race([
  promiseFn(1),
  promiseFn(2),
  promiseFn(3)
])
.then((res)=>{
  console.log(res);  //成功
})
\`\`\`
#
* 若最快完成的是失敗，則後續的成功不會顯示。
#
\`\`\`js
function promiseFn(item){  
  return new Promise((resolve,reject)=>{  
    setTimeout(()=>{  
      if(item){
        resolve("成功");  
      }else{
        reject("失敗");
      }
    },1000)
  })
}

Promise.race([
  promiseFn(0),
  promiseFn(2),
  promiseFn(3)
])
.then((res)=>{
  console.log(res);  
})
.catch((rej)=>{
  console.log(rej);  //失敗
})
\`\`\`
#
-----------------------------------------------
#
## 使用Random User API取得假人頭資料
#
* 取得資料[假人頭資料](https://randomuser.me/)範例。
#
\`\`\`js
let url = "https://randomuser.me/api/";
$.ajax({
  url: url,
}).done(function(data){
  let name = \`\${data.results[0].name.title} \${data.results[0].name.first}\`;
  //名字
  let sex = \`\${data.results[0].gender}\`;
  //性別(male:男人、female:女人)
  let age = \`\${data.results[0].dob.age}\`;
  //年齡
  let born = \`\${data.results[0].dob.date}\`;
  //出生日期
  let telePhone = \`\${data.results[0].cell}\`;
  //電話號碼
  let cellPhone = \`\${data.results[0].phone}\`;
  //手機號碼
  let email = \`\${data.results[0].email}\`;
  //信箱
  let address = \`\${data.results[0].location.street.number} \${data.results[0].location.street.name} \${data.results[0].location.city} \${data.results[0].location.state} \${data.results[0].location.country}\`;
  //地址
  let src = \`\${data.results[0].picture.large}\`;
  //大頭貼
})
\`\`\`
#
-----------------------------------------------
#
## 取得相同資料
#
1. 先取得資料裡的seed[序號]。

2. 將序號代入在https://randomuser.me/api/?seed=[序號]。

3. 載入https://randomuser.me/api/?seed=[序號]。
#
\`\`\`js
/** jQuery方法 **/
let url = "https://randomuser.me/api/";
$.ajax({
  url: url,
}).done(function(data){
  let seed = data.info.seed;
  console.log(seed);
  $.ajax({
    url: \`\${url}?seed=\${seed}\`,
  }).done(function(data){
    let seed = data.info.seed;
    console.log(seed);
  })
});

/** axios方法 **/
let url = "https://randomuser.me/api/";
axios.get(url)
  .then((data1)=>{
    let seed1 = data1.data.info.seed;
    console.log(seed1);
    return axios.get(\`\${url}?seed=\${seed1}\`)
      .then((data2)=>{
        let seed2 = data2.data.info.seed;
        console.log(seed2);
      })
  })
\`\`\``,__vite_glob_0_15=Object.freeze(Object.defineProperty({__proto__:null,default:_20210224JavaScript___AJAX__},Symbol.toStringTag,{value:"Module"})),_20210301JavaScript___JavaScript=`---
title: 【JS】認識JavaScript
date: 2021-03-01
tags: ["javaScript"]
---
#
## 直譯式語言(Interpreted Language)
#
<!--more-->
|例如|JavaScript、Python、PHP、Ruby、BASIC、LISP、Perl、R|
|---|---|
|流程|原始碼 → 直譯器 → 代碼生成 → 執行|
|特性|程式碼由上到下執行，效能比較差、除錯比較慢、需要依賴執行環境。|
#
-----------------------------------------------
#
## 編譯式語言(Compiled Language)
#
|例如|Java、C、C#、C++、Pascal|
|---|---|
|流程|原始碼 → 預處理器 → 代碼生成 → 執行|
|特性|效能比較好、除錯比較快、程式碼可獨立執行。|
#
-----------------------------------------------
#
## 語法作用域(Lexical Scope)
#
* 語法在解析時就決定作用域，且不再改變。
#
\`\`\`js
function fn1(){
    let a = 1; 
}
fn1();
console.log(a);   //a is not defined
//因為console.log(a)不在function內
//而全域並無宣告a變數，因此console.log找不到
\`\`\`
#
-----------------------------------------------
#
## 單執行緒(Single Thread)
#
* 同步事件會依序執行，而非同步事件會先移到 **事件佇列(Event Queue)** ，等待其他事件執行完才會執行。

    * setTimeout(範例一)

    * addEventListener(範例二)
#
\`\`\`js
/** 範例一 **/
function fn1(){
  setTimeout(function(){
    console.log("蘋果");
  },3000);
}
function fn2(){
  console.log("香蕉");
}
function fn3(){
  console.log("鳳梨");
}
fn1();
fn2();
fn3();
//console.log出現順序:"香蕉"、"鳳梨"、"蘋果"
//但因為fn1()裡的setTimeout屬於非同步事件
//會在事件佇列，等到fn2()、fn3()執行完才執行

/** 範例二 **/
let a = document.getElementById("button");
a.addEventListener("click",function(){
  c
});
\`\`\`
#
-----------------------------------------------
#
## 執行環境(Execution Context)
#
* 全域環境

    * 瀏覽器開啟時產生的 **window** 。

    * **window**  ===  **this** 。
    
* 區域環境

    * 在函式 **(function)** 內，會產生自己的 **this** 。

    * 可以重複被執行產生環境。
#
-----------------------------------------------
#
## 執行堆疊(Execution stack)
#
1. 全域環境最先堆疊，再來依序堆疊區域環境。
#
2. 區域環境依序結束，最後留下全域執行環境。
#
\`\`\`js
function fn1(){
  fn2();
}
function fn2(){
  let a = 1;
  console.log(a);
}
fn1();
//當瀏覽器開啟時...
//產生window執行環境(全域) → 
//fn1(); → 產生fn1執行環境(區域) → 
//fn2(); → 產生fn2執行環境(區域) → 
//fn2執行環境(區域)消失 → fn1執行環境(區域)消失 → 
//留下window執行環境(全域)
\`\`\`
#
-----------------------------------------------
#
## 範圍鍊(Scope Chain)
#
* 當函式本身沒有變數時，會向外層找到 **全域變數** 。(範例一)
#
* 當函式裡的函式本身沒有變數時，會向外層找到函式裡的變數。(範例二)
#
\`\`\`js
/** 範例一 **/
let a = 1;
function fn1(){
  let a = 2;
  fn2();
}
function fn2(){
  console.log(a);
}
fn1();
//console.log(a);  1
//因為fn2本身沒有變數，所以會向外找到全域的變數;

/** 範例二 **/
let a = 1;
function fn1(){
  let a = 2;
  function fn2(){
    console.log(a);  //2
  }
  fn2();
}
fn1();
//因為fn2本身沒有變數，所以會找向外層找到fn1的變數;
\`\`\`
#
-----------------------------------------------
#
## 提升(Hoisting)
#
* 在創造階段時，宣告變數、函式表達式會先存放在 **記憶體** 裡，還取不到值 **(undefined)** 。(範例一)
#
* 函式會優先於變數宣告。(範例二)
#
* 執行順序 : function > 宣告(let、const) > fn()。(範例三)
#
\`\`\`js
/** 範例一 **/
let apple; //創造階段
console.log(apple); 
apple = "蘋果";


/** 範例二 **/
let sayApple = function(){
  console.log("蘋果1")
}
function sayApple(){
  console.log("蘋果2")
}
sayApple(); //蘋果2

/** 範例三 **/
sayApple();
function sayApple(){
  console.log(apple);
}
let apple = "蘋果";

//------拆解過程如下-----
//創造
function sayApple(){
  console.log(apple);
}
let apple;

//執行階段
sayApple();
apple = "蘋果";

//因此console.log只找到宣告的apple 但並未賦予值，因此會出現ReferenceError(暫時性死區)錯誤
\`\`\`
#
-----------------------------------------------
#
## 回收機制(Garbage Collection)
#
* 當沒有任何物件參考時，物件的 **記憶體** 就會釋放掉。
#
\`\`\`js
function fn1(){
  fn2();
}
function fn2(){
  console.log("執行完畢");
}
fn1();
//在console.log("執行完畢");前...
//因沒有任何物件參考function fn1，所以記憶體它的也釋放掉了。
\`\`\`
#`,__vite_glob_0_16=Object.freeze(Object.defineProperty({__proto__:null,default:_20210301JavaScript___JavaScript},Symbol.toStringTag,{value:"Module"})),_20210302JavaScript______=`---
title: 【JS】運算與型別
date: 2021-03-02
tags: ["javaScript"]
---
#
## 陳述式(Statement)
#
<!--more-->
#
* 用於命令執行，不會回傳結果，不能賦值(=)到變數上。
#
|陳述式|例如|
|---|---|
|判斷式|if、else if、else、switch、break|
|宣告變數|var、let、const|
|函式陳述式|function fn1(){...}|
|Block區塊|{}|
#
\`\`\`js
/** 判斷式 **/
if(...){
  ...
}else{
  ...
}

/** 宣告變數 **/
var a;

/** 函式陳述式  **/
function fn1(){...}

/** Block區塊 **/
{
  let a = 1;
}
\`\`\`
#
-----------------------------------------------
#
## 表達式(Expression)
#
* 又稱 **表示式** 、 **運算式**，結合符號運算回傳結果 。
#
* 會運算及回傳結果。
#
|表達式|例如|
|---|---|
|函式表達式|var fn1 = function(){...}|
|物件實字|var obj1 = { a:1 }|
|一元運算式|只需要一個運算元|
|二元運算式|兩個運算元，一個運算子|
|三元運算式|三個運算元，兩個運算子|
#
\`\`\`js
/** 函式陳述式 **/
function fn1(){...}

/** 函式表達式 **/
let fn1 = function(){...}

/** 物件實字 **/
let obj1 = { a:1 }

/** 一元運算式 **/
delete a;
typeof a;

/** 二元運算式 **/
let a;
a = 1 + 1;
console.log(a);  //2
//先執行 1 + 1;
//再執行 a = 2;

/** 三元運算式 **/
let a = 1;
let b = ( a > 0 ) ? "蘋果" : "香蕉";
console.log(b);  //蘋果

//判斷式 ? 表達式1 : 表達式2 ;
//(判斷式)成立/不成立，執行{表達式1}/{表達式2}。
\`\`\`
#
-----------------------------------------------
#
## 優先性與相依性(Precedence＆Associativity)
#
1. 運算子會依照 **優先序** 大小來決定先後順序，大的先，小的後。
    * 乘號優先於加號
#
2. 當 **優先性** 相同時，依照 **相依性** 來決定執行方向。
#
|優先序|執行方向|運算子|
|---|---|---|
|20|無|( )|
|16|從右至左←|! 、 ++ 、 -- 、 typeof 、 delete|
|14|從左至右→|* 、 / 、 %|
|13|從左至右→|+ 、 -|
|11|從左至右→|< 、 <= 、 > 、 =>|
|10|從左至右→|== 、 != 、 === 、 !==|
|6|從左至右→|&&|
|5|從左至右→|ll|
|4|從右至左←|… ? … : …|
|3|從右至左←|= 、 += 、 -=|
|1|從左至右→|,|
#
\`\`\`js
/** 範例一 **/
var a = 2 * 2 + 2 * 3;
console.log(a);  //10
//2 * 2;  4
//2 * 3;  6
//4 + 6;  10

/** 範例二 **/
var a = 1 < 2 < 3;
console.log(a);  //true
//1 < 2;  true
//true < 3;  true; 

/** 範例三 **/
var a = 3 > 2 > 1;
console.log(a);  //false
//3 > 2;  true
//true > 1;  false
//因為在比對時true會變成1，所以1不會大於1

/** 範例四 **/
let a = 1;
let b = 2;
a = b = 3;
console.log(a,b); // 3,3
//3賦予到b的“回傳結果”; 
//b = 3; 
//a = b;
\`\`\`
#
-----------------------------------------------
#
## 嚴格相等與寬鬆相等(Strict Equals&Loose Equals)
#
* 型別都要相同，才相等。(範例一)
#
* 只要值相同就會相等。(範例二)
#
* true會變成 **1** ，false會變成 **0** 。(範例三)
#
* 字串與數字相比時會以包裹方式 **Number()** 。(範例四)
#
* 陣列會數字相比自動去掉 **[]** 。(範例五)
#
* 物件與物件相比時，會是false。(範例六)
#
\`\`\`js
/** 範例一 **/
console.log(1 === 1);  //true
console.log(1 === "1");  //false
console.log(1 === true);  //false

/** 範例二 **/
console.log(1 == 1);  //true

/** 範例三 **/
console.log(true == 1);  //true
console.log(false == 0); //true

/** 範例四 **/
console.log(1 == "1");  //true
console.log(1 == true);  //true
console.log("1" == true);  //true
console.log("0" == false);  //true
console.log(17 == "0x11");  //true
console.log('1' == !0);  //true

/** 範例五 **/
console.log(1 == ["1"]);  //true
console.log("1" == [1]);  //true
console.log([1] == true);  //true

/** 範例六 **/
console.log([] == []); //false
console.log({} == {});  //false

/** 例外案 **/
console.log(null == 0);  //false
console.log(undefined == 0)  //false
console.log(null == 0);  //false
console.log(null == undefined);  //true
console.log(+0 === -0);  //true
console.log(NaN === NaN);  //false

/** 進階範例 **/
console.log(a = 1 + 1 === 1);  //false
//1 + 1 = 2;
//2 === 1 = false;
//a = false;
\`\`\`
#
\`物件與非物件，使用包裹物件做轉換\`
#
-----------------------------------------------
#
## 判斷式(if...else)
#
* 判斷式裡如果是 **真值(Truthy)** ，就會成立。(範例一)
#
* 判斷式裡如果是 **假值(Falsy)** ，就會不成立。(範例二)
#
|判斷值|例如|
|---|---|
|真值|true 、 1 、 "1" 、 [] 、 {}|
|假值|false 、 0 、 "" 、 NaN 、 null 、 undefined|
#
\`\`\`js
/** 範例一 **/
if([]){
  console.log("蘋果");  //結果，因為[]是真值
}else{
  console.log("香蕉");
}

/** 範例二 **/
if(""){
  console.log("蘋果");
}else{
  console.log("香蕉");  //結果，因為""是假值
}

/** 特別案 **/
if(new Boolean(false)){
  console.log("蘋果"); //結果，因為{}是真值
}else{
  console.log("香蕉");  
}
\`\`\`
#
-----------------------------------------------
#
## 邏輯運算子(&&、||、!) 
#
|邏輯運算子|英文|中文|說明|
|---|---|---|---|
|&&|AND|而且|左邊是假值(false)回傳結果，是真值(true)回傳右邊|
|\\|\\||OR|或者|左邊是真值(true)回傳結果，是假值(false)回傳右邊|
|!|NOT|不|真值(true)變假值(false)，假值(false)變真值(true)|
#
\`\`\`js
/** 快速說明 **/
//□&&○
//□是false回傳自己，true回傳○

//□||○
//□是true回傳自己，false回傳○

/** 範例一 **/
console.log(0 && 1);  //0
console.log(2 && 3);  //3

/** 範例二 **/
console.log(0 || 1);  //1
console.log(2 || 3);  //2

/** 範例三 **/
console.log(!0);  //true
console.log(!1);  //false
console.log(!true);  //false
console.log(3 != "3");  //false
console.log(3 !== "3");  //true

/** 進階範例一 **/
console.log(0 && 1 && 2);  //0
//0 && 1 = 0;
//0 && 2 = 0;

/** 進階範例二 **/
console.log(0 && 1 || 2 && 3);  //3
//0 && 1 = 0;
//2 && 3 = 3;
//0 || 3 = 3;

/** 進階範例三 **/
console.log(0 || 1 && 2 || 3);  //2
//1 && 2 = 2;
//0 || 2 = 2;
//2 || 3 = 2;

/** 衍伸練習題 **/
let a = 1 + 1 === 1;
console.log(a); //false

console.log(1000 < 10000 < 10); //true
\`\`\`
#
#### 進階衍伸題：
#
\`\`\`js
let myMoney = 500;
function addValue(cash){
  let total = cash + myMoney;
  console.log('我有'+total+'元')
}
addValue(300); // "我有800元"
addValue(); // "我有NaN元"
addValue(0); // "我有500元"

//解決NaN，預設值給500
let myMoney = 500;
function addValue(cash){
  cash = cash || 500;
  let total = cash + myMoney;
  console.log('我有'+total+'元')
}
addValue(0); // 但是如果真的想傳0進入，這樣0會被判讀為假值，卻給500

//最終解決辦法
let myMoney = 500;
function addValue(cash){
  cash = parseInt(cash);
  cash = (cash || cash === 0)? cash: 500;
  let total = cash + myMoney;
  console.log('我有'+total+'元')
}
addValue(); // "我有1000元"
addValue(0); // "我有500元"
\`\`\`
#
-----------------------------------------------
#
## 原始型別(Primitive Data Type)
#
|typeof|中文|說明|
|---|---|---|
|Boolean|布林值|true、false|
|Null|空值|曾經被賦予值，但是沒有值(型別為 object，歷史錯誤)|
|Undefined|未定義|尚未被賦予值|
|Number|數字|1234567890、NaN、Infinity|
|String|字串|''或""內的文字|
|Biglnt|符號/唯一值|表示超大整數，如 123456789n|
|Symbol|唯一符號|表示唯一識別符，可作物件 key，無法被重複|
#
\`Biglnt是處理金融、加密、天文，例如:const big = 1234567890123456789012345678901234567890n;\`
#
\`\`\`js
/** 字串 **/
var a = "蘋果";
console.log(typeof a);  //string

/** 數字 **/
var a = 3.1415;
console.log(typeof a);  //number

/** 布林值 **/
var a = true;
console.log(typeof a);  //boolean

/** 未定義 **/
var a;
console.log(typeof a);  //undefined

/** 空值 **/
var a = null;
console.log(typeof a);  //object
\`\`\`
#
## 物件型別(Object Type)
#
|typeof|中文|說明|
|---|---|---|
|Object|物件|{}內的值|
|Object|陣列|[]內的值|
|function|函式|物件裡的子型別|
|Object|new String()|包裹方式建立的型別|
|Object|new Number()|包裹方式建立的型別|
|Object|new Boolean()|包裹方式建立的型別|
#
\`\`\`js
/** 物件 **/
var a = {
  name:"蘋果"
};
console.log(typeof a);  //object

/** 陣列 **/
var a = ["蘋果"];
console.log(typeof a);  //object

/** 函式 **/
var a = function(){};
console.log(typeof a);  //function
\`\`\`
#
-----------------------------------------------
#
#### 當變數在執行階段被賦予值時，可能會轉換型別。而轉換分為以下兩種:
#
## 顯性轉換(Explicit Conversion)
#
* 直接賦予值

    * 字串 = 數字。(範例一)

    * 數字 = 字串。(範例二)
#
\`\`\`js
/** 範例一 **/
var a = "蘋果";
a = 1;
console.log(typeof a);  //number

/** 範例二 **/
var a = 1;
a = "蘋果";
console.log(typeof a);  //string
\`\`\`
#
## 隱性轉換(Implicit Conversion)
#
* 透過運算子來轉換型別

    * 字串 * 數字 = 數字。(範例一)

    * 數字 + 字串 = 字串。(範例二)
    
#
\`\`\`js
/** 範例一 **/
var a = 1;
var b = "2";
console.log(typeof (a * b));  //number
//1 * "2" = 2   <-最後結果是數字

/** 範例二 **/
var a = 1;
var b = "2";
console.log(typeof (a + b));  //string
//1 + "2" = "12"   <-最後結果字串
\`\`\`
#
-----------------------------------------------
#
## 數字與字串的應用
#
* 使用 **parseInt()** 可將字串轉數字。(範例一)
#
* 使用 **.toString** 可轉數字轉字串。(範例二) 
#
* 使用 **.length** 可取得字數(空白也算)。(範例三)
#
* 使用 **.trim()** 可以濾掉空白。(範例四)
#
\`\`\`js
/** 範例一 **/
let a = "100";
a = parseInt(a);
console.log(typeof a);  //number

/** 範例二 **/
let a = 100;
a = a.toString();
console.log(typeof a);  //string

/** 範例三 **/
let a = " 蘋果";
console.log(a.length);  //3

/** 範例四 **/
let a = " 蘋果";
a = a.trim();
console.log(a);  //蘋果
\`\`\`
#
-----------------------------------------------
#
## 簡化賦值運算子
#
\`\`\`js
let a = 1;
a = a + 1;
console.log(a);  //2

/** 簡化 **/
let a = 1;
a += 1;
console.log(a);  //2

/** 再簡化 **/
let a = 1;
a++;
console.log(a);  //2

/** 進階題 **/
let a = 10;
console.log(++a);// 11
console.log(--a);// 9
console.log(++a * a);// 121
console.log(--a * a);// 81
\`\`\`
#`,__vite_glob_0_17=Object.freeze(Object.defineProperty({__proto__:null,default:_20210302JavaScript______},Symbol.toStringTag,{value:"Module"})),_20210303JavaScript______=`---
title: 【JS】物件與陣列
date: 2021-03-03
tags: ["javaScript"]
---
#
## 物件實字(Object Literals)
#
<!--more-->
#
* 直接撰寫 **var obj1 = {...}** 物件。(範例一)
#
## 建構物件(Constructor Object)
#
* 使用 **new Object()** 包裹方式建立。(範例二)
#
\`\`\`js
/** 範例一 **/
var obj1 = {
  name:"蘋果",
  amount: 100
}

/** 範例二 **/
var obj1 = new Object();
obj1.name = "蘋果";
obj1.amount = 100;
\`\`\`
#
-----------------------------------------------
#
### 物件的基本應用方法 : 
#
* 取值。(範例一)
#
* 新增屬性。(範例二)
#
* 刪除屬性。(範例三)
#
* 新增物件。(範例四)
#
\`\`\`js
var a ={
  name:"蘋果",
  amount: 100
}

/** 範例一 **/
console.log(a.name);  //蘋果
console.log(a["amount"]);  //100

/** 範例二 **/
a.price = 25;
a["prod"] = "USA";
console.log(a);  //{name: "蘋果",amount: 100, price: 25,prod: "USA"}

/** 範例三 **/
delete a.price;
delete a["prod"];
console.log(a);  //{name: "蘋果",amount: 100}

/** 範例四 **/
a.sell = {
  JPN: 2000
}
console.log(a);  //{name: "蘋果",amount: 100,sell:{JPN: 2000}}
\`\`\`
#
-----------------------------------------------
#
### 變數無法被刪除，屬性才可以 : 
#
\`\`\`js
var a = 1;
delete a;
console.log(window.a);  //1

window.b = 2;
delete b;
console.log(window.b);  //underfined
\`\`\`
#
> 全域環境下賦予的值是window的屬性
#
-----------------------------------------------
#
### 純值不能新增屬性，物件才可以 : 
#
\`\`\`js
var a = {};
a.name = "蘋果";
console.log(a);  //{name: "蘋果"}

var b = 1;
b.name = "香蕉";
console.log(b);  //1
\`\`\`
#
-----------------------------------------------
#
## 傳值(Call by Value)
#
* 純值的傳值方式是複製，傳完後無任何關聯。(範例一)
#
## 傳參考(Call by Reference)
#
* 物件是以傳參考方式指向它，若修改會一起變更。(範例二)
#
\`\`\`js
//* 範例一 *//
var a = "蘋果";
var b = a;  //b複製a的值，兩者無關聯
b = "香蕉";
console.log(a);  //蘋果
console.log(a === b);  //false

//* 範例二 *//
var a = {name: "蘋果"};
var b = a;  //b指向a物件，兩者指向同一物件
b.name = "香蕉";
console.log(a);  //{name: "香蕉"}
console.log(a === b);  //true

//* 進階範例一 *//
var a = {name: "蘋果"};
a.amount = a;
console.log(a);
//Object{
//  name:"蘋果",
//  amount:[circular object]  //循環物件
//};

//* 進階範例二 *//
var a = {name: "蘋果"};
var b = a;
a.amount = a = {name: "蘋果"};
//上述這段是"同時"進行
//左邊:a.amount找不到a物件裡有amount屬性，所以undefined
//右邊:a = {name: "蘋果"}是a指向新的物件實字，所以無關原本a物件
console.log(a.amount);  //undefined
console.log(b);  //{name: "蘋果"}
\`\`\`
#
> 只要出現{物件實字}就是新增的物件
#
-----------------------------------------------
#
## 淺層複製(Shallow Copy)
#
* 只能複製第一層屬性。。

    * 使用 **for in...** 。( *javascript* )

    * 使用 **jQuery.extend()** 。( *jQuery* )

    * 使用 **Object.assign()** 。( *ES6* )
#
\`\`\`js
/** javascript **/
var a = {
  name:"蘋果",
  amount:{
    sell: 100,
  }
};
var b = {};
for(var i in a){
  console.log(i);   //name  //amount
  console.log(a[i]);    //蘋果  //{sell: 100}
  b[i] = a[i];
}
b.name = "香蕉";
console.log(b.name,a.name);  //香蕉  //蘋果
//當改動第一層屬性時，無任何關聯。
b.amount.sell = 300;
console.log(b.amount.sell,a.amount.sell);  //300  //300
//當改動第二層屬性時，卻會一起變更。

/** jQuery **/
var b = jQuery.extend({},a);

/** ES6 **/
var b = Object.assign({},a);
\`\`\`
#
## 深層複製(Deep Copy)
* 可以複製整個物件。

    1. 使用 **JSON.stringify()** 將物件轉為字串 *(JSON)* 。

    2. 使用 **JSON.parse()** 將字串 *(JSON)* 轉為物件 *(JSON)* 。
#
\`\`\`js
var a = {
  name:"蘋果",
  amount:{
    sell: 100,
  }
};
var b = {};
var aStr = JSON.stringify(a);  //將a物件轉為JSON字串
console.log(aStr);  //"{'name':'蘋果','amount':{'sell':100}}"
var aPar = JSON.parse(aStr);  //將JSON字串，解析成JSON物件
console.log(aPar);  //{name:"蘋果",amount: {sell: 100}}
b = aPar;
b.name = "香蕉";
console.log(b.name,a.name);  //香蕉  //蘋果
b.amount.sell = 300;
console.log(b.amount.sell,a.amount.sell);  //300  //100
//當改動第一層和第二層屬性時，都無任何關聯。
\`\`\`
#
-----------------------------------------------
#
## 陣列(Array)
#
* 是以數列方式排列的物件。
#
* 第一個是從 **0** 開始。
#
* 陣列的基本應用方法 : 

    * 使用 **[]** 方式取值。(範例一)

    * 使用 **push()** 新增純值、物件、函式。(範例二)

    * 使用 **delete** 刪除值，若陣列為空，會自動補上(undefined)。(範例三)

    * 使用 **for迴圈** 複製陣列，與原陣列無任何關聯。 (範例四)
#
\`\`\`js
var a = ["蘋果","香蕉","鳳梨"];

/** 範例一 **/
console.log(a[0]);  //蘋果
console.log(a[1]);  //香蕉
console.log(a[2]);  //鳳梨

/** 範例二 **/
color.push("芭樂");  
console.log(a[3]);  //芭樂
color.push({name: "蓮霧"});  
console.log(color[4]);  //{name: "蓮霧"}
var fn1 = function(){...};
color.push(fn1);
console.log(color[5]);  //function(){...}

/** 範例三 **/ 
delete color[2];
console.log(color[2]);  //undefined

/** 範例四 **/
var b =[];
for(var i=0 ; i<a.length ; i++){  //.length可以取得陣列總長度
  console.log(i);  //0  //1  //2
  console.log(a[i]);  //蘋果  //香蕉  //鳳梨
  b[i] = a[i];
}
console.log(b);  //["蘋果", "香蕉", "鳳梨"]
\`\`\`
#
-----------------------------------------------
#
## JSON(JavaScript Object Notation)
#
* 是一種輕量級的資料交換語言。
#
* 只有屬性，沒有函式。
#
* 所有屬性都是**字串**型別，且一律都只用雙引號 **""** 。
#
* 基本的取得方式 : 

    * 使用 **new XMLHttpRequest()** 。( *javascript* )

    * 使用 **$.ajax({})** 。( *jQuery* )
#
* 打開Chrome→Network→Response，可查看回傳的資料。
#
\`\`\`js
/** javascript **/
var xhr = new XMLHttpRequest();
xhr.addEventListener("load",function(){
  var data = JSON.parse(this.response)
});
xhr.open("GET","網址.json");
xhr.send();

/** jQuery **/
$.ajax({
  url: "網址.json",
}).done(function(data){
  console.log(data);
};)
\`\`\`
#
> 框架會自動轉換JSON格式`,__vite_glob_0_18=Object.freeze(Object.defineProperty({__proto__:null,default:_20210303JavaScript______},Symbol.toStringTag,{value:"Module"})),_20210304JavaScript______=`---
title: 【JS】函式與參數
date: 2021-03-04
tags: ["javaScript"]
---
#
## 函式(Function)
#
<!--more-->
#
* 是包含{程式碼片段}的物件。
#
* 擁有被呼叫、回傳的功能。
#
* 函式可細分以下幾種 : 

    * 函式陳述式

        * 具名函式。(範例一)

    * 函式表達式

        * 匿名函式。(範例二)

        * 具名函式。(範例三)
#
\`具名的函式能夠在函式中被呼叫使用\`
#
\`\`\`js
/** 範例一 **/
function fn1(){
  console.log("蘋果");
}
fn1(); //執行

/** 範例二 **/
var fn1 = function(){
  console.log("蘋果");
}
fn1();  //執行

/** 範例三 **/
var fn1 = function fn2(){
  console.log("蘋果");
}
fn1();  //執行
//fn2();不能執行

/** 進階範例一 **/
function fn1(par1){
  par1();
}
fn1(function(){
  console.log("蘋果");
});  //執行

/** 進階範例二 **/
var num = 1;
var fn1 = function fn2(par){
  //1.par=30
  //2.par=60
  //3.par=180
  num += 1;
  //1.num + 1 = 2
  //2.num + 1 = 3
  //3.num + 1 = 4
  return par > 100? par : fn2(num * par);
  //1.30 > 100 = false;
  //1.return (2*30) = 60;回傳到函式
  //2.60 > 100 = false;
  //2.return (3*60) = 180;回傳到函式
  //3.180 > 100 = true;
  //3.return 180;
}
fn2(30);  //執行函式，並帶入30參數
console.log(fn2(30));  //180
\`\`\`
#
-----------------------------------------------
#
## 立即函式(IIFE)
#
* 立刻執行的函式 。(範例一)
#
* 可以互相傳參考。(範例二)
#
* 可利用 **全域環境(window)** 傳參考。(範例三)
#
\`\`\`js
/** 範例一 **/
(function(){
  console.log("蘋果");  //蘋果
})();

/** 範例二 **/
var obj1 = {};
(function(par1){
  par1.name = "蘋果";
  //{name: "蘋果"}
})(obj1);
//obj1 = {name: "蘋果"}
(function(par2){
  console.log(par2);  //{name: "蘋果"}
})(obj1);

/** 範例三 **/
(function(par1){
  par1.name = "蘋果";
})(window);
//window = {name: "蘋果"}
(function(){
  console.log(name);  //蘋果
})();
\`\`\`
#
-----------------------------------------------
#
## 參數(Parameter)
#
* 是用來接收函式執行帶入的值，可以被賦予新的值。(範例一)
#
* 當傳入的值不足時，參數會呈現 **undefined** 。(範例二)
#
* 若傳入的值是物件，則是傳參考。(範例三)
#
* 使用 **arguments** ，可以一次取得所有傳入的值。(範例四)
#
\`\`\`js
/** 範例一 **/
function fn1(par1){
  par1 = "香蕉";
  console.log(par1);  //香蕉
}
fn1("蘋果");

/** 範例二 **/
function fn1(par1,par2){
  console.log(par1,par2);  //蘋果,undefined
}
fn1("蘋果");  

/** 範例三 **/
var obj1 = { 
  name:"蘋果" 
};
function fn1(par1){
  par1.name = "香蕉";
  console.log(obj1);  //{name: "香蕉"}
}
fn1(a);
//參數若是傳物件的話，參數指向物件
//所以修改，會一起改變

/** 範例四 **/
function fn1(){
  console.log(arguments);  //["蘋果","香蕉","鳳梨"]
}
fn1("蘋果","香蕉","鳳梨");

/** 進階範例一 **/
function fn1(par1){
  par1("蘋果","香蕉");
}
function fn2(par2,par3){
  console.log(par2,par3);  //蘋果,香蕉
}
fn1(fn2);
//par1 = fn2
//par1的(傳的兩個參數參數)=fn2的(接收兩個參數)

/** 進階範例二 **/
function fn1(){
  for(var i=0 ; i<arguments.length ; i++){
    console.log(arguments);  //蘋果  //香蕉  //鳳梨
  }
}
fn1("蘋果","香蕉","鳳梨");
\`\`\`
#
-----------------------------------------------
#
## 閉包(Clousure)
#
* 在執行函式時才宣告變數，可以減少記憶體。(範例一)
#
* 在函式裡執行 **重複** 動作，又稱 **函式工廠** 。(延伸範例一)
#
* 在函式裡執行 **多種** 動作，又稱 **私有方法** 。(延伸範例二)
#
\`\`\`js
//* 範例一 **/
function fn1(){
  var a = 5;
  //fn1宣告變數給fn用
  return function fn2(par1){
  //fn1回傳的是fn2的結果
    a = a + par1;
    // fn1宣告的變數a = 5 + 傳進來的值
    return a;
    //最後回傳結果
  }
}
console.log(fn1()(100));  //105
//第一個括弧是fn1，第二個括弧是fn2
var b = fn1();
//宣告b = 回傳的結果
//但因為執行才產生變數
//所以var a;這個變數，是屬於b的
//若再var c = fn1();
//c也會有，屬於自己的var a;
console.log(b(100));  //105
console.log(c(500));  //501

/** 延伸範例一 **/
function fn1(init){
  var a = init || 5;
  //新增一個參數為初始值
  // init有值就用自己，沒有值就用5
  return function fn2(par1){
    a = a + par1;
    return a;
  }
}
console.log(fn1()(100));  //105
//5 + 100
console.log(fn1(20)(100));  //120
//20 + 100

/** 延伸範例二 **/
function fn1(init){
  var a = init || 5;
  return {
    add: function(par1){
      a += par1;
    },
    reduce: function(par2){
      a -= par2;
    },
    watch: function(){
      return a;
    }
  }
}
var b = fn1(100);
b.add(100)
b.reduce(25)
console.log(b.watch());  //175

/** 進階範例一 **/
function fn1(){
  var a =[];
  for(var i=0 ; i<3 ; i++){
    (function(par1){
      a.push(function(){
        consolo.log(par1);  //0  //1  //2
      });
    })(i);
  }
  return a;
}
var b = fn1();
b[0]();
b[1]();
b[2]();
\`\`\`
#
-----------------------------------------------
#
## this
#
* 是一個關鍵字，當執行函式時自動產生，不需要宣告。
#
* 函式在哪執行，決定 **this** 是什麼。
#
* 直接執行的函式，稱為 **簡易呼叫(Simple Call)** : 

    * 函式在物件內執行，this等於物件。(範例一)

    * 函式在全域環境下執行，this等於window。(範例二)

    * 函式在物件內執行非同步事件，this等於window。(範例三)

    * 在立即函式裡的this等於window。(範例四)
#
\`\`\`js
/** 範例一 **/
var name = "鳳梨";
var a = {
  name: "蘋果",
  fn1: {
    name: "香蕉",
    fn2: function(){
      console.log(this.b);  //香蕉
    }
  }
}
a.fn1.fn2();
//fn2函式在物件裡，this是fn1

/** 範例二 **/
var name = "鳳梨";
var a = {
  name: "蘋果",
  fn1: {
    name: "香蕉",
    fn2: function(){
      console.log(this);  //鳳梨
    }
  }
}
var b = a.fn1.fn2;
b();
//b=function(){console.log(this)};
//b函式在全域環境下執行，this是window

/** 範例三 **/
var name = "鳳梨";
var a = {
  name: "蘋果",
  fn1: {
    name: "香蕉",
    fn2: function(){
      setTimeout(function(){
        console.log(this.name);  //鳳梨
      },1000);
    }
  }
}
a.fn1.fn2();
//非同步執行的函式，this是window
//可以在父函式中宣告var vm = this;
//最後console.log(vm.name);  //香蕉

/** 範例四 **/
var name = "香蕉";
function fn1(){
  var name = "蘋果";
  console.log(this.name);  //香蕉
}
(function(){
  var fn2 = fn1;
  fn2();
})();

\`\`\`
#
-----------------------------------------------
#
## call、apply、bind
#
* 改變函式this的方法。
#
* 傳入的第一個值，會以 **建構式** 帶入 **this** 。
#
|傳入的值|物件|數字|字串|布林值|undefined、null、null|
|---|---|---|---|---|---|
|帶入方式|new Object()|new Number()|new String()|new Boolean()|window|
#
* 傳入的第二個值，會帶入參數。

    * call()將傳入的值帶入參數，直接執行。(範例一)

    * apply()將傳入的值以陣列方式帶入參數，直接執行。(範例二)

    * bind()將傳入的值帶入參數，但還 **不會執行** ，要再加()才會執行，若再帶入值，則會依需填補空缺，不會覆蓋。(範例三)
#
\`\`\`js
var a = {
  name:"蘋果"
}

/** 範例一 **/
function fn1(par1,par2){
  console.log(this,par1,par2);  //{name: "蘋果"},1,2
}
fn1.call(a,1,2);

/** 範例二 **/
function fn1(par1,par2){
  console.log(this,par1,par2);  //{name: "蘋果"},1,2
}
fn1.apply(a,[1,2]);
//若傳陣列改數字，會undefined

/** 範例三 **/
function fn1(par1,par2){
  console.log(this,par1,par2);  //{name: "蘋果"},1,2 
}
fn1.bind(a,1,2)();
//console.log不會執行
\`\`\`
#
-----------------------------------------------
#
## 嚴格模式(Strict Mode)
#
* 可立即函式，使用"use strict"來執行環境。(範例一)
#
* 遇到不會顯示在console.log上的 **靜默錯誤** 時，會停止運行。(範例二)
#
* 使用call、apply、bind方法傳入的值不會改變 。
\`\`\`js
/** 範例一 **/
(function(){
  "use strict";
  console.log("嚴格模式");  //嚴格模式
})();

/** 範例二 **/
(function(){
  "use strict";
  a = "蘋果";  //錯誤，必須先宣告變數
})();

/** 範例二 **/
function fn1(par1,par2){
  "use strict"
  console.log(this,par1,par2);  
}
fn1.call(a,1,2);  //a,1,2
fn1.call(undefined,1,2);  //undefined,1,2
fn1.("蘋果",1,2);  //undefined,1,2
\`\`\`
#
> 用call、apply、bind以外的方式傳入值，都是undefined
#
-----------------------------------------------
#
## DOM的this
#
\`\`\`js
/** 範例一 **/
button(onclick="console.dir(this)") 按鈕

/** 進階範例二 **/
// <-----html----->
ul

// <-----js----->
var a = ["蘋果","香蕉","鳳梨"];
var ul = document.querySelector("ul");
//宣告一個空字串
var str = "";
//用for迴圈印出所有陣列在ul裡
for(let i=0 ; i<a.length ; i++){
  str += \`<li>\${a[i]}</li>\`; 
  ul.innerHTML = str;
}
//抓取li
var li = document.querySelectorAll("li");
for(let i=0 ; i<a.length ; i++){
  //綁定(點擊)監聽事件在每一個(i)li上
  li[i].addEventListener("click",function(){
    this.style.backgroundColor = "red";
  });
}
\`\`\``,__vite_glob_0_19=Object.freeze(Object.defineProperty({__proto__:null,default:_20210304JavaScript______},Symbol.toStringTag,{value:"Module"})),_20210305JavaScript________=`---
title: 【JS】原型與建構函式
date: 2021-03-06
tags: ["javaScript"]
---
#
## 原型(Prototype)
#
<!--more-->
#
* 純值可用**建構式**繼承在原型下。
#
* 原型可利用**建構函式**新增屬性。
#
* 原型有向上查找屬性的功能，而且屬性是**共用**的。
#
* 原型鍊:
#
|建構式|原型(上層)|原型(上上層)|
|---|---|---|
|new Object()|---|Object|
|new Array()|Array|Object|
|new Number()|Number|Object|
|new String()|String|Object|
|new Boolean()|Boolean|Object|
#
\`\`\`js
var a = [1 , 2 , 3];
var b = [4 , 5 , 6];
a.__proto__.getLast = function(){
  //在上層[Array]原型上，新增[getLast]屬性
  return this[this.length - 1]
  //回傳[最後一項]陣列
}
console.log(b.getLast());  //6
//因為a、b都是在[Array]原型底下，所有都可以使用[getLast]屬性
\`\`\`
#
-----------------------------------------------
#
### 自訂義原型物件 : 
#
* \\_\\_proto\\_\\_ : 是原型的上層。
#
* prototype : 是原型裡的函式。
#
\`\`\`js
/** 建構[狗]原型 **/
function Dog(name,color,size){
  //使用建構函式，建構[Dog]原型
  this.name = name;
  this.color = color;
  this.size = size;
}
var Bibi = new Dog("比比","棕色","小型");
//純值[Bibi]使用建構式，繼承在[Dog]原型底下，並帶入屬性的值

Dog.prototype.bark = function(){
  //在[Dog]原型函式裡，新增[bark]屬性
  return this.name + "吠叫";
}
console.log(Bibi.name,Bibi.color,Bibi.size);  //"比比"  //"棕色"  //"小型"
console.log(Bibi.bark());  //"比比吠叫"

/** 自定義日期 **/
var date = new Date();
//date本身是一個函數
//所以date有許多prototype(函式)可以使用
Date.prototype.getToday = function(){
  //Date物件裡的函式中新增屬性
  var dd = this.getDate();
  //使用date裡的屬性getDate賦予到dd
  var mm = this.getMonth()+1;
  //getMonth屬性，取道的值是從0開始所以要+1
  var yyyy = this.getFullYear();
  return yyyy+"/"+mm+"/"+dd;
  //將結果組成想要的字串，然後回傳
}
console.log(date.getToday());  //2021/1/28
\`\`\`
#
-----------------------------------------------
#
### 自訂義原型層 : 
#
* 使用**Object.create()**，讓物件繼承到原型下，覆蓋 ***constructor*** 。
#
* 使用 **call()** 將原型帶入另一個**函式建構式**。
#
\`\`\`js
function Animal(kingdom,family){
  //使用建構函式建立[Animal]原型
  this.kingdom = kingdom;
  this.family = family;
}
function Dog(name,color,size){
  Animal.call(this,"動物界","犬科");
  //讓[Dog]原型物件，傳入[Animal]原型裡，並帶兩個值到[Animal]參數裡
  this.name = name;
  this.color = color;
  this.size = size;
}
Dog.prototype = Object.create(Animal.prototype);
//讓[Dog]原型，繼承在[Animal]原型下
Animal.prototype.move = function(){
  //在[Animal]原型裡函式，新增[move]屬性
  return this.name + "移動";
}
var Bibi = new Dog("比比","棕色","小型");
Dog.prototype.bark = function(){
  return this.name + "吠叫";
}
Dog.prototype.constructor = Dog;
//將原本[狗]的函式加回到[狗]原型

console.log(Bibi.kingdom,Bibi.family);  //"動物界"  //"犬科"
console.log(Bibi.move());  //比比移動
\`\`\`
#
-----------------------------------------------
#
### 統整建構原型鍊 : 
#
|Bibi|Dog原型|Animal原型|Object原型|function原型|
|---|---|---|---|---|
||name|比比|||
||color|棕色|||
||size|小型|||
||kingdom|動物界|||
||family|犬科|||
||function bark(){...}|吠叫|||
||constructor|function Dog(){...}|||
||\\_\\_proto\\_\\_|Animal|||
|||function move(){...}|移動||
|||constructor|function Animal(){...}||
|||\\_\\_proto\\_\\_|Object||
||||constructor|function Object(){...}|
||||\\_\\_proto\\_\\_|null|
#
>以下驗證結果:
>
> * Bibi.__proto__ === Dog.prototype
> * Bibi.__proto__.__proto__ === Animal.prototype
> * Bibi.__proto__.__proto__.__proto__ === Object.prototype
> * Bibi.__proto__.__proto__.__proto__.__proto__ === null
> * Object.prototype.constructor === Object
> * Animal.prototype.constructor === Animal
> * Dog.prototype.constructor === Dog
> * Dog.prototype.bark === Bibi.bark
> * Animal.prototype.move === Bibi.move`,__vite_glob_0_20=Object.freeze(Object.defineProperty({__proto__:null,default:_20210305JavaScript________},Symbol.toStringTag,{value:"Module"})),_20210306JavaScript________=`---
title: 【JS】屬性特徵與特性
date: 2021-02-13
tags: ["javaScript"]
---
#
## Object.defineProperty()
#
<!--more-->
#
* 可以調整物件裡的屬性特徵。
#
|帶入的值|名稱|中文|預設值|例如|
|---|---|---|---|---|
|物件|Object||---|
|屬性|\\"Attributes\\"||---|
|參數a|value|屬性的值|---|
|參數b|writable|可否寫入|true|賦予(=)|
|參數c|configurable|可否被刪除|true|delete|
|參數d|enumerable|可否被列舉|true|for...in|
#
\`\`\`js
var obj1 = {
  name:"蘋果",
  amount:100
}
Object.defineProperty(obj1 , "name" , {
  value: "香蕉",
  writable: true,
  configurable: true,
  enumerable: true
});
//var obj1 = {
//  name:"香蕉",
//  amount:100
//}

/** 如果writable: false **/
obj1.name = "鳳梨";
//無法修改，但不會出錯
//但是可以寫入子層屬性

/** 如果configurable: false **/
delete obj1.name;
//無法刪除，但不會出錯

/** 如果enumerable: false **/
for(var key in obj1){
  console.log(key);  //"amount"
}
\`\`\`
#
> Object.defineProperty()，只能做到淺層保護。
#
-----------------------------------------------
#
## Object.preventExtensions、Object.seal、Object.freeze
#
* 可以調整物件本身特性。
#
* 以下三種方式可查看物件特性 : 

    * 使用 **Object.isExtensible()** 會回傳【是否可被擴充】。

    * 使用 **Object.isSealed()** 會回傳【是否被封裝】。

    * 使用 **Object.isFrozen()** 會回傳【是否被凍結】。
#
|方法|Object.preventExtensions()|Object.seal()|Object.freeze()|
|---|---|---|---|
|新增屬性|不行|不行|不行|
|刪除屬性|可以|不行|不行|
|修改屬性|可以|可以|不行|
|新增物件裡的屬性|可以|可以|可以|
|調整屬性的特徵|可以|不行|不行|
|以下檢查回傳|
|是否可被擴充|false|false|false|
|是否被封裝|false|true|true|
|是否被凍結|false|false|true|
|以下屬性特徵|
|可否寫入|true|true|false|
|可否被刪除|true|false|false|
|可否被列舉|true|true|true|
-----------------------------------------------
#
### 修改自定義原型的屬性特徵
#
* 自訂原型的屬性，預設是可以被列舉的。若要修改 : 

    1. 使用**for...in**可以列舉出所有物件屬性。(範例一)

    2. 使用**Object.hasOwnProperty()**，會回傳該原型的屬性是否存在。(範例二)

    3. 使用**Object.getOwnPropertyDescriptor()**，查看物件裡的屬性特徵。(範例三)

    4. 在建構函式時，使用**Object.defineProperty()**，可調整屬性特徵。
#
\`\`\`js
function Dog(name,color){
  this.name = name;
  this.color = color;
};
var Bibi = new Dog("比比","棕色");
Dog.prototype.size = "小型";

/** 範例一 **/
for(key in Bibi){
  console.log(key);  //"name"  //"color"  //"size"
}

/** 範例二 **/
console.log(Bibi.hasOwnProperty("name"));  //true
console.log(Bibi.hasOwnProperty("size"));  //false

/** 範例三 **/
console.log(Object.getOwnPropertyDescriptor(Bibi.__proto__,"size"));
//Object{
//  configurable: ture,
//  enumerable: ture,  //是否可被列舉:可以
//  value: "小型",
//  writable: true
//}

/** 範例四 **/
function Dog(name,color){
  this.name = name;
  this.color = color;
  Object.defineProperty(Dog.prototype,"size",{
    enumerable: false
  });
};

/** 篩選掉不在物件裡的屬性 **/
for(const key in Bibi){
  if(Bibi.hasOwnProperty(key)){
    console.log(key);
  }
}
\`\`\`
#
> 原生原型屬性特徵，預設是不可被列舉的。
#
-----------------------------------------------
#
## Getter、Setter
#
* 直接在物件裡面新增**方法**來改變值。

    * set 存值的方法，可傳入參數，。

    * get 取值的方法，不會傳入參數。
#
* 若物件被**凍結(freeze)**，***set***無法改變屬性。
#
* 若使用 **嚴格模式(use strict)** ，set、get都無法使用。
#
\`\`\`js
//** 值直接寫在物件實字 **/
var wallet = {
  total: 100,
  set save(price){
    this.total = this.total + price / 2;
    //100 + (300/2);
  },
  get save(price){
    return this.total / 2;
  }
}
wallet.save = 300;
console.log(wallet.save);  //125

//** 在調整屬性時增加 **/
var wallet = {
  total: 100
};
Object.defineProperty(wallet,"save",{
  configurable: true,
  enumerable: true,
  set: function(price){
    this.total = this.total + price / 2;
  },
  get: function(){
    return this.total / 2;
  }
});
wallet.save = 300;
console.log(wallet);  //125

/** 進階範例一 **/
var a = [1,2,3];
Object.defineProperty(Array.prototype,"Getlast",{
  get: function(){
    return this[this.length - 1];
  }
});
console.log(a.Getlast);  //3
\`\`\``,__vite_glob_0_21=Object.freeze(Object.defineProperty({__proto__:null,default:_20210306JavaScript________},Symbol.toStringTag,{value:"Module"})),_20210307JavaScriptECMAScript6=`---
title: 【JS】ES6
date: 2021-03-07
tags: ["javaScript"]
---
#
## var、let、const
#
<!--more-->
#
* 皆為宣告變數用。
#
|名稱|var|let|const|
|---|---|---|---|
|作用域|在window、函式|在block{}裡|在block{}裡|
|宣告的變數|可以賦予新的值|可以賦予新的值|不能賦予新的值|
|重複宣告變數時|不會出錯|會出錯|會出錯|
|從創造到執行階段會|提升(Hoisting)|暫時性死區(TDZ)|會出現錯誤|
#
\`\`\`js
/** 變數賦予新的值 **/
var a = 1;
a = 2;
console.log(a);  //2

let b = 1;
b = 2;
console.log(b);  //2

const c = 1;
c = 2;
console.log(c);  //出錯

/** 重複宣告變數 **/
var a = 1;
var a = 2;
console.log(a);  //2

let b = 1;
let b = 2;
console.log(b);  //出錯

const c = 1;
const c = 2;
console.log(c);  //出錯

/** 創造到執行階段 **/
var a;
console.log(a);  //undefined

let b;
console.log(b);  //undefined

const c;
console.log(c);  //出錯
\`\`\`
#
-----------------------------------------------
#
* 宣告變數命名的規則。

    * 大小寫有區分。(範例一)

    * 開頭不能是數字。(範例二)

    * 不能使用 **-** 跟 **.** 。(範例二)

    * 以下 **保留字** 不能使用。(範例四)
#
|arguments|await|break|case|
|---|---|---|---|
|catch|class|const|continue|
|debugger|default|delete|do|
|else|enum|eval|export|
|extends|false|finally|for|
|function|if|implements|import|
|in|instanceof|interface|let|
|new|null|package|private|
|protected|public|return|static|
|super|switch|this|throw|
|true|try|typeof|var|
|void|while|with|yield|
#
\`\`\`js
/** 範例一 **/
let A = 1;
console.log(a);  //a is not defined

/** 範例二 **/
let 3a = 1;  //出錯

/** 範例三 **/
let apple-name = 1;  //出錯
//建議使用小駝峰方式命名
//let appleName = 1

/** 範例四 **/
let default = 1;  //出錯
//因為"default"為保留字，不能拿來宣告變數
\`\`\`
#
-----------------------------------------------
#
* 當使用 **for迴圈** + 非同步事件時:
#
\`\`\`js
/** for迴圈(var) **/
for(var i=0 ; i<3 ; i++){
  setTimeout(function(){
    console.log(i);  //3  //3  //3
  },1000);
}
console.log(i);  //3

/** for迴圈(let)) **/
for(let i=0 ; i<3 ; i++){
  setTimeout(function(){
    console.log(i);  //0  //1  //2
  },1000);
}
console.log(i);  //錯誤(is not defined)
\`\`\`
-----------------------------------------------
#
## 箭頭函式
#
* 讓函式更精簡。
#
\`\`\`js
/** 函式表達式 **/
const fn1 = function(par1){
  return "蘋果" + par1;
}
fn1();

/** 簡化(使用箭頭函式) **/
const fn1 = (par1) => {"蘋果" + par1;}
fn1();

/** 再簡化(如果只有return) **/
const fn1 = par1 => "蘋果" + par1;
fn1();

/** 再簡化(如果沒有帶參數) **/
const fn1 = () => "蘋果";
fn1();
\`\`\`
#
-----------------------------------------------
#
*  **arguments** 須改用 **其餘參數** 。
#
\`\`\`js
/** argument **/
const fn1 = function(){
  console.log(arguments);  //[1,2,3]
}
fn1(1,2,3);

/** 其餘參數 **/
const fn1 = (...arg) => {
  console.log(arg);  //[1,2,3]
}
fn1(1,2,3);
\`\`\`
#
-----------------------------------------------
#
* 沒有自己的 **this** ，會指向外層。

    *  **addEventListener** ，無法找到 **this** 。

    * **call()**、**apply()**、**bind()**，傳入的都是 **window** 。

    * 不能拿來 **建構函式** 。
#
\`\`\`js
/** 一般函式 **/
var name = "蘋果";
var obj1 ={
  name: "香蕉",
  amount: function(){
    setTimeout(function(){
      console.log(this.name);  //蘋果
    },1000); 
  }
}
obj1.amount();

/** 箭頭函式 **/
var name = "蘋果";
var obj1 ={
  name: "香蕉",
  amount: function(){
    setTimeout(()=>{
      console.log(this.name);  //香蕉
    },1000); 
  }
}
obj1.amount();
\`\`\`
#
-----------------------------------------------
#
* 若回傳的是 **物件實字** ，需要再加 **()** 。
#
\`\`\`js
/** 回傳純值 **/
const fn1 = () => 1;
console.log(a());  //1

/** 回傳物件 **/
const fn1 = () => ( {a:1} );
console.log(a());  //{a:1}
\`\`\`
#
-----------------------------------------------
#
* 若使用再 **判斷式** 時，需要再加 **()** 。
#
\`\`\`js
/** 錯誤 **/
let a = 0;
const b = a || function(){return 1};

/** 正確 **/
let a = 0;
const b = a || ( () => 1 );
\`\`\`
#
-----------------------------------------------
#
### 箭頭函式+map()、reduce()、$.ajax()
#
\`\`\`js
/** 範例一 **/
const a = [1,2,3];
const b = a.map(function(par1){
  return par1 * 2;
})
console.log(b);  //[2,4,6]

/** 範例一(ES6) **/
const a = [1,2,3];
const b = a.map(par1 => par1 * 2);
console.log(b);  //[2,4,6]

/** 範例二 **/
const a = function(){
  const nums = Array.from(arguments);
  //Array.from()能將[類陣列]轉為[陣列]
  const total = nums.reduce(function(par1,par2){
  //第一個參數會帶0，第二個參數會帶入當前的值
    return par1+par2;
  },0);
  console.log(total);  //15
  return total / nums.length;
}
console.log(a(1,2,3,4,5));  //3

/** 範例二(ES6) **/
const a = (...arg) => arg.reduce((par1,par2) => par1+par2 / arg.length,0);
console.log(a(1,2,3,4,5));  //3

/** 範例三 **/
const a = {
  data:{},
  getData: function(){
    const vm = this;
    $.ajax({
      url: "https://randomuser.me/api/",
      dataType: "json",
      success: function(data){
        vm.data = data.results[0];
        console.log("a.data",a.data);
      }
    });
  }
}
a.getData();

/** 範例三(ES6) **/
const a = {
  data:{},
  getData: function(){
    $.ajax({
      url: "https://randomuser.me/api/",
      dataType: "json",
      success: (data) => {
        this.data = data.results[0];
        console.log("a.data",a.data);
      }
    });
  }
}
a.getData();
\`\`\`
#
-----------------------------------------------
#
### 樣板字面值(Template Literals)
#
\`\`\`js
/** 範例一 **/
const a = 25;
const b = "蘋果售價:"+a+"元";
console.log(b);  //蘋果售價:25元

/** 範例一(ES6) **/
const a = 25;
const b = \`蘋果售價:\${a}元\`;
console.log(b);  //蘋果售價:25元

/** 進階範例一(ES6) **/
const a = "";
const b = \`蘋果售價:\${a||25}元\`;
console.log(b);  //蘋果售價:25元
//如果a沒有值的話，就會顯示預設25

/** 範例二 **/
// <-----html----->
ul

// <-----js----->
const a = [
  {name: "蘋果",amount: 100},
  {name: "香蕉",amount: 300},
  {name: "鳳梨",amount: 500}
]
var ul = document.querySelector("ul");
ul.innerHTML= 
\`
<li>\${a[0].name}總共有\${a[0].amount}個</li>
<li>\${a[1].name}總共有\${a[1].amount}個</li>
<li>\${a[2].name}總共有\${a[2].amount}個</li>
\`

/** 範例二(ES6) **/
// <-----html----->
ul

// <-----js----->
const a = [
  {name: "蘋果",amount: 100},
  {name: "香蕉",amount: 300},
  {name: "鳳梨",amount: 500}
]
var ul = document.querySelector("ul");
ul.innerHTML= 
\`
\${ a.map( par1 => \`<li>\${ par1.name }總共有\${ par1.amount }個</li>\` ).join("") }
\`
\`\`\`
#
-----------------------------------------------
#
## 標籤樣板字面值
#
\`\`\`js
/** 範例一(ES6) **/
function fn1(str,par1,par2){
  console.log(str,par1,par2);
  //["總共有", "個蘋果"] 1 undefined
}
const a = 1;
fn1\`總共有\${a}個蘋果\`;

/** 範例一(ES6) **/
function fn1(str,...arg){
  console.log(str,arg);
  //["總共有", "個蘋果"] [1]
}
const a = 1;
fn1\`總共有\${a}個蘋果\`;
\`\`\`
#
> 使用...arg可以讓所有參數以陣列方式帶入`,__vite_glob_0_22=Object.freeze(Object.defineProperty({__proto__:null,default:_20210307JavaScriptECMAScript6},Symbol.toStringTag,{value:"Module"})),_20210308JavaScript____=`---
title: 【JS】ES6
date: 2021-03-07
tags: ["javaScript"]
---
#
## var、let、const
#
<!--more-->
#
* 皆為宣告變數用。
#
|名稱|var|let|const|
|---|---|---|---|
|作用域|在window、函式|在block{}裡|在block{}裡|
|宣告的變數|可以賦予新的值|可以賦予新的值|不能賦予新的值|
|重複宣告變數時|不會出錯|會出錯|會出錯|
|從創造到執行階段會|提升(Hoisting)|暫時性死區(TDZ)|會出現錯誤|
#
\`\`\`js
/** 變數賦予新的值 **/
var a = 1;
a = 2;
console.log(a);  //2

let b = 1;
b = 2;
console.log(b);  //2

const c = 1;
c = 2;
console.log(c);  //出錯

/** 重複宣告變數 **/
var a = 1;
var a = 2;
console.log(a);  //2

let b = 1;
let b = 2;
console.log(b);  //出錯

const c = 1;
const c = 2;
console.log(c);  //出錯

/** 創造到執行階段 **/
var a;
console.log(a);  //undefined

let b;
console.log(b);  //undefined

const c;
console.log(c);  //出錯
\`\`\`
#
-----------------------------------------------
#
* 宣告變數命名的規則。

    * 大小寫有區分。(範例一)

    * 開頭不能是數字。(範例二)

    * 不能使用 **-** 跟 **.** 。(範例二)

    * 以下 **保留字** 不能使用。(範例四)
#
|arguments|await|break|case|
|---|---|---|---|
|catch|class|const|continue|
|debugger|default|delete|do|
|else|enum|eval|export|
|extends|false|finally|for|
|function|if|implements|import|
|in|instanceof|interface|let|
|new|null|package|private|
|protected|public|return|static|
|super|switch|this|throw|
|true|try|typeof|var|
|void|while|with|yield|
#
\`\`\`js
/** 範例一 **/
let A = 1;
console.log(a);  //a is not defined

/** 範例二 **/
let 3a = 1;  //出錯

/** 範例三 **/
let apple-name = 1;  //出錯
//建議使用小駝峰方式命名
//let appleName = 1

/** 範例四 **/
let default = 1;  //出錯
//因為"default"為保留字，不能拿來宣告變數
\`\`\`
#
-----------------------------------------------
#
* 當使用 **for迴圈** + 非同步事件時:
#
\`\`\`js
/** for迴圈(var) **/
for(var i=0 ; i<3 ; i++){
  setTimeout(function(){
    console.log(i);  //3  //3  //3
  },1000);
}
console.log(i);  //3

/** for迴圈(let)) **/
for(let i=0 ; i<3 ; i++){
  setTimeout(function(){
    console.log(i);  //0  //1  //2
  },1000);
}
console.log(i);  //錯誤(is not defined)
\`\`\`
-----------------------------------------------
#
## 箭頭函式
#
* 讓函式更精簡。
#
\`\`\`js
/** 函式表達式 **/
const fn1 = function(par1){
  return "蘋果" + par1;
}
fn1();

/** 簡化(使用箭頭函式) **/
const fn1 = (par1) => {"蘋果" + par1;}
fn1();

/** 再簡化(如果只有return) **/
const fn1 = par1 => "蘋果" + par1;
fn1();

/** 再簡化(如果沒有帶參數) **/
const fn1 = () => "蘋果";
fn1();
\`\`\`
#
-----------------------------------------------
#
*  **arguments** 須改用 **其餘參數** 。
#
\`\`\`js
/** argument **/
const fn1 = function(){
  console.log(arguments);  //[1,2,3]
}
fn1(1,2,3);

/** 其餘參數 **/
const fn1 = (...arg) => {
  console.log(arg);  //[1,2,3]
}
fn1(1,2,3);
\`\`\`
#
-----------------------------------------------
#
* 沒有自己的 **this** ，會指向外層。

    *  **addEventListener** ，無法找到 **this** 。

    * **call()**、**apply()**、**bind()**，傳入的都是 **window** 。

    * 不能拿來 **建構函式** 。
#
\`\`\`js
/** 一般函式 **/
var name = "蘋果";
var obj1 ={
  name: "香蕉",
  amount: function(){
    setTimeout(function(){
      console.log(this.name);  //蘋果
    },1000); 
  }
}
obj1.amount();

/** 箭頭函式 **/
var name = "蘋果";
var obj1 ={
  name: "香蕉",
  amount: function(){
    setTimeout(()=>{
      console.log(this.name);  //香蕉
    },1000); 
  }
}
obj1.amount();
\`\`\`
#
-----------------------------------------------
#
* 若回傳的是 **物件實字** ，需要再加 **()** 。
#
\`\`\`js
/** 回傳純值 **/
const fn1 = () => 1;
console.log(a());  //1

/** 回傳物件 **/
const fn1 = () => ( {a:1} );
console.log(a());  //{a:1}
\`\`\`
#
-----------------------------------------------
#
* 若使用再 **判斷式** 時，需要再加 **()** 。
#
\`\`\`js
/** 錯誤 **/
let a = 0;
const b = a || function(){return 1};

/** 正確 **/
let a = 0;
const b = a || ( () => 1 );
\`\`\`
#
-----------------------------------------------
#
### 箭頭函式+map()、reduce()、$.ajax()
#
\`\`\`js
/** 範例一 **/
const a = [1,2,3];
const b = a.map(function(par1){
  return par1 * 2;
})
console.log(b);  //[2,4,6]

/** 範例一(ES6) **/
const a = [1,2,3];
const b = a.map(par1 => par1 * 2);
console.log(b);  //[2,4,6]

/** 範例二 **/
const a = function(){
  const nums = Array.from(arguments);
  //Array.from()能將[類陣列]轉為[陣列]
  const total = nums.reduce(function(par1,par2){
  //第一個參數會帶0，第二個參數會帶入當前的值
    return par1+par2;
  },0);
  console.log(total);  //15
  return total / nums.length;
}
console.log(a(1,2,3,4,5));  //3

/** 範例二(ES6) **/
const a = (...arg) => arg.reduce((par1,par2) => par1+par2 / arg.length,0);
console.log(a(1,2,3,4,5));  //3

/** 範例三 **/
const a = {
  data:{},
  getData: function(){
    const vm = this;
    $.ajax({
      url: "https://randomuser.me/api/",
      dataType: "json",
      success: function(data){
        vm.data = data.results[0];
        console.log("a.data",a.data);
      }
    });
  }
}
a.getData();

/** 範例三(ES6) **/
const a = {
  data:{},
  getData: function(){
    $.ajax({
      url: "https://randomuser.me/api/",
      dataType: "json",
      success: (data) => {
        this.data = data.results[0];
        console.log("a.data",a.data);
      }
    });
  }
}
a.getData();
\`\`\`
#
-----------------------------------------------
#
### 樣板字面值(Template Literals)
#
\`\`\`js
/** 範例一 **/
const a = 25;
const b = "蘋果售價:"+a+"元";
console.log(b);  //蘋果售價:25元

/** 範例一(ES6) **/
const a = 25;
const b = \`蘋果售價:\${a}元\`;
console.log(b);  //蘋果售價:25元

/** 進階範例一(ES6) **/
const a = "";
const b = \`蘋果售價:\${a||25}元\`;
console.log(b);  //蘋果售價:25元
//如果a沒有值的話，就會顯示預設25

/** 範例二 **/
// <-----html----->
ul

// <-----js----->
const a = [
  {name: "蘋果",amount: 100},
  {name: "香蕉",amount: 300},
  {name: "鳳梨",amount: 500}
]
var ul = document.querySelector("ul");
ul.innerHTML= 
\`
<li>\${a[0].name}總共有\${a[0].amount}個</li>
<li>\${a[1].name}總共有\${a[1].amount}個</li>
<li>\${a[2].name}總共有\${a[2].amount}個</li>
\`

/** 範例二(ES6) **/
// <-----html----->
ul

// <-----js----->
const a = [
  {name: "蘋果",amount: 100},
  {name: "香蕉",amount: 300},
  {name: "鳳梨",amount: 500}
]
var ul = document.querySelector("ul");
ul.innerHTML= 
\`
\${ a.map( par1 => \`<li>\${ par1.name }總共有\${ par1.amount }個</li>\` ).join("") }
\`
\`\`\`
#
-----------------------------------------------
#
## 標籤樣板字面值
#
\`\`\`js
/** 範例一(ES6) **/
function fn1(str,par1,par2){
  console.log(str,par1,par2);
  //["總共有", "個蘋果"] 1 undefined
}
const a = 1;
fn1\`總共有\${a}個蘋果\`;

/** 範例一(ES6) **/
function fn1(str,...arg){
  console.log(str,arg);
  //["總共有", "個蘋果"] [1]
}
const a = 1;
fn1\`總共有\${a}個蘋果\`;
\`\`\`
#
> 使用...arg可以讓所有參數以陣列方式帶入`,__vite_glob_0_23=Object.freeze(Object.defineProperty({__proto__:null,default:_20210308JavaScript____},Symbol.toStringTag,{value:"Module"})),_20210501PhotoShop______='---\ntitle: 【PS】常用快捷鍵\ndate: 2021-05-01\ntags: ["photoshop"]\n---\n#\n## 常用快捷鍵\n#\n<!--more-->\n#\n#### `Ctrl` + `W` 關閉視窗\n#### `Ctrl` + `Z` 還原\n#### `Ctrl` + `X` 剪下圖層\n#### `Ctrl` + `C` 複製\n#### `Ctrl` + `V` 貼上\n#### `Ctrl` + `S` 存檔\n#### `Ctrl` + `J` 拷貝圖層\n#### `Ctrl` + `shift` + `S` 另存新檔\n#### `Ctrl` + `shift` + `I` 反轉選取\n#### `Z` 放大鏡\n#### `X` 前景色/背景色\n#### `C` 裁切工具\n#### `V` 移動工具\n#### `B` 筆刷工具\n#### `A` 路徑選取工具\n#### `S` 仿製印章\n#### `D` 滴管工具\n#### `F` 快速選取工具\n#### `Q` 鋼筆工具\n#\n-----------------------------------------------\n#\n## 注意小細節\n#\n1. 使用濾鏡效果時，要將圖層先轉為智慧型物件。\n2. 裁切工具→刪除裁切的像素(若沒勾選)→拖拉出新範圍，底層是透明格。\n3. 使用橡皮擦工具，等於使用背景色上色。\n4. 使用仿製印章，可以新增圖層，樣本選取"目前及底下的圖層"。\n5. 選擇圖層，點選底下[fx]可以套用陰影、內外框等樣式。\n6. 編輯→透視彎曲，可以設圖釘點彎曲物件，按住Alt點擊刪除圖釘。\n7. 調整面板→色相/飽和度→點選手指再對圖片Ctrl+左鍵拖拉調整色相，左鍵拖拉調整飽和度。\n#\n-----------------------------------------------\n#\n## 刪除照片中不要的內容\n#\n1. 汙點修復工具(快速處理細小部分)\n2. 填滿內容感知(快速處理大範圍)\n3. 仿製印章(處理較複雜的部份)\n#\n-----------------------------------------------\n#\n## 其他選取方法\n#\n1. 使用顏色選去使用顏色選去\n\n',__vite_glob_0_24=Object.freeze(Object.defineProperty({__proto__:null,default:_20210501PhotoShop______},Symbol.toStringTag,{value:"Module"})),_20210601Vue_______=`---
title: 【Vue】基本模板語法
date: 2021-06-01
tags: ["vue"]
---
#
## Vue.js是以資料狀態操作畫面，偏向MVVM軟體設計模式。
#
<!--more-->
#
## MVVM(Model View Viewmodel)
#
|英文|Model|View|Viewmodel|
|---|---|---|---|
|中文|模型|視圖|資料聯繫器|
#
* [視圖]←綁定→[資料聯繫器]→←[模型]
#
-----------------------------------------------
#
## MVC(Model View Controller)
#
|英文|Model|View|Controller|Database|
|---|---|---|---|---|
|中文|模型|視圖|控制器|資料庫|
#
* [視圖]→發送請求→[控制器]→[模型]→[資料庫]→回傳資料→[模型]→[控制器]→渲染→[視圖]
#
-----------------------------------------------
#
### 生命週期
#
|英文|中文|說明|
|---|---|---|
||開始創建|
|beforeCreate|準備載入資料|
||數據觀測建立|
|created|載入資料|要載入ajax要在這階段之後|
||編譯模板|
|beforeMount|準備繪製元件|
||模板建立完成|
|mounted|繪製元件|要操作DOM元素要在這階段之後|
||資料變動|
|updated|更新資料時觸發|
|activated||有\\<keep-alive>時才會觸發|
|deactivated||有\\<keep-alive>時才會觸發|
|beforeDestroy|準備移除資料|
||移除觀測、子元件、監聽事件|
|destroyed|移除資料|
#
-----------------------------------------------
#
## 開始使用Vue.js
#
* 使用 **element** (簡化:el)綁定HTML上的DOM元素。
#
* #app裡不能再建立#app。
#
* 若有多個.app只會綁定一個。
#
\`\`\`js
const app = new Vue({
  el: "#app"
});
\`\`\`
#
-----------------------------------------------
#
## v-text
#
* 使用\`v-text\`可將資料裡的"文字"帶入<標籤>。
#
* 簡化寫法 ***{{}}***。
#
\`\`\`html
<!--第一種寫法-->  
<div id="app">
  <p>{{apple}}</p>
  <p>{{banana[0]}}</p>
  <p>{{banana[1]}}</p>
  <p>{{banana[2]}}</p>
  <p>{{pineapple.kaohsiung}}</p>
  <p>{{pineapple.pingtung}}</p>
</div>

<!--第二種寫法-->
<div id="app">
  <p v-text="apple"></p>
  <p v-text="banana[0]"></p>
  <p v-text="banana[1]"></p>
  <p v-text="banana[2]"></p>
  <p v-text="pineapple.kaohsiung"></p>
  <p v-text="pineapple.pingtung"></p>
</div>
\`\`\`
#
\`\`\`js
const app = new Vue({
  el: "#app",
  data:{
    apple: "蘋果",
    banana: ["粉蕉","蜜蕉","芭蕉"],
    pineapple:{
      kaohsiung: "釋迦鳳梨",
      pingtung: "金鑽鳳梨"
    }
  }
});
\`\`\`
#
#### 輸出結果：
#
\`\`\`html
<div id="app">
  <p>蘋果</p>
  <p>粉蕉</p>
  <p>蜜蕉</p>
  <p>芭蕉</p>
  <p>釋迦鳳梨</p>
  <p>金鑽鳳梨</p>
</div>
\`\`\`
#
-----------------------------------------------
#
## v-text + substring()截取過長自串
#
\`\`\`html
<div id="app">
  <p>{{success.substring(3,7)}}</p>
</div>
\`\`\`
#
\`\`\`js
const app = new Vue({
  el: "#app",
  data:{
    success: "Hello World!!",
  }
});
\`\`\`
#
#### 輸出結果：
#
\`\`\`html
<div id="app">
  <p>lo W</p>
</div>
\`\`\`
#
\`substring(從第幾個開始擷取自串,截取到從前面數過來第幾個)\`
#
-----------------------------------------------
#
## v-text + parseInt()正整數 + 價錢處理
#
\`\`\`html
<div id="app">
  <p>優惠價：<span>{{discount*100}}折</span>parseInt(price*discount)元</p>
</div>
\`\`\`
#
\`\`\`js
const app = new Vue({
  el: "#app",
  data:{
    price: 360,
    discount: 0.79,
  }
});
\`\`\`
#
#### 輸出結果：
#
\`\`\`html
<div id="app">
  <p>優惠價：<span>79折</span>284元</p>
</div>
\`\`\`
#
\`substring(從第幾個開始擷取自串,截取到從前面數過來第幾個)\`
#
-----------------------------------------------
#
## v-html
#
* 使用\`v-html\`可將資料裡的HTML帶入<標籤>。
#
\`不建議在網頁上任意使用v-html，因為會容易遭受XSS攻擊，例如:輸入框\`
#
\`\`\`html
<!--第一種寫法-->  
<div id="app">
  {{{box}}}
</div>

<!--第二種寫法-->
<div id="app" v-html="box">

</div>
\`\`\`
#
\`\`\`js
const app = new Vue({
  el: "#app",
  data:{
    box:"<div class='box'>箱子</div>"
  }
});
\`\`\`
#
#### 輸出結果：
#
\`\`\`html
<div id="app">
  <div class='box'>箱子</div>
</div>
\`\`\`
#
-----------------------------------------------
#
## v-for
#
* 使用\`v-for\`會以迴圈的方式列印出資料。
#
\`\`\`html
<div id="app">
  <ul>
    <li v-for="(id,item) in shoplist">  <!--(第一個是序列,第二個是資料)-->
      <p>{{id+1}}</p>
      <p>名稱：{{item.name}}</p>
      <p>價錢：{{item.price}}</p>
      <p>生產國家：<span v-for="item in item.produce">{{item}}/</p>
    </li>
  </ul>
</div>
\`\`\`
#
\`\`\`js
const app = new Vue({
  el: "#app",
  data:{
    shoplist: [
      {
        name: "蘋果",
        price: 1000,
        produce: ["美國","日本"]
      },
      {
        name: "香蕉",
        price: 500,
        produce: ["台灣","韓國","菲律賓"]
      },
      {
        name: "鳳梨",
        price: 300,
        produce: ["泰國","越南"]
      }
    ]
  }
});
\`\`\`
#
#### 輸出結果：
#
\`\`\`html
<div id="app">
  <ul>
    <li>
      <p>1</p>
      <p>名稱：蘋果</p>
      <p>價錢：1000</p>
      <p>生產國家：<span>美國/日本/</p>
    </li>
    <li>
      <p>2</p>
      <p>名稱：香蕉</p>
      <p>價錢：500</p>
      <p>生產國家：<span>台灣/韓國/菲律賓/</p>
    </li>
    <li>
      <p>3</p>
      <p>名稱：鳳梨</p>
      <p>價錢：300</p>
      <p>生產國家：<span>泰國/越南/</p>
    </li>
  </ul>
</div>
\`\`\`
#
\`v-for標籤內再使用v-for就會找更內層的資料(item)\`
#
-----------------------------------------------
#
## v-model 文字綁定
#
* 使用\`v-model\`可以產生雙向綁定，在修改值時會同時改變。
#
\`\`\`html
<div id="app">
  <input type="text" v-model="apple">
  <p>{{apple}}</p>
</div>
\`\`\`
#
\`\`\`js
const app = new Vue({
  el: "#app",
  data:{
    apple: "蘋果"
  }
});
\`\`\`
#
#### 輸出結果：
#
\`\`\`html
<div id="app">
  <input type="text" v-model="apple">
  <p>蘋果</p>
</div>
\`\`\`
#
\`在<input>裡輸入文字，<p>就會改變內容\`
#
-----------------------------------------------
#
## v-model 樣式綁定
#
* 使用\`v-model\`可以產生雙向綁定，在修改值時會同時改變。
#
\`\`\`html
<div id="app">
  <input type="text" v-model="color">
  <p style="background-color:{{color}}">控制我的背景顏色</p>
</div>
\`\`\`
#
\`\`\`js
const app = new Vue({
  el: "#app",
  data:{
    color: "blue"
  }
});
\`\`\`
#
#### 輸出結果：
#
\`\`\`html
<div id="app">
  <input type="text" v-model="color"> 
  <p style="background-color:blue">控制我的背景顏色</p>
</div>
\`\`\`
#
\`在<input>裡輸入顏色名稱，<p>就會變換背景顏色\`
#
-----------------------------------------------
#
## v-model + radio按鈕 + 切換style樣式
#
\`\`\`html
<div id="app">
  <label>紅色</label>
  <input type="radio" v-model="color" value="red">
  <label>藍色</label>
  <input type="radio" v-model="color" value="blue">
  <p style="background-color:{{color}}">控制我的背景顏色</p>
</div>
\`\`\`
#
\`\`\`js
const app = new Vue({
  el: "#app",
  data:{
    color: "blue"
  }
});
\`\`\`
#
\`利用radio去切換data裡的值，再將這個值直接套用在style上\`
#
-----------------------------------------------
#
## v-model＋v-for 綁定清單 
#
* 使用\`v-model\`可以產生雙向綁定，在修改值時會同時改變。
#
\`\`\`html
<div id="app">
  <div v-for="item in name">
    <input type="text" v-model="item">
  </div>
  <ul>
    <li v-for="item in name">{{item}}</li>
  </ul>
</div>
\`\`\`
#
\`\`\`js
const app = new Vue({
  el: "#app",
  data:{
    name:["蘋果","香蕉","鳳梨"]
  }
});
\`\`\`
#
#### 輸出結果：
#
\`\`\`html
<div id="app">
  <div v-for="item in name">
    <input type="text">
    <input type="text">
    <input type="text">
  </div>
  <ul>
    <li>蘋果</li>
    <li>香蕉</li>
    <li>鳳梨</li>
  </ul>
</div>
\`\`\`
#
\`每個<input>都對應著一個<li>，變更內容時都會同步修改\`
#
-----------------------------------------------
#
## v-for + audio + data-num + jQuery
#
\`\`\`html
<div id="app"> 
    <div v-for="(item,id) in piano">
        <audio controls v-bind:data-num="id">
            <source v-bind:src="'audio/'+ item +'.wav'" type="audio/wav">
        </audio>
    </div>
</div>
\`\`\`
#
\`\`\`js
const app = new Vue({
    el: "#app",
    data: {
        piano: [1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7,8,8.5,9,9.5,10,11,11.5,12,12.5,13,13.5,14,15],
    },
    methods:{
        play: function(id,vol){
            $("audio[data-num="+id+"]")[0].volume = vol;
            $("audio[data-num="+id+"]")[0].currentTime = 0;
            $("audio[data-num="+id+"]")[0].play();
        }
    }
});

$(document).ready(function(){
  $("audio[data-num=3]")[0].play();
});
\`\`\`
#
\`利用data-num標示每個audio，用jQuery抓取出的對象是“陣列”，所以還要再加上[0]\`
\`.currentTime()是JS控制音檔的播放起始點\`
\`.volumn()是JS控制音檔音量的大小，範圍從0.0(靜音)到1.0(最大音量)\`
#
-----------------------------------------------
#
## v-if
#
* 使用\`v-if\`可判斷該<標籤>是否顯示。
#
* \`v-if\`與\`v-show\`的差異 : 
#
|名稱|v-if|v-show|
|---|---|---|
|效果|DOM元素消失|display:none|
#
\`\`\`html
<div id="app">
  <input type="checkbox" v-model="isShow">
  <p v-if="isShow">這段字要出現還是不出現？</p>
</div>
\`\`\`
#
\`\`\`js
const app = new Vue({
  el: "#app",
  data:{
    isShow: true
  }
});
\`\`\`
#
\`判斷isShow是否為true，如果是true：<p>就存在，如果是false:<p>就不存在\`
#
-----------------------------------------------
#
## v-if + v-for 判斷是否有折扣，無折購則顯示原價
#
\`\`\`html
<div id="app">
  <ul>
    <li v-for="item in shoplist">
      <span>名稱：{{item.name}}</span>
      <span v-if="item.is_discount">原價：\${{item.price}}</span>
      <span v-if="!item.is_discount">優惠價：\${{item.price*item.discount}}</span>
    </li>
  </ul>
</div>
\`\`\`
#
\`\`\`js
const app = new Vue({
  el: "#app",
  data:{
    shoplist: [
      {
        name: "蘋果",
        price: 1000,
        discount: 0.85,
        is_discount: true
      },
      {
        name: "香蕉",
        price: 500,
        discount: 0.79,
        is_discount: false
      },
      {
        name: "鳳梨",
        price: 300,
        discount: 0.5,
        is_discount: false
      }
    ]
  }
});
\`\`\`
#
\`is_discount用來表示有無折扣，v-if會把值是true的顯示，但加上！也會顯示false的值\`
#
-----------------------------------------------
#
## v-if + {{三元判斷式}} + 判斷是否使用class
#
|名稱|v-if|v-show|
|---|---|---|
|效果|DOM元素消失|display:none|
#
\`\`\`html
<div id="app">
  <!--可用checkbox勾選去做判斷-->
  <input type="checkbox" v-model="isActive">
  <p class="{{isActive?'active':''}}">加上active我的字會變紅色</p>
</div>
\`\`\`
#
\`\`\`js
const app = new Vue({
  el: "#app",
  data:{
    isActive: false
  }
});
\`\`\`
#
\`判斷isActive是否為true，如果是true：class就出現active存在，如果是false:class就為空\`
#
-----------------------------------------------
#
## v-on
#
* 使用\`v-on\`可增加使用者事件，例如滑鼠點擊、按下鍵盤等。
#
* 簡化寫法\`@\`。
#
\`\`\`html
<div id="app">
  <button v-on:click="add">按鈕</button>
  <!--簡化寫法@click="add"-->
  <p>{{price}}</p>
</div>
\`\`\`
#
\`\`\`js
const app = new Vue({
  el:"#app",
  data:{
    price: 25
  },
  methods:{
    add:function(){
      this.price = this.price + 5;
    }
  }
});
\`\`\`
#
\`一開始顯示25，每次點擊"按鈕"時，25都+5\`
#
-----------------------------------------------
#
## v-on:click + splice()刪除資料方法
#
\`\`\`html
<div id="app">
  <ul>
    <li v-for="(id,item) in fruits">{{item}}
      <button v-on:click="remove(id)">X</button> <!--使"remove"方法刪除第id項-->
    </li>
  </ul>
</div>
\`\`\`
#
\`\`\`js
const app = new Vue({
  el: "#app",
  data:{
    fruits:["蘋果","香蕉","鳳梨","蓮霧"]
  },
  methods:{
    remove: function (id,item){
      this.fruits.splice(id,1); //this等於data內的資料
    }
  }
});
\`\`\`
#
\`splice(從第幾個開始刪除,刪除幾項)\`
#
-----------------------------------------------
#
## v-on:click + push() + splice() + 計算總數
#
\`\`\`html
<div id="app">
  <button v-on:click="add('蘋果')">新增蘋果</button>
  <button v-on:click="add('香蕉')">新增香蕉</button>
  <button v-on:click="add('鳳梨')">新增鳳梨</button>
  <button v-on:click="add('蓮霧')">新增蓮霧</button>
  <ul>
    <li v-for="item in fruits" track-by='$index'>{{item}}
      <button v-on:click="remove(id)">X</button>
    </li>
  </ul>
  <p>目前總共：</p>
  <p>{{total.蘋果}}個蘋果</p>
  <p>{{total.香蕉}}個香蕉</p>
  <p>{{total.鳳梨}}個鳳梨</p>
  <p>{{total.蓮霧}}個蓮霧</p>
</div>

\`\`\`
#
\`\`\`js
const app = new Vue({
  el: "#app",
  data:{
    fruits: ["蘋果","香蕉","鳳梨","蓮霧"],
  },
  methods:{
    add: function(item){
      this.fruits.push(item);
    },
    remove: function(id){
      this.fruits.splice(id,1);
    } 
  },
  computed:{
    total: function(){
      let total = {
        蘋果: 0,
        香蕉: 0,
        鳳梨: 0,
        蓮霧: 0,
      }
      for(let i=0 ; i<this.fruits.length ; i++){
        total[this.fruits[i]]+=1;
      }
      return total;
    }
  }
});
\`\`\`
#
\`computed會自動計算數量後直接顯示，不用特別去觸發他\`
#
-----------------------------------------------
#
## v-on:click + push()資料新增方法
#
\`\`\`html
<div id="app">
  <button v-on:click="add('蘋果')">新增蘋果</button>
  <button v-on:click="add('香蕉')">新增香蕉</button>
  <button v-on:click="add('鳳梨')">新增鳳梨</button>
  <button v-on:click="add('蓮霧')">新增蓮霧</button>
  <ul>
    <li v-for="item in fruits" track-by='$index'>{{item}}</li>
  </ul>
</div>
\`\`\`
#
\`\`\`js
const app = new Vue({
  el: "#app",
  data:{
    fruits: ["蘋果","香蕉","鳳梨","蓮霧"],
  },
  methods:{
    add: function(item){
      this.fruits.push(item);
    }
  }
});
\`\`\`
#
\`記得vue1使用v-for時要在後面加上track-by='$index'作為資料中唯一的標識符\`
#
-----------------------------------------------
#
## v-bind
#
* 使用\`v-bind\`是用來綁定<標籤>上的屬性。
#
* 簡化寫法\`:\`。
#
\`\`\`html
<div id="app">
  <img v-bind:src="a" v-bind:class="b">
</div>
\`\`\`
#
\`\`\`js
const app = new Vue({
  el:"#app",
  data:{
    a: "images/picture.png",
    b: "img-fluid"
  }
});
\`\`\`
#
#### 輸出結果：
#
\`\`\`html
<div id="app">
  <img src="images/picture.png" class="img-fluid">
</div>
\`\`\`
#
-----------------------------------------------
#
## v-bind + ajax + background-image
#
\`\`\`html
<div id="app">
  <ul>
    <li v-for="item in imgUrl">
      <div class="img-fluid" v-bind:style="'background-image:url'+{{item.url}}+')'"></div>
    </li>
  </ul>
</div>
\`\`\`
#
\`\`\`js
const app = new Vue({
  el: "#app",
  data:{
    imgUrl:[]
  },
  ready: function(){
    $.ajax({
      url: "...",
      success: function(item){
        app.imgUrl =  JSON.parse(item);
      }
    })
  }
});
\`\`\`
#
-----------------------------------------------
#
## v-class動態切換效果
#
* 使用\`:class\`可綁定<標籤>，判斷是否套用\`css\`樣式。
#
\`\`\`html
<div id="app">
  <button @click="a=!a" :class="{'red':a}">按鈕</button>
  <!--:class="{'css樣式名稱':判斷式}"-->
</div>
\`\`\`
#
\`\`\`css
.red{
  background-color: red;
}
\`\`\`
#
\`\`\`js
const app = new Vue({
  el:"#app",
  data:{
    a: false
  }
});
\`\`\`
#
\`當點擊的時候"按鈕"時會變紅色\`
#
-----------------------------------------------
#
## vue + ajax 載入api資料(一串純文字)
#
\`\`\`html
<div id="app">
  <p>{{text}}</p>
</div>
\`\`\`
#
\`\`\`js
const app = new Vue({
  el: "#app",
  data:{
    text: "這是預載入之前的文字"
  },
  ready: function(){
    $.ajax({
      url: "https://awiclass.monoame.com/api/command.php?type=get&name=notifydata",
      success: function(item){
        app.text = item;
      }
    })
  }
});
\`\`\`
#
#### 輸出結果：
#
\`\`\`html
<div id="app">
  <p>哈囉!! 這邊是你用AJAX載入的純文字公告!!</p>
</div>
\`\`\`
#
-----------------------------------------------
#
## vue + ajax 載入api資料(JSON)
#
\`\`\`html
<div id="app">
  <h5 v-if="items.length==0">資料載入中...</h5>
  <ul>
    <li v-for="item in items">{{item.name}}\${{item.price}}</li>
  </ul>
</div>
\`\`\`
#
\`\`\`js
const app = new Vue({
  el: "#app",
  data:{
    items: []
  },
  ready: function(){
    $.ajax({
      url: "https://awiclass.monoame.com/api/command.php?type=get&name=itemdata",
      success: function(item){
        app.items = JSON.parse(item);
      }
    })
  }
});
\`\`\`
#
\`JSON.parse()是將JSON格式的字串解析為JavaScript物件或陣列\`
#
-----------------------------------------------
#
## vue + ajax + new Date()日期格式計算
#
* 若要計算出「倒數剩餘天數」，利用開始時間-結束時間
#
\`\`\`html
<div id="app">
  <div v-for="item in classDate">
    <div>剩{{ remainingDays }}天</div>
  </div>
</div>
\`\`\`
#
\`\`\`js
const app = new Vue({
    el: '#app',
    data:{
        classDate: [],
    },
    ready: function(){
        $.ajax({
            url: "https://awiclass.monoame.com/api/command.php?type=get&name=hahowdata",
            success: function(item){
                app.classDate = JSON.parse(item);
            }
        })
    },
    computed: {
        remainingDays: function(){
            for (let i=0;i<this.classDate.length;i++){
                return parseInt((new Date(this.classDate[i].proposalDueTime) - new Date(this.classDate[i].incubateTime)) / (1000 * 60 * 60 * 24));
            }
        }
    }
});
\`\`\`
#
\`將物件的日期格式使用new Date()即可相減做計算，將得到的值/毫秒(1000)/分鐘(60)/小時(60)/天(24)，最後再用parseInt()取得正整數\`
#`,__vite_glob_0_25=Object.freeze(Object.defineProperty({__proto__:null,default:_20210601Vue_______},Symbol.toStringTag,{value:"Module"})),_20210602VueTodolist_____=`---
title: 【Vue】vue-todolist(精簡版)
date: 2021-06-02
tags: ["vue"]
---
#
### 取得輸入框裡的值，點擊按鈕，新增到清單上。
#
<!--more-->
#
1. 在 **data** 新增[newTodo]="空字串"，用 **v-model** 與 ***輸入框*** 綁定。
#
2. 在 ***新增按鈕*** 上綁定 **@click** 事件[addTodo]，在 **methods** 新增[addTodo]方法。
#
3. 在 **data** 新增[todos]=[空陣列]。
#
4. 使用 **Date.now()** 取得現在時間作為編號 **(id)** ，並賦予到[id]變數上。
#
5. 將[newTodo]，賦予到[title]變數上。
#
6. 將[id]、[title]和[checkbox]:false組成{物件}，使用 **push()** 將組成的{物件}傳入[todos]。
#
7. 在 ***\\<li>*** 使用 **v-for** 列印出[todos]的所有{物件}，並且將{物件}命名為 **(item)** (item in todos)。
#
8. 將 **(item)** 的[id]用 **:for**綁定在 ***\\<label>*** 上。
#
9. 將 **(item)** 的[id]用 **:id**綁定在 ***checkbox*** 上。
#
10. 將 **(item)** 的[title]用 **{{}}** 顯示在 ***\\<label>文字上*** 。
#
11. 將 **(item)** 的[checkbox]用 **v-model** 綁定在 ***checkbox*** 上。
#
\`\`\`js
// <-----html----->
#app
  //1.
  input(type="text" v-model="newTodo")
  //2.
  button(type="button" @click="addTodo") 新增
  hr
  button 全部
  button 未完成
  button 已完成
  hr
  ul
    //7.
    li(v-for="item in todos") 
      .div
        //9.11.
        input(type="checkbox" :id="item.id" v-model="item.checkbox")
        //8.10.
        label(:for="item.id") {{item.title}}
        button &times
      input(type="text")
  hr
  span 還有 X 筆任務未完成
  button 清除所有任務

// <-----js----->
let app = new Vue({
  el: "#app",
  data: {
    //1.
    newTodo: "",
    //3.
    todos: [],
  },
  methods: {
    //2.
    addTodo: function(){
      //4.
      let id = Date.now();  
      //5.
      let title = this.newTodo; 
      //6.
      this.todos.push(
        {
          id: id,
          title: title,
          checkbox: false
        }
      )
    }
  }
});
\`\`\`
#
-----------------------------------------------
#
### 讓輸入框空值時不執行，且執行完<input>變空值。點擊清單上按鈕該項會被刪除。
#
1. 在 **methods** 裡的[addTodo]，新增 **if** 判斷式，如果 ***輸入框*** 裡沒有值就不執行。
#
2. 在 **else** 判斷式最後方，清空 ***輸入框*** 裡的值。 
#
3. 在 ***刪除按鈕*** 綁定 **@click** 事件[removeTodo]，並且將 **(item)** 帶入。
#
4. 在 **methods** 新增[removeTodo]方法，並將 **(item)** 帶入參數。
#
5. 定義一個變數[key]為引索位置。
#
6. 使用 **forEach()** 將[todos]的每一項(a)和每一項的位置(b)都拿出來比對，如果傳進來 **(item)** 的[id]等於每一項的[id]，就讓每一項的位置賦予到引索位置。
#
7. 最後在使用**splice()** 刪除[todos]裡的項目，(刪除第[key]項，刪除1個)。
#
\`\`\`js
// <-----html----->
#app
  input(type="text" v-model="newTodo")
  button(type="button" @click="addTodo") 新增
  hr
  button 全部
  button 未完成
  button 已完成
  hr
  ul
    li(v-for="item in todos") 
      .div
        input(type="checkbox" :id="item.id" v-model="item.checkbox")
        label(:for="item.id") {{item.title}}
        //3.
        button(@click="removeTodo(item)") &times
      input(type="text")
  hr
  span 還有 X 筆任務未完成
  button 清除所有任務

// <-----js----->
let app = new Vue({
  el: "#app",
  data: {
    newTodo: "",
    todos: [],
  },
  methods: {
    addTodo: function(){
      //1.
      if(!this.newTodo){
        return;
      }else{
        let id = Date.now();
        let title = this.newTodo;
        this.todos.push(
          {
            id: id,
            title: title,
            checkbox: false
          }
        );
        //2.
        this.newTodo = "";
      }
    },
    //4.
    removeTodo: function(item){
      //5.
      let key;
      //6.
      this.todos.forEach(function(a,b){
        if(item.id == a.id){
          key = b;
        }
      });
      //7.
      this.todos.splice(key,1);
    }
  }
});
\`\`\`
#
-----------------------------------------------
#
### 勾選checkbox會套用文字刪除線，並且點擊可以切換，[全部]、[未完成]、[已完成]。
1. 在css新增[deleteLine]樣式。
#
2. 在 ***\\<label>*** 綁定 **:class** 判斷式，判斷[todos]的[checkbox]是否有勾選。
#
3. 在 **data** 新增[tag]來切換頁籤用，預設是"全部"。
#
4. 在三個頁籤上分別綁定 **@click** 點擊事件，並且直接改變[tag]的值:"all"、"undone"、"completed"。
#
5. 在 **computed** 新增[filterTodo]計算屬性。
#
6. 使用 **switch** 參數帶[tag]，判斷三種結果:"all"、"undone"、"completed"。
#
7. 如果[tag]是"all"的話，就全部回傳[todos]。
#
8. 如果[tag]是"undone"的話，就只回傳[completed]值是false的 **(item)** 。
#
9. 如果[tag]是"completed"的話，就只回傳[completed]值是true的 **(item)**。
#
10. 在 ***\\<li>*** 的 **v-for** 中將[todos]改為計算過後的[filterTodo](item in filterTodo)。
#
\`\`\`js
// <-----html----->
#app
  input(type="text" v-model="newTodo")
  button(type="button" @click="addTodo") 新增
  hr
  //4.
  button(@click=" tag = 'all' ") 全部
  //4.
  button(@click=" tag = 'undone' ") 未完成
  //4.
  button(@click=" tag = 'completed' ") 已完成
  hr
  ul
    //10.
    li(v-for="item in filterTodo") 
      .div
        input(type="checkbox" :id="item.id" v-model="item.checkbox")
        //2.
        label(:for="item.id" :class="{ 'deleteLine' : item.checkbox }") {{item.title}}
        button(@click="removeTodo(item)") &times
      input(type="text")
  hr
  span 還有 X 筆任務未完成
  button 清除所有任務

// <-----css----->
//1.
.deleteLine  
  text-decoration: line-through

// <-----js----->
let app = new Vue({
  el: "#app",
  data: {
    newTodo: "",
    todos: [],
    //3.
    tag: "all"
  },
  methods: {
    addTodo: function(){
      if(!this.newTodo){
        return;
      }else{
        let id = Date.now();
        let title = this.newTodo;
        this.todos.push(
          {
            id: id,
            title: title,
            chcekbox: false
          }
        );
        this.newTodo = "";
      }
    },
    removeTodo: function(item){
      let key;
      this.todos.forEach(function(a,b){
        if(item.id == a.id){
          key = b;
        }
      });
      this.todos.splice(key,1);
    }
  },
  //5.
  computed:{
    //6.
    filterTodo: function(){
      switch(this.tag){
        //7.
        case "all":
          return this.todos;
          break;
        //8.
        case "undone":
          return this.todos.filter(item => item.checkbox == false);
          break;
        //9.
        case "completed":
          return this.todos.filter(item => item.checkbox == true);
          break;
      }
    }
  }
});
\`\`\`
#
-----------------------------------------------
#
### 滑鼠雙擊，可編輯清單，並且按下鍵盤[enter]鍵，可完成編輯。
#
1. 在 ***\\<li>*** 綁定 **@dblclick** 雙擊事件[editTodo]，並將(item)帶入，然後在 **methods** 新增[editTodo]。
#
2. 在 **data** 新增[cacheTodo]為{空物件}，作為預存資料的地方，用來判定[id]是否傳入。
#
3. 在 **data** 新增[cacheTitle]為"空字串"，作為預存標題的地方。
#
4. 將 **修改輸入框** 用 **v-model** 綁定[cacheTitle]。
#
5. 在[editTodo]方法中，將 **(item)** 傳入[cacheTodo]的{物件}。
#
6. 將 **(item)** 的[title]傳入[cacheTitle]的"字串"。
#
7. 使用 **v-if** 判斷在 ***\\<li>*** 底下的 ***\\<div>*** 是否顯示，如果還沒雙擊(item.id != cacheTodo.id)，就顯示。
#
8. 使用 **v-if** 綁定 ***修改輸入框*** 是否顯示，如果已經雙擊(item.id == cacheTodo.id)，就顯示。
#
9. 在 ***修改輸入框*** 新增 **@keyup.enter** 鍵盤事件[editDone]，並將 **(item)** 帶入，然後在 **methods** 中新增[editDone]方法。
#
10. 將預存在輸入框裡的文字(cacheTitle)回傳到原本的物件文字(item.title)。
#
11. 顯示原本畫面，讓修改輸入框消失(this.cacheTodo={})，這樣[cacheTodo]的[id]就會不等於 **(item)** 的[id] 。
#
\`\`\`js
// <-----html----->
#app
  input(type="text" v-model="newTodo")
  button(type="button" @click="addTodo") 新增
  hr
  button(@click=" tag = 'all' ") 全部
  button(@click=" tag = 'undone' ") 未完成
  button(@click=" tag = 'completed' ") 已完成
  hr
  ul
    //1.
    li(v-for="item in filterTodo" @dblclick="editTodo(item)")
      //7.
      .div(v-if="item.id != cacheTodo.id")
        input(type="checkbox" :id="item.id" v-model="item.checkbox")
        label(:for="item.id" :class="{ 'deleteLine' : item.checkbox }") {{item.title}}
        button(@click="removeTodo(item)") &times
      //4.8.9.
      input(type="text" v-if="item.id == cacheTodo.id" v-model="cacheTitle" @keyup.enter="editDone(item)")
  hr
  span 還有 X 筆任務未完成
  button 清除所有任務

// <-----css----->
.deleteLine  
  text-decoration: line-through
      
// <-----js----->
let app = new Vue({
  el: "#app",
  data: {
    newTodo: "",
    todos: [],
    tag: "all",
    //2.
    cacheTodo: {},
    cacheTitle: ""
  },
  methods: {
    addTodo: function(){
      if(!this.newTodo){
        return;
      }else{
        let id = Date.now();
        let title = this.newTodo;
        this.todos.push(
          {
            id: id,
            title: title,
            checkbox: false
          }
        );
        this.newTodo = "";
      }
    },
    removeTodo: function(item){
      let key;
      this.todos.forEach(function(a,b){
        if(item.id == a.id){
          key = b;
        }
      });
      this.todos.splice(key,1);
    },
    //1.
    editTodo: function(item){
      //5.
      this.cacheTodo = item;
      //6.
      this.cacheTitle = item.title;
    },
    //8.
    editDone: function(item){
      //10.
      item.title = this.cacheTitle;
      //11.
      this.cacheTodo = {};
    }
  },
  computed:{
    filterTodo: function(){
      switch(this.tag){
        case "all":
          return this.todos;
          break;
        case "undone":
          return this.todos.filter(item => item.checkbox == false);
          break;
        case "completed":
          return this.todos.filter(item => item.checkbox == true);
          break;
      }
    }
  }
});
\`\`\`
#
-----------------------------------------------
#
### 顯示還有幾筆未完成。點擊按鈕清除所有項目。
#
1. 在 **computed** 新增[undoneNum]計算屬性。
#
2. 將[todos]過濾[completed]是false的{物件}，並將{物件}回傳到[todos]裡。
#
3. 將經過運算的[undoneNum]，使用 **{{}}** 顯示在 ***\\<span>文字*** 上，並加上 **.length** 來顯示(幾)筆。
#
4. 在清除按鈕上新增 **@click** 點擊事件[clearTodo]，然後在**methods**中新增[clearTodo]方法。
#
5. 使用if判斷式，判斷彈跳確認框 **confirm()** 的結果是否刪除[todos]。
#
\`\`\`js
// <-----html----->
#app
  input(type="text" v-model="newTodo")
  button(type="button" @click="addTodo") 新增
  hr
  button(@click=" tag = 'all' ") 全部
  button(@click=" tag = 'undone' ") 未完成
  button(@click=" tag = 'completed' ") 已完成
  hr
  ul
    li(v-for="item in filterTodo" @dblclick="editTodo(item)")
      .div(v-if="item.id != cacheTodo.id")
        input(type="checkbox" :id="item.id" v-model="item.checkbox")
        label(:for="item.id" :class="{ 'deleteLine' : item.checkbox }") {{item.title}}
        button(@click="removeTodo(item)") &times
      input(type="text" v-if="item.id == cacheTodo.id" v-model="cacheTitle" @keyup.enter="editDone(item)")
  hr
  //3.
  span 還有{{undoneNum.length}}筆任務未完成
  //4.
  button(@click="clearTodo") 清除所有任務

// <-----css----->
.deleteLine  
  text-decoration: line-through
      
// <-----js----->
let app = new Vue({
  el: "#app",
  data: {
    newTodo: "",
    todos: [],
    tag: "all",
    cacheTodo: {},
    cacheTitle: ""
  },
  methods: {
    addTodo: function(){
      if(!this.newTodo){
        return;
      }else{
        let id = Date.now();
        let title = this.newTodo;
        this.todos.push(
          {
            id: id,
            title: title,
            checkbox: false
          }
        );
        this.newTodo = "";
      }
    },
    removeTodo: function(item){
      let key;
      this.todos.forEach(function(a,b){
        if(item.id == a.id){
          key = b;
        }
      });
      this.todos.splice(key,1);
    },
    editTodo: function(item){
      this.cacheTodo = item;
      this.cacheTitle = item.title;
    },
    editDone: function(item){
      item.title = this.cacheTitle;
      this.cacheTodo = {};
    },
    //5.
    clearTodo: function(){
      if( confirm("確認清除所有項目嗎?") ){
        this.todos = [];
      }else{
        return;
      }
    }
  },
  computed:{
    filterTodo: function(){
      switch(this.tag){
        case "all":
          return this.todos;
          break;
        case "undone":
          return this.todos.filter(item => item.checkbox == false);
          break;
        case "completed":
          return this.todos.filter(item => item.checkbox == true);
          break;
      }
    },
    //1.
    undoneNum: function(){
      //2.
      return this.todos.filter(item => item.checkbox == false);
    }
  }
});
\`\`\`
#
-----------------------------------------------
#
> 補充說明
>
> [CodePen範例連結](https://codepen.io/jack842248/pen/MWbYyKp)`,__vite_glob_0_26=Object.freeze(Object.defineProperty({__proto__:null,default:_20210602VueTodolist_____},Symbol.toStringTag,{value:"Module"})),_20210603VueTodolist_Bootstrap__=`---
title: 【Vue】vue-todolist(Bootstrap版)
date: 2021-06-03
tags: ["vue"]
---
#
### 建立完成的Bootstrap4初始版型
#
<!--more-->
#
\`\`\`css
#app.container.my-3
  .input-group.mb-3
    .input-group-prepend
      span.input-group-text 待辦事項
    input.form-control(type='text' placeholder='準備要做的任務')
    .input-group-append
      button.btn.btn-primary(type='button') 新增
  .card.text-center
    .card-header
      ul.nav.nav-tabs.card-header-tabs
        li.nav-item
          a.nav-link.active(href='#') 全部
        li.nav-item
          a.nav-link(href='#') 進行中
        li.nav-item
          a.nav-link(href='#') 已完成
    ul.list-group.list-group-flush.text-left
      li.list-group-item(v-for="item in filterTodo")
        .d-flex
          .form-check
            input.form-check-input(type='checkbox' id="a1")
            label.form-check-label(:for='item.id') 待辦事項一
          button.close.ml-auto(type='button')
            span &times;
        input.form-control(type='text')
    .card-footer.d-flex.justify-content-between
      span 還有X筆任務未完成
      a(href='#') 清除所有任務
\`\`\`
#
-----------------------------------------------
#
### 撰寫Vue.js後的HTML程式碼
#
\`\`\`js
#app.container.my-3
  .input-group.mb-3
    .input-group-prepend
      span.input-group-text 待辦事項
    input.form-control(type='text' placeholder='準備要做的任務' v-model="newTodo")
    .input-group-append
      button.btn.btn-primary(type='button' @click="addTodo") 新增
  .card.text-center
    .card-header
      ul.nav.nav-tabs.card-header-tabs
        li.nav-item
          a.nav-link(href='#' :class="{'active':visibility == 'all'}" @click="visibility='all'") 全部
        li.nav-item
          a.nav-link(href='#' :class="{'active':visibility == 'active'}" @click="visibility='active'") 進行中
        li.nav-item
          a.nav-link(href='#' :class="{'active':visibility == 'completed'}" @click="visibility='completed'") 已完成
    ul.list-group.list-group-flush.text-left
      li.list-group-item(v-for="item in filterTodo" @dblclick="editTodo(item)")
        .d-flex(v-if="item.id !== cacheTodo.id")
          .form-check
            input.form-check-input(type='checkbox' :id="item.id" v-model="item.completed" @ketup.enter="addTodo")
            label.form-check-label(:for='item.id' :class="{'completed':item.completed}") {{ item.title }}
          button.close.ml-auto(type='button' @click="removeTodo(item)")
            span &times;
        input.form-control(type='text' v-if="item.id === cacheTodo.id" v-model="cacheTitle" @keyup.esc="cancelEdit" @keyup.enter="doneEdit(item)")
    .card-footer.d-flex.justify-content-between
      span 還有{{doneNum.length}}筆任務未完成
      a(href='#' @click="clearTodo") 清除所有任務
\`\`\`
#
### 撰寫Vue.js後的JS程式碼
#
\`\`\`js
let app = new Vue({
  el:"#app",
  data:{
    newTodo:"",
    todos:[
      {
        id: "123",
        title: "任務一",
        completed: false
      }
    ],
    visibility: "all",
    cacheTodo: {},
    cacheTitle: ""
  },
  methods:{
    addTodo: function(){
      let value = this.newTodo.trim();
      let timestamp = Math.floor(Date.now());
      if(!value){
        return;
      }else{
        this.todos.push(
          {
            id: timestamp,
            title: value,
            completed: false
          }
        );
        this.newTodo = "";
      }
    },
    removeTodo: function(todo){
      let newIndex = "";
      let vm = this;
      vm.todos.forEach(function(item,key){
        if(todo.id === item.id){
          newIndex = key;
        }
      })
      this.todos.splice(newIndex,1);
    },
    editTodo: function(item){
      this.cacheTodo = item;
      this.cacheTitle = item.title;
    },
    cancelEdit: function(){
      this.cacheTodo = {};
    },
    doneEdit: function(item){
      item.title = this.cacheTitle;
      this.cacheTitle = "";
      this.cacheTodo = {};
    },
    clearTodo: function(item){
      if(confirm("確認清除所有項目嗎?")){
        this.todos = [];
      }else{
        return;
      }
    }
  },
  computed:{
    filterTodo: function(){
      if(this.visibility == "all"){
        return this.todos;
      }else if(this.visibility == "active"){
        let newTodos = [];
        this.todos.forEach(function(item){
          if(!item.completed){
            newTodos.push(item);
          }
        });
        return newTodos;
      }else if(this.visibility == "completed"){
        let newTodos = [];
        this.todos.forEach(function(item){
          if(item.completed){
            newTodos.push(item);
          }
        });
        return newTodos;
      }
    },
    doneNum: function(item){
      return this.todos.filter(item => item.completed == false);
    }
  }
});
\`\`\`
#
-----------------------------------------------
#
> 補充說明
>
> [CodePen範例連結](https://codepen.io/jack842248/pen/mdOJNBB)`,__vite_glob_0_27=Object.freeze(Object.defineProperty({__proto__:null,default:_20210603VueTodolist_Bootstrap__},Symbol.toStringTag,{value:"Module"})),_20210604Vue_______=`---
title: 【Vue】進階應用方法
date: 2021-06-04
tags: ["vue"]
---
#
### v-text模板語法
#
<!--more-->
#
* 可以插入 **運算子** 來呈現結果。(範例一)
#
* 使用 **v-once** 可以只綁定一次，之後在修改不會變更。(範例二)
#
* 可以直接撰寫 **javascript** 。(範例三)
#
\`\`\`js
// <-----html----->
#app
  //** 範例一 **//
  p {{ a + b }}  //100300
  p {{ a * b }}  //30000
  p {{ a == b }}  //false

  //** 範例二 **//
  p(v-text="b" v-once)  //300

  //** 範例三 **//
  p {{ b.split() }}  //["300"] 

// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a: 100,
    b: "300"
  }
});
\`\`\`
#
-----------------------------------------------
#
### :class動態切換樣式
#
* 使用 **判斷式** 來決定是否套用樣式。(範例一)
#
* 以{物件}方式套用樣式。(範例二)
#
* 以[陣列]方式套用樣式。(範例三)
#
* 將切換綁定在 **button** 上。(範例四)
#
* 將切換綁定在 **checkbox** 上。(範例五)
#
* 直接寫入行內 **style** 樣式。(範例六)
#
\`屬性名稱不能有『-』，如果有的話，第二個單字的第一個字母改大寫，例如:backgroundColor\`
#
\`\`\`js
// <-----html----->
#app
  //** 範例一 **//
  .box(:class="{'rotate':a}")

  //** 範例二 **//
  .box(:class="{ 'rotate':a , 'red':a }")
  .box(:class="b")

  //** 範例三 **//
  .box(:class="[ 'rotate' , 'red' ]")
  .box(:class="c")

  //** 範例四 **//
  .box(:class="d")
  button(@click="d.red = !d.red")

  //** 範例五 **//
  .box(:class="e")
  input(type="checkbox" v-model="e" value="red")

  //** 範例六 **//
  .box(:style="[{backgroundColor: 'red'},{transform: 'rotate(45deg)'}]")

// <-----css----->
.box
  width: 30px
  height: 30px
  border: solid 1px

.rotate
  transform: rotate(45deg)

.red
  background-color: red

// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a: true,
    b: { rotate: true , red: true },
    c: [ 'rotate' , 'red' ],
    d: { red: false },
    e: []
  }
});
\`\`\`
#
-----------------------------------------------
#
### v-for陣列與物件迴圈
#
* \\<template>標籤本身不會被v-for列印。(範例一)
#
* 可單純列印數字。(範例二)
#
* 陣列的[key]是 **位置** ，物件的[key]是 **名稱** 。(範例三)
#
* 使用 **v-if** 可以篩選 **v-for** 的結果。
#
\`\`\`js
// <-----html----->
#app
  p(v-for="item in a") {{item.name}}  //蘋果  //香蕉  //鳳梨
  
  //** 範例一 **//
  template(v-for="item in a") {{item.name}}  //蘋果香蕉鳳梨
  
  //** 範例二 **//
  p(v-for="item in 5") {{item}}  //1  //2  //3  //4  //5
  
  //** 範例三 **//
  p(v-for="(item,key) in a") {{key}}  //0  //1  //2  
  p(v-for="(item,key) in b") {{key}}  //apple  //banana  //pineapple

  //** 範例四 **//
  p(v-for="item in a" v-if="item.amount > 200") {{item.name}}  //蘋果  //香蕉

// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a:[
      {name: "蘋果" ,amount: 100},
      {name: "香蕉" ,amount: 300},
      {name: "鳳梨" ,amount: 500}
    ],
    b:{
      apple:{
        name: "蘋果",
        amount: 100
      },
      banana:{
        name: "香蕉",
        amount: 300
      },
      pineapple:{
        name: "鳳梨",
        amount: 500
      }
    }
  }
});
\`\`\`
#
* 使用 **Vue.set** 可以傳入 **v-for** 資料。
#
\`\`\`js
// <-----html----->
#app
  p(v-for="item in a") {{item.name}}
  button(@click="change") 按鈕
  
// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a:[
      {name: "蘋果" ,amount: 100},
      {name: "香蕉" ,amount: 300},
      {name: "鳳梨" ,amount: 500}
    ]
  },
  methods:{
    change: function(){
      Vue.set( this.a , 0 , {name: "芭樂"} );
      //Vue.set( 傳入的目標 , key , 傳入的東西 );
    }
  }
});
\`\`\`
#
* 點擊按鈕篩選輸入框裡的值。
#
\`\`\`js
// <-----html----->
#app
  input(type="text" v-model="c")
  button(@click="filter") 按鈕
  p(v-for="item in b") {{item.amount}}
  
// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a:[
      {name: "蘋果" ,amount: 100},
      {name: "香蕉" ,amount: 300},
      {name: "鳳梨" ,amount: 500}
    ],
    b: [],
    c: ""
  },
  methods:{
    filter: function(){
      if(this.c == ""){
        return;
      }else{
        this.b = this.a.filter(item => item.name.match(this.c));
      }
    }
  }
});
\`\`\`
#
-----------------------------------------------
#
### methods
#
*  點擊按鈕，讓數值增加或減少。
#
\`\`\`js
// <-----html----->
#app
  button(@click="add") 增加
  span {{a}}
  button(@click="reduce") 減少

// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a: 50
  },
  methods:{
    add: function(){
      this.a -= 1 ;
    },
    reduce: function(){
      this.a += 1 ;
    }
  }
});
\`\`\`
#
*  點擊按鈕，讓數值增加或減少結合 **v-for** 。
#
\`\`\`js
// <-----html----->
ul#app
  li(v-for="item in a")
    button(@click="add(item)") 增加
    span {{item.amount}}
    button(@click="reduce(item)") 減少

// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a:[
      {name: "蘋果" ,amount: 100},
      {name: "香蕉" ,amount: 300},
      {name: "鳳梨" ,amount: 500}
    ]
  },
  methods:{
    add: function(item){
      item.amount += 1;
    },
    reduce: function(item){
      item.amount -= 1;
    }
  }
});
\`\`\`
#
-----------------------------------------------
#
### computed計算屬性
#
* 有緩存資料的能力，效能比methods好。
#
* 自動篩選輸入框裡的值。
#
\`\`\`js
// <-----html----->
#app
  input(v-model="b")
  p(v-for="item in filter") {{item.amount}}

// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a:[
      {name:"蘋果",amount:100},
      {name:"香蕉",amount:300},
      {name:"鳳梨",amount:500},
    ],
    b: "",
  },
  computed:{
    filter: function(){
      if(this.b == ""){
        return;
      }else{
        return this.a.filter(item => item.name.match(this.b));
      }
    }  
  }
});
\`\`\`
#
* 自動調整顯示正確的時間格式。
#
\`\`\`js
// <-----html----->
#app
  p {{nowDate}}

// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a : 0
  },
  computed:{
    nowDate: function(){
      let date = new Date(this.a * 1000);
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate() + 1;
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      return \`\${year}年\${month}月\${day}日\${hours}時\${minutes}分\${seconds}秒\`;
    }
  },
  mounted: function(){
    this.a = Math.floor(Date.now() / 1000);
  }
});
\`\`\`
#
-----------------------------------------------
#
### watch
#
* 監控資料有無更動，再執行其他方法。
#
\`\`\`js
// <-----html----->
#app
  button(@click=" a = '已經送出' ") {{a}}
  //點擊送出→已經送出→再次送出→已經送出→再次送出...

// <-----js----->
var app = new Vue({
  el: "#app",
  data:{
    a: "點擊送出",
  },
  watch:{
    a: function(){
      setTimeout(() => {
        this.a = "再次送出";   
      },3000);
    }
  }
});
\`\`\``,__vite_glob_0_28=Object.freeze(Object.defineProperty({__proto__:null,default:_20210604Vue_______},Symbol.toStringTag,{value:"Module"})),_20210605Vue_______=`---
title: 【Vue】切換應用方法
date: 2021-06-05
tags: ["vue"]
---
#
### radio(三項切換)
#
<!--more-->
#
*  **v-on** + **v-if** 方法。
#
\`\`\`js
// <-----html----->
#app
  input(type="radio" name="a" @click="a='A'")
  input(type="radio" name="a" @click="a='B'")
  input(type="radio" name="a" @click="a='C'")
  p(v-if=" a=='A' ") 蘋果
  p(v-else-if=" a=='B' ") 香蕉
  p(v-else-if=" a=='C' ") 鳳梨

// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a: "A"
  }
});
\`\`\`
#
*  **v-on** + **{{}}** 方法。
#
\`\`\`js
// <-----html----->
#app
  input(type="radio" name="a" @click="a='蘋果'")
  input(type="radio" name="a" @click="a='香蕉'")
  input(type="radio" name="a" @click="a='鳳梨'")
  p {{a}}

// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a: "蘋果"
  }
});
\`\`\`
#
*  **v-for** + **v-on** + **{{}}** 方法。
#
\`\`\`js
// <-----html----->
#app
  input(v-for="item in b" type="radio" name="a" @click="change(item)")
  p {{a}}

// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a: "",
    b:[
      {name: "蘋果", amount: 100},
      {name: "香蕉", amount: 300},
      {name: "鳳梨", amount: 500}
    ],
  },
  methods:{
    change: function(item){
      switch(item.name){
        case "蘋果":
          this.a = 100;
          break;
        case "香蕉":
          this.a = 300;
          break;
        case "鳳梨":
          this.a = 500;
          break;
      }
    }
  }
});
\`\`\`
#
-----------------------------------------------
#
### checkbox(兩項切換)
#
*  **v-model** + **v-if** 方法。
#
\`\`\`js
// <-----html----->
#app
  input(type="checkbox" v-model="a")

  //** 範例一 **//
  p(v-if="a==true") 蘋果
  p(v-if="a==false") 香蕉

  //** 範例二 **//
  p(v-if="a") 蘋果
  p(v-if="!a") 香蕉

  //** 範例三 **//
  p(v-if="a") 蘋果
  p(v-else) 香蕉

// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a: true
  }
});
\`\`\`
#
*  **v-on** + **v-if** 方法。
#
\`\`\`js
// <-----html----->
#app
  input(type="checkbox" @click="change")
  p(v-if="a") 蘋果
  p(v-if="!a") 香蕉

// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a: true
  },
  methods:{
    change: function(){
      this.a = !this.a;
    }
  }
});
\`\`\`
#
* 複選框(會先呈現預設值)。
#
\`\`\`js
// <-----html----->
#app
  input(type="checkbox" v-model="a" true-value="蘋果" false-value="香蕉")
  p {{a}}

// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a: "蘋果"
  }
});
\`\`\`
#
* 切換輸入框，需加入 **:key** 才能同時把值也切換。
#
\`\`\`js
// <-----html----->
#app
  input(v-if="a" type="text" placeholder="蘋果" :key="a")
  input(v-if="!a" type="text" placeholder="香蕉" :key="b")
  input(type="checkbox" v-model="a")

// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a: true
  }
});
\`\`\`
#
-----------------------------------------------
#
### select(多選)
#
*  **v-model** + **{{}}** 方法。
#
\`\`\`js
// <-----html----->
#app
  select(v-model="a")
    option(value="" hidden) 請選擇
    option(value="100") 蘋果
    option(value="300") 香蕉
    option(value="500") 鳳梨
  p {{a}}

// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a: "",
  }
});
\`\`\`
#
*  **v-model** + **v-for** + **{{}}** 方法。
#
\`\`\`js
// <-----html----->
#app
  select(v-model="a")
    option(value="" hidden) 請選擇
    option(v-for="item in b" :value="item.amount") {{item.name}}
  p {{a}}個
  
// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a:"",
    b:[
      {name:"蘋果" , amount: 100},
      {name:"香蕉" , amount: 300},
      {name:"鳳梨" , amount: 500}
    ]
  }
});
\`\`\`
#
* 複選選單
#
\`\`\`js
// <-----html----->
#app
  select(v-model="a" multiple)
    option(v-for="item in b") {{item.name}}
  p {{a.toString()}}

// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a:"",
    b:[
      {name:"蘋果" , amount: 100},
      {name:"香蕉" , amount: 300},
      {name:"鳳梨" , amount: 500}
    ]
  }
});
\`\`\``,__vite_glob_0_29=Object.freeze(Object.defineProperty({__proto__:null,default:_20210605Vue_______},Symbol.toStringTag,{value:"Module"})),_20210606Vue______=`---
title: 【Vue】事件修飾符
date: 2021-06-06
tags: ["vue"]
---
#
## 修飾符(Modifiers)
#
<!--more-->
#
* 在v-on和v-model上使用。
#
-----------------------------------------------
#
### 事件修飾符
#
|修飾符|說明|如同|
|---|---|---|
|無使用|先觸發自己，再觸發外層|
|.capture|先觸發外層，再觸發自己|
|.stop|只觸發自己|event.stopPropagation()|
|.self|只觸發自己|
|.once|只觸發一次|
|.prevent|取消預設事件|event.preventDefault()|
#
\`\`\`js
// <-----html----->
ul#app
  //** 無使用 **//
  li(@click="alert('外層')")
    a(href="#" @click="alert('內層')") 連結

  //** .capture **//
  li(@click="alert('外層')")  //(先觸發)
    a(href="#" @click="alert('內層')") 連結  //點擊(再觸發)

  //** .stop **//
  li(@click="alert('外層')")
    a(href="#" @click.stop="alert('內層')") 連結  //點擊(只觸發自己)

  //** .self **//
  li(@click.self="alert('外層')")  //點擊(只觸發自己)
    a(href="#" @click.self="alert('內層')") 連結  //點擊(只觸發自己)

  //** .once **//
  li(@click="alert('外層')")
    a(href="#" @click.once="alert('內層')") 連結 //點擊(只觸發一次)

// <-----js----->
let app = new Vue({
  el: "#app",
  methods:{
    alert: function(e){
      alert("你觸發的是"+e);
    }
  }
});
\`\`\`
#
-----------------------------------------------
#
### 按鍵修飾符
#
|修飾符|
|---|---|---|---|---|---|---|---|---|---|
|keycode|.13|.9|.8|.27|.32|.38|.40|.37|.39|
|按鍵碼|.enter|.tab|.delete|.esc|.space|.up|.down|.left|.right|
|系統鍵|.ctrl|.alt|.shift|.meta|
#
\`.meta : 在window系統是:Win鍵(⊞) ; 在Mac系統上是command鍵(⌘)。\` 
#
\`\`\`js
// <-----html----->
#app
  //按下enter觸發
  input(type="text" @keyup.13="alert")

  //按下空白鍵觸發
  input(type="text" @keyup.space="alert")

  //按下shift+enter觸發
  input(type="text" @keyup.shift.enter="alert")

// <-----js----->
let app = new Vue({
  el: "#app",
  methods:{
    alert: function(){
      alert();
    }
  }
});
\`\`\`
#
-----------------------------------------------
#
### 滑鼠修飾符
#
|修飾符|說明|
|---|---|
|.left|點擊滑鼠左鍵觸發|
|.right|點擊滑鼠右鍵觸發|
|.middle|點擊滑鼠中鍵(滾輪)觸發|
#
\`\`\`js
// <-----html----->
#app
  //點擊滑鼠左鍵觸發
  a(href="#" @click.left="alert") 連結

  //點擊滑鼠右鍵觸發
  a(href="#" @click.right="alert") 連結

  //點擊滑鼠中鍵(滾輪)觸發
  a(href="#" @click.middle="alert") 連結

// <-----js----->
let app = new Vue({
  el: "#app",
  methods:{
    alert: function(){
      alert();
    }
  }
});
\`\`\`
#
-----------------------------------------------
#
### 表單修飾符
#
|修飾符|說明|
|---|---|
|.lazy|離開輸入框時，才會顯示綁定的文字|
|.number|能讓輸入框的數字轉換成Number型別|
|.trim|能讓輸入的文字與預設文字中間無空白|
#
\`.meta : 在window是:Win鍵(⊞) ; 在Mac上是command鍵(⌘)。\` 
#
\`\`\`js
// <-----html----->
#app
  //* .lazy *//
  input(type="text" v-model.lazy="a")
  p {{a}}

  //* .number *//
  input(type="text" v-model.Number="b")
  p {{typeof b}} {{b}}

  //* .trim *//
  input(type="text" v-model.trim="c")
  p {{c}}蘋果

// <-----js----->
let app = new Vue({
  el: "#app",
  data:{
    a: "",
    b: "",
    c: ""
  }
});
\`\`\``,__vite_glob_0_30=Object.freeze(Object.defineProperty({__proto__:null,default:_20210606Vue______},Symbol.toStringTag,{value:"Module"})),_20210607VueTable___Bootstrap__=`---
title: 【Vue】vue-table排序(Bootstrap版)
date: 2021-06-07
tags: ["vue"]
---
#
### methods版
#
<!--more-->
#
1. 在\\<tr>使用 **v-for** 將[a]資料列印出來。
#
2. 在\\<th>"價格"上增加 **@click** 事件[sortPrice]，並在 **methods** 新增[sortPrice]方法。
#
3. \\[sortPrice]:判斷現在[b]的值是(true/false)，決定要排序大到小，還是小到大。
#
4. 並且在排序完之後，改變[b]的值。
#
5. 在\\<th>"到期日"上增加 **@click** 事件[sortDate]，並在 **methods** 新增[sortDate]方法。
#
6. \\[sortDate]:判斷現在[c]的值是(true/false)，決定要排序大到小，還是小到大。
#
7. 並且在排序完之後，改變[c]的值。
#
8. 在\\<th>"價格"裡的\\<span>上綁定 **:class** 判斷式，判斷[b]的值是(true/false)決定是否套用[rotate]樣式。
#
9. 在\\<th>"到期日"裡的\\<span>上綁定 **:class** 判斷式，判斷[c]的值(true/false)決定是否套用[rotate]樣式。
#
\`\`\`js
// <-----html----->
#app
  table.table
    thead
      tr
        th 品名
        th.click(@click="sortPrice") 價格  //2.
          span(:class="{'rotate':b}")  //8.
            i.fas.fa-angle-up.text-success
        th.click(@click="sortDate") 到期日  //5.
          span(:class="{'rotate':c}")  //9.
            i.fas.fa-angle-up.text-success
      tr(v-for="item in a")  //1.
        td {{ item.name }}
        td {{ item.price }}
        td {{ item.expiryDate }}

// <-----css----->
.click
  cursor: pointer
  
span
  display: inline-block
  
.rotate
  transform: rotate(180deg)

// <-----js----->
let app = new Vue({
  el: '#app',
  data:{
    a: [
      {
        name: '巧呼呼蘇打水',
        price: 30,
        expiryDate: 90
      },
      {
        name: '心驚膽跳羊肉飯',
        price: 65,
        expiryDate: 2
      },
      {
        name: '郭師傅武功麵包',
        price: 32,
        expiryDate: 1
      },
      {
        name: '不太會過期的新鮮牛奶',
        price: 75,
        expiryDate: 600
      },
      {
        name: '金殺 巧粒粒',
        price: 120,
        expiryDate: 200
      }
    ],
    b: true,
    c: true
  },
  methods:{
    sortPrice: function(){  //2.
      if(this.b == true){  //3.
        this.a.sort((x,y)=> x.price - y.price);
        this.b = false;  //4.
      }else if(this.b == false){
        this.a.sort((x,y)=> y.price - x.price);
        this.b = true;
      }
    },
    sortDate: function(){  //5.
      if(this.c == true){  //6.
        this.a.sort((x,y)=> x.expiryDate - y.expiryDate);
        this.c = false;  //7.
      }else if(this.c == false){
        this.a.sort((x,y)=> y.expiryDate - x.expiryDate);
        this.c = true;
      }
    },
  }
});
\`\`\`
#
-----------------------------------------------
#
### computed版
#
1. 在\\<tr>使用 **v-for** 將[a]資料列印出來。
#
2. 在 **computed** 新增[sortArray]來監控[a]資料。
#
3. \\[sortArray]:先判斷[b]的值是(true/false)，來判斷點擊的是"日期"還是"到期日"。
#
4. 再用判斷式判斷[c]的值是(true/false)，來決定要排序大到小，還是小到大。
#
5. 最後將各種不同的結果回傳到[sortArray]。
#
6. 在<th>"價格"新增 **@click** 事件，並直接賦予[b]值，同時改變[c]的值。
#
7. 在<th>"到期日"新增 **@click** 事件，並直接賦予[b]值，同時改變[c]的值。
#
8. 在<th>"價格"裡的<span>綁定 **:class** 判斷式，判斷[b]的值是(true/false)，再判斷[b]的值是(true/false)決定是否套用[rotate]樣式。
#
\`\`\`js
// <-----html----->
#app
  table.table
    thead
      tr
        th 品名
        th.click(@click=" b = true ; c = !c ") 價格  //6.
          span(:class="{ 'rotate': b && c }")  //8.
            i.fas.fa-angle-up.text-success
        th.click(@click=" b = false ; c = !c ") 到期日  //7.
          span(:class="{ 'rotate': !b && c }")  //8.
            i.fas.fa-angle-up.text-success
      tr(v-for="item in sortArray")  //1.
        td {{ item.name }}
        td {{ item.price }}
        td {{ item.expiryDate }}

// <-----css----->
.click
  cursor: pointer
  
span
  display: inline-block
  
.rotate
  transform: rotate(180deg)

// <-----js----->
let app = new Vue({
  el: '#app',
  data:{
    a: [
      {
        name: '巧呼呼蘇打水',
        price: 30,
        expiryDate: 90
      },
      {
        name: '心驚膽跳羊肉飯',
        price: 65,
        expiryDate: 2
      },
      {
        name: '郭師傅武功麵包',
        price: 32,
        expiryDate: 1
      },
      {
        name: '不太會過期的新鮮牛奶',
        price: 75,
        expiryDate: 600
      },
      {
        name: '金殺 巧粒粒',
        price: 120,
        expiryDate: 200
      }
    ],
    b: true,
    c: true
  },
  computed:{
    sortArray: function(){  //2.
      if(this.b == true){  //3.
        return this.a.sort((x,y)=>{  //5.
          if(this.c == true){  //4.
            return x.price - y.price;  //5.
          }else if(this.c == false){  //4.
            return y.price - x.price;  //5.
          }
        });
      }else if(this.b == false){  //3.
        return this.a.sort((x,y)=>{  //5.
          if(this.c == true){  //4.
            return x.expiryDate - y.expiryDate;  //5.
          }else if(this.c == false){  //4.
            return y.expiryDate - x.expiryDate;  //5.
          }
        })
      }
    }
  }
});
\`\`\``,__vite_glob_0_31=Object.freeze(Object.defineProperty({__proto__:null,default:_20210607VueTable___Bootstrap__},Symbol.toStringTag,{value:"Module"})),_20210608Vue_________=`---
title: 【Vue】元件的建立與傳值
date: 2021-06-08
tags: ["vue"]
---
#
## 元件(Component)
#
<!--more-->
#
* 元件資料是獨立運作，也可以重複使用。
#
* 元件裡面可以再包元件。
#
* 建立元件有兩種方式:

    * 全域註冊 : 使用Vue.component()建立，其他app也可以使用。

    * 局部註冊 : 在app裡使用components建立，只有app自己可以使用。

-----------------------------------------------
#
## 全域註冊元件
#
1. 使用Vue.component()建立，第一個參數自訂[標籤名稱]。
#
2. 在HTML建立一個類型為 **text/x-template** 的\\<script>，並賦予一個[id]名稱。
#
3. 並在底下建立元件結構。
#
4. 在 **Vue.component()** ，使用[template]對應\\<script>的[id]。
#
5. 在HTML上使用自訂[標籤名稱]。
#
\`\`\`js
// <-----html----->
#app
  list-com  //5.

script(type="text/x-template" id="list-com")  //2.
  ul  //3.
    li 蘋果
    li 香蕉
    li 鳳梨

// <-----js----->
Vue.component("list-com",{   //1.
  template: "#list-com"  //4.
});

let app = new Vue({
  el: "#app"
});
\`\`\`
#
-----------------------------------------------
#
## 局部註冊元件
#
1. 在app裡使用[components]建立元件。
#
2. 先自訂[標籤名稱]。
#
3. 使用物件方式，帶入[template]，並建立元件結構。
#
4. 在HTML上使用自訂[標籤名稱]。
#
\`\`\`js
// <-----html----->
#app
  list-com

// <-----js----->
let app = new Vue({
  el: "#app",
  components:{
    "list-com":{
      template:
      \`
      <ul>
        <li>蘋果</li>
        <li>香蕉</li>
        <li>鳳梨</li>
      </ul>
      \`
    }
  }
});
\`\`\`
#
-----------------------------------------------
#
## 元件的data資料
#
\`元件的data需使用function(){return{...}}\`
#
\`\`\`js
// <-----html----->
#app
  num-btn

script(type="text/x-template" id="num-btn") 
  button(@click="num += 1") {{num}} 

// <-----js----->
Vue.component("num-btn",{  
  template: "#num-btn",
  data: function(){
    return {
      num: 50
    }
  }
});

let app = new Vue({
  el: "#app"
});
\`\`\`
#
## 元件的陣列資料
#
\`\`\`js
// <-----html----->
#app
  fruit-list

script(type="text/x-template" id="fruit-list")
  ul
    li(v-for="fruit in fruits") {{fruit.name}}

// <-----js----->
Vue.component("fruit-list",{  
  template: "#fruit-list",
  data: function(){
    return{
      fruits:[
        {name:"蘋果",amount:100},
        {name:"香蕉",amount:300},
        {name:"鳳梨",amount:500}
      ]
    }
  }
});

let app = new Vue({
  el: "#app"
});
\`\`\`
#
## 元件的ajax資料
#
\`因ajax載入與顯示有時間差，要在該元件上使用v-if來確保資料載入\`
#
\`\`\`js
// <-----html----->
#app
  .row
    .col-4
      user-card
  
script(type="text/x-template" id="user-card")
  .card(v-if="user.cell")
    img.card-img-top(:src="user.picture.large")
    .card-body
      .card-title {{user.name.title}}{{user.name.first}}{{user.name.last}}
      .card-text {{user.email}}

// <-----js----->
Vue.component("user-card",{
  template: "#user-card",
  data: function(){
    return {
      user: {}
    }
  },
  created: function(){
    let vm = this;
    $.ajax({
      url: "https://randomuser.me/api/"
    }).done(function(data){
      vm.user = data.results[0];
    });
  }
})

let app = new Vue({
  el: "#app"
});
\`\`\`
#
> 使用keep-alive 標籤可以讓元件被消失後再顯示時，不重新載入ajax
#
-----------------------------------------------
#
## 使用props將資料傳入元件
#
1. 使用props以陣列方式傳入屬性名稱。
#
2. 在標籤上動態綁定屬性，並賦予值。\`此時更動傳入的屬性會出現單向數據流的錯誤\`
#
3. 使用一個新的data來接收props傳入的資料。
#
4. 在元件建構上套用新的data資料。
#
\`\`\`js
// <-----html----->
#app
  num-btn(:num="num")  //2.

script(type="text/x-template" id="num-btn") 
  button(@click="newnum += 1") {{newnum}}  //4.

// <-----js----->
Vue.component("num-btn",{  
  template: "#num-btn",
  props: ["num"],  //1.
  data: function(){
    return{
      newnum: this.num  //3.
    }
  }
});

let app = new Vue({
  el: "#app",
  data:{
    num: 50
  }
});
\`\`\`
#
## 使用props將陣列傳入元件
#
\`\`\`js
// <-----html----->
#app
  fruit-list(:fruits="fruits")

script(type="text/x-template" id="fruit-list")
  ul
    li(v-for="fruit in newfruits") {{fruit.name}}

// <-----js----->
Vue.component("fruit-list",{  
  template: "#fruit-list",
  props: ["fruits"],
  data: function(){
    return{
      newfruits: this.fruits
    }
  }
});

let app = new Vue({
  el: "#app",
  data:{
    fruits:[
      {name:"蘋果",amount:100},
      {name:"香蕉",amount:300},
      {name:"鳳梨",amount:500}
    ]
  }
});
\`\`\`
#
## 使用props將ajax傳入元件
#
\`因ajax載入與顯示有時間差，要在該標籤上使用v-if來確保資料載入\`
#
\`\`\`js
// <-----html----->
#app
  .row
    .col-4
      user-card(:user="user" v-if="user.cell")
  
script(type="text/x-template" id="user-card")
  .card
    img.card-img-top(:src="newuser.picture.large")
    .card-body
      .card-title {{newuser.name.title}}{{newuser.name.first}}{{newuser.name.last}}
      .card-text {{newuser.email}}

// <-----js----->
Vue.component("user-card",{
  props:["user"],
  template: "#user-card",
  data: function(){
    return {
      newuser: this.user
    }
  }
})

let app = new Vue({
  el: "#app",
  data:{
    user: {},
  },
  created: function(){
    $.ajax({
      url: "https://randomuser.me/api/"
    }).done(function(data){
      app.user = data.results[0];
    });
  }
});
\`\`\`
#
-----------------------------------------------
#
## props傳入的型別和預設值
#
\`\`\`js
// <-----html----->
#app
  num-input(:num="num")  //50
  num-input  //300

script(type="text/x-template" id="num-input")
  div
    input(type="text" v-model="newnum")
    p {{newnum}}

// <-----js----->
Vue.component("num-input",{
  template: "#num-input",
  props:{
    num:{
      type: Number,
      default: 300
    }
  },
  data: function(){
    return {
      newnum: this.num
    }
  }
});

let app = new Vue({
  el: "#app",
  data:{
    num: 50
  }
});
\`\`\`
#
-----------------------------------------------
#
## 使用$emit()讓元件方法影響到外層data
#
1. 先建立好元件的template。
#
2. 在元件的methods上新增[addCash1]方法，並將使用$emit()，傳出一個[item]。
#
3. 在HTML上使用自訂標籤，並在該標籤上使用v-on:[item]，然後呼叫[addCash2]方法。
#
4. 在methods方法中新增[addCash2]方法。
#
\`\`\`js
// <-----html----->
#app
  p {{num}}
  button(@click="num += 1") 按鈕B
  num-btn(v-on:event="addNum2")
  
script(type="text/x-template" id="num-btn")
  button(@click="addNum1") 按鈕A

// <-----js----->
Vue.component("num-btn",{
  template: "#num-btn",
  methods:{
    addNum1: function(){
      this.$emit("event")
    }
  }
});

let app =new Vue({
  el: "#app",
  data:{
    num: 50
  },
  methods:{
    addNum2: function(){
      this.num += 1;
    }
  }
});
\`\`\``,__vite_glob_0_32=Object.freeze(Object.defineProperty({__proto__:null,default:_20210608Vue_________},Symbol.toStringTag,{value:"Module"})),_20210609Vue_________=`---
title: 【Vue】元件的切換與插槽
date: 2021-06-09
tags: ["vue"]
---
#
## 動態切換元件
#
<!--more-->
#
* 使用 **v-if** 判斷。
#
\`\`\`js
// <-----html----->
#app
  button(@click="a = 'apple'" :key="a") 按鈕A
  button(@click="a = 'banana'" :key="a") 按鈕B
  hr
  div(is="apple" v-if="a === 'apple'")
  div(is="banana" v-if="a === 'banana'")

script(type="text/x-template" id="apple")
  p 蘋果
  
script(type="text/x-template" id="banana")
  p 香蕉

// <-----js----->
Vue.component("apple",{
  template: "#apple",
});

Vue.component("banana",{
  template: "#banana"
});

let app = new Vue({
  el: "#app",
  data:{
    a: "apple"
  }
});
\`\`\`
#
* 使用 **:is** 判斷。
#
\`\`\`js
// <-----html----->
#app
  button(@click="a = 'apple'" :key="a") 按鈕A
  button(@click="a = 'banana'" :key="a") 按鈕B
  hr
  div(:is="a")

script(type="text/x-template" id="apple")
  p 蘋果
  
script(type="text/x-template" id="banana")
  p 香蕉

// <-----js----->
Vue.component("apple",{
  template: "#apple",
});

Vue.component("banana",{
  template: "#banana"
});

let app = new Vue({
  el: "#app",
  data:{
    a: "apple"
  }
});
\`\`\`
#
-----------------------------------------------
#
## 匿名插槽
#
* 使用\\<slot>讓標籤內容能被替換。
#
\`\`\`js
// <-----html----->
#app
  list-com 
    li 芭樂
  
script(type="text/x-template" id="list-com")
  ul
    li 蘋果
    slot 香蕉
    li 鳳梨

// <-----js----->
Vue.component("list-com",{
  template: "#list-com",
});

let app =new Vue({
  el: "#app"
});

// <-----結果----->
//．蘋果
//．芭樂
//．鳳梨
\`\`\`
#
* 如果都使用\\<slot>標籤內容都會被替換。
#
\`\`\`js
// <-----html----->
#app
  list-com 
    li 芭樂
  
script(type="text/x-template" id="list-com")
  ul
    slot 蘋果
    slot 香蕉
    slot 鳳梨

// <-----js----->
Vue.component("list-com",{
  template: "#list-com",
});

let app =new Vue({
  el: "#app"
});

// <-----結果----->
//．芭樂
//．芭樂
//．芭樂
\`\`\`
#
-----------------------------------------------
#
## 具名插槽
#
* 新增[name]屬性[自訂值]，對應[slot]屬性[自訂值]。
#
\`\`\`js
// <-----html----->
#app
  list-com 
    li(slot="a") 芭樂
  
script(type="text/x-template" id="list-com")
  ul
    slot 蘋果
    slot(name="a") 香蕉
    slot 鳳梨

// <-----js----->
Vue.component("list-com",{
  template: "#list-com",
});

let app =new Vue({
  el: "#app"
});

// <-----結果----->
//．蘋果
//．芭樂
//．鳳梨
\`\`\`
#
> 若不想讓元件的標籤被取代，可以使用\\<template>`,__vite_glob_0_33=Object.freeze(Object.defineProperty({__proto__:null,default:_20210609Vue_________},Symbol.toStringTag,{value:"Module"})),_20210610VueDevtools__=`---
title: 【Vue】vue.js Devtools安裝
date: 2021-06-10
tags: ["vue"]
---
#
## 安裝Vue.js devtools開發者工具
#
<!--more-->
#
1. Vue.js devtools是一個Chrome擴充工具，[點擊前往網址](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)。
#
![圖片](/img/安裝Vue.jsdevtools/安裝Vue.jsdevtools-1.png)
#
-----------------------------------------------
#
2. 要使用Vue.js devtools的前提是...，該網站引入的Vue.js版本必須"不是min版"。
#
![圖片](/img/安裝Vue.jsdevtools/安裝Vue.jsdevtools-2.png)
#
-----------------------------------------------
#
3. 點選Chrome右上角"設定"(頭像右邊)→更多工具→擴充功能→找到"Vue.js devtools"，將"允許存許網址"開啟。
#
![圖片](/img/安裝Vue.jsdevtools/安裝Vue.jsdevtools-3.png)
#
-----------------------------------------------
#
4. 打開檔案總管，進入C槽→\\Users(使用者)\\jack8(電腦名稱)\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extensions\\nhdogjmejiglipccpnnnanhbledajbpd\\5.3.4_0(版本可能不同)，將裡面的"manifest.json"開啟，然後把"persistent":false改成true。
#
![圖片](/img/安裝Vue.jsdevtools/安裝Vue.jsdevtools-4.png)
#
-----------------------------------------------
#
5. 在Chrome右上角Vue小圖示有亮起顏色的時候，右鍵→檢查，就可以看到開發者工具最後面出現"Vue"。
#
![圖片](/img/安裝Vue.jsdevtools/安裝Vue.jsdevtools-5.png)
#
-----------------------------------------------
#
> 補充說明`,__vite_glob_0_34=Object.freeze(Object.defineProperty({__proto__:null,default:_20210610VueDevtools__},Symbol.toStringTag,{value:"Module"})),_20220402HTML_____=`---
title: 【HTML】HTML標籤大全
date: 2022-04-02
tags: ["html"]
---
#
## 標籤預設值
#
<!--more-->
#
|元素|display|
|---|---|
|address、article、aside、blockquote、body、dd、details、div、dl、dt、fieldset、figcaption、figure、footer、form、frame、frameset、h1、h2、h3、h4、h5、h6、header、hr、html、iframe、noframes、legend、p、ul、center、dir、menu、nav、ol、pre、summary、section|block|
|map、output、q、span|inline|
|input、select、img|inline-block|
|area、datalist、head、link、param、title、style、script|none|
|table|table|
|tr|table-row|
|thead|table-header-group|
|tbody|table-row-group|
|tfoot|table-footer-group|
|caption|table-caption|
|col|table-column|
|colgroup|table-column-group|
|td、th|table-cell|
|li|list-item|
#
-----------------------------------------------
#
## 網頁初步結構
#
\`\`\`html
<!DOCTYPE html>
<html lang="zh-tw"> <!--整份網頁文件，用來包<head>、<body>標籤-->  
    <head>
        <title>網頁標題</title>
        
        <meta charset="UTF-8"> <!--網頁編碼-->
        
        <!--favicon生產網址：https://realfavicongenerator.net/-->
        <link rel="shortuct icon" href="favicon.icon">
        <link rel="bookmark" href="favicon-32x32.png">
        <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
        <link rel="manifest" href="site.webmanifest"> <!--應用程式相關的資訊(json格式)-->
        <link rel="mask-icon" href="safari-pinned-tab.svg" color="#ffffff">
        <meta name="msapplication-TileColor" content="#ffffff">
        <meta name="theme-color" content="#ffffff">

        <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!--自動將IE瀏覽器升級-->
        
        <meta name="viewport" 
        content="width=device-width, initial-scale=1.0">
        <!--響應手機版，首次載入頁面的縮放比emmet快速語法meta:vp-->
        <!--device-width畫面寬度-->
        <!--device-height畫面高度-->
        <!--initial-scale初始縮放比-->
        <!--minimum-scale最小可縮放比-->
        <!--maximum-scale最大可縮放比-->
        <!--user-scalable使用者是否可縮放-->

        <meta http-equiv="refresh"  content="5" url="...">
        <!--進入該網站後5秒後，自動轉跳至其他網頁-->

        <meta name="description" content="網頁說明"> <!--內容建議以，分隔-->
        <meta name="keywords" content="網頁關鍵字"> <!--Google已不看，可改放在說明-->
        <meta name="author" content="網頁作者">
        <meta name="robots" content="noindex"> <!--讓搜尋引擎不要索引這個網頁-->

        <meta property="og:title" content="顯示的FB標題">
        <meta property="og:description" content="FB描述的內容">
        <meta property="og:type" content="website"> <!--網站類型-->
        <meta property="og:url" content="FB上的網址">
        <meta property="og:site_name" content="網站名稱">
        <meta property="og:image" content="顯示的圖片網址">

        <link rel="stylesheet" href="all.css"> <!--引入檔案連結--> 
        <base target="_blank"> <!--定義該網頁的連結方式-->
    </head>
    <body>
        <header>頁首</header>
        <nav>選單列/導覽列</nav>
        <main>主要內容，用來包article、aside標籤</main>
        <article>用來包section標籤</article>
        <section>用來包一段文章h*、p標籤</section>
        <aside>側邊欄</aside>
        <footer>頁腳</footer>
        <details>用來包summary標籤</details>
        <summary>顯示詳細信息</summary>
        <mark>強調的內容(黃底)</mark>
        <time>顯示日期時間</time>
        <script src="引入js檔案連結"><\/script>
    </body>
</html>
\`\`\`
#
### webmanifest
#
\`\`\`js
{
    “name”: “simpleWeb”,
    “short_name”: “simpleWeb”,
    “start_url”: “https://simpleWeb.com”,
    “description”: “A simply readable Hacker News app.”,
    “theme_color”: “#ffffff”,
    “background_color”: “#ffffff”,
    “display”: “standalone”,
    “icons”: [
        {
            “src”: “/android-chrome-192x192.png”,
            “sizes”: “192x192”,
            “type”: “image/png”
        },
        {
            “src”: “/android-chrome-512x512.png”,
            “sizes”: “512x512”,
            “type”: “image/png”
        }
    ]
}
\`\`\`
#
-----------------------------------------------
#
## 文字類標籤
#
\`\`\`html
<h1>一級標題</h1>

<h2>二級標題</h2>

<h3>三級標題</h3>

<h4>四級標題</h4>

<h5>五級標題</h5>

<h6>六級標題</h6>

<p>內文</p>

<mark>highlight文字</mark>

<del>被刪除的內容文字</del>

<s>不準確的內容刪除線</s>

<b>純粗體文字</b>

<strong>強調語意的粗體</strong> 

<i>語音或技術用語的斜體</i>

<em>純斜體文字</em> 

<u>文字下底線</u>

<ins>補充的內容</ins> <!--插入被編輯過的新文字-->
cite="連結網址" <!--解釋該段文字被插入或修改的原因-->
datatime="2018-05" <!--插入或被修改的時間-->

<small>較小的文字</small>

<sub>較小的文字(下方)</sub>

<sup>較小的文字(上方)</sup>

<q>" "(符號)</q>

<span>不換行(行內元素)</span>

<abbr title="javascript">JS</abbr> <!--語意(滑鼠比著會顯示)-->

<blockquote>引用的文字(縮排)</blockquote> <!--文章章節內容引用-->
\`\`\`
#
-----------------------------------------------
#
## 全域屬性(Global Attributes)
#
\`\`\`html
<div class="..."></div>
id="..." <!--設定元素唯一值--> 
class="..." <!--設定元素的樣式類別-->  
style="background-color:red" <!--設定元素css樣式-->  
title="..." <!--設定元素的標題--> 
data-*="..." <!--自定義屬性值-->  
lang="en" <!--設定元素內容語言--> 
dir="auto" <!--(預設值)--> 
dir="ltr" <!--文字顯示方向(左到右)--> 
dir="rtl" <!--文字顯示方向(右到左)--> 
accesskey="K" <!--設定元素的快捷鍵--> 
tabindex="3" <!--設定元素按下tab時的跳格順序--> 
contenteditable="true" <!--內容可編輯-->  
contenteditable="false" <!--內容不可編輯-->  
draggable="true" <!--元素可被點擊拖動--> 
draggable="false" <!--元素不可被點擊拖動--> 
translate="true" <!--設定元素內容能被自動翻譯--> 
translate="false" <!--設定元素內容不能被自動翻譯--> 
spellcheck="true" <!--啟動firefox瀏覽器拼字檢查--> 
spellcheck="false" <!--關閉firefox瀏覽器拼字檢查--> 
hidden <!--隱藏--> 
\`\`\`
#
-----------------------------------------------
#
## 無序清單(ul)
#
\`\`\`html
<ul>
    <li>項目一</li>
    <li>項目二</li>
    <li>項目三</li>
</ul>
\`\`\`
#
-----------------------------------------------
#
## 有序清單(ol)
#
\`\`\`html
<ol>
    <li>項目一</li>
    <li>項目二</li>
    <li>項目三</li>
</ol>
start="數字" <!--設定數列起頭編號--> 
reversed <!--讓數列反向呈現--> 
\`\`\`
#
-----------------------------------------------
#
## 描述清單(dl)
#
\`\`\`html
<dl>
    <dt>項目標題</dt>
    <dd>項目敘述</dd>
</dl>
\`\`\`
#
-----------------------------------------------
#
## 連結(a)
#
\`\`\`html
<a href="超連結網址">字字字</a>
title="滑鼠停留顯示的文字" 
target="_blank" <!--另開新視窗--> 
target="_self" <!--以現在視窗開啟--> 
target="_parent" <!--開啟於父層框架--> 
style="text-decoration:none" <!--隱藏文字底線--> 
download="xxx.jpg" <!--直接下載圖片--> 
\`\`\`
#
\`用來包所有可點擊的元件\`
#
-----------------------------------------------
#
## 圖片(img)
#
\`\`\`html
<img src="圖片網址" alt="視障人士閱讀或圖片無法顯示時的名稱">
ismap <!--設定圖片是影像地圖的一部分-->
srcset <!--搭配media可在不同瀏覽裝置裡載入不同內容(網址)-->
\`\`\`
#
#### 圖片注意事項
#
\`<img>預設值是display:inline-block會有白色空隙\`
#
\`\`\`css
img{
    display: block;
    max-width: 100%;
    object-fit: cover;
    object-fit: center center;
}
\`\`\`
#
#### 讓圖片保持1:1
#
\`\`\`html
<div class="container">
    <div class="item">content</div>
</div>
\`\`\`
\`\`\`css
.container{
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 100%;
    background-color: red;
}
.item{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
\`\`\`
#
#### 讓圖片保持16:9
#
\`\`\`html
<div class="container">
    <div class="item">content</div>
</div>
\`\`\`
\`\`\`css
.container{
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 56.25%; //9 ÷ 16 × 100% = 56.25%
    background-color: red;
}
.item{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
#
#### 進階圖片
#
\`\`\`html
<figure>包覆圖片描述用
    <img src="圖片網址" alt="視障人士閱讀或圖片無法顯示時的名稱">
    title="滑鼠停留顯示的文字"
    width="圖片寬度"
    height="圖片高度" 
    loading="lazy" <!--延遲載入圖片，可提提升效能--> 
    <figcaption>圖片敘述</figcaption>
</figure>
\`\`\`

-----------------------------------------------
#
## 表格(table)
#
\`\`\`html
<table>
    <tr> 
        <th>Month</th> 
        <th>Savings</th>
    </tr>
    <tr>
        <td>Sum</td>
        <td>$180</td>
    </tr>
    <tr>
    <td>January</td>
    <td>$100</td>
    </tr>
    <tr>
        <td>February</td>
        <td>$80</td>
    </tr>
</table>
\`\`\`
#
#### 進階表格
#
\`\`\`html
<table>
width="表格寬度" 
border="框線粗度" 
border="0" <!--無框線-->
colspan="水平合併幾格" 
rowspan="垂直合併幾格" 
rowspan="0" <!--垂直合併到底-->
cellspacing="表格欄位間距"
cellpadding="表格欄位的留白距"
    <caption>用來描述表格</caption>
    <colgroup> <!--欄群組-->
        <col span="1" style="background-color: red"/> <!--第一欄-->
        <col span="1" style="background-color: yellow"/> <!--第二欄-->
    </colgroup>
    <thead>
        <tr> <!--tr列-->
            <th>Month</th> <!--th表頭-->
            <th>Savings</th>
        </tr>
    </thead>
    <tfoot>
        <tr>
            <td>Sum</td>
            <td>$180</td>
        </tr>
    </tfoot>
    <tbody>
        <tr>
            <td>January</td>
            <td>$100</td>
        </tr>
        <tr>
            <td>February</td>
            <td>$80</td>
        </tr>
    </tbody>
</table>
\`\`\`
#
-----------------------------------------------
#
## 音訊(audio)
#
\`\`\`html
<audio controls>
    <source src="檔案連結.wav" type="audio/wav">
</audio>
autoplay <!--自動播放-->
controls <!--出現撥放控制按鈕-->
loop <!--自動循環播放-->
preload <!--進入網頁時優先載入-->
muted <!--靜音->
\`\`\`
#
-----------------------------------------------
#
## 影片(video)
#
\`\`\`html
<video src="影片連結" controls></video>
width="影片寬度"
height="影片高度"
type="video/mp4" <!--影片類型-->
type="video/ogg" <!--影片類型-->
poster <!--未按下播放前顯示圖片-->
autoplay <!--自動播放-->
controls <!--出現撥放控制按鈕-->
loop <!--自動循環播放-->
preload <!--進入網頁時優先載入-->
muted <!--靜音->
\`\`\`
#
-----------------------------------------------
#
## 按鈕(button)
#
\`\`\`html
<button>按鈕</button>
disabled <!--禁止點擊-->
type="button" <!--單純按鈕-->
type="reset" <!--清空按鈕-->
type="submit" <!--送出按鈕-->
name="按鈕名稱"
value="按鈕的值"
onclick="location.href='要前往的網址'"
\`\`\`
#
-----------------------------------------------
#
## 下拉選單(select)
#
\`\`\`html
<select>
    <option>選項一</option>
    <option>選項二</option>
    <option>選項三</option>
</select>
\`\`\`
#
#### 群組選單
#
\`\`\`html
<select>
name="選單名稱"
disabled <!--禁用選單-->
required <!--必填選單-->
multiple <!--多選選單(按住ctrl鍵)-->
multiple size="一次顯示幾格選單"
    <optgroup label="群組一標題"> <!--區分項目名稱(不可選)-->
        <option>選項一</option>
        selected <!--預選項目-->
        disabled <!--禁用項目-->
        value="選單的值"
        <option>選項二</option>
        <option>選項三</option>
    </optgroup>
    <optgroup label="群組二標題">
        <option>選項一</option>
        <option>選項二</option>
    </optgroup>
</select>
\`\`\`
#
-----------------------------------------------
#
## 文字輸入欄(textarea)
#
\`\`\`html
<textarea>文字欄位預設文字</textarea>
name="欄位名稱"
cols="可以打幾個字元"
rows="可以打幾行"
maxlength="最多字數"
minlength="最少字數" 
placeholder <!--輸入欄提示訊息-->
disabled <!--禁用狀態-->
readonly <!--不可編輯-->
required <!--必填欄位-->
\`\`\`
#
-----------------------------------------------
#
## 內崁框架(iframe)
#
\`\`\`html
<iframe src="崁入網址"></iframe>
width="框架寬度" 
height="框架高度" 
frameborder="框架線框粗度" 
frameborder="0" <!--無線框-->
scrolling="no" <!--不要捲軸-->
<object data="崁入網址" type="檔案類型">
    <param name="參數名稱" value="參數值">
</object>

<embed src="崁入網址" type="檔案類型">
\`\`\`
#
-----------------------------------------------
#
## 表單(form)
#
\`\`\`html
<form action="..."> <!--將資料送去哪-->
method="get" <!--將資料直接放在網址上-->
method="post" <!--將資料放在http傳輸包中送出-->
name="對應資料庫" <!--label和input要一樣-->
    <label for="mail">e-mail：</label>
    <input id="mail" type="text" name="e-mail" placeholder="請輸入電子信箱">
    <input type="submit" value="送出">
</form>
\`\`\`
#
\`按送出後name的值會顯示在http上，email="輸入框裡的值"\`
#
#### 單選按鈕(radio)
#
\`\`\`html
<form action="..."> 
    <label for="mail">性別：</label>
    <input id="mail" type="radio" name="sex" value="man"> 男生
    <input id="mail" type="radio" name="sex" value="woman"> 女生
    <input type="submit" value="送出">
</form>
\`\`\`
#
#### 核取方塊(checkbox)
#
\`\`\`html
<form action="..."> 
    <label for="hobby">興趣：</label>
    <input id="hobby" type="checkbox" name="hobby" value="movie"> 看電影
    <input id="hobby" type="checkbox" name="hobby" value="music"> 聽音樂
    <input id="hobby" type="checkbox" name="hobby" value="comic"> 看漫畫
    <input type="submit" value="送出">
</form>
\`\`\`
#
#### 自訂核取方塊(checkbox)
#
\`\`\`html
<label class="checkbox-label">記住此帳號
    <input class="checkbox-input" type="checkbox">
    <span class="checkbox-span"></span>
</label>
\`\`\`
\`\`\`css
.checkbox-label{
    position: relative;
    color: #ffffff;
    padding-left: 1.5rem;
    line-height: 1rem;
    cursor: pointer;

    &:hover{
        .checkbox-span{
            background-color: rgba(#ffffff, 0.8);
        }
    }

    .checkbox-input{
        width: 0;
        height: 0;
        opacity: 0;
    }

    .checkbox-span{
        position: absolute;
        top: 0;
        left: 0;
        width: 1rem;
        height: 1rem;
        background-color: #ffffff;
        transition: 0.3s;

        &:before{
            content: "";
            width: 13px;
            height: 3px;
            background-color: #000000;
            transform: translate(4px, 7px) rotate(-45deg);
        }

        &:after{
            content: "";
            width: 8px;
            height: 3px;
            background-color: #000000;
            transform: translate(0px, 7px) rotate(45deg);
        }

    }

    .checkbox-input:checked ~ .checkbox-span{
        background-color: green;
    }

    .checkbox-input:checked ~ .checkbox-span::before{
        display: block;
    }

    .checkbox-input:checked ~ .checkbox-span::after{
        display: block;
    }

}
\`\`\`
#

-----------------------------------------------
#
## 輸入(input)
#
\`\`\`html
<input>按鈕/輸入欄
required <!--必填欄位-->
readonly <!--只能閱讀、不能編輯欄位-->
disabled <!--不可用欄位-->
autofocus <!--載入頁面時自動focus-->
pattern="\\d{10}" <!--必須連續出現10個數字(手機號碼格式)-->
pattern="\\d{4}/\\d{2}/\\d{2}" <!--YYYY/MM/DD(日期格式)-->
pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}" <!--信箱格式-->
value="值(預設內容)"
placeholder="輸入提示訊息"
name="值的名稱"
autocomplete="off" <!--點擊欄位時不出現常用值-->
type="text" <!--輸入文字欄位-->
type="search" <!--搜尋欄-->
type="tel" <!--電話輸入欄位-->
type="url" <!--網址輸入欄位-->
type="email" <!--信箱輸入欄位-->
type="date" value="預設值" min="最小值" max="最大值" <!--日期輸入欄位-->
type="time" value="預設值" min="最小值" max="最大值" <!--時間輸入欄位-->
type="number" value="預設值" min="最小值" max="最大值" step="節數" <!--數字輸入欄位-->
type="range" value="預設值" min="最小值" max="最大值" step="節數" <!--數字滑動範圍-->
type="color" <!--顏色選擇器-->
type="password" <!--輸入密碼欄位-->
type="submit" <!--送出按鈕-->
type="reset" <!--重設表單-->
type="hidden" <!--隱藏資料-->
type="image" <!--圖片送出按鈕-->
type="file" accept="image/jpeg" multiple <!--檔案上傳按鈕(多選)-->
type="button" <!--按鈕-->
type="textarea" <!--多行文字輸入欄-->
inputmode="none" <!--沒有鍵盤-->
inputmode="numeric" <!--只有數字沒有符號-->
inputmode="tel" <!--數字＃＊＋-->
inputmode="decimal" <!--數字＋.-->
inputmode="email" <!--英文＠-->
inputmode="url" <!--英文.com-->
inputmode="search" <!--換行鍵＝前往-->
\`\`\`
#
-----------------------------------------------
#
## 其他
#
\`\`\`html
<br>換行

<hr>水平線

<address>文章、作者、地址資訊標籤(斜體)</address>

<pre>文字編排不受改變的呈現</pre>

<code>程式碼</code>
\`\`\`
#
-----------------------------------------------
#
## 腳本(script)
#
\`\`\`html
<script src="..."><\/script>
language="en" <!--腳本語言種類-->
async <!--以非同步的方式加載資源，加載成功後會中斷頁面解析，立即執行資源內容-->
feter <!--以非同步的方式加載資源，加載成功後會在ready前執行資源內容-->
\`\`\``,__vite_glob_0_35=Object.freeze(Object.defineProperty({__proto__:null,default:_20220402HTML_____},Symbol.toStringTag,{value:"Module"})),_20220403CSS_____=`---
title: 【CSS】CSS基本樣式
date: 2022-04-03
tags: ["css"]
---
#
## 樣式選擇器及權重
#
<!--more-->
#
|名稱|HTML tag|CSS選擇器.|CSS選擇器#|style=|!important|
|---|---|---|---|---|---|
|權重|1分|10分|100分|1000分|10000分|
#
\`\`\`css
p{
    /*選擇<p>標籤屬性*/
}

*{
    /*對所有標籤進行樣式設定*/
}

.box{
    /*選擇<div class="box">標籤屬性*/
}

.box a{
    /*選擇<div class="box">標籤屬性裡面的<a>*/
}

.box1, .box2{
    /*選擇<div class="box1">標籤和<div class="box2">標籤*/
}

#box{
    /*選擇<div id="box">標籤屬性*/
}
/*
1.後面的樣式會覆蓋前面的樣式
2.加入『!important』樣式優先
*/
\`\`\`
#
#### 標籤選取器
#
\`\`\`html
<ul>
    <li>1</li>
    <p>2</p>
    <li>3</li>
    <p>4</p>
    <li>5</li>
    <p>6</p>
    <li>7</li>
    <p>8</p>
    <li>9</li>
    <p>10</p>
</ul>
\`\`\`
#
\`\`\`css
li:nth-child(4){
    /*選取第4個(null)*/
}
li:nth-child(odd){
    /*選取單數(1、3、5、7、9)*/
}
li:nth-child(even){
    /*選取偶數(null)*/
}
li:nth-child(2n+3){
    /*從第3個開始，每次間隔2(3、5、7、9)*/
}
li:nth-child(3n+1){
    /*從第1個開始，每次間隔3(1、7)*/
}
li:not(:first-child){
    /*選取li第一個以外的(3、5、7、9)*/
}
li:nth-of-type(3){
    /*選取li的第三個(5)*/
}
\`\`\`
#
-----------------------------------------------
#
## 單位
#
|單位|說明|
|---|---|
|px|絕對的文字大小|
|em|以目前文字大小為基準，會因外層的\`font-size\`大小影響|
|rem|以外層\`html\`為基準：會因\`html\`的\`font-size\`大小影響|
#
-----------------------------------------------
#
## 文字(text、font)
#
\`\`\`css
.text{
    font-family: verdana;
    font-family: "微軟正黑體","import"; /*優先使用前者字體，後者順位*/
    font-family: "Microsoft JhengHei"; /*window中文字體*/
    font-family: "Segoe UI";  /*window英文字體*/
    font-family: "Droidsanfallback";  /*andriod中文字體*/
    font-family: "Roboto";  /*andriod英文字體*/
    font-family: "Ping Fang HeitiTC";  /*ios中文字體*/
    font-family: "Helvetica Neue";  /*ios英文字體*/

    font-weight: 100~900; /*字體粗度*/
    font-weight: lighter; /*字體粗度100*/
    font-weight: light; /*字體粗度400*/
    font-weight: normal; /*字體粗度400(預設值)*/
    font-weight: bold; /*字體粗度700*/
    font-weight: bolder; /*字體粗度700*/

    font-style: normal; /*正常(預設值)*/
    font-style: italic; /*斜體*/
    font-style: oblique; /*斜體*/

    font-size: xx-small; /*超級小(12px)*/
    font-size: x-small; /*超小(12px)*/
    font-size: small; /*小(13px)*/ 
    font-size: medium; /*中(16px)(預設值)*/
    font-size: large; /*大(18px)*/
    font-size: x-large; /*超大(24px)*/
    font-size: xx-large; /*超級大(32px)*/
    font-size: smaller; /*超級大(13.3333px)*/
    font-size: larger; /*超級大(19.2px)*/
    font-size: 16px; /*文字16px(1rem)*/
    font-size: 1rem; /*文字1em(16px)*/
    font-size: 1em; /*文字1em*/
    
    font-variant: normal; /*正常(預設值)*/
    font-variant: no-common-ligatures; /*不連字*/
    font-variant: common-ligatures; /*普通連字*/
    font-variant: small-caps; /*小型的大寫字體*/

    /*須看字型本身有無支援*/
    font-stretch: normal; /*正常(預設值)*/
    font-stretch: ultra-condensed; /*將字體壓縮(50%)*/
    font-stretch: extra-condensed; /*將字體壓縮(62.5%)*/
    font-stretch: condensed; /*將字體壓縮(75%)*/
    font-stretch: semi-condensed; /*將字體壓縮(75%)*/
    font-stretch: expanded; /*將字體擴張(112.5%)*/
    font-stretch: semi-expanded; /*將字體擴張(125%)*/
    font-stretch: extra-expanded; /*將字體擴張(150%)*/
    font-stretch: ultra-expanded; /*將字體擴張(200%)*/

    font: font-style|font-weight|font-variant|font-size/line-height|font-family; 

    color: red; /*顏色名稱*/
    color: #333333; /*色票*/
    color: rgba(3,3,3,0); /*R,G,B,透明度*/

    text-decoration: none; /*無裝飾(預設值)*/
    text-decoration: underline; /*上線條*/
    text-decoration: underline dotted; /*上線條 點線*/
    text-decoration: underline dotted red; /*上線條 點線 紅色*/
    text-decoration: overline; /*下線條*/
    text-decoration: line-through; /*刪除線*/

    text-indent: 0em; /*(預設值)*/
    text-indent: 2em; /*縮排2個字*/
    text-indent: 10%; /*縮排10%*/
    text-indent: -5em; /*突出5個字*/

    letter-spacing: normal; /*(預設值)*/
    letter-spacing: 8px; /*文字間距*/

    word-spacing: normal; /*(預設值)*/
    word-spacing: 5px; /*每個單字間的距離*/
    word-spacing: 120%; /*每個單字間的距離120%*/
    word-spacing: 1rem; /*每個單字間的多一個字的距離*/

    line-height: normal; /*(預設值)*/
    line-height: 40px; /*段落行距40px*/
    line-height: 120%; /*段落行距1.2倍*/
    line-height: 1.5; /*段落行距1.5倍*/

    text-align: left; /*靠左(預設值)*/
    text-align: right; /*靠右*/
    text-align: center; /*置中*/
    text-align: justify; /*左右對齊*/

    text-transform: none; /*(預設值)*/
    text-transform: capitalize; /*每個單字開頭大寫*/
    text-transform: uppercase; /*所有字母大寫*/
    text-transform: lowercase; /*所有字母小寫*/

    -webkit-text-stroke: 5px #333333; /*文字外框*/

    text-justify: auto; /*齊行均分方式(預設值)*/
    text-justify: inter-word;
    text-justify: inter-ideograph;
    text-justify: inter-cluster;
    text-justify: distribute;
    text-justify: kashida;
    text-justify: trim;

    text-overflow: clip; /*裁剪文字(預設值)*/
    text-overflow: ellipsis; /*省略號*/
    
    text-shadow: none; /*(預設值)*/
    text-shadow: 30px 40px; /*X軸 Y軸*/
    text-shadow: 30px 40px red; /*X軸 Y軸 陰影顏色*/
    text-shadow: 30px 40px 20px red; /*X軸 Y軸 模糊 陰影顏色*/
    text-shadow: 30px 40px red,10px 50px blue; /*前者在上層，後者在下層*/

    word-break: normal; /*只有英文，換行時單詞不會被切(預設值)*/
    word-break: keep-all; /*中英日韓，換行時單詞不會被切*/
    word-break: break-all; /*中英日韓，換行時單詞會被切*/

    word-wrap: normal; /*(預設值)*/
    word-wrap: break-word; /*允許文字在任意位置斷行*/

    white-space: nowrap; /*不換行*/
    white-space: normal; /*自動換行*/

    unicode-bidi: bidi-override; /*文字相反顯示*/

    writing-mode: horizontal-tb; /*文字水平*/
    writing-mode: vertical-rl; /*文字垂直*/
}
\`\`\`
#
### 單行限制內容
#
\`\`\`css
.box {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
\`\`\`
#
### 多行限制內容
#
\`\`\`css
.box {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /*限制幾行*/
    -webkit-box-orient: vertical;
}
\`\`\`
#
### 自定義字型
#
\`\`\`css
@font-face{
    font-family: verdana;
    src: url(http://example.com/fonts/Gentium.woff),
         url(/fonts/simple.woff);
}
\`\`\`
#
-----------------------------------------------
#
## 背景(background)
#
\`\`\`css
.box{
    background-color: transparent; /*透明(預設值)*/
    background-color: red; /*顏色名稱*/
    background-color: #333333; /*色票*/
    background-color: rgba(3,3,3,0); /*R,G,B,透明度*/
    
    background-position: 0% 0%; /*在左上方(預設值)*/
    background-position: right top; /*在右上方*/
    background-position: center bottom; /*在中間下方*/
    background-position: 20px 30px; /*X軸 Y軸*/

    background-size: auto; /*(預設值)*/
    background-size: 200px 300px; /*寬200px，高300px*/
    background-size: 50%; /*縮小50%*/
    background-size: cover; /*填滿元素*/
    background-size: contain; /*圖片大於元素時能完整呈現*/

    background-repeat: repeat; /*重複(預設值)*/
    background-repeat: no-repeat; /*不重複*/
    background-repeat: repeat-x; /*X軸重複*/
    background-repeat: repeat-y; /*Y軸重複*/

    background-origin: padding-box; /*圖片空間從border內開始(預設值)*/
    background-origin: border-box; /*圖片空間從border外框開始*/
    background-origin: content-box; /*圖片空間從padding內開始*/

    background-clip: border-box; /*border線在圖片內(預設值)*/
    background-clip: padding-box; /*border線在圖片外*/
    background-clip: content-box; /*border線會被padding在圖片外*/

    background-attachment: scroll; /*背景捲動時跟著移動(預設值)*/
    background-attachment: fixed; /*背景固定不動(滾動視差效果)*/

    background-image: none; /*(預設值)*/
    background-image: url("連結網址"); /*崁入圖片*/
    background-image: url(/images); /*根目錄*/
    background-image: url(./images); /*所在目錄*/
    background-image: url(../images); /*上層目錄*/

    background: color|position|size|repeat|origin|clip|attachment|image;

    box-shadow: 30px 40px; /*X軸 Y軸*/
    box-shadow: 30px 40px red; /*X軸 Y軸 陰影顏色*/
    box-shadow: 30px 40px 20px red; /*X軸 Y軸 模糊 陰影顏色*/
    box-shadow: 30px 40px 20px 10px red; /*X軸 Y軸 模糊 擴散 陰影顏色*/
    box-shadow: 30px 40px 20px 10px red inset; /*X軸 Y軸 模糊 擴散 陰影顏色 內部*/
    box-shadow: 30px 40px red,10px 50px blue; /*前者在上層，後者在下層*/

    opacity: 0; /*完全透明*/
    opacity: 0.5; /*半透明*/
    opacity: 1; /*完全不透明*/
}
\`\`\`
#
#### 背景漸層
#
\`\`\`css
.box{
    background: linear-gradient(red, orange); /*從上到下(預設)，紅到橘*/
    background: linear-gradient(red,yellow); /*上到下，紅到黃*/
    background: linear-gradient(45deg,red,yellow); /*右上到左下，紅到黃*/
    background: linear-gradient(90deg,red,transparent); /*右到左，紅到透明*/
    background: radial-gradient(red,blue); /*由內到外，紅到藍*/
    background: radial-gradient(red 5%,blue 10%); /*由內到外，紅5%到藍10%*/
    background: radial-gradient(circle,red,blue); /*由內到外(正圓)，紅到藍*/
    background: repeating-radial-gradient(circle,red,blue); /*重複，由內到外(正圓)，紅到藍*/
}
\`\`\`
#
#### 滾動視差
#
\`\`\`css
.box{
    background-image: url("...");
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
}
\`\`\`
#
-----------------------------------------------
#
## 內距(padding)
#
\`\`\`css
.box{
    padding: 0; /*(預設值)*/
    padding: 20px; /*四邊同時調整*/
    padding: 20px 30px; /*上下 左右調整*/
    padding: 20px 30px 50px; /*上 左右 下調整*/
    padding: 20px 30px 50px 100px; /*上 右 下 左調整*/

    padding-top: 20px; /*上調整*/
    padding-right: 30px; /*右調整*/
    padding-bottom: 50px; /*下調整*/
    padding-left: 100px; /*左調整*/

    box-sizing: content-box; /*padding向外擴(預設)*/
    box-sizing: border-box; /*padding向內壓縮*/
}
\`\`\`
#
-----------------------------------------------
#
## 外距(margin)
#
\`\`\`css
.box{
    margin: 0; /*(預設值)*/
    margin: 20px; /*四邊同時調整*/
    margin: 20px 30px; /*上下 左右調整*/
    margin: 20px 30px 50px; /*上 左右 下調整*/
    margin: 20px 30px 50px 100px; /*上 右 下 左調整*/

    margin-top: 20px; /*上調整*/
    margin-right: 30px; /*右調整*/
    margin-bottom: 50px; /*下調整*/
    margin-left: 100px; /*左調整*/
}
\`\`\`
#
-----------------------------------------------
#
## 邊框(border)
#
\`\`\`css
.box{
    border-width: 5px; /*邊框線條寬度5px*/
    border-width: thin; /*薄(1px)*/
    border-width: medium; /*中(3px)*/
    border-width: thick; /*厚(5px)*/

    border-style: none; /*沒有線條*/
    border-style: dotted; /*短虛線*/
    border-style: dashed; /*長虛線*/
    border-style: solid; /*實線(預設值)*/
    border-style: double; /*雙實線*/
    border-style: groove; /*雙實線*/
    border-style: ridge; 
    border-style: inset; /*3D凹*/
    border-style: outset; /*3D凸*/

    border-color: none; /*(預設值)*/
    border-color: red; /*顏色名稱*/
    border-color: #333333; /*色票*/
    border-color: rgba(3,3,3,0); /*最後的值調整透明度*/

    border: solid 1px red; /*四邊框線樣式 框線寬度 框線顏色*/

    border-top: solid 1px red; /*上邊框線樣式/框線寬度/框線顏色*/
    border-right: solid 1px red; /*右邊框線樣式/框線寬度/框線顏色*/
    border-bottom: solid 1px red; /*下邊框線樣式/框線寬度/框線顏色*/
    border-left: solid 1px red; /*左邊框線樣式/框線寬度/框線顏色*/

    border-radius: 30px; /*邊框圓角*/
    border-radius: 100%; /*圓型*/

    border-image-source: url(); /*崁入圖片*/
    border-image-source: url(/images); /*根目錄*/
    border-image-source: url(./images); /*所在目錄*/
    border-image-source: url(../images); /*上層目錄*/
}
\`\`\`
#
### 拉長邊框圖案
#
\`\`\`css
.box{
    width: 400px;
    height: 200px;
    border-image: url(https://photo.minwt.com/file/sampleView/css/border-image/bdic.png);
    border-image-slice: 20;
    border-image-width: 1em;
    border-image-repeat: round;
}
\`\`\`
#
### 邊框圖案完整延伸
#
\`\`\`css
.box{
    width: 400px;
    height: 200px;
    border-image: url(https://photo.minwt.com/file/sampleView/css/border-image/bdic.png);
    border-image-slice: 20;
    border-image-width: 1em;
    border-image-repeat: stretch;
}
\`\`\`
#
-----------------------------------------------
#
## 定位(position)
#
\`\`\`css
.box{
    position: static; /*靜態：自動排列下來，不能偏移位置(預設值)*/
    position: relative; /*相對定位：自動排列下來，可以偏移位置*/
    position: absolute; /*絕對定位：對上層物件作做偏移定位(但上層一定要是relative)*/
    position: fixed; /*固定：固定在某個位置，不會隨著視窗滾動*/
    position: sticky; /*凍結在上方：視窗向下滾動，仍停留在上方*/
    position: inherit; /*跟隨父元素的position*/
    position: initial; /*將position設為其初始值(static)*/
}
\`\`\`
#
-----------------------------------------------
#
## 顯示(display)
#
\`\`\`css
.box{
    display: block; /*區塊元素：div、p、form、hr、dl、dt、dd、ol、ul、h1~h6*/

    /*沒有width和height，只要沒有br會一直同行直到空間不足才會換行*/
    display: inline; /*行內元素：span、a、small、label*/

    /*有width和height，只要沒有br會一直同行直到空間不足才會換行*/
    display: inline-block; /*行內元素並包覆：img、input、select、button*/

    display: list-item; /*以清單方式顯示*/
    display: flex; /*彈性自由排列*/
    display: none; /*不顯示*/

    display: table; /*等於<table>*/
    display: table-row; /*等於<tr>*/
    display: table-cell; /*等於<td>、<th>*/
    display: table-header-group; /*等於<thead>*/
    display: table-row-group; /*等於<tbody>*/
    display: table-footer-group; /*等於<tfoot>*/
    display: table-column-group; /*等於<colgroup>*/
    display: table-column; /*等於<col>*/
    display: table-caption; /*等於<caption>*/
}
\`\`\`
#
#### table垂直置中法
#
\`\`\`html
<div class="table-wrap">
    <div class="table-cell">垂直置中</div>
</div>
\`\`\`
\`\`\`css
.table-wrap{
    display: table;
    width: 300px;
    height: 300px;
}
.table-cell{
    display: table-cell;
    vertical-align: middle;
    text-align: center;
}
\`\`\`
-----------------------------------------------
#
## 物件變形(transform)
#
\`\`\`css
.box{
    transform: none; /*(預設值)*/
    transform: translate(30px,20px); /*偏移X軸30px Y軸20px*/
    transform: translateX(30px); /*偏移X軸30px*/
    transform: translateY(20px); /*偏移Y軸20px*/

    transform-style: flat; /*2D(預設值)*/
    transform-style: preserve-3d; /*3D*/

    perspective: none; /*無3D透視距離(預設值)*/
    perspective: 30px; /*3D透視距離30px*/

    perspective-origin: 30px top; /*3D透視原點位置X軸30px，Y軸最上方*/

    backface-visibility: visible; /*3D透視可看到後面的物件(預設值)*/
    backface-visibility: hidden; /*3D透視不能看到後面的物件*/

    appearance: auto; /*原本的樣式(預設值)*/
    appearance: none; /*去除原本的樣式*/

    transform: scale(1.5,2); /*縮放X軸1.5 Y軸2*/
    transform: scaleX(1.5); /*縮放X軸1.5*/
    transform: scaleY(2); /*縮放Y軸2*/

    transform: skew(30deg,20deg); /*傾斜X軸30deg*/
    transform: skewX(30deg); /*傾斜X軸30deg*/
    transform: skewY(20deg); /*傾斜Y軸20deg*/

    transform: rotate(30deg); /*旋轉30度，正值為順時針，負值為逆時針*/

    transform-origin: center; /*原點在中心*/
    transform-origin: 50px 20px; /*從原點離上方50px 離左方20px*/
}
\`\`\`
#
#### 3D透視物件
#
\`\`\`css
ul{
    display: flex;
}
ul li{
    justify-content: center;
    align-items: center;
}
\`\`\`
#
-----------------------------------------------
#
## 分欄(column)
#
\`\`\`css
.box{
    column-count: auto; /*(預設值)*/
    column-count: 3; /*分3欄*/

    column-width: auto; /*(預設值)*/
    column-width: 200px; /*用200px去分欄*/

    /*column-count及column-width只能二擇一*/

    column-gap: auto; /*(預設值)*/
    column-gap: 20px; /*欄與欄間距20px*/

    column-rule-width: auto; /*分隔線寬度(1.5px)(預設值)*/
    column-rule-width: 2px; /*分隔線寬度*/
    column-rule-width: thin; /*分隔線寬度(1px)*/
    column-rule-width: medium; /*分隔線寬度(3px)*/
    column-rule-width: thick; /*分隔線寬度(5px)*/

    column-rule-style: none; /*(預設值)*/
    column-rule-style: hidden; /*隱藏*/
    column-rule-style: dotted; /*點點線*/
    column-rule-style: dashed; /*虛線*/
    column-rule-style: solid; /*實線*/
    column-rule-style: double; /*雙實線*/
    column-rule-style: groove; /*凸起實線*/
    column-rule-style: ridge; /*更加凸起實線*/
    column-rule-style: inset; /*3D凹*/
    column-rule-style: outset; /*3D凸*/

    column-rule-color: black; /*分隔線黑色(預設值)*/
    column-rule-color: #333333; /*分隔線顏色*/

    column-span: none; /*在重要的字上使用時，會被分欄(預設值)*/
    column-span: all; /*在重要的字上使用時，不會被分欄*/

    column-rule: style | width | color;
}
\`\`\`
#
-----------------------------------------------
#
## 重疊順序(z-index)
#
\`\`\`css
.box{
    position: relative | absolute;
    z-index: auto; /*自動(預設值)*/
    z-index: 999; /*順序排列在上層999*/
    z-index: -30; /*順序排列在下層30*/
}
\`\`\`
#
\`該元素必須是position:relative/absolute\`
#`,__vite_glob_0_36=Object.freeze(Object.defineProperty({__proto__:null,default:_20220403CSS_____},Symbol.toStringTag,{value:"Module"})),_20220404CSS_____=`---
title: 【CSS】CSS元件樣式
date: 2022-04-04
tags: ["css"]
---
#
## 連結(a)
#
<!--more-->
#
\`\`\`css
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
\`\`\`
#
#### logo連結(隱藏h1)
#
\`\`\`html
<h1>
    <a href="#">公司名稱</a>
</h1>
\`\`\`
#
\`\`\`css
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
\`\`\`
#
-----------------------------------------------
#
## 圖片(img)
#
1. 在\`<img>\`上設定\`float\`，文字會圍繞在旁邊
#
2. 浮動的\`<img>\`可用\`padding/margin\`調整
#
3. 若要取消浮動\`clear:both\`
#
\`\`\`css
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
\`\`\`
#
#### 自適應圖片
#
\`\`\`css
img{
    max-width: 100%;
    height: auto;
}
\`\`\`
#
#### <img>填滿上層容器
#
\`\`\`css
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
\`\`\`
#
#### background-image填滿上層容器
#
\`\`\`css
.box{
  height: 100vh;
  overflow: hidden;
  background-image: url("https://i.imgur.com/1ZEML4s.png");
  background-size: cover;
  background-position: center center;
}
\`\`\`
#
#### 固定比例<img>
#
\`\`\`css
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
\`\`\`
#
-----------------------------------------------
#
## 清單(list)
#
\`\`\`css
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
    list-style-type: "\\1F44D"; /*符號*/
    list-style-type: none; /*不顯示*/

    list-style-image: none; /*(預設值)*/
    list-style-image: url("連結網址"); /*崁入清單樣式*/

    list-style-position: outside; /*圖樣在border外(預設值)*/
    list-style-position: inside; /*圖樣在border內*/

    list-style: list-style-type|list-style-image|list-style-position|;
}
\`\`\`
#
#### 使用UTF-8字符取代清單樣式
#
\`\`\`scss
li{
    list-style: none;
    &::before{
        display: inline-block;
        content: "⇦";
    }
}
\`\`\`
#
\`::before在元素之前、::after在元素之後\`
#
-----------------------------------------------
#
## 表格(table)
#
\`\`\`css
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
\`\`\`
#
-----------------------------------------------
#
## 按鈕(button)
#
\`\`\`css
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
\`\`\`
#
\`搭配::hover來增加效果\`
#
-----------------------------------------------
#
## 輸入框(input)
#
\`\`\`css
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
\`\`\`
#
\`搭配::focus來增加效果\`
#
-----------------------------------------------
#
## 複選框(checkbox)
#
\`\`\`css
    accent-color: red;
\`\`\`
#
-----------------------------------------------
#
## 區塊(block)
#
\`\`\`css
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
\`\`\`
#
-----------------------------------------------
#
## 對齊(align)
#
1. 限用同行的\`display:inline/inline-block\`元素\`<div><span><img>\`
#
2. 同行的元素都要加上\`vertical-align\`才會對齊
#
3. 不適用\`position:relative/absolute\`元素
#
\`\`\`css
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
\`\`\`
#
#### div內的文字置中
#
\`\`\`css
.box{
    text-align: center;
    line-height: 設跟height值一樣;
}
\`\`\`
#
#### 元素水平置中
#
\`\`\`css
.box{
    margin: 0 auto;
}
\`\`\`
#
#### 元素垂直水平置中
#
\`\`\`css
ul{
    position: relative;
}
ul li{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: ranslate(-50%,-50%);
}
\`\`\`
#
#### 文字或元素垂直水平置中
#
\`\`\`css
ul{
    display: flex;
}
ul li{
    justify-content: center;
    align-items: center;
}
\`\`\`
#
-----------------------------------------------
#
## 濾鏡(filter)
#
\`\`\`css
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
\`\`\`
#
-----------------------------------------------
#
## 背景濾鏡(backdrop-filter)
#
\`\`\`css
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

\`\`\`
#
-----------------------------------------------
#
## 圖層混合(mix-blend-mode)
#
\`\`\`css
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
\`\`\`
#
-----------------------------------------------
#
## 捲軸(scrollbar)
#
\`\`\`html
<div class="box">lorem ipsum, dolor sit amet consectetur adipisicing elit. Est soluta ipsam quaerat consectetur, aut autem architecto dignissimos nesciunt eius minus odit et tenetur dolorum magnam pariatur atque voluptatem, vel vitae?</div>
\`\`\`
#
\`\`\`css
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
\`\`\``,__vite_glob_0_37=Object.freeze(Object.defineProperty({__proto__:null,default:_20220404CSS_____},Symbol.toStringTag,{value:"Module"})),_20220405CSSKeyframes____=`---
title: 【CSS】keyframes關鍵影格
date: 2022-04-05
tags: ["css"]
---
#
## 影格動畫(animation)
#
<!--more-->
#
#### 第一種寫法
#
\`\`\`css
@keyframes changeColor{
    from{
        background-color: red;
    }
    to{
        background-color: blue;
    }
}
\`\`\`
#
#### 第二種寫法
#
\`\`\`css
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
\`\`\`
#
#### 參數設定
#
\`\`\`css
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
\`\`\`
#
-----------------------------------------------
#
## 動畫轉換(transition)
#
\`\`\`css
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
\`\`\`
#`,__vite_glob_0_38=Object.freeze(Object.defineProperty({__proto__:null,default:_20220405CSSKeyframes____},Symbol.toStringTag,{value:"Module"})),_20220406CSSFlexbox____=`---
title: 【CSS】Flexbox彈性盒子
date: 2022-04-06
tags: ["css"]
---
#
## flexbox排版
#
<!--more-->
#
* 外層flex，item寬度超出container也不會超出
* item內有文字或div時撐開高度時，其他item會以(最高)來延伸成等高
* 
#
#### 外容器(Container)
#
\`\`\`css
ul{
    display: flex;

    /*主軸方向*/
    flex-direction: row; /*從左到右(預設)*/
    flex-direction: row-reverse; /*從右到左*/
    flex-direction: column; /*從上到下*/
    flex-direction: column-reverse; /*從下到上*/

    /*主軸線排列*/
    justify-content: flex-start; /*從頭開始(預設)*/
    justify-content: flex-end; /*從尾開始*/
    justify-content: center; /*置中排列*/
    justify-content: space-between; /*貼齊頭和尾*/
    justify-content: space-around; /*平均分散*/

    /*交錯線排列*/
    align-items: flex-start; /*從交錯線頭開始對齊(預設值)*/
    align-items: flex-end; /*從交錯線尾開始對齊*/
    align-items: center; /*從交錯線置中對齊*/
    align-items: stretch; /*從交錯線延伸到底*/
    align-items: baseline; /*從交錯線對齊(文字)基線*/

    flex-wrap: nowrap; /*內容超出範圍不換行(預設值)*/
    flex-wrap: wrap; /*內容超出範圍自動換行*/
    flex-wrap: wrap-reverse; /*內容超出範圍反向換行*/

    flex-flow: row nowrap; /*(預設值)*/
    flex-flow: column wrap; /*從上到下，自動換行*/

    /*使用前提flex-wrap: wrap*/
    align-content: stretch; /*第一行與最後一行都延伸至滿版(預設值)*/
    align-content: flex-start; /*第一行與最後一行都從交錯線頭開始排列*/
    align-content: flex-end; /*第一行與最後一行都從交錯線尾開始排列*/
    align-content: center; /*第一行與最後一行都對齊交錯線中間位置*/
    align-content: space-between; /*第一行從交錯線頭，最後一行從交錯線尾*/
    align-content: space-around; /*第一行與最後一行平均分散在交錯軸上*/
}
\`\`\`
#
#### 內元件(Items)
#
\`\`\`css
ul > li{
    align-self: flex-start; /*元件本身從頭對齊*/
    align-self: flex-end; /*元件本身從尾對齊*/
    align-self: center; /*元件本身對齊中線*/
    align-self: stretch; /**元件本身延伸到底*/
    align-items: baseline; /**元件本身對齊(文字)基線*/
    
    flex-grow: 0; /*伸展比(預設值)*/
    flex-grow: 1; /*將容器剩餘空間，進行比例分配*/

    flex-shrink: 1; /*被壓縮比(預設值)*/
    flex-shrink: 0; /*不要被壓縮*/

    flex-basis: auto; /*預先被分配比(預設值)*/
    flex-basis: 200px; /*絕對被分配值*/

    flex: 0 1 auto; /*(預設值)*/
    flex: flex-grow | flex-shrink | flex-basis;
    flex: 3; /*永遠佔30%*/
    flex: none; /*取消彈性，保持原尺寸*/
    
    order: 0; /*(預設值)*/
    order: 1~100; /*設定排序，數字小的先*/
}
\`\`\`
#
-----------------------------------------------
#
## Bootstrap4樣板
#
\`\`\`html
<!DOCTYPE html>
<html lang="zh-tw">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Bootstrap 4</title>
    <style>
      body{
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Microsoft JhengHei", Roboto, "Helvetica Neue", Arial, sans-serif
      }
    </style>
</head>
<body>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"><\/script>
</body>
</html>
\`\`\`
#
-----------------------------------------------
#
## Bootstrap4排版方式與斷點
#
* 單位是rem
#
* 預設字體大小16px
#
* 以12欄方式排版
#
* \`.container\` > \`.row\` > \`.col-*\` > 內容
#
* 以下為Bootstrap4的斷點：
#
|0~576|576~768|768~992|992~1200|1200~|
|---|---|---|---|---|
|.col-*|.col-sm-*|.col-md-*|.col-lg-*|.col-xl-*|
|Extra Small|Small|Medium|Large|Extra Large|
|auto|540px|720px|960px|1140px|
#
\`Bootstrap是從手機版開始製作網頁版型，要超過斷點才會套用樣式\`
#
-----------------------------------------------
#
## 容器(Container)
#
\`\`\`css
.container{
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px){
  .container {
    max-width: 540px;
    background-color: yellow;
  }
}
@media (min-width: 768px){
  .container {
    max-width: 720px;
    background-color: green;
  }
}
@media (min-width: 992px){
  .container {
    max-width: 960px;
    background-color: blue;
  }
}
@media (min-width: 1200px){
  .container {
    max-width: 1140px;
    background-color: purple;
  }
}
\`\`\`
#
\`滿版容器可用.container-fluid\`
#
-----------------------------------------------
#
## 列(Row)
#
\`\`\`css
.row{
  display: flex; 
  flex-wrap: wrap; /*預設裡面容器會自動換行*/
  margin-right: -15px;
  margin-left: -15px;
}
\`\`\`
#
#### 可添加的樣式
#
\`\`\`css
.row .flex-row
.row .flex-row-reverse
.row .flex-column
.row .flex-column-reverse

.row .justify-content-start
.row .justify-content-end
.row .justify-content-center
.row .justify-content-between
.row .justify-content-around

.row .align-items-start
.row .align-items-end
.row .align-items-center
.row .align-items-baseline
.row .align-items-stretch

.row .flex-nowrap
.row .flex-wrap
.row .flex-wrap-reverse

.row .flex-wrap .align-content-start 
.row .flex-wrap .align-content-end 
.row .flex-wrap .align-content-center
.row .flex-wrap .align-content-around
.row .flex-wrap .align-content-stretch
\`\`\`
#
-----------------------------------------------
#
## 欄(Col)
#
\`\`\`html
<div class="container">
    <div class="row">
        <div class="col"></div>
        <div class="col"></div>
        <div class="col"></div>
    </div>
</div>
\`\`\`
#
\`\`\`css
.col{
    /*螢幕低於576px時width: 100%*/
    max-width: 100%;
    flex-grow: 1; /*佔總欄(3)比是1*/
    flex-basis: 0; 
}
.col-sm-6{
    /*螢幕超過576px時width: 50%*/
}
.col-md-6{
    /*螢幕超過768px時width: 50%*/
}
.col-lg-4{
    /*螢幕超過在992px時width: 33.3%*/
}
.col-xl-3{
    /*螢幕超過在992px時width: 25%*/
}
\`\`\`
#
#### 可添加的樣式
#
\`\`\`css
.col .offset-4 /*推移col四格*/ 
.col-md-4 .offset-md-4 /*往右4col*/
.col-md-4 .ml-auto /*將右邊col推到最右*/
.col-md-4 .order-md-3 /*在中螢幕時順序3*/

.col .align-self-start
.col .align-self-end
.col .align-self-center
.col .align-self-baseline
.col .align-self-stretch

.col .order-first /*order:-1*/
.col .order-1 /*order:1*/
.col .order-2 /*order:2*/
.col .order-3 /*order:3*/ 
.col .order-last /*order:13*/
\`\`\`
#
#### order排序應用
#
\`\`\`html
<div class="row">
    <div class="col-3 order-3">1</div>
    <div class="col-3 order-4">2</div>
    <div class="col-3 order-1">3</div>
    <div class="col-3 order-2">4</div>
</div>
\`\`\`
#
\`原本排序：1>2>3>4，加order後排序變：3>4>1>2\`
#
\`\`\`html
<div class="row">
    <div class="col-3 order-sm-3">1</div>
    <div class="col-3 order-sm-4">2</div>
    <div class="col-3 order-sm-1">3</div>
    <div class="col-3 order-sm-2">4</div>
</div>
\`\`\`
#
\`再加上sm表示在行動版以上排序才會是：3>4>1>2\`
#
-----------------------------------------------
#
## Bootstrap預設樣式
#
#### 字體
#
\`\`\`css
.display1 /*font-size: 96px*/
.display2 /*font-size: 88px*/
.display3 /*font-size: 72px*/
.display4 /*font-size: 56px*/

.h1 /*font-size: 40px*/
.h2 /*font-size: 32px*/
.h3 /*font-size: 28px*/
.h4 /*font-size: 24px*/
.h5 /*font-size: 20px*/
.h6 /*font-size: 16px*/
\`\`\`
#
#### 顏色
#
\`\`\`css
.primary /*藍色(主要的)*/
.secondary /*灰色(次要的)*/
.success /*綠色(成功的)*/
.danger /*紅色(危險的)*/
.warning /*黃色(警告的)*/
.info /*青色(通知/信息)*/
.light /*灰色*/
.dark /*黑色*/
.white /*白色*/
.transparent /*透明*/
.text-{color} /*文字顏色{替換}*/
.bg-{color} /*背景顏色{替換}*/
.border-{color} /*線框顏色*/
\`\`\`
#
#### 排版
#
\`\`\`css
/*1rem=16px*/
.mt-1 /*margin-top: 4px*/
.mr-2 /*marign-right: 8px*/
.mb-3 /*margin-bottom: 16px*/
.ml-4 /*margin-left: 24px*/
.mx-auto /*margin: 0 auto*/

.pt-5 /*padding-top: 48px*/
.px-3 /*padding-x: 16px*/
.py-4 /*padding-y: 24px*/
.pl-5 /*padding-left: 48px*/

.w-25 /*width: 25%*/
.w-100 /*佔滿100%等於後面元素自動換行*/
.mw-50 /*max-width: 50%*/
.h-75 /*height: 75%*/
.mh-100 /*max-height: 100%*/

.flex-sm-row-reverse /*在768px時反轉*/
.d-flex /*display:flex*/
.d-inline /*display:inline*/
.d-block /*display:block*/
.d-inline-block /*display:inline-block*/
.d-sm-none /*在超過小尺寸螢幕時消失*/
\`\`\`
#
\`\`\`html
<!--一列四欄-->
<div class="container">
  <div class="row">
    <div class="col"></div>
    <div class="col"></div>
    <div class="col"></div>
    <div class="col"></div>
  </div>  
</div>

<!--二列二欄-->
<div class="container">
  <div class="row">
    <div class="col"></div>
    <div class="col"></div>
    <div class="w-100"></div>
    <div class="col"></div>
    <div class="col"></div>
  </div>  
</div>

<!--二列二欄-->
<div class="container">
  <div class="row">
    <div class="col-6"></div>
    <div class="col-6"></div>
    <div class="col-6"></div>
    <div class="col-6"></div>
  </div>  
</div>
\`\`\`
#
#### 圖片、文字
#
\`\`\`css
.img-fluid /*max-width:100%，height:auto*/
.img-thumbnail /*在圖片加上外框線*/
.rounded /*增加圓角*/
.text-center /*置中，在圖片外層容器添加可置中*/
.mx-auto .d-block /*圖片置中*/
.clearfix /*清除浮動display:block，clear:both，content:""*/
.sr-only /*畫面隱藏，給瀏覽器了解該元素*/
\`\`\`
#
\`\`\`html
<!--圖片置中-->
<img class="img-fluid mx-auto d-block" width="600" src="...">

<!--圖片和文字置中-->
<div class="text-align">
  <img class="img-fluid" width="600" src="...">
</div>

<!--圖片和下方描述-->
<figure class="figure">
  <img src="..." class="figure-img img-fluid">
  <figcaption class="figure-caption">圖片描述</figcaption>
</figure>
\`\`\`
#
#### 影音嵌入
#
\`\`\`html
<div class="embed-responsive embed-responsive-21by9">
  <iframe class="embed-responsive-item" src="影片網址"></iframe>
</div>
\`\`\`
#
\`影片網址內需要有/embed/字樣\`
#
\`\`\`css
.embed-responsive .embed-responsive-21by9 /*影片尺寸21:9*/
.embed-responsive .embed-responsive-16by9 /*影片尺寸16:9*/
.embed-responsive .embed-responsive-4by3 /*影片尺寸4:3*/
.embed-responsive .embed-responsive-1by1 /*影片尺寸1:1*/
\`\`\`
#
#### 固定選單
#
\`\`\`html
<div class="navbar navbar-light bg-light fixed-top">
  <a class="navbar-brand" href="#"></a>
</div>
\`\`\`
#
\`\`\`css
.fixed-top /*將選單固定在上方*/
.fixed-bottom /*將選單固定在下方*/
.sticky-top /*將選單在滾動時固定position:sticky，top:0，z-index: 1020
\`\`\``,__vite_glob_0_39=Object.freeze(Object.defineProperty({__proto__:null,default:_20220406CSSFlexbox____},Symbol.toStringTag,{value:"Module"})),_20220407CSSBootstrap4____=`---
title: 【CSS】Bootstrap4實作元件
date: 2022-04-07
tags: ["css"]
---
#
## 提示訊息(Alert)
#
<!--more-->
#
\`\`\`html
<div class="alert alert-{color} alert-dismissible show">
   提示訊息
  <button type="button" class="close" data-dismiss="alert">
    <span>&times;</span>
  </button>
</div>
\`\`\`
#
\`點擊Ｘ關閉效果，需載入bootstrap的js\`
#
-----------------------------------------------
#
## 小徽章(Badge)
#
\`\`\`html
<a href="#" class="badge badge-{color}">文字內容</a>
\`\`\`
#
\`\`\`html
<span class="badge badge-{color}">文字內容</span>
\`\`\`
#
\`加.badge-pill可以讓徽章更圓潤\`
#
-----------------------------------------------
#
## 麵包屑(Breakcrumb)
#
\`\`\`html
<ol class="breadcrumb">
  <li class="breadcrumb-item"><a href="#">首頁</a></li>
  <li class="breadcrumb-item"><a href="#">圖書館</a></li>
  <li class="breadcrumb-item active">資料</li>
</ol>
\`\`\`
#
\`\`\`html
<nav class="breadcrumb">
  <a class="breadcrumb-item" href="#">首頁</a>
  <a class="breadcrumb-item" href="#">圖書館</a>
  <a class="breadcrumb-item active" href="#">資料</a>
</nav>
\`\`\`
#
\`修改分隔符號.breadcrumb-item::before{content:"/"}\`
#
-----------------------------------------------
#
## 按鈕(Button)
#
\`\`\`html
<button type="button" class="btn btn-{color} btn-{size}">按鈕</button>
\`\`\`
#
\`\`\`html
<a class="btn btn-{color} btn-{size}" href="#">連結按鈕</a>
\`\`\`
#
\`\`\`html
<input class="btn btn-{color} btn-{size}" type="button" value="按鈕">
\`\`\`
#
\`{size}可填sm、lg、block(撐滿容器)，.disabled不能點擊狀態\`
#
-----------------------------------------------
#
## 按鈕群組(Button Group)
#
\`\`\`html
<div class="btn-group btn-group-{size}">
  <button type="button" class="btn btn-{color}">按鈕1</button>
  <button type="button" class="btn btn-{color}">按鈕2</button>
  <button type="button" class="btn btn-{color}">按鈕3</button>
</div>
\`\`\`
#
-----------------------------------------------
#
## 卡片(Card)
#
#### 一般卡片結構
#
\`\`\`html
<div class="card" style="width:{size}">
  <img src="..." class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">標題</h5>
    <p class="card-text">內容文字</p>
    <a href="#" class="btn btn-{color}">按鈕</a>
  </div>
</div>
\`\`\`
#
\`.card有border可用來包裹物件可加入h-100撐開高度，.card-body有padding\`
#
#### 頁籤卡片結構
#
\`\`\`html
<div class="card">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link active" href="#">頁籤一</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">頁籤二</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">頁籤三</a>
      </li>
    </ul>
  </div>
  <div class="card-body">
    <h5 class="card-title">標題</h5>
    <p class="card-text">內容文字</p>
    <a href="#" class="btn btn-{color}">按鈕</a>
  </div>
</div>
\`\`\`
#
\`增加.active樣式表示正在哪個頁籤上\`
#
#### 卡片群組
#
\`\`\`html
<div class="card-group">
  <div class="card">
    <img src="..." class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">標題</h5>
      <p class="card-text">內容文字</p>
    </div>
  </div>
  <div class="card">
    <img src="..." class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">標題</h5>
      <p class="card-text">內容文字</p>
    </div>
  </div>
  <div class="card">
    <img src="..." class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">標題</h5>
      <p class="card-text">內容文字</p>
    </div>
  </div>
</div>
\`\`\`
#
\`.card-group可更換成.card-deck或.card-column(瀑布流)\`
#
-----------------------------------------------
#
## 輪播(Carousel)
#
\`\`\`html
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item carousel-height bg-cover active" style="background-image:url(...)"></div>
    <div class="carousel-item carousel-height bg-cover" style="background-image:url(...)"></div>
    <div class="carousel-item carousel-height bg-cover" style="background-image:url(...)"></div>
  </div>
  <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
\`\`\`
#
\`\`\`css
.bg-cover{
  background-size: cover;
  background-position: center center;
}
.carousel-height{
  height: 450px;
}
\`\`\`
#
\`.active預設輪播項目\`
#
\`在.carousel加入.data-interval="1000"每1秒跳下一張\`
#
\`在.carousel加入.data-wrap="false"跳到最後一張時不會再跳回第一張\`
#
\`\`\`js
$(".carousel").carousel({
  interval: 1000,
  wrap: false
});
\`\`\`
#
-----------------------------------------------
#
## 折疊(Collapse)
#
\`\`\`html
<div class="accordion" id="accordionExample">
  <div class="card">
    <div class="card-header" id="headingOne">
      <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#one">折疊ㄧ</button>
    </div>
    <div id="one" class="collapse show" data-parent="#accordionExample">
      <div class="card-body">內容文字1</div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#two">折疊二</button>
    </div>
    <div id="two" class="collapse" data-parent="#accordionExample">
      <div class="card-body">內容文字2</div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#three">折疊三</button>
    </div>
    <div id="three" class="collapse" data-parent="#accordionExample">
      <div class="card-body">內容文字3</div>
    </div>
  </div>
</div>
\`\`\`
#
\`.show預設展開內容\`
#
-----------------------------------------------
#
## 下拉選單(Dropdown)
#
\`\`\`html
<div class="dropdown">
  <button class="btn btn-{color} dropdown-toggle" type="button" data-toggle="dropdown">下拉標題</button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">項目一</a>
    <a class="dropdown-item" href="#">項目二</a>
    <a class="dropdown-item" href="#">項目三</a>
  </div>
</div>
\`\`\`
#
-----------------------------------------------
#
## 表單(Forms)
#
\`\`\`html
<form>
  <div class="form-row">
    <div class="col">
      <label for="firstname">姓</label>
      <input type="text" class="form-control" id="firstname" placeholder="請輸入姓氏">
    </div>
    <div class="col">
      <label for="lastname">名</label>
      <input type="text" class="form-control" id="lastname" placeholder="請輸入名字">
    </div>
  </div>
  <div class="form-group">
    <label for="email">聯絡信箱</label>
    <input type="email" class="form-control" id="email" placeholder="請輸入電子信箱">
  </div>
  <div class="form-group">
    <label for="phone">聯絡電話</label>
    <input type="tel" class="form-control" id="phone" placeholder="請輸入手機號碼">
  </div>
  <div class="form-group">
    <label for="question">問題類型</label>
    <select class="form-control" id="question">
      <option>選項一</option>
      <option>選項二</option>
      <option>選項三</option>
    </select>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="checkbox">
    <label class="form-check-label" for="checkbox">核選方塊</label>
  </div>
  <div class="form-group">
    <label for="content">內容訊息</label>
    <textarea class="form-control" id="content" rows="3"></textarea>
  </div>
</form>
\`\`\`
#
-----------------------------------------------
#
## 聯絡表單(Forms)
#
\`\`\`html
<form>
  <div class="form-row">
    <div class="col">
      <label for="firstname">姓</label>
      <input type="text" class="form-control form-control-{size}" id="firstname" placeholder="請輸入姓氏">
    </div>
    <div class="col">
      <label for="lastname">名</label>
      <input type="text" class="form-control form-control-{size}" id="lastname" placeholder="請輸入名字">
    </div>
  </div>
  <div class="form-group">
    <label for="email">聯絡信箱</label>
    <input type="email" class="form-control form-control-{size}" id="email" placeholder="請輸入電子信箱">
  </div>
  <div class="form-group">
    <label for="phone">聯絡電話</label>
    <input type="tel" class="form-control form-control-{size}" id="phone" placeholder="請輸入手機號碼">
  </div>
  <div class="form-group">
    <label for="question">問題類型</label>
    <select class="form-control form-control-{size}" id="question">
      <option>選項一</option>
      <option>選項二</option>
      <option>選項三</option>
    </select>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="checkbox">
    <label class="form-check-label" for="checkbox">核選方塊</label>
  </div>
  <div class="form-group">
    <label for="content">內容訊息</label>
    <textarea class="form-control" id="content" rows="3"></textarea>
  </div>
  <button class="btn btn-{color}" type="submit">送出</button>
</form>
\`\`\`
#
#### 驗證表單
#
\`\`\`html

<form action="..." class="needs-validation" novalidate>
  <div class="form-group">
      <label for="username">姓名*</label>
      <input type="text" class="form-control" id="username" placeholder="請輸入姓名" required>
      <div class="invalid-feedback">請填寫此欄位</div>
  </div>
  <div class="form-group">
      <label for="phonenumber">請輸入電話號碼*</label>
      <input type="tel" class="form-control" id="phonenumber" placeholder="請輸入電話號碼" required>
      <div class="invalid-feedback">請填寫此欄位</div>
  </div>
  <div class="form-group">
      <label for="email">請輸入Email*</label>
      <input type="email" class="form-control" id="email" placeholder="name@examlpe.com" required>
  </div>
  <div class="custom-control custom-radio">
      <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" required>
      <label class="custom-control-label" for="customRadio1">需要素食</label>
  </div>
  <div class="custom-control custom-radio">
      <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input" required>
      <label class="custom-control-label" for="customRadio2">不需要素食</label>
      <div class="invalid-feedback">請選擇是否素食</div>
  </div>
  <div class="text-right">
      <button type="button" class="btn btn-secondary">取消</button>
      <button type="submit" class="btn btn-primary">送出</button>
  </div>
</form>
\`\`\`
#
\`\`\`js
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    let forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    let validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
\`\`\`
#
\`在<form>加入.needs-validation和novalidate可增加驗證表單功能\`
#
-----------------------------------------------
#
## 輸入群組(Input group)
#
\`\`\`html
<div class="input-group input-group-{size}">
  <div class="input-group-prepend">
    <span class="input-group-text">請輸入金額</span>
  </div>
  <input type="text" class="form-control">
  <div class="input-group-append">
    <span class="input-group-text">美元(USD)</span>
  </div>
</div>
\`\`\`
#
\`.input-group會滿版，可在外層加入.form-inline\`
#
-----------------------------------------------
#
## 超大看板(Jumbotron)
#
\`\`\`html
<div class="jumbotron">
  <h1 class="display-{num}">標題</h1>
  <p class="lead">內容文字</p>
  <a class="btn btn-{color}" href="#">按鈕</a>
</div>
\`\`\`
#
\`增加.jumbotron-fluid可以取消圓角\`
#
-----------------------------------------------
#
## 清單群組(List Group)
#
\`\`\`html
<div class="row">
  <div class="col-4">
    <div class="list-group">
      <a class="list-group-item list-group-item-action active" data-toggle="list" href="#one">選項一</a>
      <a class="list-group-item list-group-item-action" data-toggle="list" href="#two">選項二</a>
      <a class="list-group-item list-group-item-action" data-toggle="list" href="#three">選項三</a>
      <a class="list-group-item list-group-item-action" data-toggle="list" href="#four">選項四</a>
    </div>
  </div>
  <div class="col-8">
    <div class="tab-content">
      <div class="tab-pane show active" id="one">內容文字1</div>
      <div class="tab-pane" id="two">內容文字2</div>
      <div class="tab-pane" id="three">內容文字3</div>
      <div class="tab-pane" id="four">內容文字4</div>
    </div>
  </div>
</div>
\`\`\`
#
\`.active表示目前點擊，.show預設展開\`
#
-----------------------------------------------
#
## 媒體對象(Media Object)
#
\`\`\`html
<div class="media">
  <img src="...">
  <div class="media-body">
    <h5>標題</h5>
    內容文字
  </div>
</div>
\`\`\`
#
-----------------------------------------------
#
## 進入頁面彈出視窗(Modal)
#
\`\`\`html
<!-- 增加data-backdrop="static"點擊modal以外不會關閉 -->
<div class="modal fade" data-backdrop="static" id="myModal">
  <!-- modal-lg 調整modal大小 -->
  <div class="modal-dialog">
    <div class="modal-content ">
      <div class="modal-header">
        <h5 class="modal-title">標題</h5>
        <!-- data-dismiss="modal" 關閉modal -->
        <button type="button" class="close" data-dismiss="modal">
          <span>&times;</span>
        </button>
      </div>
      <div class="modal-body">內容文字</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-{color}" data-dismiss="modal">關閉</button>
        <button type="button" class="btn btn-{color}">確定</button>
      </div>
    </div>
  </div>
</div>
\`\`\`
#
\`\`\`js
setTimeout(function(){
  $("myModal").modal("show");
},5000);
\`\`\`
#
-----------------------------------------------
#
## 按鈕註冊視窗
#
\`\`\`html
<!-- 按鈕 -->
<a href="#" class="btn btn-outline-primary mr-2" data-toggle="modal" data-target="#loginmodal">登入</a>
<a href="#" class="btn btn-primary px-4" data-toggle="modal" data-target="#signinmodal">註冊</a>
<!-- 登入視窗 -->
<div class="modal fade" id="loginmodal" data-backdrop="static" data-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header bg-primary text-white">
                <h5 class="modal-title" id="staticBackdropLabel">登入服務</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body pb-0">
                <form>
                    <div class="form-group">
                        <label for="loginemail">Email</label>
                        <input type="email" class="form-control" id="loginemail"
                            aria-describedby="emailHelp" placeholder="Enter email">
                        <small id="emailHelp" class="form-text text-muted">我們絕不會隨意將你的 email 給予第三者</small>
                    </div>
                    <div class="form-group">
                        <label for="loginpassword">密碼</label>
                        <input type="password" class="form-control" id="loginpassword" placeholder="Password">
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="remember">
                        <label class="form-check-label" for="remember">記住帳號</label>
                    </div>
                    <div class="modal-footer pt-3 p-0">
                        <a href="#" class="mr-auto" data-dismiss="modal" data-toggle="modal"
                            data-target="#signinmodal">還沒有帳號了？</a>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-primary">登入</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

    <!-- 註冊視窗 -->
<div class="modal fade" id="signinmodal" data-backdrop="static" data-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-warning text-white">
                <h5 class="modal-title" id="staticBackdropLabel">註冊服務</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body pb-0">
                <form class="container-fluid">
                    <div class="row">
                        <div class="col-md-6">
                            <h3 class="font-weight-bold text-secondary">註冊六角西餐廳</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, dolorem omnis, voluptatibus harum asperiores exercitationem, vel maxime sequi eum suscipit quisquam laborum laudantium dolore? Quis rem est illo quam assumenda.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, dolorem omnis, voluptatibus harum asperiores exercitationem, vel maxime sequi eum suscipit quisquam laborum laudantium dolore? Quis rem est illo quam assumenda.</p>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="signinemail">Email</label>
                                <input type="email" class="form-control" id="signinemail"
                                    aria-describedby="emailHelp" placeholder="Enter email">
                                <small id="emailHelp" class="form-text text-muted">我們絕不會隨意將你的 email 給予第三者</small>
                            </div>
                            <div class="form-group">
                                <label for="signinpassword">密碼</label>
                                <input type="password" class="form-control" id="signinpassword" placeholder="Password">
                            </div>
                            <div class="form-group">
                                <label for="signinpassword2">確認密碼</label>
                                <input type="password" class="form-control" id="signinpassword2" placeholder="Password">
                            </div>
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="agree">
                                <label class="form-check-label" for="agree">同意條款</label>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer pt-3 p-0">
                        <a href="#" class="mr-auto" data-dismiss="modal" data-toggle="modal"
                            data-target="#loginmodal">已經有帳號了？</a>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-primary">註冊</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
\`\`\`
#
\`\`\`js
$(document).ready(function(){
            $("a[data-dismiss='modal'][data-toggle='modal']").on("click",function(){
                let target = $(this).data("target");
                $(target).on("shown.bs.modal",function(){
                    $("body").addClass("modal-open");
                });  
            });
        });
\`\`\`
#
\`model切換時<body>要加上.modal-open手機版才能捲軸滑動\`
#
-----------------------------------------------
#
## 導覽(Nav)
#
\`\`\`html
<ul class="nav nav-tabs">
  <li class="nav-item">
    <button class="nav-link active" data-toggle="tab" data-target="#one" type="button">選項一</button>
  </li>
  <li class="nav-item">
    <button class="nav-link" data-toggle="tab" data-target="#two" type="button">選項二</button>
  </li>
  <li class="nav-item">
    <button class="nav-link" data-toggle="tab" data-target="#three" type="button">選項三</button>
  </li>
</ul>

<div class="tab-content">
  <div class="tab-pane fade show active" id="one">內容文字1</div>
  <div class="tab-pane fade" id="two">內容文字2</div>
  <div class="tab-pane fade" id="three">內容文字3</div>
</div>
\`\`\`
#
-----------------------------------------------
#
## 導覽列(Navbar)
#
\`\`\`html
<!-- .navbar-expand-lg 超過lg寬度就展開 -->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">logo</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#one">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="one">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">連結一</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">連結二</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">連結三</a>
      </li>
    </ul>
    <!-- .form-inline 並排不伸展 -->
    <form class="form-inline">
      <input class="form-control" type="search" placeholder="搜尋">
      <button class="btn btn-primary" type="submit">搜尋</button>
    </form>
  </div>
</nav>
\`\`\`
#
\`若要將選單連結向右推，在<ul>上加上.ml-auto\`
#
-----------------------------------------------
#
## 分頁(Pagination)
#
\`\`\`html
<nav>
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#">
        <span>&laquo;</span>
      </a>
    </li>
    <li class="page-item active"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">
        <span>&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
\`\`\`
#
-----------------------------------------------
#
## 時間軸(Timeline)
#
\`\`\`html
<div class="container">
  <div class="timeline">
    <div class="timepoint"></div>
    <div class="row">
      <div class="col-sm-6">
        <h2 class="text-sm-right">標題</h2>
        <p class="text-sm-right">內文</p>
      </div>
      <div class="col-sm-6">圖片</div>
    </div>
  </div>
  <div class="timeline">
    <div class="timepoint"> </div>
    <div class="row flex-sm-row-reverse">
      <div class="col-sm-6">
        <h2 class="title">標題</h2>
        <p>內文</p>
      </div>
      <div class="col-sm-6">圖片</div>
    </div>
  </div>
  <div class="timeline">
    <div class="timepoint"> </div>
    <div class="row">
      <div class="col-sm-6">
        <h2 class="text-sm-right">標題</h2>
        <p class="text-sm-right">內文</p>
      </div>
      <div class="col-sm-6">圖片</div>
    </div>
  </div>
</div>
\`\`\`
#
\`\`\`css
.timeline{
  position: relative;
}

.timeline:after{
  content: " ";
  position: absolute;
  top: 0;
  bottom: 0;
  left: calc(50% - 3px);
  width: 3px;
  background-color: #dddddd;
}

.timepoint{
  position: relative;
}

.timepoint:after{
  content: " ";
  position: absolute;
  left: calc(50% - 6.5px);
  width: 10px;
  height: 10px;
  border: solid 3px #dddddd;
  border-radius: 100%;
  background-color: #fff;
  z-index: 1;
}
\`\`\`
#
-----------------------------------------------
#
## 表格(table)
#
\`\`\`html
<table class="table table-responsive-sm">
    <thead>
        <tr>
            <th width="50">日期</th>
            <th width="80">訂單數</th>
            <th>營業額</th>
            <th>淨利潤</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>9/1</td>
            <td>300</td>
            <td class="text-right">256,000</td>
            <td class="text-right">168,000</td>
        </tr>
        <tr>
            <td>9/2</td>
            <td>300</td>
            <td class="text-right">256,000</td>
            <td class="text-right">168,000</td>
        </tr>
        <tr>
            <td>9/3</td>
            <td>300</td>
            <td class="text-right">256,000</td>
            <td class="text-right">168,000</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <th class="text-right" colspan="6">月總營收</td>
            <td class="text-right">3,750,500</td>
        </tr>
        <tr>
            <th class="text-right" colspan="6">月總淨利潤</td>
            <td class="text-right">2,140,500</td>
        </tr>
    </tfoot>
</table>
\`\`\`
#
\`在<table>加入.table-responsive-{size}可出現x軸，.table-hover有:hover效果\`
#`,__vite_glob_0_40=Object.freeze(Object.defineProperty({__proto__:null,default:_20220407CSSBootstrap4____},Symbol.toStringTag,{value:"Module"})),_20220408CSSMedia_screen=`---
title: 【CSS】media screen
date: 2022-04-08
tags: ["css"]
---
#
## 好的響應式體驗
#
<!--more-->
#
* 從PC版轉到手機版時，標題長度以及部份不必要內容可以適度隱藏
* PC版圖片高度可固定px，手機版height:auto
* jpg、png放大會模糊，svg向量圖放大不會失真
* 在safari瀏覽器上\`height:100%\`會跑版
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
    * <input type="text" aria-describedby="123">
        <small id="123">這是輸入框下的提示文字</small>
#
|裝置|最小可觸碰元件|最小非觸碰元件|最小字體|狀態欄|導航欄|
|---|---|---|---|---|---|
|ios|48*48px|40*40px|11px|24px|56px|
|android|44*44px|30*30px|13px|20px|44px|
#
\`好的網頁設計?別低估習慣用法的價值，要為了掃描閱讀而設計\`
#
-----------------------------------------------
#
## CSS Reset徹底清除標籤樣式
#
* [CSS Reset](https://meyerweb.com/eric/tools/css/reset/)清除標籤樣式
* [CSS Normalize](https://necolas.github.io/normalize.css/)是另一種保留部分樣式
* [Pure.css](https://purecss.io/)是Yahoo開發的兼容性樣式
#
\`\`\`css
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
\`\`\`
#
-----------------------------------------------
#
## @media斷點設置
#
\`\`\`css
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
\`\`\`
#
\`and前後一定要空格\`
#
-----------------------------------------------
#
## 計算寬度
#
\`\`\`css
.box{
    width: calc(100% - 40px); /*佔100%再減少40px*/
    width: calc(50%); /*佔50%*/
    width: calc(20% + 30%); /*佔50%*/
    width: calc(100% / 2); /*佔50%*/
}
\`\`\`
#
#### 固定左右邊距不受視窗拉動影響
#
\`\`\`css
.box{
    position: relative/absolute;
    left: 50px;
    width: calc(100% - 100px) /*left50px，right50px*/
}
\`\`\`
#
-----------------------------------------------
#
## 流體式佈局
#
1. 一欄100%
2. 二欄50%
3. 三欄33.33333%
#
\`\`\`html
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
\`\`\`
#
\`\`\`css
.box {
  float: left;
  width: 30.33333%; /*佔3分之1*/
  height: 50px;
  margin: 1.5%; /*左右共佔3%*/
  background-color: red;
}
\`\`\`
#
`,__vite_glob_0_41=Object.freeze(Object.defineProperty({__proto__:null,default:_20220408CSSMedia_screen},Symbol.toStringTag,{value:"Module"})),_20220409CSSFontawesome=`---
title: 【CSS】Fontawesome
date: 2022-04-09
tags: ["css"]
---
#
## Font Awesome 5
#
<!--more-->
#
1. 將\`<head>\`加入\`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">\`
#
2. 使用[font awesome 5](https://fontawesome.com/v5/icons/)搜尋icon
#
\`\`\`html
<i class="fas fa-camera"></i>
<i class="fas fa-camera fa-xs"></i><!--小型-->
<i class="fas fa-camera fa-sm"></i><!--中型-->
<i class="fas fa-camera fa-lg"></i><!--大型-->
\`\`\`
#
-----------------------------------------------
#
## Font Awesome 6
#
1. 將\`<head>\`加入\`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">\`
#
2. 使用[font awesome 6](https://fontawesome.com/icons)搜尋icon
#
\`\`\`html
<i class="fa-solid fa-camera"></i>
<i class="fa-solid fa-camera fa-2xs"></i><!--超小型-->
<i class="fa-solid fa-camera fa-sm"></i><!--小型-->
<i class="fa-solid fa-camera fa-lg"></i><!--中型-->
<i class="fa-solid fa-camera fa-xl"></i><!--大型-->
<i class="fa-solid fa-camera fa-2xl"></i><!--超大型-->
\`\`\`
#
-----------------------------------------------
#
## 加入在偽元素中
#
\`\`\`css
.box::before{
    content: "\\f0e0"; /*圖樣編號*/
    font-family: "Font Awesome 5 Free";
    font-size: 24px; /*調整大小*/
    font-weight: 900; /*調整實心或空心*/
}
\`\`\`
#
* 調整為元素位置
#
\`\`\`css
 .box{
    position: relative;
}
.box::before{
    position: absolute;
}
\`\`\`
#
* 讓content內的文字換行
#
\`\`\`css
.box::before{
    display: inline/inline-block;
    content: "第一行文字\\A第二行文字";
    white-space: pre-wrap;
}
\`\`\`
#
-----------------------------------------------
#
## 動態加入fontawesome
#
\`\`\`html
<a href="image/pic.jpg">圖片檔</a>
<a href="image/file.doc">文件檔</a>
\`\`\`
#
\`\`\`js
$("a[href$='.jpg']").addClass("fa fa-file-photo-o");//在a標籤的href裡如果找到.jpg關鍵字就執行
$("a[href$='.doc']").addClass("fa fa-file-word-o");//在a標籤的href裡如果找到.doc關鍵字就執行
\`\`\`
#
\`先到html引入fontawesome cdn\`
#`,__vite_glob_0_42=Object.freeze(Object.defineProperty({__proto__:null,default:_20220409CSSFontawesome},Symbol.toStringTag,{value:"Module"})),_20220417Web________=`---
title: 【Web】網頁相關大小事
date: 2022-04-17
tags: ["web"]
---
#
## 檔案路徑
#
<!--more-->
#
\`\`\`
project/
└── src/
    └── css/
        ├── all.scss
        ├── helpers/
        │   └── _variable.scss
        └── component/
            └── _sidebar.scss
\`\`\`
#
1. .src('src/css/**/*.scss') 獲取\`all.scss\`、\`_variable.scss\`、\`_sidebar.scss\`
#
2. .src('src/css/*/*.scss') 獲取\`_variable.scss\`、\`_sidebar.scss\`
#
3. .src('src/css/*.scss') 獲取\`all.scss\`
#
-----------------------------------------------
#
## 查詢ajax是否跨網域
#
1. 複製ajax網址
#
2. 使用[test-cors.org](https://test-cors.org/)
#
3. 貼上ajax網址
#
4. XHR start：0 (不支援跨網域)
#
5. XHR start：200 (支援跨網域)
#
-----------------------------------------------
#
## API(Application Programming Interface)
#
* 已經寫好程式語言的應用程式介面 
#
|名稱|說明|
|:---|:---|
|Google Maps|地圖導覽|
|Heroku|主機服務|
|Firebase|資料庫儲存|
#
-----------------------------------------------
#
## XSS(Cross-Site Scripting)
#
* 跨站指令攻擊
#
1. 若有輸入框或動態新增的部分
#
2. 少用\`innerHTML\`語法
#
3. 改用\`createElement\`、\`appendChild\`
#
-----------------------------------------------
#
## Google Analytics追蹤
#
1. 登入[Google Analytics](https://analytics.google.com/analytics)
#
2. 設定完成到\`追蹤資訊\`再到\`追蹤程式碼\`複製代碼，貼到\`<head>\`
#
3. 在根目錄建立\`config.yml\`
#
\`\`\`yml
#Google Analytics
google_analytics:
    tracking_id:\`追蹤程式碼\`
\`\`\`
#
-----------------------------------------------
#
## 假圖生產器
#
* 使用[Lorem Picsum](https://picsum.photos/)
#
* https://picsum.photos/200/300
#
* https://picsum.photos/seed/picsum/200/300
#
* https://picsum.photos/id/237/200/300
#
-----------------------------------------------
#
## 滾動效果
#
1. 使用[aos](https://michalsnik.github.io/aos/)
#
2. 下載aos並解壓
#
3. 將\`<head>\`加入\`<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>\`
#
4. 將\`<body>\`加入\`<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"><script>\`
#
5. 將\`<body>\`加入\`<script>AOS.init()<script>\`
#
\`\`\`html
<div class="box" data-aos="fade-up"></div> <!--效果名稱-->
data-aos="flip-left" 
data-aos-easing="linear" <!--進行曲線-->
data-aos-duration="3000" <!--持續時間1000=1秒-->
data-aos-offset="300" <!--預設120px-->
data-aos-delay="300" <!--延遲時間-->
data-aos-anchor="#example-anchor" <!--預設null-->
data-aos-anchor-placement="center-bottom" <!--當window到元素頂部時-->
data-aos-once="false" <!--動畫不重複-->
\`\`\`
#
-----------------------------------------------
#
## 動態效果
#
1. 使用[animate](https://animate.style/)
#
2. 將\`<head>\`加入\`<link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" rel="stylesheet"/>\`
#
\`\`\`html
<div class="box animated shake"><div>
\`\`\`
#
\`\`\`js
$("button").click(funtion(){
    $(".box").addClass("shank");
})
\`\`\`
#
`,__vite_glob_0_43=Object.freeze(Object.defineProperty({__proto__:null,default:_20220417Web________},Symbol.toStringTag,{value:"Module"})),_20220418PhotoShop_________=`---
title: 【PS】合成兩張不同的臉
date: 2022-04-18
tags: ["photoshop"]
---
#
## 自動混合圖層
#
<!--more-->
#
1. 將兩張臉合成。
#
![圖片](/img/自動混合圖層/自動混合圖層-1.jpg)
#
-----------------------------------------------
#
2. 使用\`套索工具\`將五官框選起來並剪下。
#
![圖片](/img/自動混合圖層/自動混合圖層-2.jpg)
#
-----------------------------------------------
#
3. 貼到另一張臉的圖層上。
#
![圖片](/img/自動混合圖層/自動混合圖層-3.jpg)
#
-----------------------------------------------
#
4. 複製一張底下圖層。
#
![圖片](/img/自動混合圖層/自動混合圖層-4.jpg)
#
-----------------------------------------------
#
5. 框選上方的五官圖層，並使用\`選取\`-\`修改\`-\`縮減\`。
#
![圖片](/img/自動混合圖層/自動混合圖層-5.jpg)
#
-----------------------------------------------
#
6. 縮減值調整約\`10px\`。
#
![圖片](/img/自動混合圖層/自動混合圖層-6.jpg)
#
-----------------------------------------------
#
7. 點選下層複製出來的臉圖層，並剪去範圍。
#
![圖片](/img/自動混合圖層/自動混合圖層-7.jpg)
#
-----------------------------------------------
#
8. 選取兩個圖層，使用\`編輯\`-\`自動混合塗層\`。
#
![圖片](/img/自動混合圖層/自動混合圖層-8.jpg)
#
-----------------------------------------------
#
9. 勾選全景。
#
![圖片](/img/自動混合圖層/自動混合圖層-9.jpg)
#
-----------------------------------------------
#
10. 完成。
#
![圖片](/img/自動混合圖層/自動混合圖層-10.jpg)
#
`,__vite_glob_0_44=Object.freeze(Object.defineProperty({__proto__:null,default:_20220418PhotoShop_________},Symbol.toStringTag,{value:"Module"})),_20220419PhotoShop____________=`---
title: 【PS】將物件融入到不同背景裡
date: 2022-04-19
tags: ["photoshop"]
---
#
## 符合顏色
#
<!--more-->
#
1. 將人物符合背景顏色。
#
![圖片](/img/符合顏色/符合顏色-1.jpg)
#
-----------------------------------------------
#
2. 將人物丟入背景圖層(點陣圖)。
#
![圖片](/img/符合顏色/符合顏色-2.jpg)
#
-----------------------------------------------
#
3. 點選人物圖層使用\`影像\`-\`調整\`-\`符合顏色\`。
#
![圖片](/img/符合顏色/符合顏色-3.jpg)
#
-----------------------------------------------
#
4. 來源選擇此檔案。
#
![圖片](/img/符合顏色/符合顏色-4.jpg)
#
-----------------------------------------------
#
5. 圖層選擇背景。
#
![圖片](/img/符合顏色/符合顏色-5.jpg)
#
-----------------------------------------------
#
6. 調整\`明度\`、\`色彩強度\`、\`淡化\`。
#
![圖片](/img/符合顏色/符合顏色-6.jpg)
#
-----------------------------------------------
#
7. 完成。
#
![圖片](/img/符合顏色/符合顏色-7.jpg)
#`,__vite_glob_0_45=Object.freeze(Object.defineProperty({__proto__:null,default:_20220419PhotoShop____________},Symbol.toStringTag,{value:"Module"})),_20220420PhotoShop_______=`---
title: 【PS】去背玻璃物體
date: 2022-04-20
tags: ["photoshop"]
---
#
## 去背玻璃物體
#
<!--more-->
#
1. 將圖檔丟入PS，並複製一個圖層
#
![圖片](/img/PS去背玻璃物體/PS去背玻璃物體-1.png)
#
-----------------------------------------------
#
2. 分別將不透明物體、透明物體去背
#
![圖片](/img/PS去背玻璃物體/PS去背玻璃物體-2.png)
#
-----------------------------------------------
#
3. 進入到色版，選擇紅、綠、藍色版中白色最亮的圖層進行複製
#
![圖片](/img/PS去背玻璃物體/PS去背玻璃物體-3.png)
#
-----------------------------------------------
#
4. 在新增的藍拷貝圖層使用\`影像\`-\`調整\`-\`色階\`
#
![圖片](/img/PS去背玻璃物體/PS去背玻璃物體-4.png)
#
-----------------------------------------------
#
5. 使用黑色滴管去吸取圖上的灰色(讓白色區域更明顯)
#
![圖片](/img/PS去背玻璃物體/PS去背玻璃物體-5.png)
#
-----------------------------------------------
#
6. 也可拖拉數值進行微調，完成後按確定
#
![圖片](/img/PS去背玻璃物體/PS去背玻璃物體-6.png)
#
-----------------------------------------------
#
7. 選取範圍(對圖示command+左鍵)
#
![圖片](/img/PS去背玻璃物體/PS去背玻璃物體-7.png)
#
-----------------------------------------------
#
8. 回到圖層，另新增空白圖層，並填入白色
#
![圖片](/img/PS去背玻璃物體/PS去背玻璃物體-8.png)
#
-----------------------------------------------
#
9. 在回到色版，同樣將藍圖層進行複製
#
![圖片](/img/PS去背玻璃物體/PS去背玻璃物體-9.png)
#
-----------------------------------------------
#
10. 同樣使用色階，這次用白色滴管去吸取灰色(讓黑色區域更明顯)
#
![圖片](/img/PS去背玻璃物體/PS去背玻璃物體-10.png)
#
-----------------------------------------------
#
11. 選取範圍(對圖示command+左鍵)，再反轉選取範圍(因為選取的範圍是白色)
#
![圖片](/img/PS去背玻璃物體/PS去背玻璃物體-11.png)
#
-----------------------------------------------
#
12. 回到圖層，另新增空白圖層，並填入黑色
#
![圖片](/img/PS去背玻璃物體/PS去背玻璃物體-12.png)
#
-----------------------------------------------
#
13. 若黑色太深可調整不透明度
#
![圖片](/img/PS去背玻璃物體/PS去背玻璃物體-13.png)
#
-----------------------------------------------
#
14. 在白色圖層適度還原玻璃的反射效果
#
![圖片](/img/PS去背玻璃物體/PS去背玻璃物體-14.png)
#
`,__vite_glob_0_46=Object.freeze(Object.defineProperty({__proto__:null,default:_20220420PhotoShop_______},Symbol.toStringTag,{value:"Module"})),_20220421PhotoShop__________=`---
title: 【PS】如何把色版調整回來
date: 2022-04-21
tags: ["photoshop"]
---
#
## 調整PS色版
#
<!--more-->
#
1. 打開PS色版，卻發現變成紅綠藍三種顏色。
#
![圖片](/img/如何把色版調整回來/如何把色版調整回來-1.png)
#
-----------------------------------------------
#
2. 對色版右鍵，選擇介面選項。
#
![圖片](/img/如何把色版調整回來/如何把色版調整回來-2.png)
#
-----------------------------------------------
#
3. 跳出偏好設定介面，將底下選項中的\`用色彩顯示色版\`取消勾選
#
![圖片](/img/如何把色版調整回來/如何把色版調整回來-3.png)
#
-----------------------------------------------
#
4. 取消勾選後，色版恢復原本設定。
#
![圖片](/img/如何把色版調整回來/如何把色版調整回來-4.png)
#`,__vite_glob_0_47=Object.freeze(Object.defineProperty({__proto__:null,default:_20220421PhotoShop__________},Symbol.toStringTag,{value:"Module"})),_20220422PhotoShopPS_______=`---
title: 【PS】混合圖層的應用
date: 2022-04-22
tags: ["photoshop"]
---
#
## PS混合圖層效果
#
<!--more-->
#
|模式|分類|應用|其他|
|---|---|---|---|
|變暗|去白留黑|-|-|
|色彩增值|去白留黑|疊加暗部|白底黑字簽名檔|
|加深顏色|去白留黑|增加對比|-|
|線性加深|去白留黑|減少對比|-|
|顏色變暗|去白留黑|-|-|
|變亮|去黑留白|-|-|
|濾色|去黑留白|疊加亮部|黑底雪花、燈光|
|加亮顏色|去黑留白|減少對比|-|
|線性加亮(增加)|去黑留白|增加對比|-|
|顏色變亮|去黑留白|-|-|
|覆蓋|去灰留黑白|疊加增加對比|聚光燈|
|柔光|去灰留黑白|微弱增加對比|柔和聚光燈|
|實光|去灰留黑白|強烈增加飽和|刺眼聚光燈|
|強烈光源|去灰留黑白|深灰減少對比，淺灰增加對比|-|
|線性光源|去灰留黑白|深灰減少暗度，淺灰增加亮度|-|
|小光源|去灰留黑白|-|-|
|實色疊印混合|去灰留黑白|數值不是0就是255|-|
|差異化|負片效果|RGB數值相減|-|
|排除|負片效果|-|-|
|減去|負片效果|-|-|
|分割|負片效果|-|-|
#
<!--more-->
1. 變暗
#
![圖片](/img/PS混合圖層的應用/PS混合圖層的應用-1.png)
#
-----------------------------------------------
#
2. 色彩增值：去白留黑(黑色疊加)
#
![圖片](/img/PS混合圖層的應用/PS混合圖層的應用-2.png)
#
-----------------------------------------------
#
3. 加深顏色
![圖片](/img/PS混合圖層的應用/PS混合圖層的應用-3.png)
#
-----------------------------------------------
#
4. 線性加深
#
![圖片](/img/PS混合圖層的應用/PS混合圖層的應用-4.png)
#
-----------------------------------------------
#
5. 顏色變暗
#
![圖片](/img/PS混合圖層的應用/PS混合圖層的應用-5.png)
#
-----------------------------------------------
#
6. 變亮
#
![圖片](/img/PS混合圖層的應用/PS混合圖層的應用-6.png)
#
-----------------------------------------------
#
7. 濾色：去黑留白
#
![圖片](/img/PS混合圖層的應用/PS混合圖層的應用-7.png)
#
-----------------------------------------------
#
8. 加亮顏色
#
![圖片](/img/PS混合圖層的應用/PS混合圖層的應用-8.png)
#
-----------------------------------------------
#
9. 線性加亮(增亮)
#
![圖片](/img/PS混合圖層的應用/PS混合圖層的應用-9.png)
#
-----------------------------------------------
#
10. 顏色變亮
#
![圖片](/img/PS混合圖層的應用/PS混合圖層的應用-10.png)
#
-----------------------------------------------
#
11. 覆蓋
#
![圖片](/img/PS混合圖層的應用/PS混合圖層的應用-11.png)
#
-----------------------------------------------
#
12. 柔光
#
![圖片](/img/PS混合圖層的應用/PS混合圖層的應用-12.png)
#
-----------------------------------------------
#
13. 實光：去中間灰，留黑留白
#
![圖片](/img/PS混合圖層的應用/PS混合圖層的應用-13.png)
#
-----------------------------------------------
#
14. 強烈光源
#
![圖片](/img/PS混合圖層的應用/PS混合圖層的應用-14.png)
#
-----------------------------------------------
#
15. 線性光源
#
![圖片](/img/PS混合圖層的應用/PS混合圖層的應用-15.png)
#
-----------------------------------------------
#
16. 小光源
#
![圖片](/img/PS混合圖層的應用/PS混合圖層的應用-16.png)
#
-----------------------------------------------
#
17. 實色疊印混合
#
![圖片](/img/PS混合圖層的應用/PS混合圖層的應用-17.png)
#
-----------------------------------------------
#
18. 差異化
#
![圖片](/img/PS混合圖層的應用/PS混合圖層的應用-18.png)
#
-----------------------------------------------
#
19. 排除
#
![圖片](/img/PS混合圖層的應用/PS混合圖層的應用-19.png)
#
-----------------------------------------------
#
20. 減去
#
![圖片](/img/PS混合圖層的應用/PS混合圖層的應用-20.png)
#
-----------------------------------------------
#
21. 分割
#
![圖片](/img/PS混合圖層的應用/PS混合圖層的應用-21.png)
#`,__vite_glob_0_48=Object.freeze(Object.defineProperty({__proto__:null,default:_20220422PhotoShopPS_______},Symbol.toStringTag,{value:"Module"})),_20220608Mac___MAC_______=`---
title: 【Mac】解決MAC無法存取隨身碟
date: 2022-06-08
tags: ["mac"]
---
#
## 解決MAC無法存取隨身碟
#
<!--more-->
#
1. 插入隨身碟，電腦讀取得到，卻無法將檔案拉進去？
#
![圖片](/img/解決無法存取隨身碟/解決無法存取隨身碟-1.jpg)
#
-----------------------------------------------
#
2. 打開\`啟動台\`。
#
![圖片](/img/解決無法存取隨身碟/解決無法存取隨身碟-2.jpg)
#
-----------------------------------------------
#
3. 選擇\`磁碟工具程式\`。
#
![圖片](/img/解決無法存取隨身碟/解決無法存取隨身碟-3.jpg)
#
-----------------------------------------------
#
4. 此時外接硬碟的格式可能會是(NTFS)。
#
![圖片](/img/解決無法存取隨身碟/解決無法存取隨身碟-4.jpg)
#
-----------------------------------------------
#
5. 點選右上角\`清除\`。
#
![圖片](/img/解決無法存取隨身碟/解決無法存取隨身碟-5.jpg)
#
-----------------------------------------------
#
6. 輸入磁碟名稱(自訂)，並選擇格式。
* 32G以上請選擇\`ExFAT\`。
* 32G以下請選擇\`MS-DOS(FAT)\`。
# 
![圖片](/img/解決無法存取隨身碟/解決無法存取隨身碟-6.jpg)
#
-----------------------------------------------
#
7. 按\`清除\`。\`【注意：格式化前請先將檔案進行備份】\`
#
![圖片](/img/解決無法存取隨身碟/解決無法存取隨身碟-7.jpg)
#
-----------------------------------------------
#
7. 完成後，會看到磁碟格式變成(FAT32)即完成。
#
![圖片](/img/解決無法存取隨身碟/解決無法存取隨身碟-8.jpg)
#`,__vite_glob_0_49=Object.freeze(Object.defineProperty({__proto__:null,default:_20220608Mac___MAC_______},Symbol.toStringTag,{value:"Module"})),_20230217Mac_____MAC___='---\ntitle: 【Mac】靈活運用MAC快捷鍵\ndate: 2023-02-17\ntags: ["mac"]\n---\n#\n## 關於mac輸入法\n#\n<!--more-->\n#\n1. 在英文輸入法只能打出`半形`\n    * 按`fn` 切換中文\n    * 短按`中/英` 切換中文\n    * 長按`中/英` 切換大寫\n2. 中文模式只能打出`全形`(英文、數字、標點符號)\n    * `shift`＋`英文` 全形數字\n    * `option`＋`數字` 全形數字\n    * `control`＋`符號鍵` 全形符號\n#\n-----------------------------------------------\n#\n## 電腦一般操作\n#\n<!--more-->\n|指令|作用|\n|---|---|\n|`control`＋`左鍵`|滑鼠右鍵|\n|`option`＋`shift`＋`F1`|微減少亮度|\n|`option`＋`shift`＋`F2`|微增大亮度|\n|`option`＋`shift`＋`F11`|微減少音量|\n|`option`＋`shift`＋`F12`|微增大音量|\n|`command`＋`空白鍵`|搜尋(spotlight)|\n|`option`＋`點擊視窗放大` |視窗放大(保留Dock)|\n|`游標選取文字`＋`control`＋`command`＋`D`|翻譯辭典|\n|`control`＋`command`＋`Q`|使用者登出|\n|`command`＋`shift`＋`3`|擷取當前螢幕畫面|\n|`command`＋`shift`＋`4`|框選擷取畫面|\n|`command`＋`shift`＋`5`|框選錄製畫面|\n|`control`＋`上`|打開指揮中心(三指上滑觸控)|\n#\n-----------------------------------------------\n#\n## 使用瀏覽器時\n#\n|指令|作用|\n|---|---|\n|`command`＋`T`|新增分頁|\n|`command`＋`N`|另開新分頁|\n|`command`＋`shift`＋`N`|另開無痕分頁|\n|`command`＋`W`|關閉分頁|\n|`control`＋`tab`|切換分頁(往右)|\n|`command`＋`shift`＋`]`|切換分頁(往右)|\n|`command`＋`shift`＋`[`|切換分頁(往左)|\n|`command`＋`數字鍵`|切換分頁(第幾個)|\n|`command`＋`9`|切換分頁(最後一個)|\n|`command`＋`tab`|切換視窗|\n|`command`＋`+`|放大文字|\n|`command`＋`-`|縮小文字|\n|`command`＋`0`|回到100%|\n|`command`＋`F`|快速尋找|\n#\n-----------------------------------------------\n#\n### 使用finder時\n#\n|指令|作用|\n|---|---|\n|`點檔案`＋`command`＋`C`再到空白處`command`＋`V`|複製檔案|\n|`點檔案`＋`command`＋`C`再到空白處`command`＋`option`＋`V`|移動檔案|\n|`點檔案`＋`command`＋`倒退鍵`|刪除檔案|\n|`點檔案`＋`command`＋`Ｉ`|查看檔案資訊|\n|`點檔案`＋`command`＋`option`＋`Ｉ`|開啟固定查看檔案資訊窗口|\n|`點檔案`＋`右鍵`＋`option`＋`每次都使用此應用程式來打開`|更改預設開啟應用程式|\n|`按住option`＋`點資料夾前方小箭頭`|展開所有內容資料夾|\n|`command`＋`shift`＋`倒退鍵`|清空垃圾桶|\n#\n-----------------------------------------------\n#\n## 使用應用程式時\n#\n|指令|作用|\n|---|---|\n|`command`＋`Q`|關閉程式|\n|`command`＋`W`|關閉目前程式|\n|`command`＋`M`|縮小程式|\n|`command`＋`N`|新建視窗|\n|`command`＋`O`|開啟舊檔|\n|`command`＋`~`|切換視窗|\n|`command`＋`tab`|切換程式(往右)|\n|`command`＋`shift`＋`tab`|切換程式(往左)|\n|`command`+`option`+`esc`|跳出強制結束應用程式視窗|\n#\n-----------------------------------------------\n#\n## 在編輯文件時\n#\n|指令|作用|\n|---|---|\n|`command`＋`A`|全選|\n|`command`＋`C`|複製|\n|`command`＋`X`|剪下|\n|`command`＋`V`|貼上|\n|`command`＋`S`|儲存|\n|`command`＋`Z`|復原|\n|`command`＋`shift`＋`Z`|返回|\n|`option`＋`shift`＋`B`|插入符號|\n|`control`＋`command`＋`空白鍵`|插入表情符號|\n|`Fn`＋`倒退鍵`|刪除游標右側文字|\n|`游標點選位置`＋`按著shift`＋`方向鍵`|選取文字範圍|\n#',__vite_glob_0_50=Object.freeze(Object.defineProperty({__proto__:null,default:_20230217Mac_____MAC___},Symbol.toStringTag,{value:"Module"})),_20230218Design__________=`---
title: 【Design】印刷與板材加工知識
date: 2023-02-18
tags: ["design"]
---
#
## 關於印刷注意事項
#
<!--more-->
#
1. 開版印刷(印刷廠)
    * 獨立版印刷、凸版印刷(色差小、價格貴)
    * 合版印刷(色差大、價格便宜) ex.健豪、藍格
2. 數位印刷(超商、印表機)
#
* 中文字體>8pt、英文字體>6pt、筆畫線條>0.25pt
* 交稿時需注意一般印刷廠軟體版本較舊
* 完稿後將文字和線條轉外框、圖檔連結
* AI對稿色票【視窗】→【色票資料庫】→【色表】
    * →【PANTONE+Solid Coated】(亮面紙張)
    * →【PANTONE+Solid Uncoated】(霧面紙張)
* 紙張放數：紙張印刷造成的損耗抓5%
#
-----------------------------------------------
#
## 一般印刷紙材
#
|紙張|材質|防水|外觀|特性|應用|
|---|---|:---:|---|---|---|
|珠光紙|塑膠|Ｏ|珍珠光澤質感|不易吸墨、飽和度佳|標籤貼|
|合成紙|塑膠|Ｏ|霧面質感|成本較低、耐高低溫、飽和度佳|生鮮食品、美妝貼紙|
|炫光紙|紙張|Ｘ|金屬光澤質感|有分平滑、肌理紋路|高級印刷、特殊作品|
|安格紙|紙張|Ｘ|方格壓紋|易吸墨|雅痞風格印刷|
|象牙卡|紙張|Ｘ|平滑、紙張纖維質感|易吸墨、不反光、色澤沉穩|柔和細緻印刷、插畫作品、吊卡|
|萊妮紙|紙張|Ｘ|十字壓紋|易吸墨、噴印較深|典雅風格印刷、插畫作品|
|一級卡|紙張|Ｘ|米黃色、平滑有光澤|不易吸墨、成本較低|包裝盒、明信片|
|銅版紙|紙張|Ｘ|平滑、紙張纖維質感|會反光、成本較低、飽和度佳|標籤貼紙、小張輸出|
|模造紙|紙張|Ｘ|表面粗糙、像圖畫紙|易吸墨、不易暈開、飽和度差|環保產品包裝、復古質感|
|牛皮紙|紙張|Ｘ|黃褐色|易吸墨|書寫或蓋章、復古質感印刷|
|條紋紙|紙張|Ｘ|褐色|易吸墨|書寫或蓋章、復古質感印刷|
|透明貼紙|塑膠|Ｏ|完全透明|耐磨抗刮、不易破|產品LOGO、透明瓶器|
#
* 頂級象牙卡適合打凸或打凹
    * 頂級和一般差別在於厚度
    * 噴印黑色會呈黑灰色
* 一級卡有分一級卡(薄)、頂級卡(中)、瑞典一級卡(厚)
    * 瑞典一級卡可來製作包裝
* 銅版紙又分特銅、雪銅、銅西
    * 特銅：光澤度較高、更平滑(傳單、書籍、海報、月曆)
    * 雪銅：霧光效果、不反光、不易穿透(明信片、喜帖、邀請卡)
    * 銅西：西卡紙上塗料，紙張粗、硬度高(書籍封面、卡片、書籤、型錄)
    * 單銅、雙銅則是在單面或雙面上塗料
    * 成本最低，適用於
#
-----------------------------------------------
#
## 後加工處理
#
|加工|處理|
|---|---|
|上亮膜|表面光滑，會反光|
|上霧膜|提升質感，不會反光|
|局部上光|讓重點部分微微凸起、更鮮艷、更光亮\`建議字體大於9pt、線條大於0.75pt\`|
|絲絨加工|頂級卡＋後加工處理，表面絲絨質感、更滑順|
|燙金|需開版，字級、線條不可太細小|
|軋型|對紙張進行裁型，刀模線離邊距至少5mm，刀版：裁切線／線版：折線|
#
-----------------------------------------------
#
## 大圖輸出紙材
#
|紙張|外觀|特性|應用|
|---|---|---|---|
|海報紙|多種|不易破、吸墨性佳、飽和度差|印刷打樣、短期室內海報|
|PP相紙|米黃|又稱合成紙、飽和度佳|長期海報、年曆、裱框畫、店面橫幅布條|
|PVC|白色|具延展性不易殘膠、防水、耐候性質|玻璃貼、人形立牌、電梯門、廣告看板、壁面輸出|
#
* 大圖輸出機不適合噴印紋路材質紙張
* 通常輸出寬度介於120~150公分
* 建議圖檔至少要300dpi以上
* 水性墨適合室內；油性墨適合室外
* 上亮膜或霧膜後可增加防水性，但顏色會變深
* PP相紙和PVC有分背膠或無背膠
    * PVC又細分高遮蔽、灰膠、半透、全透
#
-----------------------------------------------
#
## 大圖輸出板材
#
|紙張|材質|防水|特性|應用|
|---|---|:---:|---|---|
|合成板|珍珠板兩面貼合PVC|Ｏ|內芯較軟易變形、美工刀可裁切|人形立牌、POP、吊掛圖|
|豪卡板|珍珠板兩面貼合銅西卡|Ｘ|不易起泡、質量輕、內芯厚實|立牌與展場背板|
|發泡板|聚苯乙烯製成|Ｏ|表面光滑不退色、硬度較高、不易變形|室外大圖輸出看板、陳列架|
|PP瓦楞板|碳氫化合物熱熔壓製成|Ｏ|質量輕、抗壓力耐撞擊、耐高低溫|廣告看板、交通標示牌|
#
-----------------------------------------------
#
## 才數計算
#
#### 【長cm】×【寬cm】÷ \`900\` = 才數
\`\`\`
範例：150 x 420 ÷ 900 = 70
\`\`\`
#
#### 1才多少錢？ 價錢 ÷ 才數 = 1才價錢
\`\`\`
範例：1400 ÷ 70 = 20
\`\`\`
#
\`30cm × 30cm = 1才\`
#
-----------------------------------------------
#
## 才數價格參考
#
|材質|1才價錢(30x30cm)|
|---|---|
|油性帆布|11.9~13.3元|
|PP相紙(合成紙)|25元|
|PVC貼紙|20~25元|
|PVC貼紙(割型)|30元|
|全透-PVC貼紙|60~70元|
|5mm合成板|35元|
|5mm合成板(割型)|40元|
|5mm豪卡板(單面)|35元|
|5mm豪卡板(割型)|40元|
|5mm豪卡板(雙面)|40元|
|1cm豪卡板(割型)|50元|
|1cm珍珠板雙面(割型)|60元|
|2cm珍珠板雙面(割型)|80元|
|卡點割字|30~35元|
|珍珠畫布|40元|
|1MM發泡板|45元|
|帆布施工費|5元|
|貼圖施工費|15元|

17公分紙腳架-20元/個
\`各家印刷廠品質不同，以上價格僅供參考(2018~2020)\`
#
`,__vite_glob_0_51=Object.freeze(Object.defineProperty({__proto__:null,default:_20230218Design__________},Symbol.toStringTag,{value:"Module"})),_20230310Web_________=`---
title: 【Web】網站架設基本概念
date: 2023-03-10
tags: ["web"]
---
#
## 架設網站概念
#
<!--more-->
#
1. 網址(地址)
2. 網站(房子)
3. 主機(土地)
#
-----------------------------------------------
#
## 主機種類
#
1. 實體主機(獨棟別墅)
2. 虛擬主機
    * 共享主機(分租雅房)
    * VPS主機(單層公寓)
#
-----------------------------------------------
#
## 虛擬主機
#
1. 共享主機(Shared Hosting)
    * 價格低、速度不穩定(容易受到其他人影響)
    * 通常搭配cPanel管理介面
    * 會有CloudLinux系統來限制流量
    * 無法安裝後端框架
    * 例如：Godaddy、bluehost、A2 Hosting
#     
2. VPS主機(Virtual Private Server)
    * 有獨立CPU、RAM
    * 價格較高、速度快
    * 安裝的是linux、window service
    * 安裝node、laravel模組
    * 有獨立IP不需要綁定網址
    * 例如：Linode、DigitalOcean、GoogleCloudPlafform
#
3. cloudways雲端管理主機(Managed cloud hosting)
    * 整合VPS主機的一套平台
        * DigitalOcean
        * linode
        * VULTR
        * aws
        * Google Cloud Platform
    * 採用流量計費方式
#
-----------------------------------------------
#
## HTTP超文本傳輸協定(HyperText Transfer Protocol)
#
* 客戶端與伺服器傳輸方式
* 用來傳輸HTML的頁面及內容
* 增加SSL安全憑證為HTTPS
* Chrome、Safari、Firefox、Edge為應用程式
#
-----------------------------------------------
#
## FTP文件傳輸協議(File Transfer Protocol)
#
* 客戶端與遠端主機傳輸文件方式
* 用來控制文件的雙向傳輸
* SSL安全的加密為SFTP
* Filezilla、WinSCP為應用程式
#
-----------------------------------------------
#
## 信件收發協定IMAP/SMTP/POP3
#
* 收信協定
    * POP3單向郵局協定第三版(Post Office Protocol Version3)
    * IMAP互動郵件存取協定(Internet Message Access Protocol)
* 發信協定
    * SMTP簡單郵件傳輸協定(Simple Mail Transfer Protocol)
#
-----------------------------------------------
* WS/WSS 長連接專屬傳輸協定
* SSL 傳輸層安全性協定
* SSH 加密的連接通訊協定伺服器金鑰
* RTSP/RTMP 串流
* DNS(Domain Name System)網域名稱系統，將網域與主機IP位置串連起來


`,__vite_glob_0_52=Object.freeze(Object.defineProperty({__proto__:null,default:_20230310Web_________},Symbol.toStringTag,{value:"Module"})),_20230401Hugo___GitHub____=`---
title: 【Hugo】認識GitHub版本控制
date: 2023-04-01
tags: ["hugo"]
---
#
## 什麼是GitHub
#
<!--more-->
#
* GitHub是透過git進行版本控制的程式碼放置平台
    * Git版本控制
    * Hub集中放置
    * Commit存擋點(每一次存擋都會產生)
* Github Pages將html程式碼轉換成網頁
* Github Desktop將程式碼上傳到Github的應用程式
* 軟體開發種類
    * 中央式系統(一次一個開發者)
        * Subversion
        * CVS
    * 分散式系統(同時多位開發者)
        * Git
        * BitKeeper
        * Mercurial
#
-----------------------------------------------
#
## 創建GitHub
#
1. 先到[GitHub](https://github.com/)官網創建帳號
    * Username等於帳號名稱(https://帳號名稱.github.io/)
#
2. 下載[Github Desktop](https://desktop.github.com/)並登入帳號
#
3. 在Github上創建Repository(資料夾)並Clone(複製)到本地端
    * 使用Push指令(上傳Github)
    * 使用Pull指令(將Github更新本地端)
#
-----------------------------------------------
#
4. 登入GitHub按左上角＋符號，點擊New repository
#
![圖片](/img/在Github創建第一份資料/在Github創建第一份資料-1.png)
#
-----------------------------------------------
#
5. 輸入資料夾名稱(Repository name)、描述(Description)
#
![圖片](/img/在Github創建第一份資料/在Github創建第一份資料-2.png)
#
-----------------------------------------------
#
6. 點選Set up in Desktop自動開啟Github Desktop
#
![圖片](/img/在Github創建第一份資料/在Github創建第一份資料-3.png)
#
-----------------------------------------------
#
7. 確認路徑位置，點擊Clone複製到本地端上
#
![圖片](/img/在Github創建第一份資料/在Github創建第一份資料-4.png)
#
-----------------------------------------------
#
8. 接著本地端資料夾就會與Github Desktop上的資料同步
#
![圖片](/img/在Github創建第一份資料/在Github創建第一份資料-5.png)
#
-----------------------------------------------
#
9. 試著在本地端上建立一個文字檔
#
![圖片](/img/在Github創建第一份資料/在Github創建第一份資料-6.png)
#
-----------------------------------------------
#
10. 輸入存檔點名稱(Summary)、描述(Description)，點擊Commit to main
#
![圖片](/img/在Github創建第一份資料/在Github創建第一份資料-7.png)
#
-----------------------------------------------
#
11. 點右上角Publish branch進行上傳
#
![圖片](/img/在Github創建第一份資料/在Github創建第一份資料-8.png)
#
-----------------------------------------------
#
12. Fetch origin表示上傳完成
#
![圖片](/img/在Github創建第一份資料/在Github創建第一份資料-9.png)
#
-----------------------------------------------
#
13. 接著回到Github上即可看到上傳的文字檔
#
![圖片](/img/在Github創建第一份資料/在Github創建第一份資料-10.png)
#`,__vite_glob_0_53=Object.freeze(Object.defineProperty({__proto__:null,default:_20230401Hugo___GitHub____},Symbol.toStringTag,{value:"Module"})),_20230402Hugo_____Hugo___=`---
title: 【Hugo】快速建立Hugo部落格
date: 2023-04-02
tags: ["hugo"]
---
#
## 首先需要先安裝Homebrew
#
<!--more-->
#
1. 按command+空白鍵打開搜尋，輸入terminal打開終端機
#
![圖片](/img/安裝並運行Hugo套件/安裝並運行Hugo套件-1.png)
#
-----------------------------------------------
#
2. 到[Homebrew](https://brew.sh/index_zh-tw)頁面複製指令($符號不用)
\`\`\`
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
\`\`\`
#
![圖片](/img/安裝並運行Hugo套件/安裝並運行Hugo套件-2.png)
#
-----------------------------------------------
#
3. 將指令貼到終端機上，按enter
#
![圖片](/img/安裝並運行Hugo套件/安裝並運行Hugo套件-3.png)
#
-----------------------------------------------
#
4. 接著\`盲打\`mac密碼，按enter
#
![圖片](/img/安裝並運行Hugo套件/安裝並運行Hugo套件-4.png)
#
-----------------------------------------------
#
5. 按enter繼續執行
#
![圖片](/img/安裝並運行Hugo套件/安裝並運行Hugo套件-5.png)
#
-----------------------------------------------
#
6. 出現Installation successful!表示安裝成功
#
![圖片](/img/安裝並運行Hugo套件/安裝並運行Hugo套件-6.png)
#
\`若要刪除套件在安裝指令後方將install加上un即可\`
\`\`\`
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/uninstall.sh)"
\`\`\`
#
-----------------------------------------------
#
## 安裝Hugo
#
1. 到[Hugo](https://gohugo.io/)頁面複製指令($符號不用)
\`\`\`
brew install hugo
\`\`\`
#
![圖片](/img/安裝並運行Hugo套件/安裝並運行Hugo套件-7.png)
#
-----------------------------------------------
#
2. 將指令貼到終端機上，按enter
#
![圖片](/img/安裝並運行Hugo套件/安裝並運行Hugo套件-8.png)
#
-----------------------------------------------
#
3. 安裝成功
#
![圖片](/img/安裝並運行Hugo套件/安裝並運行Hugo套件-9.png)
#
-----------------------------------------------
#
## 下載主題並運行Hugo
#
1. 到[Hugo Themes](https://themes.gohugo.io/)挑選自己喜歡的主題(示範Stack)
#
![圖片](/img/安裝並運行Hugo套件/安裝並運行Hugo套件-10.png)
#
-----------------------------------------------
#
2. 點選Download進入下載頁面
#
![圖片](/img/安裝並運行Hugo套件/安裝並運行Hugo套件-11.png)
#
-----------------------------------------------
#
3. 按Code再選Download ZIP下載主題
#
![圖片](/img/安裝並運行Hugo套件/安裝並運行Hugo套件-12.png)
#
-----------------------------------------------
#
4. 下載後將主題壓縮打開
#
![圖片](/img/安裝並運行Hugo套件/安裝並運行Hugo套件-13.png)
#
-----------------------------------------------
#
5. exampleSite資料夾拉出
#
![圖片](/img/安裝並運行Hugo套件/安裝並運行Hugo套件-14.png)
#
-----------------------------------------------
#
6. 並在裡面建立\`themes\`資料夾
#
![圖片](/img/安裝並運行Hugo套件/安裝並運行Hugo套件-15.png)
#
-----------------------------------------------
#
7. 再把hugo-theme-stack-master放進themes
#
![圖片](/img/安裝並運行Hugo套件/安裝並運行Hugo套件-16.png)
#
-----------------------------------------------
#
8. 把hugo-theme-stack-master的master刪除
#
![圖片](/img/安裝並運行Hugo套件/安裝並運行Hugo套件-17.png)
#
-----------------------------------------------
#
9. 對exampleSite資料夾右鍵選擇終端機
#
![圖片](/img/安裝並運行Hugo套件/安裝並運行Hugo套件-18.png)
#
-----------------------------------------------
#
10. 輸入\`hugo server\`後按enter執行
#
![圖片](/img/安裝並運行Hugo套件/安裝並運行Hugo套件-19.png)
#
-----------------------------------------------
#
11. 複製http://localhost:52622/貼到瀏覽器上
#
![圖片](/img/安裝並運行Hugo套件/安裝並運行Hugo套件-20.png)
#
-----------------------------------------------
#
12. 按enter後即可看到網站成功運行
#
![圖片](/img/安裝並運行Hugo套件/安裝並運行Hugo套件-21.png)
#
-----------------------------------------------
#
13. 若要關閉可按ctrl+C或直接關閉終端機
#
![圖片](/img/安裝並運行Hugo套件/安裝並運行Hugo套件-22.png)
#
-----------------------------------------------
#
## window運行Hugo方式
#
1. 先到[gohugoio](https://github.com/gohugoio/hugo/releases)下載最新版本應用程式
#
2. 下載後解壓縮並開啟，將\`hugo.exe\`放進exampleSite資料夾裡
#
3. 接著將該資料夾路徑刪除，並輸入cmd開啟終端機
#
4. 接著輸入\`hugo server\`後按enter執行
#
5. 將運行成功網址，貼到瀏覽器即可看到網站成功運行
#

`,__vite_glob_0_54=Object.freeze(Object.defineProperty({__proto__:null,default:_20230402Hugo_____Hugo___},Symbol.toStringTag,{value:"Module"})),_20230403Hugo________GitHub=`---
title: 【Hugo】將部落格上傳到GitHub
date: 2023-04-03
tags: ["hugo"]
---
#
## 首先需要先安裝VScode
#
<!--more-->
#
1. 先到[VScode](https://code.visualstudio.com/)頁面下載應用程式，安裝並開啟
#
![圖片](/img/使用VScode編輯並發佈到網站/使用VScode編輯並發佈到網站-1.png)
#
-----------------------------------------------
#
2. 安裝Chinese Language插件，讓介面變繁體中文
#
![圖片](/img/使用VScode編輯並發佈到網站/使用VScode編輯並發佈到網站-2.png)
#
-----------------------------------------------
#
3. 安裝Better TOML插件，讓code有顏色區別
#
![圖片](/img/使用VScode編輯並發佈到網站/使用VScode編輯並發佈到網站-3.png)
#
-----------------------------------------------
#
4. 若想修改VScode介面顏色，進入色彩佈景主題
#
![圖片](/img/使用VScode編輯並發佈到網站/使用VScode編輯並發佈到網站-4.png)
#
-----------------------------------------------
#
5. 出現選單視窗，並挑選適合主題
#
![圖片](/img/使用VScode編輯並發佈到網站/使用VScode編輯並發佈到網站-5.png)
#
-----------------------------------------------
#
6. 若想修改文字顯示大小，進入設定
#
![圖片](/img/使用VScode編輯並發佈到網站/使用VScode編輯並發佈到網站-6.png)
#
-----------------------------------------------
#
7. 在Font Size輸入文字大小
#
![圖片](/img/使用VScode編輯並發佈到網站/使用VScode編輯並發佈到網站-7.png)
#
-----------------------------------------------
#
## 設置基本Hugo參數
#
1. 開啟資料夾，點選config.toml檔，編輯參數值
#
![圖片](/img/使用VScode編輯並發佈到網站/使用VScode編輯並發佈到網站-8.png)
#
-----------------------------------------------
#
2. 更改頁籤圖示，製作圖檔命名favicon.png，放置到img資料夾裡面
#
![圖片](/img/使用VScode編輯並發佈到網站/使用VScode編輯並發佈到網站-9.png)
#
-----------------------------------------------
#
3. 關閉chrome重新開啟，即可看到設置成功
#
![圖片](/img/使用VScode編輯並發佈到網站/使用VScode編輯並發佈到網站-10.png)
#
-----------------------------------------------
#
## 上傳到Github Pages
#
1. 對資料夾按右鍵，打開終端機
#
![圖片](/img/使用VScode編輯並發佈到網站/使用VScode編輯並發佈到網站-11.png)
#
-----------------------------------------------
#
2. 輸入\`hugo\`，按enter執行
#
![圖片](/img/使用VScode編輯並發佈到網站/使用VScode編輯並發佈到網站-12.png)
#
-----------------------------------------------
#
3. 會看到資料夾多出\`public\`以及內容資料
#
![圖片](/img/使用VScode編輯並發佈到網站/使用VScode編輯並發佈到網站-13.png)
#
-----------------------------------------------
#
4. 將public的內容資料拉到Github複製的本地端資料夾內
#
![圖片](/img/使用VScode編輯並發佈到網站/使用VScode編輯並發佈到網站-14.png)
#
-----------------------------------------------
#
5. 打開Github Desktop建立commit
#
![圖片](/img/使用VScode編輯並發佈到網站/使用VScode編輯並發佈到網站-15.png)
#
-----------------------------------------------
#
6. 將程式碼Push到Github
#
![圖片](/img/使用VScode編輯並發佈到網站/使用VScode編輯並發佈到網站-16.png)
#
-----------------------------------------------
#
7. 到Github頁面的repository點選該專案，點選Add a README
#
![圖片](/img/使用VScode編輯並發佈到網站/使用VScode編輯並發佈到網站-17.png)
#
-----------------------------------------------
#
8. 再點Commit new file，之後過3~5分鐘後網站即可預覽
#
![圖片](/img/使用VScode編輯並發佈到網站/使用VScode編輯並發佈到網站-18.png)
#
`,__vite_glob_0_55=Object.freeze(Object.defineProperty({__proto__:null,default:_20230403Hugo________GitHub},Symbol.toStringTag,{value:"Module"})),_20230404Hugo___Disqus____=`---
title: 【Hugo】添加Disqus評論功能
date: 2023-04-04
tags: ["hugo"]
---
### 將Hugo添加Disqus評論功能
1. 進入[Disqus](https://blog.disqus.com/)頁面，點擊GET STARTD，登入或註冊
![圖片](/img/添加Disqus評論功能/添加Disqus評論功能-1.png)

-----------------------------------------------
2. 點擊I want to install Disqus on my site
![圖片](/img/添加Disqus評論功能/添加Disqus評論功能-2.png)

-----------------------------------------------
3. 輸入專案名稱，選擇類別，按Create Site
![圖片](/img/添加Disqus評論功能/添加Disqus評論功能-3.png)

-----------------------------------------------
4. 選擇免費版Subscribe Now
![圖片](/img/添加Disqus評論功能/添加Disqus評論功能-4.png)

-----------------------------------------------
5. 選擇平台類型，若無則選擇I don't see my platform listed...
![圖片](/img/添加Disqus評論功能/添加Disqus評論功能-5.png)

-----------------------------------------------
6. Configure
![圖片](/img/添加Disqus評論功能/添加Disqus評論功能-6.png)

-----------------------------------------------
7. 輸入網站網址，下面可選擇顏色、字體樣式，按Next繼續
![圖片](/img/添加Disqus評論功能/添加Disqus評論功能-7.png)

-----------------------------------------------
8. 點擊Complete Setup
![圖片](/img/添加Disqus評論功能/添加Disqus評論功能-8.png)

-----------------------------------------------
9. 點擊Dismiss Setup
![圖片](/img/添加Disqus評論功能/添加Disqus評論功能-9.png)

-----------------------------------------------
10. 點擊右上角Edit Setting
![圖片](/img/添加Disqus評論功能/添加Disqus評論功能-10.png)

-----------------------------------------------
11. 接著會看到shortname，將他複製起來
![圖片](/img/添加Disqus評論功能/添加Disqus評論功能-11.png)

-----------------------------------------------
12. 貼到config.toml(設定檔)裡的disqusShortname(有些Hugo主題不支援)
![圖片](/img/添加Disqus評論功能/添加Disqus評論功能-12.png)

-----------------------------------------------
13. 填好之後更新網站，在點選任一篇文章，滑到底下就會出現評論
![圖片](/img/添加Disqus評論功能/添加Disqus評論功能-13.png)

-----------------------------------------------
14. 點開評論即可開始留言
![圖片](/img/添加Disqus評論功能/添加Disqus評論功能-14.png)`,__vite_glob_0_56=Object.freeze(Object.defineProperty({__proto__:null,default:_20230404Hugo___Disqus____},Symbol.toStringTag,{value:"Module"})),_20230405__eb__GA____GA4=`---
title: 【Web】舊GA升級為新GA4
date: 2023-04-05
tags: ["web"]
---
### 將Google Analytics升級成GA4
1. 登入[Google Analytics](https://analytics.google.com/analytics/web)進入首頁畫面，點擊下方管理
![圖片](/img/舊GA升級為新GA4/舊GA升級為新GA4-1.png)

-----------------------------------------------
2. 接著點擊中間\`建立資源\`
![圖片](/img/舊GA升級為新GA4/舊GA升級為新GA4-2.png)

-----------------------------------------------
3. 進入建立資源頁面，按照指示填入資源名稱(該專案顯示名稱)，按下一步繼續
![圖片](/img/舊GA升級為新GA4/舊GA升級為新GA4-3.png)

-----------------------------------------------
4. 填寫產業類別，商家規模，按下一步繼續
![圖片](/img/舊GA升級為新GA4/舊GA升級為新GA4-4.png)

-----------------------------------------------
5. 選擇業務目標，按建立
![圖片](/img/舊GA升級為新GA4/舊GA升級為新GA4-5.png)

-----------------------------------------------
6. 依照平台選擇
![圖片](/img/舊GA升級為新GA4/舊GA升級為新GA4-6.png)

-----------------------------------------------
7. 輸入網站網址，串流名稱，按建立串流(等待約5秒不動讓頁面自動彈出)
![圖片](/img/舊GA升級為新GA4/舊GA升級為新GA4-7.png)

-----------------------------------------------
8. 接著會出現安裝操作說明頁面，點選手動安裝
![圖片](/img/舊GA升級為新GA4/舊GA升級為新GA4-8.png)

-----------------------------------------------
9. 複製代碼
![圖片](/img/舊GA升級為新GA4/舊GA升級為新GA4-9.png)

-----------------------------------------------
10. 貼到網站的<head></head>裡面，並且將舊GA代碼刪除
![圖片](/img/舊GA升級為新GA4/舊GA升級為新GA4-10.png)

-----------------------------------------------
11. 重新更新網站後，回到[Google Analytics](https://analytics.google.com/analytics/web)首頁顯示該畫面，表示升級成功
![圖片](/img/舊GA升級為新GA4/舊GA升級為新GA4-11.png)`,__vite_glob_0_57=Object.freeze(Object.defineProperty({__proto__:null,default:_20230405__eb__GA____GA4},Symbol.toStringTag,{value:"Module"})),_20230406Hugo__Google_________=`---
title: 【Hugo】讓Google搜尋找到自己的網站
date: 2023-04-06
tags: ["hugo"]
---
### 檢測自己網站是否可被搜尋
1. 手先到google搜尋引擎輸入\`site:自己的網站\`
![圖片](/img/讓Google搜尋找到自己的網站/讓Google搜尋找到自己的網站-1.png)

-----------------------------------------------
2. 按下搜尋後，如果只有顯示請使用Google Search Console，表示自己的網站還未提交給google
![圖片](/img/讓Google搜尋找到自己的網站/讓Google搜尋找到自己的網站-2.png)

-----------------------------------------------
### 提交網站地圖給google
1. 搜尋[Google Search Console](https://search.google.com/search-console/about)進入頁面，點擊立即開始
![圖片](/img/讓Google搜尋找到自己的網站/讓Google搜尋找到自己的網站-3.png)

-----------------------------------------------
2. 選擇右邊網址前置字元，輸入自己的網站，按繼續
![圖片](/img/讓Google搜尋找到自己的網站/讓Google搜尋找到自己的網站-4.png)

-----------------------------------------------
3. 使用hugo會自動產生sitemap.xml將它更新到網站上
    * 或使用[xml-sitemaps](https://www.xml-sitemaps.com/)生產出sitemaps
![圖片](/img/讓Google搜尋找到自己的網站/讓Google搜尋找到自己的網站-5.png)

-----------------------------------------------
4. 回到Google Search Console點選左側sitemap並將後面sitemap.xml打上後，點擊提交
![圖片](/img/讓Google搜尋找到自己的網站/讓Google搜尋找到自己的網站-6.png)

-----------------------------------------------
5. 等待2~3天狀態變為成功，再重新搜索即可找到自己的網頁
![圖片](/img/讓Google搜尋找到自己的網站/讓Google搜尋找到自己的網站-7.png)

-----------------------------------------------
### 重新提交新頁面給google
1. 在Google Search Console上方搜尋欄，輸入想提交的網址
![圖片](/img/讓Google搜尋找到自己的網站/讓Google搜尋找到自己的網站-8.png)

-----------------------------------------------
2. 點選右邊要求建立索引
![圖片](/img/讓Google搜尋找到自己的網站/讓Google搜尋找到自己的網站-9.png)

-----------------------------------------------
3. 等待處理
![圖片](/img/讓Google搜尋找到自己的網站/讓Google搜尋找到自己的網站-10.png)

-----------------------------------------------
4. 出現已要求建立索引，即代表google將安排建立索引
![圖片](/img/讓Google搜尋找到自己的網站/讓Google搜尋找到自己的網站-11.png)`,__vite_glob_0_58=Object.freeze(Object.defineProperty({__proto__:null,default:_20230406Hugo__Google_________},Symbol.toStringTag,{value:"Module"})),_20230407__ebChrome_______=`---
title: 【Web】Chrome隱藏技巧及插件
date: 2023-04-07
tags: ["web"]
---
### 搜尋技巧
1. 打開瀏覽器在搜尋引擎
    * 用引號包覆搜尋字，可搜尋完整字詞
    * \`filetype:pdf\`輸入檔案類型，可以找到特定檔案

-----------------------------------------------
### 尋找網頁的IP位置
1. 右鍵\`檢查\`
2. \`Network\`再點選旁邊\`Name\`下的檔案，再點選旁邊\`Headers\`
3. Request URL：網址(DNS)
4. Remote Address：IP位置

-----------------------------------------------
### Clear Cache清除快取
chrome為了加速瀏覽速度，會自動抓取一些資料，但容易導致更新頁面後看到的還是舊的畫面，使用Clear Cache插件可以清除快取，讓chrome重新抓取最新資料
![圖片](/img/好用的Chrome插件/好用的Chrome插件-1.png)`,__vite_glob_0_59=Object.freeze(Object.defineProperty({__proto__:null,default:_20230407__ebChrome_______},Symbol.toStringTag,{value:"Module"})),_20230408__eb_______FTP___=`---
title: 【Web】登入藍主機的FTP伺服器
date: 2023-04-08
tags: ["web"]
---
### 購買Bluehost主機並登入伺服器
1. 到[FileZilla](https://filezilla-project.org/)官網下載軟體，選擇左邊(傳遞文件用)
![圖片](/img/登入藍主機的FTP伺服器/登入藍主機的FTP伺服器-1.png)

-----------------------------------------------
2. 下載適合的版本
![圖片](/img/登入藍主機的FTP伺服器/登入藍主機的FTP伺服器-2.png)

-----------------------------------------------
3. 點選最左上角圖示
![圖片](/img/登入藍主機的FTP伺服器/登入藍主機的FTP伺服器-3.png)

-----------------------------------------------
4. 點選新增站台，可以給他一個新命名
![圖片](/img/登入藍主機的FTP伺服器/登入藍主機的FTP伺服器-4.png)

-----------------------------------------------
5. 接著進到[Bluehost後台](https://my.bluehost.com/hosting/app#/)，右邊有主機的IP位置
![圖片](/img/登入藍主機的FTP伺服器/登入藍主機的FTP伺服器-5.png)

-----------------------------------------------
6. 點選Advancedy，再點FTP，新增一個登入帳戶，輸入帳號密碼後，點擊建立FTP帳戶
![圖片](/img/登入藍主機的FTP伺服器/登入藍主機的FTP伺服器-6.png)

-----------------------------------------------
7. 之後下方就會出現此帳戶，點擊設定FTP用戶端，可查看登入資訊
![圖片](/img/登入藍主機的FTP伺服器/登入藍主機的FTP伺服器-7.png)

-----------------------------------------------
8. 回到FileZilla將得到的參數對應填入並連線(主機也可填IP位置)
![圖片](/img/登入藍主機的FTP伺服器/登入藍主機的FTP伺服器-8.png)

-----------------------------------------------
9. 上方資訊顯示\`狀態：成功取得\`即代表登入成功
![圖片](/img/登入藍主機的FTP伺服器/登入藍主機的FTP伺服器-9.png)

-----------------------------------------------
10. 之後可以將檔案放到public_html裡，或再建立資料夾
![圖片](/img/登入藍主機的FTP伺服器/登入藍主機的FTP伺服器-10.png)

-----------------------------------------------
11. 到瀏覽器上輸入對應網址可以查看相對應的檔案
![圖片](/img/登入藍主機的FTP伺服器/登入藍主機的FTP伺服器-11.png)
`,__vite_glob_0_60=Object.freeze(Object.defineProperty({__proto__:null,default:_20230408__eb_______FTP___},Symbol.toStringTag,{value:"Module"})),_20230409Design__________=`---
title: 【Design】了解相機的基本操作
date: 2023-04-09
tags: ["design"]
---
### 光圈(Aperture)
* 調整光圈葉片大小，控制從鏡頭進入的光量，如人的瞳孔
* F值=鏡頭的焦距/鏡頭光孔直徑
* 一般手機沒有光圈設定
* 光圈越大數字越小，光圈越小數字越大
* 大光圈容易聚焦，小光圈可全部對焦
* 最佳畫質光圈值：F/2~F/8
|f/|表示|進光量|影響|適用|
|---|---|---|---|---|
|數字小|光圈越大|進光量越多|背景虛化大(景深)|人像、靜態主體|
|數字大|光圈越小|進光量越少|背景虛化小|風景、大合照|

-----------------------------------------------
### 快門(Shutter)
* 快門打開時間長短，控制光進入感光元件的時間長短，如眼睛眨眼速度
* 用慢速快門時容易手震，建議使用腳架避免模糊
* 1"表示1秒，8表示1/8秒，1000表示1/1000秒
* 光源頻率不相同時，會產生閃爍，最低可調成1/30秒
* 拍照安全快門：鏡頭焦段=快門速度
* 拍攝安全快門：幀率X2=快門速度
* 正常值：1/160秒、1/250秒
|調整|表示|進光量|影響|適用|
|---|---|---|---|---|
|慢速快門|快門時間長|進光量越多|容易模糊、有殘影|飄移、流川、車軌|
|高速快門|快門時間短|進光量越少|比較清晰、被凍結|拍攝動物、跑步瞬間|

-----------------------------------------------
### ISO(感光度)
* 調整感光元件的對光的靈敏度，控制亮度與噪點的平衡
* 在光線充足的情況下，建議將數值調低、畫質越好
* 正常值：100~200
|調整|表示|曝光|影響|適用|
|---|---|---|---|---|
|ISO數值高|對光敏感度越高|容易曝光(越亮)|畫面雜訊多|星空|
|ISO數值低|對光敏感度越低|不易曝光(越暗)|畫面雜訊少|-|

-----------------------------------------------
### 白平衡(White Balance)
* 決定相機成像偏冷或偏暖的濾鏡效果
* K(Kelvin)是計算白平衡單位
* 可利用白紙設定相機，取得當前環境的白平衡
* 數值越大越暖，數值越小越冷

-----------------------------------------------
### 對焦模式(Fucus Mode)
* 峰值是相機對焦的輔助設定 
* 每個鏡頭都有最短對焦距離
|模式|效果|適用|
|---|---|---|
|AF自動對焦|隨著拍攝移動，相機自動捕捉|難著摸的動態物體|
|MF手動對焦|對焦深度固定|景深聚焦切換效果|

-----------------------------------------------
### 拍攝模式(PASM)
|模式|光圈|快門|ISO|適用|
|---|---|---|---|---|
|AUTO全自動模式|\`自動\`|\`自動\`|\`自動\`|成功率達99%|
|P程式自動模式|\`自動\`|\`自動\`|手動|聚焦物體亦離開容易模糊|
|A光圈先決模式|手動|\`自動\`|手動|靜物模式，留意畫面是否模糊|
|S快門先決模式|\`自動\`|手動|手動|留意畫面是否過曝或太暗|
|M純手動模式|手動|手動|手動|所有數值自己掌控|`,__vite_glob_0_61=Object.freeze(Object.defineProperty({__proto__:null,default:_20230409Design__________},Symbol.toStringTag,{value:"Module"})),_20230412Web____SEO______=`---
title: 【Web】有助於SEO優化重點彙整
date: 2023-04-12
tags: ["photoshop"]
---
### SEO大方向
1. 找出與競爭對手的差別、優勢、弱勢
2. 分析網站點擊率、曝光，尋找點閱率4％以下的關鍵字
3. 研究關鍵字，優化內容

-----------------------------------------------
### 標題
* 使用數字
* 什麼是...
* 將關鍵字往前放
* 參考別人投放的廣告
* 標題長度適中
* 放入流行、時事相關的詞句
* 刺激好奇心，留一點伏筆

-----------------------------------------------
### 內容
* Ｍeta描述約二行(約70個字)
* 不可過度強塞關鍵字
* 閱讀順暢、口語化

-----------------------------------------------
## 關鍵字
1. 了解搜索意圖，利用網站找出好的關鍵字詞(20個)
    * [Google Keyword Planner](https://ads.google.com/intl/zh-TW_tw/getstarted/)
    * [Ahrefs](https://ahrefs.com/)
    * [Ubersuggest](https://neilpatel.com/ubersuggest/)
    * [KeywordTool](https://keywordtool.io/)
    * [Google Trends](https://trends.google.com.tw/home)
2. 加快網站載入速度，進行圖片壓縮
3. 優化網站體驗，符合RWD響應式(手機、平板、電腦)
4. 避免內容過少、重複，並且持續管理更新
5. 找到適合的關鍵字撰寫結構符合SEO的文章
* 建立網站本身的內部、外部以及
* 標題與meta優化(google2009年不在參考)
3. 分析競爭對手
    * 對手有的內容自己也要有，並且要更多
    * 做出差異

4. 內容優化
4. 反向連結
    * 有相關度、有真正在運作、高質量比多數重要
5. 善用內容時效權重，提升能見度，並維持創新

9. 網站核心內容分析，抓住主軸做延伸
10. 如何提高你的搜索結果點擊率(CTR)
-----------------------------------------------
### 關鍵字
* 是搜索的意圖
* 口語化
* 大型關鍵字(特斯拉、iphone、衣服)
* 中型關鍵字(特斯拉充電站、iphone保護貼、涼感衣)
* 長尾關鍵字(台中特斯拉充電站、iphone強化玻璃保護貼、機能型涼感衣)
* 資訊型關鍵字X6 知識 選擇權是什麼 什麼是SEO
* 商業型關鍵字X9 實做 選擇權策略 SEO反向連結
* 交易型關鍵字X4 課程教學 選擇權課程 SEO課程
* 資訊型關鍵字
* 資訊型關鍵字
* 資訊型關鍵字

1. 市場調查Google Trends 廣義衣服包包 趨勢涼感衣
2. 口語化關鍵詞
3. 要有實質的內容
4. meta(google2009年不在參考)
5. 需要長時間觀察
6. 避免文字過少/重複率太高/需要獨特性
7. 持續管理更新內容
8. 手機版使用體驗佳 
內容要3次點擊到達

。利用搜尋輸入關鍵字前段-參考自動出現的詞
。尋找搜尋量大，曝光率高但點擊率低，將他排名往前推
【搜尋量分析網站】
Buzzsumo
Keyword.io
Similar Web
利用Open Site Explorer查看回連
Sitelinks=好的結構

聊天機器人
Manychat
chatFuel
Chatty

推播工具
One Signal
PushCrew
找到排名曝光高點擊率低的關鍵字
優化標題，重新提交

網址優化
網站速度優化
圖片優化
提交網站地圖

分析Analytic、SearchConsole、Hotter
名單搜集OptinMonster
網站流量SimilarWeb
社群同步Buffer、Hootsuite`,__vite_glob_0_62=Object.freeze(Object.defineProperty({__proto__:null,default:_20230412Web____SEO______},Symbol.toStringTag,{value:"Module"})),_20230422JavaScriptLightbox2____=`---
title: 【JS】lightbox2燈箱效果
date: 2023-04-22
tags: ["javaScript"]
---
### lightbox2使用前準備
1. 下載[lightbox2](https://github.com/lokesh/lightbox2)
![圖片](/img/lightbox2燈箱效果/lightbox2燈箱效果-1.png)

-----------------------------------------------
2. 解壓縮後，將\`/examples\`內的檔案拉到自己的資料夾內
![圖片](/img/lightbox2燈箱效果/lightbox2燈箱效果-2.png)
\`.js檔、.css檔、圖片檔都要拉\`

-----------------------------------------------
3. 將.css和.js引入
    * 在\`<head>\`加入\`<link href="css/lightbox.min.css" rel="stylesheet"/>\`
    * 在\`<body>\`加入\`<script src="js/lightbox-plus-jquery.min.js"><\/script>\`
![圖片](/img/lightbox2燈箱效果/lightbox2燈箱效果-3.png)

-----------------------------------------------
4. 接著將圖片放入images資料夾
![圖片](/img/lightbox2燈箱效果/lightbox2燈箱效果-4.png)

-----------------------------------------------
5. 到index.html開始撰寫
![圖片](/img/lightbox2燈箱效果/lightbox2燈箱效果-5.png)

-----------------------------------------------
6. \`data-title\`圖片左下角標題
![圖片](/img/lightbox2燈箱效果/lightbox2燈箱效果-6.png)

-----------------------------------------------
7. 進階修改樣式到.js檔裡的最下方開始撰寫
![圖片](/img/lightbox2燈箱效果/lightbox2燈箱效果-7.png)

-----------------------------------------------
### 將圖片群組化
將\`data-lightbox\`名稱命名相同
\`\`\`html
<a href="images/image-1.jpg" data-lightbox="group1">Image1</a>
<a href="images/image-2.jpg" data-lightbox="group1">Image2</a>
<a href="images/image-3.jpg" data-lightbox="group1">Image3</a>
\`\`\`

-----------------------------------------------
### 其他參數設定
\`\`\`js
lightbox.option({
    'alwaysShowNavOnTouchDevices': true,//在手機裝置上出現箭頭
    'disableScrolling': true,//圖片超出視窗不會出現滾輪
    'fitImagesInViewport': true,//圖片完整顯示在視窗
    'maxWidth': 300,//圖片最大寬度px
    'maxHeight': 300,//圖片最大高度px
    'positionFromTop': 50,//圖片距離頂部px
    'resizeDuration': 700,//圖片出現速度
    'wrapAround': true//圖片到最後一張時會在從第一張開始
});
\`\`\``,__vite_glob_0_63=Object.freeze(Object.defineProperty({__proto__:null,default:_20230422JavaScriptLightbox2____},Symbol.toStringTag,{value:"Module"})),_20230423JavaScriptSwiper____=`---
title: 【JS】swiper輪播效果
date: 2023-04-23
tags: ["javaScript"]
---
### swiper使用前準備
1. 先到[swiper](https://swiperjs.com/swiper-api)找到CDN
![圖片](/img/swiper輪播效果/swiper輪播效果-1.png)

-----------------------------------------------
2. 將.css和.js引入
  * 在\`<head>\`加入\`<link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css"/>\`
  * 在\`<body>\`加入\`<script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"><\/script>\`
![圖片](/img/swiper輪播效果/swiper輪播效果-2.png)

-----------------------------------------------
3. 在\`<body>\`放入主容器
![圖片](/img/swiper輪播效果/swiper輪播效果-3.png)

-----------------------------------------------
4. 先到在\`<style>\`寫主容器的寬度和高度
![圖片](/img/swiper輪播效果/swiper輪播效果-4.png)

-----------------------------------------------
5. 到\`<script>\`後面寫上程式碼
![圖片](/img/swiper輪播效果/swiper輪播效果-5.png)

-----------------------------------------------
6. 在\`swiper-slide\`裡面放圖片
![圖片](/img/swiper輪播效果/swiper輪播效果-6.png)

-----------------------------------------------
### 輪播容器

\`\`\`html
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
\`\`\`

-----------------------------------------------
### 輪播容器樣式
\`\`\`css
.swiper {
  width: 600px; 
  height: 300px;
}
\`\`\`

-----------------------------------------------
### 輪播方式設定
\`\`\`js
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
\`\`\``,__vite_glob_0_64=Object.freeze(Object.defineProperty({__proto__:null,default:_20230423JavaScriptSwiper____},Symbol.toStringTag,{value:"Module"})),_20230424DesignUIUX____=`---
title: 【Design】UIUX核心觀念
date: 2023-04-24
tags: ["design"]
---
### 單位
* 解析度 px(device pixel)
  * 是抽象長度單位
  * 在不同螢幕上每個像素點大小都不同
* 螢幕密度 ppi、dpi
  * 圖像 ppi 值越高=畫面的細節越豐富
  * 300ppi = retina = 人眼無法分辨出像素點 = 視網膜螢幕
* dpi 是印刷用
  * 163dpi = 1x = 3G
  * 326dpi = 2x = 6/7
  * 401dpi = 3x = 6plus

-----------------------------------------------
### ios
* ios 單位：pt
  * 1x = 1pt = 1px
  * 2x = 1pt = 2px
  * 3x = 1pt = 3px
#
* 使用字體：
  * 中文： pingFang SC（蘋方體）
  * 英文：
    * 20pt 以上：SF UI display
    * 19pt 以下：SF UI Text
#
* 基本元件：
  * 可觸控元件：44x44pt
  * 非觸控元件：30x30pt
  * 狀態欄位高度：44pt
  * 導航欄位高度：44pt

-----------------------------------------------
### android
* android 單位：
  * 文字：sp
  * 圖片、間距：dp
* 使用字體：
  * 中文： Source Han Sans/Noto（思源黑體）
  * 英文： Roboto
* 基本元件：
  * 可觸控元件：48x48dp
  * 頭像：40x40dp
  * 元件內圖標：24x24dp
  * 9 patch（九宮格）技術來顯示由 NicePatch 圖片提供的背景以適應不同的設備和螢幕大小

-----------------------------------------------
### 什麼是 UI、UX？
* UX=User(使用者)+Experience(體驗)
  * 是使用體驗所有總和，包括 UI、情緒、認知、生理反應
  * 產品形象(設計師)
  * 問題回覆時間(客服人員)
  * 頁面讀取速度(工程師)
  * 產品經理(新功能規劃)
* UI=User(使用者)+Interface(介面)
  * UI 是和特定『使用者』互動，平面設計面向『大眾』
  * 透過視覺手段，讓使用者感受產品
  * 使用者-介面-產品
    * 螢幕觸控：手機、車機、平板
    * 語音系統：Google Home
    * 實體按鈕：遙控器、洗衣機、販賣機、電鍋

-----------------------------------------------
### UCD 設計思維流程
1. 了解使用情境
2. 定義使用者需求
3. 設計解決方案
4. 評估設計成果

-----------------------------------------------
### 判斷產品體驗的七大指標
1. 可用的(有幫助的)
2. 有用的(減少錯誤)
3. 令人嚮往的(配色、文案、視覺勾引力)
4. 易到達的(顧及到不同(弱勢)族群、使用更直覺)
5. 有信用的(安全感)
6. 可發現的
7. 有價值的(綜合以上 6 點)

-----------------------------------------------
### UX 需要具備的五大元素
1. 使用者需求與產品目標(了解用戶需求，提供什麼樣的服務)
2. 功能規格與需求定義(提供什麼功能、願景)
3. 資訊架構與互動設計(定義產品使用流程、架構)
4. UI 設計與內容設計(互動設計、資訊層級)
5. 視覺設計與美感(配色、視覺感受)

-----------------------------------------------
### 設計思考流程
1. 同理用戶(探索問題、找出使用者的痛點、做問卷訪談)
2. 定義問題(假設問題)
3. 發想創意(團隊討論、頭腦風暴、工作坊)
4. 製作原型(製作範本使用來得到反饋)
5. 測試(重新修改討問、解決問題)

-----------------------------------------------
### 通用設計原則
* 減少裝飾性元素、複雜度
* 資訊重點讓文案明確易懂
* 多留一點呼吸空間、留白拿捏
* 視覺一致性、使用有限的顏色和字型
* 遵循通用設計規範內容一致性、標準化
* 增加文字和背景按鈕顏色對比度
* 了解設計是給誰
* 注意手指觸控範圍、按鈕大小
* 簡化表單
* 使用熟悉佈局、介面，減少熟悉時間
* 按鈕要是可以點擊狀態
* 使用者控制權、操控自由度

-----------------------------------------------
### 前期設計工具
* 線框稿(wireframe)
  * 用最少的視覺元素呈現
  * 讓團隊了解排列位置、功能結構
  * 不必添加內容
* 介面流程圖(UI flow)
  * 文字任務流程或視覺頁面流程
  * 誰是使用者
  * 他們的目標是什麼
  * 怎樣到達目標
* 使用者旅程地圖`,__vite_glob_0_65=Object.freeze(Object.defineProperty({__proto__:null,default:_20230424DesignUIUX____},Symbol.toStringTag,{value:"Module"})),_20230425DesignFigma____=`---
title: 【Design】Figma使用教學
date: 2023-04-25
tags: ["design"]
---
### 免費版figma
* 團隊(不限)-專案(最多3個)-檔案(不限)
* 免費版本控制只保留30天
    * 方法一：匯出檔案再匯入
        * 點選左上角-檔案-儲存並下載-儲存.fig檔在本地端
        * 回到控制台的專案，選擇匯入
    * 方法二：儲存歷史並回朔紀錄(30天)
        * 點選左上角-檔案-儲存版控
        * 點選左上角-檔案-顯示版控

-----------------------------------------------
### 工具
* 元件
    * 群組(group)縮放內容變形
    * 框架(frame)縮放會被constraints固定
        * 重疊時會自動包覆
        * 按著滑鼠移動frame+空白鍵不會被包覆
* 文字
    * 行高建議1.4~1.6倍(140%~160%)
    * 點選文字控制區右上角(四個點)可建立文字樣版(命名：種類/樣式名稱)
    * 載入本地端字型：點擊頭像-setting-font
    * 文字底線可用陰影代替
* 圖片
    * 進行遮罩時，形狀需放在圖片下層，先群組再遮罩
* 顏色
    * 在滴管吸取時，滑鼠按著不放可瀏覽變色
    * 全選物件後，可在右邊顏色選擇器針對特定顏色選取

-----------------------------------------------
### 常用快捷鍵
|功能|快捷鍵|
|---|---|
|游標|\`V\`|
|文字|\`T\`|
|滴管|\`I\`|
|打開格線系統|\`control\`+\`G\`|
|框架|\`command\`+\`G\`|
|群組|\`command\`+\`option\`+\`G\`|
|解散框架/群組|\`command\`+\`shift\`+\`G\`|
|合併形狀|\`command\`+\`E\`|
|命名多個圖層|左側選取圖層\`command\`+\`R\`|
|文字新增連結|\`command\`+\`K\`|
|簡報模式|\`command\`+\`\\\`|
|插入圖片|\`command\`+\`shift\`+\`K\`|
|圖片遮罩|\`command\`+\`control\`+\`M\`|
|複製樣式|\`command\`+\`option\`+\`C\`|
|貼上樣式|\`command\`+\`option\`+\`V\`|
|製作元件|\`command\`+\`option\`+\`K\`|
|查看邊距|\`option\`+游標移動|
|剪裁圖片|\`option\`+點兩下圖片|
|完整顯示|\`shift\`+\`1\`|
|顯示尺標|\`shift\`+\`R\`|
|Auto Layout|\`shift\`+\`A\`|
|筆畫/填色反轉|\`shift\`+\`X\`|
|垂直/水平反轉|\`shift\`+\`H\`/\`V\`|
|調整透明度|點一下圖形+\`數字鍵\`|
|調整尺寸|點一下圖形+\`方向鍵\`|

-----------------------------------------------
### 元件(Component)
* 元件本體(main component)
* 元件分身(instance)
* 元件建立
    1. 繪製樣式
    2. \`shift\`+\`A\` 建立Auto layout
    3. \`command\`+\`option\`+\`K\` 製作元件
    4. 給元件命名或賦予關鍵字
    5. 在資源可用文字搜尋
    6. 修改樣式時統一使用元件本體
\`若在instance上修改樣式，main component修改就不再同步\`

-----------------------------------------------
### 變體(Variants)
* 將元件集合(component set)
* 每個元件可以有多個屬性，每個屬性對應到一個值
* 建立變體
    1. 繪製樣式
    2. \`command\`+\`option\`+\`K\` 製作元件
    3. 製作不同樣式(樣式名稱)
    4. 進行群組命名(property)
    5. 群組複製再次進行修改
    6. 檢查元件是否可以用分類選擇到
\`只有元件才能進行變體\`

-----------------------------------------------
### 格線系統(grid system)
1. 建立frame
2. 啟用layout grid
3. 選擇columns，count：12
4. 決定主要內容寬度(自訂)
5. margin：將裝置寬度-內容寬度/2
6. gutter：16(自訂)
* 8網格間距(8 point grids)能夠更有效率、達成一致性
    * 4、8、12、16、20、24、28、32、40、48、56、64...
    * 
\`斷點(break point)建議參考主流框架\`

-----------------------------------------------
### 建立核心樣式
1. 顏色(預設/深色/淺色)
    * 主要色(Primary)品牌色、重要文字、按鈕
    * 次要色(Secondary)提示訊息、次要文字按鈕
    * 警告色(Alert)錯誤訊息、警告
    * 輔助色(Complementary)其他更多輔助介面
    * 強調色(Accent)強調特定資訊
    * 灰階(Gray scale)分隔線、外框線、內容文字
2. 文字
    * 選定字型(1~2種)
    * 定義H1~H6、主標、副標、內容文字、輔助文字
        * H1(40px)(125%)
        * H2(32px)(125%)
        * H3(24px)(125%)
        * H4(20px)(140%)
        * H5(18px)(140%)
        * Title(16px)(140%)
        * P(12px)(140%)
        * small(11px)(140%)
    * 粗細度(2~3種)
    * 階層不同、深淺度可調整
    * 行高1.4%~1.6%，大於24px建議1.25%
3. 間距(8 point grids)
* input 文字跟輸入框上下12px 左右16px 

-----------------------------------------------
### 建立完整按鈕樣式
1. 元件名稱btn/form/nav
3. 狀態default/hover/foucs/disabled
5. icon有無true/false
* name / state / icon
* btn / dafault / text`,__vite_glob_0_66=Object.freeze(Object.defineProperty({__proto__:null,default:_20230425DesignFigma____},Symbol.toStringTag,{value:"Module"})),_20230426CSSSass_________=`---
title: 【CSS】Sass快速編譯+變數使用
date: 2023-04-26
tags: ["css"]
---
### SASS與SCSS與CSS差別
#### css樣式寫法
\`\`\`css
.menu{
    display: flex;
    flex-direction: column;
}
.menu li{
    padding: 4px 8px;
}
.menu li a{
    color: #333333;
}
\`\`\`
#### scss樣式寫法
\`\`\`scss
.menu{
  display: flex;
  flex-direction: column;
  li{
    padding: 4px 8px;
    a{
      color: #333333;
    }
  }
}
\`\`\`
\`以縮排方式編譯\`
#### sass樣式寫法
\`\`\`sass
.menu
  display: flex
  flex-direction: column
    li
      padding: 4px 8px
      a
        color: #333333
\`\`\`
\`少了{}以及;，以縮排方式編譯\`

-----------------------------------------------
### @mixin自訂樣式組
#### sass樣式寫法
\`\`\`sass
/*變數設定*/
@mixin greenCube
  width: 50px
  height: 50px
  background-color: #28DF99

/*變數使用*/
.box
    +greenCube
\`\`\`
#### scss樣式寫法
\`\`\`scss
/*變數設定*/
@mixin greenCube{
  width: 50px;
  height: 50px;
  background-color: #28DF99;
}

/*變數使用*/
.box{
  @include greenCube;
}
\`\`\`
#### css編譯結果
\`\`\`css
.box{
  width: 50px;
  height: 50px;
  background-color: #28DF99;
}
\`\`\`

-----------------------------------------------
### $自訂常用變數
#### sass樣式寫法
\`\`\`sass
/*變數設定*/
$cube_width: 50px
$cube_height: 50px
$color_green: #28DF99

/*變數使用*/
.box
  width: $cube_width
  height: $cube_height
  background-color: $color_green
\`\`\`
#### scss樣式寫法
\`\`\`scss
/*變數設定*/
$cube_width: 50px;
$cube_height: 50px;
$color_green: #28DF99;

/*變數使用*/
.box{
  width: $cube_width
  height: $cube_height
  background-color: $color_green
}
\`\`\`
#### css編譯結果
\`\`\`css
.box{
  width: 50px;
  height: 50px;
  background-color: #28DF99;
}
\`\`\`

-----------------------------------------------
### @mixin+$混合用法
#### sass樣式寫法
\`\`\`sass
/*變數設定*/
@mixin greenCube($width, $height, $color_green)
  width: $width
  height: $height
  background-color: $color_green

/*變數使用*/
.box
  +greenCube(50px,50px,#28DF99)
\`\`\`
#### scss樣式寫法
\`\`\`scss
/*變數設定*/
@mixin greenCube($width, $height, $color_green){
  width: $width;
  height: $height;
  background-color: $color_green;
}

/*變數使用*/
.box{
  @include greenCube(50px, 50px, #28DF99);
}
\`\`\`
#### css編譯結果
\`\`\`css
.box{
  width: 50px;
  height: 50px;
  background-color: #28DF99;
}
\`\`\`

-----------------------------------------------
### @mixin+@media斷點用法
#### sass樣式寫法
\`\`\`sass
/*變數設定*/
@mixin X-Small
  @media (max-width: 576px)
    @content

/*變數使用*/
.box
  width: 50px
  height: 50px
  background-color: green
  +X-Small
    background-color: red
\`\`\`
#### scss樣式寫法
\`\`\`scss
/*變數設定*/
@mixin X-Small{
  @media (max-width: 576px){
    @content;
  }
}

/*變數使用*/
.box{
  width: 50px;
  height: 50px;
  background-color: green;

  @include X-Small{
    background-color: red;
  }
}
\`\`\`
#### css編譯結果
\`\`\`css
.box{
  width: 50px;
  height: 50px;
  background-color: green;
}
@media (max-width: 576px) {
  .box{
    background-color: red;
  }
}
\`\`\`

-----------------------------------------------
### 匯入@import
#### 在all.scss使用@import再彙整出all.css
\`\`\`scss
@import "variable"; /*常用變數*/
@import "reset"; /*css reset*/
@import "layout"; /*共同框架，第一層基本架構*/
@import "button"; /*按鈕元件*/
@import "資料夾名稱/檔案名稱";
\`\`\`
#### 檔名前面加上底線\`_\`可以被編譯，但不會被輸出
\`\`\`
src/
├─── scss/
│     │ 
│     ├─── _custom.scss  #sass編譯時不會被輸出
│     │     
│     └─── all.scss
│
└─── index.html          
\`\`\`
#### @import的scss在編譯時會將變數連同帶走
\`\`\`scss
/*custom.scss*/
$primary-color: blue;

/*all.scss*/
@import 'custom'

.button {
  background-color: $primary-color;
}

/*編譯後all.css結果*/
.button {
  background-color: blue;
}
\`\`\``,__vite_glob_0_67=Object.freeze(Object.defineProperty({__proto__:null,default:_20230426CSSSass_________},Symbol.toStringTag,{value:"Module"})),_20230810Mac__________=`---
title: 【Mac】網頁的動態效果消失
date: 2023-08-10
tags: ["mac"]
---
### 測試
1. 到[animate.css](https://animate.style/)網站點擊右側選項，看看中間animate.css字樣是否有效果
![圖片](/img/瀏覽動畫效果消失/瀏覽動畫效果消失-1.png)

-----------------------------------------------
2. 若無效果，更換瀏覽器也無效，就直接到系統設定
![圖片](/img/瀏覽動畫效果消失/瀏覽動畫效果消失-2.png)

-----------------------------------------------
3. 點“輔助使用”
![圖片](/img/瀏覽動畫效果消失/瀏覽動畫效果消失-3.png)

-----------------------------------------------
4. 將“減少動態效果”取消勾選，即完成
![圖片](/img/瀏覽動畫效果消失/瀏覽動畫效果消失-4.png)`,__vite_glob_0_68=Object.freeze(Object.defineProperty({__proto__:null,default:_20230810Mac__________},Symbol.toStringTag,{value:"Module"})),_20230811Gulp___gulp____=`---
title: 【Gulp】安裝gulp建立bootstrap開發環境
date: 2023-08-11
tags: ["gulp"]
---
### gulp基本指令
|指令|一般|縮寫|
|---|---|---|
|安裝|npm install gulp-sass|npm i gulp-sass|
|移除|npm uninstall gulp-sass|npm uni gulp-sass|
|搜尋|npm search gulp-sass|npm s gulp-sass|
|清單|npm list|npm ls|
|查詢版本|npm --version|npm -v|
|初始化|npm init|---|
|初始化(預設)|npm init -y|---|
|顯示清單|npm list|---|
|更新套件|npm update gulp-sass|---|
|部署到github上|gulp deploy|---|

-----------------------------------------------
### 建立gulp環境
1.下載node.js
* [node.js下載網址](https://nodejs.org/en)
    * LTS：長期維護版(較穩定)
    * Current：目前最新版(較為不穩定)
* 檢查node版本:
\`\`\`html
$ node -v
\`\`\`

-----------------------------------------------
2.安裝npm套件管理工具
* 安裝npm:
\`\`\`html
$ npm insatll
\`\`\`    
* 檢查npm版本:
\`\`\`html
$ npm -v
\`\`\`    

-----------------------------------------------
3.安裝gulp全域環境(每台電腦僅需執行一次)   
* 安裝Gulp4:
\`\`\`html
$ npm install gulp-cli -g
\`\`\`    
* mac安裝Gulp4:
\`\`\`html
$ sudo npm install gulp-cli -g
\`\`\`  

-----------------------------------------------
4.生成package.json
* 生成自訂package.json:
\`\`\`html
$ npm init
\`\`\`
* 生成預設package.json:
\`\`\`html
$ npm init -y
\`\`\`
\`專案資料夾會自動生成package.json檔\`
\`\`\`
you project
└─── package.json  #記錄各種套件的版本，可以自行指定專案的名稱、版本等資訊
\`\`\`

-----------------------------------------------
5.在專案安裝gulp套件
* 安裝gulp套件:
\`\`\`html
$ npm install gulp
\`\`\`
* 檢查gulp套件版本:
\`\`\`html
$ gulp -v
\`\`\`
\`專案資料夾會自動生成node_modules/、package-lock.json\`
\`\`\`
you project
├─── node_modules/  #gulp零件包
├─── package-lock.json  #詳細記錄了每個依賴套件的版本，防止不同開發者發生版本變更的意外
└─── package.json         
\`\`\`

-----------------------------------------------
6.將index.html檔新增在src資料夾裡
\`\`\`
you project
├─── node_modules/        
├─── src/
│     │
│     └─── index.html    
│ 
├─── package-lock.json    
└─── package.json        
\`\`\`

-----------------------------------------------
7.在根目錄新增gulpfile.js檔
* gulp.task(): 定義任務名稱
* gulp.src(): 指定來源文件的路徑
* .pipe(): 將導入的檔案做處理
* gulp.dest(): 指定文件輸出目錄
* gulp.watch(): 監聽指定文件的變動
* gulp.serise(): 將任務串連
\`\`\`js
const gulp = require('gulp'); //載入gulp套件

gulp.task('copyHTML', function(){ //創建'copyHTML'任務
  return gulp
    .src('src/**/*.html') //導入html原始路徑
    .pipe(gulp.dest('dist')) //編譯到'dist'資料夾
});
\`\`\`
\`\`\`
you project
├─── node_modules/        
├─── src/
│     │
│     └─── index.html     
│
├─── gulpfile.js          # gulp配置檔案
├─── package-lock.json    
└─── package.json         
\`\`\`

-----------------------------------------------
8.在終端機執行指令
\`\`\`html
$ gulp copyHTML
\`\`\`
\`執行後dist資料夾內會自動複製出一個index.html\`
\`\`\`
you project
├─── node_modules/        
├─── dist/
│     │
│     └─── index.html    # HTML檔案(複製出來的)
│ 
├─── src/
│     │
│     └─── index.html    
│
├─── gulpfile.js          
├─── package-lock.json    
└─── package.json       
\`\`\`

-----------------------------------------------
9.安裝gulp-sass編譯套件和sass(版本1.62.0)
* 安裝gulp-sass套件:
\`\`\`html
$ npm install gulp-sass
\`\`\`
* 安裝sass套件:
\`\`\`html
$ npm install sass@1.62.0
\`\`\`
\`\`\`js
const gulp = require('gulp'); 
const sass = require('gulp-sass')(require('sass')); //載入gulp-sass套件

gulp.task('copyHTML', function(){ 
  return gulp
    .src('src/**/*.html') 
    .pipe(gulp.dest('dist')) 
});

gulp.task('sass', function(){
  return gulp
    .src('src/scss/**/*.*') //所有在scss子資料夾中的所有檔
    .pipe(
      sass().on('error',sass.logError) //編譯錯誤時，顯示提示訊息
    ) 
    .pipe(gulp.dest('dist/css')) ////編譯到'dist'底下的'css'資料夾
});
\`\`\`

-----------------------------------------------
10.安裝bootstrap套件(版本4.6.2)
\`\`\`html
$ npm install bootstrap@4.6.2
\`\`\`

-----------------------------------------------
11.建立all.scss
* 在src資料夾裡新增css資料夾，然後建立all.scss
\`\`\`
you project
├─── node_modules/        
├─── dist/
│     │
│     └─── index.html    
│ 
├─── src/
│     ├─── scss/
│     │     │
│     │     └─── all.scss
│     │
│     └─── index.html    
│
├─── gulpfile.js          
├─── package-lock.json    
└─── package.json         
\`\`\`

-----------------------------------------------
12.將bootstrap的變數檔複製到本地
* 將node_modules/bootstrap/scss/_variables.scss複製到src/scss/helpers
\`\`\`
you project
├─── node_modules/        
├─── dist/
│     │
│     └─── index.html    
│ 
├─── src/
│     ├─── scss/
│     │     │
│     │     ├─── helpers
│     │     │     │
│     │     │     └───_variable.scss  #從node_modules複製過來的
│     │     │
│     │     ├─── _custom.scss  #自定義樣式
│     │     │
│     │     └─── all.scss
│     │
│     └─── index.html    
│
├─── gulpfile.js          
├─── package-lock.json    
└─── package.json         
\`\`\`
\`_variable.scss有底線的檔案不會被編譯，但可以被合併\`

-----------------------------------------------
13.打開all.scss檔引用boostrap
\`\`\`scss
@import "../../node_modules/bootstrap/scss/functions"; //bootstrap，設置文字顏色、背景顏色、邊框等樣式

@import "./helpers/variables"; //本地檔案，可修改bootstrap常用變數

@import "../../node_modules/bootstrap/scss/mixins"; //bootstrap，處理顏色、尺寸、間距可重複使用函數

@import '../../node_modules/bootstrap/scss/bootstrap.scss'; //bootstrap，元件檔案

@import 'custom'; //本地檔案，編寫用
\`\`\`

-----------------------------------------------
14.回到index.html裡引用css
\`\`\`html
<head>
  <link rel="stylesheet" href="css/all.css">
</head>
\`\`\`

-----------------------------------------------
15.回到gulpfile.js添加任務清單
\`\`\`js
gulp.task('default', gulp.series('copyHTML','sass'));
\`\`\`
\`\`\`html
$ gulp
\`\`\`
\`只要執行'gulp'會接續執行'copyHTML'、'sass'任務\`

-----------------------------------------------
### 若遇到cannot find module "nan"
1. 清除npm緩存
\`\`\`html
$ npm cache clean --force
\`\`\`
2. 在根目錄下運行安裝nan模組
\`\`\`html
$ npm install nan --save
\`\`\``,__vite_glob_0_69=Object.freeze(Object.defineProperty({__proto__:null,default:_20230811Gulp___gulp____},Symbol.toStringTag,{value:"Module"})),_20230812Gulp__scss_____css=`---
title: 【Gulp】將scss自動編譯成css
date: 2023-08-12
tags: ["gulp"]
---
### gulp-sass
1. 在專案中打開終端機安裝\`gulp-sass\`和\`sass\`套件(版本@1.62.0)
\`\`\`html
$ npm install gulp-sass sass@1.62.0
\`\`\`

-----------------------------------------------
2. 在gulpfile.js新增程式碼
\`\`\`js
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function(){
  return gulp
    .src('src/scss/**/*.scss') //引用scss檔案路徑
    .pipe(
        sass().on('error',sass.logError) //sass編譯過程中捕捉錯誤並輸出錯誤訊息，以避免因編譯錯誤而中斷gulp
    )
    .pipe(gulp.dest('dist/css')) //css編譯完成路徑
});
\`\`\`

-----------------------------------------------
3. 在終端機執行指令
\`\`\`html
$ gulp sass
\`\`\`

-----------------------------------------------
4. 執行結果會將src裡的scss編譯，生成到dist裡變成css
\`\`\`
you project
├─── node_modules/        
├─── dist/
│     │
│     └─── css/
│           │
│           └─── all.css    #編譯完成的css檔
│   
├─── src/
│     └─── scss/
│           │
│           └─── all.scss   #開發時編輯用的scss檔
│     
├─── gulpfile.js          
├─── package-lock.json    
└─── package.json  
\`\`\`

-----------------------------------------------
5. 回到index.html引入css
\`\`\`html
<head>
    <link rel="stylesheet" href="css/all.css">
</head>
\`\`\`

-----------------------------------------------
6. 回到gulpfile.js設置屬性
    * \`outputStyle\`: 字串，編譯出的檔案形式
        * \`'nested'\`: 保留原始的巢狀層次結構(預設值)
        * \`'expanded'\`: 保留巢狀的層次結構，每個選擇器和屬性都有自己的行
        * \`'compact'\`: 將每個規則放在單獨的一行
        * \`'compressed'\`: 刪除所有的空白字符和換行，減少加載時間
\`\`\`js
const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp
    .src('src/scss/**/*.*')
    .pipe(sass({
        outputStyle: 'compressed' //編譯出的檔案形式為'壓縮'
    })
    .on('error',sass.logError))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('default', gulp.series('sass'));
\`\`\`

-----------------------------------------------
7. 最後，在終端機執行\`gulp\`即可完成任務
\`\`\`html
$ gulp
\`\`\``,__vite_glob_0_70=Object.freeze(Object.defineProperty({__proto__:null,default:_20230812Gulp__scss_____css},Symbol.toStringTag,{value:"Module"})),_20230813Gulp__javascript_______=`---
title: 【Gulp】將javascript整合成穩定版本
date: 2023-08-13
tags: ["gulp"]
---
### gulp-babel
1. 在專案中打開終端機安裝\`gulp-babel\`、\`@babel/core\`、\`@babel/preset-env\`套件
\`\`\`html
$ npm install gulp-babel @babel/core @babel/preset-env
\`\`\`
\`@開頭的套件，表示這是一個由特定組織或作者維護的套件\`

-----------------------------------------------
2. 在gulpfile.js新增程式碼
\`\`\`js
const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('babel', function(){
  return gulp
    .src('src/js/*.js') //引用js檔案來源
    .pipe(
      babel({  //使用babel套件
        presets:['@babel/env'] //設定使用'@babel/env'套件進行編譯
      })
    )  
    .pipe(gulp.dest('dist/js')) //js編譯完成路徑
});
\`\`\`

-----------------------------------------------
3. 在終端機執行指令
\`\`\`html
$ gulp babel
\`\`\`

-----------------------------------------------
4. 執行結果會將src裡的所有js檔(ES5、ES6、ES7)編譯，生成到dist裡變成穩定的all.js
\`\`\`
you project
├─── node_modules/        
├─── dist/
│     │
│     └─── js/
│           │
│           └─── all.js   #編譯完成的js檔
│   
├─── src/
│     └─── js/
│           │
│           └─── all.js   #開發時編輯用的js檔
│     
├─── gulpfile.js          
├─── package-lock.json    
└─── package.json  
\`\`\`

-----------------------------------------------
5. 回到index.html引入js
\`\`\`html
<body>
    <script src="js/all.js"><\/script>
</body>
\`\`\`

-----------------------------------------------
6. 回到gulpfile.js設置屬性
    * \`minified\`: 布林值，是否要壓縮代碼
\`\`\`js
const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('babel', function(){
  return gulp
    .src('src/js/*.js') 
    .pipe(
      babel({
        presets:['@babel/env'],
        minified: true //壓縮代碼
      })
    )  
    .pipe(gulp.dest('dist/js')) 
});

gulp.task('default', gulp.series('babel'));
\`\`\`

-----------------------------------------------
7. 【補充】安裝\`gulp-plumber\`編譯發生錯誤時，將訊息傳到控制台
\`\`\`html
$ npm install gulp-plumber
\`\`\`
\`\`\`js
const gulp = require('gulp');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');

gulp.task('babel', function(){
  return gulp
    .src('src/js/*.js') 
    .pipe(plumber())
    .pipe(
      babel({
        presets:['@babel/env'],
        minified: true //壓縮代碼
      })
    )  
    .pipe(gulp.dest('dist/js')) 
});

gulp.task('default', gulp.series('babel'));
\`\`\`
-----------------------------------------------
8. 最後，在終端機執行\`gulp\`即可完成任務
\`\`\`html
$ gulp
\`\`\``,__vite_glob_0_71=Object.freeze(Object.defineProperty({__proto__:null,default:_20230813Gulp__javascript_______},Symbol.toStringTag,{value:"Module"})),_20230814Gulp__css______________=`---
title: 【Gulp】將css樣式加上前綴增加瀏覽器兼容性
date: 2023-08-14
tags: ["gulp"]
---
### gulp-postcss
1. 在專案中打開終端機安裝\`gulp-postcss\`、\`autoprefixer\`、\`cssnano\`、\`gulp-sass\`、\`sass\`套件(版本@1.62.0)
\`\`\`html
$ npm install gulp-postcss autoprefixer cssnano gulp-sass sass@1.62.0
\`\`\`

-----------------------------------------------
2. 在gulpfile.js新增程式碼
\`\`\`js
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

gulp.task('sass', function(){
  return gulp
    .src('src/scss/*.*')
    .pipe(sass()
    .on('error',sass.logError))
    .pipe(
      postcss([ 
        autoprefixer(), //使用autoprefixer套件，將編譯完成的CSS做PostCSS處理，確保你的CSS在不同瀏覽器中正確顯示
        cssnano() //使用cssnano套件，去除不必要的空格、注釋從而壓縮和最小化CSS
      ])
    )
    .pipe(gulp.dest('dist/css'));
});
\`\`\`

-----------------------------------------------
3. 在終端機執行指令
\`\`\`html
$ gulp sass
\`\`\`

-----------------------------------------------
4. 執行結果會將css樣式加上前綴詞\`-webkit-\`讓瀏覽器兼容性更好
\`\`\`
you project
├─── node_modules/        
├─── dist/
│     │
│     └─── css/
│           │
│           └─── all.css    #加上前綴詞的css檔
│   
├─── src/
│     └─── scss/
│           │
│           └─── all.scss   #未加上前綴詞的檔
│     
├─── gulpfile.js          
├─── package-lock.json    
└─── package.json  
\`\`\`

-----------------------------------------------
5. 回到index.html引入css
\`\`\`html
<head>
    <link rel="stylesheet" href="css/all.css">
</head>
\`\`\`

-----------------------------------------------
6. 回到gulpfile.js啟用\`cssnano\`高級轉換組件
\`\`\`html
$ npm install cssnano-preset-advanced
\`\`\`
\`\`\`js
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

gulp.task('sass', function(){
  return gulp
    .src('src/scss/*.*')
    .pipe(sass()
    .on('error',sass.logError))
    .pipe(
      postcss([ 
        autoprefixer(),
        cssnano({
          preset: "advanced" //更改cssnano變成進階模式
        })
      ])
    )
    .pipe(gulp.dest('dist/css'));
});
\`\`\`

-----------------------------------------------
7. 啟用\`postcss-preset-env\`套件
\`\`\`html
npm install postcss-preset-env
\`\`\`
\`\`\`js
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');

gulp.task('sass', function(){
  return gulp
    .src('src/scss/*.*')
    .pipe(sass()
    .on('error',sass.logError))
    .pipe(
      postcss(
        [ 
          postcssPresetEnv(), //兼容性自動選擇插件
          autoprefixer(),
          cssnano({
            preset: "advanced"
          })
        ]
      )
    )
    .pipe(gulp.dest('dist/css'));
});
\`\`\`

-----------------------------------------------
8. 啟用\`postcss-flexbugs-fixes\`套件
\`\`\`html
$ npm install postcss-flexbugs-fixes
\`\`\`
\`\`\`js
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');

gulp.task('sass', function(){
  return gulp
    .src('src/scss/**/*.*')
    .pipe(
      sass().on('error',sass.logError)
    )
    .pipe(
      postcss([ 
        postcssFlexbugsFixes(), //修復Flexbox在不同瀏覽器中的一些兼容性問題
        postcssPresetEnv(), 
        autoprefixer(),
        cssnano({
          preset: "advanced" 
        })
      ])
    )
    .pipe(gulp.dest('dist/css'));
});

gulp.task('default', gulp.series('sass'));
\`\`\`

-----------------------------------------------
9. 最後，在終端機執行\`gulp\`即可完成任務
\`\`\`html
$ gulp
\`\`\``,__vite_glob_0_72=Object.freeze(Object.defineProperty({__proto__:null,default:_20230814Gulp__css______________},Symbol.toStringTag,{value:"Module"})),_20230815Gulp______map______=`---
title: 【Gulp】生成程式碼map以利除錯編譯
date: 2023-08-15
tags: ["gulp"]
---
### gulp-sourcemaps
1. 在專案中打開終端機安裝\`gulp-sourcemaps\`、\`gulp-sass\`、\`sass\`套件(版本@1.62.0)
\`\`\`html
$ npm install gulp-sourcemaps gulp-sass sass@1.62.0
\`\`\`

-----------------------------------------------
2. 在gulpfile.js新增程式碼
\`\`\`js
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function(){
  return gulp
    .src('src/scss/**/*.*')
    .pipe(sourcemaps.init()) //sourcemaps初始化
    .pipe(
      sass().on('error',sass.logError)
    )
    .pipe(sourcemaps.write("./")) //在當前的目錄下，生成sourcemaps文件
    .pipe(gulp.dest('dist/css'))
});
\`\`\`

-----------------------------------------------
3. 在終端機執行指令
\`\`\`html
$ gulp sass
\`\`\`

-----------------------------------------------
4. 執行結果會在all.css旁自動新加入一個.map檔
\`\`\`
you project
├─── node_modules/        
├─── dist/
│     │
│     └─── css/
│           │
│           ├─── all.css  
│           │   
│           └─── all.css.map  #自動生成的map檔
│  
├─── src/
│     └─── scss/
│           │
│           ├─── all.scss   
│           │
│           └─── helpers
│                 │
│                 └─── _variables.scss
│
├─── gulpfile.js          
├─── package-lock.json    
└─── package.json  
\`\`\`

-----------------------------------------------
5. 回到gulpfile.js添加任務清單
\`\`\`js
gulp.task('default', gulp.series('sass'));
\`\`\`

-----------------------------------------------
6. 最後，在終端機執行\`gulp\`即可完成任務
\`\`\`html
$ gulp
\`\`\``,__vite_glob_0_73=Object.freeze(Object.defineProperty({__proto__:null,default:_20230815Gulp______map______},Symbol.toStringTag,{value:"Module"})),_20230816Gulp_____js_________=`---
title: 【Gulp】將引入的js套件合併成一個檔案
date: 2023-08-16
tags: ["gulp"]
---
### gulp-concat
1. 在專案中打開終端機安裝\`gulp-concat\`、\`jquery\`、\`bootstrap\`套件(版本@4.6.2)
\`\`\`html
$ npm install gulp-concat jquery bootstrap@4.6.2
\`\`\`

-----------------------------------------------
2. 在gulpfile.js新增程式碼
\`\`\`js
const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('concat', function(){
  return gulp
    .src([
      'node_modules/jquery/dist/jquery.slim.min.js', //引入jQuery
      'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js', //引入bootstrap
      'src/js/*.js' //引入自定義js
    ])
    .pipe(concat('all.js')) // 合併檔案，名稱為：all.js
    .pipe(gulp.dest('dist/css'));
});
\`\`\`

-----------------------------------------------
3. 在終端機執行指令
\`\`\`html
$ gulp concat
\`\`\`

-----------------------------------------------
4. 執行結果會在src裡新增一個\`all.js\`檔
\`\`\`
you project
├─── node_modules/        
├─── dist/
│     │
│     └─── js/
│           │
│           └─── all.js  #合併的js檔
│  
├─── src/
│     └─── js/
│           │
│           └─── all.js     
│
├─── gulpfile.js          
├─── package-lock.json    
└─── package.json  
\`\`\`

-----------------------------------------------
5. 回到gulpfile.js添加任務清單
\`\`\`js
gulp.task('default', gulp.series('concat'));
\`\`\`

-----------------------------------------------
6. 最後，在終端機執行\`gulp\`即可完成任務
\`\`\`html
$ gulp
\`\`\``,__vite_glob_0_74=Object.freeze(Object.defineProperty({__proto__:null,default:_20230816Gulp_____js_________},Symbol.toStringTag,{value:"Module"})),_20230817Gulp_____________=`---
title: 【Gulp】開啟本地端伺服器瀏覽網站
date: 2023-08-17
tags: ["gulp"]
---
### browser-sync
1. 在專案中打開終端機安裝\`browser-sync\`、\`gulp-sass\`、\`sass\`套件(版本@1.62.0)
#
\`\`\`html
$ npm install browser-sync gulp-sass sass@1.62.0
\`\`\`

-----------------------------------------------
2. 在gulpfile.js新增程式碼
\`\`\`js
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

gulp.task('copyHTML', function(){ 
  return gulp
    .src('src/**/*.html') 
    .pipe(gulp.dest('dist')) 
    .pipe(browserSync.stream()); //更新到瀏覽器
});

gulp.task('sass', function(){
  return gulp
    .src('src/scss/*.*')
    .pipe(sass()
    .on('error',sass.logError))
    .pipe(gulp.dest('dist/css'));
    .pipe(browserSync.stream()); //更新到瀏覽器
});

gulp.task('watch', function(){
  browserSync.init({
    server: { 
      baseDir: 'dist', //指定伺服器的基本目錄
    },
  });
  gulp.watch('src/**/*.html', gulp.series('copyHTML'));
  gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
});
\`\`\`

-----------------------------------------------
3. 在終端機執行指令
\`\`\`html
$ gulp watch
\`\`\`

-----------------------------------------------
4. 執行結果會在dist複製出一個\`index.html\`，dist/css會生成\`all.css\`檔
\`\`\`
you project
├─── node_modules/        
├─── dist/
│     ├─── css/
│     │     │
│     │     └─── all.css
│     │
│     └─── index.html    
│ 
├─── src/
│     ├─── scss/
│     │     │
│     │     └─── all.scss
│     │
│     └─── index.html    
│
├─── gulpfile.js          
├─── package-lock.json    
└─── package.json   
\`\`\`

-----------------------------------------------
5. 回到gulpfile.js設定其他屬性
    * \`port\`: 數字，指定代理伺服器的埠號
    * \`reloadDelay\`: 數字，重新加載延遲時間
    * \`browser\`: 字串，指定在哪個瀏覽器中打開網站
    * \`open\`: 布林值，指定是否自動打開瀏覽器
\`\`\`js
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

gulp.task('copyHTML', function(){ 
  return gulp
    .src('src/*.html') 
    .pipe(gulp.dest('dist')) 
    .pipe(browserSync.stream()); 
});

gulp.task('sass', function(){
  return gulp
    .src('src/scss/**/*.*')
    .pipe(
      sass().on('error',sass.logError)
    )
    .pipe(gulp.dest('dist/css'));
    .pipe(browserSync.stream()); 
});

gulp.task('watch', function(){
  browserSync.init({
    server: {
      baseDir: 'dist',
    },
    port: 3000,
    reloadDelay: 0,
    browser: 'google chrome',
    open: true
  });
  gulp.watch('src/*.html', gulp.series('copyHTML'));
  gulp.watch('src/scss/**/*.*', gulp.series('sass'));
});

gulp.task('default', gulp.series('copyHTML','sass','watch'));
\`\`\`

-----------------------------------------------
6. 最後，在終端機執行\`gulp\`即可完成任務
\`\`\`html
$ gulp
\`\`\``,__vite_glob_0_75=Object.freeze(Object.defineProperty({__proto__:null,default:_20230817Gulp_____________},Symbol.toStringTag,{value:"Module"})),_20230818Gulp_____________=`---
title: 【Gulp】自動刪除上一次的編譯結果
date: 2023-08-18
tags: ["gulp"]
---
### del
1. 在專案中打開終端機安裝\`del\`套件(版本6.1.1)
\`\`\`html
$ npm install del@6.1.1
\`\`\`

-----------------------------------------------
2. 在gulpfile.js新增程式碼
\`\`\`js
const gulp = require('gulp');
const del = require('del');

gulp.task('clean', function(){ 
  return del(['dist/**/*','!dist/img']) //刪除dist裡的所有檔案，圖片除外
});

gulp.task('copyHTML', function(){ 
  return gulp
    .src('src/*.html') 
    .pipe(gulp.dest('dist'))
});
\`\`\`

-----------------------------------------------
3. 在終端機執行指令
\`\`\`html
$ gulp clean
\`\`\`

-----------------------------------------------
4. 執行後會先執行刪除動作後，再重新生成新的index.html
\`\`\`
you project
├─── node_modules/         
├─── dist/
│     │
│     └─── index.html   #刪除後再重新成的index.html
│ 
├─── src/
│     │
│     └─── index.html    
│
├─── gulpfile.js          
├─── package-lock.json    
└─── package.json   
\`\`\`

-----------------------------------------------
5. 回到gulpfile.js設定其他屬性
    * \`gitignore\`: 布林值，刪除時是否要保留版本控制的檔案
    * \`force\`: 布林值，檔案被其他程式佔用或是唯讀檔案是否強制刪除
\`\`\`js
const gulp = require('gulp');
const del = require('del');

gulp.task('clean', function(){ 
  return del(['dist/**/*','!dist/img'],{
    gitignore: true, //保留git版控檔案
    force: true //強制刪除唯獨檔
  })
    .src('src/*.html') 
    .pipe(gulp.dest('dist')) 
});

gulp.task('copyHTML', function(){ 
  return gulp
    .src('src/**/*.html') 
    .pipe(gulp.dest('dist'))
});

gulp.task('default', gulp.series('copyHTML','clean'));
\`\`\`

-----------------------------------------------
6. 最後，在終端機執行\`gulp\`即可完成任務
\`\`\`html
$ gulp
\`\`\``,__vite_glob_0_76=Object.freeze(Object.defineProperty({__proto__:null,default:_20230818Gulp_____________},Symbol.toStringTag,{value:"Module"})),_20230819Gulp________=`---
title: 【Gulp】壓縮圖片並優化
date: 2023-08-19
tags: ["gulp"]
---
### gulp-imagemin
1. 在專案中打開終端機安裝\`gulp-imagemin\`套件(版本@7.1.0)
\`\`\`html
$ npm install gulp-imagemin@7.1.0
\`\`\`

-----------------------------------------------
2. 在gulpfile.js新增程式碼
\`\`\`js
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('imagemin', function(){
  return gulp
    .src('src/images/**/*.*', { encoding: false })
    .pipe(imagemin()) //執行優化(壓縮)
    .pipe(gulp.dest('dist/img'));
});
\`\`\`
\`{ encoding: false }多增加這行，可以確保圖片不會被以編碼方式處理\`

-----------------------------------------------
3. 在終端機執行指令
\`\`\`html
$ gulp imagemin
\`\`\`

-----------------------------------------------
4. 執行後會自動壓縮img裡的圖片，到dist裡的img資料夾裡
\`\`\`html
you project
├─── node_modules/    
├─── dist/
│     └─── img/
│           │
│           └─── logo.svg     # 壓縮過的
│ 
├─── src/
│     └─── img/
│           │
│           └─── logo.svg     # 未壓縮過的
│
├─── gulpfile.js          
├─── package-lock.json    
└─── package.json   
\`\`\`

-----------------------------------------------
5. 回到gulpfile.js設定其他屬性
* \`imagemin-mozjpeg\`設定JPEG圖片
    * \`quality\`: 壓縮品質
        * \`0\`: 壓縮最大，品質最差
        * \`75\`: 預設值
        * \`100\`: 無壓縮，品質最好
    * \`progressive\`: 布林值，圖像在加載時會先顯示模糊的預覽，然後逐漸增加清晰度(預設值true)
* \`imagemin-optipng\`: 設定PNG圖片的
    * \`optimizationLevel\`: 優化級別
        * \`0\`: 沒有優化
        * \`1\`: 基本的優化，移除不必要的元數據
        * \`2\`: 輕微的優化，更進一步優化掃描線過濾和設置標誌(預設值)
        * \`3\`: 預設級別，包括輕微的壓縮，但不會影響圖片品質
        * \`4\`: 更進一步的壓縮和剝離
        * \`5\`: 更強的壓縮和剝離
        * \`6\`: 最強的壓縮，可能會稍微影響圖片品質
        * \`7\`: 最強的壓縮，可能會明顯影響圖片品質
* \`imagemin-gifsicle\`: 設定GIF圖片
    * \`interlaced\`: 布林值，先顯示大致輪廓，然後逐漸填充細節(預設值false)
* \`imagemin-svgo\`: 設定SVG圖片
    * \`plugins\`: 陣列，自訂應用的優化插件:
        * \`cleanupIDs\`: 布林值，用於控制是否清理SVG中的無用的ID(預設值true)
        * \`removeViewBox\`: 布林值，用於控制是否刪除SVG中的viewBox屬性(預設值true)
        * \`removeUselessStrokeAndFill\`: 布林值，用於刪除無用的stroke和fill屬性(預設值true)
        * \`removeDimensions\`: 布林值，用於刪除SVG中的width和height屬性(預設值false)
        * \`removeUselessDefs\`: 布林值，用於刪除SVG中無用的<defs>元素(預設值true)
        * \`convertColors\`: 布林值，用於嘗試將顏色值轉換為合適的CSS顏色名稱如果適用(預設值true)
\`\`\`js
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('imagemin', function(){
  return gulp
    .src('src/images/**/*.*', { encoding: false })
    .pipe(
      imagemin([
        imagemin.mozjpeg({
          quality: 80, //壓縮品質
        }),
        imagemin.optipng({
          optimizationLevel: 1 //優化級別
        }),
        imagemin.gifsicle({
          interlaced : true //漸進式渲染
        }),
        imagemin.gifsicle()
      ])
    )
    .pipe(gulp.dest('dist/img'));
});

gulp.task('default', gulp.series('imagemin'));
\`\`\`

-----------------------------------------------
7. 【補充】安裝\`gulp-newer\`套件：只針對新加入的檔案做動作
\`\`\`
$ npm install gulp-newer
\`\`\`
\`\`\`js
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');

gulp.task('imagemin', function(){
  return gulp
    .src('src/images/**/*.*', { encoding: false })
    .pipe(newer('dist/img')) //監控有新圖片時才會做處理
    .pipe(
      imagemin([
        imagemin.mozjpeg({
          quality: 80, 
        }),
        imagemin.optipng({
          optimizationLevel: 1 
        }),
        imagemin.gifsicle({
          interlaced : true
        }),
        imagemin.gifsicle()
      ])
    )
    .pipe(gulp.dest('dist/img'));
});

gulp.task('default', gulp.series('imagemin'));
\`\`\`

-----------------------------------------------
8. 最後，在終端機執行\`gulp\`即可完成任務
\`\`\`html
$ gulp
\`\`\``,__vite_glob_0_77=Object.freeze(Object.defineProperty({__proto__:null,default:_20230819Gulp________},Symbol.toStringTag,{value:"Module"})),_20230820GulpNunjucks____=`---
title: 【Gulp】nunjucks網頁模版
date: 2023-08-20
tags: ["gulp"]
---
### gulp-nunjucks-render
1. 在專案中打開終端機安裝\`gulp-nunjucks-render\`套件
\`\`\`html
$ npm install gulp-nunjucks-render
\`\`\`

-----------------------------------------------
2. 在gulpfile.js新增程式碼
\`\`\`js
const gulp = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');

gulp.task('layout',function(){
  return gulp
    .src('src/**/*.html')
    .pipe(nunjucksRender({
      path: ['src/templates']
    })) 
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
});
\`\`\`

-----------------------------------------------
3. 在終端機執行指令
\`\`\`html
$ gulp layout
\`\`\`

-----------------------------------------------
4. 執行後會自動壓縮img裡的圖片，到dist裡的img資料夾裡
\`\`\`html
you project
├─── node_modules/    
├─── dist/
│     └─── index.html        # 模板＋內容
│ 
├─── src/
│     ├─── templates/
│     │     │
│     │     └─── layout.njk  # 模板<head>、<body>
│     │
│     └─── index.html        # 內容<main>、<main>
│
├─── gulpfile.js
├─── package-lock.json
└─── package.json
\`\`\`

-----------------------------------------------
### nunjucks模板基礎用法1
#### 將重複標籤寫成模板
* layout.njk(父層)：
\`\`\`html
<!DOCTYPE html>
<html lang="zh-tw">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>網頁標題名稱</title>
  <link rel="stylesheet" href="css/all.css">
</head>
<body cz-shortcut-listen="true">
  <main>
    {% block content %}{% endblock %}
  </main>
  <script src="js/all.js"><\/script>
</body>
</html>
\`\`\`
* index.html(子層)：
\`\`\`html
{% extends "layout.njk" %}

{% block content %}
<div class="container">
  <p>每一頁不同的內容寫在這</p>
</div>
{% endblock %}
\`\`\`
* 渲染出的結果：
\`\`\`html
<!DOCTYPE html>
<html lang="zh-tw">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>網頁標題名稱</title>
  <link rel="stylesheet" href="css/all.css">
</head>
<body cz-shortcut-listen="true">
  <main>
    <div class="container">
      <p>每一頁不同的內容寫在這</p>
    </div>
  </main>
  <script src="js/all.js"><\/script>
</body>
</html>
\`\`\`

-----------------------------------------------
### 從模板寫回父層
* index.html(子層)
\`\`\`html
{% extends "layout.njk" %}

{% block content %}
<div class="container">
  每一頁不同的內容寫在這
</div>

{{ super() }}
寫回layout.njk(父層)的內容

{% endblock %}
\`\`\`

-----------------------------------------------
### 判斷式顯示
* layout.njk(父層)：
\`\`\`html
  {% if variable %}
  <p>如果是true就換出現這段</p>
  {% endif %}
\`\`\`
* index.html(子層)：
\`\`\`html
  {% set variable = true %}
\`\`\`
* 渲染出的結果：
\`\`\`html
  <p>如果是true就換出現這段</p>
\`\`\`

-----------------------------------------------
* extends用於模板繼承
\`\`\`html
<!-- layout.njk -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{% block title %}Default Title{% endblock %}</title>
</head>
<body>
    <div id="content">
        {% block content %}{% endblock %}
    </div>
</body>
</html>
\`\`\`
\`\`\`html
<!-- index.html -->
{% extends "layout.njk" %}

{% block content %}
撰寫的內容
{% endblock %}
\`\`\``,__vite_glob_0_78=Object.freeze(Object.defineProperty({__proto__:null,default:_20230820GulpNunjucks____},Symbol.toStringTag,{value:"Module"})),_20230821Gulp___gulp__final_=`---
title: 【Gulp】最終gulp完整final版
date: 2023-08-21
tags: ["gulp"]
---
### gulp-nunjucks-render
\`\`\`js
const gulp                 = require('gulp');
const sass                 = require('gulp-sass')(require('sass'));
const babel                = require('gulp-babel');
const plumber              = require('gulp-plumber');
const postcss              = require('gulp-postcss');
const autoprefixer         = require('autoprefixer');
const cssnano              = require('cssnano');
const postcssPresetEnv     = require('postcss-preset-env');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const sourcemaps           = require('gulp-sourcemaps');
const concat               = require('gulp-concat');
const browserSync          = require('browser-sync').create();
const del                  = require('del');
const imagemin             = require('gulp-imagemin');
const newer                = require('gulp-newer');
const nunjucksRender       = require('gulp-nunjucks-render');

function clean(){
    return del(['dist/**/*','!dist/img'],{
        gitignore: true,
        force: true
    })
        .src('src/*.html') 
        .pipe(gulp.dest('dist')) 
}

function layout(){
    return gulp
        .src('src/**/*.html')
        .pipe(nunjucksRender({
            path: ['src/templates']
        })) 
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream())
}

function sass(){
    return gulp
        .src('src/scss/*.*')
        .pipe(
            sass(
                outputStyle: 'compressed' //nested | expanded | compact | compressed
            ).on('error',sass.logError)
        )
        .pipe(
            postcss([
                postcssFlexbugsFixes(),
                postcssPresetEnv(),
                autoprefixer(),
                cssnano({
                    preset: "advanced"
                })
            ])
        )
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest(dist/css))
        .pipe(browserSync.stream())
}

function concat(){
    return gulp
        .src([
            'node_modules/jquery/dist/jquery.slim.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
            'src/js/*.js'
        ])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist/css'))
}

function babel(){
    return gulp
        .src('src/js/*.js')
        .pipe(plumber())
        .pipe(
            babel({
                presets: ['@babel/env'],
                minified: true
            })
        )
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream())
}

function imagemin(){
    return gulp
        .src('src/img/*')
        .src(newer('dist/img'))
        .pipe(
          imagemin([
            imagemin.mozjpeg({
              quality: 80,
            }),
            imagemin.optipng({
              optimizationLevel: 1
            }),
            imagemin.gifsicle({
              interlaced : true
            }),
            imagemin.gifsicle()
          ])
        )
        .pipe(gulp.dest('dist/img'))
}

function watch(){
    browserSync.init({
        server: { 
          baseDir: 'dist',
        },
        port: 3000,
        reloadDelay: 0,
        browser: 'google chrome',
        open: true
    });
    gulp.watch('src/**/*.html', gulp.series('copyHTML'));
    gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
}


exports.default = series('clean', 'copyHTML', 'sass', 'babel', 'imagemin', 'watch');
\`\`\``,__vite_glob_0_79=Object.freeze(Object.defineProperty({__proto__:null,default:_20230821Gulp___gulp__final_},Symbol.toStringTag,{value:"Module"})),_20240101CSS___________=`---
title: 【CSS】footer置底方法
date: 2024-01-01
tags: ["css"]
---
### 如何讓footer置底
\`\`\`css
html{
  height: 100%;
  overflow-x: hidden;
}

body{
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

footer{
  margin-top: auto;
}
\`\`\``,__vite_glob_0_80=Object.freeze(Object.defineProperty({__proto__:null,default:_20240101CSS___________},Symbol.toStringTag,{value:"Module"})),_20240102WebVScode_______=`---
title: 【Web】VScode技巧+實用套件
date: 2024-01-02
tags: ["css"]
---
### 快捷鍵用法
1. 快速移動程式碼：在程式碼上按住 option 鍵＋上下鍵
2. 快速跳躍字詞：按住 option 鍵＋左右鍵
3. 快速選取整行程式碼：在該程式碼行按住 command ＋ L
4. 開啟設定：command+“逗點”，若要進入 setting.json 檔點右上角 file 圖示
5. 在 JS 片段中使用 Emmet 輸入，進入 setting.json 加入以下程式碼:
\`\`\`json
{
  "emmet.includeLanguages": {
    "nunjucks": "html",
    "javascript": "javascriptreact",
    "vue-html": "html",
    "plaintext": "jade"
  },
  "emmet.triggerExpansionOnTab": true,
  "prettier.singleQuote": true,
  "editor.minimap.enabled": false
}
\`\`\`
6. 複製程式碼：只要游標在程式碼尾端 command ＋ C 即可複製
7. 設定縮排為“2 空格”，點擊 vscode 最底下的按鈕調整：
   * 第一步：先將縮排轉換為定位點
   * 第二步：使用空格進行縮排，調整為 2
8. 快速選取程式碼：
   * 第一步：進入設定搜尋"展開選取項目"
   * 第二步：設定快捷鍵“control ＋ shift ＋ →”
9. 快速重新命名標籤頭尾名：
   * 第一步：進入設定搜尋"重新命名符號"
   * 第二步：設定快捷鍵“control ＋ F”
10. 資料夾路徑重疊修改：進入“設定”，搜尋“Compact Folders”，取消勾選

-----------------------------------------------
### 實用的套件
1. Chinese Language Pack for Visua
   * 說明：讓 vscode 介面變成繁體中文
2. Live Server
   * 說明：能建立伺服器，在瀏覽器查看網頁
   * 用法：
     1. 對 html 檔右鍵“Open with Live Server”
     2. 點擊 vscode 最下方"Go Live"就可以每次編輯後存檔並自動刷新頁面
3. Atom Keymap
   * 說明：可快速編寫 JS、切換視窗
   * 用法：
     1. command ＋ 1,2,3 可快速切換視窗
     2. 在編寫 JS 片段時，輸入“log”＋ tab 鍵，可快速展開成"console.log"
4. Prettier - Code formatter
   * 說明：快速整理程式碼
   * 用法：
     1. option ＋ shift ＋Ｆ可快速整理程式碼
     2. 若要將雙引號改為單引號，進入 setting.json 輸入：
\`\`\`json
"prettier.singleQuote": true,
\`\`\`
5. Code Spell Checker
   * 說明：自動檢查英文拼字有無錯誤
   * 用法：安裝後，在編寫錯誤的英文單字底下，會自動顯示藍色波浪
6. indent-rainbow
   * 說明：讓code縮排呈現彩虹`,__vite_glob_0_81=Object.freeze(Object.defineProperty({__proto__:null,default:_20240102WebVScode_______},Symbol.toStringTag,{value:"Module"})),_20240103Mac________=`---
title: 【Mac】將檔案加密方法
date: 2024-01-03
tags: ["mac"]
---
### 將檔案加密方法
1. 打開終端機：command ＋空白，輸入 terminal，enter 開啟 app
2. 先輸入 cd，再把欲加密檔案直接拉進終端機，然後把資料名稱刪除(**要先在資料夾外層**)
3. 接著輸入:
\`\`\`
$ zip -er 資料夾名稱.zip 資料夾名稱
\`\`\`
範例：
\`\`\`
$ zip -er dist.zip dist
\`\`\`
4. 接著會出現”Enter password:“，設定密碼
5. enter 後出現“Verify password:”，再次輸入密碼
6. 完成後，該資料夾就會出現加密 zip 檔`,__vite_glob_0_82=Object.freeze(Object.defineProperty({__proto__:null,default:_20240103Mac________},Symbol.toStringTag,{value:"Module"})),_20240104WebChrome_______=`---
title: 【Web】Chrome網頁長截圖方法
date: 2024-01-04
tags: ["web"]
---
### Chrome 網頁長截圖方法
1. 打開 Chrome 到欲長截圖頁面，右鍵“檢查”，快捷鍵(option ＋ command ＋ I)
![圖片](/img/Chrome網頁長截圖方法/Chrome網頁長截圖方法-1.png)

-----------------------------------------------
2. 執行，快捷鍵(command ＋ shift ＋ P)
![圖片](/img/Chrome網頁長截圖方法/Chrome網頁長截圖方法-2.png)

-----------------------------------------------
3. 中文輸入“截圖”，英文輸入“capture full size screenshot”
![圖片](/img/Chrome網頁長截圖方法/Chrome網頁長截圖方法-3.png)`,__vite_glob_0_83=Object.freeze(Object.defineProperty({__proto__:null,default:_20240104WebChrome_______},Symbol.toStringTag,{value:"Module"})),_20240105Web___Devtools__api__=`---
title: 【Web】使用Devtools找出api資料
date: 2024-01-05
tags: ["web"]
---
### 使用Devtools找出api資料
1. 打開 Chrome 到欲找資料頁面，右鍵“檢查”，快捷鍵(option ＋ command ＋ I)
![圖片](/img/使用Devtools找出api資料/使用Devtools找出api資料-1.png)

-----------------------------------------------
2. 點擊網路“network”，並重新整理頁面
![圖片](/img/使用Devtools找出api資料/使用Devtools找出api資料-2.png)

-----------------------------------------------
3. 點擊“Fetch/XHR”(JSON、XML、HTML)，並查找看是哪一隻檔案，並預覽查看資料內容
![圖片](/img/使用Devtools找出api資料/使用Devtools找出api資料-3.png)`,__vite_glob_0_84=Object.freeze(Object.defineProperty({__proto__:null,default:_20240105Web___Devtools__api__},Symbol.toStringTag,{value:"Module"})),_20240106HTML______Google__=`---
title: 【HTML】在網頁嵌入Google地圖
date: 2024-01-06
tags: ["html"]
---
### Google map iframe設定
|屬性|說明|
|---|---|
|width|寬度|
|height|高度|
|src|來源網址|
|title|影片標題|
|frameborder|iframe邊框|
|allow|開啟youtube預設允許功能|
|allowfullscreen|允許全螢幕播放(有添加就有這項功能，移除就無這項功能)|`,__vite_glob_0_85=Object.freeze(Object.defineProperty({__proto__:null,default:_20240106HTML______Google__},Symbol.toStringTag,{value:"Module"})),_20240107HTML______Youtube__=`---
title: 【HTML】在網頁嵌入Youtube影片
date: 2024-01-07
tags: ["html"]
---
### 直接設定的屬性
|屬性|說明|
|---|---|
|width|寬度|
|height|高度|
|src|來源網址|
|title|影片標題|
|frameborder|iframe邊框|
|allow|開啟youtube預設允許功能|
|allowfullscreen|允許全螢幕播放(有添加就有這項功能，移除就無這項功能)|
#### 加在src後面的屬性，多個屬性以&符號隔開
|屬性|說明|
|---|---|
|start|從第幾秒開始，例：設300=從第5分鐘開始|
|autoplay|0=不自動播放(預設)；1=自動播放|
|control|0=顯示播放控制器；1=不顯示播放控制器(預設)|
|disablekb|0=停用鍵盤控制；1=啟用鍵盤控制(預設)|
|end|從第幾秒後停止|
|loop|0=不重複播放(預設)；1=重複播放|
|id|影片清單id|
|cc_load_policy|0=關閉字幕(預設)；1=開啟字幕|
|cc_lang_pref|字幕語系，zh=中文；en=英文|
|color|進度條顏色，red=紅色(預設)；white=白色|
|fs|0=隱藏全螢幕按鈕；1=顯示全螢幕按鈕(預設)|
|mute|0=有聲音(預設)；1=靜音|

\`若要設定自動播放，必須要設置成靜音mute=1\`
\`\`\`html
<iframe 
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/7KBicsXd9h8?start=10&autoplay=1&mute=0&fs=0" title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin">
</iframe>
\`\`\``,__vite_glob_0_86=Object.freeze(Object.defineProperty({__proto__:null,default:_20240107HTML______Youtube__},Symbol.toStringTag,{value:"Module"})),_20240108CSS_________=`---
title: 【CSS】載入網頁字體方法
date: 2024-01-08
tags: ["css"]
---
### 載入下載的字體
1. 下載字體檔(.ttf)，放在專案中的資料夾(fonts)
2. 在css樣式檔中寫以下程式碼：
\`\`\`css
/*Regular*/
@font-face {
    font-family: 'MantouSans';
    src: url('../fonts/MantouSans-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

/*Bold*/
@font-face {
    font-family: 'MantouSans';
    src: url('../fonts/MantouSans-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
}

/*Italic*/
@font-face {
    font-family: 'MantouSans';
    src: url('../fonts/MantouSans-Italic.ttf') format('truetype');
    font-weight: normal;
    font-style: italic;
}

/*Bold Italic*/
@font-face {
    font-family: 'MantouSans';
    src: url('../fonts/MantouSans-BoldItalic.ttf') format('truetype');
    font-weight: bold;
    font-style: italic;
}

p{
    font-family: 'MantouSans', Arial, sans-serif;
}
\`\`\`
\`檔案名稱：MantouSans-Regular，但只要寫MantouSans\`

-----------------------------------------------
### font-family說明
\`\`\`css
body{
    font-family: sans-serif; /*無襯線體*/
    font-family: serif; /*襯線體*/
    font-family: monospace; /*等寬體*/
    font-family: cursive; /*手寫體*/
    font-family: fantasy; /*幻想體*/

    font-family: 'MantouSans', Arial, sans-serif;
    /*font-family: 第一種字體, 第二種字體, "第三種字體", "通用字";}*/
    /*通用字一定會有，通常放在最末端*/
}
\`\`\`

-----------------------------------------------
### src說明
\`\`\`css
@font-face {
    font-family: 'Helvetica';
    src: url('../fonts/Helvetica.woff') format("woff") /*附檔名.woff*/
         url('../fonts/Helvetica.ttf') format("truetype") /*附檔名.ttf*/
         url('../fonts/Helvetica.eot') format("embedded-opentype") /*附檔名.eot*/
         local("Helvetica") /*抓取使用者電腦的字體，但必須要精確的對應字體名稱，通常不建議使用*/
}
\`\`\`

-----------------------------------------------
### 使google font引入方法
1. 到[Google Fonts](https://fonts.google.com/)網站
2. 找到想要的字體後，點擊“Get font”，再點擊“Get embed code”
3. link方法：直接寫在主要樣板中的head裡
\`\`\`html
<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
</head>
\`\`\`
4. import方法：在custom.scss檔中引入
\`\`\`scss
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
\`\`\``,__vite_glob_0_87=Object.freeze(Object.defineProperty({__proto__:null,default:_20240108CSS_________},Symbol.toStringTag,{value:"Module"})),_20240109JavaScript___________=`---
title: 【JS】提高效能延遲載入方法
date: 2024-01-09
tags: ["javaScript"]
---
### 使用lozad.js套件
1. 在\`<head>\`引入cdn
\`\`\`html
<head>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/lozad/dist/lozad.min.js"><\/script>
</head>
\`\`\`
2. 在標籤樣式\`class\`加上\`lozad\`，將\`src\`改成\`data-src\`
\`\`\`html
<img class="lozad" data-src="image.png" />
\`\`\`
3. 在js檔中：
\`\`\`js
const observer = lozad();
observer.observe();
\`\`\`

-----------------------------------------------
### script腳本載入async、defer
#### async
* 當瀏覽器遇到帶有async的\`<script>\`腳本會立即下載，並且在完成後立刻執行，同時不會中斷html渲染
* 若有多個async的\`<script>\`腳本，順序不會由上往下依序執行，是依檔案大小、下載速度決定
* 適合需要盡快執行，但不會影響渲染的腳本，同時下載可提高效能
* 例如：Google Analytics、Twitter、Facebook(分析、廣告、第三方追蹤)
\`\`\`html
<!--Google Analytics-->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"><\/script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'GA_TRACKING_ID');
<\/script>

<!--Twitter、Facebook-->
<script async defer src="https://platform.twitter.com/widgets.js"><\/script>

<!--廣告-->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"><\/script>
\`\`\`
#### defer
* 當瀏覽器遇到帶有defer的\`<script>\`會優先進行html渲染，同時異步下載，等待html渲染完成後才執行
* 若有多個defer的\`<script>\`腳本，會由上往下依序執行
* 適合需要解析後、不用立即執行的腳本
* 例如：初始化腳本、監聽事件、修改頁面上的內容、Bootstrap.js
\`\`\`html
<!--頁面初始化腳本-->
<script defer src="js/init.js"><\/script>

<!--事件綁定腳本-->
<script defer src="js/dom.js"><\/script>

<!--Bootstrap.js-->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous" defer><\/script>
\`\`\``,__vite_glob_0_88=Object.freeze(Object.defineProperty({__proto__:null,default:_20240109JavaScript___________},Symbol.toStringTag,{value:"Module"})),_20240110JavaScriptSkrollr______=`---
title: 【JS】Skrollr頁面滾動效果
date: 2024-01-10
tags: ["webpack"]
---
### 使用方式直接引入cdn
1. 直接將套件以\`cdn\`方式引入
\`\`\`js
<script src="https://cdnjs.cloudflare.com/ajax/libs/skrollr/0.6.30/skrollr.min.js"><\/script>
\`\`\`

-----------------------------------------------
2. 在\`js\`開始撰寫地方，初始化套件：
\`\`\`js
let s = skrollr.init();
\`\`\`
-----------------------------------------------
3. 在\`html\`的標籤上撰寫\`data\`範例：
![圖片](/img/skrollr頁面滾動效果/skrollr頁面滾動效果-1.png)

-----------------------------------------------
4. 撰寫方式：
![圖片](/img/skrollr頁面滾動效果/skrollr頁面滾動效果-2.png)

-----------------------------------------------
5. [更多用法可參考API](https://github.com/Prinzhorn/skrollr?tab=readme-ov-file)`,__vite_glob_0_89=Object.freeze(Object.defineProperty({__proto__:null,default:_20240110JavaScriptSkrollr______},Symbol.toStringTag,{value:"Module"})),_20240120JQuery__________=`---
title: 【jQuery】點擊事件+改變標籤
date: 2024-01-20
tags: ["jquery"]
---
### jQuery起手式
\`\`\`js
$(document).ready(function(){
    //在此處編寫執行的code
});
\`\`\`
\`function(參數){執行的動作}\`

-----------------------------------------------
### 改變標籤結構
\`\`\`html
<button type="button">按鈕</button>
<ul>
  <li>蘋果</li>
</ul>
\`\`\`
\`\`\`js
//替換蘋果
$("button").click(function(){
  $("ul").html('<li>香蕉</li>')
});

//加在<標籤>前面
$("button").click(function(){
  $("ul").prepend('<li>香蕉</li>')
});

//加在<標籤>後面
$("button").click(function(){
  $("ul").append('<li>香蕉</li>')
});
\`\`\`

-----------------------------------------------
### 改變標籤文字
\`\`\`html
<button type="button">按鈕</button>
<p>蘋果</p>
\`\`\`
\`\`\`js
//取代<標籤>裡的文字
$("button").click(function(){
  $("p").text('香蕉')
});

//直接在<標籤>前面加上文字
$("button").click(function(){
  $("p").before('香蕉')
});

//直接在<標籤>後面加上文字
$("button").click(function(){
  $("p").after('香蕉')
});
\`\`\`

-----------------------------------------------
### 改變標籤樣式
\`\`\`html
<button type="button">按鈕</button>
<p>蘋果</p>
\`\`\`
\`\`\`js
//一個樣式寫法
$("button").click(function(){
  $("p").css("backgroundColor","red")
});

//多個樣式寫法
$("button").click(function(){
  $("p").css({"backgroundColor":"red","fontSize":"24px"})
});

//使用.attr()方法
$("button").click(function(){
  $("p").attr("style","background-color:red");
});
\`\`\`

-----------------------------------------------
### 改變標籤屬性
* $(selector).attr(attribute,value)
  * attribute(必填):要抓取的屬性
  * attribute(選填):要給予的值，若不給值則為抓取
\`\`\`html
<button type="button">按鈕</button>
<p style="background-color:red">蘋果</p>
\`\`\`
\`\`\`js
$("button").click(function(){
  $("p").attr("style","background-color:blue");
});
\`\`\`

-----------------------------------------------
### 抓取a連結的網址
\`\`\`html
<button type="button">按鈕</button>
<a href="https://www.google.com.tw/">連結</a>
\`\`\`
\`\`\`js
$("button").click(function(){
  let link = $("a").attr("href");
  console.log(link); //https://www.google.com.tw/
});
\`\`\`

-----------------------------------------------
### 抓取input裡的值
\`\`\`html
<button type="button">按鈕</button>
<input type="text" value="蘋果">
\`\`\`
\`\`\`js
//使用.attr()方法
$("button").click(function(){
  let inputValue =  $("input").attr("value");
  console.log(inputValue); //蘋果
});

//使用.val()方法
$("button").click(function(){
  let inputValue =  $("input").val();
  console.log(inputValue); //蘋果
});
\`\`\`

-----------------------------------------------
### 抓取標籤data值
\`\`\`html
<button type="button">按鈕</button>
<p data-num="3">蘋果</p>
\`\`\`
\`\`\`js
//使用.data()方法
$("button").click(function(){
  let dataNum = $("p").data("num");
  console.log(dataNum); //3
});

//使用.attr()方法
$("button").click(function(){
  let dataNum = $("p").attr("data-num");
  console.log(dataNum); //3
});
\`\`\`

-----------------------------------------------
### 移除標籤
\`\`\`html
<button type="button">按鈕</button>
<ul>
  <li>蘋果</li>
</ul>
\`\`\`
\`\`\`js
//刪除整個<ul>
$("button").click(function(){
  $("ul").remove();
});

//刪除<ul>裡面的全部
$("button").click(function(){
  $("ul").empty();
});

//使用.html()方法，刪除<ul>裡面的全部
$("button").click(function(){
  $("ul").html();
});
\`\`\``,__vite_glob_0_90=Object.freeze(Object.defineProperty({__proto__:null,default:_20240120JQuery__________},Symbol.toStringTag,{value:"Module"})),_20240121JQuery___________=`---
title: 【jQuery】點擊事件+顯示或隱藏
date: 2024-01-21
tags: ["jquery"]
---
### 動態切換樣式語法表
|動畫方式|顯示|隱藏|自動切換|
|---|---|---|---|
|一般|.show()|.hide()|.toggle()|
|淡入淡出|.fadeIn()|.fadeOut|.fadeToggle()|
|滑入滑出|.slideUp()|.slideDown()|.slideToggle()|
|自訂樣式|.addClass()|.removeClass()|.toggleClass()|

\`.show(3000)，裡面可加入秒數(毫秒)\`

-----------------------------------------------
### 切換顯示或隱藏
\`\`\`html
<button type="button">按鈕</button>
<p>這段文字會隱藏</p>
\`\`\`
\`\`\`js
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
\`\`\`
\`原理：判斷元素上是否有style="display:block"\`

-----------------------------------------------
### 滑入滑出效果(slide)
\`\`\`html
<button type="button">按鈕</button>
<p>這段文字會切換顯示或隱藏</p>
\`\`\`
\`\`\`js
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
\`\`\`

-----------------------------------------------
### 切換淡入淡出效果(fade)
\`\`\`html
<button type="button">按鈕</button>
<p>這段文字會切換顯示或隱藏</p>
\`\`\`
\`\`\`js
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
\`\`\`

-----------------------------------------------
### 漸變淡出效果(fadeTo)
#### $(selector).fadeTo(speed, opacity, [easing], [callback]);
* speed(必選) 速度
* opacity(必選) 透明度
* easing(可選) 動畫加速方式
* callback(可選) function(){}
\`\`\`html
<button type="button">按鈕</button>
<p>這段文字會隱藏</p>
\`\`\`
\`\`\`js
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
\`\`\`

-----------------------------------------------
### 切換顯示或隱藏(class)
#### html:
\`\`\`html
<button type="button">按鈕</button>
<p>這段文字會切換紅底背景</p>
\`\`\`
\`\`\`css
.bg-red{
  background-color: red;
}
\`\`\`
\`\`\`js
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
\`\`\``,__vite_glob_0_91=Object.freeze(Object.defineProperty({__proto__:null,default:_20240121JQuery___________},Symbol.toStringTag,{value:"Module"})),_20240122JQuery__________=`---
title: 【jQuery】點擊事件+動態效果
date: 2024-01-22
tags: ["jquery"]
---
### animate用法介紹
* $(selector).animate(properties, duration, easing, callback);
  * properties(必填): {css樣式組}
  * duration(可選): 持續時間
  * easing(可選): 動畫加速方式
  * callback(可選): function(){}

-----------------------------------------------
### 動態樣式支援類型
|類型|css|
|---|---|
|支援的屬性|height、width、opacity、margin、padding、left、top、right、bottom、fontSize、borderWidth、scrollTop、scrollLeft|
|不支援的屬性|backgroundColor、color、borderColor、boxShadow、textShadow|

\`原本background-color要改用駝峰式寫法backgroundColor\`

-----------------------------------------------
### 動態改變樣式
\`\`\`js
//改變字體大小
$("button").click(function(){
  $("p").animate({fontSize:"3rem"},2000);
});

//推移距離與寬度
$("button").click(function(){
  $("p").animate({marginTop:"100px",width:"10px"},3000);
});

//接續其他動作用法
$("button").click(function(){
  $("p").animate({paddingLeft: "300px" }, 400, function() {
    console.log("動畫完成後執行此操作")
  });
});
\`\`\`

-----------------------------------------------
### 動態改變樣式(進階用法)
\`\`\`js
//一次執行多組動畫
$("button").click(function(){
  $("p").animate({fontSize:"3rem"},2000)
        .animate({paddingLeft: "50px" }, 600);
});

//一次執行多組動畫，中間延遲2秒
$("button").click(function(){
  $("p").animate({fontSize:"3rem"},2000)
        .delay(2000)
        .animate({paddingLeft: "50px" }, 600);
});
\`\`\`

-----------------------------------------------
### 動態改變背景顏色
#### 需要再額外引入jQuery.ui
\`\`\`js
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"><\/script>
\`\`\`
\`\`\`html
<button type="button">按鈕</button>
<p>這段文字會隱藏</p>
\`\`\`
\`\`\`js
$("button").click(function(){
  $("p").animate({backgroundColor:"red"},3000);
});
\`\`\`

-----------------------------------------------
### 延遲效果
\`\`\`js
$(".box").delay(0).slideDown();
$(".box").delay(1000).slideDown();
$(".box").delay(2000).show(0);
\`\`\`
\`show()若不給時間，會直接出現\`

-----------------------------------------------
### 停止動畫效果
* $(selector).stop(stopAll,goToEnd)
  * stopAll(布林值)
    * true: 停止下一個動作
    * false: 接續下一個動作
  * goToEnd(布林值)
    * true: 停止在一開始
    * false: 停止在最後狀態
\`\`\`js
$(".box").stop(false,true);
\`\`\``,__vite_glob_0_92=Object.freeze(Object.defineProperty({__proto__:null,default:_20240122JQuery__________},Symbol.toStringTag,{value:"Module"})),_20240123JQuery____________=`---
title: 【jQuery】點擊事件+抓取元素尺寸
date: 2024-01-23
tags: ["jquery"]
---
### 抓取元素高度(content-box)
|語法|說明|
|---|---|
|.height()|height|
|.innerHeight()|height + padding|
|.outerHeight()|height + padding+border|
|.outerHeight(true)|height + padding + border + margin|

\`先決條件是：box-sizing: content-box\`
\`\`\`html
<button type="button">按鈕</button>
<div class="box"></div>
\`\`\`
\`\`\`css
.box{
  width: 50px;
  height: 50px;
  border: solid 5px black;
  padding: 10px;
  margin: 25px;
  background-color: red;

  box-sizing: content-box; /* 引響關鍵 */
}
\`\`\`
\`\`\`js
//抓取元素高度
$("button").click(function(){
  let boxHeight = $(".box").height()
  console.log(boxHeight); //50
});

//抓取內部高度
$("button").click(function(){
  let boxHeight = $(".box").innerHeight()
  console.log(boxHeight); //50 + (上下padding:20px)  = 70
});


//抓取整體高度
$("button").click(function(){
  let boxHeight = $(".box").outerHeight()
  console.log(boxHeight); //50 + (上下padding:20px) + (上下border:10px) = 80
});

//抓取外部高度
$("button").click(function(){
  let boxHeight = $(".box").outerHeight(true)
  console.log(boxHeight); //50 + (上下padding:20px) + (上下border:10px) + (上下margin:50px) = 130
});
\`\`\`

-----------------------------------------------
### 抓取元素高度(border-box)
|語法|說明|
|---|---|
|.height()|height - border - padding|
|.innerHeight()|height - border|
|.outerHeight()|height|
|.outerHeight(true)|height + margin|

\`先決條件是：box-sizing: border-box\`
\`\`\`html
<button type="button">按鈕</button>
<div class="box"></div>
\`\`\`
\`\`\`css
.box{
  width: 50px;
  height: 50px;
  border: solid 5px black;
  padding: 10px;
  margin: 25px;
  background-color: red;

  box-sizing: border-box; /* 引響關鍵 */
}
\`\`\`
\`\`\`js
//抓取元素高度
$("button").click(function(){
  let boxHeight = $(".box").height()
  console.log(boxHeight); //50 - (上下border:10px) - (上下padding:20px) = 20
});

//抓取內部高度
$("button").click(function(){
  let boxHeight = $(".box").innerHeight()
  console.log(boxHeight); //50 - (上下border:10px)  = 40
});

//抓取整體高度
$("button").click(function(){
  let boxHeight = $(".box").outerHeight()
  console.log(boxHeight); //50
});

//抓取外部高度
$("button").click(function(){
  let boxHeight = $(".box").outerHeight(true)
  console.log(boxHeight); //50 + (上下margin) = 100
});
\`\`\``,__vite_glob_0_93=Object.freeze(Object.defineProperty({__proto__:null,default:_20240123JQuery____________},Symbol.toStringTag,{value:"Module"})),_20240124JQuery____________=`---
title: 【jQuery】點擊事件+抓取元素位置
date: 2024-01-24
tags: ["jquery"]
---
### 抓取元素位置(position)
\`\`\`html
<div class="wrap">
  <div class="content"></div>
</div>
<button type="button">按鈕</button>
\`\`\`
\`\`\`css
.wrap{
  width: 150px;
  height: 180px;
  padding: 30px;
  background-color: blue;
  .content{
    margin-top: 20px;
    width: 20px;
    height: 20px;
    background-color: red;
  }
}
\`\`\`
\`\`\`js
//抓取外層容器位置
$("button").click(function(){
  let wrapPos = $(".wrap").position();
  console.log(wrapPos); //{top:0 ,left:0}
});

//只抓取外層容器的上
$("button").click(function(){
  let wrapPos = $(".wrap").position().top;
  console.log(wrapPos); //0
});

//抓取內層容器位置
$("button").click(function(){
  let contentPos = $(".content").position();
  console.log(contentPos); //{top:30 ,left:30}
});
\`\`\`
\`內容被外層容器向內推移30px\`

-----------------------------------------------
### 抓取元素位置(offset)
\`\`\`html
<div class="wrap">
  <div class="content"></div>
</div>
<button type="button">按鈕</button>
\`\`\`
\`\`\`css
.wrap{
  width: 150px;
  height: 180px;
  padding: 30px;
  background-color: blue;
  .content{
    margin-top: 20px;
    width: 20px;
    height: 20px;
    background-color: red;
  }
}
\`\`\`
\`\`\`js
//抓取內層相對距離
$("button").click(function(){
  let wrapPos = $(".wrap").offset();
  console.log(wrapPos); //{top:0 ,left:0}
});

//抓取內層相對距離
$("button").click(function(){
  let contentPos = $(".content").offset();
  console.log(contentPos); //{top:50 ,left:30}
});
\`\`\`
\`內容被被外容器padding+本身margin的距離\`

-----------------------------------------------
### 抓取滾動時，視窗對上方距離多少
\`\`\`js
$(window).scroll(function() {
  let windowTop = $(window).scrollTop();
  console.log(windowTop);
});
\`\`\``,__vite_glob_0_94=Object.freeze(Object.defineProperty({__proto__:null,default:_20240124JQuery____________},Symbol.toStringTag,{value:"Module"})),_20240125JQuery_____________=`---
title: 【jQuery】點擊事件+依順序抓取元素
date: 2024-01-25
tags: ["jquery"]
---
### 直接點擊並作用自己
\`\`\`html
<ul>
  <li>蘋果</li>
  <li>香蕉</li>
  <li>鳳梨</li>
</ul>
\`\`\`
\`\`\`js
$("li").click(function(){
  $(this).css("background-color","red");
}); 
\`\`\`
\`只會對點擊的li進行作用，其他li則不影響\`

-----------------------------------------------
### 抓取「第一個」和「最後一個」元素
\`\`\`html
<button type="button">按鈕</button>
<ul>
  <li>蘋果</li>
  <li>香蕉</li>
  <li>鳳梨</li>
</ul>
\`\`\`
\`\`\`js
//抓取「第一個」蘋果
$("button").click(function(){
  $("li").first().css("background-color","red");
}); 

//抓取「最後一個」鳳梨
$("ul").click(function(){
  $("li").last().css("background-color","red");
});
\`\`\`
\`適合用在標籤都一樣的時候\`

-----------------------------------------------
### 抓取「下一個」和「上一個」元素
|語法|說明|
|---|---|
|.next()|指定下一個|
|.nextAll()|指定接下來的全部|
|.nextUntil()|指定到哪個元素為止(不包含括弧內的)|
\`\`\`html
<button type="button">按鈕</button>
<ul>
  <li class="apple">蘋果</li>
  <li class="banana">香蕉</li>
  <li class="pineapple">鳳梨</li>
  <li class="waxapple">蓮霧</li>
</ul>
\`\`\`
\`\`\`js
//抓取香蕉的「下一個」鳳梨
$("button").click(function(){
  $(".banana").next().css("background-color","red");
}); 

//抓取香蕉的「前一個」蘋果
$("button").click(function(){
  $(".banana").prev().css("background-color","red");
}); 

//抓取蘋果「之後的」全部
$("button").click(function(){
  $(".apple").nextAll().css("background-color","red");
}); 

//抓取鳳梨「之前的」全部
$("button").click(function(){
  $(".pineapple").prevAll().css("background-color","red");
}); 

//抓取從蓮霧到蘋果「之間的」全部
$("button").click(function(){
  $(".waxapple").prevUntil(".apple").css("background-color","red");
}); 

//抓取從香蕉到蓮霧「之間的」全部
$("button").click(function(){
  $(".banana").nextUntil(".waxapple").css("background-color","red");
}); 
\`\`\`

-----------------------------------------------
### 進階抓取不同順序元素
\`\`\`html
<button type="button">按鈕</button>
<ul>
  <li>蘋果</li>
  <li>香蕉</li>
  <li>鳳梨</li>
</ul>
<ul>
  <li>蓮霧</li>
  <li>榴槤</li>
  <li>酪梨</li>
</ul>
\`\`\`
\`\`\`js
//抓取蘋果
$("button").click(function(){
  let apple = $("ul li").first().text();
  console.log(firstLi); //蘋果
});

//抓取香蕉
$("button").click(function(){
  let banana = $("ul").eq(0).find("li").eq(1).text();
  console.log(banana); // 香蕉
});

//抓取蓮霧
$("button").click(function(){
  let waxApple = $("ul").eq(1).find("li").first().text(); 
  console.log(waxApple); //蓮霧
});

//抓取酪梨
$("button").click(function(){
  let avocado = $("ul").eq(1).find("li").last().text(); 
  console.log(avocado); //酪梨
});
\`\`\`
\`.eq(0)會抓取第一個\``,__vite_glob_0_95=Object.freeze(Object.defineProperty({__proto__:null,default:_20240125JQuery_____________},Symbol.toStringTag,{value:"Module"})),_20240126JQuery_____________=`---
title: 【jQuery】點擊事件+依層級抓取元素
date: 2024-01-26
tags: ["jquery"]
---
### 找父層元素(parent、parents)
|語法|說明|
|---|---|
|.parent()|抓取父層|
|.parents()|抓取父層以外的全部|
|.parentUntil()|抓取父層以外的元素(但不包含括弧內的)|
\`\`\`html
<nav>
  <ul>
    <li class="nav-item">
      <a class="nav-link" href="#">蘋果</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">香蕉</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">鳳梨</a>
    </li>
  </ul>
</nav>
\`\`\`
\`\`\`js
//點擊<a>連結，對外層<li>作用
$(".nav-link").click(function(){
  $(this).parent().css("background-color","red");
});

//點擊<a>連結，對外層<li>、<ul>、<nav>、<body>、<html>作用
$(".nav-link").click(function(){
  $(this).parents().css("background-color","red");
});

//點擊<a>連結，對外層<li><ul>都作用
$(".nav-link").click(function(){
  $(this).parentsUntil("nav").css("background-color","red");
});
\`\`\`
\`.parents()會包括body、html\`

-----------------------------------------------
### 找子層元素(children、find)
\`\`\`html
<nav>
  <ul>
    <li class="nav-item">
      <a class="nav-link" href="#">蘋果</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">香蕉</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">鳳梨</a>
    </li>
  </ul>
</nav>
\`\`\`
\`\`\`js
//點擊<a>對<ul>底下的所有<li>作用
$(".nav-link").click(function(){
  $("ul").children().css("background-color","red");
});

//點擊<a>對<ul>底下的所有<a>作用
$(".nav-link").click(function(){
  $("ul").find(".nav-link").css("background-color","red");
});
\`\`\`
\`.find()可以找到孫層，但.children()只能找到子層\`

-----------------------------------------------
### 找同層元素(siblings)
\`\`\`html
<nav>
  <ul>
    <li class="nav-item">
      <a class="nav-link" href="#">蘋果</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">香蕉</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">鳳梨</a>
    </li>
  </ul>
</nav>
\`\`\`
\`\`\`js
//抓取<li>同層的其他<li>
$(".nav-link").click(function(){
  $(".nav-item").siblings().css("background-color","red");
});
\`\`\`

-----------------------------------------------
### 只有被點擊的那一項有效果，再點其他的效果取消
\`\`\`html
<nav>
  <ul>
    <li class="nav-item">
      <a class="nav-link" href="#">蘋果</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">香蕉</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">鳳梨</a>
    </li>
  </ul>
</nav>
\`\`\`
\`\`\`js
$(".nav-link").click(function(){
  $(this).css("background-color","red")
        .parent() //找到<li>
        .siblings() //找到自己以外的<li>
        .children() //底下的<a>
        .css("background-color","transparent");
});
\`\`\``,__vite_glob_0_96=Object.freeze(Object.defineProperty({__proto__:null,default:_20240126JQuery_____________},Symbol.toStringTag,{value:"Module"})),_20240201JQuery_______=`---
title: 【jQuery】抓取鍵盤事件
date: 2024-02-01
tags: ["jquery"]
---
### 使用鍵盤事件來改變狀態
當我按鍵盤\`z\`鍵時，對應的\`ascii\`碼是\`90\`
\`\`\`html
<div class="box"></div>
\`\`\`
\`\`\`css
.box{
  width: 30px;
  height: 30px;
  background-color: #ccc;
}
\`\`\`
\`\`\`js
//按下鍵盤的那個剎那
$(window).keydown(function(event){
  if(event.which == 90){
    $('.box').css('background-color', 'red');
  }
});

//只會針對可以輸出文字符號的按鍵有效
$(window).keypress(function(event){
  if(event.which == 90){
    $('.box').css('background-color', 'green');
  }
});

//指放開鍵盤的那個剎那
$(window).keyup(function(event){
  if(event.which == 90){
    $('.box').css('background-color', 'blue');
  }
});
\`\`\`
\`event.which跟event.keyCode是一樣的，但是event.keyCode寫法較舊，event.which比較標準化\`

-----------------------------------------------
### ascii碼鍵盤對應表
|字母|鍵碼值|字母|鍵碼值|字母|鍵碼值|字母|鍵碼值|
|---|---|---|---|---|---|---|---|
| a | 97  | A | 65  | 1  | 49  | Enter | 13 |
| b | 98  | B | 66  | 2  | 50  | 倒退鍵 | 8 |
| c | 99  | C | 67  | 3  | 51  | Ctrl | 17 |
| d | 100 | D | 68  | 4  | 52  | Esc  | 27 |
| e | 101 | E | 69  | 5  | 53  | Delete | 46 |
| f | 102 | F | 70  | 6  | 54  | Alt | 18 |
| g | 103 | G | 71  | 7  | 55  | Tab | 9 |
| h | 104 | H | 72  | 8  | 56  | Shift | 16 |
| i | 105 | I | 73  | 9  | 57  | 空白鍵 | 32 |
| j | 106 | J | 74  | 0  | 48  | / | 191 |
| k | 107 | K | 75  | F1 | 112 | > | 190 |
| l | 108 | L | 76  | F2 | 113 | < | 189 |
| m | 109 | M | 77  | F3 | 114 | ' | 222 |
| n | 110 | N | 78  | F4 | 115 | ; | 186 |
| o | 111 | O | 79  | F5 | 116 | ] | 221 |
| p | 112 | P | 80  | F6 | 117 | [ | 219 |
| q | 113 | Q | 81  | F7 | 118 | = | 187 |
| r | 114 | R | 82  | F8 | 119 | - | 189 |
| s | 115 | S | 83  | F9 | 120 | \` | 192 |
| t | 116 | T | 84  | F10| 121 |  |  |
| u | 117 | U | 85  | F11| 122 |  |  |
| v | 118 | V | 86  | F12| 123 |  |  |
| w | 119 | W | 87  | 左鍵| 37 |  |  |
| x | 120 | X | 88  | 上鍵| 38 |  |  |
| y | 121 | Y | 89  | 右鍵| 39 |  |  |
| z | 122 | Z | 90  | 下鍵| 40 |  |  |

-----------------------------------------------
### 讓ascii碼轉回字母
\`\`\`html
<p>90</p>
\`\`\`
\`\`\`js
$("p").text(String.fromCharCode(90));
\`\`\`
#### 輸出結果：
\`\`\`html
<p>Z</p>
\`\`\``,__vite_glob_0_97=Object.freeze(Object.defineProperty({__proto__:null,default:_20240201JQuery_______},Symbol.toStringTag,{value:"Module"})),_20240202JQuery_______=`---
title: 【jQuery】抓取滑鼠事件
date: 2024-02-02
tags: ["jquery"]
---
### 滑鼠點擊事件
\`\`\`html
<button type="button">按鈕</button>
\`\`\`
\`\`\`js
//當滑鼠點擊一次時
$("button").click(function(){
  $(this).css("background-color","red");
});

//當滑鼠連續點擊兩時
$("button").dblclick(function(){
  $(this).css("background-color","red");
});

//當滑鼠點下去時
$("button").mousedown(function(){
  $(this).css("background-color","red");
});

//當滑鼠下去後又放開時
$("button").mouseup(function(){
  $(this).css("background-color","");
});
\`\`\`

-----------------------------------------------
### 滑鼠移入、移出事件
\`\`\`html
<button type="button">按鈕</button>
\`\`\`
\`\`\`js
//當滑鼠移入時
$("button").mouseenter(function(){
  $(this).css("background-color","red");
});

//當滑鼠離開時
$("button").mouseleave(function(){
  $(this).css("background-color","");
});

//當滑鼠移入和離開時
$("button").hover(
  function() {
    $(this).css("background-color", "red"); 
  },
  function() {
    $(this).css("background-color", ""); 
  }
);
\`\`\`

-----------------------------------------------
### 切換選單
\`\`\`html
<select>
  <option value="蘋果">蘋果</option>
  <option value="香蕉">香蕉</option>
  <option value="鳳梨">鳳梨</option>
</select>
<p></p>
\`\`\`
\`\`\`js
$("select").change(function(e){
  //<p>顯示選單的值
  $("p").text(e.target.value);
});
\`\`\`

-----------------------------------------------
### 輸入框事件
\`\`\`js
//焦點所在時
$("input").focus(function(){
  $(this).css("outline","solid 5px green");
});

//離開焦點
$("input").blur(function(){
  $(this).css("outline","solid 5px red");
});
\`\`\`

-----------------------------------------------
### 取得游標位置
\`\`\`js
$(document).mousemove(function(e){
  console.log(e.screenX); //距離 整個瀏覽器視窗 X軸
  console.log(e.screenY); //距離 整個瀏覽器視窗 Y軸
  console.log(e.pageX); //距離 整個html,body X軸
  console.log(e.pageY); //距離 整個html,body Y軸
  console.log(e.clientX); //距離 整個螢幕裝置 X軸
  console.log(e.clientY); //距離 整個螢幕裝置 Y軸
});
\`\`\`

-----------------------------------------------
### 用圖片替代游標樣式
\`\`\`html
<div class="cursor">
  <img src="images/mouseImg.png">
</div>
\`\`\`
\`\`\`css
html,body{
  cursor: none;
}
.cursor{
  position: fixed;
}
\`\`\`
\`\`\`js
$(document).mousemove(function(event){
  let x = event.clientX;
  let y = event.clientY;
  $(".cursor").css({
    left: x + "px",
    top: y +"px"
  })
});
\`\`\`

-----------------------------------------------
### 經過特定時間後執行
\`\`\`html
<p>五秒後可關閉廣告<button class="cross" style="display: none">Ｘ</button></p>
\`\`\`
\`\`\`js
setTimeout(function(){
  $(".cross").show();
},5000);
\`\`\`
\`setTimeout(動作,幾毫秒);\`

-----------------------------------------------
### 每經過特定時間後執行一次
\`\`\`html
<p>自動登出計時<span class="time">300</span></p>
\`\`\`
\`\`\`js
let nowTime = 300;
setInterval(function(){
  nowTime = nowTime - 1; 
  $(".time").text(nowTime);
},1000);
\`\`\`
\`setInterval(動作,幾毫秒);\`

-----------------------------------------------
### 倒數計時
\`\`\`html
<p>自動登出計時<span class="time">300</span></p>
\`\`\`
\`\`\`js
let nowTime = 300;
setInterval(function(){
  nowTime = nowTime - 1; 
  $(".time").text(nowTime);
},1000);
\`\`\`
\`setInterval(動作,幾毫秒);\`

-----------------------------------------------
### 暫停作用中效果
\`\`\`js
$("button").click(function(){
  $(".box").stop().sligeToggle(5000);
});
\`\`\`
\`若toggle在展開時點擊，會直接收合\`

-----------------------------------------------
### 取消預設行為事件
\`\`\`html
<a class="link" href="www.google.com">連結</a>
\`\`\`
\`\`\`js
$(".link").click(function(){
  event.preventDefault();//取消原本會連到google事件
});
\`\`\``,__vite_glob_0_98=Object.freeze(Object.defineProperty({__proto__:null,default:_20240202JQuery_______},Symbol.toStringTag,{value:"Module"})),_20240203JQuery_____=`---
title: 【jQuery】處理陣列
date: 2024-02-03
tags: ["jquery"]
---
### 陣列資料格式
\`\`\`js
let fruits = ["蘋果","香蕉","鳳梨","蓮霧"];
console.log(fruits[0]); //蘋果
console.log(fruits[1]); //香蕉
console.log(fruits[2]); //鳳梨
console.log(fruits[3]); //蓮霧
\`\`\`

-----------------------------------------------
### 將陣列資料塞進html
\`\`\`html
<ul></ul>
\`\`\`
\`\`\`js
let fruits = ["蘋果","香蕉","鳳梨","蓮霧"];

//單行式寫法
$("ul").append("<li>蘋果</li>");
$("ul").append("<li>香蕉</li>");
$("ul").append("<li>鳳梨</li>");
$("ul").append("<li>蓮霧</li>");

//for迴圈寫法
for(let i=0 ; i<fruits.length ; i++){
  $("ul").append("<li>"+ fruits[i] +"</li>");
}

//forEach寫法
fruits.forEach(function(fruit){
  $("ul").append("<li>" + fruit + "</li>")
});
\`\`\`
#### 編譯結果：
\`\`\`html
<ul>
  <li>蘋果</li>
  <li>香蕉</li>
  <li>鳳梨</li>
  <li>蓮霧</li>
</ul>
\`\`\`
\`for(從第幾個開始,到第幾個結束,每一次要間隔多少)\`

-----------------------------------------------
### 新增資料(push)
\`\`\`js
let fruits = ["蘋果","香蕉","鳳梨","蓮霧"];

fruits.push("榴槤");

console.log(fruits); //["蘋果","香蕉","鳳梨","蓮霧","榴槤"]
\`\`\`

-----------------------------------------------
### 新增資料2(push)
\`\`\`js
let fruits = ["蘋果","香蕉","鳳梨","蓮霧"];

fruits.push("榴槤","酪梨");

console.log(fruits); //["蘋果","香蕉","鳳梨","蓮霧","榴槤","酪梨"]
\`\`\``,__vite_glob_0_99=Object.freeze(Object.defineProperty({__proto__:null,default:_20240203JQuery_____},Symbol.toStringTag,{value:"Module"})),_20240204JQuery________=`---
title: 【jQuery】處理物件與陣列
date: 2024-02-04
tags: ["jquery"]
---
### 陣列資料格式
\`\`\`js
//陣列型式1
var menu = [];
menu[0] = "蘋果";
menu[1] = "香蕉";
menu[2] = "鳳梨";

//陣列型式2
var menu = ["蘋果","香蕉","鳳梨"];
\`\`\`

-----------------------------------------------
### 將陣列資料塞進html
\`\`\`html
<ul id="menu"></ul>
\`\`\`
\`\`\`js
var menu = ["蘋果","香蕉","鳳梨"];

//基礎寫法
$("#menu").append("<li>"+menu[0]+"</li>");
$("#menu").append("<li>"+menu[1]+"</li>");
$("#menu").append("<li>"+menu[2]+"</li>");

//for迴圈寫法
for(var i=0;i<3;i++){
  $("#menu").append("<li>"+menu[i]+"</li>");
}
\`\`\`
#### 編譯結果：
\`\`\`html
<ul id="menu">
  <li>蘋果</li>
  <li>香蕉</li>
  <li>鳳梨</li>
</ul>
\`\`\`
\`for(從第幾個開始,到第幾個結束,每一次要間隔多少)\`

-----------------------------------------------
### 物件資料格式
\`\`\`js
//物件型式1
var shop = {};
shop.name = "瑞春水果店";
shop.addr = "高雄市五甲路";
shop.phone = "07 1234567";

//物件型式2
var shop = {
  name: "瑞春水果店",
  addr: "高雄市五甲路",
  phone: "07 1234567"
}
\`\`\`

-----------------------------------------------
### 列印物件所有資料
\`\`\`html
<ul id="shop"></ul>
\`\`\`
\`\`\`js
var shop = {
  name: "瑞春水果店";
  addr: "高雄市五甲路";
  phone: "07 1234567";
  menu: ["蘋果","香蕉","鳳梨"];
}

$("#shop").append("<li>"+shop.name+"</li>");
$("#shop").append("<li>"+shop.addr+"</li>");
$("#shop").append("<li>"+shop.phone+"</li>");

//傳統寫法
var html_menu = "";
html_menu+= "<ul>";
for(var i=0 ; i<shop.menu.length ; i++){
  html_menu+= "<li>"+shop.menu[i]+"</li>";
}
html_menu+= "</ul>";
$("#shop").append("<li>商品菜單："+html_menu+"</li>");

//樣板字面值+map寫法
$("#shop").append(
  \`<li>商品菜單：<ul>\${shop.menu.map(item => \`<li>\${item}</li>\`).join('')}</ul></li>\`);
\`\`\``,__vite_glob_0_100=Object.freeze(Object.defineProperty({__proto__:null,default:_20240204JQuery________},Symbol.toStringTag,{value:"Module"})),_20240205JQuery____=`---
title: 【jQuery】判斷式
date: 2024-02-05
tags: ["jquery"]
---
### 多種判斷式
\`\`\`html
<ul class="menu">
  <li>蘋果</li>
  <li>香蕉</li>
  <li>鳳梨</li>
  <li>芭樂</li>
</ul>
<p>價錢：<span class="item-price"></span></p>
\`\`\`
\`\`\`js
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
\`\`\``,__vite_glob_0_101=Object.freeze(Object.defineProperty({__proto__:null,default:_20240205JQuery____},Symbol.toStringTag,{value:"Module"})),_20240206JQuery________=`---
title: 【jQuery】實作數量選擇器
date: 2024-02-06
tags: ["jquery"]
---
### 數量選擇器
\`\`\`html
<button type="button" class="reduce">－</button>
<span>0</span>
<button type="button" class="add">＋</button>
\`\`\`
\`\`\`js
//數量初始值
let num = 0;

$(".reduce").click(function(){
  //每次點擊數量-1，num = num - 1;
  num-=1;
  $("span").text(num);
});

$(".add").click(function(){
  //每次點擊數量+1，num = num + 1;
  num+=1;
  $("span").text(num);
});
\`\`\``,__vite_glob_0_102=Object.freeze(Object.defineProperty({__proto__:null,default:_20240206JQuery________},Symbol.toStringTag,{value:"Module"})),_20240207JQuery_____________=`---
title: 【jQuery】實作點擊錨點滑動至該區塊
date: 2024-02-07
tags: ["jquery"]
---
### 點擊錨點滑動至該區塊
\`\`\`html
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
\`\`\`
\`\`\`js
$(".nav-link").click(function(event){

  //阻止默認的錨點跳轉行為
  event.preventDefault();

  //抓取點擊連結的href
  let target = $(this).attr("href");

  $("html,body").animate({
    scrollTop: $(target).offset().top
  },600);

});
\`\`\``,__vite_glob_0_103=Object.freeze(Object.defineProperty({__proto__:null,default:_20240207JQuery_____________},Symbol.toStringTag,{value:"Module"})),_20240208JQuery___________=`---
title: 【jQuery】實作滾動頁面頁籤變換
date: 2024-02-08
tags: ["jquery"]
---
### 實作滾動頁面頁籤變換
\`\`\`html
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
\`\`\`
\`\`\`js
$(".nav-link").click(function(event){

  //阻止默認的錨點跳轉行為
  event.preventDefault();

  //抓取點擊連結的href
  let target = $(this).attr("href");

  $("html,body").animate({
    scrollTop: $(target).offset().top
  },600);

});
\`\`\``,__vite_glob_0_104=Object.freeze(Object.defineProperty({__proto__:null,default:_20240208JQuery___________},Symbol.toStringTag,{value:"Module"})),_20240209JQuery__JS_CSS______=`---
title: 【jQuery】用JS+CSS實作常用元件
date: 2024-02-09
tags: ["jquery"]
---
### 漢堡選單
\`\`\`html
<div class="header">
  <ul class="menu">
      <li><a href="#">選單一</a></li>
      <li><a href="#">選單二</a></li>
      <li><a href="#">選單三</a></li>
      <li><a href="#">選單四</a></li>
  </ul>
  <a class="menuicon" href="#">選單按鈕</a>
</div>
\`\`\`
\`\`\`css
.header{
  height: 80px;
}
.menu{
  float: right;
}
.menu li{
  float: left;
}
.menuicon{
  display: none;
}
.show{
    max-height: 600px; /*選單展開高度*/
}
@media (max-width:768px){
  .menu{
    max-height: 0px; /*選單關閉高度*/
    overflow: hidden; /*讓文字也隱藏*/
    position: absolute;
    top: 80px; /*從header下面開始出現*/
    left: 0; /*左右兩邊滿版*/
    right: 0; /*左右兩邊滿版*/
    z-index: 100;
    transition: max-height 2s; /*動態效果*/
  }
  .menu li{
    float: none;
  }
  .menuicon{
    display: block;
  }
  .show{
    max-height: 800px;
  }
}
\`\`\`
\`\`\`js
$(".menuicon").click(function(){
  e.preventDefault();
  $(".menu").toggleClass("show");
});
\`\`\`

-----------------------------------------------
### 側邊選單(Offcanvas)
1. 最外層容器max-width
2. 右側內容width給%寬度
3. 右側內容用margin-left向左推選單寬度
\`\`\`html
<a class="menuicon" href="#">選單按鈕</a>
<aside>
  <a class="close" href="#">X</a>
  <ul class="menu">
    <li><a href="#">選單一</a></li>
    <li><a href="#">選單二</a></li>
    <li><a href="#">選單三</a></li>
    <li><a href="#">選單四</a></li>
  </ul>
</aside>
\`\`\`
\`\`\`css
aside{
  position: absolute;
  width: 300px; /*固定寬，避免內容被壓縮*/
  top: 0;
  bottom: 0;
  transform: translate(-300px);
  transition: 1s;
}
.show{
  transform: translate(0px);
}
\`\`\`
\`\`\`js
$(".menuicon").click(function(){
  event.preventDefault();
  $("aside").addClass("show");
});
$(".close").click(function(){
  event.preventDefault();
  $("aside").removeClass("show");
});
\`\`\`

-----------------------------------------------
### 簡易QA選單效果
\`\`\`html
<ul class="menu">
  <li>項目一
      <a>連結一</a>
  </li>
  <li>項目二
      <a>連結二</a>
  </li>
  <li>項目三
      <a>連結三</a>
  </li>
</ul>
\`\`\`
\`\`\`css
a{
  display: none;
}
\`\`\`
\`\`\`js
$(".menu li").click(function(){
  $(this).find("a").slideToggle();
  $(this).siblings().find("a").slideUp();
});
\`\`\`
\`只有點擊的a連結展開，再次點擊收闔，其他連結也收闔\`

-----------------------------------------------
### 彈跳視窗(監聽事件)
\`\`\`html
<a>連結一</a>
<div class="box"></div>
\`\`\`
\`\`\`js
$("body").on("click","a",function(){//.on("觸發事件","選擇器")
  alert();
});
$(".box").html("<a>連結二</a>");
\`\`\`
\`.on()不論程式碼先後順序全部都可以監聽\`

-----------------------------------------------
### 刪除選單
\`\`\`html
<ul class="menu">
  <li>項目一<span>X</span></li>
  <li>項目二<span>X</span></li>
  <li>項目三<span>X</span></li>
</ul>
\`\`\`
\`\`\`js
$(".menu li span").click(function(){
  $(this).parent().remove();
});
\`\`\`
\`點擊X，刪除該項目\`

-----------------------------------------------
### 回到頂端
\`\`\`html
<a href="#">UP</a>
\`\`\`
\`\`\`css
a{
  position: fixed;
  right: 0;
  bottom: 0;
}
\`\`\`
\`\`\`js
$("a").click(function(){
  event.preventDefault();
  $("html,body").animate({//對整個頁面
    scrollTop:0 
  },800);//花0.8秒
});
\`\`\`

-----------------------------------------------
### 滾動至錨點
\`\`\`html
<ul class="menu">
  <li><a href="#one">連結一</a></li>
  <li><a href="#two">連結二</a></li>
  <li><a href="#three">連結三</a></li>
</ul>
<section id="one">第一部分</section>
<section id="two">第二部分</section>
<section id="three">第三部分</section>
\`\`\`
\`\`\`js
$("a").click(function(e){
    e.preventDefault();
    var target = $(this).attr("href"); //找出a連結對應到的id
    var targetPos = $(target).offset().top; //該id當前視窗的相對頂部
    $("html,body").animate({scrollTop:targetPos},3000);
});
\`\`\`
\`<a href="先對應到">，<section id="這裡">\`

-----------------------------------------------
### 滾動視窗到章節處出現效果
\`\`\`html
<section id="one" data-color="yellow">第一部分</section>
<section id="two" data-color="green">第二部分</section>
<section id="three" data-color="blue">第三部分</section>
\`\`\`
\`\`\`css
section{
  height: 1000px;
  transition: 1s;
  background-color: red;
}
\`\`\`
\`\`\`js
$(window).scroll(function(){
  var twoPos = $("#two").position().top; //抓取第二部分的高度
  var scrollTop = $(window).scrollTop(); //抓取視窗滾動的距離
  var windowHeight = $(window).height(); //抓取視窗的高度
  if (twoPos <= (scrollTop + windowHeight / 2 )){
    $("section").each(function(){ //同時抓取每個section
      var dataColor = $(this).data("color"); //讀出每個裡面的data值
      $(this).css("background-color",dataColor); //將data值顯示在樣式上
    })
  }
});
\`\`\`

-----------------------------------------------
### 滾動視窗到章節處出現淡入效果
\`\`\`html
<section id="one">第一部分</section>
<section id="two">第二部分
  <div class="box animated"></div>
</section>
<section id="three">第三部分</section>
\`\`\`
\`\`\`css
section{
  height: 1000px;
}
.box{
  width: 30px;
  height: 30px;
  background-color: red;
}
.animated{
  opacity: 0;
  transform: translateY(50px);
  transition: all 2s;
}
.fadeIn{
  opacity: 1;
  transform: translateY(0px);
}
\`\`\`
\`\`\`js
$(window).scroll(function(){
  $(".animated").each(function(){
    var thisPos = $(this).offset().top;
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    console.log(thisPos)
    if((windowHeight + scrollTop) >= thisPos){
      $(this).addClass("fadeIn");
    }
  })
});
\`\`\`

-----------------------------------------------
### 滾動背景錯動
\`\`\`html
<section id="one">第一部分</section>
<section id="two">第二部分</section>
<section id="three">第三部分</section>
\`\`\`
\`\`\`css
#two{
  height: 1000px;
  background-image: url("https://picsum.photos/1000/1000.jpg")
}
#three{
  height: 1000px;
  background-image: url("https://picsum.photos/1000/1000.jpg")
}
\`\`\`
\`\`\`js
$(window).scroll(function(){
  var scrollTop = $(window).scrollTop();
  $("#two").css('background-position-y', (scrollTop / 2) + 'px');
  $("#three").css('transform','translateY(' + (scrollTop / 2) + 'px)');
});
\`\`\``,__vite_glob_0_105=Object.freeze(Object.defineProperty({__proto__:null,default:_20240209JQuery__JS_CSS______},Symbol.toStringTag,{value:"Module"})),_20240301JQuery_______=`---
title: 【jQuery】加入聲音效果
date: 2024-03-01
tags: ["jquery"]
---
### 音樂播放按鈕
\`\`\`html
<button type="button" id="btn-play">點擊播放音樂</button>
\`\`\`
\`\`\`js
var button_audio = new Audio("網址");

$("#btn-play").click(function(){
  button_audio.play();
});
\`\`\``,__vite_glob_0_106=Object.freeze(Object.defineProperty({__proto__:null,default:_20240301JQuery_______},Symbol.toStringTag,{value:"Module"})),_20240401WebIphone______=`---
title: 【Web】iphone歷代手機尺寸
date: 2024-04-01
tags: ["web"]
---
### iphone歷代手機尺寸
|機型|尺寸in|PPI|縱橫比|寬x高dp|寬x高px|密度dpi|
|---|---|---|---|---|---|---|
|iPhone15ProMax|6.7|460|19:9|430x932|1290x2796|3.0xxhdpi|
|iPhone15Pro|6.1|460|19:9|393x852|1179x2556|3.0xxhdpi|
|iPhone15Plus|6.7|460|19:9|430x932|1290x2796|3.0xxhdpi|
|iPhone15|6.1|460|19:9|393x852|1179x2556|3.0xxhdpi|
|iPhone14ProMax|6.7|460|19:9|430x932|1290x2796|3.0xxhdpi|
|iPhone14Pro|6.1|460|19:9|393x852|1179x2556|3.0xxhdpi|
|iPhone14Plus|6.7|458|19:9|428x926|1284x2778|3.0xxhdpi|
|iPhone14|6.1|460|19:9|390x844|1170x2532|3.0xxhdpi|
|iPhoneSE3|4.7|326|16:9|375x667|750x1334|2.0xhdpi|
|iPhone13ProMax|6.7|458|19:9|428x926|1284x2778|3.0xxhdpi|
|iPhone13Pro|6.1|460|19:9|390x844|1170x2532|3.0xxhdpi|
|iPhone13|6.1|460|19:9|390x844|1170x2532|3.0xxhdpi|
|iPhone13mini|5.4|476|19:9|360x780|1080x2340|3.0xxhdpi|
|iPhone12ProMax|6.7|458|19:9|428x926|1284x2778|3.0xxhdpi|
|iPhone12Pro|6.1|460|19:9|390x844|1170x2532|3.0xxhdpi|
|iPhone12|6.1|460|19:9|390x844|1170x2532|3.0xxhdpi|
|iPhone12mini|5.4|476|19:9|360x780|1080x2340|3.0xxhdpi|
|iPhoneSE2|4.7|326|16:9|375x667|750x1334|2.0xhdpi|
|iPhone11Pro|5.8|458|19:9|375x812|1125x2436|3.0xxhdpi|
|iPhone11ProMax|6.5|458|19:9|414x896|1242x2688|3.0xxhdpi|
|iPhone11|6.1|326|19:9|414x896|828x1792|2.0xhdpi|
|iPhoneXSMax|6.5|458|19:9|414x896|1242x2688|3.0xxhdpi|
|iPhoneX(X,XS)|5.8|458|19:9|375x812|1125x2436|3.0xxhdpi|
|iPhone8+(8+,7+,6S+,6+)|5.5|401|16:9|414x736|1242x2208|3.0xxhdpi|
|iPhone8(8,7,6S,6)|4.7|326|16:9|375x667|750x1334|2.0xhdpi|
|iPhoneSE(SE,5S,5C)|4.0|326|16:9|320x568|640x1136|2.0xhdpi|`,__vite_glob_0_107=Object.freeze(Object.defineProperty({__proto__:null,default:_20240401WebIphone______},Symbol.toStringTag,{value:"Module"})),_20240430Web___nvm___node__=`---
title: 【Web】利用nvm來控制node版本
date: 2024-04-30
tags: ["web"]
---
### 安裝nvm
\`\`\`
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
\`\`\`
|指令|一般|縮寫|
|---|---|---|
|安裝最新穩定版node|nvm install node|nvm i node|
|安裝指定版本node|nvm install 18.20.4|nvm i 18.20.4|
|使令指定node版本|nvm use 18.20.4||
|查看已安裝的node清單|nvm list|nvm ls|
|列出可安裝的nodeLTS版本|nvm ls-remote --lts||
|設定node預設使用版本|nvm alias default 18.20.4||
|移除已安裝版本|nvm uninstall 18.20.4|nvm uni 18.20.4|`,__vite_glob_0_108=Object.freeze(Object.defineProperty({__proto__:null,default:_20240430Web___nvm___node__},Symbol.toStringTag,{value:"Module"})),_20240501Webpack_____________=`---
title: 【Webpack】基本環境建置並渲染出畫面
date: 2024-05-01
tags: ["webpack"]
---
### Webpack5 初步環境建置
#### 1.安裝node.js
1. \`node.js\`版本建議要18以上(可以使用nvm版本控制)
* 查看已安裝的\`node.js\`版本
\`\`\`
$ nvm ls
\`\`\`
* 查看\`node.js\`有哪些LTS版本(較穩定)
\`\`\`
$ nvm ls-remote --lts
\`\`\`
* 安裝\`node.js\`版本18.20.4
\`\`\`
$ nvm i 18.20.4
\`\`\`
* 使用\`node.js\`版本18.20.4
\`\`\`
$ nvm use 18.20.4
\`\`\`

-----------------------------------------------
#### 2.手動建立資料夾
1. 快速建立\`package.json\`，輸入：
\`\`\`
$ npm init -y
\`\`\`
2. 安裝\`webpack\`基本套件：
    * \`webpack\`是主要核心
    * \`webpack-cli\`是webpack工具包
    * \`webpack-dev-server\`是執行環境工具
\`\`\`
$ npm i webpack webpack-cli webpack-dev-server -D
\`\`\`
3. 補充說明：\`-D\` 是 \`--save-dev\`的縮寫
    * 沒有加-D的套件會安裝在package.json的"dependencies"底下，表示生產環境和開發環境都會使用到，例：bootstrap。
    * 有加-D的套件會安裝在package.json的放在"devDependencies"底下，表示開發期間的工具和插件，在生產環境下不需要運行，例：webpack-cli。
\`\`\`
you project
├─── node_modules/        
└─── package.json   
\`\`\`

-----------------------------------------------
#### 3.在package.json設置：
\`\`\`json
{
  "scripts":{
      "start": "webpack --mode development", //開發模式
      "build": "webpack --mode production", //生產模式
      "dev": "webpack serve --mode development --open" //渲染模式＋自動打開瀏覽器
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "webpack": "^5.95.0",
    "webpack-cli": "^5.1.4",
    "webpack-dev-server": "^5.1.0"
  }
}
\`\`\`
\`--mode development 是開發模式：編譯完成的程式碼不會壓縮檔案較大\`

\`--mode production 是生產模式：編譯完成的程式碼會自動壓縮檔案較小\`

\`webpack serve 利用暫存空間渲染畫面在伺服器\`

-----------------------------------------------
#### 4.手動建立檔案：
1. 建立\`webpack.config.js\`檔：
\`\`\`js
const path = require('path');

module.exports = {
    entry: './src/js/main.js', //進入點
    output: {
        path: path.resolve(__dirname,'dist'), //設置輸出檔案位置(絕對路徑)
        filename: './js/main.js', //輸出檔案名稱
        clean: true, //是否自動刪除舊檔案
    }
}
\`\`\`
\`entry可用物件方式傳多一次設置多個進入點\`

2. 在進入點位置手動新增\`main.js\`檔，然後在裡面寫：
\`\`\`js
console.log('Hello World!!')
\`\`\`
\`\`\`
you project
├─── node_modules/        
├─── src/
│     │
│     └─── js/ 
│           │
│           └── main.js
│ 
├─── package.json
└─── webpack.config.js   
\`\`\`

-----------------------------------------------
#### 5.執行專案：
1. 在終端機執行，就可以自動生成\`dist\`以及\`js/main.js\`檔：
\`\`\`
$ npm run start
\`\`\`
\`\`\`
you project
├─── dist/
│     │
│     └─── js/ 
│           │
│           └── main.js
│  
├─── node_modules/        
├─── src/
│     │
│     └─── js/ 
│           │
│           └── main.js
│ 
├─── package.json
└─── webpack.config.js   
\`\`\`

-----------------------------------------------
#### 6.建立index.html：
1. 安裝\`html-webpack-plugin\`：
\`\`\`
$ npm i html-webpack-plugin -D
\`\`\`
2. 在\`src\`資料夾底下新增\`index.html\`，並簡單就夠基本html樣板：
\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
\`\`\`
3. 在\`webpack.config.js\`檔案新增：
\`\`\`js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //引入套件

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: './js/main.js',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html', //定義index.html路徑
        })
    ]
}
\`\`\`
\`\`\`
you project
├─── dist/
│     │
│     └─── js/ 
│           │
│           └── main.js
│  
├─── node_modules/        
├─── src/
│     │
│     ├─── index.html 
│     │
│     └─── js/ 
│           │
│           └── main.js
│ 
├─── package.json
└─── webpack.config.js   
\`\`\`

-----------------------------------------------
#### 7.再次編譯最終成果：
1. 在終端機輸入：
\`\`\`
$ npm run start
\`\`\`
2. 接著再輸入：
\`\`\`
$npm run dev
\`\`\`
3. 最後就能看到資料夾結構如下：
\`\`\`
you project
├─── dist/
│     │
│     ├─── index.html 
│     │
│     └─── js/ 
│           │
│           └── main.js
│  
├─── node_modules/        
├─── src/
│     │
│     ├─── index.html 
│     │
│     └─── js/ 
│           │
│           └── main.js
│ 
├─── package.json
└─── webpack.config.js   
\`\`\``,__vite_glob_0_109=Object.freeze(Object.defineProperty({__proto__:null,default:_20240501Webpack_____________},Symbol.toStringTag,{value:"Module"})),_20240502Webpack___SCSS______Bootstrap=`---
title: 【Webpack】編譯SCSS並優化+導入Bootstrap
date: 2024-05-02
tags: ["webpack"]
---
### 編譯css
1. 安裝套件\`style-loader\`和\`css-loader\`套件
\`\`\`
$ npm i style-loader css-loader -D
\`\`\`
2. 在\`src\`資料夾底下手動建立\`css/style.css\`檔案，並在裡面寫一些樣式：
\`\`\`css
body{
    background-color: red;
}

::placeholder{
    display: flex;
    flex: 1 1 auto;
    transform: translateX(-30px);
}
\`\`\`
\`\`\`
you project
├─── dist/
│     │
│     ├─── index.html 
│     │
│     └─── js/ 
│           │
│           └── main.js
│  
├─── node_modules/        
├─── src/
│     │
│     ├─── index.html 
│     │
│     ├─── js/ 
│     │     │
│     │     └── main.js
│     │
│     └─── css/ 
│           │
│           └── style.css
│ 
├─── package.json
└─── webpack.config.js   
\`\`\`
3. 在\`webpack.config.js\`新增：
\`\`\`js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/main.js', //進入點
    output: {
        path: path.resolve(__dirname,'dist'), //設置輸出檔案位置(絕對路徑)
        filename: './js/main.js', //輸出檔案名稱
        clean: true, //是否自動刪除舊檔案
    },
    module: {
        rules: [
            {
                test: /\\.css$/,
                use: [
                    'style-loader', //後執行，將css以<style>方式直接引入html
                    'css-loader' //先執行，解析並壓縮代碼
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        })
    ]
}
\`\`\`
\`在loader裡的執行序是由下往上\`

4. 在\`main.js\`裡新增：
\`\`\`js
import '../css/style.css'
\`\`\`
5. 在終端機執行： 
\`\`\`
$ npm run start
\`\`\`
\`\`\`
you project
├─── dist/
│     │
│     ├─── js/ 
│     │     │
│     │     └── main.js
│     │
│     └─── css/ 
│           │
│           └── style.css
│  
├─── node_modules/        
├─── src/
│     │
│     ├─── js/ 
│     │     │
│     │     └── main.js
│     │
│     └─── css/ 
│           │
│           └── style.css
│ 
├─── package.json
└─── webpack.config.js   
\`\`\`

-----------------------------------------------
### 將css以獨立方式帶入html
1. 安裝\`mini-css-extract-plugin\`套件
\`\`\`
$ npm i mini-css-extract-plugin -D
\`\`\`
2. 在\`webpack.config.js\`新增：
\`\`\`js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //引入套件

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: './js/main.js', 
        clean: true, 
    },
    module: {
        rules: [
            {
                test: /\\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, //將原本style-loader替換掉，改用<link>方式引入html
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'css/style.css' //定義要輸出的名稱
        })
    ]
}
\`\`\`
3. 在終端機執行： 
\`\`\`
$ npm run start
\`\`\`

-----------------------------------------------
### 編譯scss檔案並將樣式帶入html
1. 安裝\`sass\`、\`sass-loader\`、\`postcss\`、\`postcss-loader\`、\`postcss-preset-env\`、
\`\`\`
$ npm i sass sass-loader postcss postcss-loader postcss-preset-env -D
\`\`\`
2. 在\`webpack.config.js\`新增：
\`\`\`js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: './js/main.js', 
        clean: true, 
    },
    module: {
        rules: [
            {
                test: /\\.scss$/, //將原本css替換掉，改成scss檔
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader', //使用postcss套件
                        options: {
                            postcssOptions:{
                                plugins:[
                                    ['postcss-preset-env'] //包含autoprefixer
                                ]
                            }
                        }
                    },
                    'sass-loader' //先編譯scss
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'css/style.css' //定義要輸出的名稱
        })
    ]
}
\`\`\`
3. 建立\`scss\`資料夾結構，並在裡面新增\`style.scss\`檔，簡單寫一些樣式：
\`\`\`scss
body{
    background-color: red;
}

::placeholder{
    display: flex;
    flex: 1 1 auto;
    transform: translateX(-30px);
}
\`\`\`
4. 修改\`main.js\`裡的樣式路徑：
\`\`\`js
import '../scss/style.scss'
\`\`\`
5. 在終端機執行：
\`\`\`
$ npm run start
\`\`\`
\`\`\`
you project
├─── dist/
│     │
│     ├─── js/ 
│     │     │
│     │     └── main.js
│     │
│     └─── css/ 
│           │
│           └── style.css
│  
├─── node_modules/        
├─── src/
│     │
│     ├─── js/ 
│     │     │
│     │     └── main.js
│     │
│     └─── scss/ 
│           │
│           └── style.scss
│ 
├─── package.json
└─── webpack.config.js   
\`\`\`
6. 可以看到在\`dist\`裡的\`style.css樣式自動增加前綴
\`\`\`css
body {
  background-color: red;
}

/* 這段是自動增加的 */
::-moz-placeholder { 
  display: flex;
  flex: 1 1 auto;
  transform: translateX(-30px);
}

::placeholder {
  display: flex;
  flex: 1 1 auto;
  transform: translateX(-30px);
}
\`\`\`

-----------------------------------------------
### 若要使用bootstrap(5.3.3)
1. 安裝\`bootstrap\`套件:
    * \`bootstrap\`是css樣板套件
    * \`@popperjs/core\`是bootstrap定位套件
\`\`\`
$ npm i bootstrap @popperjs/core
\`\`\`
2. 快速取用\`bootstrap\`方法，是直接在\`main.js\`引入：
\`\`\`js
import '../../node_modules/bootstrap/scss/bootstrap.scss'; //bootstrap核心
import '../scss/style.scss'; //自定義樣式
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'; //bootstrap定位套件
\`\`\`
3. 自訂\`bootstrap\`方法，在scss裡的\`style.scss\`引入：
\`\`\`scss
//bootstrap
@import "../../node_modules/bootstrap/scss/functions";

//自訂義變數
@import "custom-variables"; //從bootstrap/scss/variables複製過來到本地端修改(切記要刪掉最後的import以免出跳錯)

//bootstrap
@import "../../node_modules/bootstrap/scss/variables";
@import "../../node_modules/bootstrap/scss/variables-dark";
@import "../../node_modules/bootstrap/scss/maps";
@import "../../node_modules/bootstrap/scss/mixins";
@import "../../node_modules/bootstrap/scss/utilities";
@import "../../node_modules/bootstrap/scss/root";
@import "../../node_modules/bootstrap/scss/reboot";
@import "../../node_modules/bootstrap/scss/type";
@import "../../node_modules/bootstrap/scss/images";
@import "../../node_modules/bootstrap/scss/containers";
@import "../../node_modules/bootstrap/scss/grid";
@import "../../node_modules/bootstrap/scss/tables";
@import "../../node_modules/bootstrap/scss/forms";
@import "../../node_modules/bootstrap/scss/buttons";
@import "../../node_modules/bootstrap/scss/transitions";
@import "../../node_modules/bootstrap/scss/dropdown";
@import "../../node_modules/bootstrap/scss/button-group";
@import "../../node_modules/bootstrap/scss/nav";
@import "../../node_modules/bootstrap/scss/navbar";
@import "../../node_modules/bootstrap/scss/card";
@import "../../node_modules/bootstrap/scss/accordion";
@import "../../node_modules/bootstrap/scss/breadcrumb";
@import "../../node_modules/bootstrap/scss/pagination";
@import "../../node_modules/bootstrap/scss/badge";
@import "../../node_modules/bootstrap/scss/alert";
@import "../../node_modules/bootstrap/scss/progress";
@import "../../node_modules/bootstrap/scss/list-group";
@import "../../node_modules/bootstrap/scss/close";
@import "../../node_modules/bootstrap/scss/toasts";
@import "../../node_modules/bootstrap/scss/modal";
@import "../../node_modules/bootstrap/scss/tooltip";
@import "../../node_modules/bootstrap/scss/popover";
@import "../../node_modules/bootstrap/scss/carousel";
@import "../../node_modules/bootstrap/scss/spinners";
@import "../../node_modules/bootstrap/scss/offcanvas";
@import "../../node_modules/bootstrap/scss/placeholders";
@import "../../node_modules/bootstrap/scss/helpers";
@import "../../node_modules/bootstrap/scss/utilities/api";

//自訂樣式
@import "custom"
\`\`\`
4. 重要補充：如果\`sass\`出現，關於變數等等的警告錯誤，請將\`sass\`版本降低到\`@1.77.6\`：

\`More info: https://sass-lang.com/d/color-functions\`

\`More info: https://sass-lang.com/d/mixed-decls\`
\`\`\`
$ npm i sass@1.77.6
\`\`\``,__vite_glob_0_110=Object.freeze(Object.defineProperty({__proto__:null,default:_20240502Webpack___SCSS______Bootstrap},Symbol.toStringTag,{value:"Module"})),_20240503Webpack___JS_____jQuery=`---
title: 【Webpack】自動轉譯JS版本+全域引用jQuery
date: 2024-05-03
tags: ["webpack"]
---
### 轉譯js
1. 安裝套件\`babel-loader\`和\`@babel/core\`和\`@babel/preset-env\`套件
    * \`babel-loader\`是webpack的loader套件
    * \`@babel/core\`調用babel的api編譯
    * \`@babel/preset-env\`可以使用最新版本的javascript去編譯
\`\`\`
$ npm i babel-loader @babel/core @babel/preset-env -D
\`\`\`
2. 在\`webpack.config.js\`新增：
\`\`\`js
const path = require('path');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: './js/main.js', 
        clean: true, 
    },
    module: {
        rules: [
            {
                test: /\\.js$/, //找尋js副檔名的檔案(正規表達式)
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets:['@babel/preset-env']
                    },
                }
            }
        ]
    }
}
\`\`\`
3. 在\`src\`底下新增\`all.js\`檔，並在檔案裡隨便寫一些程式：
\`\`\`js
const greet = (name = 'Jack') => {
    return \`Hello, \${name}!\`;
};
\`\`\`
\`\`\`
you project
├─── node_modules/        
├─── src/
│     │
│     ├─── index.html 
│     │
│     └──── js/ 
│           │
│           ├── main.js
│           │
│           └── all.js //新增一支js檔
│ 
├─── package.json
└─── webpack.config.js   
\`\`\`
4. 在\`main.js\`引入這支\`all.js\`檔：
\`\`\`js
import './all.js';
\`\`\`
5. 在終端機執行：
\`\`\`
$ npm run start
\`\`\`
\`\`\`
you project
├─── dist/
│     │
│     └─── js/ 
│           │
│           └── main.js
│  
├─── node_modules/        
├─── src/
│     │
│     ├─── index.html 
│     │
│     └──── js/ 
│           │
│           ├── main.js
│           │
│           └── all.js //新增一支js檔
│ 
├─── package.json
└─── webpack.config.js   
\`\`\`
6. 可以在編譯出來的\`dist\`檔底下的\`main.js\`看到轉譯的結果：
\`\`\`js
eval("var greet = function greet() {\\n  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Jack';\\n  return \\"Hello, \\".concat(name, \\"!\\");\\n};\\n\\n//# sourceURL=webpack:///./src/js/all.js?");
\`\`\`

-----------------------------------------------
### 若要使用jquery
1. 安裝套件\`jquery\`：
\`\`\`
$ npm i jquery
\`\`\`
2. 在\`main.js\`引用：
\`\`\`js
import '../../node_modules/jquery.min.js'
\`\`\`
3. 在\`webpack.config.js\`新增：
\`\`\`js
const webpack = require('webpack'); //引用webpack-cli內的工具
const path = require('path');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: './js/main.js', 
        clean: true, 
    },
    module: {
        rules: [
            {
                test: /\\.js$/, //找尋js副檔名的檔案(正規表達式)
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets:['@babel/preset-env']
                    },
                }
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({ //全域設置$變數
            $: 'jquery',
            jquery: 'jquery',
            'window.jquery': 'jquery'
        })
    ]
}
\`\`\`
4. 測試\`jquery\`有沒有載入成功，可以在先前的\`all.js\`：
\`\`\`js
$(document).ready(function(){
    $("body").css('backgroundColor','red')
})
\`\`\`
5. 再次終端機執行：
\`\`\`
$ npm run start
\`\`\`
6. 如果頁面整個有成功變成\`紅色\`，表示成功。
`,__vite_glob_0_111=Object.freeze(Object.defineProperty({__proto__:null,default:_20240503Webpack___JS_____jQuery},Symbol.toStringTag,{value:"Module"})),_20240504Webpack____________=`---
title: 【Webpack】複製檔案+自動壓縮圖片
date: 2024-05-04
tags: ["webpack"]
---
### 單純複製檔案
1. 安裝\`copy-webpack-plugin\`套件
\`\`\`
$ npm i copy-webpack-plugin -D
\`\`\`
2. 在\`webpack.config.js\`新增：
\`\`\`js
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin'); //引用套件

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: './js/main.js', 
        clean: true, 
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns:[
                //from是來源路徑，to是輸出路徑
                { from: path.resolve(__dirname,'src/images/favicon') ,to: 'images/favicon' }, 
                { from: path.resolve(__dirname,'src/fonts') ,to: 'fonts' }
            ],
        }),
    ],
}
\`\`\`
\`from是來源路徑，to是輸出路徑，統一使用物件方式包裹\`

3. 在\`src\`底下新增\`images/favicon\`和\`fonts\`：
\`\`\`
you project
├─── node_modules/        
├─── src/
│     │
│     ├──── fonts/ 
│     │
│     └──── images/ 
│            │
│            └── favicon/
│ 
├─── package.json
└─── webpack.config.js   
\`\`\`
4. 在終端機執行：
\`\`\`
$ npm run start
\`\`\`
5. 可以發現資料夾被複製到\`dist\`底下：
\`\`\`
you project
├─── dist/
│     │
│     ├──── fonts/ 
│     │
│     └──── images/ 
│            │
│            └── favicon/
│
├─── node_modules/        
├─── src/
│     │
│     ├──── fonts/ 
│     │
│     └──── images/ 
│            │
│            └── favicon/
│ 
├─── package.json
└─── webpack.config.js   
\`\`\`
\`此時images裡的檔案(除了favicon)並不會被複製，因為沒有為該路徑進行複製\`

-----------------------------------------------
### 自動壓縮圖片處理
1. 安裝\`image-webpack-loader\`套件：
\`\`\`
$ npm i image-webpack-loader -D
\`\`\`
2. 在\`webpack.config.js\`新增：
\`\`\`js
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: './js/main.js', 
        clean: true, 
    },
    module:{
        rules: [
            {
                test: /\\.(gif|png|jpe?g|svg|webp)$/i, //找尋gif、png、jpeg、jpg、svg、webp副檔名的檔案(正規表達式)
                type: 'asset/resource', //此webpack複製檔案方法
                generator:{
                    filename: 'images/[name][ext]', //輸出的檔名跟輸入時一樣，若不設定則會自動亂數
                },
                use: [
                    {
                        loader: 'images-webpack-loader',
                        options:{
                            mozjpeg: {
                                progressive: true,
                            },
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65,0.9],
                                speed: 4,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            webp:{
                                quality: 75,
                            }
                        },
                    }
                ]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns:[
                { from: path.resolve(__dirname,'src/images/favicon') ,to: 'images/favicon' },
                { from: path.resolve(__dirname,'src/fonts') ,to: 'fonts' }
            ],
        }),
    ],
}
\`\`\`
3. 到main.js將圖片全部引入：
\`\`\`js
function importAll(r){
    r.keys().forEach(r);
}
importAll(require.context('../images',false,/\\.(gif|png|jpe?g|svg|webp)$/i));
\`\`\`
\`此時images裡的檔案會成功的複製，並且經過壓縮處理\``,__vite_glob_0_112=Object.freeze(Object.defineProperty({__proto__:null,default:_20240504Webpack____________},Symbol.toStringTag,{value:"Module"})),_20240505Webpack________SourceMap__=`---
title: 【Webpack】開發環境設置+SourceMap生成
date: 2024-05-05
tags: ["webpack"]
---
### 開發環境設置
1. 在\`webpack.config.js\`新增：
\`\`\`js
const path = require('path');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: './js/main.js', 
        clean: true, 
    },
    devServer: {
        static: path.resolve(__dirname,'dist'),
        compress: true, //啟用gzip壓縮方式(加速)
        hot: true, //只重新加載修改的部分
        watchFiles: ['src/**/*'] //監控檔案
    }
}
\`\`\`

-----------------------------------------------
### 自動生成map檔
1. 在\`webpack.config.js\`新增：
\`\`\`js
const path = require('path');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: './js/main.js', 
        clean: true, 
    },
    devServer: {
        static: path.resolve(__dirname,'dist'),
        compress: true,
        hot: true,
        watchFiles: ['src/**/*']
    },
    devtool: 'source-map' //自動生成sourceMap檔
}
\`\`\``,__vite_glob_0_113=Object.freeze(Object.defineProperty({__proto__:null,default:_20240505Webpack________SourceMap__},Symbol.toStringTag,{value:"Module"})),_20240701PHP___php__=`---
title: 【PHP】執行php專案
date: 2024-07-01
tags: ["PHP"]
---
### 執行php專案
1. 打開git中laravel專案
2. control＋\`開啟終端機
3. 複製env輸入：cp .env.example .env
4. 在.env裡的
    * DB_DATABASE=(看DB裡的sql名稱寫什麼就寫什麼)
    * DB_USERNAME=root
    * DB_PASSWORD=a1234567
    * APP_URL=localhost
5. 登入php(安裝在本機)
    * http://127.0.0.1/public/phpMyAdmin/
    * 帳號：root
    * 密碼：a1234567
6. 點“新增”
    1. 資料表名稱：(看DB裡的sql名稱寫什麼就寫什麼)
    2. 選擇：utf8mb4_general_ci
    3. 點“匯入”將DB裡的.sql匯入
7. 回到終端機
    1. 更新依賴套件：composer update
    2. 產生應用程序金鑰：php artisan key:generate --ansi 
    3. 建立公開連結：php artisan storage:link
    4. 啟動伺服器：php artisan serve

-----------------------------------------------
### php專案結構
![圖片](/img/執行php專案/執行php專案-1.jpg)`,__vite_glob_0_114=Object.freeze(Object.defineProperty({__proto__:null,default:_20240701PHP___php__},Symbol.toStringTag,{value:"Module"})),_20241201Vue3JavaScript__=`---
title: 【Vue3】JavaScript縮寫
date: 2024-12-01
tags: ["Vue3"]
---
### 物件字面值(Object literals)
\`\`\`js
const obj = {
  name: '蘋果',
  fn: function() { 
    return this.name;
  }
}

console.log(obj.fn()); //蘋果
\`\`\`
#### 縮寫後：
\`\`\`js
const obj = {
  name: '蘋果',
  fn() { 
    return this.name;
  }
}

console.log(obj.fn()); //蘋果
\`\`\`

-----------------------------------------------
### 物件內的變數
\`\`\`js
const person = {
  name: '小明'
};

const people = {
    person: person;
}

console.log(people); //person:{ name: '小明' }
\`\`\`
#### 縮寫後：
\`\`\`js
const person = {
  name: '小明'
};

const people = {
    person
}

console.log(people); //person:{ name: '小明' }
\`\`\`

-----------------------------------------------
### 合併兩個陣列
\`\`\`js
const groupA = ['蘋果', '香蕉', '鳳梨'];
const groupB = ['蓮霧', '芭樂'];
const groupAll = groupA.concat(groupB);

console.log(groupAll); //['蘋果', '香蕉', '鳳梨' , '蓮霧', '芭樂']
\`\`\`
#### 縮寫後：
\`\`\`js
const groupA = ['蘋果', '香蕉', '鳳梨'];
const groupB = ['蓮霧', '芭樂'];
const groupAll = [...groupA , ...groupB];

console.log(groupAll); //['蘋果', '香蕉', '鳳梨' , '蓮霧', '芭樂']
\`\`\`

-----------------------------------------------
### 合併兩個物件
\`\`\`js
const methods = {
  fn1() {
    console.log(1);
  },
  fn2() {
    console.log(1);
  }
}

const newMethods = {
  fn() {
    console.log(1);
  },
  ...methods
}

console.log(newMethods); //{fn: ƒ, fn1: ƒ, fn2: ƒ}
\`\`\`

-----------------------------------------------
### 將dom元素陣列轉為純陣列
\`\`\`html
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>
\`\`\`
\`\`\`js
const doms = document.querySelectorAll('li');
console.log(doms); //NodeList(3) [li, li, li]

const newDoms = [...doms];
console.log(newDoms); // [li, li, li]
\`\`\`
\`純陣列比NodeList可使用的方法還多，例如：filter、map等\`

-----------------------------------------------
### 參數預設值
\`\`\`js
function sum(a, b) { 
    if(!b){
        b = 3
    }
    return a + b;
}
console.log(sum(1)); //4
\`\`\`
#### 縮寫後：
\`\`\`js
//設定b預設3，所以如果沒帶參數的話b自動會是3
function sum(a, b = 3) { 
    return a + b;
}
console.log(sum(1)); //4

//設定b預設3，但如果有真正的參數會以參數為主
function sum(a, b = 3) { 
    return a + b;
}
console.log(sum(1,5)); //6
\`\`\``,__vite_glob_0_115=Object.freeze(Object.defineProperty({__proto__:null,default:_20241201Vue3JavaScript__},Symbol.toStringTag,{value:"Module"})),_20241202Vue3This___=`---
title: 【Vue3】this的指向
date: 2024-12-02
tags: ["Vue3"]
---
### 傳統函式this
\`\`\`js
let name = "全域蘋果";
function sayApple(){
  console.log(this.name);
}
const obj = {
  name: "蘋果",
  sayApple
}
obj.sayApple(); //蘋果
\`\`\`
\`看函式前面是在哪邊調用，而決定this的指向\`

-----------------------------------------------
### 傳統函式this 2
\`\`\`js
let name = "全域蘋果";
const obj = {
  name: "蘋果",
  sayApple(){
    console.log(this.name);
  }
}
obj.sayApple(); //蘋果
\`\`\`

-----------------------------------------------
### 物件內的物件函式
\`\`\`js
let name = "全域蘋果";
function sayApple(){
  console.log(this.name);
}
const obj = {
  name: "蘋果",
  sayApple,
  obj2: {
    name: "內層蘋果",
    sayApple
  }
}
obj.obj2.sayApple(); //內層蘋果
\`\`\`

-----------------------------------------------
### 物件內的函式裡的函式
\`\`\`js
let name = "全域蘋果";
function sayApple() {
  console.log(this.name);
}
const obj = {
  name: "蘋果",
  fn() {
    sayApple();
  }
}
obj.fn(); //全域蘋果
\`\`\`

-----------------------------------------------
### 非同步函式
\`\`\`js
let name = "全域蘋果";
function sayApple() {
  console.log(this.name);
}
const obj = {
  name: "蘋果",
  fn(){
    setTimeout(function(){
      conosole.log(this.name);
    })
  }
}
obj.fn(); //全域蘋果
\`\`\`

-----------------------------------------------
### 箭頭函式的this指向
\`\`\`js
let name = "全域蘋果";
const obj = {
  name: '蘋果',
  sayApple: () => { 
    console.log(this.name); 
  },
}
obj.sayApple(); //'全域蘋果'
\`\`\`
\`箭頭函式沒有自己的this，會優先指向外層的this\`

-----------------------------------------------
### 箭頭函式的this指向
\`\`\`js
let name = '全域蘋果'
const obj = {
  name: '蘋果',
  sayApple() {
    const sayApple2 = () => { 
      console.log(this.name);
    };
    sayApple2();
  }
}
obj.sayApple(); //蘋果
\`\`\``,__vite_glob_0_116=Object.freeze(Object.defineProperty({__proto__:null,default:_20241202Vue3This___},Symbol.toStringTag,{value:"Module"})),_20241203Vue3________=`---
title: 【Vue3】關注點分離實作
date: 2024-12-03
tags: ["Vue3"]
---
### 傳統javascript
使用傳統JavaScript實作Vue元件生成按綁定刪除事件
\`\`\`html
<ul class="list">
</ul>
<input type="text">
<button>新增</button>
\`\`\`
\`\`\`js
const component = {
  data:[ "蘋果","香蕉","鳳梨" ],
  showData(){
    let list = document.querySelector(".list");
    let str = "";
    this.data.forEach((item,id) => {
      str += \`<li>\${item}
        <button type="button" class="btn" data-num="\${id}">刪除</button>
      </li>\`
    })
    list.innerHTML = str;
    let btns = document.querySelectorAll(".btn");
    btns.forEach((item)=>{
      //使用箭頭函數可以，讓this指向外層
      item.addEventListener("click",(event)=>{
        this.removeData(event.target.dataset.num);
      })
    })
  },
  removeData(id){
    this.data.splice(id, 1);
    this.showData();
  },
  initData(){
    this.showData();
  }
}
component.initData();
\`\`\``,__vite_glob_0_117=Object.freeze(Object.defineProperty({__proto__:null,default:_20241203Vue3________},Symbol.toStringTag,{value:"Module"})),_20241204Vue3________=`---
title: 【Vue3】物件傳參考特性
date: 2024-12-04
tags: ["Vue3"]
---
### 兩個物件互相影響
\`\`\`js
const fruits = {
  name: "蘋果",
  obj:{}
}

const fruits2 = fruits;
fruits2.name = "香蕉";
console.log(fruits.name); //香蕉
console.log(fruits2.name); //香蕉
\`\`\`
\`當物件賦予到另一個物件時，就等於指向同一個物件\`

-----------------------------------------------
### 兩個物件互相影響2
\`\`\`js
const fruits = {
  name: "蘋果",
  obj:{}
}

const fn = (item) => {
  item.name = "香蕉";
}

fn(fruits);
console.log(fruits.name); //香蕉
\`\`\`
\`當物件賦予到另一個物件時，就等於指向同一個物件\`

-----------------------------------------------
### 淺層拷貝(兩物件不影響)
\`\`\`js
const fruits = {
  name: "蘋果",
  obj:{}
}

const fruits2 = Object.assign({},fruits);

fruits2.name = "香蕉";
console.log(fruits.name); //蘋果
console.log(fruits2.name); //香蕉

fruits2.obj.price = 80;
console.log(fruits.obj.price); //80
console.log(fruits2.obj.price); //80
\`\`\`
\`淺層拷貝的意思是，物件第一層指向不同，但下一層指向卻還是相同\`

-----------------------------------------------
### 淺層拷貝(兩物件不影響)2
\`\`\`js
const fruits = {
  name: "蘋果",
  obj:{}
}

const fruits2 = {
  ...fruits
}

fruits2.name = "香蕉";
console.log(fruits.name); //蘋果
console.log(fruits2.name); //香蕉

fruits2.obj.price = 80;
console.log(fruits.obj.price); //80
console.log(fruits2.obj.price); //80
\`\`\`
\`淺層拷貝的意思是，物件第一層指向不同，但下一層指向卻還是相同\`

-----------------------------------------------
### 深層拷貝(兩物件不影響)
\`\`\`js
const fruits = {
  name: "蘋果",
  obj:{}
}

const fruits2 = JSON.parse(JSON.stringify(fruits));
fruits2.name = "香蕉";
console.log(fruits.name); //蘋果
console.log(fruits2.name); //香蕉
\`\`\`
\`當物件賦予到另一個物件時，就等於指向同一個物件\``,__vite_glob_0_118=Object.freeze(Object.defineProperty({__proto__:null,default:_20241204Vue3________},Symbol.toStringTag,{value:"Module"})),_20241205Vue3Promise_____=`---
title: 【Vue3】promise非同步觀念
date: 2024-12-05
tags: ["Vue3"]
---
### 非同步觀念
\`\`\`js
const component = {
  init(){
    console.log(1);
    getData();
    console.log(2);
  }
}

function getData(){
  setTimeout(()=>{
    console.log("已取得遠端資料");
  })
}

component.init();
//1
//2
//"已取得遠端資料"
\`\`\`
\`重點結論：非同步事件一定是在事件都執行完之後才執行\`

-----------------------------------------------
### promise基本用法
* 成功：透過resolve回傳結果，使用.then做接收
* 失敗：透過resolve回傳結果，使用.then和.catch接收
\`\`\`js
const promiseSetTimeout = (status) => {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(status){
        resolve("promiseSetTimeout 成功");
      }else{
        reject("promiseSetTimeout 失敗");
      }
    },0)
  })
}
\`\`\`
#### 基礎應用
\`\`\`js
promiseSetTimeout(true)
  .then(res => {
    console.log(res); //promiseSetTimeout 成功
  })
\`\`\`
#### 串接
\`\`\`js
promiseSetTimeout(true)
  .then(res => {
    console.log(1,res); //1,,promiseSetTimeout 成功
    return promiseSetTimeout(true)
  })
  .then(res => {
    console.log(2,res); //2,promiseSetTimeout 成功
  })
\`\`\`
\`連續接收第二、第三個資料時，可以使用return一個非同步事件，就可以繼續接.then\`
#### 失敗捕捉
\`\`\`js
promiseSetTimeout(false)
  .then(res => {
    console.log(res); 
  })
  .catch(err => {
    console.log(err); //promiseSetTimeout 失敗
  })
\`\`\`
\`捕捉失敗.then會直接被忽略\`
\`\`
#### 元件運用
\`\`\`js
const component = {
  data:{

  },
  init(){
    promiseSetTimeout(true){
      .then(res => {
        this.data.res = res;
        console.log(this.res); // {res:"promiseSetTimeout 成功"}
      })
    }
  }
}
component.init();
\`\`\`
\`使用元件的初始化事件，將api資料載入到data\``,__vite_glob_0_119=Object.freeze(Object.defineProperty({__proto__:null,default:_20241205Vue3Promise_____},Symbol.toStringTag,{value:"Module"})),_20241206Vue3___axios__api=`---
title: 【Vue3】使用axios串接api
date: 2024-12-06
tags: ["Vue3"]
---
### axios
* axios是promise的封裝套件
#### 使用前先在head引入
\`\`\`html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"><\/script>
\`\`\`
\`\`\`js
//官方寫法
$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data);
  }
});

//用axios改寫
axios.get("https://randomuser.me/api/")
  .then(res => {
    console.log(res.data.results)
  })
  .catch(err => {
    console.log(err.response)
  })
\`\`\`
\`.response是固定寫法\`

`,__vite_glob_0_120=Object.freeze(Object.defineProperty({__proto__:null,default:_20241206Vue3___axios__api},Symbol.toStringTag,{value:"Module"})),_20241207Vue3________ES__=`---
title: 【Vue3】在瀏覽器上運行ES模組
date: 2024-12-07
tags: ["Vue3"]
---
### 匯入與匯出
#### 預設匯入和匯出：
\`\`\`js
import 自訂名稱 from ...

export default = 
\`\`\`
#### 具名匯入和匯出：
\`\`\`js
import { 具名名稱 } from ...

export const xxx = ...
\`\`\`

-----------------------------------------------
### 匯入元件
常見的匯出方式，通常用於匯出物件，在 Vue 開發中可用來匯出元件
1. 先建立一個export1.js檔(component)
\`\`\`js
export default {
  data:[ "蘋果","香蕉","鳳梨" ],
  showData(){
    let list = document.querySelector(".list");
    let str = "";
    this.data.forEach((item,id) => {
      str += \`<li>\${item}
        <button type="button" class="btn" data-num="\${id}">刪除</button>
      </li>\`
    })
    list.innerHTML = str;
    let btns = document.querySelectorAll(".btn");
    btns.forEach((item)=>{
      //使用箭頭函數可以，讓this指向外層
      item.addEventListener("click",(event)=>{
        this.removeData(event.target.dataset.num);
      })
    })
  },
  removeData(id){
    this.data.splice(id, 1);
    this.showData();
  },
  initData(){
    this.showData();
  }
}
\`\`\`
2. 在html或js檔進行匯入
\`\`\`html
<script type="module">

//newComponent是自訂的名稱
import newComponent from "./export1.js";

//使用裡面的方法
newComponent.initData();

<\/script>  
\`\`\`
\`注意：一定要在<script>上加上type="module"才能使用\`
\`\`\`html
<script type="module">
  var apple = "蘋果";
<\/script>

<script type="module">
  console.log(apple); // not defined
<\/script>
\`\`\`
\`每個type="module"作用域都是獨立的\`

-----------------------------------------------
### 匯入方法
可用於匯出已定義的變數、物件、函式，專案開發中通常用於 “方法匯出”，第三方的框架、函式、套件很常使用具名定義 “方法”
1. 先建立一個export2.js檔
\`\`\`js
export const a = 1;

export function b(){
  console.log(1);
}

export function c(a,b){
  return a + b;
}
\`\`\`
2. 在html或js檔進行匯入
\`\`\`html
<script type="module">
//單一匯入（建議寫法）
import { a , b } from "./export2.js";

console.log(a); //1

b(); //1
<\/script>

<script type="module">
//全部匯入（不建議，錯誤較難發現）
import * as all from "./export2.js";

all.b(); //1

console.log(all.c(a,b)); //3
<\/script>
\`\`\`

-----------------------------------------------
### sideEffect
1. 先建立一個sideEffect.js檔
\`\`\`js
//立即函式
(function (global) {
  global.$ = '我是 jQuery';
})(window);
\`\`\`
2. 匯入檔案
\`\`\`html
<script type="module">
import "./sideEffect.js";
console.log($); //我是 jQuery
<\/script>
\`\`\`

-----------------------------------------------
### 使用ESM方式匯入vue
\`\`\`html
<div id="app">{{ apple }}</div>
\`\`\`
\`\`\`html
<script type="module">
import { createApp } from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.5.13/vue.esm-browser.min.js";

const apple = {
  data(){
    return {
      apple: "蘋果"
    }
  }
}

createApp(apple).mount('#app');
<\/script>
\`\`\``,__vite_glob_0_121=Object.freeze(Object.defineProperty({__proto__:null,default:_20241207Vue3________ES__},Symbol.toStringTag,{value:"Module"})),_20241208Vue3_____vue=`---
title: 【Vue3】開始使用vue
date: 2024-12-08
tags: ["Vue3"]
---
### 創建vue
\`\`\`html
<div id="app">{{ count }}{{ text }}</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      count: 0,
      text: "這是一段文字"  
    }
  }
}).mount("#app");
\`\`\`
\`mount是綁定html顯示位置\`
#### 顯示結果：
\`\`\`html
<div id="app">0這是一段文字</div>
\`\`\`

-----------------------------------------------
### 資料數字，每次點擊按鈕資料數字+1
\`\`\`html
<div id="app">
  <p>{{ count }}</p>
  <button type="button" @click="addCount">按我</button>
</div>
\`\`\`
\`\`\`js
const app = {
  //資料（函式）
  data(){
    return{
      count: 0
    }
  },
  //生命週期（函式）
  created(){
    this.count = 10
  },
  //方法（物件）
  methods:{
    addCount(){
      this.count = this.count + 1;
    }
  }
}

Vue.createApp(app).mount("#app");
\`\`\`
\`不論在data或created或methods裡新增的東西，都會被攤在Proxy層，所以this都可以直接取用\`

-----------------------------------------------
### 更新名稱和圖片
\`\`\`html
<div id="app">
  <form>
    <div class="row mb-3">
      <label for="productName" class="col-sm-2 col-form-label">產品名稱</label>
      <div class="col-sm-10">
        <!-- 輸入框綁定data的temp -->
        <input type="text" id="productName" class="form-control" v-model="temp.name">
      </div>
    </div>
    <div class="row mb-3">
      <!-- src綁定data的temp -->
      <img v-bind:src="temp.imageUrl" class="img-fluid" alt="">
    </div>
    <div class="row mb-3">
      <label for="productImage" class="col-sm-2 col-form-label">產品圖片</label>
      <div class="col-sm-10">
        <!-- 輸入框綁定data的temp -->
        <input type="text" id="productImage" class="form-control" v-model="temp.imageUrl">
      </div>
    </div>
    <button type="button" @click="updateFile">更新</button>
  </form>
</div>
\`\`\`
\`\`\`js
const app = {
  data(){
    return{
      temp:{
        name: "",
        imageUrl: "https://images.unsplash.com/photo-1602526430780-782d6b1783fa?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    }
  },
  methods:{
    updateFile(){
      console.log(this.temp);
    }
  }
}

Vue.createApp(app).mount("#app");
\`\`\``,__vite_glob_0_122=Object.freeze(Object.defineProperty({__proto__:null,default:_20241208Vue3_____vue},Symbol.toStringTag,{value:"Module"})),_20241209Vue3__________=`---
title: 【Vue3】實作新增或編輯資料
date: 2024-12-09
tags: ["Vue3"]
---
### 實作新增或編輯資料
1. 點擊更新，會把輸入框裡的值新增到table
2. 點擊修改，會將資料放到輸入框裡，編輯後，再點擊更新，table資料會被更新
\`\`\`html
<div id="app">
  <form>
    <label>產品名稱</label>
    <input type="text" v-model="temp.name">
    <br>
    <label>產品圖片</label>
    <input type="text" v-model="temp.imgUrl">
    <br>
    <button type="button" @click="updateFile">更新</button>
  </form>
  <table border>
    <tr>
      <th>標題</th>
      <th>圖片</th>
      <th>銷售狀態</th>
      <th>編輯</th>
    </tr>
    <tr v-for="item in products" :key="item.id">
      <td>{{ item.name }}</td>
      <td>
        <img :src="item.imgUrl" width=100 alt="">
      </td>
      <td>
        <input type="checkbox" v-model="item.onStock">  
      </td>
      <td>
        <button type="button" @click="editItem(item)">修改</button>
      </td>
    </tr>
  </table>
</div>
\`\`\`
\`\`\`js
const products = [{
  id: '1',
  imgUrl: 'https://images.unsplash.com/photo-1516906571665-49af58989c4e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=300&q=80',
  name: 'MacBook Pro',
  onStock: false,
},{
  id: '2',
  imgUrl: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  name: 'iPhone',
  onStock: false,
}];

const app = {
  data(){
    return{
      //顯示在table上的資料
      products: [],
      //在輸入框，要被編修的資料
      temp: {
        name: "",
        imgUrl: ""
      }
    }
  },
  methods:{
    //點擊修改時，將資料放入輸入框，但如果是this.temp = item，編修時會因為物件傳參考特性，table資料也會被更改
    editItem(item){
      //淺層拷貝
      this.temp = { ...item };
    },
    //點擊更新：需要判斷是在“修改”，還是在“新增”，判斷方式為“是否已存在id”，已存在products裡的資料，都是附有id值
    updateFile(){
      //如果沒有id，表示要新增資料
      if(!this.temp.id){
        //快速產生id的方法
        this.temp.id = new Date().getTime();
        this.temp.onStock = false;
        //將輸入框裡的值，新增到products裡
        this.products.push(this.temp);
      //如果有id，表示要修改資料
      }else{
        //先比對要修改products裡的哪一筆資料
        this.products.forEach((item,i)=>{
          //如果id完全相符
          if(item.id === this.temp.id){
            //就將那筆資料賦予新的值
            this.products[i] = this.temp;
          }
        })
      }
      this.temp = "";
    }
  },
  //此段表示成功介接api資料到data
  created(){
    this.products = products;
  }
}

Vue.createApp(app).mount("#app");
\`\`\`
\`:key="唯一值"\`
`,__vite_glob_0_123=Object.freeze(Object.defineProperty({__proto__:null,default:_20241209Vue3__________},Symbol.toStringTag,{value:"Module"})),_20241210Vue3VText____=`---
title: 【Vue3】v-text顯示資料
date: 2024-12-10
tags: ["Vue3"]
---
### v-text
\`\`\`html
<div id="app">
  <p v-text="apple"></p>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      apple: "蘋果",
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
### {{}}(Mustache)
\`\`\`html
<div id="app">
  <p>{{ apple }}</p>
  <p>{{ 1 + 1 }}</p>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      apple: "蘋果",
    }
  }
}).mount("#app");
\`\`\`
#### 顯示結果：
\`\`\`html
<div id="app">
  <p>蘋果</p>
  <p>2</p>
</div>
\`\`\`

-----------------------------------------------
### {{}} 進階用法
\`\`\`html
<div id="app">
  <p>{{ \`\${apple}比\${banana}還好吃\` }}</p>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      apple: "蘋果",
      banana: "香蕉"
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
### {{}} + methods方法
\`\`\`html
<div id="app">
  <p>{{ sayName("香蕉") }}</p>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      apple: "蘋果",
    }
  },
  methods:{
    sayName(name){
      return \`\${this.apple}比\${name}還好吃\`
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
### v-html
\`\`\`html
<div id="app">
  <div v-html="apple"></div>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      apple: "<p>蘋果</p>",
    }
  }
}).mount("#app");
\`\`\`
\`跟v-text和{{}}結果相同，但會多帶一個div標籤\`

-----------------------------------------------
### v-once + v-model 資料只渲染一次，但後續不被更動
\`\`\`html
<div id="app">
  <input type="text" v-model="apple">
  <p v-once>{{ apple }}</p>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      apple: "蘋果",
    }
  }
}).mount("#app");
\`\`\`
\`會呈現"蘋果"，但是不會被v-model改動\`

-----------------------------------------------
### v-pre + {{}} 括弧內的文字不會被編譯，直接呈現
\`\`\`html
<div id="app">
  <p v-pre>{{ apple }}</p>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      apple: "蘋果",
    }
  }
}).mount("#app");
\`\`\``,__vite_glob_0_124=Object.freeze(Object.defineProperty({__proto__:null,default:_20241210Vue3VText____},Symbol.toStringTag,{value:"Module"})),_20241211Vue3VFor______=`---
title: 【Vue3】v-for呈現多筆資料
date: 2024-12-11
tags: ["Vue3"]
---
### v-for + 陣列資料
\`\`\`html
<div id="app">
  <ul>
    <li v-for="(item,key) in fruits">{{ key + 1 }} - {{item.name}}/{{ item.price }}元</li>
  </ul>
</div>
\`\`\`
\`\`\`js
const fruits = [
  {
    name: "蘋果",
    price: 15,
    amount: 50
  },
  {
    name: "香蕉",
    price: 20,
    amount: 30
  },
  {
    name: "鳳梨",
    price: 35,
    amount: 100
  }
]

Vue.createApp({
  data(){
    return{
      fruits: fruits,
    }
  }
}).mount("#app");
\`\`\`
#### 顯示結果：
\`\`\`html
<div id="app">
  <ul>
    <li>1 - 蘋果/15元</li>
    <li>2 - 香蕉/20元</li>
    <li>3 - 鳳梨/35元</li>
  </ul>
</div>
\`\`\`

-----------------------------------------------
### v-for + 物件資料
\`\`\`html
<div id="app">
  <ul>
    <li v-for="(item,key) in fruits">{{ key }} - {{item.name}}/{{ item.price }}元</li>
  </ul>
</div>
\`\`\`
\`\`\`js
const fruits = {
  apple:{
    name: "蘋果",
    price: 15,
    amount: 50
  },
  banana:{
    name: "香蕉",
    price: 20,
    amount: 30
  },
  pineapple:{
    name: "鳳梨",
    price: 35,
    amount: 100
  }
}

Vue.createApp({
  data(){
    return{
      fruits: fruits,
    }
  }
}).mount("#app");
\`\`\`
#### 顯示結果：
\`\`\`html
<div id="app">
  <ul>
    <li>apple - 蘋果/15元</li>
    <li>banana - 香蕉/20元</li>
    <li>pineapple - 鳳梨/35元</li>
  </ul>
</div>
\`\`\`

-----------------------------------------------
### v-for 純數字
\`\`\`html
<div id="app">
  <ul>
    <li v-for="item in 4">{{ apple }}</li>
  </ul>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
        apple: "蘋果"
    }
  }

}).mount("#app");
\`\`\`

-----------------------------------------------
### v-for + key 
#### 當有相同父元素的子元素必須有獨特的key，重複的key會造成錯誤
\`\`\`html
<div id="app">
  <ul>
    <li v-for="item in fruits" v-bind:key="item.name">{{ item.name }}
      <input type="text">
    </li>
  </ul>
  <button type="button" @click="reverseArray">反轉按鈕</button>
</div>
\`\`\`
\`\`\`js
const fruits = [
  {
    name: "蘋果",
    price: 15,
    amount: 50
  },
  {
    name: "香蕉",
    price: 20,
    amount: 30
  },
  {
    name: "鳳梨",
    price: 35,
    amount: 100
  }
]

Vue.createApp({
  data(){
    return{
        fruits: fruits
    }
  },
  methods:{
    reverseArray(){
      this.fruits.reverse();
    }
  }
}).mount("#app");
\`\`\`
\`如果沒有加上v-bind:key="item.name"，在input裡輸入值後，點擊按鈕會出錯\`

-----------------------------------------------
### v-for + table + template
\`\`\`html
<div id="app">
  <table>
    <template v-for="item in fruits">
      <tr>
        <td>{{ item.name }}</td>
      </tr>
      <tr>
        <td>{{ item.price }}元</td>
      </tr>
      <tr>
        <td>{{ item.import ? '進口':'本土' }}</td>
      </tr>
    </template>
  </table>
</div>
\`\`\`
\`\`\`js
const fruits = [
  {
    name: "蘋果",
    price: 15,
    import: true
  },
  {
    name: "香蕉",
    price: 20,
    import: true
  },
  {
    name: "鳳梨",
    price: 35,
    import: false
  }
]

Vue.createApp({
  data(){
    return{
        fruits: fruits
    }
  }
}).mount("#app");
\`\`\`
\`<template>可用來包覆需要重複的標籤\``,__vite_glob_0_125=Object.freeze(Object.defineProperty({__proto__:null,default:_20241211Vue3VFor______},Symbol.toStringTag,{value:"Module"})),_20241212Vue3VIf_____=`---
title: 【Vue3】v-if選擇性顯示
date: 2024-12-12
tags: ["Vue3"]
---
### v-if
\`\`\`html
<div id="app">
  <p v-if="apple">蘋果</p>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
        apple: false //true顯示，false不顯示
    }
  }
}).mount("#app");
\`\`\`
\`v-if不顯示時，是連同整個DOM的節點都看不見\`

-----------------------------------------------
### v-show
\`\`\`html
<div id="app">
  <p v-show="apple">蘋果</p>
  <button type="button" @click="toggleApple">按鈕</button>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
        apple: true
    }
  },
  methods:{
    toggleApple(){
      this.apple = !this.apple; 
    }
  }
}).mount("#app");
\`\`\`
\`v-show是使用display:block和display:none來切換\`

-----------------------------------------------
### v-if + 按鈕切換
\`\`\`html
<div id="app">
  <p v-if="apple">蘋果</p>
  <button type="button" @click="toggleApple">按鈕</button>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
        apple: true
    }
  },
  methods:{
    toggleApple(){
      this.apple = !this.apple; 
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
### v-if + v-else + 按鈕切換
\`\`\`html
<div id="app">
  <p v-if="apple">蘋果</p>
  <p v-else>香蕉</p>
  <button type="button" @click="toggleApple">按鈕</button>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
        apple: true
    }
  },
  methods:{
    toggleApple(){
      this.apple = !this.apple; 
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
### v-if + v-else-if + 按鈕切換
\`\`\`html
<div id="app">
  <p>{{ fruits }}</p>
  <p v-if="fruits == '蘋果'">一個15元</p>
  <p v-else-if="fruits == '香蕉'">一個20元</p>
  <p v-else-if="fruits == '鳳梨'">一個35元</p>
  <button type="button" @click="changeFruits('蘋果')">蘋果</button>
  <button type="button" @click="changeFruits('香蕉')">香蕉</button>
  <button type="button" @click="changeFruits('鳳梨')">鳳梨</button>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
        fruits: "蘋果"
    }
  },
  methods:{
    changeFruits(item){
      this.fruits = item;
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
### v-if + v-for
\`\`\`html
<div id="app">
  <ul>
    <template v-for="item in fruits">
      <li v-if="item.price < 30">{{ item.name }}</li>
    </template>
  </ul>
</div>
\`\`\`
\`\`\`js
const fruits = [
  {
    name: "蘋果",
    price: 15,
    import: true
  },
  {
    name: "香蕉",
    price: 20,
    import: true
  },
  {
    name: "鳳梨",
    price: 35,
    import: false
  }
]

Vue.createApp({
  data(){
    return{
        fruits: fruits
    }
  }
}).mount("#app");
\`\`\`
\`v-for和v-if官方不建議使用在同一個標籤上，因此可以使用template來拆開\``,__vite_glob_0_126=Object.freeze(Object.defineProperty({__proto__:null,default:_20241212Vue3VIf_____},Symbol.toStringTag,{value:"Module"})),_20241213Vue3VBind____=`---
title: 【Vue3】v-bind屬性綁定
date: 2024-12-13
tags: ["Vue3"]
---
### v-bind 圖片綁定
\`\`\`html
<div id="app">
  <img :src="apple.imgUrl" :title="apple.name" :alt="apple.name">
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
        apple: {
          name: "蘋果",
          imgUrl: "https://waapple.org/wp-content/uploads/2021/06/Variety_Cosmic-Crisp-transparent-658x677.png"
        }
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
### v-bind + input + readonly
\`\`\`html
<div id="app">
  {{ isReadonly }}
  <input type="text" :readonly="isReadonly">
  <button type="button" @click="changeReadonly">切換狀態</button>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
        isReadonly: true
    }
  },
  methods:{
    changeReadonly(){
        this.isReadonly = !this.isReadonly;
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
### v-bind + input + dynamic
\`\`\`html
<div id="app">
  {{ dynamic }}
  <input type="text" :[dynamic]>
  <button type="button" @click="changeStatus">切換狀態</button>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
        dynamic: 'disabled'
    }
  },
  methods:{
    changeStatus(){
      //this.dynamic現在等於disabled嗎？是的話就變成readonly，不是的話就變成disabled
      this.dynamic = this.dynamic === 'disabled' ? 'readonly' : 'disabled';
    }
  }
}).mount("#app");
\`\`\``,__vite_glob_0_127=Object.freeze(Object.defineProperty({__proto__:null,default:_20241213Vue3VBind____},Symbol.toStringTag,{value:"Module"})),_20241214Vue3Html____=`---
title: 【Vue3】html樣式綁定
date: 2024-12-14
tags: ["Vue3"]
---
### 將樣式寫在style (行內寫法)
\`\`\`html
<div id="app">
  <p :style="{backgroundColor:'red'}">蘋果</p>
</div>
\`\`\`
#### 多值寫法：
\`\`\`html
<div id="app">
  <p :style="{backgroundColor:'red',color:'white'}">蘋果</p>
</div>
\`\`\`

-----------------------------------------------
### 將樣式寫在style (物件寫法)
\`\`\`html
<div id="app">
  <p :style="bgRed">蘋果</p>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
        bgRed: {
          backgroundColor:'red'
        }
    }
  }
}).mount("#app");
\`\`\`
#### 多值寫法：
\`\`\`html
<div id="app">
  <p :style="bgRed">蘋果</p>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
        bgRed: {
          backgroundColor:'red',
          color: 'white'
        }
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
### 將樣式寫在style (陣列寫法)
\`\`\`html
<div id="app">
  <p :style="[bgRed,textWhite]">蘋果</p>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
        bgRed: {
          backgroundColor:'red',
        },
        textWhite :{
          color: 'white'
        }
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
### 將樣式寫在class (行內寫法)
\`\`\`html
<div id="app">
  <p :class="{'bgRed': true}">蘋果</p>
</div>
\`\`\`
\`\`\`css
.bgRed{
  background-color: red;
}
\`\`\`
#### 多值寫法：
\`\`\`html
<div id="app">
  <p :class="{'bgRed': true,'textWhite': true}">蘋果</p>
</div>
\`\`\`
\`\`\`css
.bgRed{
  background-color: red;
}
.textWhite{
  color: white;
}
\`\`\`

-----------------------------------------------
### 將樣式寫在class (判斷值)
\`\`\`html
<div id="app">
  <p :class="{'bgRed': bgRedClass,'textWhite': textWhiteClass}">蘋果</p>
</div>
\`\`\`
\`\`\`css
.bgRed{
  background-color: red;
}
.textWhite{
  color: white;
}
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
        bgRedClass: true,
        textWhiteClass: false
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
### 將樣式寫在class (物件寫法)
\`\`\`html
<div id="app">
  <p :class="objClass">蘋果</p>
</div>
\`\`\`
\`\`\`css
.bgRed{
  background-color: red;
}
.textWhite{
  color: white;
}
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      objClass:{
        bgRed: true,
        textWhite: false
      }
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
### 將樣式寫在class (陣列寫法)
\`\`\`html
<div id="app">
  <p :class="ArrClass">蘋果</p>
</div>
\`\`\`
\`\`\`css
.bgRed{
  background-color: red;
}
.textWhite{
  color: white;
}
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      ArrClass:[
        'bgRed','textWhite'
      ]
    }
  }
}).mount("#app");
\`\`\``,__vite_glob_0_128=Object.freeze(Object.defineProperty({__proto__:null,default:_20241214Vue3Html____},Symbol.toStringTag,{value:"Module"})),_20241215Vue3VModel____=`---
title: 【Vue3】v-model雙向綁定
date: 2024-12-15
tags: ["Vue3"]
---
### 輸入框綁定
\`\`\`html
<div id="app">
  <input type="text" v-model="inputValue">
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      inputValue: '蘋果'
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
### checkbox綁定
\`\`\`html
<div id="app">
  <input type="checkbox" v-model="checkAnswer">
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      checkAnswer: true
    }
  }
}).mount("#app");
\`\`\`
-----------------------------------------------
### checkbox綁定
\`\`\`html
<div id="app">
  <input type="checkbox" v-model="checkAnswer">
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      checkAnswer: true
    }
  }
}).mount("#app");
\`\`\`
-----------------------------------------------
### checkbox單選 + 三元判斷式
\`\`\`html
<div id="app">
  <input type="checkbox" v-model="checkAnswer">
  {{ checkAnswer ? '蘋果':'香蕉' }}
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      checkAnswer: true
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
### checkbox單選 + true-value、false-value
\`\`\`html
<div id="app">
  <p>{{ checkboxAnswer }}</p>
  <input id="isCheck"
  type="checkbox"
  v-model="checkboxAnswer"
  true-value="你勾選了"
  false-value="你沒有勾選">
  <label for="isCheck">是否要勾選</label>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      checkboxAnswer: "你沒有勾選"
    }
  }
}).mount("#app");
\`\`\`
-----------------------------------------------
### checkbox多選(回傳陣列)
如果要讓checkbox勾選就回傳陣列的話：
\`\`\`html
<div id="app">
  <p>您選擇的是：{{ checkboxAnswer.join() }}</p>
  <input id="apple" type="checkbox" v-model="checkboxAnswer" value="蘋果">
  <label for="apple">蘋果</label>
  <br>
  <input id="banana" type="checkbox" v-model="checkboxAnswer" value="香蕉">
  <label for="banana">香蕉</label>
  <br>
  <input id="pineapple" type="checkbox" v-model="checkboxAnswer" value="鳳梨">
  <label for="pineapple">鳳梨</label>
  <br>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      checkboxAnswer: []
    }
  }
}).mount("#app");
\`\`\`
-----------------------------------------------
### radio單選
\`\`\`html
<div id="app">
  <p>您選擇的是：{{ radioAnswer }}</p>
  <input id="apple" type="radio" v-model="radioAnswer" value="蘋果">
  <label for="apple">蘋果</label>
  <br>
  <input id="banana" type="radio" v-model="radioAnswer" value="香蕉">
  <label for="banana">香蕉</label>
  <br>
  <input id="pineapple" type="radio" v-model="radioAnswer" value="鳳梨">
  <label for="pineapple">鳳梨</label>
  <br>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      radioAnswer: "蘋果"
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
### select單選
\`\`\`html
<div id="app">
  <p>您選擇的水果：{{ selectAnswer }}</p>
  <select v-model="selectAnswer">
    <option value="">請選擇水果</option>
    <option value="蘋果">蘋果apple</option>
    <option value="香蕉">香蕉banana</option>
    <option value="鳳梨">鳳梨pineapple</option>
  </select>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      selectAnswer: ""
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
### select多選
\`\`\`html
<div id="app">
  <p>您選擇的水果：{{ selectAnswer.join() }}</p>
  <select v-model="selectAnswer" multiple>
    <option value="" disabled>請選擇水果</option>
    <option value="蘋果">蘋果apple</option>
    <option value="香蕉">香蕉banana</option>
    <option value="鳳梨">鳳梨pineapple</option>
  </select>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      selectAnswer: []
    }
  }
}).mount("#app");
\`\`\``,__vite_glob_0_129=Object.freeze(Object.defineProperty({__proto__:null,default:_20241215Vue3VModel____},Symbol.toStringTag,{value:"Module"})),_20241216Vue3Input___=`---
title: 【Vue3】input修飾符
date: 2024-12-16
tags: ["Vue3"]
---
### lazy延遲
\`\`\`html
<div id="app">
  <p>{{ inputValue }}</p>
  <input type="text" v-model.lazy="inputValue">
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      inputValue: ""
    }
  }
}).mount("#app");
\`\`\`
\`當加上.lazy後在focus輸入資料時，資料都不會同步，直到離開焦點時，才會把值同步到data\`

-----------------------------------------------
### number純數字
\`\`\`html
<div id="app">
  <p>{{ inputValue }}</p>
  <p>型別是：{{ typeof(inputValue) }}</p>
  <input type="number" v-model.number="inputValue">
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      inputValue: ""
    }
  }
}).mount("#app");
\`\`\`
\`input的值都是string，加上.number可以直接轉換成number，但前提是input的type也要是number\`

-----------------------------------------------
### trim去掉前後空白
\`\`\`html
<div id="app">
  <p>{{ inputValue }}</p>
  <input type="text" v-model.trim="inputValue">
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      inputValue: ""
    }
  }
}).mount("#app");
\`\`\`
\`適合使用在text或email格式\``,__vite_glob_0_130=Object.freeze(Object.defineProperty({__proto__:null,default:_20241216Vue3Input___},Symbol.toStringTag,{value:"Module"})),_20241217Vue3VOn_____=`---
title: 【Vue3】v-on使用者事件
date: 2024-12-17
tags: ["Vue3"]
---
### 效果切換按鈕
\`\`\`html
<div id="app">
  <div class="box" :class="{ rotate : isTransform }"></div>
  <button type="button" @click="changeClass">按鈕</button>
</div>
\`\`\`
\`\`\`css
.box{
  width: 40px;
  height: 40px;
  border: solid 1px #cccccc;
}
.rotate{
  transform: rotate(45deg);
}
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      isTransform: true
    }
  },
  methods:{
    changeClass(){
      this.isTransform = !this.isTransform;
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
### 效果切換按鈕(帶參數)
\`\`\`html
<div id="app">
  <div class="box" :class="{ rotate : isTransform }"></div>
  <button type="button" @click="changeClass('isTransform')">按鈕</button>
</div>
\`\`\`
\`\`\`css
.box{
  width: 40px;
  height: 40px;
  border: solid 1px #cccccc;
}
.rotate{
  transform: rotate(45deg);
}
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      isTransform: true
    }
  },
  methods:{
    changeClass(item){
      this[item] = !this[item];
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
### 驗證表單＋事件綁定在表單本身上
\`\`\`html
<div id="app">
  <form @submit.prevent="submitForm">
    <input type="text">
    <button>按鈕</button>
  </form>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  methods:{
    submitForm(){
      console.log("表單已送出")
    }
  }
}).mount("#app");
\`\`\`
\`只有綁定@submit會有表單原生的轉跳事件，需要使用.prevent\`

-----------------------------------------------
### 動態事件
\`\`\`html
<div id="app">
  <button type="button" @[event]="dynamicEvent">按鈕</button>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      event: "click"
    }
  },
  methods:{
    dynamicEvent(){
      console.log("這是一個動態事件")
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
### 動態物件方法
\`\`\`html
<div id="app">
  <button type="button" @="{
    mousedown: down,
    mouseup: up
  }">按鈕</button>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  methods:{
    down(){
      console.log("按下");
    },
    up(){
      console.log("放開")
    }
  }
}).mount("#app");
\`\`\`
\`當按下按鈕時不放，出現"按下";鬆開滑鼠左鍵後，出現"放開"\``,__vite_glob_0_131=Object.freeze(Object.defineProperty({__proto__:null,default:_20241217Vue3VOn_____},Symbol.toStringTag,{value:"Module"})),_20241218Vue3VOn___=`---
title: 【Vue3】v-on修飾符
date: 2024-12-18
tags: ["Vue3"]
---
### 指定鍵盤按鍵觸發事件
\`\`\`html
<div id="app">
  <label>按enter鍵觸發事件</label>
  <input type="text" @keyup.enter="keyDown">
  <br>
  <label>按shift+enter鍵觸發事件</label>
  <input type="text" @keyup.shift.enter="keyDown">
  <br>
  <label>按p鍵觸發事件</label>
  <input type="text" @keyup.p="keyDown">
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  methods:{
    keyDown(){
      console.log("您已成功觸發事件");
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
### 按下指定滑鼠鍵觸發事件
\`\`\`html
<div id="app">
  <button type="button" @click.left="clickMouse">用左鍵按觸發</button>
  <button type="button" @click.right="clickMouse">用右鍵按觸發</button>
  <button type="button" @click.middle="clickMouse">用中鍵按觸發</button>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  methods:{
    clickMouse(){
      console.log("您已成功觸發事件");
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
### 阻止事件冒泡(一般情況)
\`\`\`html
<div id="app">
  <ul @click="clickElement('ul')">
    <li @click="clickElement('li')">
      <button type="button" @click="clickElement('btn')">按鈕</button>
    </li>
  </ul>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  methods:{
    clickElement(item){
      console.log("您已觸發"+item);
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
### stopPropagation(防止向外尋找)
\`\`\`html
<div id="app">
  <ul @click="clickElement('ul')">
    <li @click.stop="clickElement('li')">
      <button type="button" @click="clickElement('btn')">按鈕</button>
    </li>
  </ul>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  methods:{
    clickElement(item){
      console.log("您已觸發"+item);
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
### 事件偵聽器使用capture(事件由外而內)
\`\`\`html
<div id="app">
  <ul @click.capture="clickElement('ul')">
    <li @click.capture="clickElement('li')">
      <button type="button" @click.capture="clickElement('btn')">按鈕</button>
    </li>
  </ul>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  methods:{
    clickElement(item){
      console.log("您已觸發"+item);
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
### 事件偵聽器使用self(只觸發自己)
\`\`\`html
<div id="app">
  <ul @click.self="clickElement('ul')">
    <li @click.self="clickElement('li')">
      <button type="button" @click.self="clickElement('btn')">按鈕</button>
    </li>
  </ul>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  methods:{
    clickElement(item){
      console.log("您已觸發"+item);
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
### 事件偵聽器使用once(只觸發一次)
\`\`\`html
<div id="app">
  <ul @click.once="clickElement('ul')">
    <li @click.once="clickElement('li')">
      <button type="button" @click.once="clickElement('btn')">按鈕</button>
    </li>
  </ul>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  methods:{
    clickElement(item){
      console.log("您已觸發"+item);
    }
  }
}).mount("#app");
\`\`\``,__vite_glob_0_132=Object.freeze(Object.defineProperty({__proto__:null,default:_20241218Vue3VOn___},Symbol.toStringTag,{value:"Module"})),_20241219Vue3VOnDOM__=`---
title: 【Vue3】v-onDOM元素
date: 2024-12-19
tags: ["Vue3"]
---
### 指定鍵盤按鍵觸發事件
\`\`\`html
<div id="app">
  <label>按enter鍵觸發事件</label>
  <input type="text" @keyup.enter="keyDown">
  <br>
  <label>按shift+enter鍵觸發事件</label>
  <input type="text" @keyup.shift.enter="keyDown">
  <br>
  <label>按p鍵觸發事件</label>
  <input type="text" @keyup.p="keyDown">
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  methods:{
    keyDown(){
      console.log("您已成功觸發事件");
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
### 按下指定滑鼠鍵觸發事件
\`\`\`html
<div id="app">
  <button type="button" @click.left="clickMouse">用左鍵按觸發</button>
  <button type="button" @click.right="clickMouse">用右鍵按觸發</button>
  <button type="button" @click.middle="clickMouse">用中鍵按觸發</button>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  methods:{
    clickMouse(){
      console.log("您已成功觸發事件");
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
### 阻止事件冒泡(一般情況)
\`\`\`html
<div id="app">
  <ul @click="clickElement('ul')">
    <li @click="clickElement('li')">
      <button type="button" @click="clickElement('btn')">按鈕</button>
    </li>
  </ul>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  methods:{
    clickElement(item){
      console.log("您已觸發"+item);
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
### stopPropagation(防止向外尋找)
\`\`\`html
<div id="app">
  <ul @click="clickElement('ul')">
    <li @click.stop="clickElement('li')">
      <button type="button" @click="clickElement('btn')">按鈕</button>
    </li>
  </ul>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  methods:{
    clickElement(item){
      console.log("您已觸發"+item);
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
### 事件偵聽器使用capture(事件由外而內)
\`\`\`html
<div id="app">
  <ul @click.capture="clickElement('ul')">
    <li @click.capture="clickElement('li')">
      <button type="button" @click.capture="clickElement('btn')">按鈕</button>
    </li>
  </ul>
</div>
\`\`\`
#
\`\`\`js
Vue.createApp({
  methods:{
    clickElement(item){
      console.log("您已觸發"+item);
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
### 事件偵聽器使用self(只觸發自己)
\`\`\`html
<div id="app">
  <ul @click.self="clickElement('ul')">
    <li @click.self="clickElement('li')">
      <button type="button" @click.self="clickElement('btn')">按鈕</button>
    </li>
  </ul>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  methods:{
    clickElement(item){
      console.log("您已觸發"+item);
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
### 事件偵聽器使用once(只觸發一次)
\`\`\`html
<div id="app">
  <ul @click.once="clickElement('ul')">
    <li @click.once="clickElement('li')">
      <button type="button" @click.once="clickElement('btn')">按鈕</button>
    </li>
  </ul>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  methods:{
    clickElement(item){
      console.log("您已觸發"+item);
    }
  }
}).mount("#app");
\`\`\``,__vite_glob_0_133=Object.freeze(Object.defineProperty({__proto__:null,default:_20241219Vue3VOnDOM__},Symbol.toStringTag,{value:"Module"})),_20241220Vue3__________=`---
title: 【Vue3】點擊商品加入購物車
date: 2024-12-20
tags: ["Vue3"]
---
### methods方法
\`\`\`html
<div id="app">
  <ul>
    <li v-for="product in products">
      {{ product.name }} / {{ product.price }}
      <button type="button" @click="addToCart(product)">加入購物車</button>
    </li>
  </ul>
  <h6>我的購物車：</h6>
    <ul>
      <li v-for="cart in carts">
        {{ cart.name }}
      </li> 
    </ul>
    <p>總計：{{ conversionPrice(sum) }}</p>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      products:[
        {
          name: '蛋餅',
          price: 30,
          vegan: false
        },
        {
          name: '飯糰',
          price: 35,
          vegan: false
        },
        {
          name: '小籠包',
          price: 60,
          vegan: false
        },
        {
          name: '蘿蔔糕',
          price: 30,
          vegan: true
        },
      ],
      carts:[],
      sum: 0
    }
  },
  methods:{
    //商品加入購物車
    addToCart(product){
      this.carts.push(product)
      this.calculatePrice();
    },
    //計算購物車內的總金額
    calculatePrice(){
      let total = 0;
      this.carts.forEach((item)=>{
        total += item.price;
      })
      this.sum = total;
    },
    //轉換金額顯示格式
    conversionPrice(price){
      return \`NT$ \${price}\`
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
### computed方法
\`\`\`html
<div id="app">
  <ul>
    <li v-for="product in products">
      {{ product.name }} / {{ product.price }}
      <button type="button" @click="addToCart(product)">加入購物車</button>
    </li>
  </ul>
  <h6>我的購物車：</h6>
    <ul>
      <li v-for="cart in carts">
        {{ cart.name }}
      </li> 
    </ul>
    <p>總計：{{ calculateTotal }}</p>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      products:[
        {
          name: '蛋餅',
          price: 30,
          vegan: false
        },
        {
          name: '飯糰',
          price: 35,
          vegan: false
        },
        {
          name: '小籠包',
          price: 60,
          vegan: false
        },
        {
          name: '蘿蔔糕',
          price: 30,
          vegan: true
        },
      ],
      carts:[],
      sum: 0
    }
  },
  methods:{
    addToCart(product){
      this.carts.push(product)
    }
  },
  computed:{
    calculateTotal(){
      let total = 0;
      this.carts.forEach((item)=>{
        total += item.price;
      })
      this.sum = total;
      return \`NT$ \${total}\`
    }
  }
}).mount("#app");
\`\`\``,__vite_glob_0_134=Object.freeze(Object.defineProperty({__proto__:null,default:_20241220Vue3__________},Symbol.toStringTag,{value:"Module"})),_20241221Vue3__computed______=`---
title: 【Vue3】用computed進行搜尋過濾
date: 2024-12-21
tags: ["Vue3"]
---
#### methods方法
\`\`\`html
<div id="app">
  <input type="search" v-model="search">
  <h6>搜尋結果：</h6>
  <ul>
    <li v-for="product in filterProducts">
      {{ product.name }} / {{ product.price }}
    </li>
  </ul>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      products:[
        {
          name: '蛋餅',
          price: 30,
          vegan: false
        },
        {
          name: '飯糰',
          price: 35,
          vegan: false
        },
        {
          name: '小籠包',
          price: 60,
          vegan: false
        },
        {
          name: '蘿蔔糕',
          price: 30,
          vegan: true
        },
      ],
      search: ""
    }
  },
  computed:{
    filterProducts(){
      return this.products.filter((item)=>{
        return item.name.match(this.search);
      })
    }
  }
}).mount("#app");
\`\`\``,__vite_glob_0_135=Object.freeze(Object.defineProperty({__proto__:null,default:_20241221Vue3__computed______},Symbol.toStringTag,{value:"Module"})),_20241222Vue3__computed______=`---
title: 【Vue3】用computed進行計算處理
date: 2024-12-22
tags: ["Vue3"]
---
### getter、setter
\`\`\`html
<div id="app">
  <ul>
    <li v-for="product in products">
      {{ product.name }} / {{ product.price }}
      <button type="button" @click="addToCart(product)">加入購物車</button>
    </li>
  </ul>
  <h6>購買清單：</h6>
  <ul>
    <li v-for="cart in carts">
      {{cart.name}}
    </li>
  </ul>
  <p>老闆直接給優惠價：</p>
  <input type="text" v-model="num">
  <button type="button" @click="total = num">更新</button>
  <p>總計：{{ \`NT$ \${total}\` }}</p>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      num: "",
      products:[
        {
          name: '蛋餅',
          price: 30,
          vegan: false
        },
        {
          name: '飯糰',
          price: 35,
          vegan: false
        },
        {
          name: '小籠包',
          price: 60,
          vegan: false
        },
        {
          name: '蘿蔔糕',
          price: 30,
          vegan: true
        },
      ],
      carts:[],
      sum: ""
    }
  },
  methods:{
    addToCart(product){
      this.carts.push(product);
    }
  },
  computed:{
    total:{
      get(){
        let total = 0;
        this.carts.forEach((item)=>{
          total += item.price;
        })
        return this.sum || total
      },
      set(val){
        this.sum = val;
      }
    }
  }
}).mount("#app");
\`\`\`
\`get會自動接收傳入的值進行計算，set會將值更新到data\``,__vite_glob_0_136=Object.freeze(Object.defineProperty({__proto__:null,default:_20241222Vue3__computed______},Symbol.toStringTag,{value:"Module"})),_20241223Vue3__watch__data__=`---
title: 【Vue3】用watch監聽data資料
date: 2024-12-23
tags: ["Vue3"]
---
### watch新舊值介紹
\`\`\`html
<div id="app">
  <input type="text" v-model="tempName">
  <p>{{ tempName }}</p>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      tempName: "",
    }
  },
  watch:{
    //n = 新輸入的值
    //o = 上一次輸入的值
    tempName(n,o){
      console.log(n,o)
    }
  }
}).mount("#app");
\`\`\`
\`當輸入第一次值的時候，watch\`

-----------------------------------------------
### watch監看，textarea字數
\`\`\`html
<div id="app">
  <textarea v-model="tempName" cols="30" rows="5"></textarea>
  <p>您已經輸入了{{ textLength }}個字元</p>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      tempName: "",
      textLength: 0,
    }
  },
  watch:{
    tempName(n,o){
      this.textLength = \`\${n.length}\`
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
### computed監看data值有無更動
\`\`\`html
<div id="app">
  <label>商品名稱</label>
  <input type="text" v-model="productName">
  <br>
  <label>缺貨</label>
  <input type="checkbox" v-model="productStock">
  <p>{{ resultText }}</p>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      productName: "",
      productStock: false
    }
  },
  computed:{
    resultText(){
      return \`\${this.productName}目前\${this.productStock?"沒":""}有庫存\`
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
### watch監看data值有無更動
\`\`\`html
<div id="app">
  <label>商品名稱</label>
  <input type="text" v-model="productName">
  <br>
  <label>缺貨</label>
  <input type="checkbox" v-model="productStock">
  <p>{{ resultText }}</p>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      productName: "",
      productStock: false,
      resultText: ""
    }
  },
  watch:{
    productName(){
      this.resultText = \`\${this.productName}目前\${this.productStock?"沒":""}有庫存\`
    },
    productStock(){
      this.resultText = \`\${this.productName}目前\${this.productStock?"沒":""}有庫存\`
    }
  }
}).mount("#app");
\`\`\`

-----------------------------------------------
### watch監看data物件有無更動(深層監聽)
\`\`\`html
<div id="app">
  <label>商品名稱</label>
  <input type="text" v-model="product.name">
  <br>
  <label>缺貨</label>
  <input type="checkbox" v-model="product.stock">
  <p>{{ resultText }}</p>
</div>
\`\`\`
\`\`\`js
Vue.createApp({
  data(){
    return{
      product:{
        name: "",
        stock: false
      },
      resultText: ""
    }
  },
  watch:{
    product:{
      handler(n,o){
        this.resultText = \`\${this.product.name}目前\${this.product.stock?"沒":""}有庫存\`
      },
      deep: true
    }
  }
}).mount("#app");
\`\`\`
\`handler(n,o){},deep: true是固定寫法，n是新物件；o是舊物件\``,__vite_glob_0_137=Object.freeze(Object.defineProperty({__proto__:null,default:_20241223Vue3__watch__data__},Symbol.toStringTag,{value:"Module"})),_20241224Vue3Component__=`---
title: 【Vue3】component元件
date: 2024-12-24
tags: ["Vue3"]
---
### 全域註冊元件(第一種寫法)
\`\`\`html
<div id="app">
  <alert></alert>
</div>
\`\`\`
\`\`\`js
const app = Vue.createApp({
  data(){
    return{
      text: "app的文字"
    }
  }
}).component('alert',{
  data(){
    return{
      text: "元件的文字"
    }
  },
  template: \`<div class="alert alert-primary">{{ text }}</div>\`
})

app.mount("#app");
\`\`\`
\`接在createApp方法後面的component是全域註冊\`

-----------------------------------------------
### 全域註冊元件(第二種寫法)
\`\`\`html
<div id="app">
  <alert></alert>
</div>
\`\`\`
\`\`\`js
const app = Vue.createApp({
  data(){
    return{
      text: "app的文字"
    }
  }
})

app.component('alert',{
  data(){
    return{
      text: "元件的文字"
    }
  },
  template: \`<div class="alert alert-primary">{{ text }}</div>\`
})

app.mount("#app");
\`\`\`

-----------------------------------------------
### 區域註冊元件(第一種寫法)
\`\`\`html
<div id="app">
  <alert></alert>
</div>
\`\`\`
\`\`\`js
const alert = {
  data(){
    return{
      text: "元件的文字"
    }
  },
  template: \`<div class="alert alert-primary">{{ text }}</div>\`
}

const app = Vue.createApp({
  data(){
    return{
      text: "app的文字"
    }
  },
  components:{
    alert
  }
})
app.mount("#app");
\`\`\`
\`若區域元件註冊在某個元件下，那就只能在該元件的template下呼叫\`

-----------------------------------------------
### 區域註冊元件(第二種寫法，模組化)
\`\`\`js
//component-alert.js
export default{
  data(){
    return{
      text: "元件的文字"
    }
  },
  template: \`<div class="alert alert-primary">{{ text }}</div>\`
}
\`\`\`
\`\`\`html
<div id="app">
  <alert></alert>
</div>
\`\`\`
\`\`\`js
import alert from './component-alert.js';

const app = Vue.createApp({
  data(){
    return{
      text: "app的文字"
    }
  },
  components:{
    alert
  }
})
app.mount("#app");
\`\`\``,__vite_glob_0_138=Object.freeze(Object.defineProperty({__proto__:null,default:_20241224Vue3Component__},Symbol.toStringTag,{value:"Module"})),_20241225Vue3Template__=`---
title: 【Vue3】template模板
date: 2024-12-25
tags: ["Vue3"]
---
### 元件模板建立
\`\`\`html
<div id="app">
  <alert></alert>
</div>
\`\`\`
\`\`\`js
const app = Vue.createApp({})

app.component('alert',{
  template:\`<div class="alert alert-primary">元件模板</div>\`
})

app.mount("#app");
\`\`\`
-----------------------------------------------
### 元件模板＋v-for
\`\`\`html
<div id="app">
  <alert v-for="item in ArrayData"></alert>
</div>
\`\`\`
\`\`\`js
const app = Vue.createApp({
  data(){
    return{
      ArrayData:[1,2,3]
    }
  }
})

app.component('alert',{
  template:\`<div class="alert alert-primary">元件模板</div>\`
})

app.mount("#app");
\`\`\`
\`因為沒有任何傳值動作，此v-for僅會複製三次\`

-----------------------------------------------
### x-template 以腳本方式引入模板
\`\`\`html
<script type="text/x-template" id="alert-template">
  <div class="alert alert-primary">x-template所建立的模板</div>
<\/script>

<div id="app">
  <alert></alert>
</div>
\`\`\`
\`\`\`js
const app = Vue.createApp({})

app.component('alert',{
  template: "#alert-template"
})

app.mount("#app");
\`\`\`
-----------------------------------------------
### v-is載入模板
\`\`\`html
<div id="app">
  <div v-is="'alert1'"></div>
</div>
\`\`\`
\`\`\`js
const app = Vue.createApp({})

app.component('alert1',{
  template:\`<div class="alert alert-primary">元件模板1</div>\`
})

app.component('alert2',{
  template:\`<div class="alert alert-warning">元件模板2</div>\`
})

app.mount("#app");
\`\`\`
-----------------------------------------------
### v-is載入模板＋動態切換
\`\`\`html
<div id="app">
  <input type="text" v-model="componentName">
  <div v-is="componentName"></div>
</div>
\`\`\`
\`\`\`js
const app = Vue.createApp({
  data(){
    return{
      componentName: "alert1"
    }
  }
})

app.component('alert1',{
  template:\`<div class="alert alert-primary">元件模板1</div>\`
})

app.component('alert2',{
  template:\`<div class="alert alert-warning">元件模板2</div>\`
})

app.mount("#app");
\`\`\`
\`v-is裡面讀的是字串\`

-----------------------------------------------
### v-is＋table
#### 使用情境：在html結構下<tbody>裡只接受<tr>，因此<table-row>會跑版
\`\`\`html
<div id="app">
  <table>
    <thead>
      <tr>
        <td>標題</td>
        <td>內容</td>
      </tr>
    </thead>
    <tbody>
      <table-row></table-row>
    </tbody>
  </table>
</div>
\`\`\`
#### 解決辦法：
\`\`\`html
<div id="app">
  <table>
    <thead>
      <tr>
        <td>標題</td>
        <td>內容</td>
      </tr>
    </thead>
    <tbody>
      <tr v-is="'table-row'"></tr>
    </tbody>
  </table>
</div>
\`\`\`
\`\`\`js
const app = Vue.createApp({})

app.component('table-row',{
  template: \`
    <tr>
      <td>$</td>
      <td>這是一段文字</td>
    </tr>
  \`
})

app.mount("#app");
\`\`\``,__vite_glob_0_139=Object.freeze(Object.defineProperty({__proto__:null,default:_20241225Vue3Template__},Symbol.toStringTag,{value:"Module"})),_20241226Vue3Props______=`---
title: 【Vue3】props資料由外傳內
date: 2024-12-26
tags: ["Vue3"]
---
### 直接寫給子元件值
1. 在子元件建立變數，並將這個變數寫在props(陣列)
2. 在父元件使用標籤方式寫子元件，並在標籤上使用v-bind綁定屬性
3. v-bind前面寫子元件要的參數，後面填要傳入的參數
\`\`\`html
<div id="app">
  <alert :title="'modal的標題'"></alert>
</div>
\`\`\`
\`\`\`js
const app = Vue.createApp({})

app.component('alert',{
  props: ['title'],
  template: \`
    <div class="alert alert-primary">{{ title }}</div>
  \`
})

app.mount("#app");
\`\`\`
\`<alert :title="modalTitle"></alert>，口訣：前內後外\`

-----------------------------------------------
### 從父元件傳給子元件
\`\`\`html
<div id="app">
  <alert :title="modalTitle"></alert>
</div>
\`\`\`
\`\`\`js
const app = Vue.createApp({
  data(){
    return{
      modalTitle: "這是要給modal的標題"
    }
  }
})

app.component('alert',{
  props: ['title'],
  template: \`
    <div class="alert alert-primary">{{ title }}</div>
  \`
})

app.mount("#app");
\`\`\`
\`<alert :title="modalTitle"></alert>，口訣：前內後外\`

-----------------------------------------------

### 單向數據流(錯誤示範)
\`\`\`html
<div id="app">
  <alert :title="modalTitle"></alert>
</div>
\`\`\`
\`\`\`js
const app = Vue.createApp({
  data(){
    return{
      modalTitle: "這是要給modal的標題"
    }
  }
})

app.component('alert',{
  props: ['title'],
  template: \`
    <div class="alert alert-primary">{{ title }}</div>
    <input type="text" v-model="title">
  \`
  //當子元件上又有input去綁定v-model這個參數值，會發生錯誤
})

app.mount("#app");
\`\`\`
-----------------------------------------------
### 命名限制(駝峰需轉成-)
\`\`\`html
<div id="app">
  <!-- 如果props傳來的是駝峰，標籤就需轉成- -->
  <alert :title-name="modalTitle"></alert>
</div>
\`\`\`
\`\`\`js
const app = Vue.createApp({
  data(){
    return{
      modalTitle: "這是要給modal的標題"
    }
  }
})

app.component('alert',{
  //如果要使用駝峰名稱，標籤就需轉成-
  props: ['titleName'],
  template: \`
    <div class="alert alert-primary">{{ titleName }}</div>
  \`
})

app.mount("#app");
\`\`\`
\`因為html只能接受英文小寫\`

-----------------------------------------------
### props傳進子元件的值(查看型別)
\`\`\`html
<div id="app">
  <table-component value="300"></table-component> <!-- string -->
  <table-component :value="300"></table-component> <!-- number -->
  <table-component :value="price"></table-component> <!-- number -->
  <table-component :value="isStock"></table-component> <!-- boolean -->
</div>
\`\`\`
\`\`\`js
const app = Vue.createApp({
  data(){
    return{
      price: 300,
      isStock: false
    }
  }
})

app.component('table-component',{
  props: ['value','type'],
  template: \`
    <table border>
      <thead>
        <tr>
          <td>傳入的值</td>
          <td>型別</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ value }}</td>
          <td>{{ typeof(value) }}</td>
        </tr>
      </tbody>
    </table>
  \`
})

app.mount("#app");
\`\`\`
\`沒有使用v-bind屬性綁定傳值，不論傳入什麼都是字串\`

-----------------------------------------------
### props傳進子元件的值(型別驗證，查看傳入的是不是函式)
\`\`\`html
<div id="app">
  <table-component :props-a="fnA"></table-component>
</div>
\`\`\`
#
\`\`\`js
const app = Vue.createApp({
  data(){
    return{
      fnA: function(){ return "A" }
    }
  }
})

app.component('table-component',{
  props:{
    //對應html標籤上的v-bind:props-a: 要驗證的型別
    propsA: Function
  },
  template: \`
    <table border>
      <thead>
        <tr>
          <td>傳入的值</td>
          <td>型別</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ propsA }}</td>
          <td>{{ typeof(propsA) }}</td>
        </tr>
      </tbody>
    </table>
  \`
})

app.mount("#app");
\`\`\`
-----------------------------------------------
### props傳進子元件的值(型別驗證，查看傳入的值是不是必填)
\`\`\`html
<div id="app">
  <table-component :props-c="text"></table-component>
  <table-component :props-c="num"></table-component>
</div>
\`\`\`
\`\`\`js
const app = Vue.createApp({
  data(){
    return{
      text: "這是一個字串",
      num: 300
    }
  }
})

app.component('table-component',{
  props:{
    propsC: {
      type: String,
      required: true
    }
  },
  template: \`
    <table border>
      <thead>
        <tr>
          <td>傳入的值</td>
          <td>型別</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ propsC }}</td>
          <td>{{ typeof(propsC) }}</td>
        </tr>
      </tbody>
    </table>
  \`
})

app.mount("#app");
\`\`\`
-----------------------------------------------
### props傳進子元件的值(型別驗證，給預設值)
\`\`\`html
<div id="app">
  <table-component></table-component>
</div>
\`\`\`
\`\`\`js
const app = Vue.createApp({})

app.component('table-component',{
  props:{
    propsD: {
      type: Number,
      default: 300
    }
  },
  template: \`
    <table border>
      <thead>
        <tr>
          <td>傳入的值</td>
          <td>型別</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ propsD }}</td>
          <td>{{ typeof(propsD) }}</td>
        </tr>
      </tbody>
    </table>
  \`
})

app.mount("#app");
\`\`\`
\`props沒有傳值時，propsD會自動顯示預設值：300\``,__vite_glob_0_140=Object.freeze(Object.defineProperty({__proto__:null,default:_20241226Vue3Props______},Symbol.toStringTag,{value:"Module"})),_20241227Vue3Emit______=`---
title: 【Vue3】emit資料由內傳外
date: 2024-12-27
tags: ["Vue3"]
---
### 點擊子元件，改變父元件資料
1. 先在父元件上建立好data和methods方法
2. 在子元件上綁定寫methods($emit)並綁定在按鈕上
3. 在template標籤上使用v-on:emit方法="要觸發的父層方法"
\`\`\`html
<div id="app">
  <p>{{ num }}</p>
  <add-btn @add-num="addNum"></add-btn>
</div>
\`\`\`
\`\`\`js
const app = Vue.createApp({
  data(){
    return{
      num: 0
    }
  },
  methods:{
    addNum(){
      this.num += 1;
    }
  }
})

app.component('add-btn',{
  methods:{
    emitAddNum(){
      this.$emit('add-num')     
    }
  },
  template:\`<button type="button" @click="emitAddNum">增加</button>\`
})

app.mount("#app");
\`\`\`
#### 簡化寫法：
\`\`\`js
const app = Vue.createApp({
  data(){
    return{
      num: 0
    }
  },
  methods:{
    addNum(){
      this.num += 1;
    }
  }
})

app.component('add-btn',{
  template:\`<button type="button" @click="$emit('add-num')">增加</button>\`
})

app.mount("#app");
\`\`\`
-----------------------------------------------
### 點擊子元件，改變父元件資料(帶參數)
\`\`\`html
<div id="app">
  <p>接收資料：{{ text }}</p>
  <send-btn @emit-text="showData"></send-btn>
</div>
\`\`\`
\`\`\`js
const app = Vue.createApp({
  data(){
    return{
      text: ""
    }
  },
  methods:{
    showData(item){
      this.text = item;
    }
  }
})

app.component('send-btn',{
  methods:{
    emitSendData(){
      this.$emit('emit-text','這是子元件傳給父元件的文字')     
    }
  },
  template:\`<button type="button" @click="emitSendData">傳送資料</button>\`
})

app.mount("#app");
\`\`\`
#### 簡化寫法：
\`\`\`js
const app = Vue.createApp({
  data(){
    return{
      text: ""
    }
  },
  methods:{
    showData(item){
      this.text = item;
    }
  }
})

app.component('send-btn',{
  template:\`<button type="button" @click="$emit('emit-text','這是子元件傳給父元件的文字') ">傳送資料</button>\`
})

app.mount("#app");
\`\`\`
-----------------------------------------------
### 點擊子元件，改變父元件資料(將子元件的資料作為參數)
\`\`\`html
<div id="app">
  <p>目前數量：{{ num }}</p>
  <add-btn @add-num="addNum"></add-btn>
</div>
\`\`\`
\`\`\`js
const app = Vue.createApp({
  data(){
    return{
      num: 0
    }
  },
  methods:{
    addNum(count){
      this.num += count;
    }
  }
})

app.component('add-btn',{
  data(){
    return{
      count: 2
    }
  },
  template:\`<button type="button" @click="$emit('add-num',count)">增加{{ count }}</button>\`
})

app.mount("#app");
\`\`\`
-----------------------------------------------
### emit型別驗證(出現錯誤)
\`\`\`html
<div id="app">
  <p>目前數量：{{ num }}</p>
  <add-btn @add-num="addNum"></add-btn>
</div>
\`\`\`
\`\`\`js
const app = Vue.createApp({
  data(){
    return{
      num: 0
    }
  },
  methods:{
    addNum(count){
      this.num += count;
    }
  }
})

app.component('add-btn',{
  data(){
    return{
      count: 2
    }
  },
  template:\`
  <button type="button" @click="$emit('add-num',count)">增加{{ count }}</button>
  <button type="button" @click="count++">增加按鈕的數字</button>
  \`
})

app.mount("#app");
\`\`\`
#### 修正寫法：
\`\`\`js
const app = Vue.createApp({
  data(){
    return{
      num: 0
    }
  },
  methods:{
    addNum(count){
      this.num += count;
    }
  }
})

app.component('add-btn',{
  data(){
    return{
      count: 2
    }
  },
  emits:['add-num'],
  template:\`
  <button type="button" @click="$emit('add-num',count)">增加{{ count }}</button>
  <button type="button" @click="count++">增加按鈕的數字</button>
  \`
})

app.mount("#app");
\`\`\`
-----------------------------------------------
### 實作彈跳視窗(emit)
\`\`\`html
<div id="app">
  <button type="button" @click="openAlert">顯示跳窗</button>
  <alert-component v-if="showAlert" @emit-alert="closeAlert"></alert-component>
</div>
\`\`\`
\`\`\`js
const app = Vue.createApp({
  data(){
    return{
      showAlert: false
    }
  },
  methods:{
    openAlert(){
      this.showAlert = true;
    },
    closeAlert(){
      this.showAlert = false;
    }
  }
})

app.component('alert-component',{
  methods:{
    emitAlert(){
      this.$emit("emit-alert")
    }
  },
  template:\`
  <div class="alert alert-primary">這是子元件的跳窗
    <button type="button" class="close" @click="emitAlert">&times;</button>
  </div>
  \`
})

app.mount("#app");
\`\`\``,__vite_glob_0_141=Object.freeze(Object.defineProperty({__proto__:null,default:_20241227Vue3Emit______},Symbol.toStringTag,{value:"Module"})),_20241228Vue3___alert____=`---
title: 【Vue3】實作alert彈跳視窗
date: 2024-12-28
tags: ["Vue3"]
---
### 彈跳視窗
\`\`\`html
<div id="app">
  <button type="button" @click="openAlert">顯示跳窗</button>
  <alert-component v-if="showAlert" @emit-alert="closeAlert" :title="alertText"></alert-component>
</div>
\`\`\`
\`\`\`js
const app = Vue.createApp({
  data(){
    return{
      showAlert: false,
      alertText: "父元件的標題名稱"
    }
  },
  methods:{
    openAlert(){
      this.showAlert = true;
    },
    closeAlert(){
      this.showAlert = false;
    }
  }
})

app.component('alert-component',{
  props:["title"],
  methods:{
    emitAlert(){
      this.$emit("emit-alert")
    }
  },
  template:\`
  <div class="alert alert-primary">{{ title }}
    <button type="button" class="close" @click="emitAlert">&times;</button>
  </div>
  \`
})

app.mount("#app");
\`\`\``,__vite_glob_0_142=Object.freeze(Object.defineProperty({__proto__:null,default:_20241228Vue3___alert____},Symbol.toStringTag,{value:"Module"})),_20241229Vue3Slot____=`---
title: 【Vue3】slot元件插巢
date: 2024-12-29
tags: ["Vue3"]
---
### 卡片元件
\`\`\`html
<div id="app">
  <card-component></card-component>
</div>
\`\`\`
\`\`\`js
const app = Vue.createApp({ })

app.component('card-component',{
  data(){
    return{
      count: 2
    }
  },
  template:\`
  <div class="card">
    <div class="card-header">卡片標題</div>
    <div class="card-body">
      <p class="card-text">卡片內容</p>
    </div>
    <div class="card-footer text-muted">卡片底部</div>
  </div>
  \`
})

app.mount("#app");
\`\`\`
-----------------------------------------------
### 卡片元件＋不具名slot
\`\`\`html
<div id="app">
  <card-component>
    <p>這是我自訂的內容</p>
  </card-component>
</div>
\`\`\`
\`\`\`js
const app = Vue.createApp({ })

app.component('card-component',{
  data(){
    return{
      count: 2
    }
  },
  template:\`
  <div class="card">
    <div class="card-header">卡片標題</div>
    <div class="card-body">
      <p class="card-text">
        <slot><slot>
      </p>
    </div>
    <div class="card-footer text-muted">卡片底部</div>
  </div>
  \`
})

app.mount("#app");
\`\`\`
-----------------------------------------------
### 卡片元件＋具名slot
\`\`\`html
<div id="app">
  <card-component>
    <template v-slot:header>自定義的標題</template>
    <template v-slot:default>自定義的內容</template>
    <template v-slot:footer>自定義的底部</template>
  </card-component>
</div>
\`\`\`
\`\`\`js
const app = Vue.createApp({})

app.component('card-component',{
  data(){
    return{
      count: 2
    }
  },
  template:\`
  <div class="card">
    <div class="card-header">
      <slot name="header">卡片標題</slot>
    </div>
    <div class="card-body">
      <p class="card-text">
        <slot>卡片內容</slot>
      </p>
    </div>
    <div class="card-footer text-muted">
      <slot name="footer">卡片底部</slot>
    </div>
  </div>
  \`
})

app.mount("#app");
\`\`\`
#### 縮寫：
\`\`\`html
<div id="app">
  <card-component>
    <template #header>自定義的標題</template>
    <template #default>自定義的內容</template>
    <template #footer>自定義的底部</template>
  </card-component>
</div>
\`\`\`
\`如果沒有寫對應的<template v-slot>，就會顯示原本的內容\` 

-----------------------------------------------
### 跳窗元件＋具名slot＋props傳物件
\`\`\`html
<div id="app">
  <alert-component>
    <template #slot-alert="responeText">
      {{ responeText.responeText.message }}
    </template>
  </alert-component>
</div>
\`\`\`
\`\`\`js
const app = Vue.createApp({ })

app.component('alert-component',{
  data(){
    return{
      responeText:{
        message: "註冊失敗",
      }
    }
  },
  template:\`
  <div class="alert alert-warning">
    <slot name="slot-alert" :responeText="responeText">卡片預設內容文字</slot>
  </div>
  \`
})

app.mount("#app");
\`\`\`
\`slot插巢就不用寫props\`

-----------------------------------------------
### 跳窗元件＋具名slot＋props傳物件(進階)
\`\`\`html
<div id="app">
  <alert-component :text="text">
    <template #default="{ text, text2 }">
      {{ text }}
      {{ text2 }}
    </template>
  </alert-component>
</div>
\`\`\`
#
\`\`\`js
const app = Vue.createApp({ 
  data(){
    return{
      text: "這是父層元件的文字"
    }
  }
})

app.component('alert-component',{
  props:["text"],
  data(){
    return{
      text2: "這是子元件的文字"
    }
  },
  template:\`
  <div class="alert alert-warning">
    <slot :text="text" :text2="text2">13123</slot>
  </div>
  \`
})

app.mount("#app");
\`\`\``,__vite_glob_0_143=Object.freeze(Object.defineProperty({__proto__:null,default:_20241229Vue3Slot____},Symbol.toStringTag,{value:"Module"})),_20241230Vue3Mitt______=`---
title: 【Vue3】mitt跨元件傳資料
date: 2024-12-30
tags: ["Vue3"]
---
### 使用mitt套件
1. 引入[mitt的CDN](https://unpkg.com/mitt/dist/mitt.umd.js)
2. 定義mitt套件
3. 在發送資料元件的方法上使用emit(自訂事件名稱,要傳的資料)
4. 在接收資料元件的created方法上使用emit(自訂事件名稱,函式)
\`\`\`html
<div id="app">
  <show-component></show-component>
  <send-component></send-component>
</div>
\`\`\`
\`\`\`js
const emitter = mitt();

const app = Vue.createApp({})

app.component('show-component',{
  data(){
    return{
      item:{}
    }
  },
  created(){
    emitter.on("fruitsData",(item)=>{
      this.item = item;
    })
  },
  template:\`
    <div class="card">
      <div class="card-body">
        {{ item }}
      </div>
    </div>
  \`
})

app.component('send-component',{
  data(){
    return{
      data:{
        name: "蘋果"
      }
    }
  },
  methods:{
    sendData(){
      emitter.emit("fruitsData",this.data)
    }
  },
  template:\`
    <button type="button" @click="sendData">按鈕</button>
  \`
})

app.mount("#app");
\`\`\``,__vite_glob_0_144=Object.freeze(Object.defineProperty({__proto__:null,default:_20241230Vue3Mitt______},Symbol.toStringTag,{value:"Module"})),_20250101Vue3Ref__DOM___copy=`---
title: 【Vue3】ref操作DOM元素
date: 2025-01-01
tags: ["Vue3"]
---
### 抓取DOM元素
\`\`\`html
<div id="app">
  <input type="text" ref="textInput">
  <button type="button" @click="getInputValue">按鈕</button>
</div>
\`\`\`
\`\`\`js
const app = Vue.createApp({
  methods:{
    getInputValue(){
      console.log(this.$refs.textInput);
    }
  }
})

app.mount("#app");
\`\`\`
-----------------------------------------------
### 抓取DOM＋父元件操控資料
\`\`\`
<div id="app">
  <card-component ref="card"></card-component>
  <button type="button" @click="changeCardValue">按鈕</button>
</div>
\`\`\`
\`\`\`
const app = Vue.createApp({
  methods:{
    changeCardValue(){
      this.$refs.card.title = "新的卡片標題";
      this.$refs.card.content = "新的卡片內容文字";
      this.$refs.card.footer = "新的卡片底部文字"
    }
  }
})

app.component('card-component',{
  data(){
    return{
      title: "卡片標題",
      content: "卡片內容",
      footer: "卡片底部"
    }
  },
  template:\`
    <div class="card">
      <div class="card-header">
        {{ title }}
      </div>
      <div class="card-body">
        {{ content }}
      </div>
      <div class="card-header">
        {{ footer }}
      </div>
    </div>
  \`
})
app.mount("#app");
\`\`\`
-----------------------------------------------
### 實作用ref抓取Bootstrap5的Modal元件
\`\`\`html
<div id="app">
  <div class="modal" tabindex="-1" ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  <button type="button" @click="openModal">按鈕</button>
</div>
\`\`\`
\`\`\`js
const app = Vue.createApp({
  data(){
    return{
      bsModal: ""
    }
  },
  methods:{
    openModal(){
      this.bsModal.show()
    }
  },
  mounted(){
    this.bsModal = new bootstrap.Modal(this.$refs.modal);
  }
})

app.mount("#app");
\`\`\`
-----------------------------------------------
## 實作用ref抓取Bootstrap5的Modal元件(進階版)
\`\`\`html
<div id="app">
  <modal-component ref="modalDom"></modal-component>
  <button type="button" @click="openModal">按鈕</button>
</div>
\`\`\`
\`\`\`js
const app = Vue.createApp({ 
  methods:{
    openModal(){
      this.$refs.modalDom.bsModal.show()
    }
  }
})

app.component('modal-component',{
  data(){
    return{
      bsModal: ""
    }
  },
  mounted(){
    this.bsModal = new bootstrap.Modal(this.$refs.modalDom);
  },
  template:\`
  <div class="modal" tabindex="-1" ref="modalDom">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  \`
})

app.mount("#app");
\`\`\``,__vite_glob_0_145=Object.freeze(Object.defineProperty({__proto__:null,default:_20250101Vue3Ref__DOM___copy},Symbol.toStringTag,{value:"Module"})),_20260117Vue3___vite_vue3_tailwind4_1__=`---
title: 【Vue3】建立vite+vue3+tailwind4.1環境
date: 2026-01-17
tags: ["Vue3"]
---
### 建立vite專案
1. 建立資料夾
#### (補充)確認npm版本：
\`\`\`
$ npm -v
\`\`\`
\`查看npm目前使用版本\`
\`\`\`
$ nvm ls
\`\`\`
\`查看已安裝的npm版本清單\`
\`\`\`
$ nvm use 22
\`\`\`
\`使用npm版本22\`
\`\`\`
$ nvm alias default 22
\`\`\`
\`將npm版本22作為預設\`

3. 安裝vite專案(最新版)
\`\`\`
$ npm create vite@latest
\`\`\`
4. 安裝node_modules
\`\`\`
$ npm i
\`\`\`
-----------------------------------------------
### 安裝tailwindcss
1. 在vite安裝tailwindcss
\`\`\`
$ npm i tailwindcss @tailwindcss/vite
\`\`\`
2. 引入tailwindcss到vite，在專案根目錄建立vite.config.js
\`\`\`js
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
\`\`\`
3. 在style.css寫上tailwindcss語法
\`\`\`css
/* style.css */

@import "tailwindcss";
\`\`\`
4. 在main.js進入點引入css檔
\`\`\`js
// main.js

import './style.css'

import App from './App.vue'
const app = createApp(App)
app.mount('#app')
\`\`\`
-----------------------------------------------
### 執行專案
要運行專案的指令，存放在package.json
\`\`\`json
// package.json

"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
},
\`\`\`
#### 執行專案：
\`\`\`
$ npm run dev
\`\`\`
#### 建立編譯檔：
\`\`\`
$ npm run build
\`\`\`
#### 觀看專案：
\`\`\`
$ npm run preview
\`\`\`
-----------------------------------------------
### 關於setup
#### vue2：
元件建立得時候在setup()宣告的資料，必須要return，才能讓template使用
\`\`\`js
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
<\/script>
\`\`\`
#### vue3：
\`<script setup>\`是setup()的簡化寫法，他會自動把setup()內的資料，return出來
\`\`\`js
<script setup>
import { ref } from 'vue';

const count = ref(1);
const addCount = () => {
  count.value++;
};
<\/script>
\`\`\`
-----------------------------------------------
### 透過setup傳接props
#### 傳統setup()：
\`\`\`js
setup(props, context) {
  console.log(props.count);
}
\`\`\`
\`props：父元件傳來的資料\`
\`context：emit、attrs、slots\`
#### 新setup()：
在子元件接收：
\`\`\`js
<script setup>
import { defineProps } from 'vue';

defineProps({
  count: {
    type: Number
  }
});
<\/script>

<template>
  {{ count }}
</template>
\`\`\``,__vite_glob_0_146=Object.freeze(Object.defineProperty({__proto__:null,default:_20260117Vue3___vite_vue3_tailwind4_1__},Symbol.toStringTag,{value:"Module"})),_20260118Vue3Setup_defineProps__=`---
title: 【Vue3】setup與defineProps傳值
date: 2026-01-18
tags: ["Vue3"]
---
### 關於setup
#### vue2：
元件建立得時候在\`setup()\`宣告的資料，必須要\`return\`，才能讓\`template\`使用
\`\`\`js
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
<\/script>
\`\`\`
#### vue3：
\`<script setup>\`是簡化寫法，他會自動把\`setup()\`內的資料，return出來
\`\`\`js
<script setup>
import { ref } from 'vue';

const count = ref(1);
const addCount = () => {
  count.value++;
};
<\/script>
\`\`\`
-----------------------------------------------
### defineProps傳接資料
1. \`defineProps()\`只在\`<script setup>\`能用
2. \`props\`是唯讀的(read-only)只能用，不能改
#### 在父層：
\`\`\`js
<script setup>
import AddTodo from 'components/AddTodo.vue';
import { ref } from 'vue';
const count = ref(0);
const addCount = () => {
    count.value += 1;
}
<\/script>

<template>
    <button type="button" @click="addCount()">按鈕</button>
    <addTodo :count="count"></addTodo>
</template>
\`\`\`
\`:count\`表示動態綁定
#### 在子層(AddTodo)：
\`defineProps()\`會自動宣告props的型別，\`template\`實際上是使用props.count
但\`<script setup>\`會自動省略\`props.\`
\`\`\`js
<template>
  {{ count }} 
</template>
<script setup>
import { defineProps } from 'vue';
defineProps({
  count:{
    type: Number
  }
})
<\/script>
\`\`\``,__vite_glob_0_147=Object.freeze(Object.defineProperty({__proto__:null,default:_20260118Vue3Setup_defineProps__},Symbol.toStringTag,{value:"Module"})),_20260119Vue3_______github_pages='---\ntitle: 【Vue3】將網站部署到github pages\ndate: 2026-01-19\ntags: ["Vue3"]\n---\n### 在github建立新的repository\n1. 建立`repository`時，網址為`帳號`/`專案名稱`\n2. 若已在`vscode`已經，建立了`git`檔，可以選擇推送儲存庫\n#### 推送儲存庫指令：\n```\ngit remote add origin https://github.com/帳號/vuetest.git\ngit branch -M main\ngit push -u origin main\n```\n3. 在專案中的終端機輸入以上指令，並且授權github允許存取vscode\n4. 回到github重整頁面，可以看到資料已上傳\n\n-----------------------------------------------\n### 將dist部署到github page上\n1. 安裝`gh-pages`套件\n```\n$ npm i gh-pages\n```\n2. 新增`部署`指令，到`package.json`\n```js\n"scripts": {\n  "dev": "vite",\n  "build": "vite build",\n  "preview": "vite preview",\n  "deploy": "vite build && gh-pages -d dist"\n},\n```\n`gh-pages -d dist`指令表示將dist部署\n\n3. 此時若直接部署到`github`上，會因為網址不對而無法正常顯示，所以我們必須要再設定基本路徑：\n新增`base`讓名稱跟`帳號`/`vuetest`相同\n```js\n//vite.config.js\n\nexport default defineConfig({\n    base: \'/vuetest/\',\n});\n```',__vite_glob_0_148=Object.freeze(Object.defineProperty({__proto__:null,default:_20260119Vue3_______github_pages},Symbol.toStringTag,{value:"Module"})),__viteBrowserExternal={},__viteBrowserExternal$1=Object.freeze(Object.defineProperty({__proto__:null,default:__viteBrowserExternal},Symbol.toStringTag,{value:"Module"})),require$$0=getAugmentedNamespace(__viteBrowserExternal$1);var kindOf,hasRequiredKindOf;function requireKindOf(){if(hasRequiredKindOf)return kindOf;hasRequiredKindOf=1;var r=Object.prototype.toString;kindOf=function(d){if(d===void 0)return"undefined";if(d===null)return"null";var k=typeof d;if(k==="boolean")return"boolean";if(k==="string")return"string";if(k==="number")return"number";if(k==="symbol")return"symbol";if(k==="function")return u(d)?"generatorfunction":"function";if(j(d))return"array";if(i(d))return"buffer";if(t(d))return"arguments";if(p(d))return"date";if(l(d))return"error";if(c(d))return"regexp";switch(_(d)){case"Symbol":return"symbol";case"Promise":return"promise";case"WeakMap":return"weakmap";case"WeakSet":return"weakset";case"Map":return"map";case"Set":return"set";case"Int8Array":return"int8array";case"Uint8Array":return"uint8array";case"Uint8ClampedArray":return"uint8clampedarray";case"Int16Array":return"int16array";case"Uint16Array":return"uint16array";case"Int32Array":return"int32array";case"Uint32Array":return"uint32array";case"Float32Array":return"float32array";case"Float64Array":return"float64array"}if(h(d))return"generator";switch(k=r.call(d),k){case"[object Object]":return"object";case"[object Map Iterator]":return"mapiterator";case"[object Set Iterator]":return"setiterator";case"[object String Iterator]":return"stringiterator";case"[object Array Iterator]":return"arrayiterator"}return k.slice(8,-1).toLowerCase().replace(/\s/g,"")};function _(a){return typeof a.constructor=="function"?a.constructor.name:null}function j(a){return Array.isArray?Array.isArray(a):a instanceof Array}function l(a){return a instanceof Error||typeof a.message=="string"&&a.constructor&&typeof a.constructor.stackTraceLimit=="number"}function p(a){return a instanceof Date?!0:typeof a.toDateString=="function"&&typeof a.getDate=="function"&&typeof a.setDate=="function"}function c(a){return a instanceof RegExp?!0:typeof a.flags=="string"&&typeof a.ignoreCase=="boolean"&&typeof a.multiline=="boolean"&&typeof a.global=="boolean"}function u(a,d){return _(a)==="GeneratorFunction"}function h(a){return typeof a.throw=="function"&&typeof a.return=="function"&&typeof a.next=="function"}function t(a){try{if(typeof a.length=="number"&&typeof a.callee=="function")return!0}catch(d){if(d.message.indexOf("callee")!==-1)return!0}return!1}function i(a){return a.constructor&&typeof a.constructor.isBuffer=="function"?a.constructor.isBuffer(a):!1}return kindOf}var isExtendable,hasRequiredIsExtendable;function requireIsExtendable(){return hasRequiredIsExtendable||(hasRequiredIsExtendable=1,isExtendable=function(_){return typeof _<"u"&&_!==null&&(typeof _=="object"||typeof _=="function")}),isExtendable}var extendShallow,hasRequiredExtendShallow;function requireExtendShallow(){if(hasRequiredExtendShallow)return extendShallow;hasRequiredExtendShallow=1;var r=requireIsExtendable();extendShallow=function(p){r(p)||(p={});for(var c=arguments.length,u=1;u<c;u++){var h=arguments[u];r(h)&&_(p,h)}return p};function _(l,p){for(var c in p)j(p,c)&&(l[c]=p[c])}function j(l,p){return Object.prototype.hasOwnProperty.call(l,p)}return extendShallow}var sectionMatter,hasRequiredSectionMatter;function requireSectionMatter(){if(hasRequiredSectionMatter)return sectionMatter;hasRequiredSectionMatter=1;var r=requireKindOf(),_=requireExtendShallow();sectionMatter=function(t,i){typeof i=="function"&&(i={parse:i});var a=l(t),d={section_delimiter:"---",parse:u},k=_({},d,i),q=k.section_delimiter,A=a.content.split(/\r?\n/),M=null,D=c(),V=[],R=[];function H(U){a.content=U,M=[],V=[]}function L(U){R.length&&(D.key=p(R[0],q),D.content=U,k.parse(D,M),M.push(D),D=c(),V=[],R=[])}for(var F=0;F<A.length;F++){var G=A[F],W=R.length,B=G.trim();if(j(B,q)){if(B.length===3&&F!==0){if(W===0||W===2){V.push(G);continue}R.push(B),D.data=V.join(`
`),V=[];continue}M===null&&H(V.join(`
`)),W===2&&L(V.join(`
`)),R.push(B);continue}V.push(G)}return M===null?H(V.join(`
`)):L(V.join(`
`)),a.sections=M,a};function j(t,i){return!(t.slice(0,i.length)!==i||t.charAt(i.length+1)===i.slice(-1))}function l(t){if(r(t)!=="object"&&(t={content:t}),typeof t.content!="string"&&!h(t.content))throw new TypeError("expected a buffer or string");return t.content=t.content.toString(),t.sections=[],t}function p(t,i){return t?t.slice(i.length).trim():""}function c(){return{key:"",data:"",content:""}}function u(t){return t}function h(t){return t&&t.constructor&&typeof t.constructor.isBuffer=="function"?t.constructor.isBuffer(t):!1}return sectionMatter}var engines={exports:{}},jsYaml$1={},loader={},common={},hasRequiredCommon;function requireCommon(){if(hasRequiredCommon)return common;hasRequiredCommon=1;function r(u){return typeof u>"u"||u===null}function _(u){return typeof u=="object"&&u!==null}function j(u){return Array.isArray(u)?u:r(u)?[]:[u]}function l(u,h){var t,i,a,d;if(h)for(d=Object.keys(h),t=0,i=d.length;t<i;t+=1)a=d[t],u[a]=h[a];return u}function p(u,h){var t="",i;for(i=0;i<h;i+=1)t+=u;return t}function c(u){return u===0&&Number.NEGATIVE_INFINITY===1/u}return common.isNothing=r,common.isObject=_,common.toArray=j,common.repeat=p,common.isNegativeZero=c,common.extend=l,common}var exception,hasRequiredException;function requireException(){if(hasRequiredException)return exception;hasRequiredException=1;function r(_,j){Error.call(this),this.name="YAMLException",this.reason=_,this.mark=j,this.message=(this.reason||"(unknown reason)")+(this.mark?" "+this.mark.toString():""),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}return r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r.prototype.toString=function(j){var l=this.name+": ";return l+=this.reason||"(unknown reason)",!j&&this.mark&&(l+=" "+this.mark.toString()),l},exception=r,exception}var mark,hasRequiredMark;function requireMark(){if(hasRequiredMark)return mark;hasRequiredMark=1;var r=requireCommon();function _(j,l,p,c,u){this.name=j,this.buffer=l,this.position=p,this.line=c,this.column=u}return _.prototype.getSnippet=function(l,p){var c,u,h,t,i;if(!this.buffer)return null;for(l=l||4,p=p||75,c="",u=this.position;u>0&&`\0\r
\u2028\u2029`.indexOf(this.buffer.charAt(u-1))===-1;)if(u-=1,this.position-u>p/2-1){c=" ... ",u+=5;break}for(h="",t=this.position;t<this.buffer.length&&`\0\r
\u2028\u2029`.indexOf(this.buffer.charAt(t))===-1;)if(t+=1,t-this.position>p/2-1){h=" ... ",t-=5;break}return i=this.buffer.slice(u,t),r.repeat(" ",l)+c+i+h+`
`+r.repeat(" ",l+this.position-u+c.length)+"^"},_.prototype.toString=function(l){var p,c="";return this.name&&(c+='in "'+this.name+'" '),c+="at line "+(this.line+1)+", column "+(this.column+1),l||(p=this.getSnippet(),p&&(c+=`:
`+p)),c},mark=_,mark}var type,hasRequiredType;function requireType(){if(hasRequiredType)return type;hasRequiredType=1;var r=requireException(),_=["kind","resolve","construct","instanceOf","predicate","represent","defaultStyle","styleAliases"],j=["scalar","sequence","mapping"];function l(c){var u={};return c!==null&&Object.keys(c).forEach(function(h){c[h].forEach(function(t){u[String(t)]=h})}),u}function p(c,u){if(u=u||{},Object.keys(u).forEach(function(h){if(_.indexOf(h)===-1)throw new r('Unknown option "'+h+'" is met in definition of "'+c+'" YAML type.')}),this.tag=c,this.kind=u.kind||null,this.resolve=u.resolve||function(){return!0},this.construct=u.construct||function(h){return h},this.instanceOf=u.instanceOf||null,this.predicate=u.predicate||null,this.represent=u.represent||null,this.defaultStyle=u.defaultStyle||null,this.styleAliases=l(u.styleAliases||null),j.indexOf(this.kind)===-1)throw new r('Unknown kind "'+this.kind+'" is specified for "'+c+'" YAML type.')}return type=p,type}var schema,hasRequiredSchema;function requireSchema(){if(hasRequiredSchema)return schema;hasRequiredSchema=1;var r=requireCommon(),_=requireException(),j=requireType();function l(u,h,t){var i=[];return u.include.forEach(function(a){t=l(a,h,t)}),u[h].forEach(function(a){t.forEach(function(d,k){d.tag===a.tag&&d.kind===a.kind&&i.push(k)}),t.push(a)}),t.filter(function(a,d){return i.indexOf(d)===-1})}function p(){var u={scalar:{},sequence:{},mapping:{},fallback:{}},h,t;function i(a){u[a.kind][a.tag]=u.fallback[a.tag]=a}for(h=0,t=arguments.length;h<t;h+=1)arguments[h].forEach(i);return u}function c(u){this.include=u.include||[],this.implicit=u.implicit||[],this.explicit=u.explicit||[],this.implicit.forEach(function(h){if(h.loadKind&&h.loadKind!=="scalar")throw new _("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.")}),this.compiledImplicit=l(this,"implicit",[]),this.compiledExplicit=l(this,"explicit",[]),this.compiledTypeMap=p(this.compiledImplicit,this.compiledExplicit)}return c.DEFAULT=null,c.create=function(){var h,t;switch(arguments.length){case 1:h=c.DEFAULT,t=arguments[0];break;case 2:h=arguments[0],t=arguments[1];break;default:throw new _("Wrong number of arguments for Schema.create function")}if(h=r.toArray(h),t=r.toArray(t),!h.every(function(i){return i instanceof c}))throw new _("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");if(!t.every(function(i){return i instanceof j}))throw new _("Specified list of YAML types (or a single Type object) contains a non-Type object.");return new c({include:h,explicit:t})},schema=c,schema}var str,hasRequiredStr;function requireStr(){if(hasRequiredStr)return str;hasRequiredStr=1;var r=requireType();return str=new r("tag:yaml.org,2002:str",{kind:"scalar",construct:function(_){return _!==null?_:""}}),str}var seq,hasRequiredSeq;function requireSeq(){if(hasRequiredSeq)return seq;hasRequiredSeq=1;var r=requireType();return seq=new r("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(_){return _!==null?_:[]}}),seq}var map,hasRequiredMap;function requireMap(){if(hasRequiredMap)return map;hasRequiredMap=1;var r=requireType();return map=new r("tag:yaml.org,2002:map",{kind:"mapping",construct:function(_){return _!==null?_:{}}}),map}var failsafe,hasRequiredFailsafe;function requireFailsafe(){if(hasRequiredFailsafe)return failsafe;hasRequiredFailsafe=1;var r=requireSchema();return failsafe=new r({explicit:[requireStr(),requireSeq(),requireMap()]}),failsafe}var _null,hasRequired_null;function require_null(){if(hasRequired_null)return _null;hasRequired_null=1;var r=requireType();function _(p){if(p===null)return!0;var c=p.length;return c===1&&p==="~"||c===4&&(p==="null"||p==="Null"||p==="NULL")}function j(){return null}function l(p){return p===null}return _null=new r("tag:yaml.org,2002:null",{kind:"scalar",resolve:_,construct:j,predicate:l,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"}},defaultStyle:"lowercase"}),_null}var bool,hasRequiredBool;function requireBool(){if(hasRequiredBool)return bool;hasRequiredBool=1;var r=requireType();function _(p){if(p===null)return!1;var c=p.length;return c===4&&(p==="true"||p==="True"||p==="TRUE")||c===5&&(p==="false"||p==="False"||p==="FALSE")}function j(p){return p==="true"||p==="True"||p==="TRUE"}function l(p){return Object.prototype.toString.call(p)==="[object Boolean]"}return bool=new r("tag:yaml.org,2002:bool",{kind:"scalar",resolve:_,construct:j,predicate:l,represent:{lowercase:function(p){return p?"true":"false"},uppercase:function(p){return p?"TRUE":"FALSE"},camelcase:function(p){return p?"True":"False"}},defaultStyle:"lowercase"}),bool}var int,hasRequiredInt;function requireInt(){if(hasRequiredInt)return int;hasRequiredInt=1;var r=requireCommon(),_=requireType();function j(t){return 48<=t&&t<=57||65<=t&&t<=70||97<=t&&t<=102}function l(t){return 48<=t&&t<=55}function p(t){return 48<=t&&t<=57}function c(t){if(t===null)return!1;var i=t.length,a=0,d=!1,k;if(!i)return!1;if(k=t[a],(k==="-"||k==="+")&&(k=t[++a]),k==="0"){if(a+1===i)return!0;if(k=t[++a],k==="b"){for(a++;a<i;a++)if(k=t[a],k!=="_"){if(k!=="0"&&k!=="1")return!1;d=!0}return d&&k!=="_"}if(k==="x"){for(a++;a<i;a++)if(k=t[a],k!=="_"){if(!j(t.charCodeAt(a)))return!1;d=!0}return d&&k!=="_"}for(;a<i;a++)if(k=t[a],k!=="_"){if(!l(t.charCodeAt(a)))return!1;d=!0}return d&&k!=="_"}if(k==="_")return!1;for(;a<i;a++)if(k=t[a],k!=="_"){if(k===":")break;if(!p(t.charCodeAt(a)))return!1;d=!0}return!d||k==="_"?!1:k!==":"?!0:/^(:[0-5]?[0-9])+$/.test(t.slice(a))}function u(t){var i=t,a=1,d,k,q=[];return i.indexOf("_")!==-1&&(i=i.replace(/_/g,"")),d=i[0],(d==="-"||d==="+")&&(d==="-"&&(a=-1),i=i.slice(1),d=i[0]),i==="0"?0:d==="0"?i[1]==="b"?a*parseInt(i.slice(2),2):i[1]==="x"?a*parseInt(i,16):a*parseInt(i,8):i.indexOf(":")!==-1?(i.split(":").forEach(function(A){q.unshift(parseInt(A,10))}),i=0,k=1,q.forEach(function(A){i+=A*k,k*=60}),a*i):a*parseInt(i,10)}function h(t){return Object.prototype.toString.call(t)==="[object Number]"&&t%1===0&&!r.isNegativeZero(t)}return int=new _("tag:yaml.org,2002:int",{kind:"scalar",resolve:c,construct:u,predicate:h,represent:{binary:function(t){return t>=0?"0b"+t.toString(2):"-0b"+t.toString(2).slice(1)},octal:function(t){return t>=0?"0"+t.toString(8):"-0"+t.toString(8).slice(1)},decimal:function(t){return t.toString(10)},hexadecimal:function(t){return t>=0?"0x"+t.toString(16).toUpperCase():"-0x"+t.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),int}var float,hasRequiredFloat;function requireFloat(){if(hasRequiredFloat)return float;hasRequiredFloat=1;var r=requireCommon(),_=requireType(),j=new RegExp("^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function l(t){return!(t===null||!j.test(t)||t[t.length-1]==="_")}function p(t){var i,a,d,k;return i=t.replace(/_/g,"").toLowerCase(),a=i[0]==="-"?-1:1,k=[],"+-".indexOf(i[0])>=0&&(i=i.slice(1)),i===".inf"?a===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:i===".nan"?NaN:i.indexOf(":")>=0?(i.split(":").forEach(function(q){k.unshift(parseFloat(q,10))}),i=0,d=1,k.forEach(function(q){i+=q*d,d*=60}),a*i):a*parseFloat(i,10)}var c=/^[-+]?[0-9]+e/;function u(t,i){var a;if(isNaN(t))switch(i){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===t)switch(i){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===t)switch(i){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(r.isNegativeZero(t))return"-0.0";return a=t.toString(10),c.test(a)?a.replace("e",".e"):a}function h(t){return Object.prototype.toString.call(t)==="[object Number]"&&(t%1!==0||r.isNegativeZero(t))}return float=new _("tag:yaml.org,2002:float",{kind:"scalar",resolve:l,construct:p,predicate:h,represent:u,defaultStyle:"lowercase"}),float}var json,hasRequiredJson;function requireJson(){if(hasRequiredJson)return json;hasRequiredJson=1;var r=requireSchema();return json=new r({include:[requireFailsafe()],implicit:[require_null(),requireBool(),requireInt(),requireFloat()]}),json}var core,hasRequiredCore;function requireCore(){if(hasRequiredCore)return core;hasRequiredCore=1;var r=requireSchema();return core=new r({include:[requireJson()]}),core}var timestamp,hasRequiredTimestamp;function requireTimestamp(){if(hasRequiredTimestamp)return timestamp;hasRequiredTimestamp=1;var r=requireType(),_=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),j=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function l(u){return u===null?!1:_.exec(u)!==null||j.exec(u)!==null}function p(u){var h,t,i,a,d,k,q,A=0,M=null,D,V,R;if(h=_.exec(u),h===null&&(h=j.exec(u)),h===null)throw new Error("Date resolve error");if(t=+h[1],i=+h[2]-1,a=+h[3],!h[4])return new Date(Date.UTC(t,i,a));if(d=+h[4],k=+h[5],q=+h[6],h[7]){for(A=h[7].slice(0,3);A.length<3;)A+="0";A=+A}return h[9]&&(D=+h[10],V=+(h[11]||0),M=(D*60+V)*6e4,h[9]==="-"&&(M=-M)),R=new Date(Date.UTC(t,i,a,d,k,q,A)),M&&R.setTime(R.getTime()-M),R}function c(u){return u.toISOString()}return timestamp=new r("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:l,construct:p,instanceOf:Date,represent:c}),timestamp}var merge,hasRequiredMerge;function requireMerge(){if(hasRequiredMerge)return merge;hasRequiredMerge=1;var r=requireType();function _(j){return j==="<<"||j===null}return merge=new r("tag:yaml.org,2002:merge",{kind:"scalar",resolve:_}),merge}function commonjsRequire(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var binary,hasRequiredBinary;function requireBinary(){if(hasRequiredBinary)return binary;hasRequiredBinary=1;var r;try{var _=commonjsRequire;r=_("buffer").Buffer}catch{}var j=requireType(),l=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function p(t){if(t===null)return!1;var i,a,d=0,k=t.length,q=l;for(a=0;a<k;a++)if(i=q.indexOf(t.charAt(a)),!(i>64)){if(i<0)return!1;d+=6}return d%8===0}function c(t){var i,a,d=t.replace(/[\r\n=]/g,""),k=d.length,q=l,A=0,M=[];for(i=0;i<k;i++)i%4===0&&i&&(M.push(A>>16&255),M.push(A>>8&255),M.push(A&255)),A=A<<6|q.indexOf(d.charAt(i));return a=k%4*6,a===0?(M.push(A>>16&255),M.push(A>>8&255),M.push(A&255)):a===18?(M.push(A>>10&255),M.push(A>>2&255)):a===12&&M.push(A>>4&255),r?r.from?r.from(M):new r(M):M}function u(t){var i="",a=0,d,k,q=t.length,A=l;for(d=0;d<q;d++)d%3===0&&d&&(i+=A[a>>18&63],i+=A[a>>12&63],i+=A[a>>6&63],i+=A[a&63]),a=(a<<8)+t[d];return k=q%3,k===0?(i+=A[a>>18&63],i+=A[a>>12&63],i+=A[a>>6&63],i+=A[a&63]):k===2?(i+=A[a>>10&63],i+=A[a>>4&63],i+=A[a<<2&63],i+=A[64]):k===1&&(i+=A[a>>2&63],i+=A[a<<4&63],i+=A[64],i+=A[64]),i}function h(t){return r&&r.isBuffer(t)}return binary=new j("tag:yaml.org,2002:binary",{kind:"scalar",resolve:p,construct:c,predicate:h,represent:u}),binary}var omap,hasRequiredOmap;function requireOmap(){if(hasRequiredOmap)return omap;hasRequiredOmap=1;var r=requireType(),_=Object.prototype.hasOwnProperty,j=Object.prototype.toString;function l(c){if(c===null)return!0;var u=[],h,t,i,a,d,k=c;for(h=0,t=k.length;h<t;h+=1){if(i=k[h],d=!1,j.call(i)!=="[object Object]")return!1;for(a in i)if(_.call(i,a))if(!d)d=!0;else return!1;if(!d)return!1;if(u.indexOf(a)===-1)u.push(a);else return!1}return!0}function p(c){return c!==null?c:[]}return omap=new r("tag:yaml.org,2002:omap",{kind:"sequence",resolve:l,construct:p}),omap}var pairs,hasRequiredPairs;function requirePairs(){if(hasRequiredPairs)return pairs;hasRequiredPairs=1;var r=requireType(),_=Object.prototype.toString;function j(p){if(p===null)return!0;var c,u,h,t,i,a=p;for(i=new Array(a.length),c=0,u=a.length;c<u;c+=1){if(h=a[c],_.call(h)!=="[object Object]"||(t=Object.keys(h),t.length!==1))return!1;i[c]=[t[0],h[t[0]]]}return!0}function l(p){if(p===null)return[];var c,u,h,t,i,a=p;for(i=new Array(a.length),c=0,u=a.length;c<u;c+=1)h=a[c],t=Object.keys(h),i[c]=[t[0],h[t[0]]];return i}return pairs=new r("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:j,construct:l}),pairs}var set,hasRequiredSet;function requireSet(){if(hasRequiredSet)return set;hasRequiredSet=1;var r=requireType(),_=Object.prototype.hasOwnProperty;function j(p){if(p===null)return!0;var c,u=p;for(c in u)if(_.call(u,c)&&u[c]!==null)return!1;return!0}function l(p){return p!==null?p:{}}return set=new r("tag:yaml.org,2002:set",{kind:"mapping",resolve:j,construct:l}),set}var default_safe,hasRequiredDefault_safe;function requireDefault_safe(){if(hasRequiredDefault_safe)return default_safe;hasRequiredDefault_safe=1;var r=requireSchema();return default_safe=new r({include:[requireCore()],implicit:[requireTimestamp(),requireMerge()],explicit:[requireBinary(),requireOmap(),requirePairs(),requireSet()]}),default_safe}var _undefined,hasRequired_undefined;function require_undefined(){if(hasRequired_undefined)return _undefined;hasRequired_undefined=1;var r=requireType();function _(){return!0}function j(){}function l(){return""}function p(c){return typeof c>"u"}return _undefined=new r("tag:yaml.org,2002:js/undefined",{kind:"scalar",resolve:_,construct:j,predicate:p,represent:l}),_undefined}var regexp,hasRequiredRegexp;function requireRegexp(){if(hasRequiredRegexp)return regexp;hasRequiredRegexp=1;var r=requireType();function _(c){if(c===null||c.length===0)return!1;var u=c,h=/\/([gim]*)$/.exec(c),t="";return!(u[0]==="/"&&(h&&(t=h[1]),t.length>3||u[u.length-t.length-1]!=="/"))}function j(c){var u=c,h=/\/([gim]*)$/.exec(c),t="";return u[0]==="/"&&(h&&(t=h[1]),u=u.slice(1,u.length-t.length-1)),new RegExp(u,t)}function l(c){var u="/"+c.source+"/";return c.global&&(u+="g"),c.multiline&&(u+="m"),c.ignoreCase&&(u+="i"),u}function p(c){return Object.prototype.toString.call(c)==="[object RegExp]"}return regexp=new r("tag:yaml.org,2002:js/regexp",{kind:"scalar",resolve:_,construct:j,predicate:p,represent:l}),regexp}var _function,hasRequired_function;function require_function(){if(hasRequired_function)return _function;hasRequired_function=1;var r;try{var _=commonjsRequire;r=_("esprima")}catch{typeof window<"u"&&(r=window.esprima)}var j=requireType();function l(h){if(h===null)return!1;try{var t="("+h+")",i=r.parse(t,{range:!0});return!(i.type!=="Program"||i.body.length!==1||i.body[0].type!=="ExpressionStatement"||i.body[0].expression.type!=="ArrowFunctionExpression"&&i.body[0].expression.type!=="FunctionExpression")}catch{return!1}}function p(h){var t="("+h+")",i=r.parse(t,{range:!0}),a=[],d;if(i.type!=="Program"||i.body.length!==1||i.body[0].type!=="ExpressionStatement"||i.body[0].expression.type!=="ArrowFunctionExpression"&&i.body[0].expression.type!=="FunctionExpression")throw new Error("Failed to resolve function");return i.body[0].expression.params.forEach(function(k){a.push(k.name)}),d=i.body[0].expression.body.range,i.body[0].expression.body.type==="BlockStatement"?new Function(a,t.slice(d[0]+1,d[1]-1)):new Function(a,"return "+t.slice(d[0],d[1]))}function c(h){return h.toString()}function u(h){return Object.prototype.toString.call(h)==="[object Function]"}return _function=new j("tag:yaml.org,2002:js/function",{kind:"scalar",resolve:l,construct:p,predicate:u,represent:c}),_function}var default_full,hasRequiredDefault_full;function requireDefault_full(){if(hasRequiredDefault_full)return default_full;hasRequiredDefault_full=1;var r=requireSchema();return default_full=r.DEFAULT=new r({include:[requireDefault_safe()],explicit:[require_undefined(),requireRegexp(),require_function()]}),default_full}var hasRequiredLoader;function requireLoader(){if(hasRequiredLoader)return loader;hasRequiredLoader=1;var r=requireCommon(),_=requireException(),j=requireMark(),l=requireDefault_safe(),p=requireDefault_full(),c=Object.prototype.hasOwnProperty,u=1,h=2,t=3,i=4,a=1,d=2,k=3,q=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,A=/[\x85\u2028\u2029]/,M=/[,\[\]\{\}]/,D=/^(?:!|!!|![a-z\-]+!)$/i,V=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function R(n){return Object.prototype.toString.call(n)}function H(n){return n===10||n===13}function L(n){return n===9||n===32}function F(n){return n===9||n===32||n===10||n===13}function G(n){return n===44||n===91||n===93||n===123||n===125}function W(n){var s;return 48<=n&&n<=57?n-48:(s=n|32,97<=s&&s<=102?s-97+10:-1)}function B(n){return n===120?2:n===117?4:n===85?8:0}function U(n){return 48<=n&&n<=57?n-48:-1}function rn(n){return n===48?"\0":n===97?"\x07":n===98?"\b":n===116||n===9?"	":n===110?`
`:n===118?"\v":n===102?"\f":n===114?"\r":n===101?"\x1B":n===32?" ":n===34?'"':n===47?"/":n===92?"\\":n===78?"":n===95?" ":n===76?"\u2028":n===80?"\u2029":""}function sn(n){return n<=65535?String.fromCharCode(n):String.fromCharCode((n-65536>>10)+55296,(n-65536&1023)+56320)}function cn(n,s,f){s==="__proto__"?Object.defineProperty(n,s,{configurable:!0,enumerable:!0,writable:!0,value:f}):n[s]=f}for(var on=new Array(256),z=new Array(256),X=0;X<256;X++)on[X]=rn(X)?1:0,z[X]=rn(X);function xn(n,s){this.input=n,this.filename=s.filename||null,this.schema=s.schema||p,this.onWarning=s.onWarning||null,this.legacy=s.legacy||!1,this.json=s.json||!1,this.listener=s.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=n.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.documents=[]}function an(n,s){return new _(s,new j(n.filename,n.input,n.position,n.line,n.position-n.lineStart))}function O(n,s){throw an(n,s)}function Q(n,s){n.onWarning&&n.onWarning.call(null,an(n,s))}var K={YAML:function(s,f,S){var v,e,o;s.version!==null&&O(s,"duplication of %YAML directive"),S.length!==1&&O(s,"YAML directive accepts exactly one argument"),v=/^([0-9]+)\.([0-9]+)$/.exec(S[0]),v===null&&O(s,"ill-formed argument of the YAML directive"),e=parseInt(v[1],10),o=parseInt(v[2],10),e!==1&&O(s,"unacceptable YAML version of the document"),s.version=S[0],s.checkLineBreaks=o<2,o!==1&&o!==2&&Q(s,"unsupported YAML version of the document")},TAG:function(s,f,S){var v,e;S.length!==2&&O(s,"TAG directive accepts exactly two arguments"),v=S[0],e=S[1],D.test(v)||O(s,"ill-formed tag handle (first argument) of the TAG directive"),c.call(s.tagMap,v)&&O(s,'there is a previously declared suffix for "'+v+'" tag handle'),V.test(e)||O(s,"ill-formed tag prefix (second argument) of the TAG directive"),s.tagMap[v]=e}};function J(n,s,f,S){var v,e,o,m;if(s<f){if(m=n.input.slice(s,f),S)for(v=0,e=m.length;v<e;v+=1)o=m.charCodeAt(v),o===9||32<=o&&o<=1114111||O(n,"expected valid JSON character");else q.test(m)&&O(n,"the stream contains non-printable characters");n.result+=m}}function Z(n,s,f,S){var v,e,o,m;for(r.isObject(f)||O(n,"cannot merge mappings; the provided source object is unacceptable"),v=Object.keys(f),o=0,m=v.length;o<m;o+=1)e=v[o],c.call(s,e)||(cn(s,e,f[e]),S[e]=!0)}function I(n,s,f,S,v,e,o,m){var g,y;if(Array.isArray(v))for(v=Array.prototype.slice.call(v),g=0,y=v.length;g<y;g+=1)Array.isArray(v[g])&&O(n,"nested arrays are not supported inside keys"),typeof v=="object"&&R(v[g])==="[object Object]"&&(v[g]="[object Object]");if(typeof v=="object"&&R(v)==="[object Object]"&&(v="[object Object]"),v=String(v),s===null&&(s={}),S==="tag:yaml.org,2002:merge")if(Array.isArray(e))for(g=0,y=e.length;g<y;g+=1)Z(n,s,e[g],f);else Z(n,s,e,f);else!n.json&&!c.call(f,v)&&c.call(s,v)&&(n.line=o||n.line,n.position=m||n.position,O(n,"duplicated mapping key")),cn(s,v,e),delete f[v];return s}function ln(n){var s;s=n.input.charCodeAt(n.position),s===10?n.position++:s===13?(n.position++,n.input.charCodeAt(n.position)===10&&n.position++):O(n,"a line break is expected"),n.line+=1,n.lineStart=n.position}function E(n,s,f){for(var S=0,v=n.input.charCodeAt(n.position);v!==0;){for(;L(v);)v=n.input.charCodeAt(++n.position);if(s&&v===35)do v=n.input.charCodeAt(++n.position);while(v!==10&&v!==13&&v!==0);if(H(v))for(ln(n),v=n.input.charCodeAt(n.position),S++,n.lineIndent=0;v===32;)n.lineIndent++,v=n.input.charCodeAt(++n.position);else break}return f!==-1&&S!==0&&n.lineIndent<f&&Q(n,"deficient indentation"),S}function nn(n){var s=n.position,f;return f=n.input.charCodeAt(s),!!((f===45||f===46)&&f===n.input.charCodeAt(s+1)&&f===n.input.charCodeAt(s+2)&&(s+=3,f=n.input.charCodeAt(s),f===0||F(f)))}function en(n,s){s===1?n.result+=" ":s>1&&(n.result+=r.repeat(`
`,s-1))}function pn(n,s,f){var S,v,e,o,m,g,y,x,b=n.kind,T=n.result,w;if(w=n.input.charCodeAt(n.position),F(w)||G(w)||w===35||w===38||w===42||w===33||w===124||w===62||w===39||w===34||w===37||w===64||w===96||(w===63||w===45)&&(v=n.input.charCodeAt(n.position+1),F(v)||f&&G(v)))return!1;for(n.kind="scalar",n.result="",e=o=n.position,m=!1;w!==0;){if(w===58){if(v=n.input.charCodeAt(n.position+1),F(v)||f&&G(v))break}else if(w===35){if(S=n.input.charCodeAt(n.position-1),F(S))break}else{if(n.position===n.lineStart&&nn(n)||f&&G(w))break;if(H(w))if(g=n.line,y=n.lineStart,x=n.lineIndent,E(n,!1,-1),n.lineIndent>=s){m=!0,w=n.input.charCodeAt(n.position);continue}else{n.position=o,n.line=g,n.lineStart=y,n.lineIndent=x;break}}m&&(J(n,e,o,!1),en(n,n.line-g),e=o=n.position,m=!1),L(w)||(o=n.position+1),w=n.input.charCodeAt(++n.position)}return J(n,e,o,!1),n.result?!0:(n.kind=b,n.result=T,!1)}function un(n,s){var f,S,v;if(f=n.input.charCodeAt(n.position),f!==39)return!1;for(n.kind="scalar",n.result="",n.position++,S=v=n.position;(f=n.input.charCodeAt(n.position))!==0;)if(f===39)if(J(n,S,n.position,!0),f=n.input.charCodeAt(++n.position),f===39)S=n.position,n.position++,v=n.position;else return!0;else H(f)?(J(n,S,v,!0),en(n,E(n,!1,s)),S=v=n.position):n.position===n.lineStart&&nn(n)?O(n,"unexpected end of the document within a single quoted scalar"):(n.position++,v=n.position);O(n,"unexpected end of the stream within a single quoted scalar")}function dn(n,s){var f,S,v,e,o,m;if(m=n.input.charCodeAt(n.position),m!==34)return!1;for(n.kind="scalar",n.result="",n.position++,f=S=n.position;(m=n.input.charCodeAt(n.position))!==0;){if(m===34)return J(n,f,n.position,!0),n.position++,!0;if(m===92){if(J(n,f,n.position,!0),m=n.input.charCodeAt(++n.position),H(m))E(n,!1,s);else if(m<256&&on[m])n.result+=z[m],n.position++;else if((o=B(m))>0){for(v=o,e=0;v>0;v--)m=n.input.charCodeAt(++n.position),(o=W(m))>=0?e=(e<<4)+o:O(n,"expected hexadecimal character");n.result+=sn(e),n.position++}else O(n,"unknown escape sequence");f=S=n.position}else H(m)?(J(n,f,S,!0),en(n,E(n,!1,s)),f=S=n.position):n.position===n.lineStart&&nn(n)?O(n,"unexpected end of the document within a double quoted scalar"):(n.position++,S=n.position)}O(n,"unexpected end of the stream within a double quoted scalar")}function mn(n,s){var f=!0,S,v=n.tag,e,o=n.anchor,m,g,y,x,b,T={},w,P,$,C;if(C=n.input.charCodeAt(n.position),C===91)g=93,b=!1,e=[];else if(C===123)g=125,b=!0,e={};else return!1;for(n.anchor!==null&&(n.anchorMap[n.anchor]=e),C=n.input.charCodeAt(++n.position);C!==0;){if(E(n,!0,s),C=n.input.charCodeAt(n.position),C===g)return n.position++,n.tag=v,n.anchor=o,n.kind=b?"mapping":"sequence",n.result=e,!0;f||O(n,"missed comma between flow collection entries"),P=w=$=null,y=x=!1,C===63&&(m=n.input.charCodeAt(n.position+1),F(m)&&(y=x=!0,n.position++,E(n,!0,s))),S=n.line,Y(n,s,u,!1,!0),P=n.tag,w=n.result,E(n,!0,s),C=n.input.charCodeAt(n.position),(x||n.line===S)&&C===58&&(y=!0,C=n.input.charCodeAt(++n.position),E(n,!0,s),Y(n,s,u,!1,!0),$=n.result),b?I(n,e,T,P,w,$):y?e.push(I(n,null,T,P,w,$)):e.push(w),E(n,!0,s),C=n.input.charCodeAt(n.position),C===44?(f=!0,C=n.input.charCodeAt(++n.position)):f=!1}O(n,"unexpected end of the stream within a flow collection")}function tn(n,s){var f,S,v=a,e=!1,o=!1,m=s,g=0,y=!1,x,b;if(b=n.input.charCodeAt(n.position),b===124)S=!1;else if(b===62)S=!0;else return!1;for(n.kind="scalar",n.result="";b!==0;)if(b=n.input.charCodeAt(++n.position),b===43||b===45)a===v?v=b===43?k:d:O(n,"repeat of a chomping mode identifier");else if((x=U(b))>=0)x===0?O(n,"bad explicit indentation width of a block scalar; it cannot be less than one"):o?O(n,"repeat of an indentation width identifier"):(m=s+x-1,o=!0);else break;if(L(b)){do b=n.input.charCodeAt(++n.position);while(L(b));if(b===35)do b=n.input.charCodeAt(++n.position);while(!H(b)&&b!==0)}for(;b!==0;){for(ln(n),n.lineIndent=0,b=n.input.charCodeAt(n.position);(!o||n.lineIndent<m)&&b===32;)n.lineIndent++,b=n.input.charCodeAt(++n.position);if(!o&&n.lineIndent>m&&(m=n.lineIndent),H(b)){g++;continue}if(n.lineIndent<m){v===k?n.result+=r.repeat(`
`,e?1+g:g):v===a&&e&&(n.result+=`
`);break}for(S?L(b)?(y=!0,n.result+=r.repeat(`
`,e?1+g:g)):y?(y=!1,n.result+=r.repeat(`
`,g+1)):g===0?e&&(n.result+=" "):n.result+=r.repeat(`
`,g):n.result+=r.repeat(`
`,e?1+g:g),e=!0,o=!0,g=0,f=n.position;!H(b)&&b!==0;)b=n.input.charCodeAt(++n.position);J(n,f,n.position,!1)}return!0}function gn(n,s){var f,S=n.tag,v=n.anchor,e=[],o,m=!1,g;for(n.anchor!==null&&(n.anchorMap[n.anchor]=e),g=n.input.charCodeAt(n.position);g!==0&&!(g!==45||(o=n.input.charCodeAt(n.position+1),!F(o)));){if(m=!0,n.position++,E(n,!0,-1)&&n.lineIndent<=s){e.push(null),g=n.input.charCodeAt(n.position);continue}if(f=n.line,Y(n,s,t,!1,!0),e.push(n.result),E(n,!0,-1),g=n.input.charCodeAt(n.position),(n.line===f||n.lineIndent>s)&&g!==0)O(n,"bad indentation of a sequence entry");else if(n.lineIndent<s)break}return m?(n.tag=S,n.anchor=v,n.kind="sequence",n.result=e,!0):!1}function jn(n,s,f){var S,v,e,o,m=n.tag,g=n.anchor,y={},x={},b=null,T=null,w=null,P=!1,$=!1,C;for(n.anchor!==null&&(n.anchorMap[n.anchor]=y),C=n.input.charCodeAt(n.position);C!==0;){if(S=n.input.charCodeAt(n.position+1),e=n.line,o=n.position,(C===63||C===58)&&F(S))C===63?(P&&(I(n,y,x,b,T,null),b=T=w=null),$=!0,P=!0,v=!0):P?(P=!1,v=!0):O(n,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),n.position+=1,C=S;else if(Y(n,f,h,!1,!0))if(n.line===e){for(C=n.input.charCodeAt(n.position);L(C);)C=n.input.charCodeAt(++n.position);if(C===58)C=n.input.charCodeAt(++n.position),F(C)||O(n,"a whitespace character is expected after the key-value separator within a block mapping"),P&&(I(n,y,x,b,T,null),b=T=w=null),$=!0,P=!1,v=!1,b=n.tag,T=n.result;else if($)O(n,"can not read an implicit mapping pair; a colon is missed");else return n.tag=m,n.anchor=g,!0}else if($)O(n,"can not read a block mapping entry; a multiline key may not be an implicit key");else return n.tag=m,n.anchor=g,!0;else break;if((n.line===e||n.lineIndent>s)&&(Y(n,s,i,!0,v)&&(P?T=n.result:w=n.result),P||(I(n,y,x,b,T,w,e,o),b=T=w=null),E(n,!0,-1),C=n.input.charCodeAt(n.position)),n.lineIndent>s&&C!==0)O(n,"bad indentation of a mapping entry");else if(n.lineIndent<s)break}return P&&I(n,y,x,b,T,null),$&&(n.tag=m,n.anchor=g,n.kind="mapping",n.result=y),$}function fn(n){var s,f=!1,S=!1,v,e,o;if(o=n.input.charCodeAt(n.position),o!==33)return!1;if(n.tag!==null&&O(n,"duplication of a tag property"),o=n.input.charCodeAt(++n.position),o===60?(f=!0,o=n.input.charCodeAt(++n.position)):o===33?(S=!0,v="!!",o=n.input.charCodeAt(++n.position)):v="!",s=n.position,f){do o=n.input.charCodeAt(++n.position);while(o!==0&&o!==62);n.position<n.length?(e=n.input.slice(s,n.position),o=n.input.charCodeAt(++n.position)):O(n,"unexpected end of the stream within a verbatim tag")}else{for(;o!==0&&!F(o);)o===33&&(S?O(n,"tag suffix cannot contain exclamation marks"):(v=n.input.slice(s-1,n.position+1),D.test(v)||O(n,"named tag handle cannot contain such characters"),S=!0,s=n.position+1)),o=n.input.charCodeAt(++n.position);e=n.input.slice(s,n.position),M.test(e)&&O(n,"tag suffix cannot contain flow indicator characters")}return e&&!V.test(e)&&O(n,"tag name cannot contain such characters: "+e),f?n.tag=e:c.call(n.tagMap,v)?n.tag=n.tagMap[v]+e:v==="!"?n.tag="!"+e:v==="!!"?n.tag="tag:yaml.org,2002:"+e:O(n,'undeclared tag handle "'+v+'"'),!0}function _n(n){var s,f;if(f=n.input.charCodeAt(n.position),f!==38)return!1;for(n.anchor!==null&&O(n,"duplication of an anchor property"),f=n.input.charCodeAt(++n.position),s=n.position;f!==0&&!F(f)&&!G(f);)f=n.input.charCodeAt(++n.position);return n.position===s&&O(n,"name of an anchor node must contain at least one character"),n.anchor=n.input.slice(s,n.position),!0}function wn(n){var s,f,S;if(S=n.input.charCodeAt(n.position),S!==42)return!1;for(S=n.input.charCodeAt(++n.position),s=n.position;S!==0&&!F(S)&&!G(S);)S=n.input.charCodeAt(++n.position);return n.position===s&&O(n,"name of an alias node must contain at least one character"),f=n.input.slice(s,n.position),c.call(n.anchorMap,f)||O(n,'unidentified alias "'+f+'"'),n.result=n.anchorMap[f],E(n,!0,-1),!0}function Y(n,s,f,S,v){var e,o,m,g=1,y=!1,x=!1,b,T,w,P,$;if(n.listener!==null&&n.listener("open",n),n.tag=null,n.anchor=null,n.kind=null,n.result=null,e=o=m=i===f||t===f,S&&E(n,!0,-1)&&(y=!0,n.lineIndent>s?g=1:n.lineIndent===s?g=0:n.lineIndent<s&&(g=-1)),g===1)for(;fn(n)||_n(n);)E(n,!0,-1)?(y=!0,m=e,n.lineIndent>s?g=1:n.lineIndent===s?g=0:n.lineIndent<s&&(g=-1)):m=!1;if(m&&(m=y||v),(g===1||i===f)&&(u===f||h===f?P=s:P=s+1,$=n.position-n.lineStart,g===1?m&&(gn(n,$)||jn(n,$,P))||mn(n,P)?x=!0:(o&&tn(n,P)||un(n,P)||dn(n,P)?x=!0:wn(n)?(x=!0,(n.tag!==null||n.anchor!==null)&&O(n,"alias node should not have any properties")):pn(n,P,u===f)&&(x=!0,n.tag===null&&(n.tag="?")),n.anchor!==null&&(n.anchorMap[n.anchor]=n.result)):g===0&&(x=m&&gn(n,$))),n.tag!==null&&n.tag!=="!")if(n.tag==="?"){for(n.result!==null&&n.kind!=="scalar"&&O(n,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+n.kind+'"'),b=0,T=n.implicitTypes.length;b<T;b+=1)if(w=n.implicitTypes[b],w.resolve(n.result)){n.result=w.construct(n.result),n.tag=w.tag,n.anchor!==null&&(n.anchorMap[n.anchor]=n.result);break}}else c.call(n.typeMap[n.kind||"fallback"],n.tag)?(w=n.typeMap[n.kind||"fallback"][n.tag],n.result!==null&&w.kind!==n.kind&&O(n,"unacceptable node kind for !<"+n.tag+'> tag; it should be "'+w.kind+'", not "'+n.kind+'"'),w.resolve(n.result)?(n.result=w.construct(n.result),n.anchor!==null&&(n.anchorMap[n.anchor]=n.result)):O(n,"cannot resolve a node with !<"+n.tag+"> explicit tag")):O(n,"unknown tag !<"+n.tag+">");return n.listener!==null&&n.listener("close",n),n.tag!==null||n.anchor!==null||x}function kn(n){var s=n.position,f,S,v,e=!1,o;for(n.version=null,n.checkLineBreaks=n.legacy,n.tagMap={},n.anchorMap={};(o=n.input.charCodeAt(n.position))!==0&&(E(n,!0,-1),o=n.input.charCodeAt(n.position),!(n.lineIndent>0||o!==37));){for(e=!0,o=n.input.charCodeAt(++n.position),f=n.position;o!==0&&!F(o);)o=n.input.charCodeAt(++n.position);for(S=n.input.slice(f,n.position),v=[],S.length<1&&O(n,"directive name must not be less than one character in length");o!==0;){for(;L(o);)o=n.input.charCodeAt(++n.position);if(o===35){do o=n.input.charCodeAt(++n.position);while(o!==0&&!H(o));break}if(H(o))break;for(f=n.position;o!==0&&!F(o);)o=n.input.charCodeAt(++n.position);v.push(n.input.slice(f,n.position))}o!==0&&ln(n),c.call(K,S)?K[S](n,S,v):Q(n,'unknown document directive "'+S+'"')}if(E(n,!0,-1),n.lineIndent===0&&n.input.charCodeAt(n.position)===45&&n.input.charCodeAt(n.position+1)===45&&n.input.charCodeAt(n.position+2)===45?(n.position+=3,E(n,!0,-1)):e&&O(n,"directives end mark is expected"),Y(n,n.lineIndent-1,i,!1,!0),E(n,!0,-1),n.checkLineBreaks&&A.test(n.input.slice(s,n.position))&&Q(n,"non-ASCII line breaks are interpreted as content"),n.documents.push(n.result),n.position===n.lineStart&&nn(n)){n.input.charCodeAt(n.position)===46&&(n.position+=3,E(n,!0,-1));return}if(n.position<n.length-1)O(n,"end of the stream or a document separator is expected");else return}function bn(n,s){n=String(n),s=s||{},n.length!==0&&(n.charCodeAt(n.length-1)!==10&&n.charCodeAt(n.length-1)!==13&&(n+=`
`),n.charCodeAt(0)===65279&&(n=n.slice(1)));var f=new xn(n,s),S=n.indexOf("\0");for(S!==-1&&(f.position=S,O(f,"null byte is not allowed in input")),f.input+="\0";f.input.charCodeAt(f.position)===32;)f.lineIndent+=1,f.position+=1;for(;f.position<f.length-1;)kn(f);return f.documents}function hn(n,s,f){s!==null&&typeof s=="object"&&typeof f>"u"&&(f=s,s=null);var S=bn(n,f);if(typeof s!="function")return S;for(var v=0,e=S.length;v<e;v+=1)s(S[v])}function vn(n,s){var f=bn(n,s);if(f.length!==0){if(f.length===1)return f[0];throw new _("expected a single document in the stream, but found more")}}function Sn(n,s,f){return typeof s=="object"&&s!==null&&typeof f>"u"&&(f=s,s=null),hn(n,s,r.extend({schema:l},f))}function yn(n,s){return vn(n,r.extend({schema:l},s))}return loader.loadAll=hn,loader.load=vn,loader.safeLoadAll=Sn,loader.safeLoad=yn,loader}var dumper={},hasRequiredDumper;function requireDumper(){if(hasRequiredDumper)return dumper;hasRequiredDumper=1;var r=requireCommon(),_=requireException(),j=requireDefault_full(),l=requireDefault_safe(),p=Object.prototype.toString,c=Object.prototype.hasOwnProperty,u=9,h=10,t=13,i=32,a=33,d=34,k=35,q=37,A=38,M=39,D=42,V=44,R=45,H=58,L=61,F=62,G=63,W=64,B=91,U=93,rn=96,sn=123,cn=124,on=125,z={};z[0]="\\0",z[7]="\\a",z[8]="\\b",z[9]="\\t",z[10]="\\n",z[11]="\\v",z[12]="\\f",z[13]="\\r",z[27]="\\e",z[34]='\\"',z[92]="\\\\",z[133]="\\N",z[160]="\\_",z[8232]="\\L",z[8233]="\\P";var X=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"];function xn(e,o){var m,g,y,x,b,T,w;if(o===null)return{};for(m={},g=Object.keys(o),y=0,x=g.length;y<x;y+=1)b=g[y],T=String(o[b]),b.slice(0,2)==="!!"&&(b="tag:yaml.org,2002:"+b.slice(2)),w=e.compiledTypeMap.fallback[b],w&&c.call(w.styleAliases,T)&&(T=w.styleAliases[T]),m[b]=T;return m}function an(e){var o,m,g;if(o=e.toString(16).toUpperCase(),e<=255)m="x",g=2;else if(e<=65535)m="u",g=4;else if(e<=4294967295)m="U",g=8;else throw new _("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+m+r.repeat("0",g-o.length)+o}function O(e){this.schema=e.schema||j,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=r.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=xn(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Q(e,o){for(var m=r.repeat(" ",o),g=0,y=-1,x="",b,T=e.length;g<T;)y=e.indexOf(`
`,g),y===-1?(b=e.slice(g),g=T):(b=e.slice(g,y+1),g=y+1),b.length&&b!==`
`&&(x+=m),x+=b;return x}function K(e,o){return`
`+r.repeat(" ",e.indent*o)}function J(e,o){var m,g,y;for(m=0,g=e.implicitTypes.length;m<g;m+=1)if(y=e.implicitTypes[m],y.resolve(o))return!0;return!1}function Z(e){return e===i||e===u}function I(e){return 32<=e&&e<=126||161<=e&&e<=55295&&e!==8232&&e!==8233||57344<=e&&e<=65533&&e!==65279||65536<=e&&e<=1114111}function ln(e){return I(e)&&!Z(e)&&e!==65279&&e!==t&&e!==h}function E(e,o){return I(e)&&e!==65279&&e!==V&&e!==B&&e!==U&&e!==sn&&e!==on&&e!==H&&(e!==k||o&&ln(o))}function nn(e){return I(e)&&e!==65279&&!Z(e)&&e!==R&&e!==G&&e!==H&&e!==V&&e!==B&&e!==U&&e!==sn&&e!==on&&e!==k&&e!==A&&e!==D&&e!==a&&e!==cn&&e!==L&&e!==F&&e!==M&&e!==d&&e!==q&&e!==W&&e!==rn}function en(e){var o=/^\n* /;return o.test(e)}var pn=1,un=2,dn=3,mn=4,tn=5;function gn(e,o,m,g,y){var x,b,T,w=!1,P=!1,$=g!==-1,C=-1,N=nn(e.charCodeAt(0))&&!Z(e.charCodeAt(e.length-1));if(o)for(x=0;x<e.length;x++){if(b=e.charCodeAt(x),!I(b))return tn;T=x>0?e.charCodeAt(x-1):null,N=N&&E(b,T)}else{for(x=0;x<e.length;x++){if(b=e.charCodeAt(x),b===h)w=!0,$&&(P=P||x-C-1>g&&e[C+1]!==" ",C=x);else if(!I(b))return tn;T=x>0?e.charCodeAt(x-1):null,N=N&&E(b,T)}P=P||$&&x-C-1>g&&e[C+1]!==" "}return!w&&!P?N&&!y(e)?pn:un:m>9&&en(e)?tn:P?mn:dn}function jn(e,o,m,g){e.dump=(function(){if(o.length===0)return"''";if(!e.noCompatMode&&X.indexOf(o)!==-1)return"'"+o+"'";var y=e.indent*Math.max(1,m),x=e.lineWidth===-1?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-y),b=g||e.flowLevel>-1&&m>=e.flowLevel;function T(w){return J(e,w)}switch(gn(o,b,e.indent,x,T)){case pn:return o;case un:return"'"+o.replace(/'/g,"''")+"'";case dn:return"|"+fn(o,e.indent)+_n(Q(o,y));case mn:return">"+fn(o,e.indent)+_n(Q(wn(o,x),y));case tn:return'"'+kn(o)+'"';default:throw new _("impossible error: invalid scalar style")}})()}function fn(e,o){var m=en(e)?String(o):"",g=e[e.length-1]===`
`,y=g&&(e[e.length-2]===`
`||e===`
`),x=y?"+":g?"":"-";return m+x+`
`}function _n(e){return e[e.length-1]===`
`?e.slice(0,-1):e}function wn(e,o){for(var m=/(\n+)([^\n]*)/g,g=(function(){var P=e.indexOf(`
`);return P=P!==-1?P:e.length,m.lastIndex=P,Y(e.slice(0,P),o)})(),y=e[0]===`
`||e[0]===" ",x,b;b=m.exec(e);){var T=b[1],w=b[2];x=w[0]===" ",g+=T+(!y&&!x&&w!==""?`
`:"")+Y(w,o),y=x}return g}function Y(e,o){if(e===""||e[0]===" ")return e;for(var m=/ [^ ]/g,g,y=0,x,b=0,T=0,w="";g=m.exec(e);)T=g.index,T-y>o&&(x=b>y?b:T,w+=`
`+e.slice(y,x),y=x+1),b=T;return w+=`
`,e.length-y>o&&b>y?w+=e.slice(y,b)+`
`+e.slice(b+1):w+=e.slice(y),w.slice(1)}function kn(e){for(var o="",m,g,y,x=0;x<e.length;x++){if(m=e.charCodeAt(x),m>=55296&&m<=56319&&(g=e.charCodeAt(x+1),g>=56320&&g<=57343)){o+=an((m-55296)*1024+g-56320+65536),x++;continue}y=z[m],o+=!y&&I(m)?e[x]:y||an(m)}return o}function bn(e,o,m){var g="",y=e.tag,x,b;for(x=0,b=m.length;x<b;x+=1)n(e,o,m[x],!1,!1)&&(x!==0&&(g+=","+(e.condenseFlow?"":" ")),g+=e.dump);e.tag=y,e.dump="["+g+"]"}function hn(e,o,m,g){var y="",x=e.tag,b,T;for(b=0,T=m.length;b<T;b+=1)n(e,o+1,m[b],!0,!0)&&((!g||b!==0)&&(y+=K(e,o)),e.dump&&h===e.dump.charCodeAt(0)?y+="-":y+="- ",y+=e.dump);e.tag=x,e.dump=y||"[]"}function vn(e,o,m){var g="",y=e.tag,x=Object.keys(m),b,T,w,P,$;for(b=0,T=x.length;b<T;b+=1)$="",b!==0&&($+=", "),e.condenseFlow&&($+='"'),w=x[b],P=m[w],n(e,o,w,!1,!1)&&(e.dump.length>1024&&($+="? "),$+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),n(e,o,P,!1,!1)&&($+=e.dump,g+=$));e.tag=y,e.dump="{"+g+"}"}function Sn(e,o,m,g){var y="",x=e.tag,b=Object.keys(m),T,w,P,$,C,N;if(e.sortKeys===!0)b.sort();else if(typeof e.sortKeys=="function")b.sort(e.sortKeys);else if(e.sortKeys)throw new _("sortKeys must be a boolean or a function");for(T=0,w=b.length;T<w;T+=1)N="",(!g||T!==0)&&(N+=K(e,o)),P=b[T],$=m[P],n(e,o+1,P,!0,!0,!0)&&(C=e.tag!==null&&e.tag!=="?"||e.dump&&e.dump.length>1024,C&&(e.dump&&h===e.dump.charCodeAt(0)?N+="?":N+="? "),N+=e.dump,C&&(N+=K(e,o)),n(e,o+1,$,!0,C)&&(e.dump&&h===e.dump.charCodeAt(0)?N+=":":N+=": ",N+=e.dump,y+=N));e.tag=x,e.dump=y||"{}"}function yn(e,o,m){var g,y,x,b,T,w;for(y=m?e.explicitTypes:e.implicitTypes,x=0,b=y.length;x<b;x+=1)if(T=y[x],(T.instanceOf||T.predicate)&&(!T.instanceOf||typeof o=="object"&&o instanceof T.instanceOf)&&(!T.predicate||T.predicate(o))){if(e.tag=m?T.tag:"?",T.represent){if(w=e.styleMap[T.tag]||T.defaultStyle,p.call(T.represent)==="[object Function]")g=T.represent(o,w);else if(c.call(T.represent,w))g=T.represent[w](o,w);else throw new _("!<"+T.tag+'> tag resolver accepts not "'+w+'" style');e.dump=g}return!0}return!1}function n(e,o,m,g,y,x){e.tag=null,e.dump=m,yn(e,m,!1)||yn(e,m,!0);var b=p.call(e.dump);g&&(g=e.flowLevel<0||e.flowLevel>o);var T=b==="[object Object]"||b==="[object Array]",w,P;if(T&&(w=e.duplicates.indexOf(m),P=w!==-1),(e.tag!==null&&e.tag!=="?"||P||e.indent!==2&&o>0)&&(y=!1),P&&e.usedDuplicates[w])e.dump="*ref_"+w;else{if(T&&P&&!e.usedDuplicates[w]&&(e.usedDuplicates[w]=!0),b==="[object Object]")g&&Object.keys(e.dump).length!==0?(Sn(e,o,e.dump,y),P&&(e.dump="&ref_"+w+e.dump)):(vn(e,o,e.dump),P&&(e.dump="&ref_"+w+" "+e.dump));else if(b==="[object Array]"){var $=e.noArrayIndent&&o>0?o-1:o;g&&e.dump.length!==0?(hn(e,$,e.dump,y),P&&(e.dump="&ref_"+w+e.dump)):(bn(e,$,e.dump),P&&(e.dump="&ref_"+w+" "+e.dump))}else if(b==="[object String]")e.tag!=="?"&&jn(e,e.dump,o,x);else{if(e.skipInvalid)return!1;throw new _("unacceptable kind of an object to dump "+b)}e.tag!==null&&e.tag!=="?"&&(e.dump="!<"+e.tag+"> "+e.dump)}return!0}function s(e,o){var m=[],g=[],y,x;for(f(e,m,g),y=0,x=g.length;y<x;y+=1)o.duplicates.push(m[g[y]]);o.usedDuplicates=new Array(x)}function f(e,o,m){var g,y,x;if(e!==null&&typeof e=="object")if(y=o.indexOf(e),y!==-1)m.indexOf(y)===-1&&m.push(y);else if(o.push(e),Array.isArray(e))for(y=0,x=e.length;y<x;y+=1)f(e[y],o,m);else for(g=Object.keys(e),y=0,x=g.length;y<x;y+=1)f(e[g[y]],o,m)}function S(e,o){o=o||{};var m=new O(o);return m.noRefs||s(e,m),n(m,0,e,!0,!0)?m.dump+`
`:""}function v(e,o){return S(e,r.extend({schema:l},o))}return dumper.dump=S,dumper.safeDump=v,dumper}var hasRequiredJsYaml$1;function requireJsYaml$1(){if(hasRequiredJsYaml$1)return jsYaml$1;hasRequiredJsYaml$1=1;var r=requireLoader(),_=requireDumper();function j(l){return function(){throw new Error("Function "+l+" is deprecated and cannot be used.")}}return jsYaml$1.Type=requireType(),jsYaml$1.Schema=requireSchema(),jsYaml$1.FAILSAFE_SCHEMA=requireFailsafe(),jsYaml$1.JSON_SCHEMA=requireJson(),jsYaml$1.CORE_SCHEMA=requireCore(),jsYaml$1.DEFAULT_SAFE_SCHEMA=requireDefault_safe(),jsYaml$1.DEFAULT_FULL_SCHEMA=requireDefault_full(),jsYaml$1.load=r.load,jsYaml$1.loadAll=r.loadAll,jsYaml$1.safeLoad=r.safeLoad,jsYaml$1.safeLoadAll=r.safeLoadAll,jsYaml$1.dump=_.dump,jsYaml$1.safeDump=_.safeDump,jsYaml$1.YAMLException=requireException(),jsYaml$1.MINIMAL_SCHEMA=requireFailsafe(),jsYaml$1.SAFE_SCHEMA=requireDefault_safe(),jsYaml$1.DEFAULT_SCHEMA=requireDefault_full(),jsYaml$1.scan=j("scan"),jsYaml$1.parse=j("parse"),jsYaml$1.compose=j("compose"),jsYaml$1.addConstructor=j("addConstructor"),jsYaml$1}var jsYaml,hasRequiredJsYaml;function requireJsYaml(){if(hasRequiredJsYaml)return jsYaml;hasRequiredJsYaml=1;var r=requireJsYaml$1();return jsYaml=r,jsYaml}var hasRequiredEngines;function requireEngines(){return hasRequiredEngines||(hasRequiredEngines=1,(function(module,exports$1){const yaml=requireJsYaml(),engines=module.exports;engines.yaml={parse:yaml.safeLoad.bind(yaml),stringify:yaml.safeDump.bind(yaml)},engines.json={parse:JSON.parse.bind(JSON),stringify:function(r,_){const j=Object.assign({replacer:null,space:2},_);return JSON.stringify(r,j.replacer,j.space)}},engines.javascript={parse:function parse(str,options,wrap){try{return wrap!==!1&&(str=`(function() {
return `+str.trim()+`;
}());`),eval(str)||{}}catch(r){if(wrap!==!1&&/(unexpected|identifier)/i.test(r.message))return parse(str,options,!1);throw new SyntaxError(r)}},stringify:function(){throw new Error("stringifying JavaScript is not supported")}}})(engines)),engines.exports}var utils={};var stripBomString,hasRequiredStripBomString;function requireStripBomString(){return hasRequiredStripBomString||(hasRequiredStripBomString=1,stripBomString=function(r){return typeof r=="string"&&r.charAt(0)==="\uFEFF"?r.slice(1):r}),stripBomString}var hasRequiredUtils;function requireUtils(){return hasRequiredUtils||(hasRequiredUtils=1,(function(r){const _=requireStripBomString(),j=requireKindOf();r.define=function(l,p,c){Reflect.defineProperty(l,p,{enumerable:!1,configurable:!0,writable:!0,value:c})},r.isBuffer=function(l){return j(l)==="buffer"},r.isObject=function(l){return j(l)==="object"},r.toBuffer=function(l){return typeof l=="string"?Buffer.from(l):l},r.toString=function(l){if(r.isBuffer(l))return _(String(l));if(typeof l!="string")throw new TypeError("expected input to be a string or buffer");return _(l)},r.arrayify=function(l){return l?Array.isArray(l)?l:[l]:[]},r.startsWith=function(l,p,c){return typeof c!="number"&&(c=p.length),l.slice(0,c)===p}})(utils)),utils}var defaults,hasRequiredDefaults;function requireDefaults(){if(hasRequiredDefaults)return defaults;hasRequiredDefaults=1;const r=requireEngines(),_=requireUtils();return defaults=function(j){const l=Object.assign({},j);return l.delimiters=_.arrayify(l.delims||l.delimiters||"---"),l.delimiters.length===1&&l.delimiters.push(l.delimiters[0]),l.language=(l.language||l.lang||"yaml").toLowerCase(),l.engines=Object.assign({},r,l.parsers,l.engines),l},defaults}var engine,hasRequiredEngine;function requireEngine(){if(hasRequiredEngine)return engine;hasRequiredEngine=1,engine=function(_,j){let l=j.engines[_]||j.engines[r(_)];if(typeof l>"u")throw new Error('gray-matter engine "'+_+'" is not registered');return typeof l=="function"&&(l={parse:l}),l};function r(_){switch(_.toLowerCase()){case"js":case"javascript":return"javascript";case"coffee":case"coffeescript":case"cson":return"coffee";case"yaml":case"yml":return"yaml";default:return _}}return engine}var stringify,hasRequiredStringify;function requireStringify(){if(hasRequiredStringify)return stringify;hasRequiredStringify=1;const r=requireKindOf(),_=requireEngine(),j=requireDefaults();stringify=function(p,c,u){if(c==null&&u==null)switch(r(p)){case"object":c=p.data,u={};break;case"string":return p;default:throw new TypeError("expected file to be a string or object")}const h=p.content,t=j(u);if(c==null){if(!t.data)return p;c=t.data}const i=p.language||t.language,a=_(i,t);if(typeof a.stringify!="function")throw new TypeError('expected "'+i+'.stringify" to be a function');c=Object.assign({},p.data,c);const d=t.delimiters[0],k=t.delimiters[1],q=a.stringify(c,u).trim();let A="";return q!=="{}"&&(A=l(d)+l(q)+l(k)),typeof p.excerpt=="string"&&p.excerpt!==""&&h.indexOf(p.excerpt.trim())===-1&&(A+=l(p.excerpt)+l(k)),A+l(h)};function l(p){return p.slice(-1)!==`
`?p+`
`:p}return stringify}var excerpt,hasRequiredExcerpt;function requireExcerpt(){if(hasRequiredExcerpt)return excerpt;hasRequiredExcerpt=1;const r=requireDefaults();return excerpt=function(_,j){const l=r(j);if(_.data==null&&(_.data={}),typeof l.excerpt=="function")return l.excerpt(_,l);const p=_.data.excerpt_separator||l.excerpt_separator;if(p==null&&(l.excerpt===!1||l.excerpt==null))return _;const c=typeof l.excerpt=="string"?l.excerpt:p||l.delimiters[0],u=_.content.indexOf(c);return u!==-1&&(_.excerpt=_.content.slice(0,u)),_},excerpt}var toFile,hasRequiredToFile;function requireToFile(){if(hasRequiredToFile)return toFile;hasRequiredToFile=1;const r=requireKindOf(),_=requireStringify(),j=requireUtils();return toFile=function(l){return r(l)!=="object"&&(l={content:l}),r(l.data)!=="object"&&(l.data={}),l.contents&&l.content==null&&(l.content=l.contents),j.define(l,"orig",j.toBuffer(l.content)),j.define(l,"language",l.language||""),j.define(l,"matter",l.matter||""),j.define(l,"stringify",function(p,c){return c&&c.language&&(l.language=c.language),_(l,p,c)}),l.content=j.toString(l.content),l.isEmpty=!1,l.excerpt="",l},toFile}var parse,hasRequiredParse;function requireParse(){if(hasRequiredParse)return parse;hasRequiredParse=1;const r=requireEngine(),_=requireDefaults();return parse=function(j,l,p){const c=_(p),u=r(j,c);if(typeof u.parse!="function")throw new TypeError('expected "'+j+'.parse" to be a function');return u.parse(l,c)},parse}var grayMatter,hasRequiredGrayMatter;function requireGrayMatter(){if(hasRequiredGrayMatter)return grayMatter;hasRequiredGrayMatter=1;const r=require$$0,_=requireSectionMatter(),j=requireDefaults(),l=requireStringify(),p=requireExcerpt(),c=requireEngines(),u=requireToFile(),h=requireParse(),t=requireUtils();function i(d,k){if(d==="")return{data:{},content:d,excerpt:"",orig:d};let q=u(d);const A=i.cache[q.content];if(!k){if(A)return q=Object.assign({},A),q.orig=A.orig,q;i.cache[q.content]=q}return a(q,k)}function a(d,k){const q=j(k),A=q.delimiters[0],M=`
`+q.delimiters[1];let D=d.content;q.language&&(d.language=q.language);const V=A.length;if(!t.startsWith(D,A,V))return p(d,q),d;if(D.charAt(V)===A.slice(-1))return d;D=D.slice(V);const R=D.length,H=i.language(D,q);H.name&&(d.language=H.name,D=D.slice(H.raw.length));let L=D.indexOf(M);return L===-1&&(L=R),d.matter=D.slice(0,L),d.matter.replace(/^\s*#[^\n]+/gm,"").trim()===""?(d.isEmpty=!0,d.empty=d.content,d.data={}):d.data=h(d.language,d.matter,q),L===R?d.content="":(d.content=D.slice(L+M.length),d.content[0]==="\r"&&(d.content=d.content.slice(1)),d.content[0]===`
`&&(d.content=d.content.slice(1))),p(d,q),(q.sections===!0||typeof q.section=="function")&&_(d,q.section),d}return i.engines=c,i.stringify=function(d,k,q){return typeof d=="string"&&(d=i(d,q)),l(d,k,q)},i.read=function(d,k){const q=r.readFileSync(d,"utf8"),A=i(q,k);return A.path=d,A},i.test=function(d,k){return t.startsWith(d,j(k).delimiters[0])},i.language=function(d,k){const A=j(k).delimiters[0];i.test(d)&&(d=d.slice(A.length));const M=d.slice(0,d.search(/\r?\n/));return{raw:M,name:M?M.trim():""}},i.cache={},i.clearCache=function(){i.cache={}},grayMatter=i,grayMatter}var grayMatterExports=requireGrayMatter();const matter=getDefaultExportFromCjs(grayMatterExports);export{__vite_glob_0_96 as $,__vite_glob_0_122 as A,__vite_glob_0_121 as B,__vite_glob_0_120 as C,__vite_glob_0_119 as D,__vite_glob_0_118 as E,__vite_glob_0_117 as F,__vite_glob_0_116 as G,__vite_glob_0_115 as H,__vite_glob_0_114 as I,__vite_glob_0_113 as J,__vite_glob_0_112 as K,__vite_glob_0_111 as L,__vite_glob_0_110 as M,__vite_glob_0_109 as N,__vite_glob_0_108 as O,__vite_glob_0_107 as P,__vite_glob_0_106 as Q,__vite_glob_0_105 as R,__vite_glob_0_104 as S,__vite_glob_0_103 as T,__vite_glob_0_102 as U,__vite_glob_0_101 as V,__vite_glob_0_100 as W,__vite_glob_0_99 as X,__vite_glob_0_98 as Y,__vite_glob_0_97 as Z,__vite_glob_0_148 as _,__vite_glob_0_147 as a,__vite_glob_0_32 as a$,__vite_glob_0_95 as a0,__vite_glob_0_94 as a1,__vite_glob_0_93 as a2,__vite_glob_0_92 as a3,__vite_glob_0_91 as a4,__vite_glob_0_90 as a5,__vite_glob_0_89 as a6,__vite_glob_0_88 as a7,__vite_glob_0_87 as a8,__vite_glob_0_86 as a9,__vite_glob_0_59 as aA,__vite_glob_0_58 as aB,__vite_glob_0_57 as aC,__vite_glob_0_56 as aD,__vite_glob_0_55 as aE,__vite_glob_0_54 as aF,__vite_glob_0_53 as aG,__vite_glob_0_52 as aH,__vite_glob_0_51 as aI,__vite_glob_0_50 as aJ,__vite_glob_0_49 as aK,__vite_glob_0_48 as aL,__vite_glob_0_47 as aM,__vite_glob_0_46 as aN,__vite_glob_0_45 as aO,__vite_glob_0_44 as aP,__vite_glob_0_43 as aQ,__vite_glob_0_42 as aR,__vite_glob_0_41 as aS,__vite_glob_0_40 as aT,__vite_glob_0_39 as aU,__vite_glob_0_38 as aV,__vite_glob_0_37 as aW,__vite_glob_0_36 as aX,__vite_glob_0_35 as aY,__vite_glob_0_34 as aZ,__vite_glob_0_33 as a_,__vite_glob_0_85 as aa,__vite_glob_0_84 as ab,__vite_glob_0_83 as ac,__vite_glob_0_82 as ad,__vite_glob_0_81 as ae,__vite_glob_0_80 as af,__vite_glob_0_79 as ag,__vite_glob_0_78 as ah,__vite_glob_0_77 as ai,__vite_glob_0_76 as aj,__vite_glob_0_75 as ak,__vite_glob_0_74 as al,__vite_glob_0_73 as am,__vite_glob_0_72 as an,__vite_glob_0_71 as ao,__vite_glob_0_70 as ap,__vite_glob_0_69 as aq,__vite_glob_0_68 as ar,__vite_glob_0_67 as as,__vite_glob_0_66 as at,__vite_glob_0_65 as au,__vite_glob_0_64 as av,__vite_glob_0_63 as aw,__vite_glob_0_62 as ax,__vite_glob_0_61 as ay,__vite_glob_0_60 as az,__vite_glob_0_146 as b,__vite_glob_0_31 as b0,__vite_glob_0_30 as b1,__vite_glob_0_29 as b2,__vite_glob_0_28 as b3,__vite_glob_0_27 as b4,__vite_glob_0_26 as b5,__vite_glob_0_25 as b6,__vite_glob_0_24 as b7,__vite_glob_0_23 as b8,__vite_glob_0_22 as b9,__vite_glob_0_21 as ba,__vite_glob_0_20 as bb,__vite_glob_0_19 as bc,__vite_glob_0_18 as bd,__vite_glob_0_17 as be,__vite_glob_0_16 as bf,__vite_glob_0_15 as bg,__vite_glob_0_14 as bh,__vite_glob_0_13 as bi,__vite_glob_0_12 as bj,__vite_glob_0_11 as bk,__vite_glob_0_10 as bl,__vite_glob_0_9 as bm,__vite_glob_0_8 as bn,__vite_glob_0_7 as bo,__vite_glob_0_6 as bp,__vite_glob_0_5 as bq,__vite_glob_0_4 as br,__vite_glob_0_3 as bs,__vite_glob_0_2 as bt,__vite_glob_0_1 as bu,__vite_glob_0_0 as bv,__vite_glob_0_145 as c,__vite_glob_0_144 as d,__vite_glob_0_143 as e,__vite_glob_0_142 as f,__vite_glob_0_141 as g,__vite_glob_0_140 as h,__vite_glob_0_139 as i,__vite_glob_0_138 as j,__vite_glob_0_137 as k,__vite_glob_0_136 as l,matter as m,__vite_glob_0_135 as n,__vite_glob_0_134 as o,__vite_glob_0_133 as p,__vite_glob_0_132 as q,__vite_glob_0_131 as r,__vite_glob_0_130 as s,__vite_glob_0_129 as t,__vite_glob_0_128 as u,__vite_glob_0_127 as v,__vite_glob_0_126 as w,__vite_glob_0_125 as x,__vite_glob_0_124 as y,__vite_glob_0_123 as z};
