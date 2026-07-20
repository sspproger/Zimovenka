import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL || 'https://sspproger.github.io';

export default defineConfig({
  site: site,
  base: '/Zimovenka',
  output: 'static',
  integrations: [sitemap({ filter: (page) => !page.endsWith('/privacy/') })],
  build: { format: 'directory' },
});