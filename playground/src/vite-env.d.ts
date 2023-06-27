/// <reference types="vite/client" />

// 处理App.vue文件导出报错
declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}
