# shaoyh-ui
于 2023-3-22 号首次上传

## 组件库在线文档地址
[shaoyh 组件库在线文档](http://ui.shaoyahu.com.cn/)

## 说明
本组件库是为 vue3 准备的 , 适用于 vue3 项目 , 其他的能不能用我不知道

本项目中的部分组件想法来源于 github 开源项目 -> [bradtraversy / 50projects50days](https://github.com/bradtraversy/50projects50days) , 感谢给我的启蒙

## 使用指南

### 安装组件库
```
npm i shaoyh-ui
```

### 在 main 文件中配置
> main.ts 或 main.js
```typescript
import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import "shaoyh-ui/style.css" //引入组件样式
import ShaoyhUI from "shaoyh-ui" //引入下载后的组件

const app = createApp(App)
app.use(ShaoyhUI) //注册
app.mount("#app")
```

> 注意 ! 此处在引入可能会报错误 : Could not find a declaration file for module 'shaoyh-ui'
> 解决方法 : 在 src 文件下的 .d.ts 文件中在末尾添加 declare module 'shaoyh-ui'

> vite-env.d.ts 或其他什么 .d.ts
```typescript
/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module 'shaoyh-ui'
```