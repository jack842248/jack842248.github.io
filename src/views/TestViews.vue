<template>
    <div class="relative z-2">
        <div class="grid grid-cols-1">
            <div v-for="(item, index) in personData" :key="item">
                索引：{{ index }}，
                姓名：{{ item.name }}，
                年齡：{{ item.age }}
            </div>
        </div>
    </div>
</template>

<script setup>
const personData = [
    {
        name: '測試者',
        age: 25,
    },
    {
        name: '測試員',
        age: 30,
    },
    {
        name: '測試王',
        age: 28,
    }

]


const submitForm = () => {
    console.log('表單已送出');
};
</script>
