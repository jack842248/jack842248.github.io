---
title: Webpack自動轉譯JS版本+全域引用jQuery
date: 2024-05-03
tags: ["Webpack","jQuery"]
---
## 轉譯js

1. 安裝套件`babel-loader`和`@babel/core`和`@babel/preset-env`套件
    * `babel-loader`是webpack的loader套件
    * `@babel/core`調用babel的api編譯
    * `@babel/preset-env`可以使用最新版本的javascript去編譯
```bash
$ npm i babel-loader @babel/core @babel/preset-env -D
```

2. 在`webpack.config.js`新增：
```js
const path = require('path');

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
                test: /\.js$/, //找尋js副檔名的檔案(正規表達式)
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets:['@babel/preset-env']
                    },
                }
            }
        ]
    }
}
```

3. 在`src`底下新增`all.js`檔，並在檔案裡隨便寫一些程式：
```js
const greet = (name = 'Jack') => {
    return `Hello, ${name}!`;
};
```
```markdown
you project
├─── node_modules/        
├─── src/
│     │
│     ├─── index.html 
│     │
│     └──── js/ 
│           │
│           ├── main.js
│           │
│           └── all.js //新增一支js檔
│ 
├─── package.json
└─── webpack.config.js   
```

4. 在`main.js`引入這支`all.js`檔：
```js
import './all.js';
```

5. 在終端機執行：
```bash
$ npm run start
```
```markdown
you project
├─── dist/
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
│     └──── js/ 
│           │
│           ├── main.js
│           │
│           └── all.js //新增一支js檔
│ 
├─── package.json
└─── webpack.config.js   
```

6. 可以在編譯出來的`dist`檔底下的`main.js`看到轉譯的結果：
```js
eval("var greet = function greet() {\n  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Jack';\n  return \"Hello, \".concat(name, \"!\");\n};\n\n//# sourceURL=webpack:///./src/js/all.js?");
```

-----------------------------------------------
## 若要使用jquery

1. 安裝套件`jquery`：
```bash
$ npm i jquery
```

2. 在`main.js`引用：
```js
import '../../node_modules/jquery.min.js'
```

3. 在`webpack.config.js`新增：
```js
const webpack = require('webpack'); //引用webpack-cli內的工具
const path = require('path');

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
                test: /\.js$/, //找尋js副檔名的檔案(正規表達式)
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets:['@babel/preset-env']
                    },
                }
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({ //全域設置$變數
            $: 'jquery',
            jquery: 'jquery',
            'window.jquery': 'jquery'
        })
    ]
}
```

4. 測試`jquery`有沒有載入成功，可以在先前的`all.js`：
```js
$(document).ready(function(){
    $("body").css('backgroundColor','red')
})
```

5. 再次終端機執行：
```bash
$ npm run start
```

6. 如果頁面整個有成功變成`紅色`，表示成功。
