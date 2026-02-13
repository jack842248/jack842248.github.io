---
title: 利用nvm來控制node版本
date: 2024-04-30
tags: ["Web"]
---
## 安裝nvm
```bash
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```
|指令|一般|縮寫|
|---|---|---|
|安裝最新穩定版node|nvm install node|nvm i node|
|安裝指定版本node|nvm install 18.20.4|nvm i 18.20.4|
|使令指定node版本|nvm use 18.20.4||
|查看已安裝的node清單|nvm list|nvm ls|
|列出可安裝的nodeLTS版本|nvm ls-remote --lts||
|設定node預設使用版本|nvm alias default 18.20.4||
|移除已安裝版本|nvm uninstall 18.20.4|nvm uni 18.20.4|