
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://desibooknook.desibooknook.workers.dev',
  integrations: [sitemap()],
});
