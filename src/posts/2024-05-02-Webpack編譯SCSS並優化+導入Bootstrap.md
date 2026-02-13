---
title: Webpack編譯SCSS並優化+導入Bootstrap
date: 2024-05-02
tags: ["Webpack"]
---
## 編譯css
1. 安裝套件`style-loader`和`css-loader`套件
```
$ npm i style-loader css-loader -D
```
2. 在`src`資料夾底下手動建立`css/style.css`檔案，並在裡面寫一些樣式：
```css
body{
    background-color: red;
}

::placeholder{
    display: flex;
    flex: 1 1 auto;
    transform: translateX(-30px);
}
```
```
you project
├─── dist/
│     │
│     ├─── index.html 
│     │
│     └─── js/ 
│           │
│           └── main.js
│  
├─── node_modules/        
├─── src/
│     │
│     ├─── index.html 
│     │
│     ├─── js/ 
│     │     │
│     │     └── main.js
│     │
│     └─── css/ 
│           │
│           └── style.css
│ 
├─── package.json
└─── webpack.config.js   
```
3. 在`webpack.config.js`新增：
```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/main.js', //進入點
    output: {
        path: path.resolve(__dirname,'dist'), //設置輸出檔案位置(絕對路徑)
        filename: './js/main.js', //輸出檔案名稱
        clean: true, //是否自動刪除舊檔案
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader', //後執行，將css以<style>方式直接引入html
                    'css-loader' //先執行，解析並壓縮代碼
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        })
    ]
}
```
`在loader裡的執行序是由下往上`

4. 在`main.js`裡新增：
```js
import '../css/style.css'
```
5. 在終端機執行： 
```
$ npm run start
```
```
you project
├─── dist/
│     │
│     ├─── js/ 
│     │     │
│     │     └── main.js
│     │
│     └─── css/ 
│           │
│           └── style.css
│  
├─── node_modules/        
├─── src/
│     │
│     ├─── js/ 
│     │     │
│     │     └── main.js
│     │
│     └─── css/ 
│           │
│           └── style.css
│ 
├─── package.json
└─── webpack.config.js   
```

-----------------------------------------------
## 將css以獨立方式帶入html
1. 安裝`mini-css-extract-plugin`套件
```
$ npm i mini-css-extract-plugin -D
```
2. 在`webpack.config.js`新增：
```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //引入套件

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: './js/main.js', 
        clean: true, 
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, //將原本style-loader替換掉，改用<link>方式引入html
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'css/style.css' //定義要輸出的名稱
        })
    ]
}
```
3. 在終端機執行： 
```
$ npm run start
```

-----------------------------------------------
## 編譯scss檔案並將樣式帶入html
1. 安裝`sass`、`sass-loader`、`postcss`、`postcss-loader`、`postcss-preset-env`、
```
$ npm i sass sass-loader postcss postcss-loader postcss-preset-env -D
```
2. 在`webpack.config.js`新增：
```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: './js/main.js', 
        clean: true, 
    },
    module: {
        rules: [
            {
                test: /\.scss$/, //將原本css替換掉，改成scss檔
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader', //使用postcss套件
                        options: {
                            postcssOptions:{
                                plugins:[
                                    ['postcss-preset-env'] //包含autoprefixer
                                ]
                            }
                        }
                    },
                    'sass-loader' //先編譯scss
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'css/style.css' //定義要輸出的名稱
        })
    ]
}
```
3. 建立`scss`資料夾結構，並在裡面新增`style.scss`檔，簡單寫一些樣式：
```scss
body{
    background-color: red;
}

::placeholder{
    display: flex;
    flex: 1 1 auto;
    transform: translateX(-30px);
}
```
4. 修改`main.js`裡的樣式路徑：
```js
import '../scss/style.scss'
```
5. 在終端機執行：
```
$ npm run start
```
```
you project
├─── dist/
│     │
│     ├─── js/ 
│     │     │
│     │     └── main.js
│     │
│     └─── css/ 
│           │
│           └── style.css
│  
├─── node_modules/        
├─── src/
│     │
│     ├─── js/ 
│     │     │
│     │     └── main.js
│     │
│     └─── scss/ 
│           │
│           └── style.scss
│ 
├─── package.json
└─── webpack.config.js   
```
6. 可以看到在`dist`裡的`style.css樣式自動增加前綴
```css
body {
  background-color: red;
}

