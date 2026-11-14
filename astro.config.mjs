import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://desibooknook.harleenbhullar0.workers.dev/',
  integrations: [sitemap()],
});