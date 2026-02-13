---
title: 嵌入Youtube影片
date: 2024-01-07
tags: ["HTML"]
---
## 直接設定的屬性
|屬性|說明|
|---|---|
|width|寬度|
|height|高度|
|src|來源網址|
|title|影片標題|
|frameborder|iframe邊框|
|allow|開啟youtube預設允許功能|
|allowfullscreen|允許全螢幕播放(有添加就有這項功能，移除就無這項功能)|
### 加在src後面的屬性，多個屬性以&符號隔開
|屬性|說明|
|---|---|
|start|從第幾秒開始，例：設300=從第5分鐘開始|
|autoplay|0=不自動播放(預設)；1=自動播放|
|control|0=顯示播放控制器；1=不顯示播放控制器(預設)|
|disablekb|0=停用鍵盤控制；1=啟用鍵盤控制(預設)|
|end|從第幾秒後停止|
|loop|0=不重複播放(預設)；1=重複播放|
|id|影片清單id|
|cc_load_policy|0=關閉字幕(預設)；1=開啟字幕|
|cc_lang_pref|字幕語系，zh=中文；en=英文|
|color|進度條顏色，red=紅色(預設)；white=白色|
|fs|0=隱藏全螢幕按鈕；1=顯示全螢幕按鈕(預設)|
|mute|0=有聲音(預設)；1=靜音|

`若要設定自動播放，必須要設置成靜音mute=1`
```html
<iframe 
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/7KBicsXd9h8?start=10&autoplay=1&mute=0&fs=0" title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin">
</iframe>
```