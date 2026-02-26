---
title: JSON Server模擬串接API
date: 2026-02-05
tags: ["Web"]
---

#### 1.創建資料夾

#### 2.在資料夾啟動終端機安裝：
```bash
npm install -g json-server
```
`npm版本必須要=>20`

#### 3.在資料夾內創建db.json檔
```json
{
  "todo2_16": [
    {
      "id": "b6c2e3f0-d7d0-4823-8e8f-52e1ad21cd52",
      "Editing": false,
      "Thing": "玩遊戲",
      "Status": false,
      "CreateTime": "2024-12-19T02:09:37.123"
    },
    {
      "Editing": false,
      "id": "cf9fb6a5-e869-4e07-9c12-04ae64031fa8",
      "Thing": "寫作業",
      "Status": false,
      "CreateTime": "2024-12-19T02:14:19.049"
    }
  ]
}
```

#### 4.執行指令啟動伺服器
```bash
json-server --watch db.json
```

#### 5.開啟網址
```bash
http://localhost:3000/todo2_16
```

#### 6.取得特定資料
網址/+id
```bash
http://localhost:3000/todo2_16/cf9fb6a5-e869-4e07-9c12-04ae64031fa8
```

#### 7.篩選特定資料
網址/?篩選的屬性=值是多少
```bash
http://localhost:3000/todo2_16?Status=true
```

#### 8.進階篩選特定資料
網址/?篩選的屬性=值是多少&篩選的屬性=值是多少
```bash
http://localhost:3000/todo2_16?Status=true
```