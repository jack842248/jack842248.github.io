---
title: 認識GitHub版本控制
date: 2023-04-01
tags: ["Hugo","GitHub"]
---
## 什麼是GitHub
* GitHub是管理Git版本控制系統的平台

### Commit
* Commit是版本紀錄節點，每次提交都會產生：
    1. 修改內容
    2. 作者資訊
    3. 時間戳記
    4. SHA-1 雜湊值

### Github Pages
* 將 Repository 中的靜態網站檔案（HTML/CSS/JS）部署成可公開存取的網站

### Github Desktop
* Github Desktop將程式碼上傳到Github的應用程式

### 版本控制種類
* 分散式版本控制(同時多位開發者)
    * 每個開發者都有完整版本庫
    * 可以離線 commit
    * 最後再同步到遠端
    * 例如：Git、BitKeeper、Mercurial
* 中央式版本控制(一次一個開發者)
    * 有一個中央伺服器
    * 所有人都連到同一個中央儲存庫
    * 本地沒有完整版本歷史
    * 例如：Subversion、CVS

-----------------------------------------------
## 創建GitHub
1. 先到[GitHub](https://github.com/)官網創建帳號
    * Username等於帳號名稱(https://帳號名稱.github.io/)
2. 下載[Github Desktop](https://desktop.github.com/)並登入帳號
3. 在Github上創建Repository(資料夾)並Clone(複製)到本地端
    * 使用Push指令(上傳Github)
    * 使用Pull指令(將Github更新本地端)

-----------------------------------------------
4. 登入GitHub按左上角＋符號，點擊New repository
![圖片](./images/認識GitHub版本控制/認識GitHub版本控制-1.png)

-----------------------------------------------
5. 輸入資料夾名稱(Repository name)、描述(Description)
![圖片](./images/認識GitHub版本控制/認識GitHub版本控制-2.png)

-----------------------------------------------
6. 點選Set up in Desktop自動開啟Github Desktop
![圖片](./images/認識GitHub版本控制/認識GitHub版本控制-3.png)

-----------------------------------------------
7. 確認路徑位置，點擊Clone複製到本地端上
![圖片](./images/認識GitHub版本控制/認識GitHub版本控制-4.png)

-----------------------------------------------
8. 接著本地端資料夾就會與Github Desktop上的資料同步
![圖片](./images/認識GitHub版本控制/認識GitHub版本控制-5.png)

-----------------------------------------------
9. 試著在本地端上建立一個文字檔
![圖片](./images/認識GitHub版本控制/認識GitHub版本控制-6.png)

-----------------------------------------------
10. 輸入存檔點名稱(Summary)、描述(Description)，點擊Commit to main
![圖片](./images/認識GitHub版本控制/認識GitHub版本控制-7.png)

-----------------------------------------------
11. 點右上角Publish branch進行上傳
![圖片](./images/認識GitHub版本控制/認識GitHub版本控制-8.png)

-----------------------------------------------
12. Fetch origin表示上傳完成
![圖片](./images/認識GitHub版本控制/認識GitHub版本控制-9.png)

-----------------------------------------------
13. 接著回到Github上即可看到上傳的文字檔
![圖片](./images/認識GitHub版本控制/認識GitHub版本控制-10.png)