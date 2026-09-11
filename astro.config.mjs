// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightThemeGalaxy from "starlight-theme-galaxy";

// https://astro.build/config
export default defineConfig({
  site: "https://neutriny.github.io",
  base: "/NTSites",
  integrations: [
    starlight({
      plugins: [starlightThemeGalaxy()],
      title: "NTSites",

      head: [
        {
          tag: "script",
          content: `document.addEventListener("DOMContentLoaded", () => {
            document.querySelectorAll('a[href^="http"]').forEach((link) => {
              if (!link.getAttribute("href")?.includes(location.hostname)) {
                link.setAttribute("target", "_blank");
                link.setAttribute("rel", "noopener noreferrer");
              }
            });
          });`,
        },
      ],
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
