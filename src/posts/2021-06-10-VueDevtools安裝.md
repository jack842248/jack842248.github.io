---
title: vue.js Devtools安裝
date: 2021-06-10
tags: ["vue"]
---
## 安裝Vue.js devtools開發者工具
1. Vue.js devtools是一個Chrome擴充工具，[點擊前往網址](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)。
![圖片](/img/安裝Vue.jsdevtools/安裝Vue.jsdevtools-1.png)

-----------------------------------------------
2. 要使用Vue.js devtools的前提是...，該網站引入的Vue.js版本必須"不是min版"。
![圖片](/img/安裝Vue.jsdevtools/安裝Vue.jsdevtools-2.png)

-----------------------------------------------
3. 點選Chrome右上角"設定"(頭像右邊)→更多工具→擴充功能→找到"Vue.js devtools"，將"允許存許網址"開啟。
![圖片](/img/安裝Vue.jsdevtools/安裝Vue.jsdevtools-3.png)

-----------------------------------------------
4. 打開檔案總管，進入C槽→\Users(使用者)\jack8(電腦名稱)\AppData\Local\Google\Chrome\User Data\Default\Extensions\nhdogjmejiglipccpnnnanhbledajbpd\5.3.4_0(版本可能不同)，將裡面的"manifest.json"開啟，然後把"persistent":false改成true。
![圖片](/img/安裝Vue.jsdevtools/安裝Vue.jsdevtools-4.png)

-----------------------------------------------
5. 在Chrome右上角Vue小圖示有亮起顏色的時候，右鍵→檢查，就可以看到開發者工具最後面出現"Vue"。
![圖片](/img/安裝Vue.jsdevtools/安裝Vue.jsdevtools-5.png)