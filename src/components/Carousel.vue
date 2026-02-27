<template>

    <Swiper
        effect="fade"
        :modules="modules"
        :speed="2500"
        :autoplay="{ delay: 5000 }"
        class="relative">
        <!-- 網頁標題 -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-1 w-full">
            <div class="text-center">
                <p class="text-xl sm:text-3xl text-white text-shadow-md">筆記</p>
                <!-- <div class="mx-auto w-20 h-1 bg-emerald-700 rounded shadow-md my-1"></div>
                <p class="text-sm sm:text-lg text-white text-shadow-md">複製貼上就能懂的code</p> -->
            </div>
        </div>
        <!-- 個人資訊區塊 -->
        <div class="hidden md:block absolute bottom-0 z-10">
            <div class="flex items-center m-5">
                <router-link
                    to="/"
                    class="group block w-26 h-26 rounded-full overflow-hidden border-3 border-white">
                        <img class="scale-600 -translate-y-10" src="/images/img-headshot.jpg" alt="">
                        <div class="relative w-full h-full flex justify-center items-center rotate-45 top-5 text-neutral-200 text-sm bg-neutral-900/0 transition-all group-hover:rotate-0 group-hover:-top-full group-hover:bg-neutral-900">回首頁</div>
                </router-link>
                <div class="pl-4">
                    <h3 class="text-white text-2xl text-shadow-lg text-nowrap">Jack Huang</h3>
                    <ul class="mt-1">
                        <li class="my-1">
                            <router-link
                                to="/about"
                                class="block text-sm bg-white text-center py-1 px-8">關於我
                            </router-link>
                        </li>
                        <li class="my-1">
                            <router-link
                                to="/project"
                                class="block text-sm bg-white text-center py-1 px-8">作品集
                            </router-link>
                        </li>
                    </ul>
                </div>
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
