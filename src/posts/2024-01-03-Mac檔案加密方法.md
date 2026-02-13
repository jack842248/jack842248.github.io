---
title: Mac檔案加密方法
date: 2024-01-03
tags: ["Mac"]
---
## 將檔案加密方法
1. 打開終端機：command ＋空白，輸入 terminal，enter 開啟 app
2. 先輸入 cd，再把欲加密檔案直接拉進終端機，然後把資料名稱刪除(**要先在資料夾外層**)
3. 接著輸入:
```bash
$ zip -er 資料夾名稱.zip 資料夾名稱
```
範例：
```bash
$ zip -er dist.zip dist
```
4. 接著會出現”Enter password:“，設定密碼
5. enter 後出現“Verify password:”，再次輸入密碼
6. 完成後，該資料夾就會出現加密 zip 檔