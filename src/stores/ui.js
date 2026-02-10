import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUIStore = defineStore('ui', () => {

    const menuShow = ref(false);

    const openMenu = () => {
        if (menuShow.value) return;
        menuShow.value = true;
    };

    const closeMenu = () => {
        if (!menuShow.value) return;
        menuShow.value = false;
    };

    const toggleMenu = () => {
        menuShow.value = !menuShow.value;
    };

    return {
        menuShow,
        openMenu,
        closeMenu,
        toggleMenu,
    };
});
