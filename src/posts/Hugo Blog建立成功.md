---
title: Hugo Blog建立成功
date: 2021-01-22
tags: ["Hugo"]
---
## 前言
我所使用的Hugo主題是[beautiful hugo](https://themes.gohugo.io/beautifulhugo/)

當初在建立時，是觀看hahow好學校的[Github免費架站術!輕鬆打造個人品牌](https://hahow.in/courses/5de8fec16117240026540b9c/main)這堂課程來完成的，非常適合像我這樣的初心者，裏頭也包含了創建`Github`、`Hugo`主題設定、`Markdown`語法撰寫的介紹與使用，有興趣的人也可以點擊連結參考看看。

一開始在創建部落格時，我完全不知道該怎麼去調整`config.toml`設定檔，搜尋網路上有相關的文章也不多，所以我最後只好一項一項的去測試摸索。雖然每個Hugo主題的設定檔，都可能會有些微不同，但是其中還是會有些相同的設定值可做參考，所以我這邊就來分享關於我的主題設定檔，希望能給也想建立Hugo網站的人一點幫助，省下再去一項一項慢慢測試的時間。

以下是我的設定檔內容，若註解上有上有錯誤的地方，也可以告訴我來做修正。

-----------------------------------------------
## 分享設定
```toml
#此網站的連結網址
baseurl = "https://jack842248.github.io"

#語言設定
DefaultContentLanguage = "zh-tw"

#頁籤標題
title = "Jack Huang Blog"

#Hugo主題名稱
theme = "beautifulhugo"

#Disqus評論功能的WebsiteName
disqusShortname = "XXXXXXXXXX"

#Google Analytics的追蹤ID
googleAnalytics = "UA-XXXXXXXXX-X"

#Chroma(新)語法突出顯示，不使用直接註解掉
pygmentsCodeFences = true
pygmentsUseClasses = true

#Pygments(舊)語法突出顯示，不使用直接註解掉
pygmentsStyle = "trac"
pygmentsUseClassic = true

#Syntax Highlighting語法突出顯示，不使用直接註解掉
pygmentOptions = "linenos=inline"
pygmentsCodefencesGuessSyntax = true

#這是我自己額外加的code碼顯示功能，使用樣式是monokai(底下[補充說明]有其他格式可選)
[markup]
  [markup.highlight]
    #讓code碼有編號
    lineNos = true
    #code碼的樣式名稱
    style = "monokai"

#(舊設定)讓code編碼有顏色
useHLJS = false

#設置Banner主標題
homeTitle = "JJ的秒懂筆記" 

#設置Banner副標題
subtitle = "複製貼上就能執行的code"

#網頁中間主要的圖片
logo = "img/avatar-icon.png"

#頁籤旁的小圖示
favicon = "img/favicon.ico"

#設定時間格式(底下[補充說明]有其他格式可選)
dateFormat = "2006-01-02"

#是否顯示閱讀時間
readingTime = true

#是否顯示文章字數
wordCount = true

#是否顯示文章底下分享icon
socialShare = true

#是否延遲顯示評論(要再點擊才會顯示評論)
delayDisqus = true

#是否顯示相關文章
showRelatedPosts = true

#是否隱藏文章作者
hideAuthor = true

#是否產生RSS(別人用 Feedly、Inoreader 之類的工具訂閱你部落格更新)
rss = false

#文章FrontMatter的格式(其他兩種："toml"、"json")
metaDataFormat = "yaml"

#定義哪些section是主要內容
mainSections = ["post","posts"]
```

-----------------------------------------------
## 補充說明:
[dateFormat](https://gohugo.io/functions/format#readout)日期格式，可替換成以下幾種:
|輸入語法|輸出樣式|
|---|---|
|.Date|2017-03-03 14:15:59 -0600 CST|
|Monday, January 2, 2006|Friday, March 3, 2017|
|Mon Jan 2 2006|Fri Mar 3 2017|
|January 2006|March 2017|
|2006-01-02|2017-03-03|
|Monday|Friday|
|02 Jan 06 15:04 MST|03 Mar 17 14:15 CST|
|Mon, 02 Jan 2006 15:04:05 MST|Fri, 03 Mar 2017 14:15:59 CST|
|Mon, 02 Jan 2006 15:04:05 -0700|Fri, 03 Mar 2017 14:15:59 -0600|

[markup.highlight](https://gohugo.io/getting-started/configuration-markup#readout)程式碼樣式，可替換成以下幾種:
|樣式名稱|
|---|
|abap、abap、algol、algol_nu、api、arduino、autumn、borland、bw、colorful、dracula、emacs、friendly、fruity、github、igor、lovelace、manni、monokai、monokailight、murphy、native、paraiso-dark、paraiso-light、pastie、perldoc、pygments、rainbow_dash、rrt、solarized-dark、solarized-dark256、solarized-light、swapoff、tango、trac、vim、vs、xcode|

* Google追蹤分析網址[https://analytics.google.com/](https://analytics.google.com/)
* DISQUS評論功能網址[https://blog.disqus.com/](https://blog.disqus.com/)