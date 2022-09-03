import type { App } from "vue";
import _yunDataTable from "./src/data-table.vue";

export const withInstall = <T>(component: T, alias?: string) => {
  const comp = component as any;
  comp.install = (app: App) => {
    app.component(comp.name || comp.displayName, component);
    if (alias) {
      app.config.globalProperties[alias] = component;
    }
  };
  return component as T & Plugin;
};

export const YunDataTable = withInstall(_yunDataTable);
export default YunDataTable;

export * from "./src/props";
