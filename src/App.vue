<template>
  <header>
    <Navbar></Navbar>
    <Carousel></Carousel>
  </header>
  <main class="flex">
    <aside v-if="isShow">
      <Sidebar class="sticky top-0"></Sidebar>
    </aside>
    <router-view></router-view>
  </main>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import Carousel from '@/components/Carousel.vue'

import { ref } from 'vue'
const isShow = ref(true);
</script>
