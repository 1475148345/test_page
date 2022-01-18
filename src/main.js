import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import "github-markdown-css";
import Pui from "./lib/index";
createApp(App).use(router).use(Pui).mount('#app')
