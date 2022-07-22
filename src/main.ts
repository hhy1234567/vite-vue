import { createApp } from 'vue'
// import Antd from 'ant-design-vue';
import { createPinia } from 'pinia'
// import 'ant-design-vue/dist/antd.css';
import App from './App.vue'
import router from '@/router';
import 'uno.css'




const pinia = createPinia()

// .use(Antd)
createApp(App).use(router).use(pinia).mount('#app')
