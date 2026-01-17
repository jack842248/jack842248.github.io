<template>
    <div class="sticky top-0 z-3">
        <nav class="bg-neutral-800 shadow py-1">
            <div class="container mx-auto">
                <div class="flex justify-between items-center mx-4">
					<!-- LOGO -->
                    <router-link
                        to="/"
                        class="group hover:text-emerald-700 shrink-0">
                        <h1 class="flex font-medium text-neutral-200">
                            JACK HUANG BLOG
                        </h1>
                    </router-link>

					<!-- 選單開關 -->
                    <div class="sm:hidden">
                        <button
                            type="button"
                            class="block relative py-4 z-10"
                            @click="toggleMenu"
                        >
                            <Bars3BottomRightIcon class="size-5 text-neutral-200" />
                        </button>
                    </div>
					<!-- 選單清單 -->
                    <div class="absolute top-0 left-0 w-full h-full sm:relative mt-13 sm:mt-0">
						<TransitionRoot
                            :show="menu"
                            enter="transition-transform duration-1000"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition-transform"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                            class="fixed top-0 bottom-0 right-0 w-64
                                flex flex-col justify-center
                                bg-neutral-800/90
                                sm:static sm:w-auto sm:bg-neutral-800
                                sm:translate-x-0 sm:transition-none z-10">
                            <ul class="flex flex-col sm:flex-row sm:justify-end z-10"
								@click="closeMenu">
                                <li>
									<router-link
										to="/"
										class="block text-sm text-neutral-200 hover:text-emerald-700 py-4 px-4">BLOG部落格
									</router-link>
                                </li>
                                <li>
									<router-link
										to="/project"
										class="block text-sm text-neutral-200 hover:text-emerald-700 py-4 px-4">PROJECT作品集
									</router-link>
                                </li>
                                <li>
									<router-link
										to="/about"
										class="block text-sm text-neutral-200 hover:text-emerald-700 py-4 px-4">ABOUT關於我
									</router-link>
                                </li>
                            </ul>
						</TransitionRoot>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { Bars3BottomRightIcon } from "@heroicons/vue/24/solid";
import { TransitionRoot } from '@headlessui/vue'

const menu = ref(false);

const toggleMenu = () => {
    menu.value = !menu.value;
};

const resizeMenu = () => {
    if (window.innerWidth >= 640) {
        menu.value = true;
    } else {
        menu.value = false;
    }
};

const closeMenu = () => {
	if(window.innerWidth <= 640){
		menu.value = false;
	}
	console.log("關閉選單");
}



onMounted(() => {
	resizeMenu();
    window.addEventListener("resize", resizeMenu);
});
</script>