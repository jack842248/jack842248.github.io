<template>
    <div class="bg-neutral-800 py-10">
        <swiper
            :loop="true"
            :effect="'coverflow'"
            :grabCursor="true"
            :centeredSlides="true"
            :slidesPerView="'auto'"
            :autoplay="{ delay: 3000 }"
            :coverflowEffect="{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }"
            :modules="modules"
            :thumbs="{ swiper: thumbsSwiper }"
            class="project-swiper mb-3">
            <swiper-slide>
                <img src="/images/swiper1.jpg" />
            </swiper-slide>
            <swiper-slide>
                <img src="/images/swiper2.jpg" />
            </swiper-slide>
            <swiper-slide>
                <img src="/images/swiper3.jpg" />
            </swiper-slide>
        </swiper>
        <swiper
            @swiper="setThumbsSwiper"
            :loop="true"
            :spaceBetween="10"
            :slidesPerView="4"
            :freeMode="true"
            :watchSlidesProgress="true"
            :modules="modules"
            class="thumbs-swiper"
        >
            <swiper-slide>
                <img src="/images/swiper1.jpg" />
            </swiper-slide>
            <swiper-slide>
                <img src="/images/swiper2.jpg" />
            </swiper-slide>
            <swiper-slide>
                <img src="/images/swiper3.jpg" />
            </swiper-slide>
        </swiper>

        <div class="w-full">
            <TabGroup>
                <TabList class="flex space-x-1 bg-emerald-900/20 p-1">
                    <Tab
                        as="template"
                        v-slot="{ selected }">
                        <button
                            :class="['w-full py-2.5 text-sm font-medium leading-5 rounded-lg',
                            selected
                                ? 'bg-emerald-700 text-neutral-100'
                                : 'text-neutral-100 hover:text-emerald-700',
                            ]">專案
                        </button>
                    </Tab>
                    <Tab
                        as="template"
                        v-slot="{ selected }">
                        <button
                            :class="['w-full py-2.5 text-sm font-medium leading-5 rounded-lg',
                            selected
                                ? 'bg-emerald-700 text-neutral-100'
                                : 'text-neutral-100 hover:text-emerald-700',
                            ]">創作
                        </button>
                    </Tab>
                </TabList>
                <TabPanels class="mt-2">
                    <TabPanel
                        :class="[
                            ' ',
                            'ring-white/60 ring-offset-2 ring-offset-emerald-400 focus:outline-none focus:ring-2',
                        ]">
                        <ul class="grid grid-cols-2 md:grid-cols-3">
                            <li>
                                <router-link
                                    to=""
                                    class="group relative block overflow-hidden"
                                >
                                    <img
                                        class="group-hover:scale-110 duration-1000 transition-all"
                                        src="/images/img-project9.png"
                                        alt=""
                                    />
                                    <!-- <div class="absolute -top-10 w-30 flex justify-center items-center py-2 pl-2 bg-neutral-900/90 text-neutral-100 text-sm group-hover:translate-y-full transition-all">
                                        前往網址
                                    </div> -->
                                    <div
                                        class="absolute w-full flex justify-center items-center py-2 pl-2 bg-neutral-900/90 text-neutral-100 text-sm group-hover:-translate-y-full transition-all"
                                    >
                                        鉅晨科技有限公司
                                    </div>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="" class="group relative block overflow-hidden">
                                    <img
                                        class="group-hover:scale-110 duration-1000 transition-all"
                                        src="/images/dprc.png"
                                        alt=""
                                    />
                                    <div
                                        class="absolute w-full py-2 pl-2 bg-neutral-900/90 text-neutral-100 text-sm group-hover:-translate-y-full transition-all"
                                    >
                                        成功大學防災研究中心
                                    </div>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="" class="group relative block overflow-hidden">
                                    <img
                                        class="group-hover:scale-110 duration-1000 transition-all"
                                        src="/images/img-project2.png"
                                        alt=""
                                    />
                                    <div
                                        class="absolute w-full py-2 pl-2 bg-neutral-900/90 text-neutral-100 text-sm group-hover:-translate-y-full transition-all"
                                    >
                                        台鉅美妝觀光工廠LineOA
                                    </div>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="" class="group relative block overflow-hidden">
                                    <img
                                        class="group-hover:scale-110 duration-1000 transition-all"
                                        src="/images/img-project4.png"
                                        alt=""
                                    />
                                    <div
                                        class="absolute w-full py-2 pl-2 bg-neutral-900/90 text-neutral-100 text-sm group-hover:-translate-y-full transition-all"
                                    >
                                        先鋒智慧科技有限公司
                                    </div>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="" class="group relative block overflow-hidden">
                                    <img
                                        class="group-hover:scale-110 duration-1000 transition-all"
                                        src="/images/img-project11.png"
                                        alt=""
                                    />
                                    <div
                                        class="absolute w-full py-2 pl-2 bg-neutral-900/90 text-neutral-100 text-sm group-hover:-translate-y-full transition-all"
                                    >
                                        House579房屋交易買賣平台
                                    </div>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="" class="group relative block overflow-hidden">
                                    <img
                                        class="group-hover:scale-110 duration-1000 transition-all"
                                        src="/images/img-project5.png"
                                        alt=""
                                    />
                                    <div
                                        class="absolute w-full py-2 pl-2 bg-neutral-900/90 text-neutral-100 text-sm group-hover:-translate-y-full transition-all"
                                    >
                                        居家通服務媒合平台LineOA
                                    </div>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="" class="group relative block overflow-hidden">
                                    <img
                                        class="group-hover:scale-110 duration-1000 transition-all"
                                        src="/images/img-project6.png"
                                        alt=""
                                    />
                                    <div
                                        class="absolute w-full py-2 pl-2 bg-neutral-900/90 text-neutral-100 text-sm group-hover:-translate-y-full transition-all"
                                    >
                                        空間特工3D模擬鋼架
                                    </div>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="" class="group relative block overflow-hidden">
                                    <img
                                        class="group-hover:scale-110 duration-1000 transition-all"
                                        src="/images/img-project10.png"
                                        alt=""
                                    />
                                    <div
                                        class="absolute w-full py-2 pl-2 bg-neutral-900/90 text-neutral-100 text-sm group-hover:-translate-y-full transition-all"
                                    >
                                        KUMON學力超進化
                                    </div>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="" class="group relative block overflow-hidden">
                                    <img
                                        class="group-hover:scale-110 duration-1000 transition-all"
                                        src="/images/img-project7.png"
                                        alt=""
                                    />
                                    <div
                                        class="absolute w-full py-2 pl-2 bg-neutral-900/90 text-neutral-100 text-sm group-hover:-translate-y-full transition-all"
                                    >
                                        MagicABC兒童語言學習
                                    </div>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="" class="group relative block overflow-hidden">
                                    <img
                                        class="group-hover:scale-110 duration-1000 transition-all"
                                        src="/images/img-project8.png"
                                        alt=""
                                    />
                                    <div
                                        class="absolute w-full py-2 pl-2 bg-neutral-900/90 text-neutral-100 text-sm group-hover:-translate-y-full transition-all"
                                    >
                                        救國團探索教育中心網站
                                    </div>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="" class="group relative block overflow-hidden">
                                    <img
                                        class="group-hover:scale-110 duration-1000 transition-all"
                                        src="/images/img-project3.png"
                                        alt=""
                                    />
                                    <div
                                        class="absolute w-full py-2 pl-2 bg-neutral-900/90 text-neutral-100 text-sm group-hover:-translate-y-full transition-all"
                                    >
                                        立吉達旅遊公司
                                    </div>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="" class="group relative block overflow-hidden">
                                    <img
                                        class="group-hover:scale-110 duration-1000 transition-all"
                                        src="/images/img-project12.png"
                                        alt=""
                                    />
                                    <div
                                        class="absolute w-full py-2 pl-2 bg-neutral-900/90 text-neutral-100 text-sm group-hover:-translate-y-full transition-all"
                                    >
                                        IKEA測你的睡眠指數
                                    </div>
                                </router-link>
                            </li>
                        </ul>
                    </TabPanel>
                    <TabPanel
                        :class="[
                            ' bg-white p-3',
                            'ring-white/60 ring-offset-2 ring-offset-emerald-400 focus:outline-none focus:ring-2',
                        ]">
                        我是內容2
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </div>

    </div>
</template>

<script setup>
import { ref } from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow, Pagination, FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";

const modules = [EffectCoverflow, Pagination, FreeMode, Navigation, Thumbs, Autoplay];
const thumbsSwiper = ref(null)
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper
}
</script>