// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import starlightThemeObsidian from 'starlight-theme-obsidian';
import { createStarlightObsidianPlugin } from 'starlight-obsidian';

const [vault1_StarlightObsidian, vault1_ObsidianSidebarGroup] = createStarlightObsidianPlugin()
const [vault2_StarlightObsidian, vault2_ObsidianSidebarGroup] = createStarlightObsidianPlugin()

// https://astro.build/config
export default defineConfig({
	site: 'https://sethispr.github.io/cupid-test/',
	base: '/cupid-test',
	integrations: [
		starlight({
			title: 'Cupid Docs',
			social: [
				{
					icon: 'github', label: 'GitHub', href: 'https://github.com/sethispr/cupid-test',
				}
			],
			customCss: [
				// Path to custom CSS file
				'./src/styles/custom.css',
			],
			sidebar: [
  {
    label: 'Intro',
    items: [
      { label: 'Intro', slug: 'intro/section' },
    ],
  },
  {
    label: 'Profile',
    autogenerate: { directory: 'profile' },
  },
  {
    label: 'General',
    autogenerate: { directory: 'general' },
  },
],
			plugins: [
				// Set theme
				starlightThemeObsidian(),
			]
		}),
	],
});