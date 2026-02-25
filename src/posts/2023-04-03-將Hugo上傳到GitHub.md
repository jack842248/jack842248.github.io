---
title: 將Hugo上傳到GitHub
date: 2023-04-03
tags: ["Hugo"]
---
## 首先需要先安裝VScode
1. 先到[VScode](https://code.visualstudio.com/)頁面下載應用程式，安裝並開啟
![圖片](./images/將Hugo上傳到GitHub/將Hugo上傳到GitHub-1.png)

-----------------------------------------------
2. 安裝Chinese Language插件，讓介面變繁體中文
![圖片](./images/將Hugo上傳到GitHub/將Hugo上傳到GitHub-2.png)

-----------------------------------------------
3. 安裝Better TOML插件，讓code有顏色區別
![圖片](./images/將Hugo上傳到GitHub/將Hugo上傳到GitHub-3.png)

-----------------------------------------------
4. 若想修改VScode介面顏色，進入色彩佈景主題
![圖片](./images/將Hugo上傳到GitHub/將Hugo上傳到GitHub-4.png)

-----------------------------------------------
5. 出現選單視窗，並挑選適合主題
![圖片](./images/將Hugo上傳到GitHub/將Hugo上傳到GitHub-5.png)

-----------------------------------------------
6. 若想修改文字顯示大小，進入設定
![圖片](./images/將Hugo上傳到GitHub/將Hugo上傳到GitHub-6.png)

-----------------------------------------------
7. 在Font Size輸入文字大小
![圖片](./images/將Hugo上傳到GitHub/將Hugo上傳到GitHub-7.png)

-----------------------------------------------
## 設置基本Hugo參數
1. 開啟資料夾，點選config.toml檔，編輯參數值
![圖片](./images/將Hugo上傳到GitHub/將Hugo上傳到GitHub-8.png)

-----------------------------------------------
2. 更改頁籤圖示，製作圖檔命名favicon.png，放置到img資料夾裡面
![圖片](./images/將Hugo上傳到GitHub/將Hugo上傳到GitHub-9.png)

-----------------------------------------------
3. 關閉chrome重新開啟，即可看到設置成功
![圖片](./images/將Hugo上傳到GitHub/將Hugo上傳到GitHub-10.png)

-----------------------------------------------
## 上傳到Github Pages
1. 對資料夾按右鍵，打開終端機
![圖片](./images/將Hugo上傳到GitHub/將Hugo上傳到GitHub-11.png)

-----------------------------------------------
2. 輸入`hugo`，按enter執行
![圖片](./images/將Hugo上傳到GitHub/將Hugo上傳到GitHub-12.png)

-----------------------------------------------
3. 會看到資料夾多出`public`以及內容資料
![圖片](./images/將Hugo上傳到GitHub/將Hugo上傳到GitHub-13.png)

-----------------------------------------------
4. 將public的內容資料拉到Github複製的本地端資料夾內
![圖片](./images/將Hugo上傳到GitHub/將Hugo上傳到GitHub-14.png)

-----------------------------------------------
5. 打開Github Desktop建立commit
![圖片](./images/將Hugo上傳到GitHub/將Hugo上傳到GitHub-15.png)

-----------------------------------------------
6. 將程式碼Push到Github
![圖片](./images/將Hugo上傳到GitHub/將Hugo上傳到GitHub-16.png)

-----------------------------------------------
7. 到Github頁面的repository點選該專案，點選Add a README
![圖片](./images/將Hugo上傳到GitHub/將Hugo上傳到GitHub-17.png)

-----------------------------------------------
8. 再點Commit new file，之後過3~5分鐘後網站即可預覽
![圖片](./images/將Hugo上傳到GitHub/將Hugo上傳到GitHub-18.png)