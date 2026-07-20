import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL || 'https://zimovenka.ru';

export default defineConfig({
  site: site,
  base: '/',
  output: 'static',
  integrations: [sitemap({ filter: (page) => !page.endsWith('/privacy/') })],
  build: { format: 'directory' },
});