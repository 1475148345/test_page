import { createApp } from "vue";
import App from "./App.vue";
console.log(App);
import router from "./router/index";
// import "github-markdown-css";
import "pui-vue-pxs/pui.css";
createApp(App).use(router).mount("#app");
