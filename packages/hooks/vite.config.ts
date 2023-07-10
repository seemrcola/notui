import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: 'index.ts',
      name: 'index',
    },
    minify: false,
  },
  plugins: [],
})

// export default defineConfig({
//   build: {
//     rollupOptions: {
//       input: [
//         'index.ts',
//       ],
//       output: [
//         {
//           format: 'es',
//           dir: 'dist/es',
//           entryFileNames: '[name].js',
//         },
//       ],
//     },
//   },
// })
