import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "@/router/index";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css"; // or 'ant-design-vue/dist/antd.less'
import "ant-design-vue/dist/antd.less";
import { createPinia } from "pinia";

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(Antd);
app.use(router);
app.mount("#app");
