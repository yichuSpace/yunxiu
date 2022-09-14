// examples/src/main.ts
import { createApp } from "vue";
import YunxiuNext from "yunxiu-next";
import YunxiuUI from "@yunxiu/yunxiu-ui";
import App from "./App.vue";
import "Yunxiu-next/lib/style/index.css";

const app = createApp(App);
app.use(YunxiuNext);
app.use(YunxiuUI);
app.mount("#app");
