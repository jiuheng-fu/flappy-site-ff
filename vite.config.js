import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue()],
  base: './', // 确保这是相对路径
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  server: {
    port: 9099,
    host: '0.0.0.0',
    open: true
  }
})
