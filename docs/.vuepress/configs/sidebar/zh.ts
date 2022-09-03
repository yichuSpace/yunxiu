import type { SidebarConfig } from "vuepress";

export const zh: SidebarConfig = {
  "/components": [
    {
      text: "基础组件",
      children: [
        {
          text: "Button 按钮",
          link: "/components/button/",
        },
        {
          text: "BackTop 回到顶部",
          link: "/components/data-table/",
        },
      ],
    },
  ],
};
