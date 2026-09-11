// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';


// https://astro.build/config
export default defineConfig({
	integrations: [
    starlight({
      title: 'NTSites',
      locales: {
        root: {
          label: '简体中文',
          lang: 'zh-CN',
        },
      },
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Neytriny/NTSites' }],
			sidebar: [
				{
					label: '首页',
					link: "/",
				},
				{
					label: '分类',
					items: [{ autogenerate: { directory: 'categories' } }],
				},
			],
		}),
	],
});
