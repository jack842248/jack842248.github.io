<template>
  <header>
    <Navbar></Navbar>
    <Carousel></Carousel>
  </header>
  <main class="px-3 mx-auto">
    <router-view></router-view>
  </main>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Carousel from '@/components/Carousel.vue'
</script>
