---
title: 【Vue3】將網站部署到github pages
date: 2026-01-19
tags: ["Vue3"]
---
### 在github建立新的repository
1. 建立repository時，網址為`帳號`/`專案名稱`
2. 若已在vscode已經，建立了git檔，可以選擇推送儲存庫
```
git remote add origin https://github.com/帳號/專案名稱.git
git branch -M main
git push -u origin main
```
#### vue2：
元件建立得時候在`setup()`宣告的資料，必須要return，才能讓`template`使用
```js

```
-----------------------------------------------