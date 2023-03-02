import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/web/',
  server: {
    port: 3002,
    open: true,
    proxy: {
      '/api': {
        target: 'https://qyapi.weixin.qq.com',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api/, '')
        // pathRewrite: {
        //   '^/api': ''
        // }
      }
    }
  },
  plugins: [vue()],
  build: {
    outDir: 'web'
  },
  resolve: {
    // https://cn.vitejs.dev/config/#resolve-alias
    alias: {
      // 设置路径
      '~': path.resolve(__dirname, './'),
      // 设置别名
      '@': path.resolve(__dirname, './src')
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  }
})
