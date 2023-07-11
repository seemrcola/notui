import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from '@unocss/vite'

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: 'index.ts',
      name: '@notui/components',
      formats: ['cjs', 'es'],
      fileName: format => format === 'es' ? 'es/notui.mjs' : 'lib/notui.cjs',
    },
    rollupOptions: {
      external: ['vue'], // 将 'vue' 设为外部依赖
      output: {
        globals: { // // 在全局作用域下将 'vue' 映射为 'Vue'
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    Unocss(),
  ],
})
