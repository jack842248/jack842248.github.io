<template>
    <p @click="toggleBtn">我是案例</p>
    <p>{{ a }}</p>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const a = ref(false);

</script>