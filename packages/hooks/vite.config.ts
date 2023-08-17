import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: 'index.ts',
      name: '@notui/hooks',
      formats: ['cjs', 'es'],
      fileName: format => format === 'es' ? 'index.mjs' : 'index.cjs',
    },
    minify: false,
  },
  plugins: [],
})
