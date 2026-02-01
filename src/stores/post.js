import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePostStore = defineStore('post',() => {

    const defaultPostInfo = {
        title: 'JJ的秒懂筆記',
        date: '複製貼上就能懂的code',
    };

    const postInfo = ref({...defaultPostInfo});

    function setPostInfo(data) {
        postInfo.value = {
            ...postInfo.value,
            ...data,
        };
    }

    function resetPostInfo() {
        postInfo.value = {
            ...defaultPostInfo,
        };
    }

    return {
        postInfo,
        setPostInfo,
        resetPostInfo,
    };
});
