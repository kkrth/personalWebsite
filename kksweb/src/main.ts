import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from "./router/index";
import axios from './request/index';
import { createPinia } from 'pinia';
import PiniaPluginPesisted from "pinia-plugin-persistedstate";
import App from './App.vue'

// main.ts

// 如果您正在使用CDN引入，请删除下面一行。
import * as ElementPlusIconsVue from '@element-plus/icons-vue'



const pinia = createPinia();
pinia.use(PiniaPluginPesisted);

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(router);
app.use(pinia);
app.use(axios);
app.use(ElementPlus);
app.mount('#app');
