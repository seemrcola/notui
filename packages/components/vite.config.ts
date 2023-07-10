import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'

// @ts-expect-error
import css from 'rollup-plugin-css-only'

export default defineConfig({
  build: {
    target: 'modules',
    rollupOptions: {
      external: ['vue'],
      input: [
        'Icon/icon.ts',
        'LazyImage/lazy-image.ts',
        'TiresomeTag/tiresome-tag.ts',
        'Moveable/moveable.ts',
      ],
      output: [
        {
          format: 'es',
          dir: 'dist/es',
          entryFileNames: '[name].js',
        },
      ],
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    css({ output: 'notui.css' }),
  ],
})
