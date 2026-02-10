<template>
  <header>
    <Navbar></Navbar>
    <Carousel></Carousel>
  </header>
  <main class="flex">
    <aside v-if="route.meta.showSidebar">
      <Sidebar class="sticky top-0 h-screen overflow-y-auto"></Sidebar>
    </aside>
    <router-view></router-view>
  </main>
</template>

<script setup>
import { useRoute } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';
import Carousel from '@/components/Carousel.vue';

const route = useRoute();
console.log(route);

</script>
