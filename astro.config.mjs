// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: заменить на подтверждённый домен через SITE_URL перед публикацией.
const site = process.env.SITE_URL || 'https://example.com';

export default defineConfig({
  site,
  output: 'static',
  integrations: [sitemap({ filter: (page) => !page.endsWith('/privacy/') })],
  build: { format: 'directory' },
});