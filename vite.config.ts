import { defineConfig, splitVendorChunkPlugin } from 'vite'
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: 'MyIndex',
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        manualChunks(id) {
          const match = id.match(/src\/components\/(.+\.vue)/);
          if (match) {
            return match[1].replace('.vue', '');
          }
        },
      },
    },
  },
})

