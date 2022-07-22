import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import { createPinia } from 'pinia'
import 'ant-design-vue/dist/antd.css';
import App from './App.vue'
import router from '@/router';
import 'uno.css'

// import '../mock/index.js'



const pinia = createPinia()


createApp(App).use(router).use(pinia).use(Antd).mount('#app')
