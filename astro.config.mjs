import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://clinicadosdemayo-es.vercel.app',
  integrations: [sitemap()],
});
