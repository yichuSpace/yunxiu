import { path } from "@vuepress/utils";
import { resolveHtmlBlock, resolveScriptSetup } from "./node";

export const codeBlockPlugin = () => {
  // 存储当前的文档页面引入了哪些 demo 组件
  const store = new Map<string, Set<string>>();

  return {
    name: "@yunxiu/vuepress-plugin-code-block",

    clientConfigFile: path.resolve(__dirname, "./client/clientConfig.ts"),
    // 扩展 markdown
    extendsMarkdown(md) {
      resolveHtmlBlock(md, store);
    },

    async extendsPage(page) {
      resolveScriptSetup(page, store);
    },
    extendsBundlerOptions(bundlerOptions, app) {
      if (app.options.bundler.name === "@vuepress/bundler-vite") {
        bundlerOptions.viteOptions ??= {};
        bundlerOptions.viteOptions.plugins ??= [];
        // bundlerOptions.viteOptions.plugins.push(vitePageHMR(app));
      }
    },
  };
};
