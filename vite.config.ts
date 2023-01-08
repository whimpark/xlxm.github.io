
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'
// import legacyPlugin from '@vitejs/plugin-legacy'
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

import { resolve } from 'path'
import {Md5} from 'ts-md5/dist/md5';

// https://vitejs.dev/config/
export default defineConfig({
	base: './',
  mode: 'production',
  plugins: [
    vue(),
    viteCompression({ // gzip静态资源压缩配置
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
    VueSetupExtend(),
		AutoImport({
			resolvers: [ElementPlusResolver()]
		}),
		Components({
			resolvers: [ElementPlusResolver()]
		})
    // legacyPlugin({
    //   targets: ['chrome 52'], // 需要兼容的目标列表，可以设置多个
    //   // additionalLegacyPolyfills: ['regenerator-runtime/runtime'] // 面向IE11时需要此插件
    // })
  ],
  server: {
    port: 4000, // 设置端口号
    host: true, // 开启本机端口地址
    // open: true, // 自动打开浏览器
    proxy: { // 配置跨域
      '/api': {
        target: '', // 服务地址
        changeOrigin: true,
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // 配置根目录
      '@library': resolve(__dirname, 'library'), // 配置根目录
    }
  },
  optimizeDeps: {
      include: ['schart.js']
  },
  build: {
    chunkSizeWarningLimit: 1000, // 提高超大静态资源警告大小
    terserOptions: { // 清除console和debugger
      compress: {
        drop_console: true,
        drop_debugger: true,
      }
    },
    rollupOptions: {
      input: {
        admin: resolve(__dirname, 'web/admin/index.html') ,
        vite: resolve(__dirname, 'web/vite/index.html') 
      },
      output: {
        // 静态资源打包做处理
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        manualChunks(id) {
          if (id.includes('node_modules')) {
            let name=id.toString().split('node_modules/')[1].split('/')[0].toString(); 
            name="vendor-"+new Md5().appendStr(name).end()
            return name;
          }
        }
      }
    }
  }
})

