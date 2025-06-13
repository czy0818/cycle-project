import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus' // 引入 Element Plus
import 'element-plus/dist/index.css' // 引入样式文
import './style.css'
import router from './router'

createApp(App).use(ElementPlus).use(router).mount('#app')
