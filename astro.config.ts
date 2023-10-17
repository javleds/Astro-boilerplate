import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

import { appUrl } from './config';

export default defineConfig({
  site: appUrl,
  markdown: {
    shikiConfig: {
      theme: 'material-theme-palenight',
    },
  },
  integrations: [
    tailwind({}),
    sitemap(),
    robotsTxt(),
  ],
});
