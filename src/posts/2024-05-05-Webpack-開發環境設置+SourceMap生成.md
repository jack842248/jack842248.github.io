---
title: 【Webpack】開發環境設置+SourceMap生成
date: 2024-05-05
tags: ["webpack"]
---
#
## 開發環境設置
#
<!--more-->
#
1. 在`webpack.config.js`新增：
#
```js
const path = require('path');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: './js/main.js', 
        clean: true, 
    },
    devServer: {
        static: path.resolve(__dirname,'dist'),
        compress: true, //啟用gzip壓縮方式(加速)
        hot: true, //只重新加載修改的部分
        watchFiles: ['src/**/*'] //監控檔案
    }
}
```
#
-----------------------------------------------
#
## 自動生成map檔
#
1. 在`webpack.config.js`新增：
#
```js
const path = require('path');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: './js/main.js', 
        clean: true, 
    },
    devServer: {
        static: path.resolve(__dirname,'dist'),
        compress: true,
        hot: true,
        watchFiles: ['src/**/*']
    },
    devtool: 'source-map' //自動生成sourceMap檔
}
```
#