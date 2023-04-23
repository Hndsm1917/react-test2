import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use 'sass:math'; @use "@/assets/styles/base" as *;`,
      },
    },
  },
})