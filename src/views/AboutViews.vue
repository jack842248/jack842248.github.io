<template>
    <p @click="toggleBtn">我是關於我</p>
    <p>{{ a }}</p>
</template>

<script setup>
    import { ref } from 'vue'
    const a = ref(false);
    const toggleBtn = ()=> {
        a.value = !a.value;
    }
</script>