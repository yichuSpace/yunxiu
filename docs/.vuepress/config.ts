// docs/.vuepress/config.ts
import { defineUserConfig, defaultTheme, viteBundler } from "vuepress";
import { codeBlockPlugin } from "@yunxiu/vuepress-plugins";

import * as navbar from "./configs/navbar";
import * as sidebar from "./configs/sidebar";

export default defineUserConfig({
  base: "/yunxiu/",

  pagePatterns: [
    "**/*.md",
    "!.vuepress",
    "!node_modules",
    // 查找组件的文件
    "../packages/yunxiu-ui/**/*.md",
    "!../packages/**/node_modules",
  ],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "yunxiu-starter",
      description: "Vue3 组件库开发模板 & Vue3 组件库实践指南",
    },
  },
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),

  theme: defaultTheme({
    locales: {
      "/": {
        navbar: navbar.zh,
        sidebar: sidebar.zh,
        selectLanguageName: "简体中文",
        selectLanguageText: "选择语言",
        selectLanguageAriaLabel: "选择语言",
      },
    },
  }),
  plugins: [
    // @yunxiu/vuepress-plugins
    codeBlockPlugin(),
  ],
});
