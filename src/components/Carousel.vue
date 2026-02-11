<template>
    <Swiper
        effect="fade"
        :modules="modules"
        :speed="2500"
        :autoplay="{ delay: 5000 }"
        class="relative">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-1 w-full">
            <div class="text-center">
                <p class="text-xl sm:text-3xl text-white text-shadow-md">JJ的秒懂筆記</p>
                <div class="mx-auto w-20 h-1 bg-emerald-700 rounded shadow-md my-1"></div>
                <p class="text-sm sm:text-lg text-white text-shadow-md">複製貼上就能懂的code</p>
            </div>
        </div>
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
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/effect-fade';
const modules = [ Autoplay, EffectFade ]
</script>
