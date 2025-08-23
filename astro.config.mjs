// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeObsidian from 'starlight-theme-obsidian';
import { createStarlightObsidianPlugin } from 'starlight-obsidian';
import starlightImageZoom from 'starlight-image-zoom';

// https://astro.build/config
export default defineConfig({
  site: 'https://sethispr.github.io/cupid-test/',
  base: '/cupid-test',
  integrations: [
    starlight({
      title: 'Cupid Docs',
      social: [
          { icon: 'github', label: 'GitHub', href: 'https://github.com/sethispr/cupid-test/' },
          { icon: 'discord', label: 'Discord', href: 'https://discord.gg/Yvvnm39PpB' },
        ],
      customCss: [
        './src/styles/custom.css',
      ],
      sidebar: [
        {
          label: 'Welcome!',
          autogenerate: { directory: 'intro' },
        },
        {
          label: 'User Customization',
          autogenerate: { directory: 'user customization' },
        },
        {
          label: 'Server Setup',
          autogenerate: { directory: 'server setup' },
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
        starlightThemeObsidian(),
        starlightImageZoom(),
      ],
    }),
  ],
});
