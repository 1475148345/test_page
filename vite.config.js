import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')
const md = require("vite-plugin-markdown");
import vitePluginVue from "./src/plugin/vue-custom-blocks-plugin";
export default defineConfig({
  plugins: [
    vue(),
    md.plugin({ mode: ["html", "vue"]}),
    vitePluginVue
  ],
  resolve:{
    alias:{
      "@": path.resolve(__dirname, "./src"), //设置别名
    }
  },
  css:{
    preprocessorOptions:{
      scss:{
        additionalData: '@import "@/assets/scss/globalVariable.scss";'
      }
    }
  }
})
