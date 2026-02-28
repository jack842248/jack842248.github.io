import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Buffer } from 'buffer'

window.Buffer = Buffer;

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import 'swiper/css/thumbs';
import './style.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
