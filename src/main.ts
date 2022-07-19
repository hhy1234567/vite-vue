import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import Antd from 'ant-design-vue';
import { createPinia } from 'pinia'
import 'element-plus/dist/index.css'
import 'ant-design-vue/dist/antd.css';
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import App from './App.vue'
import router from '@/router';
import 'uno.css'

// import '../mock/index.js'



const pinia = createPinia()


createApp(App).use(router).use(pinia).use(ElementPlus, { locale: zhCn }).use(Antd).mount('#app')
