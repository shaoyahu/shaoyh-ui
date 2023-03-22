import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
import DefineOptions from 'unplugin-vue-define-options/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), DefineOptions()],
  build: {
    outDir: "shaoyh-ui", //输出文件名称
    lib: {
      entry: path.resolve(__dirname, "./package/index.ts"), //指定组件编译入口文件
      name: "shaoyh-ui",
      fileName: "shaoyh-ui",
    }, //库编译模式配置
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    }, // rollup打包配置
  },
})
