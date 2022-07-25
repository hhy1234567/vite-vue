import { createApp } from 'vue'
// import Antd from 'ant-design-vue';
import { createPinia } from 'pinia'
// import 'ant-design-vue/dist/antd.css';
import App from './App.vue'
import router from '@/router';
import 'uno.css'

const app = createApp(App);


const pinia = createPinia()

// .use(Antd)

app.use(router).use(pinia);
app.mount('#app');

// console.log(
//   import.meta.env,
//   // process.env.VUE_APP_API_URL,
//   "环境变量"
// );