/* 這段是自動增加的 */
::-moz-placeholder { 
  display: flex;
  flex: 1 1 auto;
  transform: translateX(-30px);
}

::placeholder {
  display: flex;
  flex: 1 1 auto;
  transform: translateX(-30px);
}
```

-----------------------------------------------
## 若要使用bootstrap(5.3.3)
1. 安裝`bootstrap`套件:
    * `bootstrap`是css樣板套件
    * `@popperjs/core`是bootstrap定位套件
```
$ npm i bootstrap @popperjs/core
```
2. 快速取用`bootstrap`方法，是直接在`main.js`引入：
```js
import '../../node_modules/bootstrap/scss/bootstrap.scss'; //bootstrap核心
import '../scss/style.scss'; //自定義樣式
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'; //bootstrap定位套件
```
3. 自訂`bootstrap`方法，在scss裡的`style.scss`引入：
```scss
//bootstrap
@import "../../node_modules/bootstrap/scss/functions";

//自訂義變數
@import "custom-variables"; //從bootstrap/scss/variables複製過來到本地端修改(切記要刪掉最後的import以免出跳錯)

//bootstrap
@import "../../node_modules/bootstrap/scss/variables";
@import "../../node_modules/bootstrap/scss/variables-dark";
@import "../../node_modules/bootstrap/scss/maps";
@import "../../node_modules/bootstrap/scss/mixins";
@import "../../node_modules/bootstrap/scss/utilities";
@import "../../node_modules/bootstrap/scss/root";
@import "../../node_modules/bootstrap/scss/reboot";
@import "../../node_modules/bootstrap/scss/type";
@import "../../node_modules/bootstrap/scss/images";
@import "../../node_modules/bootstrap/scss/containers";
@import "../../node_modules/bootstrap/scss/grid";
@import "../../node_modules/bootstrap/scss/tables";
@import "../../node_modules/bootstrap/scss/forms";
@import "../../node_modules/bootstrap/scss/buttons";
@import "../../node_modules/bootstrap/scss/transitions";
@import "../../node_modules/bootstrap/scss/dropdown";
@import "../../node_modules/bootstrap/scss/button-group";
@import "../../node_modules/bootstrap/scss/nav";
@import "../../node_modules/bootstrap/scss/navbar";
@import "../../node_modules/bootstrap/scss/card";
@import "../../node_modules/bootstrap/scss/accordion";
@import "../../node_modules/bootstrap/scss/breadcrumb";
@import "../../node_modules/bootstrap/scss/pagination";
@import "../../node_modules/bootstrap/scss/badge";
@import "../../node_modules/bootstrap/scss/alert";
@import "../../node_modules/bootstrap/scss/progress";
@import "../../node_modules/bootstrap/scss/list-group";
@import "../../node_modules/bootstrap/scss/close";
@import "../../node_modules/bootstrap/scss/toasts";
@import "../../node_modules/bootstrap/scss/modal";
@import "../../node_modules/bootstrap/scss/tooltip";
@import "../../node_modules/bootstrap/scss/popover";
@import "../../node_modules/bootstrap/scss/carousel";
@import "../../node_modules/bootstrap/scss/spinners";
@import "../../node_modules/bootstrap/scss/offcanvas";
@import "../../node_modules/bootstrap/scss/placeholders";
@import "../../node_modules/bootstrap/scss/helpers";
@import "../../node_modules/bootstrap/scss/utilities/api";

//自訂樣式
@import "custom"
```
4. 重要補充：如果`sass`出現，關於變數等等的警告錯誤，請將`sass`版本降低到`@1.77.6`：

`More info: https://sass-lang.com/d/color-functions`

`More info: https://sass-lang.com/d/mixed-decls`
```
$ npm i sass@1.77.6
```