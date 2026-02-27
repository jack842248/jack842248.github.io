<template>
    <div class="fixed left-0 right-0 z-3">
        <div class="@container flex justify-end">
            <button
                type="button"
                class="group navbar-toggler p-3 m-2"
                :class="[isScrolled?'scrolled':'',uiStore.menuShow?'active ':'']"
                @click="uiStore.toggleMenu()"
                ref="toggleButtonRef">
                <span class="navbar-toggler-line"></span>
                <span class="navbar-toggler-line group-hover:w-5"></span>
                <span class="navbar-toggler-line group-hover:w-6"></span>
            </button>
            <TransitionRoot
                :show="uiStore.menuShow"
                enter="transition-transform duration-500"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition-transform duration-500"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
                class="fixed top-0 bottom-0 right-0 w-full md:w-64 transition-all">
                <nav class="h-full bg-neutral-800/95 py-30 flex items-center flex-col" ref="menuRef">
                    <div class="lg:hidden flex flex-col items-center border-b-1 pb-4 mb-4">
                        <div class="relative block w-20 h-20 rounded-full overflow-hidden border-3 border-white mb-3">
                            <img class="scale-800 -translate-y-8" src="/images/img-headshot.jpg" alt="">
                        </div>
                        <h3 class="text-white text-xl text-shadow-lg text-nowrap">Jack Huang</h3>
                    </div>
                    <ul>
                        <li>
                            <router-link
                                to="/"
                                class="block text-neutral-200 group hover:text-emerald-700 py-4 px-4">
                                部落格 / <span class="text-neutral-300 text-xs group-hover:text-emerald-700">BLOG</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link
                                to="/project"
                                class="block text-neutral-200 group hover:text-emerald-700 py-4 px-4">
                                作品集 / <span class="text-neutral-300 text-xs group-hover:text-emerald-700">PROJECT</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link
                                to="/about"
                                class="block text-neutral-200 group hover:text-emerald-700 py-4 px-4">
                                關於我 / <span class="text-neutral-300 text-xs group-hover:text-emerald-700">ABOUT</span>
                            </router-link>
                        </li>
                    </ul>
                </nav>
            </TransitionRoot>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { TransitionRoot } from '@headlessui/vue';
import { useUIStore } from '@/stores/ui';
import { useRoute } from 'vue-router';

const uiStore = useUIStore();
const route = useRoute();

//監聽滾動事件以改變選單按鈕的樣式
const isScrolled = ref(false);
const onScroll = () => {
    console.log("我滾動了isScrolled",isScrolled.value);
    
    isScrolled.value = window.scrollY > 100
}

//觀察路由如果變換就關閉menu
watch(() => route.fullPath, () => {
    uiStore.closeMenu()
})

//點擊選單以外的區域就關閉選單
const menuRef = ref(null)
const toggleButtonRef = ref(null)
const onClickOutside = (event) => {
    if (!uiStore.menuShow) return
    if (menuRef.value && menuRef.value.contains(event.target)) return
    if (toggleButtonRef.value && toggleButtonRef.value.contains(event.target)) return
    uiStore.closeMenu()
}
onMounted(() => {
    document.addEventListener('click', onClickOutside);
    window.addEventListener('scroll', onScroll, { passive: true });

})
onUnmounted(() => {
    document.removeEventListener('click', onClickOutside);
    window.removeEventListener('scroll', onScroll);
})
</script>
