import { defineClientConfig } from "@vuepress/client";
import YunxiuNext from "yunxiu-next";
import YunxiuUI from "@yunxiu/yunxiu-ui/src";

import "yunxiu-next/lib/styles/index.css";
import "@yunxiu/yunxiu-ui/src/index.scss";

export default defineClientConfig({
  enhance({ app }) {
    app.use(YunxiuNext);
    app.use(YunxiuUI);
  },
});
