---
title: Vue3+Swiper輪播程式碼範例
date: 2026-02-03
tags: ["Vue"]
---

1.安裝swiper
```bash
npm i swiper
```

2.建立元件
```vue
<template>
    <Swiper
        :modules="modules"
        :autoplay="{ delay: 1000, disableOnInteraction: false }">
        <SwiperSlide>
            <img src="/images/hexagon.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/images/sphere.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/images/triangle.jpg" alt="" />
        </SwiperSlide>
    </Swiper>
</template>

<script setup>
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

const modules = [ Autoplay ]
</script>
```