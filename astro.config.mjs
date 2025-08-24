// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide';
import starlightImageZoom from 'starlight-image-zoom';

// Define locales for supported languages
export const locales = {
  root: { label: 'English', lang: 'en' },
  id: { label: 'Bahasa Indonesia', lang: 'id' },
  es: { label: 'Español', lang: 'es' },
  'zh-cn': { label: '简体中文', lang: 'zh-CN' },
  ja: { label: '日本語', lang: 'ja' },
};

// https://astro.build/config
export default defineConfig({
  site: 'https://sethispr.github.io/cupid-test/',
  base: '/cupid-test',
  integrations: [
    starlight({
      title: 'Cupid Docs',
      editLink: {
        baseUrl: 'https://github.com/Sethispr/cupid-test/edit/main/',
      },
      lastUpdated: true,
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/sethispr/cupid-test/' },
        { icon: 'discord', label: 'Discord', href: 'https://discord.gg/Yvvnm39PpB' },
      ],
      customCss: [
        './src/styles/custom.css',
      ],
      locales,
      sidebar: [
        {
          label: 'Welcome!',
          translations: {
            id: 'Selamat Datang!',
            es: '¡Bienvenido!',
            'zh-CN': '欢迎！',
            ja: 'ようこそ！',
          },
          autogenerate: { directory: 'intro' },
        },
        {
          label: 'User Customization',
          translations: {
            id: 'Kustomisasi Pengguna',
            es: 'Personalización del Usuario',
            'zh-CN': '用户自定义',
            ja: 'ユーザー設定',
          },
          autogenerate: { directory: 'user customization' },
        },
        {
          label: 'Server Setup',
          translations: {
            id: 'Pengaturan Server',
            es: 'Configuración del Servidor',
            'zh-CN': '服务器设置',
            ja: 'サーバー設定',
          },
          autogenerate: { directory: 'server setup' },
        },
        {
          label: 'General',
          translations: {
            id: 'Umum',
            es: 'General',
            'zh-CN': '常规',
            ja: '一般',
          },
          autogenerate: { directory: 'general' },
        },
        {
          label: 'Clans',
          translations: {
            id: 'Klan',
            es: 'Clanes',
            'zh-CN': '氏族',
            ja: 'クラン',
          },
          autogenerate: { directory: 'clans' },
        },
      ],
      plugins: [
        starlightThemeRapide(),
        starlightImageZoom(),
      ],
    }),
  ],
});
