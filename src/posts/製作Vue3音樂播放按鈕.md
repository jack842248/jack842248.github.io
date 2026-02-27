---
title: 製作Vue3音樂播放按鈕
date: 2026-02-02
tags: ["Vue"]
---

只做一個最簡單的播放：
```vue
<template>
    <button
        type="button"
        @click="playMusic">
        音樂播放
    </button>
</template>

<script setup>
const myAudio = new Audio('../LASER.mp3')
const playMusic = () => {
    myAudio.play();
}
</script>
```

-----------------------------------------------
當使用`new Audio()`時，會將音檔封裝成(HTMLAudioElement)的一個物件，因此我們可以去使用物件裡個各種方法來操控音樂播放
```vue
<template>
  <audio src="LASER.mp3" preload="auto"></audio>
</template>
```

-----------------------------------------------
一進入頁面就自動播放：
```vue
<script setup>
import { onMounted } from 'vue'
onMounted(()=>{
    myAudio.play()
})
</script>
```

-----------------------------------------------
點擊按鈕播放音樂，再按一次則暫停：
```vue
<script setup>
const myAudio = new Audio('../LASER.mp3')
const playMusic = () => {
    if(myAudio.paused){
        //判斷暫停是否為true
        myAudio.play();
    } else {
        myAudio.pause();
    }
}
</script>
```

-----------------------------------------------
其他參數：
|名稱|寫法||
|---|---|---|
|播放|play()|---|
|暫停|pause()|---|
|播放位置|currentTime=10|從第10秒開始播放|
|音量大小|volume=0.5|最小0，最大1|
|靜音|muted=true|---|
|循環播放|loop=true|---|
|播放速度|playbackRate=1.5;|1.5倍速|
|播放速度|playbackRate=1.5;|1.5倍速|