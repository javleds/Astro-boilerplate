import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import { astroImageTools } from 'astro-imagetools';

import { appUrl, appEnv } from './config';
import { devEnvironment } from './constants';

const config = {
  site: appUrl,
  markdown: {
    shikiConfig: {
      theme: 'monokai',
    },
  },
  integrations: [
    tailwind({}),
    sitemap(),
    robotsTxt(),
    astroImageTools,
  ],
};

if (appEnv === devEnvironment) {
  config.base = '.';
}

export default defineConfig(config);
