import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import { createPinia } from 'pinia'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import App from './App.vue'
import router from '@/router';
import 'uno.css'



const pinia = createPinia()


createApp(App).use(router).use(pinia).use(ElementPlus, { locale: zhCn }).mount('#app')
