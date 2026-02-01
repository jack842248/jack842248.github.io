<template>
    <div class="fixed left-0 right-0 z-3">
        <div class="@container flex justify-end">
            <button
                type="button"
                :class="menu?'group navbar-toggler p-3 active m-2':'group navbar-toggler p-3 m-2'"
                @click="toggleMenu">
                <span class="navbar-toggler-line"></span>
                <span class="navbar-toggler-line group-hover:w-5"></span>
                <span class="navbar-toggler-line group-hover:w-6"></span>
            </button>
            <TransitionRoot
                :show="menu"
                enter="transition-transform duration-500"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition-transform duration-500"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
                class="fixed top-0 bottom-0 right-0 w-64">
                <nav class="h-full">
                    <ul class="h-full bg-neutral-800/95 px-10 py-30">
                        <li>
                            <router-link
                                to="/"
                                class="text-neutral-200 group hover:text-emerald-700 py-4 px-4">
                                部落格 / <span class="text-neutral-300 text-xs group-hover:text-emerald-700">BLOG</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link
                                to="/project"
                                class="text-neutral-200 group hover:text-emerald-700 py-4 px-4">
                                作品集 / <span class="text-neutral-300 text-xs group-hover:text-emerald-700">PROJECT</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link
                                to="/about"
                                class="text-neutral-200 group hover:text-emerald-700 py-4 px-4">
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
import { ref } from 'vue';
import { TransitionRoot } from '@headlessui/vue';

const menu = ref(false);

const toggleMenu = () => {
    menu.value = !menu.value;
    console.log("切換選單");
}
</script>
