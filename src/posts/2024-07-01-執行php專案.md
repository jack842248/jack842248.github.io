---
title: 將PHP專案運行起來
date: 2024-07-01
tags: ["PHP"]
---
## 執行php專案
1. 打開git中laravel專案
2. control＋`開啟終端機
3. 複製.env.example輸入：cp .env.example .env
4. 在.env裡的
    * DB_DATABASE=(對照DB裡的SQL名稱)
    * DB_USERNAME=root
    * DB_PASSWORD=a1234567
    * APP_URL=localhost
5. 登入php(安裝在本機)
    * http://127.0.0.1/public/phpMyAdmin/
    * 帳號：root
    * 密碼：a1234567
6. 點“新增”
    1. 資料表名稱：(對照DB裡的SQL名稱)
    2. 選擇：utf8mb4_general_ci
    3. 點“匯入”將DB裡的.sql匯入
7. 回到終端機
    1. 更新依賴套件：composer update
    2. 產生應用程序金鑰：php artisan key:generate --ansi 
    3. 建立公開連結：php artisan storage:link
    4. 啟動伺服器：php artisan serve

-----------------------------------------------
## php專案結構

```markdown
LaravelProject/
├── app/                        # 核心應用程式程式碼
│   ├── Console/
│   ├── Exceptions/
│   ├── Http/
│   │   ├── Controllers/
│   │   ├── Middleware/
│   │   └── Kernel.php
│   ├── Models/
│   └── Providers/
│
├── bootstrap/                  # 啟動與自動載入設定
│   ├── cache/
│   └── app.php
│
├── config/                     # 所有功能設定檔
│   ├── app.php
│   ├── database.php
│   ├── mail.php
│   └── services.php
│
├── database/                   # 資料庫相關
│   ├── factories/
│   ├── migrations/
│   └── seeders/
│
├── public/                     # 唯一公開目錄（網站入口）
│   ├── css/
│   ├── js/
│   ├── images/
│   └── index.php
│
├── resources/                  # 未編譯資源
│   ├── views/                  # Blade 模板
│   ├── lang/                   # 多語系
│   ├── js/
│   └── sass/
│
├── routes/                     # 路由定義
│   ├── web.php
│   ├── api.php
│   └── console.php
│
├── storage/                    # 儲存編譯後檔案、log、session
│   ├── app/
│   ├── framework/
│   └── logs/
│
├── tests/                      # PHPUnit 測試
│   ├── Feature/
│   └── Unit/
│
├── vendor/                     # Composer 套件
│
├── .env
├── .env.example
├── .gitignore
├── artisan                     # Laravel 指令工具
├── composer.json               # PHP 套件設定
├── composer.lock
├── package.json                # 前端套件
├── phpunit.xml
├── server.php
└── webpack.mix.js              # (舊版) 前端打包設定
```

### 各資料夾說明
* app：含此 App 的核心程式碼
* bootstrap：含此框架啟動與自動載入設定的檔案
* config：含此 App 所有功能的設定檔
* database：含資料庫遷移與資料填充檔案
* public：唯一公開目錄，使用者連到此 App 的進入點 (index.php)，含 JS、CSS 等資源檔
* resources：含 Blade 模板 HTML、未編譯的資源檔（LESS、Vue 等）及多國語言資料檔案
* routes：含此 App 的所有路由定義檔
* storage：Laravel 用來儲存檔案的目錄，含編譯後的 Blade 模板、session、log 等檔案
* tests：自動化測試目錄，含 PHPUnit 測試相關文件
* vendor：含 Laravel 主程式框架與相依套件（composer 安裝的套件存放在此目錄底下）

### 根目錄下一些重要文件說明
* artisan：Laravel 輸入指令的工具，artisan 的配置文件
* composer.json：每個 package 都需要，寫入 PHP 的相依套件與 namespace
* package.json：與 composer.json 類似，寫入 node 的相依套件（因為打包靜態資源需要）
* phpunit.xml：PHPUnit 的預設設定檔
* server.php：啟動 server 後會執行的文件檔
* webpack.mix.js：webpack 設定文件，因為 Laravel 版本 5.4 後，全部使用 webpack 打包靜態資源