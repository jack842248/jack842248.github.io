<template>
  <header>
    <Navbar></Navbar>
    <Carousel></Carousel>
  </header>
  <main class="flex">
    <aside v-if="route.meta.showSidebar">
      <Sidebar class="sticky top-0 h-screen overflow-y-auto"></Sidebar>
    </aside>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="route.fullPath"/>
      </transition>
    </router-view>
  </main>
</template>

<script setup>
import { useRoute } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';
import Carousel from '@/components/Carousel.vue';

const route = useRoute();
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>