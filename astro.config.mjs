import { defineConfig } from 'astro/config';
import alpine from '@astrojs/alpinejs';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://stealthdetoxwater.com',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    alpine({ entrypoint: '/src/alpine.js' }),
    sitemap(),
  ],
});
