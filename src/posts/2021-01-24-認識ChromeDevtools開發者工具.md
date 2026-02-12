---
title: 認識ChromeDevtools開發者工具
date: 2021-01-24
tags: ["Web"]
---
### 對著圖片→"右鍵"→"複製圖片位置"。可複製該圖片的路徑，貼到src上。
![圖片](/img/Chromedevtools除錯/Chromedevtools除錯-1.png)

-----------------------------------------------
### 對著連結→"右鍵"→"複製連結網址"。可複製該連結的路徑，貼到href上。
![圖片](/img/Chromedevtools除錯/Chromedevtools除錯-2.png)

-----------------------------------------------
### 開啟Chrome開發者工具:打開Chrome瀏覽器→"右鍵"→"檢查"。
![圖片](/img/Chromedevtools除錯/Chromedevtools除錯-3.png)

-----------------------------------------------
### Dock side : 可以設定開發者人員工具的方向、或獨立式窗。
![圖片](/img/Chromedevtools除錯/Chromedevtools除錯-4.png)

-----------------------------------------------
### Toggle Device Toolbar : 切換手機或平板螢幕大小來瀏覽網頁。
![圖片](/img/Chromedevtools除錯/Chromedevtools除錯-5.png)

-----------------------------------------------
### Select an element in the page to inspect it : 可以尋找網頁上的元素。
![圖片](/img/Chromedevtools除錯/Chromedevtools除錯-6.png)

-----------------------------------------------
### 在[Elements]使用ctrl+F可搜尋HTML標籤、class名稱，找到的會被highlight。
![圖片](/img/Chromedevtools除錯/Chromedevtools除錯-7.png)

-----------------------------------------------
### 在[Elements]使用styles的Fliter，可搜尋css屬性名稱。
![圖片](/img/Chromedevtools除錯/Chromedevtools除錯-8.png)

-----------------------------------------------
### 在[Elements]使用styles的:hov，可查看元素在:hover時的狀態。
![圖片](/img/Chromedevtools除錯/Chromedevtools除錯-9.png)

-----------------------------------------------
### 在[Elements]使用styles的視窗中，transform、animation可查看貝茲控制點的曲線。
![圖片](/img/Chromedevtools除錯/Chromedevtools除錯-10.png)
```js
// <-----css----->
transition: 1s cubic-bezier(.17,.67,.83,.67)
```

-----------------------------------------------
### 點擊"..."→"Show console drawer"→點擊裡面的"..."→"Animations"→點擊圖片:可以查看animation的時間軸，選擇10%可以觀看慢速。
![圖片](/img/Chromedevtools除錯/Chromedevtools除錯-11.png)

-----------------------------------------------
### 在[network]，重新整理頁面後，可在最底下查看狀態:
* requests(請求): 請求回傳的檔案數量。
* transferred(轉移): 壓縮過後的流量。
* resources(資源): 未壓縮過的總資源。
* Finish(結束): 整體包含ajax動態載入的時間。
* Load(加載): 靜態檔案載入的時間。
![圖片](/img/Chromedevtools除錯/Chromedevtools除錯-12.png)

-----------------------------------------------
### 在[network]，可按"Throttling小箭頭"按鈕 : 可以模擬其他頻寬的速度。
![圖片](/img/Chromedevtools除錯/Chromedevtools除錯-13.png)

-----------------------------------------------
### 在[Console]，直接撰寫console.log() : 可以顯示結果。
![圖片](/img/Chromedevtools除錯/Chromedevtools除錯-14.png)

-----------------------------------------------
### 在[Console]，直接撰寫console.table() : 放入物件或陣列，可以表格方式查看。
![圖片](/img/Chromedevtools除錯/Chromedevtools除錯-15.png)

-----------------------------------------------
### 在[Console]，直接撰寫console.time()、console.timeEnd() : 可以計算時間。
![圖片](/img/Chromedevtools除錯/Chromedevtools除錯-16.png)
```js
// <-----js----->
console.time();
setTimeout(function(){
    console.timeEnd("a");
},5000);

// <-----結果----->
//經過5秒後顯示:"a"
```

-----------------------------------------------
### 在[Elements]對要查看的元素"右鍵"→"Break on"，可查看DOM元素的斷點。
* [subtree moditications]:子節點有變更的時候。
* [attribute moditications]:屬性有變更的時候。
* [node removal]:節點被移除的時候。
![圖片](/img/Chromedevtools除錯/Chromedevtools除錯-17.png)

-----------------------------------------------
### 在[Sources]中間部分先在程式碼編號上點擊新增斷點。
![圖片](/img/Chromedevtools除錯/Chromedevtools除錯-18.png)

-----------------------------------------------
### 在[Sources]右邊部分[Watch]可以手動新增要查看的變數。
![圖片](/img/Chromedevtools除錯/Chromedevtools除錯-19.png)

-----------------------------------------------
### 在[Sources]右邊部分按鈕，可執行斷點，從左到右分別是:
* 執行查看斷點。
* 查看下一個斷點。
* 進入斷點的function。
* 離開斷點的function。
* 將斷點都隱藏。
* 若有錯誤則停止。
![圖片](/img/Chromedevtools除錯/Chromedevtools除錯-20.png)