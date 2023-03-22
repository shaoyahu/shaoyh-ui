import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import ShaoyhUI from "../package/index.js"; //导入

const app = createApp(App);
app.use(ShaoyhUI); //注册
app.mount("#app");