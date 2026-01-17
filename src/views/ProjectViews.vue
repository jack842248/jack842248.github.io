<template>
    <p @click="toggleBtn">我是案例</p>
    <p>{{ a }}</p>
</template>

<script setup>
import { ref, onMounted } from 'vue'

onMounted(()=>{
    console.log("我是案例")
})
const a = ref(false);
const toggleBtn = ()=> {
    a.value = !a.value;
    console.log("點擊按鈕")
}
</script>