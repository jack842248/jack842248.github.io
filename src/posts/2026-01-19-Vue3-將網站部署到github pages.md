---
title: 【Vue3】將網站部署到github pages
date: 2026-01-19
tags: ["Vue3"]
---
### 在github建立新的repository
1. 建立`repository`時，網址為`帳號`/`專案名稱`
2. 若已在`vscode`已經，建立了`git`檔，可以選擇推送儲存庫
#### 推送儲存庫指令：
```
git remote add origin https://github.com/帳號/vuetest.git
git branch -M main
git push -u origin main
```
3. 在專案中的終端機輸入以上指令，並且授權github允許存取vscode
4. 回到github重整頁面，可以看到資料已上傳

-----------------------------------------------
### 將dist部署到github page上
1. 安裝`gh-pages`套件
```
$ npm i gh-pages
```
2. 新增`部署`指令，到`package.json`
```js
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "vite build && gh-pages -d dist"
},
```
`gh-pages -d dist`指令表示將dist部署

3. 此時若直接部署到`github`上，會因為網址不對而無法正常顯示，所以我們必須要再設定基本路徑：
新增`base`讓名稱跟`帳號`/`vuetest`相同
```js
//vite.config.js

export default defineConfig({
    base: '/vuetest/',
});
```