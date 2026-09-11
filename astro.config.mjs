// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightThemeGalaxy from "starlight-theme-galaxy";

// https://astro.build/config
export default defineConfig({
  site: "https://neutriny.github.io/NTSites",
  integrations: [
    starlight({
      plugins: [starlightThemeGalaxy()],
      title: "NTSites",
      defaultLocale: "root",
      locales: {
        root: {
          label: "简体中文",
          lang: "zh-CN",
        },
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/Neytriny/NTSites",
        },
      ],
      sidebar: [
        {
          label: "首页",
          link: "/",
        },
        {
          label: "分类",
          items: [{ autogenerate: { directory: "categories" } }],
        },
      ],
    }),
  ],
});
