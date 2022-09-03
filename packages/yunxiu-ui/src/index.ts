import type { App } from "vue";
import { YunDataTable } from "./data-table";

const components = [YunDataTable];

function install(app: App) {
  components.forEach((item) => {
    if (item.install!) {
      app.use(item);
    } else if (item.name) {
      app.component(item.name, item);
    }
  });
}

export default {
  install,
  components,
};
